import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { useState, useEffect } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import InfiniteScroll from "react-infinite-scroll-component";
import Footer from "../Footer/Footer";
import Navbar from "../Navbar/Navbar";
// import Order from "../Order/Order";
import Card from "../Card/Card";
import { getNft, getNftAll, getSliderNft } from "../../redux/actions";
import style from "./Home.module.css";
import Searchbar from "../Searchbar/Searchbar";
import Loading from "../Loading/Loading";
import animals from "./images/animals (1).png";
import art from "./images/art (1).png";
import crypto from "./images/crypto (1).png";
import games from "./images/games (1).png";
import music from "./images/music (1).png";
import photography from "./images/photography (1).png";
import sports from "./images/sports (1).png";
import video from "./images/video png (1).png";
import world from "./images/world (1).png";
import { FaShoppingCart } from "react-icons/fa";
import { Link } from "react-router-dom";

export default function Home({ agregarCarrito, agregarFavorito }) {
  const allCard = useSelector((state) => state.cards);
  const cursori = useSelector((state) => state.cursor);

  console.log("CURSOR DEL HOME", cursori);
  const dispatch = useDispatch();
  useEffect(() => {
    if (allCard.length === 0) dispatch(getNft());
    // if (allCard.length === 0) dispatch(getNft()).then(()=> dispatch(getNftAll())).then(()=> dispatch(getNftAll2())).then(()=>dispatch(getNftAll3()));
  }, [dispatch, cursori]);

  console.log(allCard);

  const settings = {
    dots: true,
    infinite: true,
    speed: 300,
    slidesToShow: 4,
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
    dispatch(getSliderNft(e));
  }

  const [currentPage, setCurrentPage] = useState(1);
  const [nftPerPage, setNftPerPage] = useState(6);
  const currentNft = allCard.slice(0, nftPerPage);
  const [hasMore, setHasMore] = useState(true);

  console.log(currentNft);
  useEffect(() => {
    setNftPerPage((prevNft) => prevNft + 12);
    if (nftPerPage >= 1500) {
      setHasMore(false);
    }
    dispatch(getNftAll(cursori));
  }, [currentPage]);

  return (
    <div className={style.containergeneral}>
      <div className={style.containerNav}>
        <Navbar />
      </div>
      <div className={style.container2}>
        <h1 className={style.text}>
          Search the categories that you like the most and find the NFT that you
          are looking for...
        </h1>
        <div className={style.carousel}>
          <Slider {...settings}>
            <div className={style.containerC}>
              <div className={style.tres}>
                <h1 className={style.nameC}>Animals</h1>
                <img
                  className={style.imageC}
                  src={animals}
                  alt="*"
                  value="animals"
                  onClick={(e) => handleFilterByName("animals")}
                />
              </div>
            </div>
            <div className={style.containerC}>
              <div className={style.tres}>
                <h1 className={style.nameC}>Art</h1>
                <img
                  className={style.imageC}
                  src={art}
                  alt="*"
                  value="art"
                  onClick={(e) => handleFilterByName("art")}
                />
              </div>
            </div>
            <div className={style.containerC}>
              <div className={style.tres}>
                <h1 className={style.nameC}>Crypto</h1>
                <img
                  className={style.imageC}
                  src={crypto}
                  alt="*"
                  value="crypto"
                  onClick={(e) => handleFilterByName("crypto")}
                />
              </div>
            </div>
            <div className={style.containerC}>
              <div className={style.tres}>
                <h1 className={style.nameC}>Games</h1>
                <img
                  className={style.imageC}
                  src={games}
                  alt="*"
                  value="games"
                  onClick={(e) => handleFilterByName("games")}
                />
              </div>
            </div>
            <div className={style.containerC}>
              <div className={style.tres}>
                <h1 className={style.nameC}>Music</h1>
                <img
                  className={style.imageC}
                  src={music}
                  alt="*"
                  value="music"
                  onClick={(e) => handleFilterByName("music")}
                />
              </div>
            </div>
            <div className={style.containerC}>
              <div className={style.tres}>
                <h1 className={style.nameC}>Photography</h1>
                <img
                  className={style.imageC}
                  src={photography}
                  alt="*"
                  value="photography"
                  onClick={(e) => handleFilterByName("photography")}
                />
              </div>
            </div>
            <div className={style.containerC}>
              <div className={style.tres}>
                <h1 className={style.nameC}>Sports</h1>
                <img
                  className={style.imageC}
                  src={sports}
                  alt="*"
                  value="sports"
                  onClick={(e) => handleFilterByName("sports")}
                />
              </div>
            </div>
            <div className={style.containerC}>
              <div className={style.tres}>
                <h1 className={style.nameC}>Video</h1>
                <img
                  className={style.imageC}
                  src={video}
                  alt="*"
                  value="video"
                  onClick={(e) => handleFilterByName("video")}
                />
              </div>
            </div>
            <div className={style.containerC}>
              <div className={style.tres}>
                <h1 className={style.nameC}>World</h1>
                <img
                  className={style.imageC}
                  src={world}
                  alt="*"
                  value="world"
                  onClick={(e) => handleFilterByName("world")}
                />
              </div>
            </div>
          </Slider>
        </div>
      </div>
      <div className={style.orderSearch}>
        <div className={style.navDos}>
          <div className={style.searchBar}>
            <Searchbar setCurrentPage={setCurrentPage} />
          </div>
          <Link to="/cart">
            <div className={style.carrito}>
              <h2>{FaShoppingCart()} View Cart</h2>
            </div>
          </Link>
          {/* <Order /> */}
        </div>
      </div>
      {currentNft.length === 0 && currentNft ? (
        <Loading />
      ) : (
        <div>
          <InfiniteScroll
            className={style.cardHome}
            dataLength={currentNft.length} //This is important field to render the next data
            next={() => setCurrentPage((prevPage) => prevPage + 1)}
            hasMore={hasMore}
          >
            {currentNft?.map((e, index) => (
              <Card
                agregarFavorito={agregarFavorito}
                agregarCarrito={agregarCarrito}
                id={e._id}
                key={index}
                price={e.price}
                name={e.name}
                image={e.image}
                created={e.created}
                token_address={e.token_address}
                collection={e.collection}
              />
            ))}
          </InfiniteScroll>
        </div>
      )}

      <div className={style.footer}>
        <Footer />
      </div>
    </div>
  );
}
