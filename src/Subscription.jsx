import React from "react";
import Lifegasm from "./assets/Lifegasm.png";
import Bedsheet from "./assets/Bedsheet.png";

const Subscription = () => {
  return (
    <div>
      <div className="w-full h-[72px] bg-[#F9F3F280] text-[#F9F3F2] text-center p-2 text-xs sm:text-sm md:text-base">
        <img src={Lifegasm} alt="logo" className="mx-auto h-8 sm:h-10" />
      </div>

      <div className="container  px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col-reverse lg:flex-row gap-20 ">
          <div className="relative">
            <img
              src={Bedsheet}
              alt="Bedsheet"
              className="w-full h-auto block rounded"
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

          <div>
            <div>
              <h2 className="text-[#4B403F] font-semibold text-3xl text-center">
                Subscription successful!
              </h2>
              <p className="text-[#4B403F] text-center mt-4">
                You’ve subscribed to our mailing list. We’ll be in touch.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Subscription;
