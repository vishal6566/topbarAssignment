import React from 'react';
import "../styles/BottomBanner.css"
import one from "../images/bottomBanner/banner1.png"
import two from "../images/bottomBanner/banner2.png"
import three from "../images/bottomBanner/banner3.png"
const BottomBanner = () => {
  return (
    <div className='bannerContainer'>
        <div>
            <img src={one} alt="banner1" />
        </div>
        <div>
            <div>
                <img src={two} alt="banner2" />
            </div>
            <div>
                <img src={three} alt="banner3" />
            </div>
        </div>
    </div>
  )
}

export default BottomBanner