//  Problem Statement: User Task Manager
// You are to implement basic routes for a User Task Manager that stores tasks for users.

// Each task has:

// id: number

// title: string

// completed: boolean

// 🔧 Implement the following routes:
// GET /tasks
// Return all tasks.

// POST /tasks
// Accept a new task with id, title, and completed in the body.

// Push it to the array and return the added task.

// Validate that id is a number, title is a string, and completed is a boolean.

// PUT /tasks/:id
// Update the title or completed status of a task by ID.

// Only update the provided fields.

// If task not found, return 404.

// DELETE /tasks/:id
// Delete a task by ID.

// Return the deleted task.

const express  = require('express')
const app = express()
const port = 3001

let tasks = []

app.use(express.json())

app.get('/tasks',(req,res)=>{
    res.json(tasks)
})


app.post('/tasks',(req,res)=>{
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
     tasks[findTask].completed = completed

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