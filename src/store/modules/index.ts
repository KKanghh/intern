import {
  AnyAction,
  combineReducers,
  PayloadAction,
  Reducer,
} from "@reduxjs/toolkit";
import { HYDRATE } from "next-redux-wrapper";
import scrollSlice, { ScrollState } from "./scroll";

export interface RootState {
  scroll: ScrollState;
}

const rootReducer: Reducer<RootState, AnyAction> = (state, action) => {
  if (action.type === HYDRATE) {
    return {
      ...state,
      ...action.payload,
    };
  }

  return combineReducers({ scroll: scrollSlice.reducer })(state, action);
};

export default rootReducer;
