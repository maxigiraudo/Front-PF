import styles from "./ShoppingCart.module.css";
import { FaShoppingCart } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { cleanCart, removeOneFromCart } from "../../redux/actions";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import { IoMdCloseCircle } from "react-icons/io";
import { useState } from "react";
import { useEffect } from "react";

export default function ShoppingCart({
  limpiarCarrito,
  eliminarCarrito,
  carrito,
}) {
  //   const products = useSelector((state) => state.cartProducts);

  //   const [nft, setNft] = useState();
  //   let dispatch = useDispatch();

  let onClickRemove = (e) => {
    eliminarCarrito(e);
  };

  let onClickClean = () => {
    limpiarCarrito();
  };

  return (
    <div>
      <Navbar />
      <div className={styles.container}>
        <h1 className={styles.titulo}>{FaShoppingCart()} Shopping Cart</h1>

        <div className={styles.box}>
          <div className={styles.nftA}>
            <h2 className={styles.imgA}>Image</h2>
            <h2 className={styles.nameA}>Name</h2>
            <h2 className={styles.priceA}>Price</h2>
            <h2 className={styles.botonA}>Dellete</h2>
          </div>
          {carrito.map((e, index) => {
            return (
              <div>
                <div key={index} className={styles.nft}>
                  <img className={styles.img} src={e.image} alt="image" />
                  <div className={styles.name}>{e.name}</div>
                  <div className={styles.price}>$0</div>
                  <button
                    className={styles.boton}
                    onClick={() => onClickRemove(e.id)}
                  >
                    {IoMdCloseCircle()}
                  </button>
                </div>
              </div>
            );
          })}
          <div className={styles.total}>
            <h1 className={styles.totalobich}>Total</h1>
            <h1 className={styles.cero}>$0</h1>
          </div>
          <div>
            <button className={styles.botonAbajo} onClick={onClickClean}>
              Celan Cart
            </button>
            <button className={styles.botonAbajo}>Buy</button>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
