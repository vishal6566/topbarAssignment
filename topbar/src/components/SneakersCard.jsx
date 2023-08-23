import React from 'react'
import "../styles/SneakersCard.css"
import {AiOutlineHeart} from "react-icons/ai"
const SneakersCard = ({src,title,originalPrice,salePrice}) => {
  return (
    <div className='SneakersContainer'>
        <div className='SneakersTop'>
            <div>
                <AiOutlineHeart size={22} />
            </div>
            <div>SALE</div>
        </div>
        <img src={src} alt="" />
        <p className='title'>{title}</p>
     
        <div className="price-container">
        <span className="sale-price">from Rs.{salePrice}</span>
      <span className="original-price">Rs.{originalPrice}</span>
     
    </div>
    </div>
  )
}

export default SneakersCard