// Assignment:

// Install mongoose.

// Create db.js and connect to a local MongoDB instance.

// Log "DB Connected" if successful.

// Handle connection errors.

const mongoose = require('mongoose')

async function connection(){
    try{

        await mongoose.connect("mongodb://127.0.0.1:27017/user_app")
        console.log("DB Connected");
        
    }catch(err){
      console.log("Error connection",err);
    }
        
     }
    


connection()