const express = require('express')
const app = express()
const port = 3003

let tasks = []

app.use(express.json())



app.get('/tasks',(req,res)=>{
 res.send(tasks)    
})

app.post('/tasks',(req,res)=>{
    const id = parseInt(req.body.id)
    const title = req.body.title
    const completed = true

    tasks.push({
        id,
        title,
        completed
    });
    res.json({tasks})
})

app.put('/tasks/:id',(req,res)=>{
    const id = parseInt(req.params.id)
    const title = req.body.title
    const completed = true
    if(!id){
        res.status(404).json({message:"Invalid id"})
    }
        const index = tasks.findIndex(t=>t.id==id)
        tasks[index].title = title
        tasks[index].completed = completed
    
    res.json({tasks:tasks[index]})
})


app.listen(port,()=>{
    console.log(`Listening on ${port}`);
    
})