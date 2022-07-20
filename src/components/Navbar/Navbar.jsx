import React from "react";
import { NavLink } from "react-router-dom";
import styles from "./Navbar.module.css";
import Logo from "./logo.png";

import Dropdown from "../Dropdown/Dropdown.jsx";

import DropDownWallet from "../DropwdownWallet/DropDownWallet.jsx";

import { useDispatch, useSelector } from "react-redux";
import { getNftDelHome } from "../../redux/actions";
import { useEffect } from "react";

export default function Navbar() {
  // const logged = useSelector((state) => state.userIsAuthenticated);

  const userrr = JSON.parse(localStorage.getItem("profiles"));
  const userrrGoogle = JSON.parse(localStorage.getItem("profileGoogle"));

  // useEffect(() => {

  // }, [])

  const dispatch = useDispatch();

  function cargarHome() {
    dispatch(getNftDelHome());
  }

  return (
    <header className={styles.container}>
      <NavLink to="/home" className={styles.home}>
        <button onClick={() => cargarHome()} className={styles.buttonW}>
          <img className={styles.logo} src={Logo} alt="" />
        </button>
      </NavLink>
      <nav className={styles.navBar}>
        <ul>
          {userrr || userrrGoogle ? (
            <div className={styles.padreDrop}>
              <div>
                <div>
                  <NavLink to="/form">
                    <li>Create NFT</li>
                  </NavLink>
                  <NavLink to="/mycollections">
                    <li>My Collection</li>
                  </NavLink>
                  <NavLink to="/about">
                    <li>About</li>
                  </NavLink>
                </div>
              </div>
              <div className={styles.dropdown}>
                <Dropdown className={styles.wallet}></Dropdown>
              </div>
            </div>
          ) : (
            <div>
              <NavLink to="/form">
                <li>Create NFT</li>
              </NavLink>
              <NavLink to="/mycollections">
                <li>My Collection</li>
              </NavLink>
              <NavLink to="/about">
                <li>About</li>
              </NavLink>
              <NavLink to="/login">
                <li>Login</li>
              </NavLink>
              <NavLink to="/formRegister">
                <li>Sign Up</li>
              </NavLink>
            </div>
          )}
        </ul>
        <div>
          <DropDownWallet className={styles.wallet}></DropDownWallet>
        </div>
        {/* <div className={styles.tooltip}>
          <BiWalletAlt
            className={styles.wallet}
          />
          <span className={styles.tooltiptext}>Wallet</span>
        </div> */}
      </nav>
    </header>
  );
}
