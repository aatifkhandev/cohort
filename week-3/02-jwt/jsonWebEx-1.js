const jwt = require('jsonwebtoken')
const SECRET_KEY = "12345";

const user = {id:1,username:"aatif",role:"foo"};
const token = jwt.sign(user,SECRET_KEY,{expiresIn:'1hr'})

console.log("Generated token",token);


//verify

try{
    const decoded = jwt.verify(token,SECRET_KEY)
    console.log("Decoded Data",decoded);
    
}catch(err){
 console.log("Invalid token");
 
}