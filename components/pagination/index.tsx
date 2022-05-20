import React, { FC } from "react";
import { PaginationProps } from "../../types/types";
import Page from "./page";

const Pagination: FC<PaginationProps> = ({ pages }) => {
  return (
    <nav aria-label="Page navigation example">
      <ul className="inline-flex items-center -space-x-px">
        {pages.map(({ value, which }) => {
          return (
            <li key={value}>
              <Page value={value} which={which} />
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default Pagination;
