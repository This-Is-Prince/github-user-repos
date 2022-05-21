import React, { FC } from "react";

const Avatar: FC<{ url: string }> = ({ url }) => {
  return (
    <article className="flex justify-center">
      <img
        className="rounded-full w-2/4 border-2 border-white"
        src={url}
        alt="user avatar"
      />
    </article>
  );
};

export default Avatar;
