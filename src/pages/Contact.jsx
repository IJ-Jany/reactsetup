import React from 'react'
import { FaRocketchat } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { MdOutlineWifiCalling3 } from "react-icons/md";
import './contact.css'
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Sidebar from '../../src/components/Sidebar'
import Footer from '../../src/components/layout/Footer'

const Contact = () => {
  return (
    <>
    <Sidebar/>
   <div className="contact">
    <h1>Contact Our Agency</h1>
    <div className="contactbox">
      <div className="branch">
     <h3>Our Branch Office</h3>
     <p>We are always available to help and support you as you trust us  for your dream destinations</p>
     <div className="contactitems">
   <div className="details">
   <div className="chatdetails">
   <FaRocketchat />
        <h4>Chat to us:</h4>
        <h6>adventureawaits@gmail.com</h6>
    </div>
     <div className="officedetails">
     <FaLocationDot />
      <h4>Visit Our Branch Office:</h4>
      <h6>8/5,notunbazar,baridhara j-block,Dhaka-1214</h6>
    </div>
      <div className="calldetails">
      <MdOutlineWifiCalling3 />
        <h4>Call Us:</h4>
        <h6>01302845696</h6>
        <h6>01673840606</h6>
      </div>
   </div>
</div>
      </div>
      <div className="message">
     <h3>Get In Touch</h3>
     <p>For Any Kind Of Information,Do Message us .We are Eagerly Waiting for Your Response</p>
     <div className="inputs">
     <TextField id="outlined-basic" label="Your Name" variant="outlined" />
     <TextField id="outlined-basic" label="Your Email" variant="outlined" />
     <TextField id="outlined-basic" label="Phone Number" variant="outlined" />
     <TextField id="outlined-basic" label="Type Message" variant="outlined" />
     </div>
    
     <button className='contactbtn'>Get Started</button>
      </div>
    </div>
   </div>
   <Footer/>
    </>


  )
}

export default Contact