import { setNotification } from "../reducers/notificationReducer";
import { useSelector, useDispatch } from "react-redux";
import { VoteOfAnecdote } from "../reducers/anecdoteReducer";

const AnecdoteList = () => {
  const dispatch = useDispatch();
  const anecdotes = useSelector(({anecdotes}) => anecdotes);
  const filter = useSelector(({filter}) => filter);

  const handleVote = async (id) => {
    const anecdote = anecdotes.find((anecdote) => anecdote.id === id);    
    dispatch(
      VoteOfAnecdote({
        id: anecdote.id,
        content: anecdote.content,
        votes: anecdote.votes + 1,
      })
    );
    dispatch(setNotification({message: `You voted '${anecdote.content}'`, type: 'success'}, 5000));
  };
  
  const anecdotesToShow =
    filter !== null
      ? anecdotes.filter((anecdote) =>
          anecdote.content.toUpperCase().includes(filter.toUpperCase())
        )
      : anecdotes;

  const anecdoteSorted = [...anecdotesToShow].sort((a, b) => {
    return b.votes - a.votes;
  });

  return (
    <>
      {anecdoteSorted.map(({id, content, votes}) => (
        <ul key={id}>
          <li>
            <p>{content}</p>
            <span>has {votes}</span>
            <button onClick={() => handleVote(id)}>vote</button>
          </li>
        </ul>
      ))}
    </>
  );
};

export { AnecdoteList };
