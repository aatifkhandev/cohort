import { useState } from 'react'
import './App.css'

function App() {
  const [todo, setTodo] = useState([{
    title:"aatif",
    description:"123",
    completed:True

  },{
    title:"atf",
    description:"789",
    completed:false

  }])
 
  function addTodo(){
       // [1, 2]
    // [...todos, 3] => [1, 2, 3]
    setTodo([...todo,{
      title:"Add new todo",
      description:"desc of a new todo"
    }])
  }

  return (
    <>
      <button onClick={addTodo}>Add a Todo</button>
      
    </>
  )
  function Todo(props){
    return(
      <div>
        <h1>{props.title}</h1>
        <h2>{props.description}</h2>
      </div>
    )
  }
}

export default App
