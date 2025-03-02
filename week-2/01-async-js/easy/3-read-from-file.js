const fs = require('fs');
function aatifReadfile(){
    return new Promise((resolve,reject)=>{
     fs.readFile('./3-read.txt',"utf-8",function(err,data){
        if (err) reject(err)
       else resolve(data)
     })
    })
    
}

function callback(data){
    console.log(data);
    
}
aatifReadfile().then(callback).catch((err)=>console.log("Error"));




 async function aatifReadfile(){
    return new Promise((resolve,reject)=>{
     fs.readFile("3-new.txt","utf-8",function(err,data){
        if (err) reject(err)
       else  resolve(data)
     })
    })
    
}

async function main(){
   try{
    const data = await aatifReadfile()
    console.log(data);
    
   }catch(err){
    console.log("Error",err.message);
    
   }
    
}
main()