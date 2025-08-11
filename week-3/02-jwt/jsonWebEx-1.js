const jwt = require('jsonwebtoken')
const SECRET_KEY = "my_secret_key";

const user = {id:1,username:"aatif"};
const token = jwt.sign(user,SECRET_KEY,{expiresIn:'1hr'})

console.log("Generated token",token);
