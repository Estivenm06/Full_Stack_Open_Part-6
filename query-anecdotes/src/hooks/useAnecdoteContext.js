import { useContext } from "react";
import anecdoteContext from "../utils/anecdoteContext";

const useAnecdoteContext = () => {
  const [context, dispatch] = useContext(anecdoteContext);

  const contextDispatch = ({ type, payload }) => {
    dispatch({ type, payload });
    setTimeout(() => {
      dispatch({ type, payload: null });
    }, 5000);
  };

  return { context, contextDispatch };
};

export { useAnecdoteContext };
