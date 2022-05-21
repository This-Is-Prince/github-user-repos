import axios from "axios";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import Loading from "../../../../components/Loading";
import NotFound from "../../../../components/NotFound";
import Info from "../../../../components/user/Info";
import Repos from "../../../../components/user/Repos";
import { Page, Repo, User } from "../../../../types/types";

const User = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);
  const [user, setUser] = useState<User | null>(null);
  const [repos, setRepos] = useState<Repo[] | null>(null);
  const [pages, setPages] = useState<Page[]>([]);
  const [count, setCount] = useState(1);

  const router = useRouter();
  const { name: username, page } = router.query;
  useEffect(() => {
    console.log(username);
    if (username) {
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
            repos_url,
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
          setIsError(true);
          console.log(err);
        });
    }
  }, [router.isReady, username]);
  useEffect(() => {
    console.log(page);
    if (page) {
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
          console.log(newRepos);
          setRepos(newRepos);
          setIsLoading(false);
        })
        .catch((err) => {
          setIsLoading(false);
          setIsError(true);
          console.log(err);
        });
    }
  }, [router.isReady, page, username]);

  return (
    <>
      {isLoading && <Loading />}
      <main className="grid gap-y-5 border-[1px] border-t-0 p-5">
        {isError ? (
          <NotFound />
        ) : (
          <>
            <div className="border-[1px] w-full max-w-6xl m-auto">
              {user !== null && <Info user={user} />}
            </div>
            <div className="border-[1px] w-full max-w-6xl m-auto">
              <h1 className="text-center text-white mt-5">Repositories</h1>
              {repos !== null && <Repos repos={repos} pages={pages} />}
            </div>
          </>
        )}
      </main>
    </>
  );
};

export default User;
