/* eslint-disable no-unused-vars */
import Homepage from "../components/Homepage"
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
function home() {
  return (
    <>
      <Navbar />
      <div className=' md-px[200px] bg-gray-100  '>
        <Homepage />
       
      </div>
      <Footer />
    </>

  )
}

export default home
