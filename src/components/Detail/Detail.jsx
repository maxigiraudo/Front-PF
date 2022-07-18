import React from "react";
import styles from "./Detail.module.css";
import { useDispatch, useSelector } from "react-redux";
import { BsFillStarFill } from "react-icons/bs";
import { BsFillCartCheckFill } from "react-icons/bs";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import Loading from "../Loading/Loading";
import { useEffect } from "react";
import { getDetail, resState } from "../../redux/actions";
import { useParams, Link } from "react-router-dom";


export default function Detail() {

  let { id, token_address } = useParams();

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getDetail(id, token_address));
  }, [dispatch, id, token_address]);

  const handleClean = () => {
    dispatch(resState());
  };

  const card = useSelector((state) => state.detail);

  console.log(card);

  return (
    <div>
      {card.image ? (
        <div className={styles.containerPadre}>
          <div className={styles.navbar}>
            <Navbar />
            <Link to="/home">
              <button onClick={() => handleClean()} className={styles.botonR}>
                Go Back
              </button>
            </Link>
          </div>
          <div className={styles.padre}>
            <div>
              <img className={styles.imagen} src={card.image}  onError={(e)=>{e.target.onerror = null; e.target.src="https://cryptodozer.io/static/images/dozer/meta/dolls/300.png"}} alt="nft" />
            </div>
            <div className={styles.description}>
              <h3 className={styles.name}>{card.name}</h3>
              <h5 className={styles.des}>Collection: {card.collection}</h5>
              <div className={styles.priceCF}>
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
          <h1 className={styles.load}>Loading...</h1>
          <Loading />
        </div>
      )}
    </div>
  );
}
