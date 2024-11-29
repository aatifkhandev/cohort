/*
  Implement a class `Todo` having below methods
    - add(todo): adds todo to list of todos
    - remove(indexOfTodo): remove todo from list of todos
    - update(index, updatedTodo): update todo at given index
    - getAll: returns all todos
    - get(indexOfTodo): returns todo at given index
    - clear: deletes all todos

  Once you've implemented the logic, test your code by running
*/

class Todo {
  constructor() {
    this.todos = []; // Initialize an empty array to store todos
  }

  // Adds a todo to the list
  add(todo) {
    if (typeof todo !== 'string' || todo.trim() === '') {
      throw new Error("Todo must be a non-empty string");
    }
    this.todos.push(todo);
  }

  // Removes a todo by index
  remove(indexOfTodo) {
    if (indexOfTodo < 0 || indexOfTodo >= this.todos.length) {
      throw new Error("Invalid index");
    }
    this.todos.splice(indexOfTodo, 1);
  }

  // Updates a todo at the given index
  update(index, updatedTodo) {
    if (index < 0 || index >= this.todos.length) {
      throw new Error("Invalid index");
    }
    if (typeof updatedTodo !== 'string' || updatedTodo.trim() === '') {
      throw new Error("Updated todo must be a non-empty string");
    }
    this.todos[index] = updatedTodo;
  }

  // Returns all todos
  getAll() {
    return [...this.todos]; // Return a copy of the todos array
  }

  // Returns the todo at the given index
  get(indexOfTodo) {
    if (indexOfTodo < 0 || indexOfTodo >= this.todos.length) {
      throw new Error("Invalid index");
    }
    return this.todos[indexOfTodo];
  }

  // Clears all todos
  clear() {
    this.todos = [];
  }
}

// Example Usage
const todoList = new Todo();
todoList.add("Buy groceries");
todoList.add("Clean the house");
todoList.add("Pay bills");

console.log(todoList.getAll()); // ["Buy groceries", "Clean the house", "Pay bills"]

todoList.update(1, "Clean the kitchen");
console.log(todoList.get(1)); // "Clean the kitchen"

todoList.remove(2);
console.log(todoList.getAll()); // ["Buy groceries", "Clean the kitchen"]

todoList.clear();
console.log(todoList.getAll()); // []


module.exports = Todo;
