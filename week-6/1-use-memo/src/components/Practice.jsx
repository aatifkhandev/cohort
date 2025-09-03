import { useState } from "react"


export function Practice(){
    return(
        <div>
            <Header title="My name is harkirat"></Header><br></br>
            <Header title = "My name is aatif"></Header>
        </div>
    )
}

function Header({title}){
    const[state,setState] = useState(title)

// setState is for updating,
// state is for displaying.
  
function changeTitle(){
    const randomNumber = Math.floor(Math.random()*1000)
    setState("My name is "+randomNumber)
}

 return(
    <div>
        <button onClick={changeTitle}>Click me to change the title</button>
        {state}
    </div>
 )
}

