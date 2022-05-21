import React, { FC } from "react";
import { FaMapMarkerAlt, FaTwitter } from "react-icons/fa";

const Address: FC<{ location: string; twitter_username: string }> = ({
  location,
  twitter_username,
}) => {
  return (
    <div className="border-[1px] border-white p-2 flex items-center justify-between">
      <address className="flex gap-x-2 items-center">
        <span>
          <FaMapMarkerAlt />
        </span>
        <span>{location}</span>
      </address>
      <a
        className="flex gap-x-2 items-center"
        href={`https://twitter.com/${twitter_username}`}
      >
        <span>
          <FaTwitter />
        </span>
        <span>@{twitter_username}</span>
      </a>
    </div>
  );
};

export default Address;
