import React from "react";
import { useSelector } from "react-redux";
import Footer from "../Footer/Footer";
import Navbar from "../Navbar/Navbar";
import Searchbar from "../Searchbar/Searchbar";
import Card from "../Card/Card"

export default function Home() {
  const currentCard = useSelector((state)=> state.cards)
  return (
    <>
      <Navbar />
      <Searchbar />
      <div>{currentCard?.map((e)=>
      <Card
        price={e.price}
        name={e.name}
        description={e.description}
        image={e.image}
      />
      )
      }
      </div>
      
      <Footer />

    </>
  )

}

