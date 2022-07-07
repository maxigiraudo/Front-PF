import React from "react";
import { useSelector } from "react-redux";
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import Footer from "../Footer/Footer";
import Navbar from "../Navbar/Navbar";
import Card from "../Card/Card";
import style from "./Home.module.css";


export default function Home() {
  const currentCard = useSelector((state) => state.cards);
  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    initialSlide: 0,
    rows: 1,
    slidesPerRow: 2,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 1
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };
  return (
    <>
      <Navbar />
      
          <div className={style.cartoneta}>
          <Slider {...settings}>
            {currentCard?.map((e) => (
              <Card
                price={e.price}
                name={e.name}
                description={e.description}
                image={e.image}
                created={e.created}
              />
            ))}  
            </Slider>                 
      </div>
      <div className={style.footer}>
      <Footer/>
      </div>
    </>
  );
}
