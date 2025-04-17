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


function isThereAtLeastOneUnHealthyKidney(){
  let AtLeastOneUnHealthyKidney = false
  for(let i= 0;i<users[0].kidneys.length;i++){
    if(!users[0].kidneys[i].healthy){
      AtLeastOneUnHealthyKidney = true
    }
  }
  return AtLeastOneUnHealthyKidney
}
   
app.get('/',(req,res)=>{
  const abcKidneys = users[0].kidneys
  const numberOfKidneys = abcKidneys.length
  let numberOfHealthyKidneys = 0
  for(let i = 0 ; i<abcKidneys.length;i++){
    if(abcKidneys[i].healthy){
      numberOfHealthyKidneys=numberOfHealthyKidneys+1
    }
  }
  const numberOfUnhealthyHealthyKidneys = numberOfKidneys-numberOfHealthyKidneys

  res.json({
    numberOfKidneys,
    numberOfHealthyKidneys,
    numberOfUnhealthyHealthyKidneys
  })
})

app.post('/',(req,res)=>{
const isHealthy = req.body.isHealthy;
users[0].kidneys.push({
  healthy:isHealthy
})
res.json({
  msg : "isDone"
})
})

app.put('/',(req,res)=>{
  for(let i=0;i<users[0].kidneys.length;i++){
    
  }
})

app.listen(port,()=>{
  console.log(`app listening on port ${port}`);
  
})


