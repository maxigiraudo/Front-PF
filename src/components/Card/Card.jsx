import React from "react";
import style from "./Card.module.css";
import {BsFillStarFill} from 'react-icons/bs'
import {BsFillCartCheckFill} from 'react-icons/bs'

export default function Card({ price, description, name, image,created}) {
  return (
    <div className="col-12-xs col-5-sm col-3-xl">
      <div className={style.container}>
        <div className={style.card}>
          <h1 className={style.name} >{name}</h1>
          <figure>
            <img className={style.imagenRec} src={image} alt="nft" />
          </figure>
          <div>
            <h5 className={style.name}  >{created}</h5>
          </div>
          <div>
            <h5 className={style.created}  >{description} </h5>
          </div>
          <div className={style.abajo} >
            <h5 className={style.price} >{price} ETH</h5>
            <p className={style.car}>{BsFillCartCheckFill()} </p>
            <p className={style.star} >{BsFillStarFill()} </p>     
          </div>
          
        </div>
      </div>
    </div>
  );
}





