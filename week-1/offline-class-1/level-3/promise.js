
const fs = require('fs')

//my own asynchronous function
function aatifReadFile(){
    return new Promise((resolve)=>{
    fs.readFile("a.txt","utf-8",(err,data)=>{
    resolve(data);
    
    })
    })
}
//callback function to call
function onDone(data){
    console.log(data);
    
}

aatifReadFile().then(onDone)



var d  = new Promise((resolve)=>{
  resolve("foo")
})

function callback(){
    console.log(d);
    
}

d.then(callback)


//dummy async function that actually gets resolves
function abc(){
    let p = new Promise((resolve)=>{
     resolve("Hii there")
    })
    return p;
}

//Actually logging the data with what is actually resolved
const value = abc()
value.then((data)=>{
setTimeout(()=>{
console.log(data);

},1000)
 
})