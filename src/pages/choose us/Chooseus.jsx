import React from 'react'
import './Chooseus.css'
import { MdOutlineSupportAgent } from "react-icons/md";
import { TbDiscountCheck } from "react-icons/tb";
import { IoPeopleSharp } from "react-icons/io5";

const Chooseus = () => {
  return (
   <div className="choose">
    <div className="choosedetails">
<div className="support">
    <div className="logo">
    <MdOutlineSupportAgent />
    </div>
    <div className="supportdetails">
        <h5>24/7 Support</h5>
        <p> We will assist at all times of the day, regardless of time zone.</p>
    </div>
</div>
   <div className="discount">
    <div className="logo">
    <TbDiscountCheck />
    </div>
    <div className="discountdetails">
        <h5>Special Discount</h5>
        <p>We're offering a special 30% discount on your 2nd purchase </p>
    </div>
   </div>
   <div className="guide">
    <div className="logo">
    <IoPeopleSharp />
    </div>
    <div className="guidedetails">
        <h5>Tour Guide</h5>
        <p>We will accompany You information and insights that help you to make the most beautiful  experience.</p>
    </div>
   </div>
    </div>
    <div className="chooseimgbox">

    </div>
   </div>
  )
}

export default Chooseus