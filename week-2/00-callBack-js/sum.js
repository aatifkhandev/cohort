function sum(a,b){
    return a+b;
}

function sumCall(x,y,sum){
    return sum(x,y);
}

console.log(sumCall(1,2,sum));
