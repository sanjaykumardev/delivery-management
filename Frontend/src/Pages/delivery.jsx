/* eslint-disable no-unused-vars */
import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { useState ,Link } from 'react';
import { useNavigate } from 'react-router-dom';



 function Delivery() {

  const navigator = useNavigate();
  // const [click, setClick] = useState(" ");

  const ViewNextPage =  ()=>{
    navigator("/desp");
  }
     
  




  return (
    <div>
      <Navbar />
      <div className="container mx-auto text-center mt-10 mb-10 text-4xl">
        <h1>Delivery List</h1>
      </div>
      <div className="container mx-auto  px-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">

        {Array.from({ length: 20 }, (_, i) => (
          <div key={i} className=" bg-gray-100 rounded-lg shadow-lg p-6">
            <img
              className="w-full h-48 object-cover rounded-md mb-4"
              src="https://imgs.search.brave.com/NyeZ6lVp_S32riPPX0DBSdkjMPVKG4vgT8EfV-vfMZA/rs:fit:860:0:0/g:ce/aHR0cHM6Ly91cGxv/YWQud2lraW1lZGlh/Lm9yZy93aWtpcGVk/aWEvY29tbW9ucy8y/LzI2L01pY3JvY2hp/cF9QSUMyNEhKMzJH/UDIwMi5qcGc"
              alt="Product"
            />
            <div className="text-lg font-bold mb-2">Loremsdvsds</div>
            <p className="text-green-700 mb-2">On Board</p>
            <p className="mb-4">Address</p>
            <button 
            onClick={ViewNextPage}
            className="bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 rounded-full inline-block">
           
              View
            </button>
          </div>
        ))}
      </div>
      <Footer />
    </div>
  );
}

export default Delivery;