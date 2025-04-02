// const value = "rookie aatif";
// const ans = value.slice(7,12);
// console.log(ans)


// function splitString(str, separator) {
//     console.log("Original String:", str);
//     console.log("After split:", str.split(separator));
//   }
//   splitString("Hello World", " ");
  
//   const string = "this, is , a , new , file";
//   const value = string.split(",")
//   console.log(value);
  
// function trimString(str) {
//     console.log("Original String:", str);
//     console.log("After trim:", str.trim());
//   }
//   trimString(" Hello World ");


// function explainParseInt(value) {
//     console.log("Original Value:", value);
//     let result = parseInt(value);
//     console.log("After parseInt:", result);
//   }
// // Example Usage for parseInt
// explainParseInt("42");
// explainParseInt("42px");
// explainParseInt("3.14");  



// function explainParseFloat(value) {
//     console.log("Original Value:", value);
//     let result = parseFloat(value);
//     console.log("After parseFloat:", result);
//   }
  
//   // Example Usage for parseFloat
//   explainParseFloat("3.14");
//   explainParseFloat("42");
//   explainParseFloat("42px");
  
// function pushExample(arr, element) {
//     console.log("Original Array:", arr);
  
//     arr.push(element);
//     console.log("After push:", arr);
//   }
//   pushExample([1, 2, 3], 4);

// function shiftExample(arr) {
//     console.log("Original Array:", arr);
  
//     arr.shift();
//     console.log("After shift:", arr);
//   }
//   shiftExample([1, 2, 3]);



//   let arr1=[1,2,3,4];
//   let push =arr1.push(5); //pushes
//   console.log(arr1);
//   let pop=arr1.pop();//pop
//   console.log(arr1);
//   let shift = arr1.shift(); //remove from front
//   console.log(arr1);
//   let unshift = arr1.unshift(0); //add from front
//   console.log(arr1);


// let initialArray =[1,2,3] - concat
// let secondArray=[4,5,6]

// console.log(initialArray.concat(secondArray));


// function forEachExample(arr) {
//     console.log("Original Array:", arr);
  
//     arr.forEach(function(item, index) {
//       console.log(item, index);
//     });
//   }
//   forEachExample([1, 2, 3]);

// function forEachExample(arr){
//  arr.forEach((item,index)=>{
//     console.log(item,index);
    
//  })
// }


// forEachExample([1,2,3])



// function log(n){
// console.log(n)
// }


// const array=[1,2,3,4,5];
// array.forEach((log)=>{
//     console.log(log);
    
// })
 
// function mapExample(arr) {
//     console.log("Original Array:", arr);
  
//     let newArr = arr.map(function(item) {
//       return item * 2;
//     });
//     console.log("After map:", newArr);
//   }
//   mapExample([1, 2, 3]);


//   let mapArray =[1,2,3,4,5];

//   let newValue =mapArray.map((item)=>{
//     return item*5;
//   })
//   console.log(newValue);
  
//   let oddArray=[1,2,3,4,5];
     
//   let ansArray = oddArray.filter((item)=>{
//     return item%2!=0;
    
//   })
//   console.log(ansArray);
  


// function findExample(arr) {
//     console.log("Original Array:", arr);
  
//     let found = arr.find(function(item) {
//       return item > 3;
//     });
//     console.log("After find:", found);
//   }
//   findExample([1, 2, 3, 4, 5]);


// function sortExample(arr) {
//     console.log("Original Array:", arr);
  
//     arr.sort(function(a, b) {
//       return a - b;
//     });
//     console.log("After sort:", arr);
//   }
//   sortExample([5, 2, 3, 4, 1]);

//   let sortArray=[2,5,7,8,9,1,3,4]
//   let ans=sortArray.sort(()=>{
//      return sortArray
//   })
//   console.log(sortArray);
  