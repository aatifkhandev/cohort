import { useState } from 'react'

export default function Count(){
    const [count,setCount] = useState(0)

    return(
        <div>
        <CountHandler count={count} setCount={setCount}></CountHandler>
     </div>
    )

}
function CountHandler(props){
   return(
<button onClick={()=>props.setCount(props.count+1)}>Count is {props.count}</button>
   )
}

