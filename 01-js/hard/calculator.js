/*
  Implement a class `Calculator` having below methods
    - initialise a result variable in the constructor and keep updating it after every arithmetic operation
    - add: takes a number and adds it to the result
    - subtract: takes a number and subtracts it from the result
    - multiply: takes a number and multiply it to the result
    - divide: takes a number and divide it to the result
    - clear: makes the `result` variable to 0
    - getResult: returns the value of `result` variable
    - calculate: takes a string expression which can take multi-arithmetic operations and give its result
      example input: `10 +   2 *    (   6 - (4 + 1) / 2) + 7`
      Points to Note: 
        1. the input can have multiple continuous spaces, you're supposed to avoid them and parse the expression correctly
        2. the input can have invalid non-numerical characters like `5 + abc`, you're supposed to throw error for such inputs

  Once you've implemented the logic, test your code by running
*/

class Calculator {
  constructor(){
    this.result=0;
  }
  add(num){
    this.result+=num;
  }
  sub(num){
    this.result-=num;
  }
  mul(num){
    this.result*=num;
  }
  div(num) {
    if(num === 0) {
      throw new Error('Cannot divide by zero');
    }
    this.result /= num;
  }
  clear(){
    this.result=0;
  }
  getResult() {
    return this.result;
  }
  calculate(e){
    // Evaluates the expression and stores the result in this.result
    try{
      this.result = eval(e);
    }catch(err){
      throw new Error('Invalid expression');
    }
    // Throws error if result is Infinity
    if(this.result === Infinity){
      throw new Error('Invalid expression');
    }
    this.result = Math.round(this.result * 100) / 100;
    return this.result;
  }
}
const calc = new Calculator();
console.log(calc.calculate("10 + 2 * (6 - (4 + 1) / 2) + 7")); // 20
console.log(calc.calculate("5 + 3 * 2")); // 11
console.log(calc.calculate("2+3-5"));


module.exports = Calculator;
