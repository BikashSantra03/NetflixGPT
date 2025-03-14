import React from "react";
import { useSelector } from "react-redux";
import MovieList from "./MovieList";
import Spinner from "./Spinner";

const GptMovieSuggestion = () => {
  const { gptMovieNames, tmdbMovieResults } = useSelector((store) => store.gpt);

  if (!gptMovieNames) return <Spinner />;

  return (
    <div className="p-4 m-4 bg-black opacity-90">
      {gptMovieNames?.map((movieName, index) => (
        <MovieList
          title={movieName}
          movies={tmdbMovieResults[index]}
          key={movieName}
        />
      ))}
    </div>
  );
};

export default GptMovieSuggestion;
