import React from "react";
import Frame1 from "./assets/IMG1.png";
import Frame2 from "./assets/IMG2.png";
import Frame3 from "./assets/IMG3.png";
import Frame4 from "./assets/IMG4.png";
import Navbar from "./Navbar";
import Hero from "./Hero";
import Footer from "./Footer";
// import { useNavigate } from "react-router-dom";

const items = [
  {
    imgSrc: Frame1,
    buttonText: "View all furniture",
    goTo: "/furniture",
  },
  {
    imgSrc: Frame2,
    buttonText: "View decor gallery",
  },
  {
    imgSrc: Frame3,
    buttonText: "Shop bedding sets",
  },
  {
    imgSrc: Frame4,
    buttonText: "View lighting fixtures",
  },
];
const Dashboard = () => {
  // const navigate = useNavigate()
  return (
    <div className="w-full">
      
      <div className="bg-[#364D80] text-[#F9F3F2] text-center p-2 text-xs sm:text-sm md:text-base">
        <h1>FREE SHIPPING ON ORDERS OVER ₦100,000</h1>
      </div>

      {/* Navbar */}
      <Navbar />

      {/* Hero section */}
      <Hero />

      <div className="grid md:grid-cols-2 ">
        {items.map((frame, index) => {
          return (
            <div key={index} className="relative">
              <img src={frame.imgSrc} alt="" />

              <button className="absolute bottom-18 text-[#F9F3F2] bg-[#2D2726] mx-4 py-3 left-5 cursor-pointer transition duration-300 hover:bg-[#364D80] transform-3d hover:scale-105 text-xs sm:text-sm md:text-base px-2 sm:px-4">
                {frame.buttonText}
              </button>
            </div>
          );
        })}
      </div>

      {/* <button onClick={()=> navigate(frame.goTo)} className="absolute bottom-18 text-[#F9F3F2] bg-[#2D2726] px-4 py-2 left-5 cursor-pointer">
                {frame.buttonText}
              </button> */}

      {/* Newsletter section */}
      <div className="text-[#4B403F] text-center p-6 sm:p-10 mt-4">
        <h2 className="text-lg sm:text-2xl md:text-3xl font-semibold leading-snug">
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

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Dashboard;
