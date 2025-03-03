// class student{
//     constructor(name,marks,standard){
//         this.name=name;
//         this.marks=marks;
//         this.standard=standard;
//     }
//     printDetails() {
//         console.log(`Name: ${this.name}, Marks: ${this.marks}, Standard: ${this.standard}`);
//     }
// }

// // let aatif = new student("aatif","90","10");

// // aatif.printDetails()

// //static method



// class Student {
//     constructor(name, marks, standard) {
//         this.name = name;
//         this.marks = marks;
//         this.standard = standard;
//     }
//     printDetails(){
//         console.log(`Name : is ${this.name}, Marks are ${this.marks} , Standard is ${this.standard}`);
        
//     }
    
//     static schoolName() {
//         return "ABC High School";
//     }
// }

// // Usage
// console.log(Student.schoolName()); // Outputs: ABC High School
// let aatif = new Student("aatif","90","10")
// aatif.printDetails()


// const currentDate = new Date();

// console.log(currentDate.getDate());



// function calculateSum(){
//     let sum=0;
//     for(let i=0;i<10000000;i++){
//         sum+=i;
//     }
//     return sum;
// }

// const beforeDate = new Date();
// const beforeTime = beforeDate.getTime();

// calculateSum();

// const afterDate = new Date();
// const afterTime = afterDate.getTime();



// console.log("The time taken to execute a program is ", beforeTime-afterTime);


// const user={
//     name:"aatif",
//     age:"21",
//     place:"hyd"
// }

// const final = JSON.stringify(user);
// console.log(final);




// function mathMethods(value) {
//     console.log("Original Value:", value);
  
//     let rounded = Math.round(value);
//     console.log("After round():", rounded);
  
//     let ceiling = Math.ceil(value);
//     console.log("After ceil():", ceiling);
  
//     let flooring = Math.floor(value);
//     console.log("After floor():", flooring);
  
//     let randomValue = Math.random();
//     console.log("After random():", randomValue);
  
//     let maxValue = Math.max(5, 10, 15);
//     console.log("After max():", maxValue);
  
//     let minValue = Math.min(5, 10, 15);
//     console.log("After min():", minValue);
  
//     let powerOfTwo = Math.pow(value, 2);
//     console.log("After pow():", powerOfTwo);
  
//     let squareRoot = Math.sqrt(value);
//     console.log("After sqrt():", squareRoot);
//   }
  
//   // Example Usage for Math Methods
//   mathMethods(4.56);
//   mathMethods(9);
//   mathMethods(25);
  

// const sampleObject = {
//     key1: "value1",
//     key2: "value2",
//     key3: "value3",
//   };


//   function objectMethods(obj) {
//     console.log("Original Object:", sampleObject);

//     let keys = Object.keys(obj);
//     console.log("After Object.keys():", keys);

//     let values = Object.values(obj);
//   console.log("After Object.values():", values);
//   }  

//   objectMethods(sampleObject)


// function sum(n){
//     let sum=0;
//     for(let i=0;i<=n;i++){
//         sum+=i;
//     }
//     return sum;
// }
// console.log(sum(10));


// function cube(n){
//     return n*n*n;
// }

// function sumOfCube(a,b){
//     const value1 =cube(a);
//     const value2 =cube(b);
//     return value1+value2;
// }
// console.log(sumOfCube(2,3));

// function square(n){
//     return n*n;
// }
// function cube(n){
//     return n*n*n;
// }

// function callSomething(a,b,fn){
//     const value1=fn(a);
//     const value2=fn(b);
//     return value1+value2;
// }
// console.log(callSomething(1,4,square));




function findSum(n) {
    let ans = 0;
    for (let i = 0; i<n; i++) {
      ans += i;
    }
    return ans;
  }
  
  function findSumTill100() {
    const sum= findSum(100);
    console.log("sum is ",sum);
    
    
  }
  
  setTimeout(findSumTill100, 1000)
  console.log("hello world");