const jwt = require('jsonwebtoken')
const SECRET_KEY = "12345";
const express = require('express')
const app = express()
const port = 3000

const dummyUser = "aatif"
const dummyPassword = 12345

app.use(express.json())

app.post('/',(req,res)=>{
 let {userName,password} = req.body
 password = parseInt(password)

 if(userName===dummyUser && password===dummyPassword){
  const token =  jwt.sign({userName:userName},SECRET_KEY,{expiresIn:'1h'})
    res.json({token})
 }else{
    res.status(404).json({
        message:"unauthorized"
    })
 }

})

function authenticateToken(req,res,next){
    const header = req.headers['authorization']
    if(!header){
       return res.status(401).json({msg:"Token required"})     
    }
    const token = header.split(' ')[1]
    if(!token){
         return res.status(401).json({ msg: "Token required" });
    }
    jwt.verify(token,SECRET_KEY,(err,decoded)=>{
        if (err) {
           return res.status(403).json({ msg: "Invalid token" });
        }
        req.user = decoded;
        next();
    });
    
}

app.get('/profile',authenticateToken,(req,res)=>{
    res.json(req.user)
})

app.listen(port,()=>{
    console.log(`listening on ${port}`);
    
})