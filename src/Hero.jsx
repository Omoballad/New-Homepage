import React from 'react'
import HeroImage from "./assets/HeroImage.png";

const Hero = () => {
  return (
    <div className="relative">
      <img src={HeroImage} alt="hero" className="w-full h-auto" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 mx-auto md:mx-0 text-center md:px-2 sm:px-6">
        <h2 className="text-xs sm:text-3xl md:text-5xl lg:text-6xl text-[#F9F3F2] font-bold leading-tight">
          Elevate <br /> Everyday Living
        </h2>
        <p className="md:mt-2 max-[281px]:mb-0 mb-2 md:mb-4 text-[#EFE0DE]  text-[10px] sm:text-sm md:text-base max-w-md md:mx-auto">
          Discover thoughtfully designed interiors and handcrafted pieces that
          bring warmth, function, and beauty into your space.
        </p>
        <button className="bg-[#2D2726] max-[281px]:py-1 max-[281px]:px-2 text-[#F9F3F2] px-3 md:px-4 sm:px-6 py-2 rounded transition duration-300 hover:bg-[#364D80] cursor-pointer text-xs sm:text-base">
          Shop our Collection
        </button>
      </div>
    </div>
  );
}

export default Hero
