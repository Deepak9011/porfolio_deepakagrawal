import React from "react";
import "./Card.css";

const Card = ({ emozi, heading, detail }) => {
  return (
    <div className="card">
      <img src={emozi} alt="" />
      <span>{heading}</span>
      <span>{detail}</span>
      <button className="card-button">Read More</button>
    </div>
  );
};

export default Card;
