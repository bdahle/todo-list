import { removeTodo } from "./model";

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
    renderList();
  });
  const todoName = document.createElement("p");
  todoName.innerHTML = newTodo.name + " " + newTodo.isDone;
  const removeButton = document.createElement("button");
  removeButton.innerHTML = "DEL";
  removeButton.addEventListener("click", () => {
    removeTodo(index);
  });
  newTodoElement.appendChild(toggleButton);
  newTodoElement.appendChild(todoName);
  newTodoElement.appendChild(removeButton);

  return newTodoElement;
}

function clearList() {
  todoListElement.innerHTML = "";
}

function renderList() {
  clearList();
  todoList.forEach((todo, index) => {
    addTodo(todo, index);
  });
}

function addTodo(newTodo, index) {
  clearInputField();

  const newTodoElement = createTodoElement(newTodo, index);

  todoListElement.appendChild(newTodoElement);
}

export default renderList;
