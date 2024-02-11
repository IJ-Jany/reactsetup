import React from 'react'
import './footer.css'
import { FaFacebookSquare } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaSnapchat } from "react-icons/fa";

const Footer = () => {
  return (
  <>
  <div className="footer">
    <div className="footer1st">
    <div className="logo">
        <h3>
            Adventure Awaits
        </h3>
        <p>Choose Your Favourite Destination </p>
    </div>
    <div className="social">
    <li><FaFacebookSquare /></li>
    <li><FaInstagram /></li>
    <li><FaSnapchat /></li>
    </div>
    </div>
    <div className="footerlast">
      <div className="project">
        <h3>Projects</h3>
        <h5>Changelog</h5>
        <h5>status</h5>
        <h5>licsense</h5>
      </div>
      <div className="Community">
        <h3>Community</h3>
        <h5>Github</h5>
        <h5>Issues</h5>
        <h5>Project</h5>
      </div>
      <div className="Help">
        <h3>Help</h3>
        <h5>Support</h5>
        <h5>Troubleshooting</h5>
        <h5>Contact Us</h5>
      </div>
      <div className="Others">
        <h3>Others</h3>
        <h5>Privacy Policy</h5>
        <h5>Terms of Service</h5>
        <h5>Licsense</h5>
      </div>
    </div>
  </div>
  </>
  )
}

export default Footer