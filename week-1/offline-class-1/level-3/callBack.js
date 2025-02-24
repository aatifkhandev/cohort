function arithmetic(a,b,type){ 
    if(type=="sum"){
        return a+b; 
    }
    else if (type=="sub"){
        return a-b;
    }
}
// console.log(arithmetic(9,7,"sum"));


function arithmetic1(a,b,type){ 
    if(type=="sum"){
        const value =sum(a,b);
        return value; 

    }
    else if (type=="sub"){
        const value =sub(a,b);
        return value; 
    }
}

function sum(a,b){
    return a+b;
}
function sub(a,b){
    return a-b;
}
const ans = arithmetic1(9,7,"sub");
// console.log(ans);


function operators(a,b,arithmeticOperations){ // passing functions in arguments
    const value = arithmeticOperations(a,b)
    return value;
}
console.log(operators(1,2,sub));

