import React, { FC } from "react";
import { useAppContext } from "../../context/AppContext";
import Info from "./Info";
import Repos from "./Repos";

const User = () => {
  const {
    state: {
      user: {
        avatar_url,
        bio,
        name,
        location,
        public_repos,
        twitter_username,
        repos,
      },
    },
  } = useAppContext()!;
  return (
    <div>
      <Info
        bio={bio}
        name={name}
        location={location}
        avatar_url={avatar_url}
        twitter_username={twitter_username}
      />
      <Repos repos={repos} public_repos={public_repos} />
    </div>
  );
};

export default User;
