import { createSlice } from "@reduxjs/toolkit";

const langConfigSlice = createSlice({
  name: "langConfig",
  initialState: {
    lang: "english",
  },

  reducers: {
    changeLanguege: (state, action) => {
      state.lang = action.payload;
    },
  },
});

export const { changeLanguege } = langConfigSlice.actions;
export default langConfigSlice.reducer;
