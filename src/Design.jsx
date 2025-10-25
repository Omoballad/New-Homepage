// ...existing code...
import React from "react";
import Navbar from "./Navbar";
import { FiCircle } from "react-icons/fi";

const Design = () => {
  return (
    <div className="min-h-screen bg-white">
      <header>
        <Navbar />
      </header>

      <main className="max-w-5xl mx-auto px-4">
        <section className="text-center mt-10">
          <h1 className="text-[#4B403F] text-3xl md:text-4xl font-bold">
            Design That Stays With You
          </h1>
          <p className="text-[#70615F] text-base md:text-lg mt-4 mx-auto max-w-2xl">
            Get curated design inspiration, product launches,<br/> seasonal styling
            tips, and members-only<br/> previews delivered to your inbox.
          </p>

          <form
            className="mt-6 flex flex-col sm:flex-col items-center justify-center gap-3"
            onSubmit={(e) => e.preventDefault()}
            aria-label="Newsletter subscription form"
          >
            <label htmlFor="top-email" className="sr-only">
              Email address
            </label>
            <input
              id="top-email"
              name="email"
              type="email"
              placeholder="email address"
              required
              className="w-full sm:w-[320px] md:w-[420px] px-4 py-2 rounded bg-[#F9F3F2] outline-none"
            />
            <button
              type="submit"
              className="bg-[#2D2726] text-white px-5 py-2 rounded hover:bg-[#364D80] transition transform hover:scale-105 text-sm sm:text-base w-full sm:w-auto cursor-pointer"
            >
              Subscribe to the Journal
            </button>
          </form>
        </section>

        <section className="mx-2 md:mx-10 mt-10 mb-10 grid gap-6 md:grid-cols-2 items-start">
          {/* Left: subscription tiers */}
          <div>
            <h2 className="ml-2 text-lg md:text-xl text-[#4B403F] font-semibold mb-2">
              Subscription tiers (optional)
            </h2>

            <div className="space-y-4">
              <article className="flex items-start gap-4 border border-[#E0C1BD] bg-[#EDE6E5] rounded-3xl p-4">
                <div className="flex-shrink-0">
                  <div className="w-8 h-8 rounded-full flex items-center justify-center bg-white text-[#70615F]">
                    <FiCircle />
                  </div>
                </div>
                <div>
                  <h3 className="text-[#4B403F] text-lg font-semibold">
                    Free Newsletter
                  </h3>
                  <p className="text-[#4B403F] text-sm mt-1">
                    Weekly design notes.
                  </p>
                </div>
              </article>

              <article className="flex items-start gap-4 border border-[#E0C1BD] bg-[#EDE6E5] rounded-3xl p-4">
                <div className="flex-shrink-0">
                  <div className="w-8 h-8 rounded-full flex items-center justify-center bg-white text-[#70615F]">
                    <FiCircle />
                  </div>
                </div>
                <div>
                  <h3 className="text-[#4B403F] text-lg font-semibold">
                    Member Circle
                  </h3>
                  <p className="text-[#4B403F] text-sm mt-1">
                    Early access · free consultations · product discounts.
                  </p>
                </div>
              </article>
            </div>
          </div>

        
          <div className="bg-white p-4 rounded-lg">
            <form
              className="flex flex-col gap-3"
              onSubmit={(e) => e.preventDefault()}
              aria-label="Membership signup form"
            >
              <div>
                <label
                  htmlFor="name"
                  className="text-[#7C7878] block mb-1 text-sm"
                >
                  Name
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  placeholder="Enter name"
                  className="w-full md:w-[420px] px-4 py-2 rounded bg-[#F9F3F2] outline-none"
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="text-[#7C7878] block mb-1 text-sm"
                >
                  Email
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="Enter email address"
                  required
                  className="w-full md:w-[420px] px-4 py-2 rounded bg-[#F9F3F2] outline-none"
                />
              </div>

              <div className="flex items-center gap-2 mt-1">
                <input
                  id="optin"
                  name="optin"
                  type="checkbox"
                  className="w-4 h-4 text-[#2D2726] bg-white border rounded"
                />
                <label htmlFor="optin" className="text-[#4B403F] text-sm">
                  Opt in for membership
                </label>
              </div>

              <button
                type="submit"
                className="mt-3 bg-[#2D2726] text-white px-4 py-2 rounded hover:bg-[#364D80] transition transform hover:scale-105 w-full sm:w-auto cursor-pointer"
              >
                Submit
              </button>
            </form>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Design;

