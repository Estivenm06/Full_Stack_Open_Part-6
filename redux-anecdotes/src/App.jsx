import { useEffect } from "react";
import { useDispatch } from "react-redux";

import { AnecdoteForm } from "./components/AnecdoteForm.jsx";
import { AnecdoteList } from "./components/AnecdoteList.jsx";
import { Filter } from "./components/Filter.jsx";
import { Notification } from "./components/Notification.jsx";
import { initializeAnecdotes } from "./reducers/anecdoteReducer.js";

const App = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(initializeAnecdotes());
  }, [dispatch]);

  return (
    <>
      <header>
        <h1>Anecdote app</h1>
        <Notification />
        <Filter />
      </header>
      <main>
        <article>
          <AnecdoteForm />
        </article>
        <article>
          <AnecdoteList />
        </article>
      </main>
    </>
  );
};

export default App;
