import { removeTodo, setChecked, setUnChecked } from "./model";

const todoListElement = document.getElementById("todoList");

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
    if (this.checked) {
      setChecked(index);
    } else {
      setUnChecked(index);
    }
  });
  const todoName = document.createElement("label");
  todoName.setAttribute("for", "label" + index);
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
    addTodo(todo, index);
  });
}

function addTodo(newTodo, index) {
  clearInputField();

  const newTodoElement = createTodoElement(newTodo, index);

  todoListElement.appendChild(newTodoElement);
}

export default renderList;
