import { configureStore } from "@reduxjs/toolkit";
import { createWrapper } from "next-redux-wrapper";
import rootReducer from "./modules";

export const store = configureStore({
  reducer: rootReducer,
});

export const wrapper = createWrapper(() => store, {
  debug: process.env.NODE_ENV === "development",
});

export type RootStore = typeof store;
