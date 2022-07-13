import React from "react";
import style from "./Card.module.css";
import { BsFillStarFill } from "react-icons/bs";
import { BsFillCartCheckFill } from "react-icons/bs";
import { Link } from "react-router-dom";

export default function Card({ id, price, name, image,token_address }) {

  return (
    <div className={style.container}>
      <div className={style.card}>
      <Link to={'/detail/' + id + "/" + token_address}  className={style.link}>
          <div className={style.containertext}>
            <h1 className={style.name}>{name}</h1>
          </div>
          <figure className={style.containerImagen}>
            {image? (
  
              <img className={style.imagenRec} src={image} alt="nft" />
          
            ) : (
              <h1>sin imagen</h1>
            )}
          </figure>
        </Link>


        <div className={style.abajo}>
          <button className={style.car}>{BsFillCartCheckFill()} </button>
          <button className={style.star}>{BsFillStarFill()} </button>
        </div>
      </div>
    </div>
  );
}
