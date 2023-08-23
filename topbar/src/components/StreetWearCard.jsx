import React from "react";
import { AiOutlineHeart } from "react-icons/ai";
const StreetWearCard = ({ src, title, price }) => {
  return (
    <div className="StreetContainer">
      <div className="StreetTop">
        <AiOutlineHeart size={22} />
      </div>
      <img src={src} alt="" />
      <p className="StreetTitle">{title}</p>

      <p className="streetPrice">{price}</p>
    </div>
  );
};

export default StreetWearCard;
