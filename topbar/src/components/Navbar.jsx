import React from "react";
import { BiSearch } from "react-icons/bi";
import { AiOutlineHeart } from "react-icons/ai";
import { FiShoppingBag } from "react-icons/fi";
import { MdOutlinePersonOutline, MdKeyboardArrowDown } from "react-icons/md";

import "../styles/Navbar.css";
const Navbar = () => {
  return (
    <div className="nav ">
      <div>
        <img
          src="https://hypefly-assets.s3.ap-south-1.amazonaws.com/media/defaults/store_logo.webp"
          alt="HYPE FLY Logo"
        />
        <div>
          <div>YEEZY MANIA</div>
          <div className="sneakerOption">
            Sneakers{" "}
            <span>
              {" "}
              <MdKeyboardArrowDown size={20} style={{ paddingTop: "8px" }} />
            </span>
            <div className="sneakersSub-option">
            <div>
                <p>All Sneakers</p>
                <p>Shop from our entire collection of sneakers.</p>
              </div>
              <div>
                <p>Yeezys</p>
                <p>No one does it like Ye.</p>
              </div>
              <div>
                <p>Jordans</p>
                <p>Straight from the MJ collections.</p>
              </div>
              <div>
                <p>Dunks</p>
                <p>They'll make you want to buy a skateboard.</p>
              </div>
              <div>
                <p>New Balance</p>
                <p>When modern hype meets classic comfort.</p>
              </div>
              <div>
                <p>Air Force 1s</p>
                <p>A timeless legend redefined for the next gen.</p>
              </div>
              <div>
                <p>Grails</p>
                <p>Shop from the holy-grail of shoes.</p>
              </div>
              <div>
                <p>Other Collabs</p>
                <p>Some of our favourite sneaker collab.</p>
              </div>
            </div>
          </div>
          <div className="sneakerOption">
            Streetwear{" "}
            <span>
              {" "}
              <MdKeyboardArrowDown size={20} style={{ paddingTop: "8px" }} />
            </span>
            <div className="sneakersSub-option">
              <div>
                <p>All Street Wear</p>
                <p>Find the perfect fits for your footwear</p>
              </div>
              <div>
                <p>FiftyEight</p>
                <p>Shop the latest drops from FiftyEight</p>
              </div>
              <div>
                <p>Terractive</p>
                <p>Chasing Endorphins</p>
              </div>
              <div>
                <p>Essentials</p>
                <p>All the streetwear essentials</p>
              </div>
              <div>
                <p>Anti Social Social Club</p>
                <p>Anti Social Social Club</p>
              </div>
              <div>
                <p>Drew House</p>
                <p>For all the drews</p>
              </div>
            </div>
          </div>
          <div className="sneakerOption">
            Accessories{" "}
            <span>
              {" "}
              <MdKeyboardArrowDown size={20} style={{ paddingTop: "8px" }} />
            </span>
            <div className="sneakersSub-option">
            <div>
                <p>All Accessories</p>
                <p>Shop from our entire collection of accessories</p>
              </div>
              <div>
                <p>Jewellery</p>
                <p>Explore the drip</p>
              </div>
              <div>
                <p>Watches</p>
                <p>Shop from our entire collection of watches</p>
              </div>
              <div>
                <p>Laces</p>
                <p>Elevate your sneakers with a sprinkle of personal touch</p>
              </div>
              <div>
                <p>Bags</p>
                <p>Unleash your love for streetwear with these classic bags</p>
              </div>
            </div>
          </div>
          <div>Under 20K</div>
          <div>Sneaker Care</div>
        </div>
      </div>
      <div>
        <div>
          {" "}
          <BiSearch />
        </div>
        <div>
          <MdOutlinePersonOutline />
        </div>
        <div>
          <AiOutlineHeart />
        </div>
        <div>
          <FiShoppingBag />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
