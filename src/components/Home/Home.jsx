import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { useState, useEffect } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Footer from "../Footer/Footer";
import Navbar from "../Navbar/Navbar";
import Order from "../Order/Order";
import Card from "../Card/Card";
import Paginado from "../Paginado/Paginado";
import { getNft } from "../../redux/actions";
import style from "./Home.module.css";
import { Link } from "react-router-dom";
import Searchbar from "../Searchbar/Searchbar";

export default function Home() {
  const allCard = useSelector((state) => state.cards);
  const allCategory = useSelector((state) => state.category);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getNft());
  }, []);

  console.log(allCard);

  const settings = {
    dots: true,
    infinite: true,
    speed: 300,
    slidesToShow: 3,
    slidesToScroll: 1,
    initialSlide: 0,
    rows: 1,
    slidesPerRow: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const [currentPage, setCurrentPage] = useState(1); //inicia en 1 xq empezare en la pagina 1
  const [nftPerPage, setNftPerPage] = useState(8); //inicia en 8 xq tendre 8 perros por pagina
  const indexOfLastNft = currentPage * nftPerPage; //indice del ultimo perro, cantidad de paginas * perros por paginas, en un principio seran 8
  const indexOfFirstNft = indexOfLastNft - nftPerPage; // indice del 1er perro, dara 0
  const currentNft = allCard.slice(indexOfFirstNft, indexOfLastNft);

  const paginado = (pageNumber) => {
    setCurrentPage(pageNumber);
  };
  return (
    <>
      <Navbar />
      <div className={style.container2}>
        <h1 className={style.text}>
          Search the categories that you like the most and find the NFT that you
          were looking for...
        </h1>
        <div className={style.carousel}>
          <Slider {...settings}>
            {allCategory?.map((e) => (
              <div className={style.containerC}>
                <h1 className={style.nameC}>{e.name} </h1>
                <img className={style.imageC} src={e.image} alt="*" />
              </div>
            ))}
          </Slider>
        </div>
      </div>
      <div className={style.orderSearch}>
        <Order />
        <Searchbar />
      </div>

      <Link className={style.linkCard} to="/detail">
        <div className="row gap-2 justify-center">
          {currentNft?.map((e) => (
            <Card
              price={e.price}
              name={e.name}
              description={e.description}
              image={e.image}
              created={e.created}
            />
          ))}
        </div>
      </Link>

      <Paginado
        nftPerPage={nftPerPage}
        allCard={allCard.length}
        paginado={paginado}
      />
      <div className={style.footer}>
        <Footer />
      </div>
    </>
  );
}
