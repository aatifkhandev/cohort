import React from "react";
import { useState } from "react"


export function Practice(){
    const[title,setTitle] = useState("My name is Aatif")

    function updateTitle(){
        setTitle("My name is"+Math.random())
    }


return(
    <div>
        <button onClick={updateTitle}>Update the title</button>
        <Header title={title}></Header>
        <Header title="aatif"></Header>
        <Header title="aatif1"></Header>
        <Header title="aatif2"></Header>
        <Header title="aatif3"></Header>
        
    </div>
)
}
function Header({title}){
   return(
    <div>
        {title}
    </div>
   )
}

// export function Practice(){
//     return(
//         <div>
//             <Header title="My name is harkirat" canChange ={true}></Header><br></br>
//             <Header title = "My name is aatif" canChange ={false} ></Header>
//         </div>
//     )
// }

// function Header({title,canChange}){
//     const[state,setState] = useState(title)

// // setState is for updating,
// // state is for displaying.
  
// function changeTitle(){
//     const randomNumber = Math.floor(Math.random()*1000)
//     setState("My name is "+randomNumber)
// }

//  return(
//     <div>
//         <button onClick={changeTitle}>Click me to change the title</button>
//         {state}
//     </div>
//  )
// }

