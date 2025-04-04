const express = require('express')
const app = express()
const port = 3000;


const users = [{
    name : "john",
    kidneys : [{
        healthy : true
    },]
}]

app.use(express.json())

app.get('/',(req,res)=>{
    const johnKidneys = users[0].kidneys
    const numberOfKidneys = johnKidneys.length
  
    
    // const numberOfHealthyKidneys = 0
    // for(let i=0;i<johnKidneys.length;i++){
        //     if(johnKidneys[i].healthy){
            //         numberOfHealthyKidneys = numberOfHealthyKidneys+1
            //     }
            // }  -> This is the standard way of writing loop , below used loop
            
            
    let numberOfHealthyKidneys = johnKidneys.filter((item)=>item.healthy).length;
             

    const numberOfUnhealthyHealthyKidneys = numberOfKidneys - numberOfHealthyKidneys

    res.json({
        numberOfKidneys,
        numberOfHealthyKidneys,
        numberOfUnhealthyHealthyKidneys
    })
})

app.post('/',(req,res)=>{
 const isHealthy  = req.body.isHealthy;
 users[0].kidneys.push({
    healthy:isHealthy
 })
 res.json({
    msg:"done"
 })
})

app.put('/',(req,res)=>{ //changing all kidneys to healthy
  for(let i=0; i < users[0].kidneys.length;i++){
    users[0].kidneys[i].healthy = true
  }
  res.json({})
})

app.delete('/',(req,res)=>{ // deleting all unHealthy 
    
// users[0].kidneys = users[0].kidneys.filter((kidney)=>kidney.healthy) -> using filter

//only if there is one unhealthy kidney do this atLeast return 411

if(isThereAtLeastOneUnHealthyKidney){
    const newKidneys  = []

    for(let i=0; i < users[0].kidneys.length;i++){
        if(users[0].kidneys[i].healthy){
         newKidneys.push({
            healthy : true
         })
        }
      }
      
      users[0].kidneys = newKidneys;
    
      res.json({msg : "done"})
}else{
 res.status(411).json({
    msg : "you have no bad kidneys"
 })
}


        
    
})

function isThereAtLeastOneUnHealthyKidney(){
    let AtLeastOneUnHealthyKidney = false
    for(let i=0; i < users[0].kidneys.length;i++){
        if(!users[0].kidneys[i].healthy){
         AtLeastOneUnHealthyKidney = true
}
    }
    return AtLeastOneUnHealthyKidney
}

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});
