/* eslint-disable react/no-unknown-property */
/* eslint-disable no-unused-vars */
import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { useState ,useEffect} from 'react';
import Axios from 'axios';




const URL = "http://localhost:3000";




function Inventory() {


 

  const [electronicProducts, setElectronicProducts] = useState([
    { id: 1, name: 'HearPhone' },
    { id: 2, name: 'Laptop' },
    { id: 3, name: 'Smartphone' },
    { id: 4, name: 'Tablet' },
    { id: 6, name: 'Smartwatch' },
    { id: 7, name: 'Headphones' },
    { id: 8, name: 'Desktop Computer' },
    { id: 9, name: 'Wireless Earbuds' },
    { id: 10, name: 'Bluetooth Speaker' },
    { id: 11, name: 'Digital Camera' },
    { id: 12, name: 'Gaming Console' },
    { id: 13, name: 'E-book Reader' },
    { id: 14, name: 'Laptop' },
    { id: 15, name: 'Smartphone' },
    { id: 16, name: 'Tablet' },
    { id: 17, name: 'Smartwatch' },
    { id: 18, name: 'Headphones' },
    { id: 19, name: 'Desktop Computer' },
    { id: 20, name: 'Wireless Earbuds' },
    { id: 21, name: 'Bluetooth Speaker' },
    { id: 22, name: 'Digital Camera' },
    { id: 23, name: 'Gaming Console' },
    { id: 24, name: 'E-book Reader' }
  ]);
  
  

  const [role, setRole] = useState("")
  const [productname, setProductName] = useState("")
  const [productnumber, setProductNumber] = useState("")
  const [error, setError] = useState(false)
  
  //? this for getting the product form backend
  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
   
    try {
      const res = await Axios.get( URL + "/product");
      setElectronicProducts(res.data);
      console.log(res)
    } catch (error) {
      console.error('Error fetching products:', error);
    }
  };
  
 // add product function
  const handleAddProduct = async (e) => {
    e.preventDefault();
     
    if (!role.trim() || !productname.trim() || !productnumber.trim()) {
      setError(<div className=' p-3 mt-5 text-center text-lg bg-red-500'>Please fill out all fields. </div>);
      return;
    }

    try {

      const newProduct = { id: electronicProducts.length + 1, name: productname, role , productnumber};
      
      setElectronicProducts(prevProducts => [...prevProducts, newProduct]);

      const res = await Axios.post( URL + "/Add", { role, productname,productnumber});

      

      setRole("");
      setProductName("");
      setProductNumber("");
      setError(false);
      console.log("added", res)
    }
    catch (error) {
      setError(true);
      console.log(error);
    }

  }


  // handle date function
  const currentDate = new Date();
  const date = { day: '2-digit', month: 'long', year: 'numeric' };
  const formattedDate = currentDate.toLocaleDateString('en-US', date);

  // handle delete function
 
  const handleDelete = async(productId) => {
    setElectronicProducts(prevProducts =>
      prevProducts.filter(product => product.id !== productId)
    );
  };
  
 
  return (
    <>
      <Navbar />
      <div className=' font-bold bg-white'>
      <h1 className='text-bold mt-2 text-center text-3xl'>
       INVENTERY
      </h1>
        <div> 
        <div className='flex flex-col text-white md:px-[200px] '>
        <h2 className='text-2xl font-semibold mb-5 text-black text-center'>Electronic Products</h2>
        <p className='font-bold text-lg mb-5'>Date:  {formattedDate}</p>
        <div className='grid grid-row  gap-4'>
          {electronicProducts.map(product => (
            <div key={product.id} className='relative flex items-center p-5  bg-black  '>
              <p className='text-lg font-semibold flex-grow'>{product.name}</p>
              <p className='mr-5'>1000+</p>
              <button  onClick={() => handleDelete(product.id)} className='button mr-10 w-14 h-14 rounded-full bg-gray-200 text-white font-semibold shadow-md transition-all duration-300 cursor-pointer hover:bg-red-500 hover:scale-105'>
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
      <div className='flex flex-col p-5 mt-20 md:px-[200px]  '>

        <h2 className='text-2xl font-semibold mb-5 text-center'>Exchange Products</h2>
        <p className='font-bold text-lg mb-5'>Date:  {formattedDate}</p>
        <div className='grid grid-row gap-4 '>
          {electronicProducts.map(product => (
            <div key={product.id} className='relative text-white flex items-center p-5  bg-black  '>
              <p className='text-lg font-semibold flex-grow'>{product.name}</p>
              <p className='mr-5'>9036</p>
              <button  onClick={() => handleDelete(product.id)} className='button mr-10 w-14 h-14 rounded-full bg-gray-200 text-white font-semibold shadow-md transition-all duration-300 cursor-pointer hover:bg-red-500 hover:scale-105'>
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
      <div className='flex flex-col p-5 mt-10 md:px-[200px]   '>

        <h2 className='text-2xl text-white p-2 font-semibold mb-5 bg-black text-center'>Refund Product</h2>
        <p className='font-bold text-lg mb-5'>Date:  {formattedDate}</p>
        <div className='grid grid-row  gap-4'>
          {electronicProducts.map(product => (
            <div key={product.id} className='relative text-white flex items-center p-5 bg-black '>
              <p className=' font-semibold text-lg flex-grow'>{product.name}</p>
              <p className='mr-5'>4000</p>
              <button onClick={() => handleDelete(product.id)} className='button mr-10 w-14 h-14 rounded-full bg-gray-200 text-white font-semibold shadow-md transition-all duration-300 cursor-pointer hover:bg-red-500 hover:scale-105'>
                <svg viewBox="0 0 448 512" className="svgIcon w-6 ml-4">
                  <path d="M135.2 17.7L128 32H32C14.3 32 0 46.3 0 64S14.3 96 32 96H416c17.7 0 32-14.3 32-32s-14.3-32-32-32H320l-7.2-14.3C307.4 6.8 296.3 0 284.2 0H163.8c-12.1 0-23.2 6.8-28.6 17.7zM416 128H32L53.2 467c1.6 25.3 22.6 45 47.9 45H346.9c25.3 0 46.3-19.7 47.9-45L416 128z"></path>
                </svg>
                <span className="absolute top-0 right-0 mt-5 text-white text-xs font-semibold transition-all duration-300 opacity-0">Delete</span>
              </button>
            </div>
          ))}
        </div>


        <form action="/Add" onSubmit={handleAddProduct} method="post"  >
          <div className=' md:flex md:flex-col-3 mt-10 ml-0 space-x-4'>
            <select
              value={role}
              onChange={(e) => setRole(e.target.value)}
              className='input bg-gray-300  border-2  px-8 md:w-30px  py-6 rounded-full mt-8 focus:outline-none focus:border-blue-500'>
              <option value=" ">Role </option>
              <option value="Refund Product">Refund Product </option>
              <option value="Exchange Product">Exchange Product</option>
              <option value="Electonic Product">Electonic Product</option>
            </select>
            <input
              onChange={(e) => setProductName(e.target.value)}
              type="text"
              name="text"
              placeholder="Product Name"
              className='input bg-gray-300 border-none md:w-30% rounded-full w-20% md:px-8 md:py-6  mt-8 focus:outline-none focus:border-blue-500  p-5 ml-14  ' />

             <input
              onChange={(e) => setProductNumber(e.target.value)}
              type="text"
              name="text"
              placeholder="Product stocks"
              className='input bg-gray-300  border-none md:w-30% rounded-full w-20% md:px-8 md:py-6  mt-8 focus:outline-none focus:border-blue-500  p-5 ml-14  ' />
            <button
              type="submit"
              className="mt-8 MD:ml-10 text-lg  justify-between block md:p-5  md:w-[200px] font-bold bg-gradient-to-br from-blue-500 to-blue-400 text-white px-8 py-6 rounded-2xl   shadow-md border-none transition duration-200 ease-in-out hover:scale-103 transform">
              Add
            </button>
          </div>
        </form>
        {error || <h1 className='text-center mt-20 text-lg bg-red-400'>{error}</h1>}
      </div></div>
      </div>
     
      <Footer />
    </>
  );
}

export default Inventory;
