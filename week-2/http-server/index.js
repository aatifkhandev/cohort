const express = require('express');
const app = express();
const bodyParser = require('body-parser')
const port = 3001;

app.use(bodyParser.json())

app.get('/', (req, res) => {
    res.send("Hello World");
});

app.get("/route-handler",(req,res)=>{
    
 res.json({
    name:"Aatif",
    age:21
 })
})

app.post('/conversation',(req,res)=>{
    console.log(req.body);
    
 res.json({
    msg:"2+2 = 4"
 })
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});
