import React, { useState } from "react";
import { HiMenuAlt3 } from "react-icons/hi";
import { FaMapPin } from "react-icons/fa";       // Font Awesome
import { BiBuilding } from "react-icons/bi";     // BoxIcons
import { HiDocumentText } from "react-icons/hi"; // Heroicons
import { FaBox } from "react-icons/fa";          // Font Awesome
import { FaUsers } from "react-icons/fa";        // Font Awesome
import { FiDownload } from "react-icons/fi";     // Feather Icons

import { Link, useLocation } from "react-router-dom";
import Logo from '../../assets/Logo.svg'
const menus = [
  { name: "Dashboard", link: "/", icon: FaMapPin },
  { name: "User", link: "/user", icon:BiBuilding  },
  { name: "Messages", link: "/messages", icon: HiDocumentText },
  { name: "Analytics", link: "/analytics", icon: FaBox, margin: true },
  { name: "File Manager", link: "/files", icon: FaUsers },
  { name: "Cart", link: "/cart", icon: FiDownload },
  
];

const SidebarItem = ({ menu, open }) => {
  const location = useLocation();
  const isActive = location.pathname === menu.link;

  return (
    <Link
      to={menu.link}
      className={`group flex items-center text-md text-black gap-3.5 font-medium p-2 rounded-md 
        ${isActive ? "bg-gray-300" : "hover:bg-gray-300"}
        `}
    >
      <div>{React.createElement(menu.icon, { size: 20 })}</div>
      <h2 className={`whitespace-pre duration-500 ${!open && "opacity-0 translate-x-28 "}`}>
        {menu.name}
      </h2>
      
    </Link>
  );
};

const Sider = () => {
  const [open, setOpen] = useState(true);

  return (
    <div className={`bg-white  ${open ? "w-72" : "w-20"} duration-500 text-gray-100 px-4 flex flex-col  h-full py-8 justify-center gap-5 `}>
    <div className=" max-w-sm flex justify-center ">
        
    <img src={Logo} className="w-24" />
    </div>

    
      <div className="py-3 flex justify-end text-black">
        <HiMenuAlt3 size={26} className="cursor-pointer" onClick={() => setOpen(!open)} aria-label="Toggle Sidebar" />
        
      </div>

      <div className="mt-4 flex flex-col gap-4 relative">
        {menus.map((menu) => (
          <SidebarItem key={menu.name} menu={menu} open={open} />
        ))}
      </div>
    </div>
  );
};

export default Sider;
