/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/js/mvc.js":
/*!***********************!*\
  !*** ./src/js/mvc.js ***!
  \***********************/
/***/ (() => {

eval("// model /////////////\ntodoList = [];\n\nfunction Todo(name, isDone) {\n  this.name = name;\n  this.isDone = isDone;\n}\n\nfunction modelAddTodo(name) {\n  const newTodo = new Todo(name, false);\n  todoList.push(newTodo);\n  viewRenderList();\n}\n\nfunction modelRemoveTodo(index) {\n  todoList.splice(index, 1);\n  console.table(todoList);\n  viewRenderList();\n}\n/////////////////////\n//\n//\n//\n// view /////////////\nconst todoListElement = document.getElementById(\"todoList\");\n\nfunction clearInputField() {\n  newTodoInput.value = \"\";\n}\n\nfunction createTodoElement(newTodo) {\n  const newTodoElement = document.createElement(\"div\");\n  newTodoElement.innerHTML = newTodo.name;\n  return newTodoElement;\n}\n\nfunction viewClearList() {\n  todoListElement.innerHTML = \"\";\n}\n\nfunction viewRenderList() {\n  viewClearList();\n  todoList.forEach((todo, index) => {\n    viewAddTodo(todo, index);\n  });\n}\n\nfunction viewAddTodo(newTodo, index) {\n  clearInputField();\n\n  const newTodoElement = createTodoElement(newTodo);\n\n  newTodoElement.addEventListener(\"click\", () => {\n    modelRemoveTodo(index);\n  });\n\n  todoListElement.appendChild(newTodoElement);\n}\n/////////////////////\n//\n//\n//\n// controller /////////////\nconst newTodoInput = document.getElementById(\"newTodoInput\");\nconst newTodoButton = document.getElementById(\"newTodoButton\");\n\nnewTodoButton.addEventListener(\"click\", controllerAddTodo);\n\nfunction controllerAddTodo() {\n  modelAddTodo(newTodoInput.value);\n}\n\nmodelAddTodo(\"Vann plantene\");\nmodelAddTodo(\"Ta ut søppelet\");\nmodelAddTodo(\"Luft hunden\");\n\n/////////////////////\n\n\n//# sourceURL=webpack://todo-list/./src/js/mvc.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/js/mvc.js"]();
/******/ 	
/******/ })()
;