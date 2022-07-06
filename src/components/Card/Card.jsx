import React from "react";

export default function Card({price,description,name,image}) {
  return (
    <div>
      <h1>{name}</h1>
      <h1>{description} </h1>
      <h1>{price} </h1>
      <img src={image} alt='nft'/>
    </div>
  );
}