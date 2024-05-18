/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
import { useNavigate } from 'react-router-dom';
import Axios from 'axios';
import { useState } from 'react';
import Navbar from '../components/Navbar';
import { Link } from 'react-router-dom';
import Footer from '../components/Footer';
// import Footer from '../components/Footer';

const Register = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [role, setRole] = useState("");
  const [error, setError] = useState(false);
  const navigator = useNavigate();

  const URL = "http://localhost:3000";
  // const URL = "https://delivery-management-11.onrender.com";

  async function RegisterSubmit(e) {

    e.preventDefault();
    console.log(e);
    try {
      const res = await Axios.post( URL + "/register", {
        username,
        password,
        email,
        role
      });
      console.log('Username:', username);
      console.log('Email:', email);
      console.log('Password:', password);
      console.log(res);

      setUsername('');
      setEmail('');
      setPassword('');
      setError(false);
      navigator('/');
    } catch (err) {
      setError(true);
      console.log(err);
    }

  }


  return (


    <>
      <Navbar />
      <div className='w-full flex justify-center mt-40 bg-white items-center mb-20 h-[80vh]'>
        <div className='flex flex-coljustify-center items-center space-y-2 w-[100%] md:w-[30%] '>
          <div className=' w-full bg-gradient-to-b  from-white to-white  p-10 border-5  m-8'>
            <div className="heading text-center font-extrabold text-5xl text-blue-500">Sign Up</div>
            <form onSubmit={RegisterSubmit} >
              <input
                type="username"
                placeholder="username"
                value={username}
                className='input bg-gray-200 text-lg border-none px-8  w-full py-6 rounded-full mt-8 focus:outline-none focus:border-blue-500'
                onChange={(e) => setUsername(e.target.value)}
              />
              <input
                type="Email"
                placeholder="Email"
                value={email}
                className='input bg-gray-200 text-lg border-none w-full px-8 py-6 rounded-full mt-8 focus:outline-none focus:border-blue-500'
                onChange={(e) => setEmail(e.target.value)}
              />

              <input
                type="Password"
                placeholder="Password"
                value={password}
                className='input bg-gray-200 text-lg border-none w-full px-8 py-6 rounded-full mt-8 focus:outline-none focus:border-blue-500'
                onChange={(e) => setPassword(e.target.value)}
              />
              <select
                required
                name="role"
                className='input bg-gray-200 border-none px-8 w-full py-6 rounded-full mt-8 focus:outline-none focus:border-blue-500'
                onChange={(e) => setRole(e.target.value)}
              >
                <option value=""> Role</option>
                <option value="inventory">Inventory Team</option>
                <option value="delivery">Delivery Team</option>
              </select>

              <button className='login-button block w-full font-bold bg-gradient-to-br from-blue-500 to-blue-400 text-white px-8 text-2xl py-6 rounded-full mt-8 mx-auto shadow-md border-none transition duration-200 ease-in-out hover:scale-103 transform' type='submit'
              >Sign Up
              </button>
            </form>
            <div>
              <div className='social-account-container mt-8'>
                <span className='title block text-center text-xs text-gray-500'>Or Sign in with</span>
                <div className='social-accounts flex justify-center items-center gap-4 mt-2'>
                  <button className='social-button bg-gradient-to-br from-white to-gray-200 border-white border-5 p-2 rounded-full w-16 h-16 grid place-items-center shadow-md transition duration-200 ease-in-out transform hover:scale-120 active:scale-90'>
                    <svg className='svg' xmlns='http://www.w3.org/2000/svg' height='1em' viewBox='0 0 488 512'>
                      <path d='M488 261.8C488 403.3 391.1 504 248 504 110.8 504 0 393.2 0 256S110.8 8 248 8c66.8 0 123 24.5 166.3 64.9l-67.5 64.9C258.5 52.6 94.3 116.6 94.3 256c0 86.5 69.1 156.6 153.7 156.6 98.2 0 135-70.4 140.8-106.9H248v-85.3h236.1c2.3 12.7 3.9 24.9 3.9 41.4z'></path>
                    </svg>
                  </button>
                  <button className='social-button bg-gradient-to-br from-white to-gray-200 border-white border-5 p-2 rounded-full w-16 h-16 grid place-items-center shadow-md transition duration-200 ease-in-out transform hover:scale-120 active:scale-90'>
                    <svg className='svg' xmlns='http://www.w3.org/2000/svg' height='1em' viewBox='0 0 384 512'>
                      <path d='M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 20.7-88.5 20.7-15 0-49.4-19.7-76.4-19.7C63.3 141.2 4 184.8 4 273.5q0 39.3 14.4 81.2c12.8 36.7 59 126.7 107.2 125.2 25.2-.6 43-17.9 75.8-17.9 31.8 0 48.3 17.9 76.4 17.9 48.6-.7 90.4-82.5 102.6-119.3-65.2-30.7-61.7-90-61.7-91.9zm-56.6-164.2c27.3-32.4 24.8-61.9 24-72.5-24.1 1.4-52 16.4-67.9 34.9-17.5 19.8-27.8 44.3-25.6 71.9 26.1 2 49.9-11.4 69.5-34.3z'></path>
                    </svg>
                  </button>
                  <button className='social-button bg-gradient-to-br from-white to-gray-200 border-white border-5 p-2 rounded-full w-16 h-16 grid place-items-center shadow-md transition duration-200 ease-in-out transform hover:scale-120 active:scale-90'>
                    <svg className='svg' xmlns='http://www.w3.org/2000/svg' height='1em' viewBox='0 0 512 512'>
                      <path d='M389.2 48h70.6L305.6 224.2 487 464H345L233.7 318.6 106.5 464H35.8L200.7 275.5 26.8 48H172.4L272.9 180.9 389.2 48zM364.4 421.8h39.1L151.1 88h-42L364.4 421.8z'></path>
                    </svg>
                  </button>
                </div>
              </div>
              <span className='agreement block text-center text-xs text-gray-500 mt-6'>
                <a href="#" className='no-underline text-blue-500'>Learn user licence agreement</a>
              </span>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};


export default Register;



{/* <p className=' md:mb-10   md:ml-20'><span className="font-bold ">Create New here?</span> <span className="cursor-pointer text-gray-700 pl-2" ><Link to='/Register'>Register</Link> </span></p>
{error && <h3 className='text-red-500 mb-10 ml-20 text-center'>something went wrong</h3>} */}