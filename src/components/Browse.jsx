import React, { useEffect } from "react";

import Header from "../components/Header";
import { API_OPTIONS } from "../../utils/constatnt";

const Browse = () => {
  const getNowPlayingMovies = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/now_playing?page=1",
      API_OPTIONS
    );

    const jsonData = await data.json();
    console.log(jsonData);
  };

  useEffect(() => {
    getNowPlayingMovies();
  }, []);
  return <Header inBrowsePage={true} />;
};

export default Browse;
