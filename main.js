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

eval("//model\ntodoList = [];\n\nfunction modelAddTodo(name) {\n  todoList.push(name);\n  viewRender(name);\n}\n\n//view\nfunction viewRender(name) {\n  newTodoInput.value = \"\";\n\n  const newTodo = document.createElement(\"div\");\n  newTodo.innerHTML = name;\n\n  document.body.appendChild(newTodo);\n\n  console.table(todoList);\n}\n\n//controller\nconst newTodoInput = document.getElementById(\"newTodoInput\");\nconst newTodoButton = document.getElementById(\"newTodoButton\");\n\nnewTodoButton.addEventListener(\"click\", () => {\n  modelAddTodo(newTodoInput.value);\n});\n\n\n//# sourceURL=webpack://todo-list/./src/js/mvc.js?");

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