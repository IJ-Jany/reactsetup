import React from 'react'
import './layout/layout.css'
import { IoHome } from "react-icons/io5";
import { FcAbout } from "react-icons/fc";
import { IoBagAddSharp } from "react-icons/io5";
import { IoMdContact } from "react-icons/io";
import { Link, NavLink } from 'react-router-dom';
import navlogo from "../assets/images/logo.jpeg"


const Sidebar = () => {
  return (
  <>
    <div className='nabvar'>
         <div className='navlogo'>
            <img src={navlogo} alt="navlogo" />
         </div>
         <div>
            <ul className='navlist'>
                <li>
                <NavLink to="/home"><IoHome /></NavLink>
                <h1>Home</h1>
                </li>
                <li>
                    <NavLink to="/about"><FcAbout /></NavLink>
                <h1>About</h1>
                </li>
                <li>
                    <NavLink to="/service"><IoBagAddSharp /></NavLink>
                <h1>Service</h1>
                </li>
                <li>
               <NavLink to="/contact"> <IoMdContact /></NavLink>
                <h1>Contact</h1>
                </li>
            </ul>
         </div>
         <div>
            <button className='bannerbtn'>Signup</button>
         </div>
    </div>
  </>
  )
}

export default Sidebar