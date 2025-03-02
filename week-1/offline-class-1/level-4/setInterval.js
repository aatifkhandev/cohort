//  setInterval - It is a Web API provided by the browser. It schedules a task to be put on the event queue after a given amount of time. 
// It takes function and it keeps on repeating the task after the given amount of time.

let cnt = 1
 const interval = setInterval(()=>{
    console.log("Hi there in setInterval");
    cnt++;

    if(cnt>5){
  clearInterval(interval)
    }
},1000)