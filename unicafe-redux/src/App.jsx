import { store } from './store' 

const App = () => {
    const good = () => {
      store.dispatch({
        type: 'GOOD'
      })
    }
  
    const ok = () => {
      store.dispatch({
        type: 'OK'
      })
    }
  
    const bad = () => {
      store.dispatch({
        type: 'BAD'
      })
    }
  
    const reset = () => {
      store.dispatch({
        type: 'RESET'
      })
    }
  
    const state = store.getState();
  
    return (
      <div>
        <button onClick={good}>good</button> 
        <button onClick={ok}>ok</button> 
        <button onClick={bad}>bad</button>
        <button onClick={reset}>reset stats</button>
        <div>good {state.good}</div>
        <div>ok {state.ok}</div>
        <div>bad {state.bad}</div>
      </div>
    )
  }

export {
    App
}