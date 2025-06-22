const fs = require('fs');

function readText(){
    return new Promise((res,rej)=>{
  fs.readFile("a.txt","utf-8",(err,data)=>{
    res(data)
    })
    
    })
    
}
function onDone(data){
    console.log(data);
    
}
readText().then(onDone)