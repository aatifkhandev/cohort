arr = [1,2,3,4,5]

let mapAns = arr.map(function(val){
   return val*=2
})
console.log(mapAns);

let filterAns = arr.filter((val)=>{
  return val%2==0
})
console.log(filterAns);
