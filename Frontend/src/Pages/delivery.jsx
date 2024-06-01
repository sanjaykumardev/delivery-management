/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import 'tailwindcss/tailwind.css';
import { useState } from 'react';
import products from "./Datadelivery";
import axios from 'axios';


const Delivery = () => {


  



  return (
    <>
      <Navbar />
    <div className='md:px-[100px]'>
      <h3 className=' text-center text-4xl mb-2  bg-white  font-bold  '>Delivery Product</h3>
      <div className="flex flex-wrap bg-gray-100  justify-center">

        {/* 1-content */}
       
        {products.map((card) => (
            <>
              <div className="w-full  md:w-1/2 lg:w-1/5 p-6">
                <div key={card.id} className="bg-white rounded-lg shadow-lg p-6">
                  <img
                    className="w-full h-48 object-fit box-sizing rounded-md mb-4"
                    src={card.imgSrc}
                    alt=""
                  />
                  <div className="text-lg font-bold mb-2">{card.name}</div>
                  <p className="text-green-700 mb-2">{card.status}</p>
                  <p className="mb-4">{card.address}</p>
                  <div className="flex justify-center">
                    <Link to="" className="bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 rounded-full">
                      View
                    </Link>
                  </div>
                </div>
              </div>

            </>

          ))}

        {/* 2-content */}


        {/* <Link to="/additem" className="bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 rounded-full">
                AddItems
        </Link> */}
      </div>
      </div>
      <Footer />
    </>
  );
};

export default Delivery;