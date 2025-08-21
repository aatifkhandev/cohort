// Assignment:

// Install mongoose.

// Create db.js and connect to a local MongoDB instance.

// Log "DB Connected" if successful.

// Handle connection errors.

const mongoose = require('mongoose')

async function connection(){
    try{

        await mongoose.connect("mongodb+srv://aatifk:aatifk2001@cluster0.ji8obbw.mongodb.net/")
        console.log("DB Connected");
        
    }catch(err){
      console.log("Error connection",err);
    }
        
     }
    


connection()