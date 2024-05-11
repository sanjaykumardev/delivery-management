import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import LOGO from "../assets/l3.png"


const Navbar = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(localStorage.getItem('token') !== null);
  // const [loading, setLoading] = useState(false);
  const navigator = useNavigate();
  const handleLogout = () => {
    localStorage.removeItem('token');
    console.log(isLoggedIn);
    setIsLoggedIn(false);
    navigator('/Loader');
    setTimeout(() => {
      navigator('/');
    }, 1000);

  };

  return (
    <nav className=" bg-blue-500  p-4  ">
      <div className="container ml-60 md:mt-2 md:mb-10 flex justify-between items-center">
        <Link to="/home" className="text-white text-sm  mr-80 font-bold">
          <img className="h-[160px] w-auto" src={LOGO} alt="Example" />
          <p className='mt-1 text-3xl text-center'>Delivery Track</p>
        </Link>

        <div className="hidden md:flex  text-lg space-x-20 ml-20">
          <Link to="/" className="text-white font-bold">
            Home
          </Link>
          <Link to="/about" className="text-white font-bold hover::shadow-black-500/50 ">
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
            <>
              <button onClick={handleLogout} className="bg-red-500 text-white text-lg font-semi-bold shadow-md shadow-black-500/50 px-5 py-4  rounded">
                Logout
                <Link to="/Loader"></Link> </button>

            </>
          ) : (
            <>
              <Link to="/">
                <button className=" shadow-md bg-black shadow-black-500/50 ml-10 text-xl font-bold text-white px-4 py-2 rounded">
                  Sign In
                </button>
              </Link>
              <Link to="/register">
                <button className="bg-black shadow-md  font-bold text-white text-xl px-4 py-2 rounded">
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
