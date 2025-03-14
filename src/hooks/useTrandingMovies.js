import React, { useEffect } from "react";

import { API_OPTIONS } from "../../utils/constatnt";
import { useDispatch, useSelector } from "react-redux";
import { addTrandingMovies } from "../../utils/store/moviesSlice";

const useTrandingMovies = () => {
  const trandingMovies = useSelector((store) => store.Movies.trandingMovies);
  const dispatch = useDispatch();

  const getTrandingMovies = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/trending/all/day?language=en-US",
      API_OPTIONS
    );

    const jsonData = await data.json();
    console.log(jsonData);

    dispatch(addTrandingMovies(jsonData.results));
  };

  useEffect(() => {
    !trandingMovies && getTrandingMovies();
  }, []);
};

export default useTrandingMovies;
