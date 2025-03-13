import React from "react";
import { IMG_CDN } from "../../utils/constatnt";

const MovieCard = ({ posterPath }) => {
  return (
    <div className="w-40">
      <img src={IMG_CDN + posterPath} alt="Movie Poster" />
    </div>
  );
};

export default MovieCard;
