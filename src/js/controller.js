import { modelAddTodo } from "./model";

const newTodoInput = document.getElementById("newTodoInput");
const newTodoButton = document.getElementById("newTodoButton");

newTodoButton.addEventListener("click", controllerAddTodo);

function controllerAddTodo() {
  modelAddTodo(newTodoInput.value);
}

modelAddTodo("Vann plantene");
modelAddTodo("Ta ut søppelet");
modelAddTodo("Luft hunden");
