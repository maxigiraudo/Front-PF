import React from "react";
import Navbar from "../Navbar/Navbar";
import styles from "./MyCollections.module.css";
import { useNFTBalance } from "../../hooks/useNFTBalance";
import Card from "../Card/Card";

export default function MyCollections() {
  const back = () => {
    window.history.back();
  };
  const { NFTBalance,fetchSuccess} = useNFTBalance();

  
  return (
    <div>
      <Navbar />
      <button className={styles.botonR} onClick={back}>
        Go Back
      </button>
      <div className={styles.tt}>My Collections!</div>;
      {NFTBalance.results?.map(e => (
        <Card
          key={e._id}
          name={e.name} 
          image={e.image}

        
        />
      )

      )}
    </div>
  );
}
