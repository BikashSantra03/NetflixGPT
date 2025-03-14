import React, { useEffect } from "react";

import { API_OPTIONS } from "../../utils/constatnt";
import { useDispatch, useSelector } from "react-redux";
import { addNowPlayingMovies } from "../../utils/store/moviesSlice";

const useNowPlayingMovies = () => {
  const nowPlayingMovies = useSelector(
    (store) => store.Movies.nowPlayingMovies
  );
  const dispatch = useDispatch();

  const getNowPlayingMovies = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/now_playing?page=1",
      API_OPTIONS
    );

    const jsonData = await data.json();

    dispatch(addNowPlayingMovies(jsonData.results));
  };

  useEffect(() => {
    !nowPlayingMovies && getNowPlayingMovies();
  }, []);
};

export default useNowPlayingMovies;
