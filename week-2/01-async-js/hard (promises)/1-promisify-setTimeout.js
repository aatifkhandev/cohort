/*
    Write a function that returns a promise that resolves after n seconds have passed, where n is passed as an argument to the function.
*/

function wait(n) {
    return new Promise((res,rej)=>{
      setTimeout(()=>{
         res(n)
      },n*1000)
   console.log(n);
   
    })
   
}
wait(3).then((val)=>{
console.log(val);

})
module.exports = wait;
