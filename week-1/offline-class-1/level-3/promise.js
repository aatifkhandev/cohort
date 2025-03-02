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