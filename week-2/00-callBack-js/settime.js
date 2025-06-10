// console.log("1");

// console.log("2");

// function greet(){
//     console.log("greet");
    
// }

// setTimeout(()=>{
//     console.log('3');
    
// },2000)

// setTimeout(greet,5000)

function getData1(dataId,getNextData){
    
 setTimeout(()=>{
    console.log("Data is :",dataId);
    
    if(getNextData){
        getNextData()
    }
 },2000);
}

getData1(123,()=>{
    getData1(456,()=>{
        getData1(789)
    })
})

