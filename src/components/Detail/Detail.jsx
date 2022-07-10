import React from "react";
import styles from "./Detail.module.css";
import { useDispatch, useSelector } from "react-redux";
import { BsFillStarFill } from "react-icons/bs";
import { BsFillCartCheckFill } from "react-icons/bs";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import { useEffect } from "react";
import { getDetail, resState } from "../../redux/actions";
import { useParams, Link } from "react-router-dom";

export default function Detail() {
  const { id } = useParams();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getDetail(id));
  }, [dispatch, id]);

  const handleClean = () => {
    dispatch(resState());
  };

  const card = useSelector((state) => state.detail);

  console.log(card);

  return (
    <div>
      <Link to="/home">
        <button onClick={() => handleClean()}>ATRAS VIEJA</button>
      </Link>
      {card.length ? (
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
                {/* <h3 className={styles.price}>{card[0].price} ETH</h3> */}
                <p className={styles.car}>{BsFillCartCheckFill()} </p>
                <p className={styles.star}>{BsFillStarFill()} </p>
              </div>
            </div>
          </div>
          <div className={styles.footer}>
            <Footer />
          </div>
        </div>
      ) : (
        <div>
          <h1 className={styles.cargando}>cargando...</h1>
        </div>
      )}
    </div>
  );
}
