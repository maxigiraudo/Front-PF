import React from "react";
import Navbar from "../Navbar/Navbar";
import styles from "./Market.module.css";

export default function Market() {
  const back = () => {
    window.history.back();
  };
  return (
    <div>
      <Navbar />
      <button className={styles.botonR} onClick={back}>
        Go Back
      </button>
      <div className={styles.tt}>Market</div>;
    </div>
  );
}
