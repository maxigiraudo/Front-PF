import React from "react";
import { Link } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import styles from "./MyCollections.module.css";

export default function MyCollections() {
  return (
    <div>
      <Navbar />
      <Link to="/home">
        <button>Go Back</button>
      </Link>
      <div className={styles.tt}>My Collections!</div>;
    </div>
  );
}
