// Axios API - It is a library used to make HTTP requests to the server. It is a promise-based library and developer-friendly.
// to install - npm install axios / use CDN in HTML
const axios = require('axios');
// axios.get(`https://randomuser.me/api`)
//     .then(response => {
//         console.log(response.data);
//     })
//     .catch(error => {
//         console.log('Error:', error);
//     });



async function fetchRandomUser1(){
    try{
        const {data} =  await axios.get('https://randomuser.me/api')
        console.log(data);
        
    }catch(error){
        console.error('Error fetching data:', error.message||error);
    }
}

fetchRandomUser1()