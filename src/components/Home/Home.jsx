import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { useState, useEffect } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import InfiniteScroll from "react-infinite-scroll-component";
import Footer from "../Footer/Footer";
import Navbar from "../Navbar/Navbar";
import Order from "../Order/Order";
import Card from "../Card/Card";
import { getNft, getSliderNft } from "../../redux/actions";

import style from "./Home.module.css";
import Searchbar from "../Searchbar/Searchbar";
import Loading from "../Loading/Loading";


export default function Home() {
  const allCard = useSelector((state) => state.cards);
  const allCategory = useSelector((state) => state.category);
  const dispatch = useDispatch();

  useEffect(() => {
    if (allCard.length === 0) dispatch(getNft());
  }, [dispatch, allCard]);

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
  function handleFilterByName(e) {
    e.preventDefault();
    dispatch(getSliderNft(e.target.value));
  }

  const [currentPage, setCurrentPage] = useState(1);
  const [nftPerPage, setNftPerPage] = useState(6);
  const currentNft = allCard.slice(0, nftPerPage);
  const [hasMore, setHasMore] = useState(true);

  console.log(currentNft);
  useEffect(() => {
    setNftPerPage((prevNft) => prevNft + 12);
    if (nftPerPage >= 70) {
      setHasMore(false);
    }
  }, [currentPage]);


  const paginado = (pageNumber) => {
    setCurrentPage(pageNumber);
  };


  return (
    <div className={style.containergeneral}>
      <Navbar />
      <div className={style.container2}>
        <h1 className={style.text}>
          Search the categories that you like the most and find the NFT that you
          were looking for...
        </h1>
        <div className={style.carousel}>
          <Slider {...settings}>
            <div className={style.containerC}>
              <h1 className={style.nameC}>MUSIC </h1>
              <img
                className={style.imageC}
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRxQuotC0Qaygjj_AM6yqhGmbRQ3Gqt_MHMGA&usqp=CAU"
                alt="*"
              />
              <option
                className={style.option}
                value="music"
                onClick={(e) => handleFilterByName(e)}
              >
                VER
              </option>
            </div>
            <div className={style.containerC}>
              <h1 className={style.nameC}>DOG </h1>
              <img
                className={style.imageC}
                src="https://tse1.mm.bing.net/th?id=OIP.rzoRwo8ic6Rh4Os7ikzitwHaHa&pid=Api&P=0&w=156&h=156"
                alt="*"
              />
              <option
                className={style.option}
                value="dog"
                onClick={(e) => handleFilterByName(e)}
              >
                VER
              </option>
            </div>
            <div className={style.containerC}>
              <h1 className={style.nameC}>CAT </h1>
              <img
                className={style.imageC}
                src="https://tse1.mm.bing.net/th?id=OIP.rzoRwo8ic6Rh4Os7ikzitwHaHa&pid=Api&P=0&w=156&h=156"
                alt="*"
              />
              <option
                className={style.option}
                value="cat"
                onClick={(e) => handleFilterByName(e)}
              >
                VER
              </option>
            </div>
            <div className={style.containerC}>
              <h1 className={style.nameC}>JIRAFA </h1>
              <img
                className={style.imageC}
                src="https://tse1.mm.bing.net/th?id=OIP.rzoRwo8ic6Rh4Os7ikzitwHaHa&pid=Api&P=0&w=156&h=156"
                alt="*"
              />
              <option
                className={style.option}
                value="monkey"
                onClick={(e) => handleFilterByName(e)}
              >
                VER
              </option>
            </div>
            <div className={style.containerC}>
              <h1 className={style.nameC}>ELEFANTE </h1>
              <img
                className={style.imageC}
                src="https://tse1.mm.bing.net/th?id=OIP.rzoRwo8ic6Rh4Os7ikzitwHaHa&pid=Api&P=0&w=156&h=156"
                alt="*"
              />
              <option
                className={style.option}
                value="monkey"
                onClick={(e) => handleFilterByName(e)}
              >
                VER
              </option>
            </div>
            <div className={style.containerC}>
              <h1 className={style.nameC}>LORO </h1>
              <img
                className={style.imageC}
                src="https://tse1.mm.bing.net/th?id=OIP.rzoRwo8ic6Rh4Os7ikzitwHaHa&pid=Api&P=0&w=156&h=156"
                alt="*"
              />
              <option
                className={style.option}
                value="monkey"
                onClick={(e) => handleFilterByName(e)}
              >
                VER
              </option>
            </div>
            <div className={style.containerC}>
              <h1 className={style.nameC}>TORTUGA </h1>
              <img
                className={style.imageC}
                src="https://tse1.mm.bing.net/th?id=OIP.rzoRwo8ic6Rh4Os7ikzitwHaHa&pid=Api&P=0&w=156&h=156"
                alt="*"
              />
              <option
                className={style.option}
                value="monkey"
                onClick={(e) => handleFilterByName(e)}
              >
                VER
              </option>
            </div>
          </Slider>
        </div>
      </div>
      <div className={style.orderSearch}>
        <Searchbar />
        <Order />
      </div>
      {currentNft.length === 0 && currentNft ?  
        <Loading/>
        :  
        <div>
          <InfiniteScroll
            className={style.cardHome}
            dataLength={currentNft.length} //This is important field to render the next data
            next={() => setCurrentPage((prevPage) => prevPage + 1)}
            hasMore={hasMore}
          
          >
            {currentNft?.map((e, index) => (
              <Card
                key={index}
                id={e.token_id || e.id}
                price={e.price}
                name={e.name}
                image={e.image}
                created={e.created}
              />
            ))}
          </InfiniteScroll>
        </div>
      }


      <div className={style.footer}>
        <Footer />
      </div>
    </div>
  );
}
