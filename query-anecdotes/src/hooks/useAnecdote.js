import { useQuery } from "@tanstack/react-query";
import { getAll } from "../services/requests";

const useAnecdote = () => {
  const { data, error, isLoading } = useQuery({
    queryKey: ["anecdotes"],
    queryFn: getAll,
    retry: 1,
  });

  return { data, error, isLoading };
};

export { useAnecdote };
