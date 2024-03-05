/* eslint-disable no-unused-vars */
import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import 'tailwindcss/tailwind.css';
import leftArrow from '../assets/l2.png';
import { useState } from 'react';
import axios from 'axios';











const Delivery = () => {


  const [items, setItems] = useState([
    {
      id: 1,
     name: 'Loremsdvsds',
     status: 'On Board',
     address: 'Address',
     imageUrl: 'https://img.freepik.com/free-photo/photo-camera-balancing-with-yellow-background_23-2150271772.jpg?w=740&t=st=1709371644~exp=1709372244~hmac=c5ecd201ed0723f333b54af430cd65fe9a9fe2e182cd09477422a9393d51c101',
    },

  //   {
  //     id: 1,
  //     name: 'Loremsdvsds',
  //     status: 'On Board',
  //     address: 'Address',
  //     imageUrl: 'https://img.freepik.com/free-photo/photo-camera-balancing-with-yellow-background_23-2150271772.jpg?w=740&t=st=1709371644~exp=1709372244~hmac=c5ecd201ed0723f333b54af430cd65fe9a9fe2e182cd09477422a9393d51c101',
  //   },
   
  //   {
  //     id: 1,
  //     name: 'Loremsdvsds',
  //     status: 'On Board',
  //     address: 'Address',
  //     imageUrl: 'https://img.freepik.com/free-photo/photo-camera-balancing-with-yellow-background_23-2150271772.jpg?w=740&t=st=1709371644~exp=1709372244~hmac=c5ecd201ed0723f333b54af430cd65fe9a9fe2e182cd09477422a9393d51c101',
  //   },


  //   {
  //     id: 1,
  //     name: 'Loremsdvsds',
  //     status: 'On Board',
  //     address: 'Address',
  //     imageUrl: 'https://img.freepik.com/free-photo/photo-camera-balancing-with-yellow-background_23-2150271772.jpg?w=740&t=st=1709371644~exp=1709372244~hmac=c5ecd201ed0723f333b54af430cd65fe9a9fe2e182cd09477422a9393d51c101',
  //   },



  //   {
  //     id: 1,
  //     name: 'Loremsdvsds',
  //     status: 'On Board',
  //     address: 'Address',
  //     imageUrl: 'https://img.freepik.com/free-photo/photo-camera-balancing-with-yellow-background_23-2150271772.jpg?w=740&t=st=1709371644~exp=1709372244~hmac=c5ecd201ed0723f333b54af430cd65fe9a9fe2e182cd09477422a9393d51c101',
  //   },


  //    {
  //     id: 1,
  //     name: 'Loremsdvsds',
  //     status: 'On Board',
  //     address: 'Address',
  //     imageUrl: 'https://img.freepik.com/free-photo/photo-camera-balancing-with-yellow-background_23-2150271772.jpg?w=740&t=st=1709371644~exp=1709372244~hmac=c5ecd201ed0723f333b54af430cd65fe9a9fe2e182cd09477422a9393d51c101',
  //   },


  ]); 


  const handleview = async(itemId)=>{
    const items = items.find((i) => i.id === itemId);
    try{
      const res = axios.post("http://localhost:3000/delivery" ,{items});
      console.log("succssfully ",res);
    }
    catch(err){
    console.log(err);
    }
   
  }

  return (
    <>
      <Navbar />
      <h3 className=' text-center text-4xl mb-2 bg-gray-100 font-bold  '>Delivery Product</h3>
      <div className="flex flex-wrap bg-gray-100  justify-center">

        {/* 1-content */}
        <div className="w-full  md:w-1/2 lg:w-1/5 p-6">
          <div className="bg-white rounded-lg shadow-lg p-6">
            <img
              className="w-full h-48 object-fill box-sizing rounded-md mb-4"
              src="https://img.freepik.com/premium-psd/soccer-shorts-mockup_472818-291.jpg?w=996"
              alt="Product"
            />
            <div className="text-lg font-bold mb-2">MockUp Wears</div>
            <p className="text-green-700 mb-2">On Board</p>
            <p className="mb-4">1/70 avvai tiruvallar chennai</p>
            <div className="flex justify-center">
              <Link to="/desp" onClick={handleview} className="bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 rounded-full">
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
              src="https://imgs.search.brave.com/n5_tJpZim3I9g8-9JYO04UjdJEi9xf5jQELCMpqHPi4/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9pbWcu/ZnJlZXBpay5jb20v/ZnJlZS1waG90by9k/aWdpdGFsLWRldmlj/ZS1lbGV0cm9uaWMt/bmV0d29ya2luZy1t/ZWRpYV81Mzg3Ni0z/MTY5NS5qcGc_c2l6/ZT02MjYmZXh0PWpw/Zw"
              alt="Product"
            />
            <div className="text-lg font-bold mb-2">{items.name}</div>
            <p className="text-green-700 mb-2">{items.status}</p>
            <p className="mb-4">{items.address}</p>
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
              src="https://img.freepik.com/premium-photo/generic-smartwatches-isolated-colorfull-background-3d-illustration_960782-6343.jpg?w=996"
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
              src="https://img.freepik.com/premium-photo/futuristic-cyborg-driving-simulation-illuminated-virtual-reality-generated-by-ai_188544-13568.jpg?w=996"
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
              src="https://img.freepik.com/free-photo/headphones-balancing-with-blue-background_23-2150271756.jpg?w=740&t=st=1709371448~exp=1709372048~hmac=7570a58e8b628151200fe17bce7c6824d4d8c137c03e4dbdee161bc7c1fe9ade"
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
              className="w-full h-48 object-flow rounded-md mb-4"
              src="https://img.freepik.com/free-photo/smartphones-balancing-with-blue-background_23-2150271748.jpg?w=740&t=st=1709371492~exp=1709372092~hmac=7deff364a5860fd274f3a33bf8efcfbfaf38be4ffb655aa15e3db2a28e36ba7c"
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
              src="https://img.freepik.com/premium-photo/gamepads-colored-paper-top-view-minimalism-hard-light-shade_175682-2794.jpg?w=996"
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
              src="https://img.freepik.com/free-photo/photo-camera-balancing-with-yellow-background_23-2150271772.jpg?w=740&t=st=1709371644~exp=1709372244~hmac=c5ecd201ed0723f333b54af430cd65fe9a9fe2e182cd09477422a9393d51c101"
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
              src="https://img.freepik.com/free-photo/laptop-white-background-3d-rendering-computer-generated-image_1142-48567.jpg?t=st=1709372311~exp=1709375911~hmac=74b1a440a6201b867878c7c888b440a65e68e6a81108e33a974c86d33351bcea&w=740"
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
              src="https://img.freepik.com/free-photo/electronic-device-balancing-concept_23-2150422322.jpg?w=996&t=st=1709372415~exp=1709373015~hmac=c8c6f2a14fbe4126f7e30729b0b0748f988402f5065551db184f097e20e3e5a7"
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
              src="https://img.freepik.com/free-psd/realistic-television-presentation_1310-15.jpg?t=st=1709372476~exp=1709376076~hmac=d8f5e36964cec6059187d8e474e6db97b0f45da90f08c655b44b8a024245f368&w=740"
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
              src="https://img.freepik.com/free-photo/elegant-smartphone-composition_23-2149437106.jpg?t=st=1709372540~exp=1709376140~hmac=99b50dd6ed9f277bdaa5a9e868866bfe41c7466ca8769e7167da4693e40a39d4&w=740"
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
              src="https://img.freepik.com/premium-psd/tablet-pro-mockup-simple-style_204971-353.jpg?w=996"
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
              src="https://img.freepik.com/premium-psd/short-sport-pants-men-mockup_759095-212.jpg?w=996"
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
              src="https://img.freepik.com/free-photo/wireless-earbuds-with-neon-cyberpunk-style-lighting_23-2151074300.jpg?t=st=1709372705~exp=1709376305~hmac=4bbdea53ec0e37da1373640f16ae31d62db4c86e99216a3760d2a18a58e9a5e9&w=740"
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
        {/* {set 2} */}

        <div className="w-full  md:w-1/2 lg:w-1/5 p-6">
          <div className="bg-white rounded-lg shadow-lg p-6">
            <img
              className="w-full h-48 object-cover rounded-md mb-4"
              src="https://img.freepik.com/premium-psd/female-hoodie-mockup_759095-4.jpg?w=996"
              alt="Product"
            />
            <div className="text-lg font-bold mb-2">Pexel i3 4G</div>
            <p className="text-green-700 mb-2">On Board</p>
            <p className="mb-4">1/70 avvai tiruvallar chennai</p>
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
              src="https://img.freepik.com/premium-photo/black-sock-mockup-3d-rendering-isolated-stock_72104-4714.jpg?w=996"
              alt="Product"
            />
            <div className="text-lg font-bold mb-2">Loremsdvsds</div>
            <p className="text-green-700 mb-2">On Board</p>
            <p className="mb-4">1/70 avvai tiruvallar chennai</p>
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
              src="https://img.freepik.com/premium-psd/running-shorts-logo-mockup_57262-86.jpg?w=996"
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
              src="https://img.freepik.com/premium-photo/futuristic-cyborg-driving-simulation-illuminated-virtual-reality-generated-by-ai_188544-13568.jpg?w=996"
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
              src="https://img.freepik.com/free-photo/headphones-balancing-with-blue-background_23-2150271756.jpg?w=740&t=st=1709371448~exp=1709372048~hmac=7570a58e8b628151200fe17bce7c6824d4d8c137c03e4dbdee161bc7c1fe9ade"
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
              className="w-full h-48 object-flow rounded-md mb-4"
              src="https://img.freepik.com/free-photo/smartphones-balancing-with-blue-background_23-2150271748.jpg?w=740&t=st=1709371492~exp=1709372092~hmac=7deff364a5860fd274f3a33bf8efcfbfaf38be4ffb655aa15e3db2a28e36ba7c"
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
              src="https://img.freepik.com/premium-photo/gamepads-colored-paper-top-view-minimalism-hard-light-shade_175682-2794.jpg?w=996"
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
              src="https://img.freepik.com/free-photo/photo-camera-balancing-with-yellow-background_23-2150271772.jpg?w=740&t=st=1709371644~exp=1709372244~hmac=c5ecd201ed0723f333b54af430cd65fe9a9fe2e182cd09477422a9393d51c101"
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
              src="https://img.freepik.com/free-photo/laptop-white-background-3d-rendering-computer-generated-image_1142-48567.jpg?t=st=1709372311~exp=1709375911~hmac=74b1a440a6201b867878c7c888b440a65e68e6a81108e33a974c86d33351bcea&w=740"
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
              src="https://img.freepik.com/free-photo/electronic-device-balancing-concept_23-2150422322.jpg?w=996&t=st=1709372415~exp=1709373015~hmac=c8c6f2a14fbe4126f7e30729b0b0748f988402f5065551db184f097e20e3e5a7"
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
              src="https://img.freepik.com/free-psd/realistic-television-presentation_1310-15.jpg?t=st=1709372476~exp=1709376076~hmac=d8f5e36964cec6059187d8e474e6db97b0f45da90f08c655b44b8a024245f368&w=740"
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
              src="https://img.freepik.com/free-photo/elegant-smartphone-composition_23-2149437106.jpg?t=st=1709372540~exp=1709376140~hmac=99b50dd6ed9f277bdaa5a9e868866bfe41c7466ca8769e7167da4693e40a39d4&w=740"
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
              src="https://img.freepik.com/premium-psd/tablet-pro-mockup-simple-style_204971-353.jpg?w=996"
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
              src="https://img.freepik.com/premium-psd/short-sport-pants-men-mockup_759095-212.jpg?w=996"
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
              src="https://img.freepik.com/free-photo/wireless-earbuds-with-neon-cyberpunk-style-lighting_23-2151074300.jpg?t=st=1709372705~exp=1709376305~hmac=4bbdea53ec0e37da1373640f16ae31d62db4c86e99216a3760d2a18a58e9a5e9&w=740"
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



        <div className="w-full  md:w-1/2 lg:w-1/5 p-6">
          <div className="bg-white rounded-lg shadow-lg p-6">
            <img
              className="w-full h-48 object-fill box-sizing rounded-md mb-4"
              src="https://imgs.search.brave.com/4yv1SagpoyLQ-G-hf_wnuH8jcOqOVAj7MlPmcrPPKaE/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9pbWcu/ZnJlZXBpay5jb20v/ZnJlZS1waG90by9l/bGVjdHJvbmljLWRl/dmljZS1iYWxhbmNp/bmctY29uY2VwdF8y/My0yMTUwNDIyMzI0/LmpwZz9zaXplPTYy/NiZleHQ9anBn"
              alt="Product"
            />
            <div className="text-lg font-bold mb-2">Pexel i3 4G</div>
            <p className="text-green-700 mb-2">On Board</p>
            <p className="mb-4">1/70 avvai tiruvallar chennai</p>
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
              src="https://imgs.search.brave.com/n5_tJpZim3I9g8-9JYO04UjdJEi9xf5jQELCMpqHPi4/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9pbWcu/ZnJlZXBpay5jb20v/ZnJlZS1waG90by9k/aWdpdGFsLWRldmlj/ZS1lbGV0cm9uaWMt/bmV0d29ya2luZy1t/ZWRpYV81Mzg3Ni0z/MTY5NS5qcGc_c2l6/ZT02MjYmZXh0PWpw/Zw"
              alt="Product"
            />
            <div className="text-lg font-bold mb-2">Loremsdvsds</div>
            <p className="text-green-700 mb-2">On Board</p>
            <p className="mb-4">1/70 avvai tiruvallar chennai</p>
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
              src="https://img.freepik.com/premium-photo/generic-smartwatches-isolated-colorfull-background-3d-illustration_960782-6343.jpg?w=996"
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
              src="https://img.freepik.com/premium-photo/futuristic-cyborg-driving-simulation-illuminated-virtual-reality-generated-by-ai_188544-13568.jpg?w=996"
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
              src="https://img.freepik.com/free-photo/headphones-balancing-with-blue-background_23-2150271756.jpg?w=740&t=st=1709371448~exp=1709372048~hmac=7570a58e8b628151200fe17bce7c6824d4d8c137c03e4dbdee161bc7c1fe9ade"
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
              className="w-full h-48 object-flow rounded-md mb-4"
              src="https://img.freepik.com/free-photo/smartphones-balancing-with-blue-background_23-2150271748.jpg?w=740&t=st=1709371492~exp=1709372092~hmac=7deff364a5860fd274f3a33bf8efcfbfaf38be4ffb655aa15e3db2a28e36ba7c"
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
              src="https://img.freepik.com/premium-photo/gamepads-colored-paper-top-view-minimalism-hard-light-shade_175682-2794.jpg?w=996"
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
              src="https://img.freepik.com/free-photo/photo-camera-balancing-with-yellow-background_23-2150271772.jpg?w=740&t=st=1709371644~exp=1709372244~hmac=c5ecd201ed0723f333b54af430cd65fe9a9fe2e182cd09477422a9393d51c101"
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
              src="https://img.freepik.com/free-photo/laptop-white-background-3d-rendering-computer-generated-image_1142-48567.jpg?t=st=1709372311~exp=1709375911~hmac=74b1a440a6201b867878c7c888b440a65e68e6a81108e33a974c86d33351bcea&w=740"
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
              src="https://img.freepik.com/free-photo/electronic-device-balancing-concept_23-2150422322.jpg?w=996&t=st=1709372415~exp=1709373015~hmac=c8c6f2a14fbe4126f7e30729b0b0748f988402f5065551db184f097e20e3e5a7"
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
              src="https://img.freepik.com/free-psd/realistic-television-presentation_1310-15.jpg?t=st=1709372476~exp=1709376076~hmac=d8f5e36964cec6059187d8e474e6db97b0f45da90f08c655b44b8a024245f368&w=740"
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
              src="https://img.freepik.com/free-photo/elegant-smartphone-composition_23-2149437106.jpg?t=st=1709372540~exp=1709376140~hmac=99b50dd6ed9f277bdaa5a9e868866bfe41c7466ca8769e7167da4693e40a39d4&w=740"
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
              src="https://img.freepik.com/premium-psd/tablet-pro-mockup-simple-style_204971-353.jpg?w=996"
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
              src="https://img.freepik.com/premium-psd/short-sport-pants-men-mockup_759095-212.jpg?w=996"
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
              src="https://img.freepik.com/free-photo/wireless-earbuds-with-neon-cyberpunk-style-lighting_23-2151074300.jpg?t=st=1709372705~exp=1709376305~hmac=4bbdea53ec0e37da1373640f16ae31d62db4c86e99216a3760d2a18a58e9a5e9&w=740"
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

        <div className="w-full  md:w-1/2 lg:w-1/5 p-6">
          <div className="bg-white rounded-lg shadow-lg p-6">
            <img
              className="w-full h-48 object-fill box-sizing rounded-md mb-4"
              src="https://imgs.search.brave.com/4yv1SagpoyLQ-G-hf_wnuH8jcOqOVAj7MlPmcrPPKaE/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9pbWcu/ZnJlZXBpay5jb20v/ZnJlZS1waG90by9l/bGVjdHJvbmljLWRl/dmljZS1iYWxhbmNp/bmctY29uY2VwdF8y/My0yMTUwNDIyMzI0/LmpwZz9zaXplPTYy/NiZleHQ9anBn"
              alt="Product"
            />
            <div className="text-lg font-bold mb-2">Pexel i3 4G</div>
            <p className="text-green-700 mb-2">On Board</p>
            <p className="mb-4">1/70 avvai tiruvallar chennai</p>
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
              src="https://imgs.search.brave.com/n5_tJpZim3I9g8-9JYO04UjdJEi9xf5jQELCMpqHPi4/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9pbWcu/ZnJlZXBpay5jb20v/ZnJlZS1waG90by9k/aWdpdGFsLWRldmlj/ZS1lbGV0cm9uaWMt/bmV0d29ya2luZy1t/ZWRpYV81Mzg3Ni0z/MTY5NS5qcGc_c2l6/ZT02MjYmZXh0PWpw/Zw"
              alt="Product"
            />
            <div className="text-lg font-bold mb-2">Loremsdvsds</div>
            <p className="text-green-700 mb-2">On Board</p>
            <p className="mb-4">1/70 avvai tiruvallar chennai</p>
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
              src="https://img.freepik.com/premium-photo/generic-smartwatches-isolated-colorfull-background-3d-illustration_960782-6343.jpg?w=996"
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
              src="https://img.freepik.com/premium-photo/futuristic-cyborg-driving-simulation-illuminated-virtual-reality-generated-by-ai_188544-13568.jpg?w=996"
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
              src="https://img.freepik.com/free-photo/headphones-balancing-with-blue-background_23-2150271756.jpg?w=740&t=st=1709371448~exp=1709372048~hmac=7570a58e8b628151200fe17bce7c6824d4d8c137c03e4dbdee161bc7c1fe9ade"
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
              className="w-full h-48 object-flow rounded-md mb-4"
              src="https://img.freepik.com/free-photo/smartphones-balancing-with-blue-background_23-2150271748.jpg?w=740&t=st=1709371492~exp=1709372092~hmac=7deff364a5860fd274f3a33bf8efcfbfaf38be4ffb655aa15e3db2a28e36ba7c"
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
              src="https://img.freepik.com/premium-photo/gamepads-colored-paper-top-view-minimalism-hard-light-shade_175682-2794.jpg?w=996"
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
              src="https://img.freepik.com/free-photo/photo-camera-balancing-with-yellow-background_23-2150271772.jpg?w=740&t=st=1709371644~exp=1709372244~hmac=c5ecd201ed0723f333b54af430cd65fe9a9fe2e182cd09477422a9393d51c101"
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
              src="https://img.freepik.com/free-photo/laptop-white-background-3d-rendering-computer-generated-image_1142-48567.jpg?t=st=1709372311~exp=1709375911~hmac=74b1a440a6201b867878c7c888b440a65e68e6a81108e33a974c86d33351bcea&w=740"
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
              src="https://img.freepik.com/free-photo/electronic-device-balancing-concept_23-2150422322.jpg?w=996&t=st=1709372415~exp=1709373015~hmac=c8c6f2a14fbe4126f7e30729b0b0748f988402f5065551db184f097e20e3e5a7"
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
              src="https://img.freepik.com/free-psd/realistic-television-presentation_1310-15.jpg?t=st=1709372476~exp=1709376076~hmac=d8f5e36964cec6059187d8e474e6db97b0f45da90f08c655b44b8a024245f368&w=740"
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
              src="https://img.freepik.com/free-photo/elegant-smartphone-composition_23-2149437106.jpg?t=st=1709372540~exp=1709376140~hmac=99b50dd6ed9f277bdaa5a9e868866bfe41c7466ca8769e7167da4693e40a39d4&w=740"
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
              src="https://img.freepik.com/premium-psd/tablet-pro-mockup-simple-style_204971-353.jpg?w=996"
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
              src="https://img.freepik.com/premium-psd/short-sport-pants-men-mockup_759095-212.jpg?w=996"
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



        <div className="w-full md:w-1/2 lg:w-1/5 p-6 mb-20">
          <div className="bg-white rounded-lg shadow-lg p-6">
            <img
              className="w-full h-48 object-cover rounded-md mb-4"
              src="https://img.freepik.com/free-photo/wireless-earbuds-with-neon-cyberpunk-style-lighting_23-2151074300.jpg?t=st=1709372705~exp=1709376305~hmac=4bbdea53ec0e37da1373640f16ae31d62db4c86e99216a3760d2a18a58e9a5e9&w=740"
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
        <div>
          <button
            className="bg-blue-500 mb-5  text-2xl flex hover:bg-blue-400 relative w-[150%] rounded-full text-white space-y -4 font-bold py-3 px-5 ">
            More
            <img

              src={leftArrow} alt="Left Arrow" className="w-7 absolute bottom-0 top-1 right-1 left-17 bg-gray-200 p-2 ml-5 mt-3 rounded-full" />
          </button>
        </div>

      </div>
      <Footer />
    </>
  );
};

export default Delivery;