//A **global catch** is used to handle all unhandled errors or rejections in a Node.js application, ensuring the app doesn't crash silently.

const express = require('express')
const app = express()

app.use(express.json())

app.post('/health-checkup',(req,res)=>{
    const kidneys = req.body.kidneys
    const kidneyLength = kidneys.length;
    res.send("you have "+kidneyLength+"kidneys")
});

//global catch
app.use((err,req,res,next)=>{
res.json({
    msg:"There is something wrong with our server"
})
});

app.listen(4000)