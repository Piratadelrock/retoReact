import React from "react";
import CardRight from "./CardRight";

const Card = (props) => {
    console.log(props.category);

  return (
    <article className="card">
        <h1>{props.title}</h1>
        <img src={props.image}/> 
        <p className="card-price">${props.price}</p>
        <p className="card-description">{props.description}</p>
        <p>{props.category.name}</p>

    </article>
  );
};

export default Card;
