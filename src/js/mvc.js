//model
todoList = [];

function modelAddTodo(name) {
  todoList.push(name);
  viewRender(name);
}

//view
function viewRender(name) {
  newTodoInput.value = "";

  const newTodo = document.createElement("div");
  newTodo.innerHTML = name;

  document.body.appendChild(newTodo);

  console.table(todoList);
}

//controller
const newTodoInput = document.getElementById("newTodoInput");
const newTodoButton = document.getElementById("newTodoButton");

newTodoButton.addEventListener("click", () => {
  modelAddTodo(newTodoInput.value);
});
