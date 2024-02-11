import React from 'react'

const GroupCard = (placename,img,header,paragraph) => {
  return (
  <div className='card'>
  <div className="cardimg">
    <img src="" alt="" />
  </div>
  <div className="carddetails">
    <h2>Sylhet</h2>
  <h5>The Picture of Nature</h5>
  <p>{paragraph}</p>
  </div>
  </div>
  )
}

export default GroupCard