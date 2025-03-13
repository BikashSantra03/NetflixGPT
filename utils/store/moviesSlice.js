import { createSlice } from "@reduxjs/toolkit";

const moviesSlice = createSlice({
  name: "Movies",
  initialState: {
    nowPlayingMovies: null,
    popularMovies: null,
    topRatedMovies: null,
    upCommingMovies: null,
    trandingMovies: null,
    popularTvSeries: null,
    trailerVideo: null,
  },
  reducers: {
    addNowPlayingMovies: (state, action) => {
      state.nowPlayingMovies = action.payload;
    },
    addPopularMovies: (state, action) => {
      state.popularMovies = action.payload;
    },
    addTopRatedMovies: (state, action) => {
      state.topRatedMovies = action.payload;
    },
    addUpCommingMovies: (state, action) => {
      state.upCommingMovies = action.payload;
    },
    addTrandingMovies: (state, action) => {
      state.trandingMovies = action.payload;
    },
    addPopularTvSeries: (state, action) => {
      state.popularTvSeries = action.payload;
    },
    addTrailerVideo: (state, action) => {
      state.trailerVideo = action.payload;
    },
  },
});

export const {
  addNowPlayingMovies,
  addTrailerVideo,
  addPopularMovies,
  addTopRatedMovies,
  addUpCommingMovies,
  addTrandingMovies,
  addPopularTvSeries,
} = moviesSlice.actions;
export default moviesSlice.reducer;
