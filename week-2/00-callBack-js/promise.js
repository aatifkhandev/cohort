// let p = new Promise((resolve,reject)=>{
//     console.log("promise");
//     resolve(123)
    
// })
// console.log(p);

function getData(dataId){
    return new Promise((res,rej)=>{
        setTimeout(()=>{
            console.log("data",dataId);
            res("success")
            
            
        },3000)
    })
}
// getData(123).then((res)=>{
//     console.log(res);
//     getData(456).then((res)=>{
//         console.log(res);
        
//     })
    
// })

getData(123).then((res)=>{
    console.log(res);
    return getData(456)
}).then((res)=>{
    console.log(res);
    
})