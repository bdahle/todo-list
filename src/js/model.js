import renderList from "./view";

todoList = [];

function Todo(name, isDone) {
  this.name = name;
  this.isDone = isDone;
}

function addTodo(name) {
  todoList.push(new Todo(name, false));
  renderList();
}

function removeTodo(index) {
  todoList.splice(index, 1);
  renderList();
}

function setChecked(index) {
  todoList[index].isDone = true;
}

function setUnChecked(index) {
  todoList[index].isDone = false;
}

export { addTodo, removeTodo, setChecked, setUnChecked };
