import { modelRemoveTodo } from "./model";

const todoListElement = document.getElementById("todoList");

function clearInputField() {
  newTodoInput.value = "";
}

function createTodoElement(newTodo, index) {
  const newTodoElement = document.createElement("div");
  const toggleButton = document.createElement("button");
  toggleButton.innerHTML = "Toggle";
  toggleButton.addEventListener("click", () => {
    newTodo.isDone = !newTodo.isDone;
    viewRenderList();
  });
  const todoName = document.createElement("p");
  todoName.innerHTML = newTodo.name + " " + newTodo.isDone;
  const removeButton = document.createElement("button");
  removeButton.innerHTML = "DEL";
  removeButton.addEventListener("click", () => {
    modelRemoveTodo(index);
  });
  newTodoElement.appendChild(toggleButton);
  newTodoElement.appendChild(todoName);
  newTodoElement.appendChild(removeButton);

  return newTodoElement;
}

function viewClearList() {
  todoListElement.innerHTML = "";
}

function viewRenderList() {
  viewClearList();
  todoList.forEach((todo, index) => {
    viewAddTodo(todo, index);
  });
}

function viewAddTodo(newTodo, index) {
  clearInputField();

  const newTodoElement = createTodoElement(newTodo, index);

  todoListElement.appendChild(newTodoElement);
}

export default viewRenderList;
