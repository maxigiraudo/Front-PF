import styles from "./ShoppingCart.module.css";
import { FaShoppingCart } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { cleanCart, removeOneFromCart } from "../../redux/actions";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import { IoMdCloseCircle } from "react-icons/io";

export default function ShoppingCart() {
  const products = useSelector((state) => state.cartProducts);
  let dispatch = useDispatch();

  let onClickRemove = (e) => {
    dispatch(removeOneFromCart(e));
  };

  let onClickClean = () => {
    dispatch(cleanCart());
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
          {products.map((e, index) => {
            return (
              <div>
                <div key={index} className={styles.nft}>
                  <img className={styles.img} src={e.image} alt="image" />
                  <div className={styles.name}>{e.name}</div>
                  <div className={styles.price}>$0</div>
                  <button
                    className={styles.boton}
                    onClick={() => onClickRemove(e)}
                  >
                    {IoMdCloseCircle()}
                  </button>
                </div>
              </div>
            );
          })}
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
