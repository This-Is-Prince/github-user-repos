import React from "react";
import { FaSearch } from "react-icons/fa";

const Header = () => {
  return (
    <header className="text-white flex flex-col items-center gap-y-10 py-10 bg-[#0d1117]">
      <h1 className="text-2xl font-bold tracking-wide">
        Search GitHub User Repos...
      </h1>
      <form
        onSubmit={(e) => {
          console.log("Submit");
          e.preventDefault();
        }}
        className="w-4/5 flex flex-col gap-y-2 text-center"
      >
        <label htmlFor="username">Enter Any Github Username</label>
        <div className="flex self-center">
          <input
            type="text"
            id="username"
            className="px-3 py-2 rounded-l-sm text-black outline-none"
            placeholder="e.g johndoe"
          />
          <button type="submit" className="bg-[#238636] px-3 rounded-r-sm">
            <FaSearch />
          </button>
        </div>
      </form>
    </header>
  );
};

export default Header;
