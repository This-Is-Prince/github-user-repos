import { FaMapMarkerAlt, FaTwitter } from "react-icons/fa";
import React, { FC } from "react";
import { InfoProps } from "../../types/types";

const Info: FC<InfoProps> = ({
  avatar_url,
  name,
  bio,
  location,
  twitter_username,
}) => {
  return (
    <section className="text-white px-10 py-5 grid gap-y-5">
      <article className="flex justify-center">
        <img
          className="rounded-full w-2/4"
          src={avatar_url}
          alt="user avatar"
        />
      </article>
      <article className="flex flex-col gap-y-2">
        <div className="flex items-center">
          <h2 className="font-bold text-xl flex-1 text-center">{name}</h2>
          <p className="flex-1 text-center">{bio}</p>
        </div>
        <div className="flex items-center">
          <address className="flex gap-x-2 items-center justify-center flex-1">
            <FaMapMarkerAlt />
            {location}
          </address>
          <a
            className="flex justify-center flex-1"
            href={`https://twitter.com/${twitter_username}`}
          >
            <FaTwitter />
          </a>
        </div>
      </article>
    </section>
  );
};

export default Info;
