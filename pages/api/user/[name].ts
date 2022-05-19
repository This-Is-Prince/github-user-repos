import { NextApiRequest, NextApiResponse } from "next";
import { User } from "../../../types/types";

let prevUserData: {
  login: string;
  acc: User;
  error: { msg: string };
} = {
  login: "",
  acc: {
    avatar_url: "",
    name: "",
    bio: "",
    location: "",
    twitter_username: "",
    total_repos: 0,
  },
  error: { msg: "" },
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { name } = req.query;
  if (name === prevUserData.login) {
    if (prevUserData.error.msg === "Not Found") {
      res.status(404).json({ error: prevUserData.error });
      return;
    } else if (prevUserData.error.msg === "Internal Server Error") {
      res.status(500).json({ error: prevUserData.error });
      return;
    }
    res.status(200).json(prevUserData.acc);
    return;
  }
  try {
    console.log("Find");
    let response = await fetch(`https://api.github.com/users/${name}`);
    let user = await response.json();
    prevUserData.login = name as string;
    if (user.message === "Not Found") {
      prevUserData.error.msg = user.message;
      res.status(404).json({ error: prevUserData.error });
      return;
    } else {
      let response = await fetch(user.repos_url + "?per_page=100");
      let repos = await response.json();
      console.log(repos.length);
      console.log(repos[0]);
      prevUserData.acc.avatar_url = user.avatar_url;
      prevUserData.acc.name = user.name;
      prevUserData.acc.bio = user.bio;
      prevUserData.acc.location = user.location;
      prevUserData.acc.twitter_username = user.twitter_username;
      prevUserData.error.msg = "";
    }
    res.status(200).json(prevUserData.acc);
  } catch (error) {
    prevUserData.error.msg = "Internal Server Error";
    res.status(500).json({ error });
  }
}
