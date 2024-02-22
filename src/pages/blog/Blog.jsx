import React from 'react'
import './blog.css'
import blog1 from '../../assets/images/blog1.jpeg'
import blog2 from '../../assets/images/blog2.jpeg'
import blog3 from '../../assets/images/blog3.jpeg'

const Blog = () => {
  return (
  <>
  <div className="blogheader">
  <h4>Our Blog</h4>
  <h2>Updated News And Recent Articles</h2>
  </div>
  <div className="blogdetails">
    <div className="blogcard">
        <div className="blogimg">
            <img src={blog1} alt="img" />
        </div>
        <div className="blogitems">
        <h6>Oct13,2023</h6>
        <h4>Sajek Valley: the Queen of Hills & Roof of Rangamati</h4>
        <p>The valley is surrounded by mountains, dense forest, grasslands hilly tracks. Many small rivers flow through the mountains among which Kachalong and Machalong are notable.</p>
        <h6>25,000</h6>
        </div>
    </div>
    <div className="blogcard">
        <div className="blogimg">
            <img src={blog2} alt="img" />
        </div>
       <div className='blogitems'>
       <h6>Jan06,2024</h6>
        <h4>Murapara Zamindar Palace:Historical Place</h4>
        <p>  was built during 1890 by Ramratan Banarjee. He was a trusted person of a British Indigo Planter during the British Colonial period. </p>
        <h6>1200</h6>
       </div>
    </div>
    <div className="blogcard">
        <div className="blogimg">
            <img src={blog3} alt="img" />
        </div>
        <div className='blogitems'>
        <h6>march28,2024</h6>
        <h4>Tanguar haor: A Megical Place worth revisiting</h4>
        <p>  Tanguar Haor is one of the most prominent wetland areas in South Asia. It is visited by over 200 species of migratory birds every year. </p>
        <h6>12000</h6>
        </div>
    </div>
  </div>
  </>
  )
}

export default Blog