import React from "react";
import styles from "./Order.module.css";
import { useDispatch } from 'react-redux';
import { orderByName, orderByPrice } from "../../redux/actions/index.js";
      



export default function Order() {
  const dispatch = useDispatch();

  function handleOrderByName(e) {
    e.preventDefault()
    dispatch(orderByName(e.target.value))  
  }


  function handleOrderByPrice(e) {
    e.preventDefault()
    dispatch(orderByPrice(e.target.value))
  }
 

  return(
    <div className={styles.orderContenedor}>
      <div className={styles.orderBotones}>
        <select className={styles.orderBoton} onChange={(e) => handleOrderByName(e)}>
          <option value="All">NAME</option>
          <option value="asc">A to Z</option>  
          <option value="desc">Z to A</option> 
          </select>

          <select className={styles.orderBoton1} onChange={(e) => handleOrderByPrice(e)}>
          <option value="All">PRICE</option>
          <option value="high"> High price </option>
          <option value="low"> Low price </option>
        </select>
      </div>
    </div>
      
  );
}



