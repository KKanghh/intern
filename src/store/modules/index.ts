import {
  AnyAction,
  combineReducers,
  PayloadAction,
  Reducer,
} from "@reduxjs/toolkit";
import { HYDRATE } from "next-redux-wrapper";
import noticeSlice, { NoticeState } from "./notice";

export interface RootState {
  notice: NoticeState;
}

const rootReducer: Reducer<RootState, AnyAction> = (state, action) => {
  if (action.type === HYDRATE) {
    return {
      ...state,
      ...action.payload,
    };
  }

  return combineReducers({ notice: noticeSlice.reducer })(state, action);
};

export default rootReducer;
