module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/app_server.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./Utilities/index.js":
/*!****************************!*\
  !*** ./Utilities/index.js ***!
  \****************************/
/*! exports provided: getStyle */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getStyle\", function() { return getStyle; });\nvar theme = {\n  color: {\n    bgBlue: '#2c6ed5'\n  }\n};\n\nvar checkStyle = function checkStyle(style, key, breakpointNo, objStyle) {\n  if (style) {\n    if (Array.isArray(style) && style[breakpointNo]) {\n      objStyle[key] = style[breakpointNo];\n    } else {\n      objStyle[key] = style;\n    }\n  }\n\n  return objStyle;\n};\n\nvar getStyle = function getStyle(_ref, breakpointNo, isFlex) {\n  var flexDirection = _ref.flexDirection,\n      flex = _ref.flex,\n      width = _ref.width,\n      height = _ref.height,\n      pr = _ref.pr,\n      pl = _ref.pl,\n      pt = _ref.pt,\n      pb = _ref.pb,\n      px = _ref.px,\n      py = _ref.py,\n      mt = _ref.mt,\n      mb = _ref.mb,\n      mr = _ref.mr,\n      ml = _ref.ml,\n      mx = _ref.mx,\n      my = _ref.my,\n      alignItems = _ref.alignItems,\n      justifyContent = _ref.justifyContent,\n      bg = _ref.bg;\n  var objStyle = {\n    boxSizing: 'border-box'\n  };\n  if (isFlex) objStyle.display = 'flex';\n  objStyle = checkStyle(flexDirection, 'flexDirection', breakpointNo, objStyle);\n  objStyle = checkStyle(flex, 'flex', breakpointNo, objStyle);\n  objStyle = checkStyle(width, 'width', breakpointNo, objStyle);\n  objStyle = checkStyle(height, 'height', breakpointNo, objStyle);\n  objStyle = checkStyle(pr, 'paddingRight', breakpointNo, objStyle);\n  objStyle = checkStyle(pl, 'paddingLeft', breakpointNo, objStyle);\n  objStyle = checkStyle(pt, 'paddingTop', breakpointNo, objStyle);\n  objStyle = checkStyle(pb, 'paddingBottom', breakpointNo, objStyle);\n\n  if (px) {\n    objStyle = checkStyle(px, 'paddingRight', breakpointNo, objStyle);\n    objStyle = checkStyle(px, 'paddingLeft', breakpointNo, objStyle);\n  }\n\n  if (py) {\n    objStyle = checkStyle(py, 'paddingTop', breakpointNo, objStyle);\n    objStyle = checkStyle(py, 'paddingTop', breakpointNo, objStyle);\n  }\n\n  objStyle = checkStyle(mr, 'marginRight', breakpointNo, objStyle);\n  objStyle = checkStyle(ml, 'marginLeft', breakpointNo, objStyle);\n\n  if (mx) {\n    objStyle = checkStyle(mx, 'marginRight', breakpointNo, objStyle);\n    objStyle = checkStyle(mx, 'marginLeft', breakpointNo, objStyle);\n  }\n\n  objStyle = checkStyle(mt, 'marginTop', breakpointNo, objStyle);\n  objStyle = checkStyle(mb, 'marginBottom', breakpointNo, objStyle);\n\n  if (my) {\n    objStyle = checkStyle(my, 'marginTop', breakpointNo, objStyle);\n    objStyle = checkStyle(my, 'marginBottom', breakpointNo, objStyle);\n  }\n\n  objStyle = checkStyle(alignItems, 'alignItems', breakpointNo, objStyle);\n  objStyle = checkStyle(justifyContent, 'justifyContent', breakpointNo, objStyle);\n\n  if (bg) {\n    var color = theme.color[bg] || bg;\n    objStyle = checkStyle(color, 'backgroundColor', breakpointNo, objStyle);\n  }\n\n  return objStyle;\n};\n\n//# sourceURL=webpack:///./Utilities/index.js?");

/***/ }),

/***/ "./src/Components/Box.js":
/*!*******************************!*\
  !*** ./src/Components/Box.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _root_src_Components_Breakpoints__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @root/src/Components/Breakpoints */ \"./src/Components/Breakpoints.js\");\n/* harmony import */ var _root_Utilities__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @root/Utilities */ \"./Utilities/index.js\");\n\n\n\n\nvar Box = function Box(props) {\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_root_src_Components_Breakpoints__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n    xs: true\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    style: Object(_root_Utilities__WEBPACK_IMPORTED_MODULE_2__[\"getStyle\"])(props, 0)\n  }, props && props.children)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_root_src_Components_Breakpoints__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n    sm: true\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    style: Object(_root_Utilities__WEBPACK_IMPORTED_MODULE_2__[\"getStyle\"])(props, 1)\n  }, props && props.children)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_root_src_Components_Breakpoints__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n    md: true\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    style: Object(_root_Utilities__WEBPACK_IMPORTED_MODULE_2__[\"getStyle\"])(props, 2)\n  }, props && props.children)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_root_src_Components_Breakpoints__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n    lg: true\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    style: Object(_root_Utilities__WEBPACK_IMPORTED_MODULE_2__[\"getStyle\"])(props, 3)\n  }, props && props.children)));\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Box);\n\n//# sourceURL=webpack:///./src/Components/Box.js?");

/***/ }),

/***/ "./src/Components/Breakpoints.js":
/*!***************************************!*\
  !*** ./src/Components/Breakpoints.js ***!
  \***************************************/
/*! exports provided: useBreakpoints, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"useBreakpoints\", function() { return useBreakpoints; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ \"prop-types\");\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);\nfunction _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }\n\nfunction _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }\n\nfunction _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }\n\nfunction _nonIterableRest() { throw new TypeError(\"Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\"); }\n\nfunction _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === \"string\") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === \"Object\" && o.constructor) n = o.constructor.name; if (n === \"Map\" || n === \"Set\") return Array.from(o); if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }\n\nfunction _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }\n\nfunction _iterableToArrayLimit(arr, i) { if (typeof Symbol === \"undefined\" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i[\"return\"] != null) _i[\"return\"](); } finally { if (_d) throw _e; } } return _arr; }\n\nfunction _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }\n\n\n\nvar breakpoints = [577, 769, 1025, 1337];\n\nvar windowSize = function windowSize(w) {\n  if (!w) return 'lg';\n  var wSize = null;\n\n  if (w < breakpoints[0]) {\n    wSize = 'xs';\n  } else if (w < breakpoints[1]) {\n    wSize = 'sm';\n  } else if (w < breakpoints[2]) {\n    wSize = 'md';\n  } else {\n    wSize = 'lg';\n  }\n\n  return wSize;\n};\n\nvar useBreakpoints = function useBreakpoints() {\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])(null),\n      _useState2 = _slicedToArray(_useState, 2),\n      size = _useState2[0],\n      setSize = _useState2[1];\n\n  Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useEffect\"])(function () {\n    var winSize = windowSize(window.innerWidth);\n    setSize(winSize);\n\n    var handleResize = function handleResize() {\n      winSize = windowSize(window.innerWidth);\n\n      if (size !== winSize) {\n        setSize(winSize);\n      }\n    };\n\n    window.addEventListener('resize', handleResize);\n    return function () {\n      window.removeEventListener('resize', handleResize);\n    };\n  }, []);\n  return {\n    breakSize: size\n  };\n};\n\nvar Breakpoints = function Breakpoints(_ref) {\n  var children = _ref.children,\n      extra = _objectWithoutProperties(_ref, [\"children\"]);\n\n  var _useBreakpoints = useBreakpoints(),\n      breakSize = _useBreakpoints.breakSize;\n\n  console.log(\"breakSize\", breakSize);\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, extra[breakSize || 'lg'] && children);\n};\n\nBreakpoints.defaultProps = {\n  xs: false,\n  sm: false,\n  md: false,\n  lg: false\n};\nBreakpoints.propTypes = {\n  children: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.node.isRequired,\n  xs: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool,\n  sm: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool,\n  md: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool,\n  lg: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (Breakpoints);\n\n//# sourceURL=webpack:///./src/Components/Breakpoints.js?");

/***/ }),

/***/ "./src/Components/Flex.js":
/*!********************************!*\
  !*** ./src/Components/Flex.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _root_src_Components_Box__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @root/src/Components/Box */ \"./src/Components/Box.js\");\n/* harmony import */ var _root_src_Components_Breakpoints__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @root/src/Components/Breakpoints */ \"./src/Components/Breakpoints.js\");\n/* harmony import */ var _root_Utilities__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @root/Utilities */ \"./Utilities/index.js\");\n\n\n\n\nconsole.log(\"getStyle\", _root_Utilities__WEBPACK_IMPORTED_MODULE_3__[\"getStyle\"]);\n\nvar Flex = function Flex(props) {\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_root_src_Components_Breakpoints__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n    xs: true\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    style: Object(_root_Utilities__WEBPACK_IMPORTED_MODULE_3__[\"getStyle\"])(props, 0, true)\n  }, props && props.children)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_root_src_Components_Breakpoints__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n    sm: true\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    style: Object(_root_Utilities__WEBPACK_IMPORTED_MODULE_3__[\"getStyle\"])(props, 1, true)\n  }, props && props.children)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_root_src_Components_Breakpoints__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n    md: true\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    style: Object(_root_Utilities__WEBPACK_IMPORTED_MODULE_3__[\"getStyle\"])(props, 2, true)\n  }, props && props.children)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_root_src_Components_Breakpoints__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n    lg: true\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    style: Object(_root_Utilities__WEBPACK_IMPORTED_MODULE_3__[\"getStyle\"])(props, 3, true)\n  }, props && props.children)));\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Flex);\n\n//# sourceURL=webpack:///./src/Components/Flex.js?");

/***/ }),

/***/ "./src/Pages/Root.js":
/*!***************************!*\
  !*** ./src/Pages/Root.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _root_src_Components_Flex__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @root/src/Components/Flex */ \"./src/Components/Flex.js\");\n\n\n\nvar Root = function Root() {\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_root_src_Components_Flex__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n    width: \"100%\",\n    height: \"100%\",\n    flexDirection: \"column\",\n    bg: \"bgBlue\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"h1\", null, \"Register\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"button\", {\n    onClick: function onClick() {\n      return alert('clicked!!!!');\n    }\n  }, \"Click!!!\"));\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Root);\n\n//# sourceURL=webpack:///./src/Pages/Root.js?");

/***/ }),

/***/ "./src/app_server.js":
/*!***************************!*\
  !*** ./src/app_server.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_dom_server__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom/server */ \"react-dom/server\");\n/* harmony import */ var react_dom_server__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_dom_server__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! express */ \"express\");\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(express__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _Pages_Root__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Pages/Root */ \"./src/Pages/Root.js\");\n\n\n\n\nvar window = {};\nvar router = express__WEBPACK_IMPORTED_MODULE_2___default.a.Router();\n\nfunction main() {\n  router.get('/', function (req, res) {\n    var app = react_dom_server__WEBPACK_IMPORTED_MODULE_1___default.a.renderToString( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Pages_Root__WEBPACK_IMPORTED_MODULE_3__[\"default\"], null));\n    console.log(\"app\", app);\n    res.send(\"<html>\\n    <head>\\n    <title>Home Test</title>\\n    <meta\\n    name=\\\"viewport\\\"\\n    content=\\\"width=device-width,minimum-scale=1,initial-scale=1\\\"\\n     />\\n    <script src=\\\"/dist/client.js\\\" defer></script>\\n    <link rel=\\\"stylesheet\\\" href=\\\"https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap\\\" />\\n    <link rel=\\\"stylesheet\\\" href=\\\"https://fonts.googleapis.com/icon?family=Material+Icons\\\" />\\n    <style>\\n    html, body, p, div, h1, h2, h3, h4, h5, h6, ul, ol, dl, img, pre, form, fieldset {\\n      padding: 0;\\n      margin: 0;\\n    }\\n    </style>\\n    </head>\\n    <body>\\n    <div style=\\\"width:100%;height:100%;\\\" id=\\\"root\\\">\".concat(app, \"</div>\\n    </body>\\n  </html>\"));\n  });\n  return router;\n}\n\n;\n/* harmony default export */ __webpack_exports__[\"default\"] = (main);\n\n//# sourceURL=webpack:///./src/app_server.js?");

/***/ }),

/***/ "express":
/*!**************************!*\
  !*** external "express" ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"express\");\n\n//# sourceURL=webpack:///external_%22express%22?");

/***/ }),

/***/ "prop-types":
/*!*****************************!*\
  !*** external "prop-types" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"prop-types\");\n\n//# sourceURL=webpack:///external_%22prop-types%22?");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react\");\n\n//# sourceURL=webpack:///external_%22react%22?");

/***/ }),

/***/ "react-dom/server":
/*!***********************************!*\
  !*** external "react-dom/server" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react-dom/server\");\n\n//# sourceURL=webpack:///external_%22react-dom/server%22?");

/***/ })

/******/ });