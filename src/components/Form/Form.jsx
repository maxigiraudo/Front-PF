import React from "react";
import Navbar from "../Navbar/Navbar";
import styles from "./Form.module.css";

export default function Form() {
  return (
    <div className={styles.containerPadre}>
      <Navbar />
      <div className={styles.padre}>
        <div className={styles.container}>
          <h1>Create your NFT</h1>
          <form>
            <p htmlFor="name"> </p>
            <input
              name="name"
              id="name"
              type="text"
              className={styles.input}
              placeholder="Name"
            />

            <p htmlFor="Description"> </p>
            <input
              name="description"
              id="description"
              type="text"
              className={styles.input}
              placeholder="Description"
            />

            <p htmlFor="Image"></p>
            <input
              name="img"
              type="text"
              className={styles.input}
              placeholder="Image"
            />
            <br />

            <input type="submit" className={styles.inputEnviar} />
          </form>
        </div>
      </div>
    </div>
  );
}
