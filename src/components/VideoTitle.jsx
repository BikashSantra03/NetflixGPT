import React from "react";
import { IoMdPlay } from "react-icons/io";
import { GoInfo } from "react-icons/go";

const VideoTitle = ({ title, overview }) => {
  return (
    <div className="pt-20 md:pt-36 px-5 md:px-12 text-white absolute bg-gradient-to-r from-black w-full h-screen aspect-video">
      <h1 className="text-3xl md:text-5xl mb-1 md:mb-0 font-bold">{title}</h1>
      <p className=" hidden md:inline-block py-6 text-sm w-1/5">{overview}</p>
      <div className="flex gap-4">
        <button className="py-1 md:py-2 px-3 md:px-4 text-xl bg-white hover:opacity-70 text-black  rounded-lg flex justify-center items-center gap-1 md:gap-2 cursor-pointer">
          <IoMdPlay className="text-xl md:text-2xl" />
          <span>Play</span>
        </button>
        <button className="hidden md:inline-flex  p-2 px-6 text-xl bg-gray-500 text-white opacity-80 rounded-lg flex justify-center items-center gap-3 cursor-pointer">
          <GoInfo className="text-2xl" />
          <span>More Info </span>
        </button>
      </div>
    </div>
  );
};

export default VideoTitle;
