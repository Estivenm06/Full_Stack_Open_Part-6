import { useAnecdoteContext } from "../hooks/useAnecdoteContext";
import { useCreateAnecdote } from "../hooks/useCreateAnecdote";

const AnecdoteForm = () => {
  const { contextDispatch } = useAnecdoteContext();
  const { mutate } = useCreateAnecdote();

  const onCreate = (event) => {
    event.preventDefault();
    const content = event.target.anecdote.value;
    if (content.trim() === "") {
      contextDispatch({ type: "ERROR", payload: "This field cannot be empty" });
      return;
    }
      mutate({ content, votes: 0 });
      event.target.anecdote.value = "";
  };

  return (
    <>
      <h3>create new</h3>
      <form onSubmit={onCreate}>
        <input name="anecdote" />
        <button type="submit">create</button>
      </form>
    </>
  );
};

export default AnecdoteForm;
