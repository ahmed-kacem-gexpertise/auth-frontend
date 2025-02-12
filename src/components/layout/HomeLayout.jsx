import React from 'react'
import { Outlet } from 'react-router-dom';
import Footer from './Footer'
import Navbar from './Navbar';
import Sider from './Sider';
const Layout = () => {
    return (
        <div className="flex flex-col bg-white justify-between w-full min-h-screen" >
        <Navbar/>
        <div className="flex flex-1 ">

          
                
                <Sider/>
               
        <main className=" min-h-full  w-full flex items-start justify-center ">
          
          <Outlet />
        </main>
        
        </div>
        <Footer/>
        
      </div>
    )
}

export default Layout
