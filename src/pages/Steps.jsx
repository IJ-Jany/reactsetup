import React from 'react'
import './steps.css'
import step1 from '../../src/assets/images/step1.jpg'
import step2 from '../../src/assets/images/step2.jpg'
import step3 from '../../src/assets/images/step3.jpg'

const Steps = () => {
  return (
    <>
    <div className='stepmain'>
      <div className="stepheader">
      <h1>We will Help You Travel And Can Be Ascerlained With Us</h1>
      </div>
      <div className="stepparagraph">
      <p>Fly away to distant lands and rediscover the adventurer in you.there are a lot of places to visit and we will provide you the best.</p>
      </div>
   <div className="step">
    <div className="stepimgbox">
     <div className="stepimgbox1">
      <div className="step1">
      <img src={step1} alt="img" />
      </div>
     <div className="step2">
     <img src={step2} alt="img" />
     </div>
     </div>
     <div className="stepimgbox2">
    <img src={step3} alt="img" />
     </div>
    </div>
    <div className="stepdetails">
    <div className="steptitle">
     <div className="stepnumber">
        <h3>01</h3>
     </div>
     <div className="stepname">
        <h4>Find Your Travel Best Place</h4>
        <p>we have a lot of packages in various places as per your choice and budget.Travel takes us out of our comfort zones and inspires us to see, taste and try new things.Life is a daring adventure towards an unknown future. Its beauty depends on how much you enjoy the journey</p>
     </div>
    </div>
    <div className="steptitle">
     <div className="stepnumber">
        <h3>02</h3>
     </div>
     <div className="stepname">
        <h4>Travel to your place</h4>
        <p>Travel takes us out of our comfort zones and inspires us to see, taste and try new things.we have a lot of packages in various places as per your choice and budget.Life is a daring adventure towards an unknown future. Its beauty depends on how much you enjoy the journey </p>
     </div>
    </div>
    <div className="steptitle">
     <div className="stepnumber">
        <h3>03</h3>
     </div>
     <div className="stepname">
        <h4>Enjoy The Journey With Pleasure</h4>
        <p> Life is a daring adventure towards an unknown future. Its beauty depends on how much you enjoy the journey.we have a lot of packages in various places as per your choice and budget.Travel takes us out of our comfort zones and inspires us to see, taste and try new things</p>
     </div>
    </div>
   </div>
   </div>
    </div>
  </>
  )
}

export default Steps