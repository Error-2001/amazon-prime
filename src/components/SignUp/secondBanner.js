import React from "react";
import { SIGN_UP_BANNER_2 } from "../../utils/contants";

const SecondBanner = () => {
  return (
    <div className="relative">
      <img src={SIGN_UP_BANNER_2} />
      <div className="text-white absolute top-[20%] pl-12">
        <p className="text-[40px] font-thin">Movie rentals on Prime Video</p>
        <p className="text-xl font-thin mt-3">
          Early Access to new movies, before digital subscription
        </p>
        <button className="bg-blue-500 text-white px-7 py-3 mt-5 font-bold">
          Rent Now
        </button>
      </div>
    </div>
  );
};

export default SecondBanner;
