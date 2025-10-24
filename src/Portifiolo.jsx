import React from "react";
import Navbar from "./Navbar";
import HeroImage from "./assets/HeroImage.png";
import Clothe1 from "./assets/Clothe1.png";
import Clothe2 from "./assets/Clothe2.png";
import Clothe3 from "./assets/Clothe3.png";
import Clothe4 from "./assets/Clothe4.png";
import Clothe5 from "./assets/Clothe5.png";
import Clothe6 from "./assets/Clothe6.png";
import Footer from "./Footer";

const Portifiolo = () => {
  return (
    <div>
      <Navbar />
      <div className="relative w-full bg-[#2D2726]">
        {/* Background Image */}
        <img
          src={HeroImage}
          alt="Hero section"
          className="w-[1,312px] h-[250px] sm:h-[400px] md:h-[550px] lg:h-[703px] mx-auto object-cover opacity-70 pt-6 pb-4"
        />

        <div className="absolute inset-0 flex flex-col items-center justify-center px-4 sm:px-8 text-center">
          <h2 className="text-sm sm:text-2xl md:text-4xl lg:text-5xl xl:text-6xl text-[#F9F3F2] font-bold leading-snug sm:leading-tight drop-shadow-md">
            Explore our collection of residential
            <br className="hidden sm:block" /> and commercial projects.
          </h2>

          <p className="mt-3 sm:mt-4 mb-2 md:mb-4 text-[#EFE0DE] text-[10px] sm:text-sm md:text-base lg:text-lg max-w-xs sm:max-w-md md:max-w-lg">
            Each project reflects our timeless design: grounded in nature.
          </p>
        </div>
      </div>

      <div className="w-full py-10 px-4 sm:px-8 md:px-12 lg:px-16">
        {/* Header Section */}
        <div className=" mb-10">
          <h2 className="text-2xl sm:text-3xl md:text-2xl font-bold text-[#2D2726] mb-4 underline -underline-offset-0 decoration-[#2D2726]">
            Residential
          </h2>

          <div className="flex flex-col text-sm sm:text-base text-[#2D2726]">
            <span className="cursor-pointer hover:text-[#364D80] transition duration-300">
              Commercial
            </span>
            <span className="cursor-pointer hover:text-[#364D80] transition duration-300">
              Styling
            </span>
            <span className="cursor-pointer hover:text-[#364D80] transition duration-300">
              Custom Product Commissions
            </span>
          </div>
        </div>

        {/* Image Section */}
        <div className="grid grid-cols-2 md:grid-cols-3 ">
          <div className="flex flex-col ">
            <img
              src={Clothe1}
              alt="Residential Design 1"
              className="rounded-lg w-full object-cover hover:scale-105 transition-transform duration-500 shadow-md"
            />
            <img
              src={Clothe2}
              alt="Residential Design 2"
              className="rounded-lg w-full object-cover hover:scale-105 transition-transform duration-500 shadow-md"
            />
          </div>

          <div className="flex flex-col">
            <img
              src={Clothe3}
              alt="Residential Design 3"
              className="rounded-lg w-full object-cover hover:scale-105 transition-transform duration-500 shadow-md"
            />
            <img
              src={Clothe4}
              alt="Residential Design 4"
              className="rounded-lg w-full object-cover hover:scale-105 transition-transform duration-500 shadow-md"
            />
          </div>

          <div className="flex flex-col">
            <img
              src={Clothe5}
              alt="Residential Design 5"
              className="rounded-lg w-full object-cover hover:scale-105 transition-transform duration-500 shadow-md"
            />
            <img
              src={Clothe6}
              alt="Residential Design 6"
              className="rounded-lg w-full object-cover hover:scale-105 transition-transform duration-500 shadow-md"
            />
          </div>

          <div className="col-span-2 md:col-span-3 mt-10 text-center text-[#4B403F]">
            <h2 className="text-lg sm:text-2xl md:text-3xl ">
              Join our design circle for exclusive drops, styling tips,
              <br className="hidden sm:block" /> and early access.
            </h2>

            <div className="flex flex-col sm:flex-row justify-center items-center mt-6 gap-2">
              <input
                type="email"
                name="email"
                id="email"
                placeholder="email address"
                className="px-4 py-2 border rounded bg-[#F9F3F2] w-full sm:w-[300px] md:w-[400px] outline-none border-none "
              />
            </div>
            <button className="bg-[#2D2726] text-white mt-4 px-4 py-2 rounded hover:bg-[#364D80] transition duration-300 w-full sm:w-auto cursor-pointer text-sm sm:text-base transform-3d hover:scale-105">
              Subscribe Now
            </button>
          </div>
        </div>
      </div>
     <div>
        <Footer />
     </div>
    </div>
  );
};

export default Portifiolo;
