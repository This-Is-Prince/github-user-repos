import React, { FC, useEffect } from "react";
import styles from "../styles/Loading.module.css";

const Loading = () => {
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
