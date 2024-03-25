import React from 'react'
import Sidebar from '../components/Sidebar'
import Steps from './Steps'
import Footer from '../components/layout/Footer'
import Marks from '../components/layout/marks/Marks'
import Chooseus from './choose us/Chooseus'
import Blog from './blog/Blog'
import Banner from './banner/Banner'
import Return from './Return'

const Home = () => {
  return (
    <>
   <Sidebar/>
   <Banner/>
   <Steps/>
   <Marks/>
   <Blog/>
   <Chooseus/>
   <Return/>
   <Footer/>
    </>
  )
}

export default Home