import React from 'react'
import {  BiSearch} from 'react-icons/bi';
import {AiOutlineHeart} from "react-icons/ai"
import {FiShoppingBag} from "react-icons/fi"
import {MdOutlinePersonOutline} from "react-icons/md"
import {RxHamburgerMenu} from "react-icons/rx";
import "../styles/Navbar.css"
const MediumNav = () => {
  return (
    <div className="medNav">
<div>
  <div><RxHamburgerMenu /></div>
 
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