import React, { FC } from "react";
import { Repo } from "../../types/types";

const Repo: FC<Repo> = ({ description, html_url, languages, name }) => {
  return (
    <article className="px-4 py-2 border-[1px] grid grid-rows-[auto,_1fr,_auto] gap-y-5">
      <a
        href={html_url}
        className="text-[#4b8eda] font-bold text-xl tracking-widest"
      >
        {name}
      </a>
      <p className="text-white text-sm">{description}</p>
      <div className="flex gap-x-2 flex-wrap gap-y-2">
        {languages.map((language) => {
          return (
            <span
              key={language}
              className="border-[1px] text-white text-[10px] px-2 py-[1px] rounded-sm"
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
