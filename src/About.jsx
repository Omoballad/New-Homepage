import React, { useState } from "react";
import Navbar from "./Navbar";
import Swatches from "./assets/Swatches.png";
import Armchair from "./assets/Armchair.png";
import FlowerLotus from "./assets/FlowerLotus.png";
import Footer from "./Footer";

const About = () => {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState(""); 

  const handleSubscribe = (e) => {
    e.preventDefault();

    // Simple email validation
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!email) {
      setStatus("error-empty");
      return;
    }

    if (!emailPattern.test(email)) {
      setStatus("error-invalid");
      return;
    }

    // Simulate async subscription
    setStatus("loading");
    setTimeout(() => {
      setStatus("success");
      setEmail("");
    }, 1500);
  };

  return (
    <div className="bg-[#FFFDFC] text-[#4B403F] min-h-screen flex flex-col">
      {/* Navbar */}
      <Navbar />

      {/* Header Section */}
      <section className="px-4 sm:px-8 md:px-20 mt-10">
        <h2 className="text-2xl sm:text-4xl md:text-5xl font-medium text-center">
          Crafted Spaces, Conscious Living
        </h2>

        <div className="mt-8 text-[#70615F] text-base sm:text-lg md:text-xl leading-relaxed ml-10 max-w-3xl ">
          <p>
            Rooted in intentional design and sustainable production,
            <br className="hidden sm:block" />
            Lifegasm creates timeless interiors and products inspired by
            <br className="hidden sm:block" />
            nature, form, and function.
          </p>
        </div>

        <div className="mt-8 text-[#70615F] text-base sm:text-lg md:text-xl leading-relaxed text-center max-w-3xl mr-10 mx-auto">
          <p>
            Founded by Awolesi Oluwakemisola, a designer with a passion
            <br className="hidden sm:block" />
            for soulful spaces and tactile experiences, the studio blends
            <br className="hidden sm:block" />
            African warmth with minimalist sensibilities.
          </p>
        </div>
      </section>

      {/* Philosophy Section */}
      <section className="px-6 sm:px-10 md:px-20 mt-16">
        <h2 className="text-2xl sm:text-3xl font-medium mb-8 ml-10 text-center sm:text-left">
          Philosophy
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center">
          {/* Card 1 */}
          <div className="outline outline-[#70615F] outline-[1px] w-full sm:w-72 h-60 rounded-lg shadow-md flex flex-col items-center justify-center p-6 transition-transform duration-300 transform hover:scale-105 hover:shadow-lg cursor-pointer bg-white">
            <img
              src={Swatches}
              alt="Thoughtful design"
              className="w-16 h-16 mb-4"
            />
            <p className="text-[#70615F] text-lg font-semibold text-center">
              Thoughtful design
            </p>
          </div>

          {/* Card 2 */}
          <div className="outline outline-[#70615F] outline-[1px] w-full sm:w-72 h-60 rounded-lg shadow-md flex flex-col items-center justify-center p-6 transition-transform duration-300 transform hover:scale-105 hover:shadow-lg cursor-pointer bg-white">
            <img
              src={Armchair}
              alt="Ethical craftsmanship"
              className="w-16 h-16 mb-4"
            />
            <p className="text-[#70615F] text-lg font-semibold text-center">
              Ethical craftsmanship
            </p>
          </div>

          {/* Card 3 */}
          <div className="outline outline-[#70615F] outline-[1px] w-full sm:w-72 h-60 rounded-lg shadow-md flex flex-col items-center justify-center p-6 transition-transform duration-300 transform hover:scale-105 hover:shadow-lg cursor-pointer bg-white">
            <img
              src={FlowerLotus}
              alt="Inspired by nature"
              className="w-16 h-16 mb-4"
            />
            <p className="text-[#70615F] text-lg font-semibold text-center">
              Inspired by nature
            </p>
          </div>
        </div>
      </section>

      {/* Subscription Section */}
      <section className="mt-20 px-6 sm:px-10 md:px-20 text-center text-[#4B403F]">
        <h2 className="text-lg sm:text-2xl md:text-3xl font-medium">
          Join our design circle for exclusive drops, styling tips,
          <br className="hidden sm:block" /> and early access.
        </h2>

        <form
          onSubmit={handleSubscribe}
          className="flex flex-col sm:flex-row justify-center items-center mt-6 gap-3"
        >
          <input
            type="email"
            name="email"
            id="email"
            placeholder="Enter your email address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="px-4 py-2 border border-[#E2D9D6] rounded bg-[#F9F3F2] w-full sm:w-[300px] md:w-[400px] outline-none focus:ring-2 focus:ring-[#70615F]"
          />

          <button
            type="submit"
            disabled={status === "loading"}
            className={`${
              status === "loading"
                ? "bg-[#70615F] cursor-not-allowed opacity-70"
                : "bg-[#2D2726] hover:bg-[#4B403F]"
            } text-white px-5 py-2 rounded transition duration-300 w-full sm:w-auto text-sm sm:text-base transform hover:scale-105`}
          >
            {status === "loading" ? "Subscribing..." : "Subscribe Now"}
          </button>
        </form>

        {/* Feedback Messages */}
        <div className="mt-4">
          {status === "error-empty" && (
            <p className="text-red-500 text-sm">
              Please enter your email address.
            </p>
          )}
          {status === "error-invalid" && (
            <p className="text-red-500 text-sm">
              Please enter a valid email address.
            </p>
          )}
          {status === "success" && (
            <p className="text-green-600 text-sm font-medium">
              ✅ Thank you for subscribing!
            </p>
          )}
        </div>
      </section>

      {/* Footer */}
      <div className="mt-20">
        <Footer />
      </div>
    </div>
  );
};

export default About;
