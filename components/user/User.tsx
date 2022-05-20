import React, { FC } from "react";
import { useAppContext } from "../../context/AppContext";
import Info from "./Info";
import Repos from "./Repos";

const User = () => {
  const {
    state: {
      user: { avatar_url, bio, name, location, twitter_username, repos },
      pages,
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
      <Repos repos={repos} pages={pages} />
    </div>
  );
};

export default User;
