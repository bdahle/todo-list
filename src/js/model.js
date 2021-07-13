import { renderList } from "./view";

let todoList = [];

function Todo(name, isDone, dueDate, isExpanded) {
  this.name = name;
  this.isDone = isDone;
  this.dueDate = dueDate;
  this.isExpanded = isExpanded;
}

function addTodo(name) {
  todoList.push(new Todo(name, false, false));
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
