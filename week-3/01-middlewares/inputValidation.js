//using zod for input validation

const express = require('express')
const zod = require('zod')
const app = express()

const schema  = zod.array(zod.number());

app.use(express.json())

app.post('/health-checkup',(req,res)=>{
 const kidneys = req.body.kidneys;
 const response  = schema.safeParse(kidneys)
 if(!response.success){
    res.status(411).json({
     msg : "input is valid"
    })
 }else{
 res.send({
response
 })
 }

})

app.listen(4001,()=>{
    console.log("listening on port 4001");
    
})