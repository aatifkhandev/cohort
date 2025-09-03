// Lets create a simple todo app that renders 3 todos
// 1. Create a Todo component that accepts title, description as input
// 2. Initialize a state array that has 3 todos
// 3. Iterate over the array to render all the TODOs
// 4. A button in the top level App component to add a new TODO

import { useState } from "react";

export function DisplayTodo(){
   const[todos,setTodos] = useState([{
    id:1,
    title:"foo",
    description:"bar"
   },{
     id:2,
    title:"abc",
    description:"xyz"
   },{
    id:3,
    title:"eee",
    description:"lop"
   }])

   function addTodo(){
    setTodos([...todos,{
        id:4,
        title:Math.random(),
        description:Math.random()
    }])

    // const newTodos = []

    // for(let i=0;i<todos.length;i++){
    //     newTodos.push(todos[i])
    // }
    // setTodos.push({
    //     id:4,
    //     title:Math.random(),
    //     description:Math.random()
    // })
    // setTodos(newTodos) //old way
   }



   return(
    <div>
        <button onClick={addTodo}>Add Todo</button>
        {todos.map(todo=> <Todo key={todo.id} title={todo.title} description={todo.description}/>)}
    </div>
   )
}


function Todo({title,description}){ 
  return(
    <div>
        <h1>
            {title}
        </h1>
        <h5>
            {description}
        </h5>
    </div>
  )
}