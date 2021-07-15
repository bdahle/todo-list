import { currentProject } from "../controller";
import { todoList, addTodo, removeTodo, setDoneStatus } from "../model";

const todoListElement = document.getElementById("todoList");

function setUpPage() {
  const newTodoInput = document.getElementById("newTodoInput");
  const newTodoButton = document.getElementById("newTodoButton");
  const newTodoDueDate = document.getElementById("newTodoDueDate");

  newTodoButton.addEventListener("click", function () {
    if (newTodoInput.value !== "")
      addTodo(currentProject, newTodoInput.value, newTodoDueDate.value);
  });
}

function clearInputField() {
  newTodoInput.value = "";
}

function createCheckBox(newTodo, index) {
  const checkbox = document.createElement("input");
  checkbox.type = "checkbox";
  checkbox.id = "label" + index;
  checkbox.checked = newTodo.isDone;
  checkbox.addEventListener("change", function () {
    setDoneStatus(index, this.checked);
  });
  return checkbox;
}

function createLabel(newTodo, index) {
  const label = document.createElement("label");
  label.setAttribute("for", "label" + index);
  label.classList.add("unselectable");
  label.innerHTML = newTodo.name + " innen " + newTodo.dueDate;
  return label;
}

function createDeleButton(index) {
  const deleteButton = document.createElement("button");
  deleteButton.innerHTML = "Slett";
  deleteButton.addEventListener("click", () => {
    removeTodo(index);
    renderTodoList();
  });
  return deleteButton;
}

function createTodoElement(newTodo, index) {
  const newTodoElement = document.createElement("div");
  newTodoElement.classList.add("todo");
  if (newTodo.isDone) newTodoElement.classList.add("done");
  const checkbox = createCheckBox(newTodo, index);
  const label = createLabel(newTodo, index);
  const removeButton = createDeleButton(index);

  newTodoElement.appendChild(checkbox);
  newTodoElement.appendChild(label);
  newTodoElement.appendChild(removeButton);

  return newTodoElement;
}

function clearList() {
  todoListElement.innerHTML = "";
}

function renderTodoList() {
  clearList();
  const currentProjectTodos = todoList.filter(
    (todo) => todo.project === currentProject
  );
  currentProjectTodos.forEach((todo, index) => {
    addTodoElement(todo, index);
  });
}

function addTodoElement(newTodo, index) {
  clearInputField();

  const newTodoElement = createTodoElement(newTodo, index);
  todoListElement.appendChild(newTodoElement);
}

export { renderTodoList, setUpPage };
