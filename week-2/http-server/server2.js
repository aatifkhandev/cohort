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
   
app.get('/',(req,res)=>{   //GET - User can check how many kidneys they have and their health 
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

app.post('/',(req,res)=>{  //POST - User can add a new kidney 
const isHealthy = req.body.isHealthy;
users[0].kidneys.push({
  healthy:isHealthy
})
res.json({
  msg : "isDone"
})
})

app.put('/',(req,res)=>{   //PUT - User can replace a kidney, make it healthy
  for(let i=0;i<users[0].kidneys.length;i++){
    users[0].kidneys[i].healthy = true
  }
  res.json({})
})

app.delete('/',(req,res)=>{  //DELETE - User can remove a kidney
const newKidneys = [];
for(let i = 0; i<users[0].kidneys.length;i++){
if(users[0].kidneys[i].healthy){
  newKidneys.push({
    healthy:true
  })
}
}
users[0].kidneys = newKidneys;

res.json({
  msg:"done"
})

})

app.listen(port,()=>{
  console.log(`app listening on port ${port}`);
  
})


