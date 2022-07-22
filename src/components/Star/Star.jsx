import React from "react";
import styles from "./Star.module.css";

export default function Star() {
  return (
    <div className={styles.container}>
      <form className={styles.from}>
        <p className={styles.clasificacion}>
          <input id="radio1" type="radio" name="estrellas" value="5" />
          <label className={styles.label} for="radio1">
            ★
          </label>
          <input id="radio2" type="radio" name="estrellas" value="4" />
          <label className={styles.label} for="radio2">
            ★
          </label>
          <input id="radio3" type="radio" name="estrellas" value="3" />
          <label className={styles.label} for="radio3">
            ★
          </label>
          <input id="radio4" type="radio" name="estrellas" value="2" />
          <label className={styles.label} for="radio4">
            ★
          </label>
          <input id="radio5" type="radio" name="estrellas" value="1" />
          <label className={styles.label} for="radio5">
            ★
          </label>
        </p>
      </form>
    </div>
  );
}
