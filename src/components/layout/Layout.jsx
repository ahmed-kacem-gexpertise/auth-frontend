import React from 'react'
import { Outlet } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer'
const Layout = () => {
    return (
        <div className="flex flex-col justify-between w-full min-h-screen" >
        <Header/>
      
        <main className=" min-h-full  flex items-start justify-center ">
          
          <Outlet />
        </main>
        
        <Footer/>
        
      </div>
    )
}

export default Layout
