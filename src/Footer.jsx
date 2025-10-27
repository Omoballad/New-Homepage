import React from 'react'
import Lifelogo from "./images/Lifelogo.png";

const currentYear = new Date().getFullYear();
const Footer = () => {

  return (
    <div className="bg-[#2D2726] text-[#F9F3F2]  p-6 sm:p-10">
      <div>
        <img src={Lifelogo} alt="logo" className=" mb-4 h-8 sm:h-10" />
      </div>

      <div className="flex flex-col md:flex-row justify-center md:justify-between items-center mt-8 gap-6 md:gap-20">
        <div className="flex flex-wrap gap-4 justify-center cursor-pointer text-sm sm:text-base">
          <span>Portfolio</span>
          <span>Journal</span>
          <span>About</span>
          <span>Contact</span>
        </div>

        <div className="flex flex-wrap gap-4 justify-center cursor-pointer text-sm sm:text-base">
          <span>Shop</span>
          <span>Cart</span>
          <span>Book a Consultation</span>
        </div>
      </div>

      <div className="mt-10">
        <hr className="border-gray-500" />
      </div>
      <div>
        <p className="mt-4 text-[10px] sm:text-xs md:text-sm">
          Copyright Lifegasm Org {currentYear}
        </p>
      </div>
    </div>
  );
}

export default Footer
