/* eslint-disable no-unused-vars */
import React from 'react';
import { HiOutlineTruck, HiOutlineCube } from 'react-icons/hi';
import deliveryPng from '../assets/l3.jpg';
import { FaPhoneAlt, FaEnvelope, FaArrowRight } from 'react-icons/fa';
import { useState } from 'react';
import { Link ,  useNavigate} from 'react-router-dom';

const HomePage = () => {
  const [email, setEmail] = useState('');
  const navigator = useNavigate();

  const validateEmail = (email) => {
    const re = /\S+@\S+\.\S+/;
    return re.test(email);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateEmail(email)) {
      alert('Thank you for subscribing!');
    } else {
      alert('Please enter a valid email address.');
    }
  };




  return (
    <div className="bg-gray-100 py-12  ">
      <div className="container mx-auto">
        <h1 className="text-4xl font-bold text-center mb-8">
          Welcome to Delivery Management
        </h1>
        <div className="flex flex-col md:flex-row md:justify-center items-center space-y-8 md:space-y-0 md:space-x-8">
          <div className="flex flex-col items-center">
            <HiOutlineTruck  size={64} color="#16a34a"   />
            <h2 className="text-2xl font-bold mb-2">Delivery Management</h2>
            <p className="text-gray-700">
              Track your deliveries, view real-time status updates, and optimize routes for faster, more efficient delivery.
            </p>
          </div>
          <div className="flex flex-col items-center">
            <HiOutlineCube    size={64} color="#f43f5e" />
            <h2 className="text-2xl font-bold mb-2">Inventory Management</h2>
            <p className="text-gray-700">
              Keep your inventory accurate and up-to-date with our powerful, user-friendly inventory management system.
            </p>
          </div>
        </div>
        <div className="container mx-auto">
          <img src={deliveryPng} alt="Delivery" className="mx-auto mt-12" />
        </div>
        <div className="container mx-auto mt-12">
          <h2 className="text-2xl font-bold text-center mb-8">
            Subscribe for Updates
          </h2>
          <form onSubmit={handleSubmit} className="flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-4">
            <input
              type="email"
              name="email"
              id="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="border-2 border-gray-300 p-2 rounded-md"
            />
            <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded-md">
              Subscribe
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default HomePage;