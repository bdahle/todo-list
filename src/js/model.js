import { renderList } from "./view";

const todoList = [];
const projectList = [];

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
}

function setDoneStatus(index, status) {
  todoList[index].isDone = status;
}

function addProject(name) {
  projectList.push(name);
}

export { todoList, addTodo, removeTodo, setDoneStatus, addProject };
