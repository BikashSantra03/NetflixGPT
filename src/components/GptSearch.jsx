import React from "react";
import GptSearchBar from "./GptSearchBar";
import GptMovieSuggestion from "./GptMovieSuggestion";
import { backGroundIMG } from "../../utils/constatnt";

const GptSearch = () => {
  return (
    <div>
      <div>
        <img src={backGroundIMG} alt="" className="absolute -z-10" />
      </div>
      <GptSearchBar />
      <GptMovieSuggestion />
    </div>
  );
};

export default GptSearch;
