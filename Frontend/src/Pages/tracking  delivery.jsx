/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import Footer from '../components/Footer';
import leftArrow from '../assets/l2.png';
import { useNavigate } from 'react-router-dom';

const TrackDeliveryPage = () => {

  const [name, setName] = useState();
  const [reportText, setReportText] = useState();
  const navigator = useNavigate();

  const viewhandle = () => {
    navigator("/desp")
  }

  const submitReport = () => {

  }

  return (
    <>
      <div className="mr-8">
        <img
          onClick={viewhandle}
          src={leftArrow} alt="Left Arrow" className="w-11 bg-gray-200 p-2 ml-5 mt-3 rounded-full" />
      </div>
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-semibold mb-8 text-center">Track Your Delivery</h1>

        {/* Delivery Information Section */}
        <div className="mb-8">
          <h2 className="text-xl font-semibold mb-4">Delivery Information</h2>
          <div className="flex flex-col md:flex-row md:items-center mb-4">
            <div className="md:w-1/4">
              <img src="https://img.freepik.com/premium-psd/soccer-shorts-mockup_472818-291.jpg?w=996" alt="Delivery Truck" className="w-30 " />
            </div>
            <div className="md:w-3/4 ml-4">
              <p className="text-lg font-semibold">Estimated Delivery Date: March 3, 2024</p>
              <p className="text-lg">Product: Product Name</p>
              <p className="text-lg">Address: Your Address</p>
              <p className="text-lg">Time: 10:00 AM - 2:00 PM</p>
              <p className="text-lg">Date: February 28, 2024</p>
            </div>
          </div>
        </div>

        {/* Tracking Status Section */}
        <div>
          <h2 className="text-xl font-semibold mb-4">Tracking Status</h2>

          <div className="flex flex-col space-y-4">
            <div className="flex items-center">
              <div className="w-10 h-10 bg-green-500 rounded-full flex items-center justify-center">
                <svg className="w-6 h-6 text-white" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                  <path d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <p className="text-lg ml-2">Package has been shipped</p>
            </div>
            <div className="flex items-center">
              <div className="w-10 h-10 bg-gray-300 rounded-full flex items-center justify-center">
                <svg className="w-6 h-6 text-gray-600" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                  <path d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                </svg>
              </div>
              <p className="text-lg ml-2">Package is currently in transit</p>
            </div>
            <div className="flex items-center">
              <div className="w-10 h-10 bg-yellow-500 rounded-full flex items-center justify-center">
                <svg className="w-6 h-6 text-white" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                  <path d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                </svg>
              </div>
              <p className="text-lg ml-2">Package is delayed</p>
            </div>
            <div className="flex items-center">
              <div className="w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center">
                <svg className="w-6 h-6 text-white" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                  <path d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <p className="text-lg ml-2">Package is out for delivery</p>
            </div>
            <div className="flex items-center">
              <div className="w-10 h-10 bg-red-500 rounded-full flex items-center justify-center">
                <svg className="w-6 h-6 text-white" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                  <path d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <p className="text-lg ml-2">Delivery attempt failed</p>
            </div>
            {/* Add more tracking statuses as needed */}
          </div>
          <div className="mt-4">
            <h2 className='text-2xl mb-3'>Report</h2>
            <input type="text" className="w-full border border-gray-300 rounded p-2 mb-2" placeholder="Your name..." value={name} onChange={(e) => setName(e.target.value)} />
            <textarea className="w-full border border-gray-300 rounded p-2 mb-2" placeholder="Please provide details of the issue..." value={reportText} onChange={(e) => setReportText(e.target.value)}></textarea>
            <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600" onClick={submitReport}>Submit Report</button>
          </div>
        </div>
      </div>
      <Footer />
    </>


  );
}

export default TrackDeliveryPage;
