import { configureStore } from "@reduxjs/toolkit";
import filterReducer from "../reducers/filterReducer";
import anecdoteReducer from "../reducers/anecdoteReducer";
import notificationReducer from "../reducers/notificationReducer";

export const store = configureStore({
  reducer:{
    anecdotes: anecdoteReducer,
    filter: filterReducer,
    notification: notificationReducer
  }
});

store.subscribe(() => console.log(store.getState()))