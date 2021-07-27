import { format, formatDistanceToNow, parse } from "date-fns";
import { currentProject } from "../controller";
import { todoList, addTodo, removeTodo, setDoneStatus } from "../model";

const todoListElement = document.getElementById("todoList");

function setUpPage() {
  const newTodoInput = document.getElementById("newTodoInput");
  const newTodoButton = document.getElementById("newTodoButton");
  const newTodoDueDate = document.getElementById("newTodoDueDate");

  newTodoButton.addEventListener("click", function () {
    if (newTodoInput.value !== "") {
      const date = parse(newTodoDueDate.value, "yyyy-MM-dd", new Date());
      // const formatted = format(date, "PP");
      const formatted = formatDistanceToNow(date);

      console.log(formatted);
      addTodo(currentProject, newTodoInput.value, formatted);
    }
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
    renderTodoList();
  });
  return checkbox;
}

function createLabel(newTodo, index) {
  const label = document.createElement("label");
  label.setAttribute("for", "label" + index);
  label.classList.add("unselectable");
  label.innerHTML = newTodo.name + " (" + newTodo.dueDate + ")";
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

function createAndAppendElements(element, newTodo, index) {
  const checkbox = createCheckBox(newTodo, index);
  const label = createLabel(newTodo, index);
  const removeButton = createDeleButton(index);

  element.appendChild(checkbox);
  element.appendChild(label);
  element.appendChild(removeButton);
}

function createTodoElement(newTodo, index) {
  const newTodoElement = document.createElement("div");

  newTodoElement.classList.add("todo");
  if (newTodo.isDone) newTodoElement.classList.add("done");
  if (newTodo.project !== currentProject)
    newTodoElement.classList.add("hidden");

  createAndAppendElements(newTodoElement, newTodo, index);

  return newTodoElement;
}

function clearList() {
  todoListElement.innerHTML = "";
}

function renderTodoList() {
  clearList();
  todoList.forEach((todo, index) => {
    addTodoElement(todo, index);
  });
}

function addTodoElement(newTodo, index) {
  clearInputField();

  const newTodoElement = createTodoElement(newTodo, index);
  todoListElement.appendChild(newTodoElement);
}

export { renderTodoList, setUpPage };
