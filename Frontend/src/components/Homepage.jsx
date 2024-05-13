/* eslint-disable no-unused-vars */
import React from 'react';
import { HiOutlineTruck, HiOutlineCube } from 'react-icons/hi';
import deliveryPng from '../assets/l3.jpg';
import delivery from '../assets/right.png';
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
    <div className="bg-white py-12 ">
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
          <h2 className="text-2xl font-bold  mb-8">
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
            <button type="submit" className="bg-blue-500 flex flex-col text-white px-4 py-2 rounded-md">
              Subscribe
            </button>
          </form>
          <div className="container mr-10  ">
           <h2 className='text-center text-3xl font-bold mt-10'>Delivery Details</h2>
          {/* <img src={delivery} alt="Delivery" className="mr-80 mx-auto mt-12" /> */}
          <div className=" md:w-full md:h-[80vh] text-lg flex-shrink shadow-lg  flex md:flex mt-4 bg-blue-500">

        <div className=" md:flex  md:justify-center md:items-center boarder-round  md:space-x-35 md:mt-4  ">
          <div className="  mb-5 px-5 shadow-black" >
            <img className=" md:h-[49vh]  shadow-black object-fill mt-7 md:w-80 md:mt-0" src="https://imgs.search.brave.com/qErwrjAvBjfOgfKMsC6GQVfgzBN27_l8BgOBVX35HFo/rs:fit:500:0:0/g:ce/aHR0cHM6Ly90aHVt/YnMuZHJlYW1zdGlt/ZS5jb20vYi9wb3N0/YWwtZGVsaXZlcnkt/Y291cmllci1kZWxp/dmVyaW5nLTE0OTgy/Nzc1LmpwZw" />
            <p className=" md:w-80  bg-white md:p-1">
            If your location is hard to find or if there are any landmarks nearby that can help identify your address, include them in your instructions.
            </p>
          </div>

          <div className=" px-5 space-x-3 shadow-black">
            <img className=" md:h-[50vh]  ml-3 shadow-lg  mt-7 md:w-80 md:mt-0" src="https://img.freepik.com/free-photo/young-delivery-man-wor_23-2147914159.jpg?t=st=1715441853~exp=1715445453~hmac=34499c61586f5f4a45a2fea96e3b864ad91cbe8f5a49c8155e4ff29aa85a1808&w=740 " />
            <p className=" md:w-80 md:p-1 bg-white ">
            f there are any security gates, doors, or access codes required to enter your property, make sure to provide them to the delivery person.


            </p>
          </div>

          <div className=" mb-7 md:mb-7 shadow-black px-5">
            <img className="  md:h-[49vh]   shadow-black  md:w-80 mt-7  md:mt-3" src="https://img.freepik.com/premium-photo/delivery-person-giving-parcel-customer-standing-outdoors_1048944-2762251.jpg?w=1380" />
            <p className=" bg-white md:w-80 md:p-1 ">
            If you have specific times when you prefer the delivery to be made, you can mention that as well, although this may not always be possible depending on the delivery service.
            </p>
          </div>
          <div className=" mb-7 md:mb-7 shadow-black px-5">
            <img className="  md:h-[49vh]   shadow-black  md:w-80 mt-7  md:mt-3" src="https://imgs.search.brave.com/UP_jfiCrj9l8wfaScvWokH3wu14-Xtp52Ad9ay0_BB8/rs:fit:500:0:0/g:ce/aHR0cHM6Ly93d3cu/d2hpdGVyb29tc3R1/ZGlvLmNvbS5zZy93/b3JkcHJlc3Mvd3At/Y29udGVudC91cGxv/YWRzLzIwMjAvMDEv/QmlnLUZhbWlseS1Q/aG90b3Nob290LVNp/bmdhcG9yZV8wMDgt/OTc1eDE0NjMuanBn" />
            <p className=" bg-white md:w-80 md:p-1 ">
            If there a nearby store or neighbor where the package can be left if you are not available, you can mention that as an alternative option.
            </p>
          </div>
        </div>
        </div>
        </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;