import React from "react";
import { useSelector } from "react-redux";
import Footer from "../Footer/Footer";
import Navbar from "../Navbar/Navbar";
import Order from "../Order/Order";
import Card from "../Card/Card";
import style from "./Home.module.css";

export default function Home() {
  const currentCard = useSelector((state) => state.cards);

  return (
    <>
      <Navbar />
      <Order />

      <div className="row gap-2 justify-center">
        <div className={style.cartoneta}>
          {currentCard?.map((e) => (
            <Card
              price={e.price}
              name={e.name}
              description={e.description}
              image={e.image}
              created={e.created}
            />
          ))}
        </div>
      </div>

      <Footer />
    </>
  );
}
