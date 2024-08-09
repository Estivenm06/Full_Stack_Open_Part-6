import { createSlice, current } from "@reduxjs/toolkit";

const anecdotesAtStart = [
  "If it hurts, do it more often",
  "Adding manpower to a late software project makes it later!",
  "The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.",
  "Any fool can write code that a computer can understand. Good programmers write code that humans can understand.",
  "Premature optimization is the root of all evil.",
  "Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.",
];

const getId = () => (100000 * Math.random()).toFixed(0);

const asObject = (anecdote) => {
  return {
    content: anecdote,
    id: getId(),
    votes: 0,
  };
};

const initialState = anecdotesAtStart.map(asObject);

const anecdoteSlice = createSlice({
  name: "anecdote",
  initialState,
  reducers: {
    createAnecdote(state, action) {
      const content = action.payload !== action.payload.payload
      ? action.payload.payload
      : action.payload
      state.push({
        content,
        id: getId(),
        votes: 0,
      });
    },
    voteOf(state, action) {
      const id = action.payload !== action.payload.payload
      ? action.payload.payload
      : action.payload
      const anecdotes = current(state)
      const anecdoteToVote = anecdotes.find((n) => n.id === id);
      console.log(anecdoteToVote);
      const changedVote = {
        ...anecdoteToVote,
        votes: Number(anecdoteToVote["votes"] + 1)
      }
      return anecdotes.map(anecdote => anecdote.id !== id ? anecdote : changedVote)
    },
  },
});

export const { createAnecdote, voteOf } = anecdoteSlice.actions
export default anecdoteSlice.reducer