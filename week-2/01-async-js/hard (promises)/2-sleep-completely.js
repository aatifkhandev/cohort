/*
 * Write a function that halts the JS thread (make it busy wait) for a given number of milliseconds.
 * During this time the thread should not be able to do anything else.
 * the function should return a promise just like before
 */

function sleep(milliseconds) {
    return new Promise((resolve,reject)=>{
        let start = Date.now()
        while(Date.now()-start<milliseconds){
       
    }
    resolve();
    })
}

// console.log("Start");
// sleep(2000).then(() => console.log("Done"));
// console.log("End");


module.exports = sleep;
