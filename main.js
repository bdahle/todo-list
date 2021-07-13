/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/js/controller.js":
/*!******************************!*\
  !*** ./src/js/controller.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./model */ \"./src/js/model.js\");\n\n\nconst newTodoInput = document.getElementById(\"newTodoInput\");\nconst newTodoButton = document.getElementById(\"newTodoButton\");\n\nnewTodoButton.addEventListener(\"click\", formAddTodo);\n\nfunction formAddTodo() {\n  (0,_model__WEBPACK_IMPORTED_MODULE_0__.addTodo)(newTodoInput.value);\n}\n\n(0,_model__WEBPACK_IMPORTED_MODULE_0__.addTodo)(\"Vann plantene\");\n(0,_model__WEBPACK_IMPORTED_MODULE_0__.addTodo)(\"Ta ut søppelet\");\n(0,_model__WEBPACK_IMPORTED_MODULE_0__.addTodo)(\"Luft hunden\");\n\n\n//# sourceURL=webpack://todo-list/./src/js/controller.js?");

/***/ }),

/***/ "./src/js/model.js":
/*!*************************!*\
  !*** ./src/js/model.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"addTodo\": () => (/* binding */ addTodo),\n/* harmony export */   \"removeTodo\": () => (/* binding */ removeTodo),\n/* harmony export */   \"setChecked\": () => (/* binding */ setChecked),\n/* harmony export */   \"setUnChecked\": () => (/* binding */ setUnChecked)\n/* harmony export */ });\n/* harmony import */ var _view__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./view */ \"./src/js/view.js\");\n\n\ntodoList = [];\n\nfunction Todo(name, isDone) {\n  this.name = name;\n  this.isDone = isDone;\n}\n\nfunction addTodo(name) {\n  todoList.push(new Todo(name, false));\n  (0,_view__WEBPACK_IMPORTED_MODULE_0__.default)();\n}\n\nfunction removeTodo(index) {\n  todoList.splice(index, 1);\n  (0,_view__WEBPACK_IMPORTED_MODULE_0__.default)();\n}\n\nfunction setChecked(index) {\n  todoList[index].isDone = true;\n}\n\nfunction setUnChecked(index) {\n  todoList[index].isDone = false;\n}\n\n\n\n\n//# sourceURL=webpack://todo-list/./src/js/model.js?");

/***/ }),

/***/ "./src/js/view.js":
/*!************************!*\
  !*** ./src/js/view.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./model */ \"./src/js/model.js\");\n\n\nconst todoListElement = document.getElementById(\"todoList\");\n\nfunction clearInputField() {\n  newTodoInput.value = \"\";\n}\n\nfunction createTodoElement(newTodo, index) {\n  const newTodoElement = document.createElement(\"div\");\n  //   const toggleButton = document.createElement(\"button\");\n  //   toggleButton.innerHTML = \"Toggle\";\n  //   toggleButton.addEventListener(\"click\", () => {\n  //     newTodo.isDone = !newTodo.isDone;\n  //     renderList();\n  //   });\n  const checkbox = document.createElement(\"input\");\n  checkbox.type = \"checkbox\";\n  checkbox.id = \"label\" + index;\n  checkbox.checked = newTodo.isDone;\n  checkbox.addEventListener(\"change\", function () {\n    if (this.checked) {\n      (0,_model__WEBPACK_IMPORTED_MODULE_0__.setChecked)(index);\n    } else {\n      (0,_model__WEBPACK_IMPORTED_MODULE_0__.setUnChecked)(index);\n    }\n  });\n  const todoName = document.createElement(\"label\");\n  todoName.setAttribute(\"for\", \"label\" + index);\n  todoName.innerHTML = newTodo.name + \" \" + newTodo.isDone;\n  const removeButton = document.createElement(\"button\");\n  removeButton.innerHTML = \"DEL\";\n  removeButton.addEventListener(\"click\", () => {\n    (0,_model__WEBPACK_IMPORTED_MODULE_0__.removeTodo)(index);\n  });\n  //   newTodoElement.appendChild(toggleButton);\n  newTodoElement.appendChild(checkbox);\n  newTodoElement.appendChild(todoName);\n  newTodoElement.appendChild(removeButton);\n\n  return newTodoElement;\n}\n\nfunction clearList() {\n  todoListElement.innerHTML = \"\";\n}\n\nfunction renderList() {\n  clearList();\n  todoList.forEach((todo, index) => {\n    addTodo(todo, index);\n  });\n}\n\nfunction addTodo(newTodo, index) {\n  clearInputField();\n\n  const newTodoElement = createTodoElement(newTodo, index);\n\n  todoListElement.appendChild(newTodoElement);\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (renderList);\n\n\n//# sourceURL=webpack://todo-list/./src/js/view.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/js/controller.js");
/******/ 	
/******/ })()
;