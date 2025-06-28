import { useMutation, useQueryClient } from "@tanstack/react-query";

import { createAnecdote } from "../services/requests";
import { useAnecdoteContext } from "./useAnecdoteContext";

const useCreateAnecdote = () => {
  const { contextDispatch } = useAnecdoteContext();
  const queryClient = useQueryClient();
  const { mutate } = useMutation({
    mutationFn: createAnecdote,
    onSuccess: (anecdote) => {
      queryClient.invalidateQueries(["anecdotes"]);
      contextDispatch({ type: "CREATE_NEW", payload: anecdote.content });
    },
    onError: (error) => {
      contextDispatch({ type: "ERROR", payload: error.response.data.error });
    },
  });
  return { mutate };
};

export { useCreateAnecdote };
