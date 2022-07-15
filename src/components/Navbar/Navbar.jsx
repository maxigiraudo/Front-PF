import React from "react";
import { NavLink } from "react-router-dom";
import styles from "./Navbar.module.css";
import Logo from "./logo.png";
import { useMoralis } from "react-moralis";
import {BiWalletAlt } from "react-icons/bi";
import {FaPowerOff} from "react-icons/fa";
import Dropdown from "../Dropdown/Dropdown.jsx";
import { useSelector } from "react-redux";


export default function Navbar() {
  const { authenticate, isAuthenticated, user } = useMoralis();
  const logged = useSelector(state => state.userIsAuthenticated)
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
          {logged?
          <div>
            <NavLink to="/form">
              <li>Create NFT</li>
            </NavLink>
            <li><FaPowerOff/></li>
          </div>
          :
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
          </div>
          }
        </ul>
        <Dropdown className={styles.wallet}></Dropdown>
        <BiWalletAlt className={styles.wallet} onClick={() => loginWallet()}/>
      </nav>
    </header>
  );
}
