// import { counter } from "../easy/2counter"


function time(){
    console.log("clock has started");
    
   
setInterval(()=>{
    console.clear()
    const currentDate = new Date();
    let hours = currentDate.getHours()
    const minutes = currentDate.getMinutes()
    const seconds  = currentDate.getSeconds()
    let ampm = hours >= 12 ? 'PM' : 'AM'; // Set AM/PM based on hour
hours = hours % 12; // Convert to 12-hour format
hours = hours ? hours : 12; // If it's 0, change it to 12 (midnight case)
console.log(`${hours.toString().padStart(2,'0')}:${minutes.toString().padStart(2,'0')}:${seconds.toString().padStart(2,'0')} ${ampm}`);

},1000)




}

time()