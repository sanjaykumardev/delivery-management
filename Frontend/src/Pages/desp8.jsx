/* eslint-disable no-unused-vars */
import React from 'react';
import Footer from '../components/Footer';
import leftArrow from '../assets/l2.png';
import Navbar from '../components/Navbar';
import {useNavigate} from 'react-router-dom';


function desp8() {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const navigator = useNavigate();

  const viewhandle = () => {
    navigator("/delivery")
  }

  const viewtracking = () => {
    navigator("/track8")
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
          <img src="https://img.freepik.com/free-photo/photo-camera-balancing-with-yellow-background_23-2150271772.jpg?w=740&t=st=1709371644~exp=1709372244~hmac=c5ecd201ed0723f333b54af430cd65fe9a9fe2e182cd09477422a9393d51c101
" alt="Product" className="w-40% h-[80vh] mr-8" />
          <div className='mt-10'>
            <h2 className="text-2xl font-bold mb-2">Product Name : SONY Nova 3 Camera</h2>
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

export default desp8
