import React, { FC } from "react";

const Error: FC<{ message: string }> = ({ message }) => {
  return (
    <div className="text-white flex items-center justify-center ">
      <h2 className="text-2xl font-bold">{message}</h2>
    </div>
  );
};

export default Error;
