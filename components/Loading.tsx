import React, { FC, useEffect } from "react";
import { useAppContext } from "../context/AppContext";
import styles from "../styles/Loading.module.css";
import { LoadingProps } from "../types/types";

const Loading: FC<LoadingProps> = ({ why }) => {
  const {
    state: { username },
  } = useAppContext()!;
  useEffect(() => {
    if (why === "FIND_USER") {
      fetch(`/api/user/${username}`).then(async (res) => {
        let data = await res.json();
        console.log(data);
      });
    }
  }, [username, why]);
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
