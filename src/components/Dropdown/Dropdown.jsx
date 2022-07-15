import React from "react";
import styles from "../Dropdown/Dropdown.module.css";
import { BiUserCircle } from "react-icons/bi";
import { Link } from "react-router-dom";



export default function Dropdown() {
  return (
    <div className={styles.dropdown}>
        <span><BiUserCircle className={styles.iconProfile}/></span>
        <div className={styles.dropdownContent}>
            <p className={styles.dropdownItem}> <Link to="/profile">Profile</Link></p>
            <p className={styles.dropdownItem}><Link to="/collection">My Collections</Link></p>
            <p className={styles.dropdownItem}><Link to="/favorite">Favorites</Link></p>
        </div>
    </div>
  )
}

