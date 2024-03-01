/* eslint-disable no-unused-vars */
import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const electronicProducts = [
  { id: 1, name: 'Laptop' },
  { id: 2, name: 'Smartphone' },
  { id: 3, name: 'Tablet' },
  { id: 4, name: 'Smartwatch' },
  { id: 5, name: 'Headphones' },
  { id: 6, name: 'Desktop Computer' },
  { id: 7, name: 'Wireless Earbuds' },
  { id: 8, name: 'Bluetooth Speaker' },
  { id: 9, name: 'Digital Camera' },
  { id: 10, name: 'Gaming Console' },
  { id: 11, name: 'E-book Reader' },
  { id: 12, name: 'Laptop' },
  { id: 13, name: 'Smartphone' },
  { id: 14, name: 'Tablet' },
  { id: 15, name: 'Smartwatch' },
  { id: 16, name: 'Headphones' },
  { id: 17, name: 'Desktop Computer' },
  { id: 18, name: 'Wireless Earbuds' },
  { id: 19, name: 'Bluetooth Speaker' },
  { id: 20, name: 'Digital Camera' },
  { id: 21, name: 'Gaming Console' },
  { id: 22, name: 'E-book Reader' }
];

function Inventory() {
  return (
    <>
      <Navbar />
      <div className='  mt-10 text-4xl font-bold mb-10'>
        INVENTORY
      </div>
      <div className='flex flex-col p-5 md:px-[200px] '>

        <h2 className='text-2xl font-semibold mb-5 text-center'>Electronic Products</h2>
        <div className='grid grid-row  gap-4'>
          {electronicProducts.map(product => (
            <div key={product.id} className='relative flex items-center p-5 bg-gray-300 '>
              <p className='text-lg font-semibold flex-grow'>{product.name}</p>
              <p className='mr-5'>1000+</p>
              <button className='button mr-10 w-14 h-14 rounded-full bg-gray-200 text-white font-semibold shadow-md transition-all duration-300 cursor-pointer hover:bg-red-500 hover:scale-105'>
                <svg viewBox="0 0 448 512" className="svgIcon w-6 ml-4">
                  <path d="M135.2 17.7L128 32H32C14.3 32 0 46.3 0 64S14.3 96 32 96H416c17.7 0 32-14.3 32-32s-14.3-32-32-32H320l-7.2-14.3C307.4 6.8 296.3 0 284.2 0H163.8c-12.1 0-23.2 6.8-28.6 17.7zM416 128H32L53.2 467c1.6 25.3 22.6 45 47.9 45H346.9c25.3 0 46.3-19.7 47.9-45L416 128z"></path>
                </svg>
                <span className="absolute top-0 right-0 mt-5 text-white text-xs font-semibold transition-all duration-300 opacity-0">Delete</span>
              </button>
            </div>
          ))}
        </div>
      </div>
      {/* // exchange */}
      <div className='flex flex-col p-5 mt-20 md:px-[200px]'>

        <h2 className='text-2xl font-semibold mb-5 text-center'>Exchange Products</h2>
        <div className='grid grid-row gap-4 '>
          {electronicProducts.map(product => (
            <div key={product.id} className='relative flex items-center p-5 bg-gray-300 '>
              <p className='text-lg font-semibold flex-grow'>{product.name}</p>
              <p className='mr-5'>9036</p>
              <button className='button mr-10 w-14 h-14 rounded-full bg-gray-200 text-white font-semibold shadow-md transition-all duration-300 cursor-pointer hover:bg-red-500 hover:scale-105'>
                <svg viewBox="0 0 448 512" className="svgIcon w-6 ml-4">
                  <path d="M135.2 17.7L128 32H32C14.3 32 0 46.3 0 64S14.3 96 32 96H416c17.7 0 32-14.3 32-32s-14.3-32-32-32H320l-7.2-14.3C307.4 6.8 296.3 0 284.2 0H163.8c-12.1 0-23.2 6.8-28.6 17.7zM416 128H32L53.2 467c1.6 25.3 22.6 45 47.9 45H346.9c25.3 0 46.3-19.7 47.9-45L416 128z"></path>
                </svg>
                <span className="absolute top-0 right-0 mt-5 text-white text-xs font-semibold transition-all duration-300 opacity-0">Delete</span>
              </button>
            </div>
          ))}
        </div>
      </div>
      {/* // refund */}
      <div className='flex flex-col p-5 mt-10 md:px-[200px] '>

        <h2 className='text-2xl font-semibold mb-5 text-center'>Refund Product</h2>
        <div className='grid grid-row  gap-4'>
          {electronicProducts.map(product => (
            <div key={product.id} className='relative flex items-center p-5 bg-gray-300 '>
              <p className=' font-semibold text-lg flex-grow'>{product.name}</p>
              <p className='mr-5'>4000</p>
              <button className='button mr-10 w-14 h-14 rounded-full bg-gray-200 text-white font-semibold shadow-md transition-all duration-300 cursor-pointer hover:bg-red-500 hover:scale-105'>
                <svg viewBox="0 0 448 512" className="svgIcon w-6 ml-4">
                  <path d="M135.2 17.7L128 32H32C14.3 32 0 46.3 0 64S14.3 96 32 96H416c17.7 0 32-14.3 32-32s-14.3-32-32-32H320l-7.2-14.3C307.4 6.8 296.3 0 284.2 0H163.8c-12.1 0-23.2 6.8-28.6 17.7zM416 128H32L53.2 467c1.6 25.3 22.6 45 47.9 45H346.9c25.3 0 46.3-19.7 47.9-45L416 128z"></path>
                </svg>
                <span className="absolute top-0 right-0 mt-5 text-white text-xs font-semibold transition-all duration-300 opacity-0">Delete</span>
              </button>
            </div>
          ))}
        </div>
        <div className=' md:flex md:flex-col-3 mt-10 ml-0 space-x-4'>
          <select
            className='input bg-gray-200 border-none  px-8 md:w-30px  py-6 rounded-full mt-8 focus:outline-none focus:border-blue-500'
          >
            <option value="inventory">Refund Product </option>
            <option value="delivery">Exchange Product</option>
          </select>
          <input
            type="file"
            className='input bg-gray-200 border-none md:w-30% rounded-full w-20% md:px-8 md:py-6  mt-8 focus:outline-none focus:border-blue-500  p-5 ml-14  ' />
          <button className="mt-8 MD:ml-10 text-lg  justify-between block md:p-5  md:w-[200px] font-bold bg-gradient-to-br from-blue-500 to-blue-400 text-white px-8 py-6 rounded-2xl   shadow-md border-none transition duration-200 ease-in-out hover:scale-103 transform">Add</button>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Inventory;
