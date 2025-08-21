const mongoose = require('mongoose')

mongoose.connect("mongodb+srv://aatifk:aatifk2001@cluster0.ji8obbw.mongodb.net/")

const User = mongoose.model('Users',{name:String,email:String,password:String});

const user = new User({name:"aatif",
    email:"aatifkhan2001@gmail.com",
    password:"aatifk2001"
});

user.save()