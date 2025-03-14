import React, { useEffect } from "react";
import { API_OPTIONS } from "../../utils/constatnt";
import { useDispatch, useSelector } from "react-redux";
import { addTrailerVideo } from "../../utils/store/moviesSlice";

export const useMovieTrailer = (movieId) => {
  const trailerVideo = useSelector((store) => store.Movies.trailerVideo);
  const dispatch = useDispatch();

  const getMovieVideos = async () => {
    const data = await fetch(
      `https://api.themoviedb.org/3/movie/${movieId}/videos?language=en-US`,
      API_OPTIONS
    );
    const jsonData = await data.json();

    const trailers = jsonData.results.filter(
      (video) => video.type === "Trailer"
    );
    const trailer = trailers.length ? trailers[0] : jsonData.results[0];
    dispatch(addTrailerVideo(trailer));
  };

  useEffect(() => {
    !trailerVideo && getMovieVideos();
  }, []);
};
