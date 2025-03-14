import React, { useEffect } from "react";

import { API_OPTIONS } from "../../utils/constatnt";
import { useDispatch, useSelector } from "react-redux";
import { addUpCommingMovies } from "../../utils/store/moviesSlice";

const useUpcommingMovies = () => {
  const upCommingMovies = useSelector((store) => store.Movies.upCommingMovies);
  const dispatch = useDispatch();

  const getUpcommingMovies = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=1",
      API_OPTIONS
    );

    const jsonData = await data.json();

    dispatch(addUpCommingMovies(jsonData.results));
  };

  useEffect(() => {
    !upCommingMovies && getUpcommingMovies();
  }, []);
};

export default useUpcommingMovies;
