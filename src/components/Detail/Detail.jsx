import React from "react";
import styles from "./Detail.module.css";
import { useSelector } from "react-redux";
import { BsFillStarFill } from "react-icons/bs";
import { BsFillCartCheckFill } from "react-icons/bs";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";

export default function Detail() {
  const card = useSelector((state) => state.cards);

  return (
    <div className={styles.containerPadre}>
      <div className={styles.navbar}>
        <Navbar />
      </div>
      <div className={styles.padre}>
        <div>
          <img className={styles.imagen} src={card[0].image} alt="nft" />
        </div>
        <div className={styles.description}>
          <h3 className={styles.name}>{card[0].name}</h3>
          <h5 className={styles.des}>{card[0].description}</h5>
          <div className={styles.priceCF}>
            <h3 className={styles.price}>{card[0].price} ETH</h3>
            <p className={styles.car}>{BsFillCartCheckFill()} </p>
            <p className={styles.star}>{BsFillStarFill()} </p>
          </div>
        </div>
      </div>
      <div className={styles.footer}>
        <Footer />
      </div>
    </div>
  );
}
