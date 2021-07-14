import { renderList } from "./view";

let todoList = [];

function Todo(project, name, isDone, isExpanded, dueDate) {
  this.project = project;
  this.name = name;
  this.isDone = isDone;
  this.isExpanded = isExpanded;
  this.dueDate = dueDate;
}

function addTodo(project, name, dueDate) {
  todoList.push(new Todo(project, name, false, false, dueDate));
  renderList();
  console.table(todoList);
}

function removeTodo(index) {
  todoList.splice(index, 1);
  renderList();
}

function setDoneStatus(index, status) {
  todoList[index].isDone = status;
}

export { todoList, addTodo, removeTodo, setDoneStatus };
