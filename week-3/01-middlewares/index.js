// Q) lets add constraints to our route
// 1. User needs to send a kidneyId as a query param which should be a number from 1-2 (humans only has 2 kidneys)
// 2. User should send a username and password in headers


const express = require('express')
const app = express()

function userMiddleWare(req,res,next){
    const userName = req.headers.username;
    const password = req.headers.password;
    if(userName!="aatif" && password!="123"){
        res.status(403).json({
            msg:"Incorrect Inputs"
        })
    }else{
        next();
    }
}

function kidneyMiddleWare(req,res,next){
       const kidneyId = parseInt(req.query.kidneyId); 
    if(kidneyId!=1 && kidneyId!=2){
         res.status(403).json({
            msg:"Incorrect Inputs"
        })
    }else{
        next()
    }
}

app.get('/health-checkup',userMiddleWare,kidneyMiddleWare,(req,res)=>{
    res.send("your kidney is healthy")
})

app.get('/kidney-check',userMiddleWare,kidneyMiddleWare,(req,res)=>{
    res.send("your kidney is healthy")
})

app.get('/heart-checkup',userMiddleWare,(req,res)=>{
    res.send("your kidney is healthy")
})




app.listen(3000,()=>{
    console.log("starting on 3000");
    
})


//This code doesn't use middle wares
// app.get('/health-checkup',(req,res)=>{
//     const kidneyId = req.query.kidneyId;
//     const userName  = req.headers.userName;
//     const passwords = req.headers.passwords;

//     if(userName!="aatif" || passwords!="12345"){
//         res.status(403).json({
//             msg:"user doesn't exist"
//         });
//         return
//     }
//     if(kidneyId!=1 && kidneyId!=2){
//         res.status(411).json({
//             msg:"wrong inputs"
//         });
//         return;
//     }

// res.send({
//     "heart":"healthy"
// })
// })