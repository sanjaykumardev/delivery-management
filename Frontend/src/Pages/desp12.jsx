/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable no-unused-vars */
import Footer from '../components/Footer';
import leftArrow from '../assets/l2.png';
import Navbar from '../components/Navbar';
import {useNavigate} from 'react-router-dom';


function desp12() {


  const navigator = useNavigate();

  const viewhandle = () => {
    navigator("/delivery")
  }

  const viewtracking = () => {
    navigator("/track12")
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
          <img src="https://img.freepik.com/free-vector/usb-flash-drives-illustration-3d-realistic-memory-stick-black-white-plastic-mockup_33099-588.jpg?t=st=1715621769~exp=1715625369~hmac=62fd02dacd70c6b59e58a07bf9463465d60544c0bea64a7ab5d40d61d8a1612e&w=740" alt="Product" className="w-40% h-[80vh] mr-8" />
          <div className='mt-10'>
            <h2 className="text-2xl font-bold mb-2">Product Name : SanDisk </h2>
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

export default desp12
