import React, { useEffect } from "react";

import { API_OPTIONS } from "../../utils/constatnt";
import { useDispatch } from "react-redux";
import { addNowPlayingMovies } from "../../utils/store/moviesSlice";

const useNowPlayingMovies = () => {
  const dispatch = useDispatch();

  const getNowPlayingMovies = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/now_playing?page=1",
      API_OPTIONS
    );

    const jsonData = await data.json();

    dispatch(addNowPlayingMovies(jsonData.results));

    console.log("PlayingMovies Lists: ", jsonData);
  };

  useEffect(() => {
    getNowPlayingMovies();
  }, []);
};

export default useNowPlayingMovies;
