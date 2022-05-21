import React, { FC } from "react";
import { InfoProps } from "../../../types/types";
import Avatar from "./Avatar";
import Name from "./Name";
import Popularity from "./Popularity";
import Address from "./Address";

const Info: FC<InfoProps> = ({ user }) => {
  const {
    avatar_url,
    bio,
    followers,
    following,
    html_url,
    login,
    name,
    public_repos,
    twitter_username,
    type,
    location,
  } = user;
  return (
    <section className="text-white px-10 py-5 grid gap-y-5 md:grid-cols-[auto,_1fr] items-center">
      <Avatar url={avatar_url} />
      <article className="flex flex-col gap-y-2">
        <Name bio={bio} name={name} login={login} url={html_url} />
        <Popularity followers={followers} following={following} />
        <Address location={location} twitter_username={twitter_username} />
      </article>
    </section>
  );
};

export default Info;
