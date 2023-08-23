import React from 'react'
import "../styles/Bottom.css"
import {  HiOutlineArrowPathRoundedSquare} from 'react-icons/hi2';
import {  BiLockAlt} from 'react-icons/bi';
import {  TiTickOutline } from 'react-icons/ti';
const Bottom = () => {
  return (
    <div className='bottomContainer'>
        <div>
            <HiOutlineArrowPathRoundedSquare  size={48}  />
            <p>Trust</p>
        </div>
        <div>
            <BiLockAlt size={48}  />
            <p>Secure Payments</p>
            </div>
        <div>
            <TiTickOutline size={48} />
            <p>Legitimacy</p>
        </div>
    </div>
  )
}

export default Bottom