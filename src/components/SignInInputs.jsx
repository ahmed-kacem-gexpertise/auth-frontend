import React from "react";
import { Link } from "react-router-dom";
const SignInInputs = () => {
  const [checked, setChecked] =React.useState(false);

  const handleChange = () => {
    setChecked(!checked);
  };
  return (
    <form className='flex flex-col gap-5 '>
      <div className="">
        <label className="block text-gray-700 mb-2" htmlFor="username">
          <i className="fas fa-user mr-2"></i>
          Enter your username/email
        </label>
        <input
          className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-red-600"
          id="username"
          type="text"
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 mb-2" htmlFor="password">
          <i className="fas fa-lock mr-2"></i>
          Enter your password
        </label>
        <input
          className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-red-600"
          id="password"
          type="password"
        />
      </div>
      <div className="mb-4 text-right flex flex-row justify-between align-center  ">
        <div className="w-full">
          <label className="flex flex-row  gap-2 h-7 ">
            Remember me
            <input type="checkbox" checked={checked} onChange={handleChange} />
          </label>
        </div>
        <Link className="text-gray-600 w-full" to='/support'>
          Having trouble in login?
        </Link>
      </div>
      <button
        className="w-full bg-red-600 text-white py-2 rounded-lg hover:bg-red-700 transition duration-300"
        type="submit"
      >
        Login
      </button>
    </form>
  );
};

export default SignInInputs;
