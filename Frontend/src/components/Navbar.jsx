import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Navbar = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(localStorage.getItem('token') !== null);
  const navigator = useNavigate();
  const handleLogout = () => {
    localStorage.removeItem('token');
    console.log(isLoggedIn);
    setIsLoggedIn(false);
    navigator('/');
  };

  return (
    <nav className="bg-blue-500 p-4 shadow-lg">
      <div className="container mx-auto md:mt-2 md:mb-2 flex justify-between items-center">
        <Link to="/home" className="text-white text-3xl font-bold">
          Delivery Management
        </Link>

        <div className="hidden md:flex  text-lg space-x-20 ml-28">
          <Link to="/" className="text-white font-bold">
            Home
          </Link>
          <Link to="/about" className="text-white font-bold ">
            About
          </Link>
          <Link to="/services" className="text-white font-bold">
            Services
          </Link>
          <Link to="/contact" className="text-white  font-bold">
            Contact
          </Link>
        </div>

        <div className="flex space-x-4 ml-20">
          {isLoggedIn ? (
            <button onClick={handleLogout} className="bg-red-500   shadow-md shadow-balck-500/50 text-white px-5 py-4  rounded">
              Logout
              <Link to="/register"></Link> </button>
          ) : (
            <>
              <Link to="/">
                <button className="bg-white shadow-md shadow-black-500/50 ml-10 font-bold text-black px-4 py-2 rounded">
                  Sign In
                </button>
              </Link>
              <Link to="/register">
                <button className="bg-white shadow-md shadow-black-500/50 font-bold text-black px-4 py-2 rounded">
                  Sign Up
                </button>
              </Link>
            </>
          )}
        </div>

        <div className="md:hidden">
          {/* Mobile menu toggle button */}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
