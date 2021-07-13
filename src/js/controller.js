import "../css/styles.css";
import { addTodo } from "./model";

const newTodoInput = document.getElementById("newTodoInput");
const newTodoButton = document.getElementById("newTodoButton");

newTodoButton.addEventListener("click", formAddTodo);

function formAddTodo() {
  addTodo(newTodoInput.value);
}

addTodo("Vann plantene");
addTodo("Ta ut søppelet");
addTodo("Luft hunden");
