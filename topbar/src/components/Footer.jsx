import React from 'react'
import "../styles/Footer.css"
import logo from "../images/image/logo.png"
import { AiOutlineInstagram} from 'react-icons/ai';
import {  CiFacebook} from 'react-icons/ci';
import { FiMail } from 'react-icons/fi';
import { BiMailSend } from 'react-icons/bi';
import { CgProfile } from 'react-icons/cg';
import { BsBag} from 'react-icons/bs';
const Footer = () => {
  return (
    <div className='footerContainerMain'>
        <div className='footerContainer'>
        <div>
            <img src={logo} alt="logo" />
            <div className='icons'>
                <AiOutlineInstagram size={27} color='white' />
                <CiFacebook size={27}  color='white'/>
                <FiMail size={25} color='white'  />
            </div>
            <div className='contactInfo'>
            <p>BUSINESS INQUIRIES</p>
            <p>contact@hypefly.co.in</p>
            </div>
           
        </div>
        <div>
            <div>
                <p>PAGES</p>
            <p className='options'>Home</p>
            <p className='options'>Sneakers</p>
            <p className='options'>Streetwear</p>
            <p className='options'>About</p>
            <p className='options'>Blog</p>
            </div>
            <div>
                <p>POLICES</p>
            <p className='options'>Return Policy</p>
            <p className='options'>Terms of Service</p>
            <p className='options'>Seller Policy</p>
            <p className='options'>Privacy Policy</p>
            <p className='options'>Shipping Policy</p>
            </div>
        </div>
        <div>
            <div>
                <p>BLOG</p>
                <div>
                    <input type="text" placeholder='Your email address' />
                    <div>
                        <BiMailSend size={25} color='white' style={{ paddingTop: '10px'}} />
                    </div>
                </div>
            </div>
            <div className='account'>
                <p>ACCOUNT</p>
             <div>
                <CgProfile color='white' size={25}/>
                <BsBag color='white' size={25} />
             </div>
            </div>
        </div>
    </div>
    <div className='topbar'>2023 Top Bar Services.</div>
    </div>
    
  )
}

export default Footer