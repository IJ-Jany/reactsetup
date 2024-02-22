import React from 'react'
import { BsTicketPerforatedFill } from "react-icons/bs";
import { FaHotel } from "react-icons/fa6";
import { MdCardTravel } from "react-icons/md";
import './service.css'
import Sidebar from '../components/Sidebar';
import Footer from '../components/layout/Footer';

const Service = () => {
  return (
    <>
    <Sidebar/>
    <div className='service'>
    <h1>Our Service For You</h1>
    <div className="servicepara">
    <p>We bring evrywhere alivewith tours that cover and look buyond the highlights:revealing hidden gems and offering cultural encounters that build into multi-faced and compeling travel experiences.</p>
    </div>
      <div className='servicecard'>
        <div className='card'>
        <BsTicketPerforatedFill />
        <h3>Ticket Booking</h3>
        <p>We are always here to book your ticket since you don't have to tensed.</p>
        </div>
        <div className='card'>
        <FaHotel />
        <h3>Hotel Booking</h3>
        <p>We are always here to book your ticket since you don't have to tensed.</p>
        </div>
        <div className='card'>
        <MdCardTravel />
        <h3>Tour Plan</h3>
        <p>We are always here to book your ticket since you don't have to tensed.</p>
        </div>
     </div> 
    </div>
    <Footer/>
    </>
  )
}

export default Service