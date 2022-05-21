import { useRouter } from "next/router";
import React, { FC } from "react";

const Normal: FC<{ value: number }> = ({ value }) => {
  const router = useRouter();
  return (
    <a
      href="#"
      className="py-2 px-3 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
      onClick={(e) => {
        e.preventDefault();
        console.log(router.query);
        const { name } = router.query;
        router.push(`/users/${name}/repos?page=${value}&per_page=10`);
      }}
    >
      {value}
    </a>
  );
};

export default Normal;
