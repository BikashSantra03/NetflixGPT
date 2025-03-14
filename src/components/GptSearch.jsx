import React from "react";
import GptSearchBar from "./GptSearchBar";
import GptMovieSuggestion from "./GptMovieSuggestion";
import { backGroundIMG } from "../../utils/constatnt";

const GptSearch = () => {
  return (
    <div>
      <div>
        <img src={backGroundIMG} alt="" className="fixed -z-10 object-cover h-screen md:w-screen" />
        <div className="absolute inset-0 bg-black opacity-40 -z-5"></div>
      </div>
      <GptSearchBar />
      <GptMovieSuggestion />
    </div>
  );
};

export default GptSearch;
