import AnecdoteForm from "./components/AnecdoteForm";
import Notification from "./components/Notification";
import { useQuery, useQueryClient, useMutation } from "@tanstack/react-query";
import { getAll, updateAnecdote } from "./services/requests";
import anecdoteContext from "./components/anecdoteContext";
import { useContext } from "react";

const App = () => {
  const queryClient = useQueryClient();
  const { data, error, isError, isLoading } = useQuery({
    queryKey: ["anecdotes"],
    queryFn: getAll,
    retry: 1,
  });
  
  const anecdotes = data

  const [anecdote, dispatch] = useContext(anecdoteContext, 0)
 
  const handleVote = (anecdote) => {
    dispatch({ type: "VOTE", payload: anecdote });
    setTimeout(() => {
      dispatch({type: "VOTE", payload: null})
    }, 5000)
    updatedMutation.mutate({ ...anecdote, votes: anecdote.votes + 1 });
  };

  const updatedMutation = useMutation({
    mutationFn: updateAnecdote,
    onSuccess: () => {
      queryClient.invalidateQueries(["anecdotes"]);
    },
  });

  if (isLoading) {
    return <span>Loading data...</span>;
  }

  if (isError) {
    return <span>Error: {error.message}</span>;
  }

  return (
    <div>
      <h3>Anecdote app</h3>

      <Notification />
      <AnecdoteForm />

      {anecdotes.map((anecdote) => (
        <div key={anecdote.id}>
          <div>{anecdote.content}</div>
          <div>
            has {anecdote.votes}
            <button onClick={() => handleVote(anecdote)}>vote</button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default App;
