import React from "react";
import CardRight from "./CardRight";

const Card = (props) => {
  return (
    <article className="card">
      <div className="card-left"></div>
      <CardRight category={props.category} title={props.title} />
    </article>
  );
};

export default Card;
