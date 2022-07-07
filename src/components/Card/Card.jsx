import React from "react";
import style from "./Card.module.css";
import { BsFillStarFill } from "react-icons/bs";
import { BsFillCartCheckFill } from "react-icons/bs";
import { Link } from "react-router-dom";

export default function Card({ price, description, name, image, created }) {
  return (
    <div className="col-12-xs col-5-sm col-3-xl">
        <div className={style.container}>
          <div className={style.card}>
          <Link className={style.link} to="/detail">
            <h1 className={style.name}>{name}</h1>
            </Link>
            <figure>
              <img className={style.imagenRec} src={image} alt="nft" />
            </figure>
            <div>
              <h5 className={style.name}>{created}</h5>
            </div>
            <div>
              <h5 className={style.created}>{description} </h5>
            </div>
            <div className={style.abajo}>
              <h5 className={style.price}>{price} ETH</h5>
              <button className={style.car}>{BsFillCartCheckFill()} </button>
              <button className={style.star}>{BsFillStarFill()} </button>
            </div>
          </div>
        </div>
    </div>
  );
}
