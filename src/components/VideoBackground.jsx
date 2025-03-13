import { useSelector } from "react-redux";
import { useMovieTrailer } from "../hooks/useMovieTrailer";

const VideoBackground = ({ movieId }) => {
  useMovieTrailer(movieId);

  const trailerVideo = useSelector((store) => store.Movies.trailerVideo); //Subscribing to store

  return (
    <div className="w-full overflow-hidden">
      <iframe
        className="w-full h-screen aspect-video"
        src={`https://www.youtube-nocookie.com/embed/${trailerVideo?.key}?autoplay=1&mute=1&loop=1&controls=0&showinfo=0&rel=0&iv_load_policy=3&fs=1&modestbranding=1`}
        title="YouTube video player"
        allowFullScreen
      ></iframe>
    </div>
  );
};

export default VideoBackground;
