import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Menu, X } from "lucide-react";

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("token");
    setIsAuthenticated(!!token);
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("token");
    setIsAuthenticated(false);
    navigate("/login");
  };

  return (
    <nav className="bg-gray-800 p-4 fixed top-0 left-0 right-0 z-50 shadow-md">
      <div className="flex items-center justify-between max-w-7xl mx-auto">
      
        <div className="text-white text-2xl md:text-3xl font-bold hover:text-blue-500 transition duration-200">
          <Link to="/" className="italic">QuickStay</Link>
        </div>

        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)} className="text-white focus:outline-none">
            {isOpen ? <X size={30} /> : <Menu size={30} />}
          </button>
        </div>

        <ul className={`md:flex space-x-6 absolute md:static bg-gray-800 md:bg-transparent top-16 left-0 w-full md:w-auto transition-all duration-300 ease-in-out 
            ${isOpen ? "scale-y-100 opacity-100" : "scale-y-0 opacity-0 md:opacity-100 md:scale-y-100"} transform origin-top`}>
          <li><Link to="/" className="text-white text-lg block px-6 py-3 md:py-2 md:px-4 hover:text-blue-400 transition">Home</Link></li>
          <li><Link to="/about" className="text-white text-lg block px-6 py-3 md:py-2 md:px-4 hover:text-blue-400 transition">About</Link></li>
          <li><Link to="/find Room " className="text-white text-lg block px-6 py-3 md:py-2 md:px-4 hover:text-blue-400 transition">Find Room</Link></li>
          <li><Link to="/blog" className="text-white text-lg block px-6 py-3 md:py-2 md:px-4 hover:text-blue-400 transition">Blog</Link></li>
          <li><Link to="/contact" className="text-white text-lg block px-6 py-3 md:py-2 md:px-4 hover:text-blue-400 transition">Contact Us</Link></li>

          {isAuthenticated ? (
            <li className="relative group">
              <Link to="/profile" className="text-white text-lg block px-6 py-3 md:py-2 md:px-4 hover:text-blue-400 transition">
                Profile
              </Link>
              <button 
                onClick={handleLogout} 
                className="absolute top-full left-0 w-full bg-blue-500 text-white text-lg px-4 py-2 rounded-lg hidden group-hover:block transition-all duration-300 shadow-md hover:bg-blue-600">
                Logout
              </button>
            </li>
          ) : (
            <li>
              <Link to="/login">
                <button className="bg-blue-700 text-white w-full md:w-auto px-6 py-3 rounded-lg hover:bg-blue-800 transition-all duration-200 shadow-md hover:shadow-lg">
                  Login
                </button>
              </Link>
            </li>
          )}
        </ul>
      </div>
    </nav>
  );
};
