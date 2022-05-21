import { useRouter } from "next/router";
import React, { FC } from "react";

const PrevNextWrapper: FC<any> = ({ children, value, rounded }) => {
  const router = useRouter();
  return (
    <a
      href="#"
      className={`block py-2 px-3 ml-0 leading-tight text-gray-500 bg-white ${rounded} border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white`}
      onClick={(e) => {
        e.preventDefault();
        const { name, page } = router.query;
        const pageNo = Number(page);
        if (rounded === "rounded-r-lg") {
          if (value - 1 < pageNo + 5) {
            return;
          }
          router.push(`/users/${name}/repos?page=${pageNo + 5}&per_page=10`);
        } else {
          if (pageNo === 1) {
            return;
          }
          router.push(
            `/users/${name}/repos?page=${Math.max(1, pageNo - 5)}&per_page=10`
          );
        }
      }}
    >
      {children}
    </a>
  );
};

export default PrevNextWrapper;
