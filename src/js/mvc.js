//model
todoList = [];

function modelAddTodo(name) {
  todoList.push(name);
  viewRender();
}

//view
function viewRender() {
  console.table(todoList);
}

//controller
const newTodoInput = document.getElementById("newTodoInput");
const newTodoButton = document.getElementById("newTodoButton");

newTodoButton.addEventListener("click", () => {
  modelAddTodo(newTodoInput.value);
});
