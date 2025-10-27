import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Lifegasm from "./images/Lifegasm.png";
import { PiShoppingBag } from "react-icons/pi";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoClose } from "react-icons/io5"; // close icon

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  const toggleMenu = () => setIsOpen(!isOpen);

  const handleNavigate = (path) => {
    navigate(path);
    setIsOpen(false); 
  };

  return (
    <nav className="w-full bg-white shadow-sm ">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-10">
        
          <button
            className="text-2xl md:hidden focus:outline-none"
            onClick={toggleMenu}
          >
            {isOpen ? <IoClose /> : <GiHamburgerMenu />}
          </button>

          <div
            className="flex items-center justify-center flex-1 cursor-pointer"
            onClick={() => handleNavigate("/")}
          >
            <img
              src={Lifegasm}
              alt="Lifegasm Logo"
              className="h-6 sm:h-8 md:h-10"
            />
          </div>

         
          <PiShoppingBag
            className="text-2xl cursor-pointer"
            onClick={() => handleNavigate("/cart")}
          />
        </div>
      </div>

   
      <div
        className={`md:hidden bg-white border-t shadow-md overflow-hidden transition-all duration-500 ease-in-out ${
          isOpen ? "max-h-60 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <ul className="flex flex-col items-center space-y-4 py-4 text-gray-700 font-medium">
          <li
            onClick={() => handleNavigate("/")}
            className="hover:text-[#70615F] cursor-pointer transition"
          >
            Home
          </li>
          <li
            onClick={() => handleNavigate("/shop")}
            className="hover:text-[#70615F] cursor-pointer transition"
          >
            Shop
          </li>
          <li
            onClick={() => handleNavigate("/about")}
            className="hover:text-[#70615F] cursor-pointer transition"
          >
            About
          </li>
          <li
            onClick={() => handleNavigate("/contact")}
            className="hover:text-[#70615F] cursor-pointer transition"
          >
            Contact
          </li>
        </ul>
      </div>

      
      <div className="hidden md:flex justify-center space-x-8 py-3 text-gray-700 font-medium">
        <Link to="/" className="hover:text-[#70615F] transition">
          Home
        </Link>
        <Link to="/inner" className="hover:text-[#70615F] transition">
          Shop
        </Link>
        <Link to="/portifiolo" className="hover:text-[#70615F] transition">
          About
        </Link>
        <Link to="/contact" className="hover:text-[#70615F] transition">
          Contact
        </Link>
      </div>
    </nav>
  );
}
