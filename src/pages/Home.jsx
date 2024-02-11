import React from 'react'
import Sidebar from '../components/Sidebar'
import Steps from './Steps'
import Footer from '../components/layout/Footer'
import Marks from '../components/layout/marks/Marks'

const Home = () => {
  return (
    <>
   <Sidebar/>
   <Steps/>
   <Marks/>
   <Footer/>
    </>
  )
}

export default Home