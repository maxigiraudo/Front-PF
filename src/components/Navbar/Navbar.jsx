import React from "react";
import { NavLink } from "react-router-dom";
import styles from "./Navbar.module.css";
import Logo from "./logo.png";
import { useMoralis } from "react-moralis";

export default function Navbar() {
  const { authenticate, isAuthenticated, user } = useMoralis();

  const loginWallet = async () => {
    if (!isAuthenticated) {
      await authenticate()
        .then(function (user) {
          console.log(user.get("ethAddress"));
        })
        .catch(function (error) {
          console.log(error);
        });
    }
  };
  return (
    <header className={styles.container}>
      <NavLink to="/home" className={styles.home}>
        <li>
          <img className={styles.logo} src={Logo} alt="" />
        </li>
      </NavLink>
      <nav className={styles.navBar}>
        <ul>
          <div>
            <NavLink to="/form">
              <li>Create NFT</li>
            </NavLink>
            <NavLink to="/login">
              <li>Login</li>
            </NavLink>
            <NavLink to="/formRegister">
              <li>Sing Up</li>
            </NavLink>

            <li onClick={() => loginWallet()}>Connect Wallet</li>
          </div>
        </ul>
      </nav>
    </header>
  );
}
