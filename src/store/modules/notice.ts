import { createSlice } from "@reduxjs/toolkit";
import { Notice } from "~/types/Notice";

export interface NoticeState {
  notices: Notice[];
}

const initialState: { notices: Notice[] } = { notices: [] };

const noticeSlice = createSlice({
  name: "notice",
  initialState,
  reducers: {
    set: (state, action) => {
      state.notices = action.payload;
    },
    concat: (state, action) => {
      state.notices.push(...action.payload);
    },
  },
});

export default noticeSlice;

export const noticeActions = noticeSlice.actions;
