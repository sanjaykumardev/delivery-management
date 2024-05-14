/* eslint-disable no-unused-vars */
import React from "react"

const Footer = () => {
  return (
    <>
      <div className="  w-full bg-blue-500 px-8 md:px-[400px] md:flex-row p-10 flex-col flex  space-y-0 items-start justify-between sm:text-sm md:text-md py-20 md:text-1xl sm:space-x-0 gap-4">
        <div className=" flex flex-col  gap-3 text-xl text-white">
          <h1>Customer Service</h1>
          <p>Fearture Blogs</p>
          <p>Most Viewed</p>
          <p>Delivery Department</p>
          <p>Delivery Department</p>
          <p>Delivery Department</p>
          <p>Delivery Department</p>
        </div>

        {/* middle */}

        <div className=" flex flex-col gap-3 text-xl text-white ">
          <p> Forum</p>
          <p>Support</p>
          <p>Logistic Support</p>
        </div>

        <div className=" flex flex-col gap-3  text-xl text-white">
          <p>Privacy Policy</p>
          <p>About Us </p>
          <p>Terms & Condition</p>
          <p>Terms of Service</p>
        </div>
      </div>
      <p className="py-2 pb-2 h-full text-center text-white bg-black">All right reseved @Delivery Management 2024</p>
    </>

  )
}

export default Footer;