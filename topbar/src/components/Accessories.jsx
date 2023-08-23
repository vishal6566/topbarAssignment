import React from 'react'
import "../styles/StreetWear.css"
import StreetWearCard from './StreetWearCard'
import one from "../images/accessories/one.png"
import two from "../images/accessories/two.png"
import three from "../images/accessories/three.png"
import four from "../images/accessories/four.png"
import five from "../images/accessories/five.png"
import six from "../images/accessories/six.png"
import seven from "../images/accessories/seven.png"
import eight from "../images/accessories/eight.png"

const Accessories = () => {
    const accessories=[{
        id:1,
        src:one,
        title:"Flash Pendant",
        price:2999,

      },
      {
        id:2,
        src:two,
        title:"Cactus Jack Pendant",
        price:2999,
        
      },
      
      {
        id:3,
        src:three,
        title:"Tennis Stud Earring",
        price:2499,
        
      },
      {
        id:4,
        src:four,
        title:"Micro Clustered Diamond Earrings",
        price:2499,
     
      },
      {
        id:5,
        src:five,
        title:"Swatch X Omega Bioceramic Moonswatch",
        price:27999,
      
      },
      {
        id:6,
        src:six,
        title:"6mm Clean Cuban Chain",
        price:2499,
      
      },
      {
        id:7,
        src:seven,
        title:"Luna Drramsicle Rope Laces",
        price:499,
        
      },
      {
        id:8,
        src:eight,
        title:"Swatch X Omega Bioceramic Moonswatch",
        price:26999,
       
      },
    
    
    ]
  return (
    <div className='mainStreetContainer'>
    <div className='streetHeading'>
        <h1>ACCESSORIES</h1>
    </div>
    <div className='streetContent'>
      
    {accessories.map(({id,src,title,price})=>(
            <div key={id}><StreetWearCard src={src} title={title} price={price}/></div>
 
           ))}

      
    </div>

    <div className='streetBottom'>VIEW ALL</div>
</div>
  )
}

export default Accessories