import AnecdoteForm from "./components/AnecdoteForm";
import Notification from "./components/Notification";
import { useAnecdote } from "./hooks/useAnecdote";
import { useAnecdoteContext } from "./hooks/useAnecdoteContext";
import { useUpdateAnecdote } from "./hooks/useUpdateAnecdote";

const App = () => {
  const { contextDispatch } = useAnecdoteContext();
  const { data, isLoading } = useAnecdote();
  const { mutate } = useUpdateAnecdote();

  const handleVote = (anecdote) => {
    contextDispatch({ type: "VOTE", payload: anecdote });
    mutate({ ...anecdote, votes: anecdote.votes + 1 });
  };

  if (isLoading) {
    return <span>Loading data...</span>;
  }

  return (
    <>
      <header>
        <h1>Anecdote app</h1>
        <Notification />
      </header>
      <main>
        <article>
          <AnecdoteForm />
        </article>
        <article>
          {data.anecdotes.map((anecdote) => (
            <ul key={anecdote.id}>
              <li>
                <p>{anecdote.content}</p>
                <span>has {anecdote.votes}</span>
                <button onClick={() => handleVote(anecdote)}>vote</button>
              </li>
            </ul>
          ))}
        </article>
      </main>
    </>
  );
};

export default App;
