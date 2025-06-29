import axios from "axios";

const baseUrl = "/anecdotes";

export const getAll = () => axios.get(baseUrl).then(({ data }) => data);

export const createAnecdote = (newAnecdote) =>
  axios
    .post(baseUrl, newAnecdote)
    .then(({ data }) => data)
    .catch((error) => {
      throw error;
    });

export const updateAnecdote = (updatedAnecdote) =>
  axios.put(baseUrl, updatedAnecdote).then(({ data }) => data);
