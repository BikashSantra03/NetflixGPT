import { useEffect, useState } from "react";
import Header from "../components/Header";
import useNowPlayingMovies from "../hooks/useNowPlayingMovies";
import usePopularMovies from "../hooks/usePopularMovies";
import usePopularTvSeries from "../hooks/usePopularTvSeries";
import useTopRatedMovies from "../hooks/useTopRatedMovies";
import useTrandingMovies from "../hooks/useTrandingMovies";
import useUpcommingMovies from "../hooks/useUpcommingMovies";
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";
import { useSelector } from "react-redux";
import GptSearch from "./GptSearch";

const Browse = () => {
  const [mainContainerLoaded, setMainContainerLoaded] = useState(false);
  const isTrailerLoaded = useSelector((store) => store.Movies.trailerVideo);

  const showGptSearch = useSelector((store) => store.gpt.showGptSearch);

  useEffect(() => {
    const simulateLoading = () => {
      isTrailerLoaded
        ? setMainContainerLoaded(true)
        : setMainContainerLoaded(false);
    };

    simulateLoading();
  }, [isTrailerLoaded]);

  useNowPlayingMovies();
  usePopularMovies();
  useTopRatedMovies();
  useUpcommingMovies();
  useTrandingMovies();
  usePopularTvSeries();
  return (
    <div>
      <Header inBrowsePage={true} />

      {showGptSearch ? (
        <GptSearch />
      ) : (
        <>
          <MainContainer />
          {mainContainerLoaded && <SecondaryContainer />}
        </>
      )}
    </div>
  );
};

export default Browse;
