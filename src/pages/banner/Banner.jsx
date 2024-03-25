import React from 'react'
import './banner.css'
import banner1 from '../../assets/images/banner1.jpg'
import banner2 from '../../assets/images/banner2.jpeg'
import banner3 from '../../assets/images/banner3.webp'

const Banner = () => {
  return (
    <>
    <div className="banner">
        <div className="bannerdetails">
        <h1>Experience Bangladesh</h1>
        <p>Accompanying us, you have a trip full of experiences.With Adventure Awaits,booking accommodotain,resort villas,hotels</p>
        </div>
        <div className="bannerimgbox">
     <div className="bannerimgbox1">
      <div className="banner1">
      <img src={banner1} alt="img" />
      </div>
     <div className="banner2">
     <img src={banner2} alt="img" />
     </div>
     </div>
     <div className="bannerimgbox2">
    <img src={banner3} alt="img" />
     </div>
    </div>
    </div>
    </>
  )
}

export default Banner