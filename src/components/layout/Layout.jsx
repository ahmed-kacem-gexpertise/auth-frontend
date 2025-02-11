import React from 'react'
import { Outlet } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer'
const Layout = () => {
    return (
        <div className="w-full">
        <Header/>
      
        <div className=" min-h-screen flex items-center justify-center ">

          <Outlet />
        </div>
        
        <Footer/>
        
      </div>
    )
}

export default Layout
