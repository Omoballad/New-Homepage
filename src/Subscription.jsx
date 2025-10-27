import React from "react";
import Lifegasm from "./images/Lifegasm.png";
import Bedsheet from "./images/Bedsheet.png";

const Subscription = () => {
  return (
    <div>
      <div className="w-full h-[72px] bg-[#F9F3F280] text-[#F9F3F2] text-center p-2 text-xs sm:text-sm md:text-base">
        <img src={Lifegasm} alt="logo" className="ml-5" />
      </div>

      <div className="">
        <div className="flex flex-col-reverse lg:flex-row gap-20 ">
          <div className="relative">
        
            <img
              src={Bedsheet}
              alt="Bedsheet"
              className="w-full h-auto block rounded-lg bedsheet-anim"
            />
            <div className="absolute inset-0 flex flex-col mt-5 lg:mt-5 text-center bg-opacity-50">
              <h2 className="text-2xl sm:text-3xl font-semibold text-white">
                Coming Soon...
              </h2>
              <p className="mt-2 text-sm sm:text-base text-white/90">
                Leave your details to stay in touch.
              </p>
            </div>
          </div>

          <div>
            <div className="mt-80">
              <h2 className="text-[#4B403F] font-semibold text-3xl text-center">
                Subscription successful!
              </h2>
              <p className="text-[#4B403F] text-[14px] text-center">
                You’ve subscribed to our mailing list. We’ll be in touch.
              </p>
            </div>
          </div>
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

export default Subscription;
