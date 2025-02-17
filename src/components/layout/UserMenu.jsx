import { Link } from "react-router-dom";
import { FaUser, FaSignOutAlt } from "react-icons/fa";
import { useState } from "react";
import useAuthLogout from "../../hooks/useAuthLogout";
import { useQueryClient } from "@tanstack/react-query";
const UserMenu = () => {
  const queryClient = useQueryClient();
  const [isOpen, setIsOpen] = useState(false);
const {mutate:logout} = useAuthLogout()
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleLogout = () => {
    queryClient.resetQueries();
    logout()
  };

  return (
    <div className="relative">
      <button
        onClick={toggleMenu}
        className="text-white text-2xl flex items-center"
      >
        <FaUser />
      </button>
      {isOpen && (
        <div className="absolute right-0 mt-2 bg-gray-800 text-white p-2 rounded shadow-lg">
          <Link to="/profile" className="block px-4 py-2 hover:bg-gray-700">
            Profile
          </Link>
          <button
            onClick={handleLogout}
            className="block px-4 py-2 hover:bg-gray-700 w-full text-left"
          >
            <FaSignOutAlt className="mr-2" />
            Deconnexion
          </button>
        </div>
      )}
    </div>
  );
};

export default UserMenu;
