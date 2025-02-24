function arithmetic(a,b,type){ // In this function we are passing function as an argument
    if(type=="sum"){
        return a+b; 
    }
    else if (type=="sub"){
        return a-b;
    }
}
console.log(arithmetic(9,7,"sum"));
