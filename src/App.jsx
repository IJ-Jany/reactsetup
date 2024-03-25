import { useState } from 'react'

import{
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  Route
} from "react-router-dom"
import Rootlayout from './components/layout/Rootlayout'
import Service from './pages/Service'
import Contact from './pages/Contact'
import About from './pages/About'
import Home from './pages/Home'
import Sidebar from './components/Sidebar'

function App() {
 const router= createBrowserRouter(
  createRoutesFromElements(
    <>
    <Route element={<Rootlayout/>}/>
    <Route path='/' element={<Home/>}/>
    <Route path='/about' element={<About/>}/>
    <Route path='/service' element={<Service/>}/>
    <Route path='/contact' element={<Contact/>}/>
    </>
  )
 )

  return (
    <>
    <RouterProvider router={router}/>
    </>
  )
}

export default App
