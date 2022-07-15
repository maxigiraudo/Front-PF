import React from "react";
import styles from "../Dropdown/Dropdown.module.css";
import { BiUserCircle } from "react-icons/bi";
import { Link } from "react-router-dom";
import { FaPowerOff } from "react-icons/fa";

export default function Dropdown() {
  return (
    <div className={styles.dropdown}>
      <span>
        <BiUserCircle className={styles.iconProfile} />
      </span>
      <div className={styles.dropdownContent}>
        <p className={styles.dropdownItem}>
          {" "}
          <Link to="/profile">Profile</Link>
        </p>
        <p className={styles.dropdownItem}>
          <Link to="/favorite">Favorites</Link>
        </p>
        <p className={styles.dropdownItem}>
          <Link to="/singout">Sing Out </Link>
        </p>
      </div>
    </div>
  );
}
