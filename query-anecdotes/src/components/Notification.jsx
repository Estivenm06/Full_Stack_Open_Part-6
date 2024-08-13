import { useContext } from "react"
import anecdoteContext from "./anecdoteContext"

const Notification = () => {
  const [notification, dispatch] = useContext(anecdoteContext, null)
  const style = {
    border: 'solid',
    padding: 10,
    borderWidth: 1,
    marginBottom: 5
  }
  
  if (notification === null){
    return null
  } 

  return (
    <div style={style}>
      {notification}
    </div>
  )
}

export default Notification
