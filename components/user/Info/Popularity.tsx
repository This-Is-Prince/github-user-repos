import React, { FC } from "react";
import { MdPeopleOutline } from "react-icons/md";

const Popularity: FC<{ followers: number; following: number }> = ({
  followers,
  following,
}) => {
  return (
    <div className="border-[1px] border-white p-2">
      <p className="flex items-center gap-x-2">
        <span>
          <MdPeopleOutline />
        </span>
        <span>
          {followers / 1000 >= 1
            ? (followers / 1000).toFixed(1) + "k"
            : followers}{" "}
          followers
        </span>
        <span>. {following} following</span>
      </p>
    </div>
  );
};

export default Popularity;
