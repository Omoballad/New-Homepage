// ...existing code...
import React, { useState } from "react";
import Navbar from "./Navbar";
import Bedsheet from "./assets/Bedsheet.png";
import Lifegasm from "./assets/Lifegasm.png";

const Waitlist = () => {
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
      <div className="w-full h-[72px] bg-[#F9F3F280] text-[#F9F3F2] text-center p-2 text-xs sm:text-sm md:text-base">
        <img src={Lifegasm} alt="logo" className="mx-auto h-8 sm:h-10" />
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
              <label
                htmlFor="email"
                className="text-[#7C7878] block mb-1 text-sm"
              >
                Email address
              </label>
              <input
                type="email"
                name="email"
                id="email"
                value={form.email}
                onChange={handleChange}
                placeholder="email address"
                className="px-4 py-2 rounded bg-[#F9F3F2] w-full outline-none"
                required
              />
              {errors.email && (
                <p className="text-red-500 text-xs mt-1">{errors.email}</p>
              )}
            </div>

            <div>
              <label
                htmlFor="name"
                className="text-[#7C7878] block mb-1 text-sm"
              >
                Name
              </label>
              <input
                type="text"
                name="name"
                id="name"
                value={form.name}
                onChange={handleChange}
                placeholder="Enter name"
                className="px-4 py-2 rounded bg-[#F9F3F2] w-full outline-none"
                required
              />
              {errors.name && (
                <p className="text-red-500 text-xs mt-1">{errors.name}</p>
              )}
            </div>

            <div>
              <label
                htmlFor="street"
                className="text-[#7C7878] block mb-1 text-sm"
              >
                Address
              </label>
              <input
                type="text"
                name="street"
                id="street"
                value={form.street}
                onChange={handleChange}
                placeholder="Street"
                className="px-4 py-2 rounded bg-[#F9F3F2] w-full outline-none"
                required
              />
              {errors.street && (
                <p className="text-red-500 text-xs mt-1">{errors.street}</p>
              )}
              <input
                type="text"
                name="street2"
                id="street2"
                value={form.street2}
                onChange={handleChange}
                placeholder="Address line 2"
                className="px-4 py-2 mt-3 rounded bg-[#F9F3F2] w-full outline-none"
              />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              <div>
                <input
                  type="text"
                  name="city"
                  id="city"
                  value={form.city}
                  onChange={handleChange}
                  placeholder="City"
                  className="px-4 py-2 rounded bg-[#F9F3F2] w-full outline-none"
                  required
                />
                {errors.city && (
                  <p className="text-red-500 text-xs mt-1">{errors.city}</p>
                )}
              </div>

              <div>
                <input
                  type="text"
                  name="state"
                  id="state"
                  value={form.state}
                  onChange={handleChange}
                  placeholder="State"
                  className="px-4 py-2 rounded bg-[#F9F3F2] w-full outline-none"
                  required
                />
                {errors.state && (
                  <p className="text-red-500 text-xs mt-1">{errors.state}</p>
                )}
              </div>

              <div>
                <input
                  type="text"
                  name="zip"
                  id="zip"
                  value={form.zip}
                  onChange={handleChange}
                  placeholder="Zip code"
                  className="px-4 py-2 rounded bg-[#F9F3F2] w-full outline-none"
                  inputMode="numeric"
                  required
                />
                {errors.zip && (
                  <p className="text-red-500 text-xs mt-1">{errors.zip}</p>
                )}
              </div>
            </div>

            <div>
              <label
                htmlFor="phone"
                className="text-[#7C7878] block mb-1 text-sm"
              >
                Phone number
              </label>
              <input
                type="tel"
                name="phone"
                id="phone"
                value={form.phone}
                onChange={handleChange}
                placeholder="Enter phone number"
                className="px-4 py-2 rounded bg-[#F9F3F2] w-full outline-none"
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

      <style>{`
        .bedsheet-anim {
          transform-origin: center;
          animation: bedsheet-bob 3.5s ease-in-out infinite;
          will-change: transform;
        }

        @keyframes bedsheet-bob {
          // 0%   { transform: translateY(0) rotate(-1deg); }
          50%  { transform: translateY(-8px) rotate(1deg); }
        
        }
      `}</style>
    </div>
  );
};

export default Waitlist;
