/* eslint-disable react/prop-types */
/* eslint-disable no-undef */
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Additems = ({ addProduct }) => {
  const [formdata, setFormData] = useState({
    image: "",
    productname: "",
    status: "",
    address: ""
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formdata,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addProduct(formdata);
    navigate('/delivery');
  };

  return (
    <>
      <Navbar />
      <form onSubmit={handleSubmit}>
        <h1 className='text-center mt-10 text-2xl font-bold'>AddItems</h1>
        <div className='flex flex-col justify-center items-center'>
          <input
            type="url"
            name="image"
            value={formdata.image}
            onChange={handleChange}
            placeholder="Product image"
            className='input bg-gray-100 border-none md:w-[700px] rounded-md w-20% md:px-8 md:py-6 focus:outline-none focus:border-blue-500 p-5 ml-14 mt-20 mb-5'
          />
          <input
            type="text"
            name="productname"
            placeholder='Product'
            value={formdata.productname}
            onChange={handleChange}
            className='input bg-gray-100 border-none md:w-[700px] rounded-md w-20% md:px-8 md:py-6 focus:outline-none focus:border-blue-500 p-5 ml-14 mt-8 mb-5'
          />
          <input
            name="status"
            value={formdata.status}
            onChange={handleChange}
            className='input bg-gray-100 border-none md:w-[700px] rounded-md w-20% md:px-8 md:py-6 focus:outline-none focus:border-blue-500 p-5 ml-14 mt-8 mb-5'
            type="text"
            placeholder='Status'
          />
          <input
            name="address"
            value={formdata.address}
            onChange={handleChange}
            className='input bg-gray-100 border-none md:w-[700px] rounded-md w-20% md:px-8 md:py-6 focus:outline-none focus:border-blue-500 p-5 ml-14 mt-8 mb-10'
            type="text"
            placeholder='Address'
          />
          <div className='flex flex-col'>
            <button
              type="submit"
              className="mt-8 text-lg ml-10 mb-10 justify-between block md:p-5 md:w-[500px] font-bold bg-gradient-to-br from-blue-500 to-blue-400 text-white px-8 py-6 rounded-md shadow-md border-none transition duration-200 ease-in-out hover:scale-103 transform">
              Add
            </button>
          </div>
        </div>
      </form>
      <Footer />
    </>
  );
}

export default Additems;
