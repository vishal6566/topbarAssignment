import React from 'react'
import "../styles/Sneakers.css"
import SneakersCard from './SneakersCard'
import one from "../images/sneakers/one.png"
import two from "../images/sneakers/two.png"
import three from "../images/sneakers/three.png"
import four from "../images/sneakers/four.png"
import five from "../images/sneakers/five.png"
import six from "../images/sneakers/six.png"
import seven from "../images/sneakers/seven.png"
import eight from "../images/sneakers/eight.png"
import nine from "../images/sneakers/nine.png"
import ten from "../images/sneakers/ten.png"
import eleven from "../images/sneakers/eleven.png"
import twelve from "../images/sneakers/twelve.png"
const Sneakers = () => {
  const sneakers=[{
    id:1,
    src:one,
    title:"Nike Dunk Low Retro Panda",
    salePrice:11999,
    originalPrice:17999,
  },
  {
    id:2,
    src:two,
    title:"Yeezy Slides Slate Grey",
    salePrice:8999,
    originalPrice:13999,
  },
  
  {
    id:3,
    src:three,
    title:"Air Jordan 1 X Marvel",
    salePrice:18999,
    originalPrice:34999,
  },
  {
    id:4,
    src:four,
    title:"Air Jordan Retro High OG",
    salePrice:19999,
    originalPrice:34999,
  },
  {
    id:5,
    src:five,
    title:"Yeezy Boost 350 V2 Space ash",
    salePrice:16999,
    originalPrice:19999,
  },
  {
    id:6,
    src:six,
    title:"Yeezy Boost 350 V2 Carbon Beluga",
    salePrice:27999,
    originalPrice:36999,
  },
  {
    id:7,
    src:seven,
    title:"Yeezy Boost 350 V2 onyx",
    salePrice:27999,
    originalPrice:39999,
  },
  {
    id:8,
    src:eight,
    title:"Yeezy slides dark Onyx",
    salePrice:9999,
    originalPrice:11499,
  },
  {
    id:9,
    src:nine,
    title:"Yeezy Boost 350 V2 Bone",
    salePrice:25999,
    originalPrice:39999,
  },
  {
    id:10,
    src:ten,
    title:"Nike Dunk Low Chicago Split",
    salePrice:15999,
    originalPrice:19999,
  },
  {
    id:11,
    src:eleven,
    title:"Air Jordan 1 Low",
    salePrice:10999,
    originalPrice:14999,
  },
  {
    id:12,
    src:twelve,
    title:"Yeezy Slide 'Pure",
    salePrice:16999,
    originalPrice:20999,
  },


]
  return (
    <div className='mainSneakersContainer'>
        <div className='heading'>
            <h1>SNEAKERS</h1>
        </div>
        <div className='content'>
           {sneakers.map(({id,src,title,salePrice,originalPrice})=>(
            <div key={id}><SneakersCard src={src} title={title}salePrice={salePrice} originalPrice={originalPrice}/></div>
 
           ))}
        </div>

        <div className='bottom'>VIEW ALL</div>
    </div>
  )
}

export default Sneakers