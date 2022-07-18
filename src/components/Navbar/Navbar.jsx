import React from "react";
import { NavLink } from "react-router-dom";
import styles from "./Navbar.module.css";
import Logo from "./logo.png";
import { useMoralis } from "react-moralis";
import { BiWalletAlt } from "react-icons/bi";
import Dropdown from "../Dropdown/Dropdown.jsx";
import { useDispatch, useSelector } from "react-redux";
import { getNft } from "../../redux/actions";

export default function Navbar() {
  const { authenticate, isAuthenticated, user } = useMoralis();
  const logged = useSelector((state) => state.userIsAuthenticated);

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

  const dispatch=useDispatch()

  function cargarHome(){
    dispatch(getNft())
  }
  return (
    <header className={styles.container}>
      <NavLink to="/home" className={styles.home}>
        <button onClick={()=> cargarHome()} className={styles.buttonW} >
          <img className={styles.logo} src={Logo} alt="" />
        </button>
      </NavLink>
      <nav className={styles.navBar}>
        <ul>
          {logged ? (
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
        <div className={styles.tooltip}>
          <BiWalletAlt
            className={styles.wallet}
            onClick={() => loginWallet()}
          />
          <span className={styles.tooltiptext}>Wallet</span>
        </div>
      </nav>
    </header>
  );
}
