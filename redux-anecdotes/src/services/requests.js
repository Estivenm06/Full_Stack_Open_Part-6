import axios from "axios";

const baseUrl = "/anecdotes";

export const getAll = () => axios.get(baseUrl).then(({ data }) => data);

export const create = (newAnecdote) =>
  axios
    .post(baseUrl, {content: newAnecdote})
    .then(({ data }) => data)
    .catch((error) => {
      throw error;
    });

export const update = (updatedAnecdote) =>
  axios.put(baseUrl, updatedAnecdote).then(({ data }) => data);
