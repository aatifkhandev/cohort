//  Fetch API - It is a Web API provided by the browser. It is used to make HTTP requests to the server.

// 1. using random user API

// fetch('https://randomuser.me/api').then(response=>{
//     return response.json()
// }).then(data=>{
//     console.log(data);
    
// }).catch(error=>{
//     console.log('Error:', error);
// })

// function abc(){
//     let a  = new Promise((resolve,reject)=>{
//     fetch('https://randomuser.me/api').then(response=>{
//         if(!response.ok){
//             throw new Error(`HTTP error! Status: ${response.status}`)
//         }
//         return response.json()
//     }).then(data=>resolve(data))
//     .catch(error=>reject(error))
//     })
//    return a;
// }

// abc().then(data=>console.log(data)).catch(error=>console.log(error))

 async function fetchRandomUser(){
    try{
        let response = await fetch('https://randomuser.me/api');
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
          }
          let data = await response.json()
          return data;
    }catch(error){
    throw error
    }
 }

 fetchRandomUser()
  .then(data => console.log(data))
  .catch(error => console.log('Error:', error));