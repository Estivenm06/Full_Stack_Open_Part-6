import { voteOf } from "../reducers/anecdoteReducer";
import { NEW_NOTIFICATION, HIDE_NOTIFICATION } from '../reducers/notificationReducer';
import { useSelector, useDispatch } from "react-redux";

const AnecdoteList = () => {
  const dispatch = useDispatch();
  const anecdotes = useSelector((state) => state.anecdotes);
  const filter = useSelector((state) => state.filter);
  const anecdotesToShow =
    filter !== null
      ? anecdotes.filter((anecdote) =>
          anecdote.content.toUpperCase().includes(filter.toUpperCase())
        )
      : anecdotes;

  const vote = (id) => {
    const anecdote = anecdotes.filter(n => n.id === id)
    dispatch(voteOf({payload: id}));
    dispatch(NEW_NOTIFICATION({ payload: `You voted ${anecdote["0"].content}`}))
    setTimeout(() => {
     dispatch(HIDE_NOTIFICATION())
    }, 1500);
  };

  const anecdoteSorted = [...anecdotesToShow].sort((a, b) => {
    return b.votes - a.votes;
  });

  return (
    <div>
      {anecdoteSorted.map((anecdote, id) => (
        <div key={id}>
          <div>{anecdote.content}</div>
          <div>
            has {anecdote.votes}
            <button onClick={() => vote(anecdote.id)}>vote</button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default AnecdoteList;
