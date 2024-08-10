import { setNotification } from "../reducers/notificationReducer";
import { useSelector, useDispatch } from "react-redux";
import { VoteOfAnecdote } from "../reducers/anecdoteReducer";

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

  const vote = async (id) => {
    const anecdote = anecdotes.find((n) => n.id === id);
    dispatch(
      VoteOfAnecdote(id, {
        content: anecdote.content,
        votes: anecdote.votes + 1,
      })
    );
    dispatch(setNotification(`You voted '${anecdote.content}'`, 5000))
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
