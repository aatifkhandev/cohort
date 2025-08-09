const express = require('express')
const app = express()
const port = 3003

let tasks = []

app.use(express.json())


const requests = {}
app.use((req,res,next)=>{  // 1-> rate - limiter
  const ip = (req.ip);
  const now = Date.now()

    if (!requests[ip]) {
    // First time seeing this IP
    requests[ip] = { count: 1, firstRequestTime: now };
    return next();
  }

    const timeSinceFirstRequest = now - requests[ip].firstRequestTime;

      if (timeSinceFirstRequest < 60 * 1000) { // within 1 minute
    requests[ip].count++;

     if (requests[ip].count > 5) {
      return res.status(429).json({ msg: "Too many requests. Try again later." });
    }
      } else {
    // Reset counter after 1 minute
    requests[ip] = { count: 1, firstRequestTime: now };
  }
  next();


}) 


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

app.delete('/tasks/:id',(req,res)=>{
    const id = parseInt(req.params.id)
    if(!id){
        res.status(403).json({message:"invalid input"})
    }
    const index = tasks.find(t=>t.id===id)
    const deletedTask = tasks.splice(index,1)
    res.json({
        tasks:deletedTask
    })
})

app.listen(port,()=>{
    console.log(`Listening on ${port}`);
    
})