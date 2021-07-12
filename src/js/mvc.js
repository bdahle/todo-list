// model /////////////
todoList = [];

function Todo(name, isDone) {
  // this.index = todoList.length;
  this.name = name;
  this.isDone = isDone;
}

function modelAddTodo(name) {
  const newTodo = new Todo(name, false);
  todoList.push(newTodo);
  // viewAddTodo(newTodo);
  viewRenderList();
}

function modelRemoveTodo(index) {
  todoList.splice(index, 1);
  console.table(todoList);
  viewRenderList();
}
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
  // newTodoElement.setAttribute("data-index", newTodo.index);
  return newTodoElement;
}

function viewClearList() {
  todoListElement.innerHTML = "";
}

function viewRenderList() {
  viewClearList();
  todoList.forEach((todo, index) => {
    console.log("INDEX: " + index);
    viewAddTodo(todo, index);
  });
}

function viewAddTodo(newTodo, index) {
  clearInputField();

  const newTodoElement = createTodoElement(newTodo);
  console.log(index);

  newTodoElement.addEventListener("click", () => {
    modelRemoveTodo(index);
  });

  todoListElement.appendChild(newTodoElement);
}
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
modelAddTodo("Luft hunden");

/////////////////////
