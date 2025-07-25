const express = require('express')
const app = express()
const port = 3000


app.get('/sum',(req,res)=>{
    const a = parseInt(req.query.a)
    const b = parseInt(req.query.b)
    const ans = a+b

    res.json({
        ans
    })
})



app.listen(port,()=>{
    console.log(`listening on ${port}`);
    
})