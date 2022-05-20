import React, { FC } from "react";
import { Repo } from "../../types/types";

const Repo: FC<Repo> = ({ description, html_url, languages, name }) => {
  return (
    <article className="bg-white grid grid-rows-[auto,_1fr,auto] gap-y-2 p-2 border-2 rounded-md">
      <a
        href={html_url}
        className="font-medium tracking-wide italic text-2xl text-[#238636]"
      >
        {name}
      </a>
      <p>{description}</p>
      <div className="flex gap-x-3 flex-wrap gap-y-3">
        {languages.map((language) => {
          return (
            <span
              key={language}
              className="px-2 py-1 bg-[#0d1117] text-xs text-white rounded-md flex items-center"
            >
              {language}
            </span>
          );
        })}
      </div>
    </article>
  );
};

export default Repo;
