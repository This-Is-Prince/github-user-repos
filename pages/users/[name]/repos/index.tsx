import axios from "axios";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import Loading from "../../../../components/Loading";
import Info from "../../../../components/user/Info";
import Repos from "../../../../components/user/Repos";
import { Page, Repo, User } from "../../../../types/types";
import { GoRepo } from "react-icons/go";
import Error from "../../../../components/Error";

const User = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState("");
  const [user, setUser] = useState<User | null>(null);
  const [repos, setRepos] = useState<Repo[] | null>(null);
  const [pages, setPages] = useState<Page[]>([]);

  const router = useRouter();
  const { name: username, page } = router.query;
  useEffect(() => {
    setError("");
    if (username) {
      setIsLoading(true);
      axios
        .get(`https://api.github.com/users/${username}`)
        .then(async (res) => {
          const {
            login,
            name,
            bio,
            avatar_url,
            followers,
            following,
            html_url,
            public_repos,
            twitter_username,
            type,
            location,
          } = res.data;
          setUser({
            login,
            name,
            bio,
            avatar_url,
            followers,
            following,
            html_url,
            public_repos,
            twitter_username,
            type,
            location,
          });
        })
        .catch((err) => {
          setIsLoading(false);
          if (err.status === 404) {
            setError("User Not Found.");
          } else {
            setError("API rate limit exceeded.");
          }
        });
    }
  }, [router.isReady, username]);
  useEffect(() => {
    if (page && !error) {
      setIsLoading(true);
      axios
        .get(
          `https://api.github.com/users/${username}/repos?page=${page}&per_page=10`
        )
        .then(async (res) => {
          const currRepos = res.data;
          const newRepos: Repo[] = [];
          for (let i = 0; i < currRepos.length; i++) {
            const { name, description, html_url, languages_url } = currRepos[i];
            const languagesObj = await axios.get(languages_url);
            const languages: string[] = [];
            for (let key in languagesObj.data) {
              languages.push(key);
            }
            newRepos.push({ description, html_url, languages, name });
          }
          setRepos(newRepos);
          if (user !== null) {
            const totalPages = Math.ceil(user.public_repos / 10);
            const newPages: Page[] = [];
            if (totalPages > 1) {
              const pageNo = Number(page);
              newPages.push({ which: "PREVIOUS", value: 0 });
              const last = Math.min(totalPages, pageNo + 4);
              for (let i = pageNo; i <= last; i++) {
                if (i == pageNo) {
                  newPages.push({ which: "ACTIVE", value: i });
                } else {
                  newPages.push({ which: "NORMAL", value: i });
                }
              }
              newPages.push({ which: "NEXT", value: totalPages + 1 });
              setPages(newPages);
            }
          }
          setIsLoading(false);
        })
        .catch((err) => {
          setIsLoading(false);
          if (err.status === 404) {
            setError("User Not Found.");
          } else {
            setError("API rate limit exceeded.");
          }
        });
    }
  }, [router.isReady, page, username, error, user]);

  return (
    <>
      {isLoading && <Loading />}
      <main className="grid gap-y-5 border-[1px] border-t-0 p-5">
        {error ? (
          <Error message={error} />
        ) : (
          <>
            {user !== null && (
              <div className="border-[1px] w-full max-w-6xl m-auto">
                <Info user={user} />
              </div>
            )}

            {repos !== null && (
              <div className="border-[1px] w-full max-w-6xl m-auto">
                <h1 className="flex justify-center items-center gap-x-2 text-white mt-5">
                  <span>
                    <GoRepo />
                  </span>
                  <span className="text-2xl">Repositories</span>
                  <span className="rounded-md bg-gray-500 px-2 py-[1px]">
                    {user?.public_repos}
                  </span>
                </h1>
                {repos !== null && <Repos repos={repos} pages={pages} />}
              </div>
            )}
          </>
        )}
      </main>
    </>
  );
};

export default User;
