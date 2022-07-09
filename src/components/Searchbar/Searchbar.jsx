import React from "react";
import styles from "./Searchbar.module.css";
import { BiSearchAlt } from "react-icons/bi";
import { useDispatch } from "react-redux";
import { useState } from "react";
import { getNameNft } from "../../redux/actions";

export default function Searchbar(props) {
  const dispatch = useDispatch();
  const [name, setName] = useState("");

  function handleInputChange(e) {
    e.preventDefault();
    setName(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    dispatch(getNameNft(name));
    props.setCurrentPage(1);
  }

  return (
      <form className={styles.formSearch}>
        <div className={styles.inputDiv}>
          <p className={styles.lupa}>{BiSearchAlt()}</p>
          <input
            onChange={(e) => handleInputChange(e)}
            placeholder="Search items, collections and accounts..."
            className={styles.input}
            type="text"
          />
          <input
            onClick={(e) => handleSubmit(e)}
            className={styles.boton}
            type="submit"
            value={"Search"}
          />
        </div>
      </form>
  );
}
