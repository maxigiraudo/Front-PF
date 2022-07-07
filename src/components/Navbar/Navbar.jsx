import React from "react";
import { NavLink } from "react-router-dom";
import styles from "./Navbar.module.css";
import Logo from "./logo.png";
import Searchbar from "../Searchbar/Searchbar";

export default function Navbar() {
  return (
    <header className={styles.container}>
      <NavLink to="/home" className={styles.home}>
        <li>
          <img className={styles.logo} src={Logo} alt="" />
        </li>
      </NavLink>
      <Searchbar />
      <nav className={styles.navBar}>
        <ul>
          <div>
            <NavLink to="/form">
              <li>Create NFT</li>
            </NavLink>
            <li>Login</li>
            <li>Sing Up</li>
            <li>Connect Wallet</li>
          </div>
        </ul>
      </nav>
    </header>
  );
}
