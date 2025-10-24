import React from "react";
import Navbar from "./Navbar";
import Frame53 from "./assets/Frame53.png";
import { GoCircle } from "react-icons/go";
import { motion } from "framer-motion";
import Footer from "./Footer";
// import { PiCalendarBlank } from "react-icons/pi";

const Consultation = () => {
  return (
    <div>
      <div>
        <Navbar />
      </div>

      <div className="flex gap-10 ">
        <div className="w-full lg:w-1/2 flex justify-between">
          <motion.img
            src={Frame53}
            alt="Consultation"
            className="w-full max-w-[450px] sm:max-w-[500px] md:max-w-[550px] lg:max-w-[600px] object-contain rounded-2xl "
            transition={{ duration: 1, ease: "easeOut" }} 
            whileHover={{ scale: 1.05, rotate: 1 }} 
            whileTap={{ scale: 0.98 }} 
          />
        </div>

        <div>
          <h2 className="text-[#4B403F] text-4xl font-semibold mt-10">
            Let’s Bring Your
            <br /> Vision to Life.
          </h2>

          <div className="mt-10">
            <h2 className="text-[#7C7878] font-semibold">Email address</h2>
            <input
              type="text"
              name=""
              placeholder="Enter email address"
              id=""
              className="px-4 py-2 border rounded bg-[#F9F3F2] w-full sm:w-[300px] md:w-[400px] outline-none border-none "
            />
          </div>

          <div className="mt-5">
            <h2 className="text-[#7C7878] font-semibold">Name</h2>
            <input
              type="text"
              name=""
              placeholder="Enter Name"
              id=""
              className="px-4 py-2 border rounded bg-[#F9F3F2] w-full sm:w-[300px] md:w-[400px] outline-none border-none "
            />
          </div>

          <div>
            <h2 className="text-[#7C7878] mt-4 font-semibold">
              Booking Options
            </h2>

            <div className="flex flex-col gap-4 mt-2">
              <span className="flex items-center gap-2 text-[#4B403F]">
                <GoCircle />
                Discovery Call (15 min) — Free
              </span>
              <span className="flex items-center gap-2 text-[#4B403F]">
                <GoCircle />
                Interior Styling Session (60 min) — ₦
              </span>
              <span className="flex items-center gap-2 text-[#4B403F]">
                <GoCircle />
                Full-Service Design Consult (90 min) — Custom Quote
              </span>
            </div>

            <div>
              <h2 className="text-[#7C7878] mt-4 font-semibold">
                Project Type
              </h2>
              <select className="px-4 py-2 border rounded bg-[#F9F3F2] w-full sm:w-[300px] md:w-[400px] outline-none border-none mt-4 ">
                <option className=" bg-[#B0AEAE]">Select...</option>
              </select>
            </div>

            <div>
              <h2 className="text-[#7C7878] mt-4 font-semibold">
                Budget range
              </h2>
              <select
                name="Select"
                id="Select"
                className="px-4 py-2 border rounded bg-[#F9F3F2] w-full sm:w-[300px] md:w-[400px] outline-none border-none mt-4 "
              >
                <option className=" bg-[#B0AEAE]">Select...</option>
              </select>
            </div>

            <div>
              <h2 className="text-[#7C7878] mt-4 font-semibold">
                Preferred Date
              </h2>
              <select
                name="Select"
                id="Select"
                className="px-4 py-2 border rounded bg-[#F9F3F2] w-full sm:w-[300px] md:w-[400px] outline-none border-none mt-4 "
              >
                <option className="">Select...</option>{" "}
                {/* <PiCalendarBlank /> */}
              </select>
            </div>

            <div>
              <h2 className="text-[#7C7878] mt-4 font-semibold">
                Upload Mood Board (optional)
              </h2>
              <select
                name="Select"
                id="Select"
                className="px-4 py-2 border rounded bg-[#F9F3F2] w-full sm:w-[300px] md:w-[400px] outline-none border-none mt-4 "
              >
                <option className=" bg-[#B0AEAE]">Select...</option>
              </select>
            </div>

            <button className="px-4 py-2 border rounded bg-[#2D2726] text-white w-full sm:w-[300px] md:w-[400px] outline-none border-none mt-4 hover:bg-[#364D80] transition duration-300 cursor-pointer text-sm sm:text-base transform-3d hover:scale-105 ">
              Book Now
            </button>
          </div>
        </div>
      </div>

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

      <div>
        <Footer />
      </div>
    </div>
  );
};

export default Consultation;
