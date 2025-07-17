// const express = require('express')
// const app = express()

// let numberOfRequest = 0

// function calculateRequest(req,res,next){
// numberOfRequest++
// console.log(numberOfRequest);

// next()
// }
// app.use(calculateRequest)
// app.get('/count',(req,res)=>{
//     res.send("yes")
// })

// app.get('/counter',(req,res)=>{
// res.send("yes2")
// })
// app.listen(3001,()=>{
//     console.log("starting at 3001");
    
// })

const z = require('zod')

function validate(arr){
    const schema = z.array(z.number());
    const response = schema.safeParse(arr);
    console.log(response);
    
}

validate([1,5,6])



// {
// email -> string -> should look like email
// password -> should have 8 min characters
// }


function validateObject(obj){
    const schema1 =  z.object({
        email : z.string().email(),
        password:z.string().min(8)
    })
    const response  = schema1.safeParse(obj)
    console.log(response);
    

}

let newObj ={
    email:"aatifkhan2001@gmail.com",
    password :"gibbirish"
}

validateObject(newObj);


//we can use in http server as 

app.post('/login',(req,res)=>{
const response = validate(req.body);
if(!response.success){
res.json({
    msg : "your inputs are invalid"
})
}
return
})