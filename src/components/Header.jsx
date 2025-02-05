import React from 'react';
import Logo from '../assets/logo-gexpertise.png'
const Header = () => {
  return (
    <div className="bg-red-600 text-white p-8 md:w-1/2 flex flex-col justify-center items-center">
      <div className="text-center">
        <h1 className="text-2xl md:text-3xl font-bold mb-4">Hello, welcome to!</h1>
        <img
          alt="Gexpertise logo"
          className="mx-auto "
          height="100"
          src={Logo}
          width="150"
        />
        
      </div>
    </div>
  );
};

export default Header;