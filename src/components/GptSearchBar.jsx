import React, { useRef } from "react";
import { language } from "../../utils/languageConstants";
import { useDispatch, useSelector } from "react-redux";
import { model } from "../../utils/geminiAPI";

import Error from "./Error";
import { addGptMovieResult, setIsLoading } from "../../utils/store/gptSlice";
import { API_OPTIONS } from "../../utils/constatnt";

const GptSearchBar = () => {
  const searchedText = useRef(null);

  const langSelector = useSelector((store) => store.langConfig.lang);

  const dispatch = useDispatch();

  //Search movie from TMDB
  const searchMovieIMDB = async (movie) => {
    const data = await fetch(
      `https://api.themoviedb.org/3/search/movie?query=${movie}&include_adult=true&language=en-US&page=1`,
      API_OPTIONS
    );
    const jsonData = await data.json();

    return jsonData.results;
  };

  // Get Gemini Response on the basis of input data
  const handleGptSearch = async () => {
    dispatch(setIsLoading(true));
    try {
      const prompt = `Act as a movie recomendation system and suggest some movies. Only give me 5 movies for the query: ${searchedText.current.value} in comma seperated format like Example result given ahead. Example result : 3 idiots, Dangal, Interstellar, Mohenjo Daro, Koi Mil Gaya . If there are not enough movies for the query then return as many as are found. Don't return any other words/suggestions`;

      const searchResult = await model.generateContent(prompt);

      if (!searchResult) {
        dispatch(setIsLoading(false));
        return <Error />;
      }

      const gptMovies = searchResult.response
        .text()
        .split(",")
        .map((movie) => movie.trim());

      const promiseResults = gptMovies.map((movie) => searchMovieIMDB(movie));

      const tmdbResults = await Promise.all(promiseResults);

      dispatch(
        addGptMovieResult({ gptResults: gptMovies, tmdbResults: tmdbResults })
      );
    } catch (error) {
      console.error("Error during GPT search:", error);

      dispatch(setIsLoading(false)); // Set isLoading to false on error

      return <Error />;
    } finally {
      dispatch(setIsLoading(false)); // Set isLoading to false after completion (success or error)
    }
  };

  return (
    <div className="flex justify-center pt-[40%] md:pt-[10%]">
      <form
        action=""
        onSubmit={(e) => e.preventDefault()}
        className="w-full md:w-1/2 grid grid-cols-12  bg-black"
      >
        <input
          type="text"
          ref={searchedText}
          placeholder={language[langSelector].gptSearPlaceHolder}
          className="p-4 m-4 col-span-9 bg-white"
        />
        <button
          onClick={handleGptSearch}
          className="my-4 md:m-4 py-0 md:py-3 px-0 md:px-4 col-span-3 bg-red-700 text-white rounded-lg cursor-pointer font-bold"
        >
          {language[langSelector].search}
        </button>
      </form>
    </div>
  );
};

export default GptSearchBar;
