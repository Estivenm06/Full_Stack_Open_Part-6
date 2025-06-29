import { createSlice } from "@reduxjs/toolkit";
import { getAll, create, update } from "../services/requests";
import { setNotification } from "./notificationReducer";

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
    voteOf(state, action) {
      const { id } = action.payload;
      return state.map((anecdote) =>
        anecdote.id === id
          ? { ...anecdote, votes: anecdote.votes + 1 }
          : anecdote
      );
    },
    appendAnecdote(state, action) {
      state.push(action.payload);
    },
    setAnecdote(state, action) {
      return action.payload;
    },
  },
});

export const initializeAnecdotes = () => {
  return async (dispatch) => {
    const anecdotes = await getAll();
    dispatch(setAnecdote(anecdotes));
  };
};

export const createAnecdote = (anecdoteToCreate) => {
  return async (dispatch) => {
    await create(anecdoteToCreate)
      .then((response) => {
        dispatch(appendAnecdote(response));
        dispatch(
          setNotification(
            { message: `You created '${response.content}'`, type: "success" },
            5000
          )
        );
      })
      .catch((error) => {
        dispatch(
          setNotification(
            { message: error.response.data.error, type: "error" },
            5000
          )
        );
      });
  };
};

export const VoteOfAnecdote = (anecdoteToVote) => {
  return async (dispach) => {
    const anecdoteUpdated = await update(anecdoteToVote);
    dispach(voteOf(anecdoteUpdated));
  };
};

export const { voteOf, appendAnecdote, setAnecdote } = anecdoteSlice.actions;
export default anecdoteSlice.reducer;
