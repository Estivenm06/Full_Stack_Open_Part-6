import { voteOf } from "../reducers/anecdoteReducer";
import { useSelector, useDispatch } from "react-redux";

const AnecdoteList = () => {
  const dispatch = useDispatch();
  const anecdotes = useSelector((state) => state.anecdotes);
  const anecdotesMap = anecdotes.map((anecdote) => anecdote);
  const filter = useSelector((state) => state.filter);
  const anecdotesToShow =
    filter !== null
      ? anecdotesMap.filter((anecdote) =>
          anecdote.content.toUpperCase().includes(filter.toUpperCase())
        )
      : anecdotes;

  const vote = (id) => {
    dispatch(voteOf({payload: id}));
  };
  
  const anecdotesVotes = anecdotesToShow.map((anecdotes) => anecdotes);

  const anecdoteSorted = anecdotesVotes.sort((a, b) => {
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
