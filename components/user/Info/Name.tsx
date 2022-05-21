import React, { FC } from "react";
import { FaGithub } from "react-icons/fa";

const Name: FC<{ name: string; url: string; login: string; bio: string }> = ({
  login,
  name,
  url,
  bio,
}) => {
  return (
    <div className="border-[1px] border-white p-2">
      <h2 className="font-bold text-xl flex-1 text-center">{name}</h2>
      <p className="flex-1 flex items-center gap-x-2 justify-center">
        <span>
          <FaGithub />
        </span>
        <a href={url}>@{login}</a>
      </p>
      <p className="text-center mt-5">{bio}</p>
    </div>
  );
};

export default Name;
