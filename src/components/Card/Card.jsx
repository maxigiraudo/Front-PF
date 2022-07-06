import React from "react";
import styles from "./Card.module.css";
export default function Card({ price, description, name, image }) {
  return (
    <div className={styles.padre}>
      <h1>{name}</h1>
      <h1>{description} </h1>
      <h1>{price} </h1>
      <img src={image} alt="nft" />
    </div>
  );

}





