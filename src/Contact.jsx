
import React, { useState } from "react";
import Navbar from './Navbar'
import Bedsheet from "./images/Bedsheet.png";
import Footer from "./Footer";
const Contact = () => {

      const [form, setForm] = useState({
        email: "",
        name: "",
        street: "",
        street2: "",
        city: "",
        state: "",
        zip: "",
        phone: "",
      });
      const [errors, setErrors] = useState({});
      const [status, setStatus] = useState("");
    
      const handleChange = (e) => {
        const { name, value } = e.target;
        setForm((s) => ({ ...s, [name]: value }));
        setErrors((s) => ({ ...s, [name]: "" }));
      };
    
      const validate = () => {
        const err = {};
        if (!form.email) err.email = "Email is required.";
        else if (!/^\S+@\S+\.\S+$/.test(form.email)) err.email = "Invalid email.";
        if (!form.name) err.name = "Name is required.";
        if (!form.street) err.street = "Street is required.";
        if (!form.city) err.city = "City is required.";
        if (!form.state) err.state = "State is required.";
        if (!form.zip) err.zip = "Zip code is required.";
        else if (!/^\d{4,6}$/.test(form.zip))
          err.zip = "Enter a valid zip (4–6 digits).";
        else if (!/^\+?[0-9\s\-()]{7,20}$/.test(form.phone))
          err.phone = "Enter a valid phone number.";
        return err;
      };
    
      const handleSubmit = (e) => {
        e.preventDefault();
        const err = validate();
        if (Object.keys(err).length) {
          setErrors(err);
          setStatus("");
          return;
        }
        // Replace with real submit (API call) as needed
        console.log("Submitting waitlist:", form);
        setStatus("Thanks — we'll be in touch!");
        setForm({
          email: "",
          name: "",
          street: "",
          street2: "",
          city: "",
          state: "",
          zip: "",
          phone: "",
        });
        setTimeout(() => setStatus(""), 4000);
      };
    
  return (
    <div>
      <div>
        <Navbar />
      </div>

      <div className="">
        <div className="flex flex-col-reverse lg:flex-row gap-20 ">
          <div className="relative">
            <img
              src={Bedsheet}
              alt="Bedsheet"
              className="w-full h-auto block rounded-lg bedsheet-anim"
            />
            <div className="absolute inset-0 flex flex-col mt-10 lg:mt-10 text-center bg-opacity-50">
              <h2 className="text-2xl sm:text-3xl font-semibold text-white">
                Coming Soon...
              </h2>
              <p className="mt-2 text-sm sm:text-base text-white/90">
                Leave your details to stay in touch.
              </p>
            </div>
          </div>

          <form
            onSubmit={handleSubmit}
            className="flex flex-col gap-4 w-full lg:w-1/2 max-w-md mt-6 lg:mt-0 px-4 py-6 sm:py-10"
          >
            <div>
              <h2 className="text-[#4B403F] font-semibold text-4xl">
                Contact Us
              </h2>
              <p className="text-[#70615F] text-[14px] font-semibold">
                We’d love to hear from you.
              </p>
            </div>
            <div>
              <label
                htmlFor="Name"
                className="text-[rgb(124,120,120)] block mb-1 text-sm"
              >
                Name
              </label>
              <input
                type="name"
                name="name"
                id="name"
                value={form.email}
                onChange={handleChange}
                placeholder="Enter name"
                className="px-4 py-2 rounded bg-[#F9F3F2] w-full outline-none"
                required
              />
              {errors.email && (
                <p className="text-red-500 text-xs mt-1">{errors.email}</p>
              )}
            </div>

            <div>
              <label
                htmlFor="email"
                className="text-[#7C7878] block mb-1 text-sm"
              >
                Email
              </label>
              <input
                type="text"
                name="email"
                id="email"
                value={form.name}
                onChange={handleChange}
                placeholder="Enter email address"
                className="px-4 py-2 rounded bg-[#F9F3F2] w-full outline-none"
                required
              />
              {errors.name && (
                <p className="text-red-500 text-xs mt-1">{errors.name}</p>
              )}
            </div>

            <div>
              <label htmlFor="" className="text-[#7C7878] block mb-1 text-sm">
                Project/Order reference
              </label>
              <input
                type="text"
                name="street"
                id="street"
                value={form.street}
                onChange={handleChange}
                placeholder="Enter reference"
                className="px-4 py-2 rounded bg-[#F9F3F2] w-full outline-none"
                required
              />
              {errors.street && (
                <p className="text-red-500 text-xs mt-1">{errors.street}</p>
              )}
            </div>

            <div>
              <label
                htmlFor="phone"
                className="text-[#7C7878] block mb-1 text-sm"
              >
                Message
              </label>
              <input
                type="tel"
                name="phone"
                id="phone"
                value={form.phone}
                onChange={handleChange}
                placeholder="Enter message"
                className="px-4 py-10 rounded bg-[#F9F3F2] w-full outline-none"
                inputMode="tel"
                required
              />
              {errors.phone && (
                <p className="text-red-500 text-xs mt-1">{errors.phone}</p>
              )}
            </div>

            <button
              type="submit"
              className="mt-4 px-4 py-2 bg-black text-white rounded hover:opacity-90 cursor-pointer"
            >
              Subscribe
            </button>

            {status && <p className="text-green-600 text-sm mt-2">{status}</p>}
          </form>
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

      <Footer />
    </div>
  );
}

export default Contact
