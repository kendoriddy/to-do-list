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

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \"/* Global */\\n*,\\n*::before,\\n*::after {\\n  margin: 0;\\n  padding: 0;\\n  box-sizing: border-box;\\n}\\n\\nbody {\\n  font-family: \\\"Segoe UI\\\", Tahoma, Geneva, Verdana, sans-serif;\\n}\\n\\nul {\\n  list-style-type: none;\\n}\\n\\nli {\\n  list-style: none;\\n}\\n\\n/* Primary colors */\\n:root {\\n  --grey: #696969;\\n  --milky: #f6f6f6;\\n}\\n\\nhr {\\n  width: calc(100% + 20px);\\n  margin-left: -10px;\\n  border: none;\\n  height: 0.2px;\\n  background: #c0c0c0;\\n}\\n\\n.hide {\\n  display: none;\\n}\\n\\n.reorder {\\n  font-size: 16px;\\n  color: #c0c0c0;\\n  cursor: move;\\n}\\n\\n.delete {\\n  color: #c0c0c0;\\n  cursor: pointer;\\n}\\n\\n.container {\\n  background: var(--milky);\\n  width: 100vw;\\n  height: 100vh;\\n  display: flex;\\n}\\n\\n.app-body {\\n  margin: auto;\\n  width: 60%;\\n  min-width: 300px;\\n  box-shadow: -5px 5px 5px rgba(0, 0, 0, 0.1), 5px 5px 5px rgba(0, 0, 0, 0.1);\\n  background: white;\\n  padding: 10px;\\n  padding-bottom: 0;\\n}\\n\\nheader {\\n  display: flex;\\n  align-items: center;\\n  justify-content: space-between;\\n  padding-bottom: 10px;\\n}\\n\\nheader h1 {\\n  font-size: 1rem;\\n  font-weight: 500;\\n}\\n\\nheader i {\\n  transform: rotate(120deg);\\n  font-size: 13px;\\n  cursor: pointer;\\n  color: #c0c0c0;\\n}\\n\\n.enter-todo {\\n  display: flex;\\n  align-items: center;\\n  justify-content: space-between;\\n  padding: 10px 0;\\n}\\n\\n.enter-todo input {\\n  border: none;\\n  width: 100%;\\n}\\n\\n.todo-event input {\\n  border: 0;\\n  outline: none;\\n}\\n\\n.enter-todo input:focus {\\n  outline: none;\\n}\\n\\n.enter {\\n  height: 10px;\\n  font-size: 14px;\\n  color: #c0c0c0;\\n  cursor: pointer;\\n}\\n\\n#enter-todo::-webkit-input-placeholder {\\n  font-style: italic;\\n}\\n\\n#enter-todo::-moz-placeholder {\\n  font-style: italic;\\n}\\n\\n#enter-todo:-moz-placeholder {\\n  font-style: italic;\\n}\\n\\n#enter-todo:-ms-input-placeholder {\\n  font-style: italic;\\n}\\n\\n#clear-completed {\\n  padding: 10px;\\n  cursor: pointer;\\n  background: var(--milky);\\n  border: 0;\\n  width: calc(100% + 20px);\\n  margin-left: -10px;\\n  display: none;\\n}\\n\\n#clear-completed:hover {\\n  font-weight: 600;\\n}\\n\\n.todo-event {\\n  padding: 10px 0;\\n  display: flex;\\n  justify-content: space-between;\\n}\\n\\n.todo-event input[type=\\\"text\\\"] {\\n  width: 89.8%;\\n}\\n\\n.completed {\\n  text-decoration: line-through;\\n}\\n\\n.active {\\n  background-color: var(--milky);\\n}\\n\\n.check {\\n  width: 15px;\\n  height: 15px;\\n}\\n\\n.activity {\\n  width: 100%;\\n  padding: 10px;\\n  border: none;\\n  outline: none;\\n}\\n\\n.todo-collection ul {\\n  padding: 5px 0;\\n}\\n\\n.todo-collection ul li {\\n  display: flex;\\n  align-items: center;\\n}\\n\\n.note {\\n  font-size: 12px;\\n  display: none;\\n}\\n\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack:///./src/style.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = []; // return the list of modules as css string\n\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n\n      content += cssWithMappingToString(item);\n\n      if (needLayer) {\n        content += \"}\";\n      }\n\n      if (item[2]) {\n        content += \"}\";\n      }\n\n      if (item[4]) {\n        content += \"}\";\n      }\n\n      return content;\n    }).join(\"\");\n  }; // import a list of modules into the list\n\n\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n\n    var alreadyImportedModules = {};\n\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n\n      list.push(item);\n    }\n  };\n\n  return list;\n};\n\n//# sourceURL=webpack:///./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack:///./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ \"./node_modules/css-loader/dist/cjs.js!./src/style.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack:///./src/style.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\n\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n\n  return result;\n}\n\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n\n    identifiers.push(identifier);\n  }\n\n  return identifiers;\n}\n\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n\n  return updater;\n}\n\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n\n    var newLastIdentifiers = modulesToDom(newList, options);\n\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n\n      var _index = getIndexByIdentifier(_identifier);\n\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack:///./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n/* istanbul ignore next  */\n\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself\n\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n\n    memo[target] = styleTarget;\n  }\n\n  return memo[target];\n}\n/* istanbul ignore next  */\n\n\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n\n  target.appendChild(style);\n}\n\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack:///./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\n\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack:///./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\n\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack:///./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n\n  var needLayer = typeof obj.layer !== \"undefined\";\n\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n\n  css += obj.css;\n\n  if (needLayer) {\n    css += \"}\";\n  }\n\n  if (obj.media) {\n    css += \"}\";\n  }\n\n  if (obj.supports) {\n    css += \"}\";\n  }\n\n  var sourceMap = obj.sourceMap;\n\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  } // For old IE\n\n  /* istanbul ignore if  */\n\n\n  options.styleTagTransform(css, styleElement, options.options);\n}\n\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n\n  styleElement.parentNode.removeChild(styleElement);\n}\n/* istanbul ignore next  */\n\n\nfunction domAPI(options) {\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\n\nmodule.exports = domAPI;\n\n//# sourceURL=webpack:///./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\n\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack:///./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/complete.js":
/*!*************************!*\
  !*** ./src/complete.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"clearCompletedTodos\": () => (/* binding */ clearCompletedTodos),\n/* harmony export */   \"completedTodos\": () => (/* binding */ completedTodos)\n/* harmony export */ });\nconst completedTodos = (e) => {\n  const checkbox = e.target;\n  let btnId = checkbox.id;\n  btnId = btnId.split('-');\n  const id = parseInt(btnId[1], 10);\n  const inputId = document.querySelector(`#activity-${id}`);\n  const existingTodos = JSON.parse(localStorage.getItem('todos'));\n  if (checkbox.checked) {\n    existingTodos[id].completed = true;\n    inputId.classList.add('completed');\n    localStorage.setItem('todos', JSON.stringify(existingTodos));\n  } else {\n    existingTodos[id].completed = false;\n    inputId.classList.remove('completed');\n    localStorage.setItem('todos', JSON.stringify(existingTodos));\n  }\n};\n\nconst clearCompletedTodos = () => {\n  const completed = document.querySelectorAll('input:checked');\n  let existingTodos = JSON.parse(localStorage.getItem('todos'));\n  if (completed) {\n    completed.forEach((item) => {\n      const todo = item.parentNode;\n      todo.parentNode.remove();\n    });\n  }\n  existingTodos = existingTodos.filter((todos) => todos.completed === false);\n  existingTodos.forEach((todo, i) => {\n    (todo.index = i + 1);\n  });\n  localStorage.setItem('todos', JSON.stringify(existingTodos));\n};\n\n\n\n//# sourceURL=webpack:///./src/complete.js?");

/***/ }),

/***/ "./src/crud.js":
/*!*********************!*\
  !*** ./src/crud.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"showToDos\": () => (/* binding */ showToDos),\n/* harmony export */   \"storeToDos\": () => (/* binding */ storeToDos)\n/* harmony export */ });\n/* harmony import */ var _complete_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./complete.js */ \"./src/complete.js\");\n/* harmony import */ var _assets_images_dots_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../assets/images/dots.png */ \"./assets/images/dots.png\");\n/* harmony import */ var _assets_images_delete_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../assets/images/delete.png */ \"./assets/images/delete.png\");\n/* harmony import */ var _assets_images_save_jpeg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../assets/images/save.jpeg */ \"./assets/images/save.jpeg\");\n\n\n\n\n\nclass ToDo {\n  constructor(description, completed, index) {\n    this.description = description;\n    this.completed = completed;\n    this.index = index;\n  }\n}\n\nconst deleteTodos = (e) => {\n  const btnClass = e.target.className;\n  const btnId = btnClass.split('-');\n  const id = parseInt(btnId[1], 10);\n  let existingTodos = JSON.parse(localStorage.getItem('todos'));\n  existingTodos = existingTodos.filter((todos, index) => index !== id);\n  e.target.parentNode.remove();\n  existingTodos.forEach((task, i) => {\n    task.index = i + 1;\n  });\n  localStorage.setItem('todos', JSON.stringify(existingTodos));\n  // eslint-disable-next-line no-use-before-define\n  showToDos();\n};\n\nconst saveTodo = (id, isBtn = false) => {\n  const taskList = document.querySelector(`#tasks-${id}`);\n  const saveEdit = document.querySelector(`.save-${id}`);\n  const deleteEdit = document.querySelector(`.delete-${id}`);\n  const inputId = document.querySelector(`#activity-${id}`);\n  const editBtn = document.getElementById(`${id}`);\n  editBtn.style.display = 'block';\n\n  const existingTodos = JSON.parse(localStorage.getItem('todos'));\n  existingTodos[id].description = inputId.value;\n  localStorage.setItem('todos', JSON.stringify(existingTodos));\n  if (isBtn) {\n    saveEdit.remove();\n    deleteEdit.remove();\n  }\n  taskList.classList.remove('active');\n  inputId.setAttribute('readonly', true);\n};\n\nconst saveTodos = (e) => {\n  const saveBtn = e.target;\n  const btnClass = saveBtn.className;\n  const btnId = btnClass.split('-');\n  const id = parseInt(btnId[1], 10);\n  saveTodo(id, true);\n};\n\nconst editTodos = (e) => {\n  const editInput = e.target;\n  const editBtn = document.getElementById(`${editInput.id}`);\n  const inputId = document.querySelector(`#activity-${editInput.id}`);\n  inputId.removeAttribute('readonly');\n  inputId.focus();\n\n  editBtn.style.display = 'none';\n  inputId.style.outlineColor = 'gray';\n\n  const taskList = document.querySelector(`#tasks-${editInput.id}`);\n  taskList.classList.add('active');\n\n  const task = document.querySelector(`#task-${editInput.id}`);\n\n  const save = document.createElement('img');\n  save.setAttribute('src', _assets_images_save_jpeg__WEBPACK_IMPORTED_MODULE_3__);\n  save.classList.add(`save-${editInput.id}`);\n  task.appendChild(save);\n\n  const removeBtn = document.createElement('img');\n  removeBtn.classList.add(`delete-${editInput.id}`);\n  removeBtn.setAttribute('src', _assets_images_delete_png__WEBPACK_IMPORTED_MODULE_2__);\n  task.appendChild(removeBtn);\n\n  document.querySelectorAll(`.delete-${editInput.id}`).forEach((e) => {\n    e.addEventListener('click', deleteTodos);\n  });\n\n  document.querySelectorAll(`.save-${editInput.id}`).forEach((e) => {\n    e.addEventListener('click', saveTodos);\n  });\n};\n\nconst showToDos = () => {\n  const existingTodos = JSON.parse(localStorage.getItem('todos'));\n  if (existingTodos !== null && existingTodos.length > 0) {\n    const collection = document.querySelector('.todo-collection');\n    collection.innerHTML = '';\n\n    existingTodos.forEach((todo, index) => {\n      const unordered = document.createElement('ul');\n      const ordered = document.createElement('li');\n      const liner = document.createElement('hr');\n\n      unordered.classList.add('tasks');\n      unordered.id = `tasks-${index}`;\n\n      ordered.classList.add('tasks');\n      ordered.id = `task-${index}`;\n\n      const check = document.createElement('input');\n      check.type = 'checkbox';\n      check.classList.add('check');\n      check.id = `check-${index}`;\n\n      const input = document.createElement('input');\n      input.type = 'text';\n      input.classList.add('activity');\n      input.id = `activity-${index}`;\n      input.value = `${todo.description}`;\n      if (todo.completed) {\n        check.checked = true;\n        input.classList.add('completed');\n      }\n\n      const edit = document.createElement('img');\n      edit.setAttribute('src', _assets_images_dots_png__WEBPACK_IMPORTED_MODULE_1__);\n      edit.classList.add('edit');\n      edit.id = index;\n\n      collection.appendChild(unordered);\n      unordered.appendChild(ordered);\n      unordered.appendChild(liner);\n      ordered.appendChild(check);\n      ordered.appendChild(input);\n      ordered.appendChild(edit);\n\n      ['focus', 'blur', 'keyup'].forEach((evt) => {\n        input.addEventListener(evt, (e) => {\n          if (evt === 'blur' || (evt === 'keyup' && e.key === 'Enter')) {\n            const taskIndex = Number(e.target.id.split('-')[1]);\n            saveTodo(taskIndex);\n            e.target.blur();\n          }\n        });\n      });\n    });\n\n    document.querySelector('#clear-completed').style.display = 'block';\n    document.querySelector('.note').style.display = 'block';\n\n    document.querySelectorAll('.edit').forEach((e) => {\n      e.addEventListener('click', editTodos);\n    });\n\n    document.querySelectorAll('.check').forEach((e) => {\n      e.addEventListener('change', _complete_js__WEBPACK_IMPORTED_MODULE_0__.completedTodos);\n    });\n  } else {\n    document.querySelector('.todo-collection').innerHTML = '';\n  }\n};\n\nconst activity = document.querySelectorAll('.activity');\n\nactivity.forEach((element) => {\n  ['focus', 'blur', 'keyup'].forEach((evt) => {\n    element.addEventListener(evt, (e) => {\n      if (evt === 'blur' || (evt === 'keyup' && e.key === 'Enter')) {\n        // It's a modify\n        const taskIndex = Number(e.target.id.split('-')[1]);\n        saveTodo(taskIndex);\n        e.target.blur();\n      }\n    });\n  });\n});\n\nconst storeToDos = (e) => {\n  e.preventDefault();\n  let existingTodos = JSON.parse(localStorage.getItem('todos'));\n  existingTodos = existingTodos === null ? [] : existingTodos;\n\n  const inputTodo = document.getElementById('enter-todo').value;\n  const newTodo = new ToDo(inputTodo, false, existingTodos.length + 1);\n\n  if (inputTodo !== '') {\n    existingTodos.push(newTodo);\n    localStorage.setItem('todos', JSON.stringify(existingTodos));\n    document.getElementById('enter-todo').value = '';\n    showToDos();\n  }\n};\n\n\n\n//# sourceURL=webpack:///./src/crud.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ \"./src/style.css\");\n/* harmony import */ var _crud_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./crud.js */ \"./src/crud.js\");\n/* harmony import */ var _complete_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./complete.js */ \"./src/complete.js\");\n\n\n\n\ndocument.querySelector('.enter').addEventListener('click', _crud_js__WEBPACK_IMPORTED_MODULE_1__.storeToDos);\ndocument.querySelector('form').addEventListener('submit', _crud_js__WEBPACK_IMPORTED_MODULE_1__.storeToDos);\ndocument.querySelector('#clear-completed').addEventListener('click', _complete_js__WEBPACK_IMPORTED_MODULE_2__.clearCompletedTodos);\nwindow.addEventListener('load', _crud_js__WEBPACK_IMPORTED_MODULE_1__.showToDos);\n\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./assets/images/delete.png":
/*!**********************************!*\
  !*** ./assets/images/delete.png ***!
  \**********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"0ca5c575d518810ab2af.png\";\n\n//# sourceURL=webpack:///./assets/images/delete.png?");

/***/ }),

/***/ "./assets/images/dots.png":
/*!********************************!*\
  !*** ./assets/images/dots.png ***!
  \********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"053eb1b5e1182ab398c2.png\";\n\n//# sourceURL=webpack:///./assets/images/dots.png?");

/***/ }),

/***/ "./assets/images/save.jpeg":
/*!*********************************!*\
  !*** ./assets/images/save.jpeg ***!
  \*********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"6e8d6db4bccfa0ac5eaf.jpeg\";\n\n//# sourceURL=webpack:///./assets/images/save.jpeg?");

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
/******/ 			id: moduleId,
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
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
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
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
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
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;