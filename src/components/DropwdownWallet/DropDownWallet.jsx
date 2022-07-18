import React from "react";
import styles from "../DropwdownWallet/DropDownWallet.module.css";
import { Link } from "react-router-dom";
import { useMoralis } from "react-moralis";
import { useDispatch } from "react-redux";
import { singoutOk } from "../../redux/actions";
import Swal from "sweetalert2";
import { BiWalletAlt } from "react-icons/bi";

export default function Dropdown() {
  const dispatch = useDispatch();
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
    <div className={styles.dropdown}>
      <span>
        <BiWalletAlt className={styles.iconProfile} />
      </span>
      <div className={styles.dropdownContent}>
        <p className={styles.dropdownItem}>
          {" "}
          <Link to="/payment">Charge Wallet</Link>
        </p>
        <p className={styles.dropdownItem}>

          <button onClick={() => loginWallet()} className={styles.botonSingOut}>
            Connect Wallet{" "}
          </button>

        </p>
      </div>
    </div>
  );
}