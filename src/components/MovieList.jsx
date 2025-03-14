import React from "react";
import MovieCard from "./MovieCard";

const MovieList = ({ title, movies }) => {
  return (
    <div className="px-6 text-white font-medium">
      <h1 className="text-3xl py-4">{title}</h1>

      <div className="flex overflow-x-scroll ">
        <div className="flex gap-4">
          {movies?.map((movie) => (
            <MovieCard posterPath={movie.poster_path} key={movie?.id} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default MovieList;
