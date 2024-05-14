/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import Footer from '../components/Footer';
import leftArrow from '../assets/l2.png';
import Navbar from '../components/Navbar';
import { useNavigate } from 'react-router-dom';


const desp2 = () => {


  const navigator = useNavigate();

  const viewhandle = () => {
    navigator("/delivery")
  }

  const viewtracking = () => {
    navigator("/track")
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
          <img src="https://imgs.search.brave.com/n5_tJpZim3I9g8-9JYO04UjdJEi9xf5jQELCMpqHPi4/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9pbWcu/ZnJlZXBpay5jb20v/ZnJlZS1waG90by9k/aWdpdGFsLWRldmlj/ZS1lbGV0cm9uaWMt/bmV0d29ya2luZy1t/ZWRpYV81Mzg3Ni0z/MTY5NS5qcGc_c2l6/ZT02MjYmZXh0PWpw/Zw" alt="Product" className="w-40% h-[80vh] mr-8" />
          <div className='mt-10'>
            <h2 className="text-2xl font-bold mb-2">Product Name : Laptop</h2>
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

export default desp2
