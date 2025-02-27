const fs = require('fs')


function aatifReadFile(){
    return new Promise((resolve)=>{
    fs.readFile("a.txt","utf-8",(err,data)=>{
    resolve(data);
    
    })
    })
}

function onDone(data){
    console.log(data);
    
}

aatifReadFile().then(onDone)