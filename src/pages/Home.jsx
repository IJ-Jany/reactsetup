import React from 'react'
import Sidebar from '../components/Sidebar'
import Steps from './Steps'
import Footer from '../components/layout/Footer'
import Marks from '../components/layout/marks/Marks'
import Chooseus from './choose us/Chooseus'
import Blog from './blog/Blog'

const Home = () => {
  return (
    <>
   <Sidebar/>
   <Steps/>
   <Marks/>
   <Blog/>
   <Chooseus/>
   <Footer/>
    </>
  )
}

export default Home