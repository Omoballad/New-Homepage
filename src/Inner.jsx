import React from "react";
import { motion } from "framer-motion";
import Navbar from "./Navbar";
import Rooms from "./assets/Rooms.png";
import Rooms2 from "./assets/Rooms2.png";
import Stairs from "./assets/Stairs.png";
import Dinning from "./assets/Dinning.png";
import Table from "./assets/Table.png";
import Footer from "./Footer";

const Inner = () => {
  return (
    <div>
      <Navbar />

      <div>
        <img src={Rooms} alt="Rooms" className="w-full h-auto" />
      </div>

      <div className="w-full px-4 sm:px-6 md:px-8 lg:px-0">
        <div className="max-w-6xl mx-auto my-8 md:flex md:items-center md:justify-between md:gap-3">
          <div>
            <p className="mt-4 text-[#70615F] font-medium text-base sm:text-lg md:text-xl leading-relaxed">
              Nestled in the heart of Lekki’s bustling creative district, The
              <br className="hidden md:block" />
              Artisan Loft was designed as a multi-functional living space
              <br className="hidden md:block" /> that reflects the client’s love
              for minimalist design, earthy
              <br className="hidden md:block" /> materials, and subtle luxury.
              The project involved a full
              <br className="hidden md:block" /> renovation of a 3-bedroom
              apartment into an open-concept
              <br className="hidden md:block" /> space combining a home office,
              relaxation zones, and
              <br className="hidden md:block" /> entertaining areas. Our task
              was to create a serene, functional
              <br className="hidden md:block" /> environment where simplicity
              meets sophistication—carefully
              <br className="hidden md:block" /> balancing texture, light, and
              spatial harmony.
            </p>

            <div className="mt-6">
              <h2 className="font-medium text-[#70615F] text-lg sm:text-xl md:text-2xl">
                Project Goals
              </h2>
              <p className="mt-2 font-medium text-[#70615F] text-base sm:text-lg md:text-xl leading-relaxed">
                Transform a dated apartment into a modern, airy loft-style home.
                <br className="hidden md:block" />
                Blend natural materials with a muted, warm color palette.
                <br className="hidden md:block" /> Optimize lighting and flow
                across shared and private areas.
                <br className="hidden md:block" /> Incorporate artisanal,
                locally-sourced décor elements.
                <br className="hidden md:block" /> Ensure flexibility in the
                layout for work-from-home functionality.
              </p>
            </div>

            <div className="mt-6">
              <h2 className="font-medium text-[#70615F] text-lg sm:text-xl md:text-2xl">
                Moodboard
              </h2>
            </div>

            <div className="mt-2 font-medium text-[#70615F] text-base sm:text-lg md:text-xl leading-relaxed">
              <span>
                Color Palette: Warm neutrals, soft greys, clay browns, and
                off-white.
                <br className="hidden md:block" /> Textures: Raw concrete,
                polished wood, brushed brass, jute, linen.
                <br className="hidden md:block" /> Inspiration Sources:
                Scandinavian calm, African craftsmanship, biophilic design.
                <br className="hidden md:block" /> The moodboard served as a
                visual compass throughout the
                <br className="hidden md:block" />
                project, keeping us aligned with the client’s vision while
                <br className="hidden md:block" />
                allowing room for organic creativity.
              </span>
            </div>
          </div>

          <motion.img
              src={Rooms2}
              alt=""
              className=" md:h-[600px] rounded-lg max-w-full mx-auto  md:mx-0 md:px-0"
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
            />
          {/* <img src={Rooms2} className="h-[600px]" alt="" /> */}
        </div>
      </div>

      <div className="text-[#70615F] font-medium text-center text-2xl px-4 md:px-0">
        <h2>Design Highlights</h2>
      </div>
      <div>
        <div className="flex flex-col md:flex-row mt-10 md:mt-20 px-4 md:px-12 justify-between items-center gap-8">
          <div className="text-[#70615F] font-medium md:mt-40 w-full md:w-1/2">
            <span>
              Custom Entryway Feature Wall: A textured plaster wall with
              <br />
              built-in shelving welcomes guests with a curated display of
              <br />
              ceramics and books, adding depth and character to the
              <br /> entrance.
            </span>
          </div>
          <div className="w-full md:w-1/2 flex justify-center">
            <motion.img
              src={Stairs}
              alt=""
              className="max-w-full h-auto rounded-lg"
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
            />
          </div>
        </div>

        {/* Highlight 2 */}
        <div className="flex flex-col md:flex-row mt-10 md:mt-20 px-4 md:px-12 justify-between items-center gap-8">
          <div className="w-full md:w-1/2 flex justify-center">
            <motion.img
              src={Dinning}
              alt=""
              className="max-w-full h-auto rounded-lg"
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
            />
          </div>
          <div className="text-[#70615F] font-medium md:mt-40 w-full md:w-1/2">
            <span>
              Open-Plan Living Space: Removed internal walls to combine
              <br /> the kitchen, dining, and living areas into a continuous
              space
              <br /> filled with natural light. The kitchen island doubles as a
              dining
              <br /> table, encouraging casual, communal living.
            </span>
          </div>
        </div>

        {/* Highlight 3 */}
        <div className="flex flex-col md:flex-row mt-10 md:mt-20 px-4 md:px-12 justify-between items-center gap-8">
          <div className="text-[#70615F] font-medium md:mt-40 w-full md:w-1/2">
            <span>
              Open-Plan Living Space: Removed internal walls to combine
              <br /> the kitchen, dining, and living areas into a continuous
              space
              <br /> filled with natural light. The kitchen island doubles as a
              dining
              <br /> table, encouraging casual, communal living.
            </span>
          </div>
          <div className="w-full md:w-1/2 flex justify-center">
            <motion.img
              src={Table}
              alt=""
              className="max-w-full h-auto rounded-lg"
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
            />
          </div>
        </div>

        {/* Materials Used */}
        <div className="flex flex-col md:flex-row mt-8 md:mt-20 px-4 md:px-12 justify-between gap-8">
          <div className="mt-4 md:mt-15 text-[#70615F] font-medium w-full md:w-1/2">
            <h2 className="text-lg md:text-2xl">Materials Used</h2>
            <div className="mt-2 md:mt-4">
              <p>
                Sustainability was a key consideration; where possible,
                <br /> we sourced local, low-impact materials that offered
                <br /> durability and timeless appeal.
              </p>
            </div>
          </div>
          <div className="text-[#70615F] font-medium mt-4 md:mt-5 w-full md:w-1/2 flex flex-col gap-2">
            <span>
              Flooring: Matte-finish micro cement in main areas; oak hardwood in
              the bedrooms.
            </span>
            <span>
              Wall Treatments: Earth-toned lime wash paint, textured concrete
              finishes.
            </span>
            <span>
              Furniture: Bespoke pieces made from reclaimed teak and acacia
              wood.
            </span>
            <span>
              Soft Furnishings: Linen curtains, natural cotton throws, handmade
              wool rugs.
            </span>
            <span>
              Accents: Brushed brass hardware, blackened steel frames, woven
              seagrass baskets
            </span>
          </div>
        </div>
      </div>

      <div className="text-[#70615F] font-medium text-center text-[15px] mt-20">
        <span>
          “ Working with Lifegasm was transformative. I had a vision but didn’t
          know how to bring it to life and they didn’t just
          <br /> deliver, they exceeded every expectation. The space is so ‘me’;
          warm, functional, beautiful. I love that every piece tells a<br />{" "}
          story, and I feel calm every time I walk through the door ”
        </span>

        <h2 className="font-bold mt-10">Amaka E., Homeowner</h2>
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

export default Inner;
