import { createSlice } from "@reduxjs/toolkit";

export interface ScrollState {
  scroll: number;
}

const initialState: ScrollState = { scroll: 0 };

const scrollSlice = createSlice({
  name: "scroll",
  initialState,
  reducers: {
    setScroll: (state, action) => {
      state.scroll = action.payload;
    },
    resetScroll: (state) => {
      state.scroll = 0;
    },
  },
});

export default scrollSlice;

export const scrollActions = scrollSlice.actions;
