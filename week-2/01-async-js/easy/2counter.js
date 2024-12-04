// Without using setInterval, try to code a counter in Javascript.
let count=0;
function counter(){
    if(count<10){

        count+=1;
        console.log(count);
        setTimeout(counter,1000);
    }
    
}
counter()
