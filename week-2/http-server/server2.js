const express = require('express')
const app = express()
const port = 3000

const users = [{
    name : "abc",
    kidneys : [{
     healthy : true
    },]
},{
   name : "foo",
   newKidneys:[{
    notHealthy:false
   }] 
}]


app.use(express.json())


app.get('/',(req,res)=>{
  const abcKidneys = users[0].kidneys
  const numberOfKidneys = users[0].kidneys.length
  
})