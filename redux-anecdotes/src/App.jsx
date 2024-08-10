import AnecdoteForm from './components/AnecdoteForm.jsx'
import AnecdoteList from './components/AnecdoteList.jsx'
import Filter from './components/Filter.jsx'
import Notification from './components/Notification.jsx'
import { useEffect } from 'react'
import { setAnecdote } from './reducers/anecdoteReducer.js'
import { useDispatch } from 'react-redux'
import AnecdoteService from './services/anecdotes.js'

const App = () => {
  const dispatch = useDispatch()
  useEffect(() => {
    AnecdoteService.getAll().then(anecdotes => {
      dispatch(setAnecdote(anecdotes))
    })
  }, [])
  return (
    <div>
      <h2>Anecdotes</h2>
      <Notification/>
      <Filter />
      <AnecdoteList />
      <AnecdoteForm />
    </div>
  )
}

export default App