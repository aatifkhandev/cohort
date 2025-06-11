// function api(){
//  return new Promise((res,rej)=>{
//     setTimeout(() => {
//         console.log("Data is 123");
        
//     }, 3000);
//  })
// }

// async function getData(){
//     await api()
// }

// getData()
// getData()


function getData(dataId){
    return new Promise((res,rej)=>{
        setTimeout(()=>{
            console.log("data",dataId);
            res("success")
            
            
        },3000)
    })
}

async function getAll(){
    await getData(123)
    await getData(456)
    await getData(789)
}

// getAll()


// (async()=>{
//     await getData(123)
//     await getData(456)
//     await getData(789)
// })() //this is immediately invoked function - iife