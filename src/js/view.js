import { addTodo, removeTodo, setDoneStatus } from "./model";

const todoListElement = document.getElementById("todoList");

function setUpPage() {
  const newTodoInput = document.getElementById("newTodoInput");
  const newTodoButton = document.getElementById("newTodoButton");

  newTodoButton.addEventListener("click", function () {
    addTodo(newTodoInput.value);
  });
}

function clearInputField() {
  newTodoInput.value = "";
}

function createTodoElement(newTodo, index) {
  const newTodoElement = document.createElement("div");
  const checkbox = document.createElement("input");
  checkbox.type = "checkbox";
  checkbox.id = "label" + index;
  checkbox.checked = newTodo.isDone;
  checkbox.addEventListener("change", function () {
    setDoneStatus(index, this.checked);
    renderList();
  });
  const todoName = document.createElement("label");
  todoName.setAttribute("for", "label" + index);
  todoName.classList.add("unselectable");
  todoName.innerHTML = newTodo.name + " " + newTodo.isDone;
  const removeButton = document.createElement("button");
  removeButton.innerHTML = "DEL";
  removeButton.addEventListener("click", () => {
    removeTodo(index);
  });
  newTodoElement.appendChild(checkbox);
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
    addTodoWithIndex(todo, index);
  });
}

function addTodoWithIndex(newTodo, index) {
  clearInputField();

  const newTodoElement = createTodoElement(newTodo, index);

  todoListElement.appendChild(newTodoElement);
}

export { renderList, setUpPage };
