import React, { FC } from "react";
import { ReposProps } from "../../types/types";
import Pagination from "../pagination";
import Repo from "./Repo";

const Repos: FC<ReposProps> = ({ repos, pages }) => {
  return (
    <section className="px-10 py-5">
      <div className="grid gap-y-5 gap-x-5 md:grid-cols-2 xl:grid-cols-3">
        {repos.map(({ description, html_url, languages, name }) => {
          return (
            <Repo
              key={name}
              description={description}
              html_url={html_url}
              languages={languages}
              name={name}
            />
          );
        })}
      </div>
      <div className="flex items-center justify-center mt-10">
        <Pagination pages={pages} />
      </div>
    </section>
  );
};

export default Repos;
