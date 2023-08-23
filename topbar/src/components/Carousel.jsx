import React from 'react'
import "../styles/Carousel.css"
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

const ImageSlider = () => {
  return (
    <div className='carouselContainer'>
        <Carousel autoPlay interval={5000} infiniteLoop showThumbs={false} showStatus={false}>
      <div>
        <img src="https://hypefly-assets.s3.amazonaws.com/media/carousel_images/YEEZY_MANIA_1.jpg" alt="Image 1" />
      </div>
      <div>
        <img src="https://hypefly-assets.s3.amazonaws.com/media/carousel_images/PANDA_DUNK_ALL_TIME.jpg" alt="Image 2" />
      </div>
      <div>
        <img src="https://hypefly-assets.s3.amazonaws.com/media/carousel_images/UNC_TOE_AJ1_1.jpg" alt="Image 3" />
      </div>
      <div>
        <img src="https://hypefly-assets.s3.amazonaws.com/media/carousel_images/58_SHOP_NOW.jpg" alt="Image 4" />
      </div>
      
    </Carousel>
    </div>
  )
}

export default ImageSlider