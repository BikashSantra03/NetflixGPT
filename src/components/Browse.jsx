import Header from "../components/Header";
import useNowPlayingMovies from "../hooks/useNowPlayingMovies";
import usePopularMovies from "../hooks/usePopularMovies";
import usePopularTvSeries from "../hooks/usePopularTvSeries";
import useTopRatedMovies from "../hooks/useTopRatedMovies";
import useTrandingMovies from "../hooks/useTrandingMovies";
import useUpcommingMovies from "../hooks/useUpcommingMovies";
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";

const Browse = () => {
  useNowPlayingMovies();
  usePopularMovies();
  useTopRatedMovies();
  useUpcommingMovies();
  useTrandingMovies();
  usePopularTvSeries();
  return (
    <div>
      <Header inBrowsePage={true} />
      <MainContainer />
      <SecondaryContainer />
    </div>
  );
};

export default Browse;
