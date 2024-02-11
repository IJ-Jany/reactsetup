import React from 'react'
import './layout/layout.css'
import { IoHome } from "react-icons/io5";
import { FcAbout } from "react-icons/fc";
import { IoBagAddSharp } from "react-icons/io5";
import { IoMdContact } from "react-icons/io";
import { Link, NavLink } from 'react-router-dom';



const Sidebar = () => {
  return (
  <>
    <div className='nabvar'>
         <div className='navlogo'>
          <h3> Adventure Awaits</h3>
         </div>
         <div>
            <ul className='navlist'>
                <li>
                <NavLink to="/home"><IoHome /></NavLink>
                <h5>Home</h5>
                </li>
                <li>
                    <NavLink to="/about"><FcAbout /></NavLink>
                <h5>About</h5>
                </li>
                <li>
                    <NavLink to="/service"><IoBagAddSharp /></NavLink>
                <h5>Service</h5>
                </li>
                <li>
               <NavLink to="/contact"> <IoMdContact /></NavLink>
                <h5>Contact</h5>
                </li>
            </ul>
         </div>
         <div>
            <button className='bannerbtn'>Signup</button>
         </div>
         <div>
            <button className='bannerbtn'>Register</button>
         </div>
    </div>
  </>
  )
}

export default Sidebar