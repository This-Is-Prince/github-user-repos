import React, { FC, useEffect } from "react";
import { useAppContext } from "../context/AppContext";
import styles from "../styles/Loading.module.css";
import { LoadingProps, Repo } from "../types/types";

const Loading: FC<LoadingProps> = ({ why }) => {
  const {
    state: { username, page },
    dispatch,
  } = useAppContext()!;
  useEffect(() => {
    if (why === "FIND_USER") {
      fetch(`https://api.github.com/users/${username}`).then(async (res) => {
        const obj = await res.json();
        if (obj.message === "Not Found") {
          console.log("HI");
          return;
        }
        const {
          avatar_url,
          name,
          bio,
          location,
          twitter_username,
          public_repos,
        } = obj;
        fetch(
          `https://api.github.com/users/${username}/repos?page=${page}&&per_page=10`
        ).then(async (res) => {
          const repos: Repo[] = [];
          const obj = await res.json();
          for (let i = 0; i < obj.length; i++) {
            const { name, description, html_url, languages_url } = obj[i];
            const response = await fetch(languages_url);
            const languagesObj = await response.json();
            const languages: string[] = [];
            for (let key in languagesObj) {
              languages.push(key);
            }
            repos.push({ languages, name, description, html_url });
          }
          console.log(repos);
          dispatch({
            type: "ADD_USER",
            payload: {
              avatar_url,
              name,
              bio,
              location,
              twitter_username,
              public_repos,
              repos,
            },
          });
        });
      });
    } else {
      fetch(
        `https://api.github.com/users/${username}/repos?page=${page}&&per_page=10`
      ).then(async (res) => {
        const repos: Repo[] = [];
        const obj = await res.json();
        for (let i = 0; i < obj.length; i++) {
          const { name, description, html_url, languages_url } = obj[i];
          const response = await fetch(languages_url);
          const languagesObj = await response.json();
          const languages: string[] = [];
          for (let key in languagesObj) {
            languages.push(key);
          }
          repos.push({ languages, name, description, html_url });
        }
        console.log("EXTRA:", repos);
        dispatch({
          type: "ADD_REPOS",
          payload: repos,
        });
      });
    }
  }, [username, why, dispatch, page]);
  return (
    <section className="w-screen h-screen fixed z-10 inset-0 flex items-center justify-center">
      <div className={`${styles.lds_spinner}`}>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </section>
  );
};

export default Loading;
