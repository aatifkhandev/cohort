function jsonMethods(jsonString) {
  console.log("Original JSON String:", jsonString);

  // Parsing JSON string to JavaScript object
  let parsedObject = JSON.parse(jsonString);
  console.log("After JSON.parse():", parsedObject);

  // Stringi-Fying JavaScript object to JSON string
  let jsonStringified = JSON.stringify(parsedObject);
  console.log("After JSON.stringify():", jsonStringified);
}

// Example Usage for JSON Methods
const sampleJSONString =
  '{"key": "value", "number": 42, "nested": {"nestedKey": "nestedValue"}}';

jsonMethods(sampleJSONString);

const users = '{"name" : "abc" , "age" : "1" , "gender" : "male"}'
console.log("The value is");


const user = JSON.parse(users)
console.log(user);


// JSON.parse()
// Converts a JSON string into a JavaScript object.


let jsonString = '{"name": "Alice", "age": 25}';
let obj = JSON.parse(jsonString);
console.log(obj.name); // Output: Alice

// JSON.stringify()
// Converts a JavaScript object into a JSON string.

let person = { name: "Bob", age: 30 };
let jsonStr = JSON.stringify(person);
console.log(jsonStr); // Output: '{"name":"Bob","age":30}'
