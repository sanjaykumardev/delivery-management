/* eslint-disable no-unused-vars */
import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import 'tailwindcss/tailwind.css';

const Delivery = () => {
  return (
    <>
    <Navbar/>
    <div className="flex flex-wrap justify-center">
    {/* 1-content */}
      <div className="w-full md:w-1/2 lg:w-1/5 p-6">
        <div className="bg-white rounded-lg shadow-lg p-6">
          <img
            className="w-full h-48 object-cover rounded-md mb-4"
            src="https://imgs.search.brave.com/NyeZ6lVp_S32riPPX0DBSdkjMPVKG4vgT8EfV-vfMZA/rs:fit:860:0:0/g:ce/aHR0cHM6Ly91cGxv/YWQud2lraW1lZGlh/Lm9yZy93aWtpcGVk/aWEvY29tbW9ucy8y/LzI2L01pY3JvY2hp/cF9QSUMyNEhKMzJH/UDIwMi5qcGc"
            alt="Product"
          />
          <div className="text-lg font-bold mb-2">Loremsdvsds</div>
          <p className="text-green-700 mb-2">On Board</p>
          <p className="mb-4">Address</p>
          <div className="flex justify-center">
            <Link to="/desp" className="bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 rounded-full">
              View
            </Link>
          </div>
        </div>
      </div>
  {/* 2-content */}
      <div className="w-full md:w-1/2 lg:w-1/5 p-6">
        <div className="bg-white rounded-lg shadow-lg p-6">
          <img
            className="w-full h-48 object-cover rounded-md mb-4"
            src="https://imgs.search.brave.com/NyeZ6lVp_S32riPPX0DBSdkjMPVKG4vgT8EfV-vfMZA/rs:fit:860:0:0/g:ce/aHR0cHM6Ly91cGxv/YWQud2lraW1lZGlh/Lm9yZy93aWtpcGVk/aWEvY29tbW9ucy8y/LzI2L01pY3JvY2hp/cF9QSUMyNEhKMzJH/UDIwMi5qcGc"
            alt="Product"
          />
          <div className="text-lg font-bold mb-2">Loremsdvsds</div>
          <p className="text-green-700 mb-2">On Board</p>
          <p className="mb-4">Address</p>
          <div className="flex justify-center">
            <Link to="/desp" className="bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 rounded-full">
              View
            </Link>
          </div>
        </div>
      </div>

      {/* Add as many boxes as you need */}
      <div className="w-full md:w-1/2 lg:w-1/5 p-6">
        <div className="bg-white rounded-lg shadow-lg p-6">
          <img
            className="w-full h-48 object-cover rounded-md mb-4"
            src="https://imgs.search.brave.com/NyeZ6lVp_S32riPPX0DBSdkjMPVKG4vgT8EfV-vfMZA/rs:fit:860:0:0/g:ce/aHR0cHM6Ly91cGxv/YWQud2lraW1lZGlh/Lm9yZy93aWtpcGVk/aWEvY29tbW9ucy8y/LzI2L01pY3JvY2hp/cF9QSUMyNEhKMzJH/UDIwMi5qcGc"
            alt="Product"
          />
          <div className="text-lg font-bold mb-2">Loremsdvsds</div>
          <p className="text-green-700 mb-2">On Board</p>
          <p className="mb-4">Address</p>
          <div className="flex justify-center">
            <Link to="/desp" className="bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 rounded-full">
              View
            </Link>
          </div>
        </div>
      </div>


      <div className="w-full md:w-1/2 lg:w-1/5 p-6">
        <div className="bg-white rounded-lg shadow-lg p-6">
          <img
            className="w-full h-48 object-cover rounded-md mb-4"
            src="https://imgs.search.brave.com/NyeZ6lVp_S32riPPX0DBSdkjMPVKG4vgT8EfV-vfMZA/rs:fit:860:0:0/g:ce/aHR0cHM6Ly91cGxv/YWQud2lraW1lZGlh/Lm9yZy93aWtpcGVk/aWEvY29tbW9ucy8y/LzI2L01pY3JvY2hp/cF9QSUMyNEhKMzJH/UDIwMi5qcGc"
            alt="Product"
          />
          <div className="text-lg font-bold mb-2">Loremsdvsds</div>
          <p className="text-green-700 mb-2">On Board</p>
          <p className="mb-4">Address</p>
          <div className="flex justify-center">
            <Link to="/desp" className="bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 rounded-full">
              View
            </Link>
          </div>
        </div>
      </div>


      <div className="w-full md:w-1/2 lg:w-1/5 p-6">
        <div className="bg-white rounded-lg shadow-lg p-6">
          <img
            className="w-full h-48 object-cover rounded-md mb-4"
            src="https://imgs.search.brave.com/NyeZ6lVp_S32riPPX0DBSdkjMPVKG4vgT8EfV-vfMZA/rs:fit:860:0:0/g:ce/aHR0cHM6Ly91cGxv/YWQud2lraW1lZGlh/Lm9yZy93aWtpcGVk/aWEvY29tbW9ucy8y/LzI2L01pY3JvY2hp/cF9QSUMyNEhKMzJH/UDIwMi5qcGc"
            alt="Product"
          />
          <div className="text-lg font-bold mb-2">Loremsdvsds</div>
          <p className="text-green-700 mb-2">On Board</p>
          <p className="mb-4">Address</p>
          <div className="flex justify-center">
            <Link to="/desp" className="bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 rounded-full">
              View
            </Link>
          </div>
        </div>
      </div>


      <div className="w-full md:w-1/2 lg:w-1/5 p-6">
        <div className="bg-white rounded-lg shadow-lg p-6">
          <img
            className="w-full h-48 object-cover rounded-md mb-4"
            src="https://imgs.search.brave.com/NyeZ6lVp_S32riPPX0DBSdkjMPVKG4vgT8EfV-vfMZA/rs:fit:860:0:0/g:ce/aHR0cHM6Ly91cGxv/YWQud2lraW1lZGlh/Lm9yZy93aWtpcGVk/aWEvY29tbW9ucy8y/LzI2L01pY3JvY2hp/cF9QSUMyNEhKMzJH/UDIwMi5qcGc"
            alt="Product"
          />
          <div className="text-lg font-bold mb-2">Loremsdvsds</div>
          <p className="text-green-700 mb-2">On Board</p>
          <p className="mb-4">Address</p>
          <div className="flex justify-center">
            <Link to="/desp" className="bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 rounded-full">
              View
            </Link>
          </div>
        </div>
      </div>

      
      
      <div className="w-full md:w-1/2 lg:w-1/5 p-6">
        <div className="bg-white rounded-lg shadow-lg p-6">
          <img
            className="w-full h-48 object-cover rounded-md mb-4"
            src="https://imgs.search.brave.com/NyeZ6lVp_S32riPPX0DBSdkjMPVKG4vgT8EfV-vfMZA/rs:fit:860:0:0/g:ce/aHR0cHM6Ly91cGxv/YWQud2lraW1lZGlh/Lm9yZy93aWtpcGVk/aWEvY29tbW9ucy8y/LzI2L01pY3JvY2hp/cF9QSUMyNEhKMzJH/UDIwMi5qcGc"
            alt="Product"
          />
          <div className="text-lg font-bold mb-2">Loremsdvsds</div>
          <p className="text-green-700 mb-2">On Board</p>
          <p className="mb-4">Address</p>
          <div className="flex justify-center">
            <Link to="/desp" className="bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 rounded-full">
              View
            </Link>
          </div>
        </div>
      </div>

      <div className="w-full md:w-1/2 lg:w-1/5 p-6">
        <div className="bg-white rounded-lg shadow-lg p-6">
          <img
            className="w-full h-48 object-cover rounded-md mb-4"
            src="https://imgs.search.brave.com/NyeZ6lVp_S32riPPX0DBSdkjMPVKG4vgT8EfV-vfMZA/rs:fit:860:0:0/g:ce/aHR0cHM6Ly91cGxv/YWQud2lraW1lZGlh/Lm9yZy93aWtpcGVk/aWEvY29tbW9ucy8y/LzI2L01pY3JvY2hp/cF9QSUMyNEhKMzJH/UDIwMi5qcGc"
            alt="Product"
          />
          <div className="text-lg font-bold mb-2">Loremsdvsds</div>
          <p className="text-green-700 mb-2">On Board</p>
          <p className="mb-4">Address</p>
          <div className="flex justify-center">
            <Link to="/desp" className="bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 rounded-full">
              View
            </Link>
          </div>
        </div>
      </div>

      <div className="w-full md:w-1/2 lg:w-1/5 p-6">
        <div className="bg-white rounded-lg shadow-lg p-6">
          <img
            className="w-full h-48 object-cover rounded-md mb-4"
            src="https://imgs.search.brave.com/NyeZ6lVp_S32riPPX0DBSdkjMPVKG4vgT8EfV-vfMZA/rs:fit:860:0:0/g:ce/aHR0cHM6Ly91cGxv/YWQud2lraW1lZGlh/Lm9yZy93aWtpcGVk/aWEvY29tbW9ucy8y/LzI2L01pY3JvY2hp/cF9QSUMyNEhKMzJH/UDIwMi5qcGc"
            alt="Product"
          />
          <div className="text-lg font-bold mb-2">Loremsdvsds</div>
          <p className="text-green-700 mb-2">On Board</p>
          <p className="mb-4">Address</p>
          <div className="flex justify-center">
            <Link to="/desp" className="bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 rounded-full">
              View
            </Link>
          </div>
        </div>
      </div>
    
      
      <div className="w-full md:w-1/2 lg:w-1/5 p-6">
        <div className="bg-white rounded-lg shadow-lg p-6">
          <img
            className="w-full h-48 object-cover rounded-md mb-4"
            src="https://imgs.search.brave.com/NyeZ6lVp_S32riPPX0DBSdkjMPVKG4vgT8EfV-vfMZA/rs:fit:860:0:0/g:ce/aHR0cHM6Ly91cGxv/YWQud2lraW1lZGlh/Lm9yZy93aWtpcGVk/aWEvY29tbW9ucy8y/LzI2L01pY3JvY2hp/cF9QSUMyNEhKMzJH/UDIwMi5qcGc"
            alt="Product"
          />
          <div className="text-lg font-bold mb-2">Loremsdvsds</div>
          <p className="text-green-700 mb-2">On Board</p>
          <p className="mb-4">Address</p>
          <div className="flex justify-center">
            <Link to="/desp" className="bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 rounded-full">
              View
            </Link>
          </div>
        </div>
      </div>


      <div className="w-full md:w-1/2 lg:w-1/5 p-6">
        <div className="bg-white rounded-lg shadow-lg p-6">
          <img
            className="w-full h-48 object-cover rounded-md mb-4"
            src="https://imgs.search.brave.com/NyeZ6lVp_S32riPPX0DBSdkjMPVKG4vgT8EfV-vfMZA/rs:fit:860:0:0/g:ce/aHR0cHM6Ly91cGxv/YWQud2lraW1lZGlh/Lm9yZy93aWtpcGVk/aWEvY29tbW9ucy8y/LzI2L01pY3JvY2hp/cF9QSUMyNEhKMzJH/UDIwMi5qcGc"
            alt="Product"
          />
          <div className="text-lg font-bold mb-2">Loremsdvsds</div>
          <p className="text-green-700 mb-2">On Board</p>
          <p className="mb-4">Address</p>
          <div className="flex justify-center">
            <Link to="/desp" className="bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 rounded-full">
              View
            </Link>
          </div>
        </div>
      </div>

      <div className="w-full md:w-1/2 lg:w-1/5 p-6">
        <div className="bg-white rounded-lg shadow-lg p-6">
          <img
            className="w-full h-48 object-cover rounded-md mb-4"
            src="https://imgs.search.brave.com/NyeZ6lVp_S32riPPX0DBSdkjMPVKG4vgT8EfV-vfMZA/rs:fit:860:0:0/g:ce/aHR0cHM6Ly91cGxv/YWQud2lraW1lZGlh/Lm9yZy93aWtpcGVk/aWEvY29tbW9ucy8y/LzI2L01pY3JvY2hp/cF9QSUMyNEhKMzJH/UDIwMi5qcGc"
            alt="Product"
          />
          <div className="text-lg font-bold mb-2">Loremsdvsds</div>
          <p className="text-green-700 mb-2">On Board</p>
          <p className="mb-4">Address</p>
          <div className="flex justify-center">
            <Link to="/desp" className="bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 rounded-full">
              View
            </Link>
          </div>
        </div>
      </div>


      <div className="w-full md:w-1/2 lg:w-1/5 p-6">
        <div className="bg-white rounded-lg shadow-lg p-6">
          <img
            className="w-full h-48 object-cover rounded-md mb-4"
            src="https://imgs.search.brave.com/NyeZ6lVp_S32riPPX0DBSdkjMPVKG4vgT8EfV-vfMZA/rs:fit:860:0:0/g:ce/aHR0cHM6Ly91cGxv/YWQud2lraW1lZGlh/Lm9yZy93aWtpcGVk/aWEvY29tbW9ucy8y/LzI2L01pY3JvY2hp/cF9QSUMyNEhKMzJH/UDIwMi5qcGc"
            alt="Product"
          />
          <div className="text-lg font-bold mb-2">Loremsdvsds</div>
          <p className="text-green-700 mb-2">On Board</p>
          <p className="mb-4">Address</p>
          <div className="flex justify-center">
            <Link to="/desp" className="bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 rounded-full">
              View
            </Link>
          </div>
        </div>
      </div>



      <div className="w-full md:w-1/2 lg:w-1/5 p-6">
        <div className="bg-white rounded-lg shadow-lg p-6">
          <img
            className="w-full h-48 object-cover rounded-md mb-4"
            src="https://imgs.search.brave.com/NyeZ6lVp_S32riPPX0DBSdkjMPVKG4vgT8EfV-vfMZA/rs:fit:860:0:0/g:ce/aHR0cHM6Ly91cGxv/YWQud2lraW1lZGlh/Lm9yZy93aWtpcGVk/aWEvY29tbW9ucy8y/LzI2L01pY3JvY2hp/cF9QSUMyNEhKMzJH/UDIwMi5qcGc"
            alt="Product"
          />
          <div className="text-lg font-bold mb-2">Loremsdvsds</div>
          <p className="text-green-700 mb-2">On Board</p>
          <p className="mb-4">Address</p>
          <div className="flex justify-center">
            <Link to="/desp" className="bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 rounded-full">
              View
            </Link>
          </div>
        </div>
      </div>



      <div className="w-full md:w-1/2 lg:w-1/5 p-6">
        <div className="bg-white rounded-lg shadow-lg p-6">
          <img
            className="w-full h-48 object-cover rounded-md mb-4"
            src="https://imgs.search.brave.com/NyeZ6lVp_S32riPPX0DBSdkjMPVKG4vgT8EfV-vfMZA/rs:fit:860:0:0/g:ce/aHR0cHM6Ly91cGxv/YWQud2lraW1lZGlh/Lm9yZy93aWtpcGVk/aWEvY29tbW9ucy8y/LzI2L01pY3JvY2hp/cF9QSUMyNEhKMzJH/UDIwMi5qcGc"
            alt="Product"
          />
          <div className="text-lg font-bold mb-2">Loremsdvsds</div>
          <p className="text-green-700 mb-2">On Board</p>
          <p className="mb-4">Address</p>
          <div className="flex justify-center">
            <Link to="/desp" className="bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 rounded-full">
              View
            </Link>
          </div>
        </div>
      </div>

     
    </div>
    <Footer/>
    </>
  );
};

export default Delivery;