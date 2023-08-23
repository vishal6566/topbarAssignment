import React from 'react'
import "../styles/StreetWear.css"
import StreetWearCard from './StreetWearCard'
import one from "../images/streetWear/one.png"
import two from "../images/streetWear/two.png"
import three from "../images/streetWear/three.png"
import four from "../images/streetWear/four.png"
import five from "../images/streetWear/five.png"
import six from "../images/streetWear/six.png"
import seven from "../images/streetWear/seven.png"
import eight from "../images/streetWear/eight.png"
const StreetWear = () => {
    const streetWear=[{
        id:1,
        src:one,
        title:"THE 58 DRAGON TEE",
        price:1758,

      },
      {
        id:2,
        src:two,
        title:"BREAK THE SIMULATION TEE",
        price:1458,
        
      },
      
      {
        id:3,
        src:three,
        title:"UNREAL TEE",
        price:1758,
        
      },
      {
        id:4,
        src:four,
        title:"THE PHOENIX TEE",
        price:1758,
     
      },
      {
        id:5,
        src:five,
        title:"WHY YOU BUGGIN TEE",
        price:1758,
      
      },
      {
        id:6,
        src:six,
        title:"THINK ABOUT IT TEE",
        price:1758,
      
      },
      {
        id:7,
        src:seven,
        title:"TOO MUCH AT STAKE TEE",
        price:1458,
        
      },
      {
        id:8,
        src:eight,
        title:"DREW HOUSE MASCOT HOODIE",
        price:23999,
       
      },
    
    
    ]
  return (
    <div className='mainStreetContainer'>
    <div className='streetHeading'>
        <h1>SNEAKERS</h1>
    </div>
    <div className='streetContent'>
      
    {streetWear.map(({id,src,title,price})=>(
            <div key={id}><StreetWearCard src={src} title={title} price={price}/></div>
 
           ))}

      
    </div>

    <div className='streetBottom'>VIEW ALL</div>
</div>
  )
}

export default StreetWear