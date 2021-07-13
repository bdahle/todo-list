import { renderList } from "./view";

let todoList = [];

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

function setDoneStatus(index, status) {
  todoList[index].isDone = status;
}

export { todoList, addTodo, removeTodo, setDoneStatus };
