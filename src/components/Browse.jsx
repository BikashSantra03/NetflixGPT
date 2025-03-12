import Header from "../components/Header";
import useNowPlayingMovies from "../hooks/useNowPlayingMovies";

const Browse = () => {
  useNowPlayingMovies();
  return <Header inBrowsePage={true} />;
};

export default Browse;
