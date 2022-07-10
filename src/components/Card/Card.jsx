import React from "react";
import style from "./Card.module.css";
import { BsFillStarFill } from "react-icons/bs";
import { BsFillCartCheckFill } from "react-icons/bs";
import { Link } from "react-router-dom";

export default function Card({ id, price, name, image }) {
  return (
    <div className={style.container}>
      <div className={style.card}>
        <Link to={"/detail/" + id} className={style.link}>
          <div className={style.containertext}>
            <h1 className={style.name}>{name}</h1>
          </div>
<<<<<<< HEAD
=======
          <figure className={style.containerImagen}>
            {image.includes("mp4") ? (
              <img
                className={style.imagenRec}
                src="https://www.thedigitalspeaker.com/content/images/2022/03/Five-NFT-Challenges.jpeg"
                alt="nft"
              />
            ) : (
              <img className={style.imagenRec} src={image} alt="nft" />
            )}
          </figure>
        </Link>

>>>>>>> 8b5fac7db8dfa181a1c30fdb29273ba3e843b9f3
        <div className={style.abajo}>
          <h5 className={style.price}>{price} ETH</h5>
          <button className={style.car}>{BsFillCartCheckFill()} </button>
          <button className={style.star}>{BsFillStarFill()} </button>
        </div>
      </div>
    </div>
  );
}
