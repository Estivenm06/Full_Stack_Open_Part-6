import { useDispatch } from "react-redux";

import { createAnecdote } from "../reducers/anecdoteReducer";
import { setNotification } from "../reducers/notificationReducer";

const AnecdoteForm = () => {
  const dispatch = useDispatch();
  const addAnecdote = (event) => {
    event.preventDefault();
    if (event.target.anecdote.value.trim() === "") {
      dispatch(
        setNotification(
          { message: "This field cannot be empty.", type: "error" },
          5000
        )
      );
      return;
    }
    if (event.target.anecdote.value.length < 5) {
      dispatch(
        setNotification(
          { message: "Anecdote at least 5 length.", type: "error" },
          5000
        )
      );
      return;
    }
    const content = event.target.anecdote.value;
    dispatch(createAnecdote(content));
    event.target.anecdote.value = "";
  };

  return (
    <>
      <h3>create new</h3>
      <form onSubmit={addAnecdote}>
        <input name="anecdote" />
        <button type="submit">create</button>
      </form>
    </>
  );
};

export { AnecdoteForm };
