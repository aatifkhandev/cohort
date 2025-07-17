// Before we proceed, lets add constraints to our route
// 1. User needs to send a kidneyId as a query param which should be a number from 1-2 (humans only has 2 kidneys)
// 2. User should send a username and password in headers

// MiddleWares

const express = require('express')
const app = express()
const port = 3001

function userMiddleWare(req,res,next){
    const username = req.headers.username
    const password = req.headers.password
    if(username!="aatif" && password!= "pass"){
        res.status(403).json({
            msg:"wrong inputs"
        })
    }else{
        next();// pass control if valid
    }
}

function kidneyMiddleWare(req,res,next){
    const kidneyId = req.query.kidneyId
    if(kidneyId!=1 && kidneyId!=2){
        res.status(403).json({
            msg:"wrong inputs"
        })
    }else{
        next();
    }
}

app.get('/health-checkup',userMiddleWare,kidneyMiddleWare,(req,res)=>{
    res.send("your heart is healthy")
})

app.get('/kidney-check',userMiddleWare,kidneyMiddleWare,(req,res)=>{
    res.send("you're ok")
})

app.listen(port,()=>{
    console.log(`listening on ${port}`);
    
})



//This is the naive approach 

// app.get('/health-checkup',(req,res)=>{
// const kidneyId = req.query.kidneyId
// const username = req.headers.username
// const password = req.headers.password
 
// if(username!="aatif" && password != "spring@@2001"){ //user-name checks
// res.status(403).json({
//     msg:"user does'nt exist",
// });
// return
// }

// if(kidneyId!=1 && kidneyId!=2){  //input validation
// res.status(411).json({
//     msg:"wrong inputs",
// });
// return;
// }
// res.send("your heart is healthy")
// })



// app.listen(port,()=>{
//     console.log(`listening on ${port}`);
    
// })