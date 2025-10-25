import React from "react";
import Navbar from "./Navbar";
import Glass from "./assets/Glass.png";
import Stairss from "./assets/Stairss.png";
import Flex from "./assets/Flex.png";
import Desk from "./assets/Desk.png";
import { motion } from "framer-motion";
import Footer from "./Footer";

const Journal = () => {
     const cardVariants = {
       offscreen: { y: 40, opacity: 0, scale: 0.98 },
       onscreen: {
         y: 0,
         opacity: 1,
         scale: 1,
         transition: { type: "spring", bounce: 0.15, duration: 0.7 },
       },
     };
  return (
    <div>
      <div>
        <Navbar />
      </div>

      <div>
        <h1 className="text-center text-5xl font-semibold mt-10 text-[#4B403F]">
          Journal{" "}
        </h1>
        <p className="text-center mt-2  text-[#4B403F]">
          Stay updated on industry trends and Lifegasm news.
        </p>

        <div className="flex flex-col md:flex-row gap-4 mt-4 items-center justify-center">
          <input
            type="text"
            placeholder="Enter email address"
            className="px-4 py-2 rounded bg-[#F9F3F2]  outline-none cursor-pointer "
          />

          <button className="bg-[#2D2726] text-white px-4 py-2 rounded hover:bg-[#364D80] transition duration-300 w-full sm:w-auto cursor-pointer text-sm sm:text-base transform-3d hover:scale-105">
            Subscribe to the Journal
          </button>
        </div>
      </div>

      <div className="mx-10 mr-10 grid md:grid-cols-3 mt-5 gap-6 cursor-pointer">
        <motion.div
          className="border w-90 h-80 shadow-lg rounded-lg mt-5 mb-5 overflow-hidden bg-white"
          variants={cardVariants}
          initial="offscreen"
          whileInView="onscreen"
          viewport={{ once: true, amount: 0.2 }}
          whileHover={{ y: -6, scale: 1.02 }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          <img
            src={Glass}
            alt="journal image"
            className="w-full rounded-lg cursor-pointer"
          />
          <div className="p-3">
            <h2 className="text-[#000E06] font-medium">
              The Art of Layering a Space
            </h2>
            <span className="text-[#101928] font-medium">1st July, 2025</span>
            <p className="text-[#667185] text-[12px] mt-2">
              Nestled in the heart of Lekki’s bustling creative district, The
              <br />
              Artisan Loft was designed as a multi-functional living...
            </p>
            <button className="bg-[#F9F3F2] text-[#2D2726] mt-1 py-2 w-80 rounded hover:bg-[#364D80] hover:text-white cursor-pointer">
              Read more
            </button>
          </div>
        </motion.div>

        <motion.div
          className="border w-90 h-80 shadow-lg rounded-lg mt-5 mb-5 overflow-hidden bg-white"
          variants={cardVariants}
          initial="offscreen"
          whileInView="onscreen"
          viewport={{ once: true, amount: 0.2 }}
          whileHover={{ y: -6, scale: 1.02 }}
          transition={{ type: "spring", stiffness: 300, delay: 0.08 }}
        >
          <img
            src={Stairss}
            alt="journal image"
            className="w-full rounded-lg cursor-pointer"
          />
          <div className="p-3">
            <h2 className="text-[#000E06] font-medium">
              Behind Our Latest Collection
            </h2>
            <span className="text-[#101928] font-medium">1st July, 2025</span>
            <p className="text-[#667185] text-[12px] mt-2">
              Nestled in the heart of Lekki’s bustling creative district, The
              <br />
              Artisan Loft was designed as a multi-functional living...
            </p>
            <button className="bg-[#F9F3F2] text-[#2D2726] mt-1 py-2 w-80 rounded hover:bg-[#364D80] hover:text-white cursor-pointer">
              Read more
            </button>
          </div>
        </motion.div>

        <motion.div
          className="border w-90 h-80 shadow-lg rounded-lg mt-5 mb-5 overflow-hidden bg-white"
          variants={cardVariants}
          initial="offscreen"
          whileInView="onscreen"
          viewport={{ once: true, amount: 0.2 }}
          whileHover={{ y: -6, scale: 1.02 }}
          transition={{ type: "spring", stiffness: 300, delay: 0.16 }}
        >
          <img
            src={Flex}
            alt="journal image"
            className="w-full rounded-lg cursor-pointer"
          />
          <div className="p-3">
            <h2 className="text-[#000E06] font-medium">
              Our Top 5 Colour Palettes This Se...
            </h2>
            <span className="text-[#101928] font-medium">1st July, 2025</span>
            <p className="text-[#667185] text-[12px] mt-2">
              Nestled in the heart of Lekki’s bustling creative district, The
              <br />
              Artisan Loft was designed as a multi-functional living...
            </p>
            <button className="bg-[#F9F3F2] text-[#2D2726] mt-1 py-2 w-80 rounded hover:bg-[#364D80] hover:text-white cursor-pointer">
              Read more
            </button>
          </div>
        </motion.div>
      </div>

      <div className="mx-10 mr-10 grid md:grid-cols-3 mt-5 gap-6 cursor-pointer">
        <motion.div
          className="border w-90 h-80 shadow-lg rounded-lg mt-5 mb-5 overflow-hidden bg-white"
          variants={cardVariants}
          initial="offscreen"
          whileInView="onscreen"
          viewport={{ once: true, amount: 0.2 }}
          whileHover={{ y: -6, scale: 1.02 }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          <img
            src={Desk}
            alt="journal image"
            className="w-full rounded-lg cursor-pointer"
          />
          <div className="p-3">
            <h2 className="text-[#000E06] font-medium">
              Designing for Wellness
            </h2>
            <span className="text-[#101928] font-medium">1st July, 2025</span>
            <p className="text-[#667185] text-[12px] mt-2">
              Nestled in the heart of Lekki’s bustling creative district, The
              <br />
              Artisan Loft was designed as a multi-functional living...
            </p>
            <button className="bg-[#F9F3F2] text-[#2D2726] mt-1 py-2 w-80 rounded hover:bg-[#364D80] hover:text-white cursor-pointer">
              Read more
            </button>
          </div>
        </motion.div>

        <motion.div
          className="border w-90 h-80 shadow-lg rounded-lg mt-5 mb-5 overflow-hidden bg-white"
          variants={cardVariants}
          initial="offscreen"
          whileInView="onscreen"
          viewport={{ once: true, amount: 0.2 }}
          whileHover={{ y: -6, scale: 1.02 }}
          transition={{ type: "spring", stiffness: 300, delay: 0.08 }}
        >
          <img
            src={Flex}
            alt="journal image"
            className="w-full rounded-lg cursor-pointer"
          />
          <div className="p-3">
            <h2 className="text-[#000E06] font-medium">
              Our Top 5 Colour Palettes This Se...
            </h2>
            <span className="text-[#101928] font-medium">1st July, 2025</span>
            <p className="text-[#667185] text-[12px] mt-2">
              Nestled in the heart of Lekki’s bustling creative district, The
              <br />
              Artisan Loft was designed as a multi-functional living...
            </p>
            <button className="bg-[#F9F3F2] text-[#2D2726] mt-1 py-2 w-80 rounded hover:bg-[#364D80] hover:text-white cursor-pointer">
              Read more
            </button>
          </div>
        </motion.div>

        <motion.div
          className="border w-90 h-80 shadow-lg rounded-lg mt-5 mb-5 overflow-hidden bg-white"
          variants={cardVariants}
          initial="offscreen"
          whileInView="onscreen"
          viewport={{ once: true, amount: 0.2 }}
          whileHover={{ y: -6, scale: 1.02 }}
          transition={{ type: "spring", stiffness: 300, delay: 0.16 }}
        >
          <img
            src={Glass}
            alt="journal image"
            className="w-full rounded-lg cursor-pointer"
          />
          <div className="p-3">
            <h2 className="text-[#000E06] font-medium">
              The Art of Layering a Space
            </h2>
            <span className="text-[#101928] font-medium">1st July, 2025</span>
            <p className="text-[#667185] text-[12px] mt-2">
              Nestled in the heart of Lekki’s bustling creative district, The
              <br />
              Artisan Loft was designed as a multi-functional living...
            </p>
            <button className="bg-[#F9F3F2] text-[#2D2726] mt-1 py-2 w-80 rounded hover:bg-[#364D80] hover:text-white cursor-pointer">
              Read more
            </button>
          </div>
        </motion.div>
      </div>

      <div className="mx-10 mr-10 grid md:grid-cols-3 mt-5 gap-6 cursor-pointer">
        <motion.div
          className="border w-90 h-80 shadow-lg rounded-lg mt-5 mb-5 overflow-hidden bg-white"
          variants={cardVariants}
          initial="offscreen"
          whileInView="onscreen"
          viewport={{ once: true, amount: 0.2 }}
          whileHover={{ y: -6, scale: 1.02 }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          <img
            src={Glass}
            alt="journal image"
            className="w-full rounded-lg cursor-pointer"
          />
          <div className="p-3">
            <h2 className="text-[#000E06] font-medium">
              The Art of Layering a Space
            </h2>
            <span className="text-[#101928] font-medium">1st July, 2025</span>
            <p className="text-[#667185] text-[12px] mt-2">
              Nestled in the heart of Lekki’s bustling creative district, The
              <br />
              Artisan Loft was designed as a multi-functional living...
            </p>
            <button className="bg-[#F9F3F2] text-[#2D2726] mt-1 py-2 w-80 rounded hover:bg-[#364D80] hover:text-white cursor-pointer">
              Read more
            </button>
          </div>
        </motion.div>

        <motion.div
          className="border w-90 h-80 shadow-lg rounded-lg mt-5 mb-5 overflow-hidden bg-white"
          variants={cardVariants}
          initial="offscreen"
          whileInView="onscreen"
          viewport={{ once: true, amount: 0.2 }}
          whileHover={{ y: -6, scale: 1.02 }}
          transition={{ type: "spring", stiffness: 300, delay: 0.08 }}
        >
          <img
            src={Desk}
            alt="journal image"
            className="w-full rounded-lg cursor-pointer"
          />
          <div className="p-3">
            <h2 className="text-[#000E06] font-medium">
              Designing for Wellness
            </h2>
            <span className="text-[#101928] font-medium">1st July, 2025</span>
            <p className="text-[#667185] text-[12px] mt-2">
              Nestled in the heart of Lekki’s bustling creative district, The
              <br />
              Artisan Loft was designed as a multi-functional living...
            </p>
            <button className="bg-[#F9F3F2] text-[#2D2726] mt-1 py-2 w-80 rounded hover:bg-[#364D80] hover:text-white cursor-pointer">
              Read more
            </button>
          </div>
        </motion.div>

        <motion.div
          className="border w-90 h-80 shadow-lg rounded-lg mt-5 mb-5 overflow-hidden bg-white"
          variants={cardVariants}
          initial="offscreen"
          whileInView="onscreen"
          viewport={{ once: true, amount: 0.2 }}
          whileHover={{ y: -6, scale: 1.02 }}
          transition={{ type: "spring", stiffness: 300, delay: 0.16 }}
        >
          <img
            src={Flex}
            alt="journal image"
            className="w-full rounded-lg cursor-pointer"
          />
          <div className="p-3">
            <h2 className="text-[#000E06] font-medium">
              Our Top 5 Colour Palettes This Se...
            </h2>
            <span className="text-[#101928] font-medium">1st July, 2025</span>
            <p className="text-[#667185] text-[12px] mt-2">
              Nestled in the heart of Lekki’s bustling creative district, The
              <br />
              Artisan Loft was designed as a multi-functional living...
            </p>
            <button className="bg-[#F9F3F2] text-[#2D2726] mt-1 py-2 w-80 rounded hover:bg-[#364D80] hover:text-white cursor-pointer">
              Read more
            </button>
          </div>
        </motion.div>
      </div>

      <div className="mx-10 mr-10 grid md:grid-cols-3 mt-5 gap-6 cursor-pointer">
        <motion.div
          className="border w-90 h-80 shadow-lg rounded-lg mt-5 mb-5 overflow-hidden bg-white"
          variants={cardVariants}
          initial="offscreen"
          whileInView="onscreen"
          viewport={{ once: true, amount: 0.2 }}
          whileHover={{ y: -6, scale: 1.02 }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          <img
            src={Flex}
            alt="journal image"
            className="w-full rounded-lg cursor-pointer"
          />
          <div className="p-3">
            <h2 className="text-[#000E06] font-medium">
              Our Top 5 Colour Palettes This Se...
            </h2>
            <span className="text-[#101928] font-medium">1st July, 2025</span>
            <p className="text-[#667185] text-[12px] mt-2">
              Nestled in the heart of Lekki’s bustling creative district, The
              <br />
              Artisan Loft was designed as a multi-functional living...
            </p>
            <button className="bg-[#F9F3F2] text-[#2D2726] mt-1 py-2 w-80 rounded hover:bg-[#364D80] hover:text-white cursor-pointer">
              Read more
            </button>
          </div>
        </motion.div>

        <motion.div
          className="border w-90 h-80 shadow-lg rounded-lg mt-5 mb-5 overflow-hidden bg-white"
          variants={cardVariants}
          initial="offscreen"
          whileInView="onscreen"
          viewport={{ once: true, amount: 0.2 }}
          whileHover={{ y: -6, scale: 1.02 }}
          transition={{ type: "spring", stiffness: 300, delay: 0.08 }}
        >
          <img
            src={Glass}
            alt="journal image"
            className="w-full rounded-lg cursor-pointer"
          />
          <div className="p-3">
            <h2 className="text-[#000E06] font-medium">
              The Art of Layering a Space
            </h2>
            <span className="text-[#101928] font-medium">1st July, 2025</span>
            <p className="text-[#667185] text-[12px] mt-2">
              Nestled in the heart of Lekki’s bustling creative district, The
              <br />
              Artisan Loft was designed as a multi-functional living...
            </p>
            <button className="bg-[#F9F3F2] text-[#2D2726] mt-1 py-2 w-80 rounded hover:bg-[#364D80] hover:text-white cursor-pointer">
              Read more
            </button>
          </div>
        </motion.div>

        <motion.div
          className="border w-90 h-80 shadow-lg rounded-lg mt-5 mb-5 overflow-hidden bg-white"
          variants={cardVariants}
          initial="offscreen"
          whileInView="onscreen"
          viewport={{ once: true, amount: 0.2 }}
          whileHover={{ y: -6, scale: 1.02 }}
          transition={{ type: "spring", stiffness: 300, delay: 0.16 }}
        >
          <img
            src={Desk}
            alt="journal image"
            className="w-full rounded-lg cursor-pointer"
          />
          <div className="p-3">
            <h2 className="text-[#000E06] font-medium">
              Designing for Wellness
            </h2>
            <span className="text-[#101928] font-medium">1st July, 2025</span>
            <p className="text-[#667185] text-[12px] mt-2">
              Nestled in the heart of Lekki’s bustling creative district, The
              <br />
              Artisan Loft was designed as a multi-functional living...
            </p>
            <button className="bg-[#F9F3F2] text-[#2D2726]  mt-1 mb-3 py-2 w-80 rounded hover:bg-[#364D80] hover:text-white cursor-pointer">
              Read more
            </button>
          </div>
        </motion.div>
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

      <Footer />
    </div>
  );
};

export default Journal;
