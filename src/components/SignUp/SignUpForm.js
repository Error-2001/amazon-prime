import { current } from "@reduxjs/toolkit";
import React, { useRef } from "react";

const SignUpForm = ({ setSignUpModalOpen }) => {
  const email = useRef();
  const password = useRef();
  const handleSignUp = () => {
    setSignUpModalOpen(false);
  };
  return (
    <div className="absolute z-10 h-auto top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%] bg-[#000000BF]">
      <div className="p-10">
        <p className="font-bold text-3xl text-left text-white mb-6">Sign up</p>
        <form>
          <input
            ref={email}
            placeholder="Email or phone number"
            className="w-[100%] bg-[#333333] h-12 p-5 text-white"
          />
          <input
            ref={password}
            placeholder="password"
            className="w-[100%] bg-[#333333] h-12 p-5 mt-3 text-white"
          />
          <button
            className="w-[100%] bg-blue-500 text-white mt-10 p-3"
            onClick={handleSignUp}
          >
            Sign Up
          </button>
        </form>
      </div>
    </div>
  );
};

export default SignUpForm;
