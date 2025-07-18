// This middleware catches all errors passed using next(err).

// Called global error handler in Express.

const express = require('express')
const app = express()


app.get('/health',(req,res)=>{
    console.log(req.body.kidneys.length);
    res.json({
        msg:"done"
    })
})


//error catch

app.use((err,req,res,next)=>{
    res.send({
        msg:"internal error"
    })
})

app.listen(3000)