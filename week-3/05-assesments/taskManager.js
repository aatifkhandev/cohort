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

let task = {
id:1,
title : 'Apple',
completed : true
}

app.get('/tasks',(req,res)=>{
    res.send(task)
})


app.listen(port,()=>{
    console.log(`Listening on ${port}`);
    
})