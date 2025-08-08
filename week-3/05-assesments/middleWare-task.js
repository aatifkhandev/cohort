// Task: Middleware-Powered Task Manager
// We'll upgrade your existing /tasks API with middleware.

//  Middleware 1: Logger
// Add a middleware that logs:

// Method
// URL
// Timestamp

// Middleware 2: Request Timer

// Middleware 3: Dummy Auth (Route-specific)

const express  = require('express')
const app = express()
const port = 4000
app.use(express.json())
let tasks = []

app.use((req,res,next)=>{  //Middleware 1: Logger
console.log(`[${new Date().toISOString()}] ${req.method} ${req.url}`);
next();
})

app.use((req,res,next)=>{ //Middleware 2: Request Timer
 const start = Date.now()
 res.on('finish',()=>{
    const duration = Date.now()-start
    console.log(`${req.method} ${req.url} took ${duration}ms`);
 })
 next();
})

// Middleware 3: Dummy Auth
const auth = (req, res, next) => {
  const token = req.headers['authorization'];
  if (token === 'secret123') {
    next();
  } else {
    return res.status(401).json({ msg: 'Unauthorized' });
  }
};


app.get('/tasks',(req,res)=>{
    res.json(tasks)
})


app.post('/tasks',auth,(req,res)=>{
    // POST /tasks
// Accept a new task with id, title, and completed in the body.
    const id = parseInt(req.body.id)
    const title = req.body.title;
    const completed  = req.body.completed

   if (!id || typeof title !== 'string' || typeof completed !== 'boolean') {
  return res.status(400).json({ msg: 'Invalid inputs' });
}
const task  = {id,title,completed}
   tasks.push(task)
 
    res.json({
        task
    })
})

app.put('/tasks/:id',(req,res)=>{
    const id = parseInt(req.params.id)
    const title = req.body.title;
    const completed  = req.body.completed
    
  if (!id || (title !== undefined && typeof title !== 'string') || (completed !== undefined && typeof completed !== 'boolean')) {
    return res.status(400).json({ msg: 'Invalid inputs' });
  }
     const findTask = tasks.findIndex(t=>t.id===id)

     if(findTask == -1){
           return res.status(404).json({ msg: 'Task not found' });
     }

     tasks[findTask].title = title
     tasks[findTask].completed = completed  //Accesses the task at that index in the tasks array (tasks[1] in our case).

// Updates its title property with the new value from the request body.

     res.json({
        tasks : tasks[findTask]
     })
    });
     app.delete('/tasks/:id',(req,res)=>{
         const id = parseInt(req.params.id)
         if(!id){
             return res.status(400).json({ msg: 'Invalid inputs' });
         }
         const index = tasks.findIndex(t=>t.id===id )
         
     if(index == -1){
           return res.status(404).json({ msg: 'Task not found' });
     }
     const deletedTask = tasks[index]
     tasks.splice(index,1)

      res.json({
        task : deletedTask
      })
     })

app.listen(port,()=>{
    console.log(`Listening on ${port}`);
    
})