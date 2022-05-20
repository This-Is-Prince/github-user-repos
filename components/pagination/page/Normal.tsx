import React, { FC } from "react";

const Normal: FC<{ value: number }> = ({ value }) => {
  return (
    <a
      href="#"
      className="py-2 px-3 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
    >
      {value}
    </a>
  );
};

export default Normal;
