import { useRouter } from "next/router";
import React, { useState } from "react";
import { FaSearch } from "react-icons/fa";

const Header = () => {
  const router = useRouter();
  const [name, setName] = useState("");
  return (
    <header className="text-white flex flex-col items-center gap-y-10 py-10">
      <h1 className="text-2xl font-bold tracking-wide">
        Search GitHub User Repos...
      </h1>
      <section className="w-4/5 flex flex-col gap-y-2 text-center">
        <label htmlFor="username">Enter Any Github Username</label>
        <article className="flex self-center">
          <input
            type="text"
            id="username"
            value={name}
            onChange={(e) => {
              setName(e.target.value.trim());
            }}
            className="px-3 py-2 rounded-l-sm text-black outline-none"
            placeholder="e.g johndoe"
            required={true}
          />
          <div className="bg-[#238636] px-3 rounded-r-sm flex items-center justify-center">
            <button
              onClick={() => {
                if (name !== "") {
                  router.push(`/users/${name}`);
                }
              }}
            >
              <FaSearch />
            </button>
          </div>
        </article>
      </section>
    </header>
  );
};

export default Header;
