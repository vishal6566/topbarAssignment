import React from 'react'
import {  BiSearch} from 'react-icons/bi';
import {AiOutlineHeart} from "react-icons/ai"
import {FiShoppingBag} from "react-icons/fi"
import {MdOutlinePersonOutline} from "react-icons/md"
import {MdClose ,MdMenu } from "react-icons/md";
import { useState } from 'react';
import "../styles/Navbar.css"
const MediumNav = () => {
  const [menuActive, setMenuActive] = useState(false);

  const toggleMenu = () => {
    setMenuActive(!menuActive);
  };
  return (
    <div className="medNav">
<div>
<div className={`hamburger-menu ${menuActive ? 'active' : ''}`}>
      <div className="hamburger-icon" onClick={toggleMenu}>
        {menuActive ? <MdClose size={24} /> : <MdMenu size={24} />}
      </div>
   
    </div>
 
</div>
<img src="https://hypefly-assets.s3.ap-south-1.amazonaws.com/media/defaults/store_logo.webp" alt="HYPE FLY Logo"  />
<div>
<div>  <BiSearch /></div>
<div><MdOutlinePersonOutline /></div>
<div><AiOutlineHeart /></div>
<div><FiShoppingBag/></div>
</div>
</div>
  )
}

export default MediumNav