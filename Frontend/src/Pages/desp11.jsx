/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable no-unused-vars */
/* eslint-disable no-unused-vars */
import React from 'react';
import Footer from '../components/Footer';
import leftArrow from '../assets/l2.png';
import Navbar from '../components/Navbar';
import {useNavigate} from 'react-router-dom';


function desp11() {



  const navigator = useNavigate();

  const viewhandle = () => {
    navigator("/delivery")
  }

  const viewtracking = () => {
    navigator("/track11")
  }

  return (
    <>
       <Navbar />
      <div className="mr-8">
        <img
          onClick={viewhandle}
          src={leftArrow} alt="Left Arrow" className="w-11 bg-gray-200 p-2 ml-5 mt-3 rounded-full" />
      </div>
      <div className="flex mt-20 md:px-[300px] items-center">
        <div className="md:grid-cols-2 justity-center items-center">
          <h2 className='text-4xl font-bold mb-3'>Product Details</h2>
          <img src="https://img.freepik.com/free-vector/washing-machine-realistic-composition-with-housework-equipment-symbols-illustration_1284-29129.jpg?t=st=1715621707~exp=1715625307~hmac=554a1dcf63e1f4f6ef3a974168e24ce4e175d19aa0c7b60af72a306836e3bdaa&w=996
" alt="Product" className="w-40% h-[80vh] mr-8" />
          <div className='mt-10'>
            <h2 className="text-2xl font-bold mb-2">Product Name : 4.5 cu. ft. Stackable Front Load Washer in Titanium with SmartBoost, Optic Whites, and Pure Rinse</h2>
            <p className="mb-1 text-1xl">Address: 1/70 avvai  Street, Chennai-37  City, India Country</p>
            <p className="mb-1 text-1xl">Time: 10:00 AM</p>
            <p className="mb-1 text-1xl">Date: February 28, 2024</p>
            <p className="mb-1  text-1xl">Expected Delivery: March 5, 2024</p>
            <button className="bg-blue-500 mb-10 text-white py-2 px-4 text-2xl rounded mt-2" onClick={viewtracking}>Track Delivery</button>
          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}

export default desp11
