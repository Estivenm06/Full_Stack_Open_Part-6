import { configureStore } from "@reduxjs/toolkit";
import filterReducer from "../reducers/filterReducer";
import anecdoteReducer from "../reducers/anecdoteReducer";
import notificationReducer from "../reducers/notificationReducer";
import AnecdoteService from '../services/anecdotes'
import { setAnecdote } from '../reducers/anecdoteReducer'

export const store = configureStore({
  reducer:{
    anecdotes: anecdoteReducer,
    filter: filterReducer,
    notification: notificationReducer
  }
});

AnecdoteService.getAll().then(anecdotes => {
  store.dispatch(setAnecdote(anecdotes))
})

store.subscribe(() => console.log(store.getState()))