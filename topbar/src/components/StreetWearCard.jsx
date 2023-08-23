import React from "react";
import "../styles/StreetWearCard.css"
import { AiOutlineHeart } from "react-icons/ai";
const StreetWearCard = ({ src, title, price }) => {
  return (
    <div className="StreetContainer">
      <div className="StreetTop">
        <AiOutlineHeart size={22} />
      </div>
      <img src={src} alt="" />
      <p className="StreetTitle">{title}</p>

      <p className="StreetPrice">Rs.{price}</p>
    </div>
  );
};

export default StreetWearCard;
