import React, { useEffect } from "react";

import { API_OPTIONS } from "../../utils/constatnt";
import { useDispatch } from "react-redux";
import { addPopularTvSeries } from "../../utils/store/moviesSlice";

const usePopularTvSeries = () => {
  const dispatch = useDispatch();

  const getPopularTvSeries = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/tv/popular?language=en-US&page=1",
      API_OPTIONS
    );

    const jsonData = await data.json();

    dispatch(addPopularTvSeries(jsonData.results));

    console.log("Popular Movies List: ", jsonData);
  };

  useEffect(() => {
    getPopularTvSeries();
  }, []);
};

export default usePopularTvSeries;
