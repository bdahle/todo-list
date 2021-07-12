// model /////////////
todoList = [];

function Todo(name, isDone) {
  this.index = todoList.length;
  this.name = name;
  this.isDone = isDone;
}

function modelAddTodo(name) {
  const newTodo = new Todo(name, false);
  todoList.push(newTodo);
  console.log(newTodo.name);
  const index = todoList.length - 1;
  viewAddTodo(newTodo);
}

function modelRemoveTodo(index) {}
/////////////////////
//
//
//
// view /////////////
const todoListElement = document.getElementById("todoList");

function clearInputField() {
  newTodoInput.value = "";
}

function createTodoElement(newTodo) {
  const newTodoElement = document.createElement("div");
  newTodoElement.innerHTML = newTodo.name;
  newTodoElement.setAttribute("data-index", newTodo.index);
  return newTodoElement;
}

function viewAddTodo(newTodo) {
  clearInputField();

  const newTodoElement = createTodoElement(newTodo);

  newTodoElement.addEventListener("click", () => {
    console.log(newTodo.index);
    modelRemoveTodo(newTodo.index);
  });

  todoListElement.appendChild(newTodoElement);
}

function viewRemoveTodo() {}
/////////////////////
//
//
//
// controller /////////////
const newTodoInput = document.getElementById("newTodoInput");
const newTodoButton = document.getElementById("newTodoButton");

newTodoButton.addEventListener("click", controllerAddTodo);

function controllerAddTodo() {
  modelAddTodo(newTodoInput.value);
}

modelAddTodo("Vann plantene");
modelAddTodo("Ta ut søppelet");

/////////////////////
