import React from 'react'
import { FaRocketchat } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { MdOutlineWifiCalling3 } from "react-icons/md";

const Contact = () => {
  return (
    <>
   <div className="contact">
    <h5>Contact Our Agency</h5>
    <div className="contactbox">
      <div className="branch">
     <h3>Our Branch Office</h3>
     <p>We are always available to help and support you as you trust us  for your dream destinations</p>
     <div className="chat">
      <div className="chatlogo">
      <FaRocketchat />
      </div>
      <div className="chatdetails">
        <h4>Chat to us:</h4>
        <h6>adventureawaits@gmail.com</h6>
      </div>
     </div>
     <div className="office">
      <div className="officelogo">
      <FaLocationDot />
      </div>
      <div className="officedetails">
      <h4>Visit Our Branch Office:</h4>
      <h6>8/5,notunbazar,baridhara j-block,Dhaka-1214</h6>
      </div>
     </div>
     <div className="call">
      <div className="calllogo">
      <MdOutlineWifiCalling3 />
      </div>
      <div className="calldetails">
        <h4>Call Us:</h4>
        <h6>01302845696</h6>
        <h6>01673840606</h6>
      </div>
     </div>
      </div>
      <div className="message">
     <h3>Get In Touch</h3>
     <p>For Any Kind Of Information,Do Message us .We are Eagerly Waiting for Ypur Response</p>
      
      <button className='contactbtn'>Get Started</button>
      </div>
    </div>
   </div>
    </>

  )
}

export default Contact