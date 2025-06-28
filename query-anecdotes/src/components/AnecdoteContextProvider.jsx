import { useReducer } from "react";

import { anecdoteReducer } from "./AnecdoteReducer";
import anecdoteContext from "../utils/anecdoteContext";

export const AnecdoteContextProvider = ({ children }) => {
  const [anecdote, anecdoteDispatch] = useReducer(anecdoteReducer, null);

  return (
    <anecdoteContext.Provider value={[anecdote, anecdoteDispatch]}>
      {children}
    </anecdoteContext.Provider>
  );
};
