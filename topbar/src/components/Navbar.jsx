import React from "react";
import {  BiSearch} from 'react-icons/bi';
import {AiOutlineHeart} from "react-icons/ai"
import {FiShoppingBag} from "react-icons/fi"
import {MdOutlinePersonOutline} from "react-icons/md"
import "../styles/Navbar.css";
const Navbar = () => {
  return (
    <div>
      <div className="top">YEEZY MANIA IS LIVE | FREE SHIPPING PAN INDIA</div>
      <div className="nav">
        <div>
            <img src="https://hypefly-assets.s3.ap-south-1.amazonaws.com/media/defaults/store_logo.webp" alt="HYPE FLY Logo"  />
            <div>
                <div>YEEZY MANIA</div>
                <div>Sneakers </div>
                <div>Streetwear</div>
                <div>Accessories</div>
                <div>Under 20K</div>
                <div>Sneaker Care</div>
            </div>
        </div>
        <div>
            <div>  <BiSearch /></div>
      <div><MdOutlinePersonOutline /></div>
        <div><AiOutlineHeart /></div>
        <div><FiShoppingBag/></div>
        
        </div>
      </div>
    </div>
  );
};

export default Navbar;
