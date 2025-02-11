import React from 'react'
import { Outlet } from 'react-router-dom';
import Footer from './Footer'
import Navbar from './Navbar';
const Layout = () => {
    return (
        <div className="flex flex-col justify-between w-full min-h-screen" >
        <Navbar/>
      
        <main className=" min-h-full  flex items-start justify-center ">
          
          <Outlet />
        </main>
        
        <Footer/>
        
      </div>
    )
}

export default Layout
