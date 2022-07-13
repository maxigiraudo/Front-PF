import React from "react";
import style from "./Card.module.css";
import { BsFillStarFill } from "react-icons/bs";
import { BsFillCartCheckFill } from "react-icons/bs";
import { Link } from "react-router-dom";
import { addToCart, contador } from "../../redux/actions";
import { useDispatch } from "react-redux";
import { useState } from "react";

export default function Card({ id, price, name, image }) {
  let dispatch = useDispatch();
  let [cont, setContador] = useState(1);

  let onClick = (e) => {
    dispatch(addToCart(e));
    setContador((e) => e + 1);
    dispatch(contador(cont));
    console.log(cont);
  };
  return (
    <div className={style.container}>
      <div className={style.card}>
        <Link to={"/detail/" + id} className={style.link}>
          <div className={style.containertext}>
            <h1 className={style.name}>{name}</h1>
          </div>
          <figure className={style.containerImagen}>
            {image?.includes("mp4") ? (
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

        <div className={style.abajo}>
          <button
            onClick={() => onClick({ id, name, image })}
            className={style.car}
          >
            {BsFillCartCheckFill()}{" "}
          </button>
          <button className={style.star}>{BsFillStarFill()} </button>
        </div>
      </div>
    </div>
  );
}
