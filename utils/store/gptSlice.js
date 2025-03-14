import { createSlice } from "@reduxjs/toolkit";

const gptSlice = createSlice({
  name: "gpt",
  initialState: {
    showGptSearch: false,
    gptMovieNames: null,
    tmdbMovieResults: null,
    isLoading: false,
  },
  reducers: {
    toggleGptSearchView: (state) => {
      state.showGptSearch = !state.showGptSearch;
    },
    addGptMovieResult: (state, actions) => {
      const { gptResults, tmdbResults } = actions.payload;
      state.gptMovieNames = gptResults;
      state.tmdbMovieResults = tmdbResults;
    },
    setIsLoading: (state, action) => {
      state.isLoading = action.payload;
    },
  },
});

export const { toggleGptSearchView, addGptMovieResult, setIsLoading } =
  gptSlice.actions;

export default gptSlice.reducer;
