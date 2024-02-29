/* eslint-disable no-unused-vars */
import React from 'react';

const CubeLoader = () => {
  return (
    <div className="relative w-75 h-75 transform transform-style-preserve rotate-x-n30 animate-spin linear infinite">
      <div className="absolute w-full h-full transform-style-preserve">
        {[...Array(4)].map((_, index) => (
          <span key={index} style={{ '--i': index }} className="absolute w-full h-full rotate-y calc-90deg translate-z-37.5 bg-gradient-to-b from-hsl-330-3.13-25.1 to-hsl-176.89-99.07-58.04"></span>
        ))}
      </div>
      <div className="absolute w-75 h-75 bg-gradient-to-b from-hsl-330-3.13-25.1"></div>
      <div className="absolute w-75 h-75 transform transform-style-preserve rotate-x-90 translate-z-37.5">
        <div className="absolute w-75 h-75 bg-gradient-to-b from-hsl-176.61-42.28-40.7 blur-10 shadow-blur-10-323232 shadow-blur-20-hsl-176.61-42.28-40.7 shadow-blur-30-323232 shadow-blur-40-hsl-176.61-42.28-40.7"></div>
      </div>
    </div>
  );
};

export default CubeLoader;