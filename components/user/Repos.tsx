import React, { FC } from "react";
import { ReposProps } from "../../types/types";
import Repo from "./Repo";

const Repos: FC<ReposProps> = ({ repos, public_repos }) => {
  return (
    <section>
      <div>
        {repos.map((repo) => {
          return <Repo key={repo.name} />;
        })}
      </div>
      <div></div>
    </section>
  );
};

export default Repos;
