// We have already covered this in the second lesson, but as an easy recap try to code a counter in Javascript
// It should go up as time goes by in intervals of 1 second
// let count=0;
 export function counter(){
    
       count+=1;
       console.log(count);

       if(count>=10){
        clearInterval(ans)
       }
       
    }
    

let ans = setInterval(()=>{
  counter();
  
},1000)

function setCounter(){
let count = 1

const interval = setInterval(()=>{
  console.log("count is",count);
    count++;
  if(count>10){
     clearInterval(interval)
  }

},1000)
}
setCounter()