import React from "react";
import { useSelector } from "react-redux";
import VideoTitle from "./VideoTitle";
import VideoBackground from "./VideoBackground";

const MainContainer = () => {
  const movies = useSelector((store) => store.Movies?.nowPlayingMovies);

  if (!movies) return;

  const mainMovie = movies[0];
  console.log("mainMovie: ", mainMovie);

  const { id, original_title, overview } = mainMovie;

  return (
    <div className="pt-[35%] md:pt-0 bg-black"> 
      <VideoTitle title={original_title} overview={overview} />
      <VideoBackground movieId={id} />
    </div>
  );
};

export default MainContainer;
