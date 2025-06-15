import { useMutation, useQueryClient } from "@tanstack/react-query";
import { createAnecdote } from "../services/requests";
import { useContext } from "react";
import anecdoteContext from "./anecdoteContext";

const AnecdoteForm = () => {
  const [anecdotes, dispatch] = useContext(anecdoteContext, null);
  const queryClient = useQueryClient();

  const { mutate } = useMutation({
    mutationFn: createAnecdote,
    onSuccess: () => {
      queryClient.invalidateQueries(["anecdotes"]);
    },
    onError: (error) => {
      dispatch({ type: "ERROR", payload: error.response.data.error });
      setTimeout(() => {
        dispatch({ type: "ERROR", payload: null });
      }, 5000);
      return error.response.data.error;
    },
  });

  const onCreate = (event) => {
    event.preventDefault();
    const content = event.target.anecdote.value;
    event.target.anecdote.value = "";
    dispatch({ type: "CREATE_NEW", payload: content });
    setTimeout(() => {
      dispatch({ type: "CREATE_NEW", payload: null });
    }, 5000);
    mutate({ content, votes: 0 });
  };

  return (
    <div>
      <h3>create new</h3>
      <form onSubmit={onCreate}>
        <input name="anecdote" />
        <button type="submit">create</button>
      </form>
    </div>
  );
};

export default AnecdoteForm;
