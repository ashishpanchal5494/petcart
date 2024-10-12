import React from 'react'
import Navbar from './Navbar'
import { Outlet } from 'react-router-dom'
import Footer from './Footer'
import Newsletter from './Newsletter'

function Layout() {
  return (
    <div>
      <Navbar/>
      <Outlet/>
      <Newsletter/>
      <Footer/>
    </div>
  )
}

export default Layout
