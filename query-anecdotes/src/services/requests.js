import axios from "axios";

const baseUrl = "/api/anecdotes";

export const getAll = () => axios.get(baseUrl).then((res) => res.data);

export const createAnecdote = (newAnecdote) =>
  axios
    .post(baseUrl, newAnecdote)
    .then((res) => res.data)
    .catch((error) => {
      throw error;
    });

export const updateAnecdote = (updatedAnecdote) =>
  axios.put(baseUrl, updatedAnecdote).then((res) => res.data);
