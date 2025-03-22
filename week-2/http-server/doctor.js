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


app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});
