import React from "react";
import styles from "./Searchbar.module.css";
import { BiSearchAlt } from "react-icons/bi";

export default function Searchbar() {
  return (
    <div>
      <form>
        <div className={styles.inputDiv}>
          <p>{BiSearchAlt()}</p>
          <input
            placeholder="Search items, collections and accounts..."
            className={styles.input}
            type="text"
          />
          <input className={styles.boton} type="submit" value={"Search"} />
        </div>
      </form>
    </div>
  );
}
