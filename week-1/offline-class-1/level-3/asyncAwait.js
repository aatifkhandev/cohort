// Async await syntax

// Again, it is just syntactic sugar. Still uses callbacks/Promises under the hood
// Makes code much more readable than callbacks/Promises
// Usually used on the caller side, not on the side where you define an async function

function foo(){
    let a = new Promise((resolve)=>{
       setTimeout(() => {
        resolve("Ok")
       }, 3000);
    })
    return a;
}

 async function main(){ //Any function that wants to use await, needs to be async
    
   let value =  await foo()
   console.log(value);
   
}
main()


//  Rather than using the .then syntax, we add await before and get the final value in the variable
