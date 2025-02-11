import { Link } from "react-router-dom";
import { FaHome, FaBell, FaUser, FaGlobe } from "react-icons/fa";

const Navbar = () => {
  return (
    <nav className="bg-gray-900 p-4 flex justify-end  items-center  ">
      <div className="flex lg:w-1/4 md:w-1/3 w-2/4 justify-between">

        <div className="flex items-center gap-x-4">
          <Link to="/" className="text-white text-2xl">
            <FaHome />
          </Link>
          <Link to="/notifications" className="text-white text-2xl">
            <FaBell />
          </Link>
        </div>

        <div className="flex items-center gap-x-4">
          <Link to="/profile" className="text-white text-2xl">
            <FaUser />
          </Link>
          <Link to="#" className="text-white text-2xl flex items-center gap-x-1">
            <span className="text-sm">FR</span> <FaGlobe />
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;