import viewRenderList from "./view";

todoList = [];

function Todo(name, isDone) {
  this.name = name;
  this.isDone = isDone;
}

function modelAddTodo(name) {
  todoList.push(new Todo(name, false));
  viewRenderList();
}

function modelRemoveTodo(index) {
  todoList.splice(index, 1);
  viewRenderList();
}

export { modelAddTodo, modelRemoveTodo };
