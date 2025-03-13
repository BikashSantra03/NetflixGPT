import React from "react";
import MovieList from "./MovieList";
import { useSelector } from "react-redux";

const SecondaryContainer = () => {
  const movies = useSelector((store) => store.Movies);

  return (
    <div className="bg-black">
      <div className="-mt-30 relative z-20">
        <MovieList title={"Now Playing"} movies={movies.nowPlayingMovies} />
        <MovieList title={"Trendings"} movies={movies.trandingMovies} />
        <MovieList title={"Top Rated"} movies={movies.topRatedMovies} />
        <MovieList title={"Upcommings"} movies={movies.upCommingMovies} />
        <MovieList title={"Popular"} movies={movies.popularMovies} />
        <MovieList title={"Ppular TV Series"} movies={movies.popularTvSeries} />
      </div>
    </div>
  );
};

export default SecondaryContainer;
