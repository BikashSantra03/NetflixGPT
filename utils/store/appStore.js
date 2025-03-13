import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./userSlice";
import moviesReducer from "./moviesSlice";
import gptReducer from "./gptSlice";
import langConfigReducer from "./langConfigSlice"
const appStore = configureStore({
  reducer: {
    user: userReducer,
    Movies: moviesReducer,
    gpt: gptReducer,
    langConfig: langConfigReducer,
  },
});

export default appStore;
