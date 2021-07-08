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
const newTodoButton = document.getElementById("newTodo");

newTodoButton.addEventListener("click", () => {
  modelAddTodo("vann plantene");
});
