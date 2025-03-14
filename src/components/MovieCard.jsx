import React from "react";
import { IMG_CDN } from "../../utils/constatnt";

const MovieCard = ({ posterPath }) => {
  if (!posterPath) return;
  return (
    <div className="w-30 md:w-40">
      <img src={IMG_CDN + posterPath} alt="Movie Poster" />
    </div>
  );
};

export default MovieCard;
