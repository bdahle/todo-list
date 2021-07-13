/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => {
  // webpackBootstrap
  /******/ var __webpack_modules__ = {
    /***/ "./src/js/controller.js":
      /*!******************************!*\
  !*** ./src/js/controller.js ***!
  \******************************/
      /***/ (
        __unused_webpack_module,
        __webpack_exports__,
        __webpack_require__
      ) => {
        eval(
          '__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _css_styles_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../css/styles.css */ "./src/css/styles.css");\n/* harmony import */ var _view__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./view */ "./src/js/view.js");\n\n\n\n(0,_view__WEBPACK_IMPORTED_MODULE_1__.setUpPage)();\naddTodo("Vann plantene");\naddTodo("Ta ut søppelet");\naddTodo("Luft hunden");\n\n\n//# sourceURL=webpack://todo-list/./src/js/controller.js?'
        );

        /***/
      },

    /***/ "./src/js/model.js":
      /*!*************************!*\
  !*** ./src/js/model.js ***!
  \*************************/
      /***/ (
        __unused_webpack_module,
        __webpack_exports__,
        __webpack_require__
      ) => {
        eval(
          '__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   "addTodo": () => (/* binding */ addTodo),\n/* harmony export */   "removeTodo": () => (/* binding */ removeTodo),\n/* harmony export */   "setDoneStatus": () => (/* binding */ setDoneStatus)\n/* harmony export */ });\n/* harmony import */ var _view__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./view */ "./src/js/view.js");\n\n\ntodoList = [];\n\nfunction Todo(name, isDone) {\n  this.name = name;\n  this.isDone = isDone;\n}\n\nfunction addTodo(name) {\n  todoList.push(new Todo(name, false));\n  (0,_view__WEBPACK_IMPORTED_MODULE_0__.renderList)();\n}\n\nfunction removeTodo(index) {\n  todoList.splice(index, 1);\n  (0,_view__WEBPACK_IMPORTED_MODULE_0__.renderList)();\n}\n\nfunction setDoneStatus(index, status) {\n  todoList[index].isDone = status;\n}\n\n\n\n\n//# sourceURL=webpack://todo-list/./src/js/model.js?'
        );

        /***/
      },

    /***/ "./src/js/view.js":
      /*!************************!*\
  !*** ./src/js/view.js ***!
  \************************/
      /***/ (
        __unused_webpack_module,
        __webpack_exports__,
        __webpack_require__
      ) => {
        eval(
          '__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   "renderList": () => (/* binding */ renderList),\n/* harmony export */   "setUpPage": () => (/* binding */ setUpPage)\n/* harmony export */ });\n/* harmony import */ var _model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./model */ "./src/js/model.js");\n\n\nconst todoListElement = document.getElementById("todoList");\n\nfunction setUpPage() {\n  const newTodoInput = document.getElementById("newTodoInput");\n  const newTodoButton = document.getElementById("newTodoButton");\n\n  newTodoButton.addEventListener("click", function () {\n    (0,_model__WEBPACK_IMPORTED_MODULE_0__.addTodo)(newTodoInput.value);\n  });\n}\n\nfunction clearInputField() {\n  newTodoInput.value = "";\n}\n\nfunction createTodoElement(newTodo, index) {\n  const newTodoElement = document.createElement("div");\n  const checkbox = document.createElement("input");\n  checkbox.type = "checkbox";\n  checkbox.id = "label" + index;\n  checkbox.checked = newTodo.isDone;\n  checkbox.addEventListener("change", function () {\n    (0,_model__WEBPACK_IMPORTED_MODULE_0__.setDoneStatus)(index, this.checked);\n    renderList();\n  });\n  const todoName = document.createElement("label");\n  todoName.setAttribute("for", "label" + index);\n  todoName.classList.add("unselectable");\n  todoName.innerHTML = newTodo.name + " " + newTodo.isDone;\n  const removeButton = document.createElement("button");\n  removeButton.innerHTML = "DEL";\n  removeButton.addEventListener("click", () => {\n    (0,_model__WEBPACK_IMPORTED_MODULE_0__.removeTodo)(index);\n  });\n  newTodoElement.appendChild(checkbox);\n  newTodoElement.appendChild(todoName);\n  newTodoElement.appendChild(removeButton);\n\n  return newTodoElement;\n}\n\nfunction clearList() {\n  todoListElement.innerHTML = "";\n}\n\nfunction renderList() {\n  clearList();\n  todoList.forEach((todo, index) => {\n    addTodoWithIndex(todo, index);\n  });\n}\n\nfunction addTodoWithIndex(newTodo, index) {\n  clearInputField();\n\n  const newTodoElement = createTodoElement(newTodo, index);\n\n  todoListElement.appendChild(newTodoElement);\n}\n\n\n\n\n//# sourceURL=webpack://todo-list/./src/js/view.js?'
        );

        /***/
      },

    /******/
  };
  /************************************************************************/
  /******/
  /******/ // startup
  /******/ // Load entry module and return exports
  /******/ // This entry module doesn't tell about it's top-level declarations so it can't be inlined
  /******/ var __webpack_exports__ = {};
  /******/ __webpack_modules__["./src/js/controller.js"]();
  /******/
  /******/
})();
