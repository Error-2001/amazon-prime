import React from "react";
import { SIGN_UP_BANNER_1 } from "../../utils/contants";

const Banner = () => {
  return (
    <div>
      <img src={SIGN_UP_BANNER_1} />
      <div className="text-white absolute top-[20%] pl-12">
        <p className="text-[40px] font-thin">Welcome to Prime Video</p>
        <p className="text-xl font-thin mt-3">
          Watch the latest movies, TV shows, and award-winning Amazon Originals
        </p>
        <button className="bg-blue-500 text-white px-7 py-3 mt-5 font-bold">
          Sign in to join Prime
        </button>
      </div>
    </div>
  );
};

export default Banner;
