/* eslint-disable no-undef */
/* eslint-disable react-hooks/rules-of-hooks */
import Footer from '../components/Footer';
import leftArrow from '../assets/l2.png';
import Navbar from '../components/Navbar';
import {useNavigate} from 'react-router-dom';

function desp13() {

  const navigator = useNavigate();

  const viewhandle = () => {
    navigator("/delivery")
  }

  const viewtracking = () => {
    navigator("/track13")
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
          <img src="https://img.freepik.com/free-photo/elegant-smartphone-composition_23-2149437106.jpg?t=st=1715621849~exp=1715625449~hmac=2a0d91eb68b50b72db604e469a9a3f279fbebb18b843393b8a0fb30745327c4f&w=740" alt="Product" className="w-40% h-[80vh] mr-8" />
          <div className='mt-10'>
            <h2 className="text-2xl font-bold mb-2">Product Name : Iphone 14 ProMax</h2>
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

export default desp13
