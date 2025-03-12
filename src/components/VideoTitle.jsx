import React from "react";
import { IoMdPlay } from "react-icons/io";
import { GoInfo } from "react-icons/go";

const VideoTitle = ({ title, overview }) => {
  return (
    <div className="pt-36 px-12">
      <h1 className="text-6xl font-bold">{title}</h1>
      <p className="py-6 text-lg w-1/4">{overview}</p>
      <div className="flex gap-4">
        <button className="p-4 px-10 text-xl bg-gray-500 text-black bg-opacity-50 rounded-lg flex justify-center items-center gap-3">
          <IoMdPlay className="text-2xl" />
          <span>Play</span>
        </button>
        <button className="p-4 px-10 text-xl bg-gray-500 text-white bg-opacity-50 rounded-lg flex justify-center items-center gap-3">
          <GoInfo />
          <span>More Info </span>
        </button>
      </div>
    </div>
  );
};

export default VideoTitle;
