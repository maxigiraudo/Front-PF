import React from "react";
import Navbar from "../Navbar/Navbar";
import styles from "./MyCollections.module.css";

export default function MyCollections() {
  const back = () => {
    window.history.back();
  };
  return (
    <div>
      <Navbar />
      <button className={styles.botonR} onClick={back}>
        Go Back
      </button>
      <div className={styles.tt}>My Collections!</div>;
    </div>
  );
}
