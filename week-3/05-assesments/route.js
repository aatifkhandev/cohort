// Build a Express server with a fake in-memory users array. Add 4 routes:

// | Method | Route        | Purpose           |
// | ------ | ------------ | ----------------- |
// | GET    | `/users`     | Get all users     |
// | POST   | `/users`     | Add a new user    |
// | PUT    | `/users/:id` | Update user by ID |
// | DELETE | `/users/:id` | Delete user by ID |


// let users = [
//   { id: 1, name: "Aatif" },
//   { id: 2, name: "John" }
// ];

const express = require('express')
const app = express()
const port = 3000

app.use(express.json())


// let users = [
//   { id: 1, name: "Aatif" },
//   { id: 2, name: "John" }
// ];

let users = [
{ id: 1, name: "Aatif" },
{ id: 2, name: "John" }
];

app.get('/users',(req,res)=>{
 return res.json(users)

})

app.post('/users',(req,res)=>{

  const id = parseInt(req.body.id)
  const name = req.body.name

  if(!id || !name){
    return res.status(400).json({ message: "Invalid input" });
  }    
  users.push({id,name});
   

   
  res.json({
   user:{id,name}
  });
});


app.put('/users/:id',(req,res)=>{
const id = parseInt(req.params.id)
  const name = req.body.name

  if(!id || !name){
    return res.status(400).json({ message: "Invalid input" });
  }
  const user = users.find(t=>t.id === id)
 
  if (!user) {
  return res.status(404).json({ message: "User not found" });
}
 user.name = name

 res.json({user})

})

app.delete('/users/:id',(req,res)=>{
const id = parseInt(req.params.id)


  if(!id){
    return res.status(400).json({ message: "Invalid id" });
  }


  const index = users.findIndex(t=>t.id === id)

   if (index === -1) {
    return res.status(404).json({ message: "User not found" });
  }
    
  const deletedUser = users[index]
  users.splice(index,1)

res.json({user:deletedUser})
})


app.listen(port,()=>{
    console.log(`listening on ${port}`);
    
})