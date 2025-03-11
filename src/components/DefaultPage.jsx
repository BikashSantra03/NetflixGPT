import React from "react";
import { FaGreaterThan } from "react-icons/fa6";
import { backGroundIMG } from "../../utils/constatnt";

import Header from "./Header";
import { ImOpt } from "react-icons/im";
import { useNavigate } from "react-router";

const DefaultPage = () => {
  const navigate = useNavigate();
  return (
    <div className="text-white relative h-screen overflow-hidden">
      <Header showSignIn={true} />

      <div className="absolute z-9 flex flex-col wrap gap-6 w-140 h-70 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/7 text-center">
        <h1 className="text-5xl font-extrabold">
          Unlimited movies, TV shows and more
        </h1>
        <p className="text-2xl font-bold ">
          Starts at ₹149. Cancel at any time.
        </p>

        <p>
          Ready to watch? Enter your email to create or restart your membership.
        </p>

        <div className="flex gap-2">
          <input
            type="text"
            placeholder="Email Address"
            className="w-2/3 border-2 border-[#2BB871] rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-green-300"
          />

          <button
            onClick={() => navigate("/login")}
            className="flex justify-center items-center cursor-pointer gap-3 w-1/3 bg-[#E50914] font-bold py-3.5 px-7 rounded-md"
          >
            Get Started
            <span>
              <FaGreaterThan />
            </span>
          </button>
        </div>
      </div>
      <div className="inset-0 ">
        <img
          src={backGroundIMG}
          alt="Movies-Poster"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black opacity-70"></div>
      </div>
    </div>
  );
};

export default DefaultPage;
