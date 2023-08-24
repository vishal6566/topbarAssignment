import React from 'react'
import "../styles/Footer.css"
import logo from "../images/image/logo.png"
import { AiOutlineInstagram} from 'react-icons/ai';
import {  CiFacebook} from 'react-icons/ci';
import { FiMail } from 'react-icons/fi';
import { BiMailSend } from 'react-icons/bi';
import { CgProfile } from 'react-icons/cg';
import { BsBag} from 'react-icons/bs';
const MobFooter = () => {
  return (
    <div className='mobFooterContainer'>
        <div>
        <img src={logo} alt="logo" />
            <div className='mobIcons'>
                <AiOutlineInstagram size={27} color='white' />
                <CiFacebook size={27}  color='white'/>
                <FiMail size={25} color='white'  />
            </div>
            <div className='mobContactInfo'>
            <p>BUSINESS INQUIRIES</p>
            <p>contact@hypefly.co.in</p>
            </div>
        </div>
        <div >
        <p>PAGES</p>
            <p className='moboptions'>Home</p>
            <p className='moboptions'>Sneakers</p>
            <p className='moboptions'>Streetwear</p>
            <p className='moboptions'>About</p>
            <p className='moboptions'>Blog</p>
        </div>
        <div>
        <p>POLICES</p>
            <p className='moboptions'>Return Policy</p>
            <p className='moboptions'>Terms of Service</p>
            <p className='moboptions'>Seller Policy</p>
            <p className='moboptions'>Privacy Policy</p>
            <p className='moboptions'>Shipping Policy</p>
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
            <div className='mobaccount'>
                <p>ACCOUNT</p>
             <div>
                <CgProfile color='white' size={25}/>
                <BsBag color='white' size={25} />
             </div>
            </div>
        </div>
       
    </div>
  )
}

export default MobFooter