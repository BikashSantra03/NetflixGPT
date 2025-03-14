import React from "react";
import { useSelector } from "react-redux";
import MovieList from "./MovieList";
import Spinner from "./Spinner";

const GptMovieSuggestion = () => {
  const { gptMovieNames, tmdbMovieResults, isLoading } = useSelector(
    (store) => store.gpt
  );
  if (isLoading) return <Spinner />;

  if (!gptMovieNames) return null;

  if (!gptMovieNames) return <Spinner />;

  return (
    <div className="p-4 m-4 bg-black opacity-85">
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
