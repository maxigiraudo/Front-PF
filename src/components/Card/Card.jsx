import React from "react";
import style from "./Card.module.css";
import { BsFillCartCheckFill, BsFillHeartFill } from "react-icons/bs";
import { AiFillHeart } from "react-icons/ai";
import { Link } from "react-router-dom";

import { useDispatch } from "react-redux";

export default function Card({
  id,
  price,
  name,
  image,
  token_address,
  agregarCarrito,
  agregarFavorito,
}) {
  let dispatch = useDispatch();
  // let [cont, setContador] = useState(1);

  let onClick = (e) => {
    agregarCarrito(e);
  };
  let onClickF = (e) => {
    agregarFavorito(e);
  };

  return (
    <div className={style.container}>
      <div className={style.card}>
        <Link to={"/detail/" + id + "/" + token_address} className={style.link}>
          <div className={style.containertext}>
            <h1 className={style.name}>{name}</h1>
          </div>
          <figure className={style.containerImagen}>
            {image ? (
              <img
                className={style.imagenRec}
                src={image}
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.src =
                    "https://cryptodozer.io/static/images/dozer/meta/dolls/300.png";
                }}
                alt="nft"
              />
            ) : (
              <h1>sin imagen</h1>
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
          <button
            onClick={() => onClickF({ id, name, image })}
            className={style.heart}
          >
            {AiFillHeart()}{" "}
          </button>
        </div>
      </div>
    </div>
  );
}
