import { useState } from 'react'
export default function Toggle() {
  const [color, setColor] = useState("white");

  return (
    <div
      style={{
        backgroundColor: color,
        color: color === "white" ? "black" : "white",
        minHeight: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <button
        onClick={() => setColor(color === "white" ? "black" : "white")}
      >
        Toggle Color
      </button>
    </div>
  );
}















// import { useState } from 'react'


// export default function Toggle(){
//     const [color,setColor] = useState("white")
    
   
//     // <button onclick={()=>{setColor(color==="white" ? "black":"white")}}>Toggle-Color</button>
          
//     return(
//         <button style={{
//             backgroundColor:color,
//             padding : "10px 20px"
//         }} 
//         onClick={()=>setColor(color==="white" ? "black":"white" )}>Toggle-color</button>
//     )


// }