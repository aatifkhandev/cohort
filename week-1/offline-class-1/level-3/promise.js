
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
