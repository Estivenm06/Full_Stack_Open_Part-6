import { useQueryClient, useMutation } from "@tanstack/react-query";

import { updateAnecdote } from "../services/requests";

const useUpdateAnecdote = () => {
  const queryClient = useQueryClient();
  const { mutate } = useMutation({
    mutationFn: updateAnecdote,
    onSuccess: () => {
      queryClient.invalidateQueries(["anecdotes"]);
    },
  });
  return { mutate };
};

export { useUpdateAnecdote };
