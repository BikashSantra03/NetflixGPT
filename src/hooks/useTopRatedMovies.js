import React, { useEffect } from "react";

import { API_OPTIONS } from "../../utils/constatnt";
import { useDispatch } from "react-redux";
import { addTopRatedMovies } from "../../utils/store/moviesSlice";

const useTopRatedMovies = () => {
  const dispatch = useDispatch();

  const getTopRatedMovies = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1",
      API_OPTIONS
    );

    const jsonData = await data.json();

    dispatch(addTopRatedMovies(jsonData.results));

    console.log("Popular Movies List: ", jsonData);
  };

  useEffect(() => {
    getTopRatedMovies();
  }, []);
};

export default useTopRatedMovies;
