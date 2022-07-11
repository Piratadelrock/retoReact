import React from "react";

const CardRight = (props) => {
  return (
      <div className="card-right">
        <img src={props.image} />
        <h2>{props.category}</h2>
        <p>{props.title}</p>
    </div>
  );
};
export default CardRight;
