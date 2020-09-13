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

/***/ "./Utilities/httpRequest.js":
/*!**********************************!*\
  !*** ./Utilities/httpRequest.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ \"axios\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);\n\nvar axiosHeader = {};\nvar httpRequest = axios__WEBPACK_IMPORTED_MODULE_0___default.a.create({\n  headers: axiosHeader\n});\n/* harmony default export */ __webpack_exports__[\"default\"] = (httpRequest);\n\n//# sourceURL=webpack:///./Utilities/httpRequest.js?");

/***/ }),

/***/ "./Utilities/index.js":
/*!****************************!*\
  !*** ./Utilities/index.js ***!
  \****************************/
/*! exports provided: getStyle, getTextStyles */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getStyle\", function() { return getStyle; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getTextStyles\", function() { return getTextStyles; });\n/* harmony import */ var _babel_runtime_corejs3_core_js_stable_object_define_property__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs3/core-js-stable/object/define-property */ \"@babel/runtime-corejs3/core-js-stable/object/define-property\");\n/* harmony import */ var _babel_runtime_corejs3_core_js_stable_object_define_property__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_core_js_stable_object_define_property__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _babel_runtime_corejs3_core_js_stable_object_define_properties__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs3/core-js-stable/object/define-properties */ \"@babel/runtime-corejs3/core-js-stable/object/define-properties\");\n/* harmony import */ var _babel_runtime_corejs3_core_js_stable_object_define_properties__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_core_js_stable_object_define_properties__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _babel_runtime_corejs3_core_js_stable_object_get_own_property_descriptors__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs3/core-js-stable/object/get-own-property-descriptors */ \"@babel/runtime-corejs3/core-js-stable/object/get-own-property-descriptors\");\n/* harmony import */ var _babel_runtime_corejs3_core_js_stable_object_get_own_property_descriptors__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_core_js_stable_object_get_own_property_descriptors__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_for_each__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs3/core-js-stable/instance/for-each */ \"@babel/runtime-corejs3/core-js-stable/instance/for-each\");\n/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_for_each__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_core_js_stable_instance_for_each__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _babel_runtime_corejs3_core_js_stable_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs3/core-js-stable/object/get-own-property-descriptor */ \"@babel/runtime-corejs3/core-js-stable/object/get-own-property-descriptor\");\n/* harmony import */ var _babel_runtime_corejs3_core_js_stable_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_core_js_stable_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_filter__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs3/core-js-stable/instance/filter */ \"@babel/runtime-corejs3/core-js-stable/instance/filter\");\n/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_filter__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_core_js_stable_instance_filter__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _babel_runtime_corejs3_core_js_stable_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime-corejs3/core-js-stable/object/get-own-property-symbols */ \"@babel/runtime-corejs3/core-js-stable/object/get-own-property-symbols\");\n/* harmony import */ var _babel_runtime_corejs3_core_js_stable_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_core_js_stable_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var _babel_runtime_corejs3_core_js_stable_object_keys__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @babel/runtime-corejs3/core-js-stable/object/keys */ \"@babel/runtime-corejs3/core-js-stable/object/keys\");\n/* harmony import */ var _babel_runtime_corejs3_core_js_stable_object_keys__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_core_js_stable_object_keys__WEBPACK_IMPORTED_MODULE_7__);\n/* harmony import */ var _babel_runtime_corejs3_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @babel/runtime-corejs3/helpers/defineProperty */ \"@babel/runtime-corejs3/helpers/defineProperty\");\n/* harmony import */ var _babel_runtime_corejs3_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_8__);\n/* harmony import */ var _babel_runtime_corejs3_core_js_stable_array_is_array__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @babel/runtime-corejs3/core-js-stable/array/is-array */ \"@babel/runtime-corejs3/core-js-stable/array/is-array\");\n/* harmony import */ var _babel_runtime_corejs3_core_js_stable_array_is_array__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_core_js_stable_array_is_array__WEBPACK_IMPORTED_MODULE_9__);\n\n\n\n\n\n\n\n\n\n\n\nfunction ownKeys(object, enumerableOnly) { var keys = _babel_runtime_corejs3_core_js_stable_object_keys__WEBPACK_IMPORTED_MODULE_7___default()(object); if (_babel_runtime_corejs3_core_js_stable_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_6___default.a) { var symbols = _babel_runtime_corejs3_core_js_stable_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_6___default()(object); if (enumerableOnly) symbols = _babel_runtime_corejs3_core_js_stable_instance_filter__WEBPACK_IMPORTED_MODULE_5___default()(symbols).call(symbols, function (sym) { return _babel_runtime_corejs3_core_js_stable_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_4___default()(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { var _context; _babel_runtime_corejs3_core_js_stable_instance_for_each__WEBPACK_IMPORTED_MODULE_3___default()(_context = ownKeys(Object(source), true)).call(_context, function (key) { _babel_runtime_corejs3_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_8___default()(target, key, source[key]); }); } else if (_babel_runtime_corejs3_core_js_stable_object_get_own_property_descriptors__WEBPACK_IMPORTED_MODULE_2___default.a) { _babel_runtime_corejs3_core_js_stable_object_define_properties__WEBPACK_IMPORTED_MODULE_1___default()(target, _babel_runtime_corejs3_core_js_stable_object_get_own_property_descriptors__WEBPACK_IMPORTED_MODULE_2___default()(source)); } else { var _context2; _babel_runtime_corejs3_core_js_stable_instance_for_each__WEBPACK_IMPORTED_MODULE_3___default()(_context2 = ownKeys(Object(source))).call(_context2, function (key) { _babel_runtime_corejs3_core_js_stable_object_define_property__WEBPACK_IMPORTED_MODULE_0___default()(target, key, _babel_runtime_corejs3_core_js_stable_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_4___default()(source, key)); }); } } return target; }\n\nvar theme = {\n  color: {\n    bgBlue: '#2c6ed5',\n    textBlack: '#222',\n    error: '#f44336',\n    success: '#4caf50'\n  },\n  textStyles: {\n    normal: {\n      fontSize: '14px',\n      lineHeight: 1.8,\n      color: '#222',\n      fontWeight: 300,\n      fontFamily: '\"Roboto\", \"Helvetica\", \"Arial\", sans-serif'\n    },\n    header: {\n      lineHeight: 1.66,\n      fontWeight: 900,\n      color: '#222',\n      fontFamily: '\"Roboto\", \"Helvetica\", \"Arial\", sans-serif',\n      fontSize: '24px',\n      textTransform: 'uppercase',\n      textAlign: 'center'\n    },\n    status: {\n      fontFamily: '\"Roboto\", \"Helvetica\", \"Arial\", sans-serif',\n      lineHeight: 1.43,\n      fontSize: '0.875rem',\n      color: '#fff'\n    },\n    link: {\n      fontSize: '14px',\n      lineHeight: 1.8,\n      color: '#0000EE',\n      fontWeight: 300,\n      fontFamily: '\"Roboto\", \"Helvetica\", \"Arial\", sans-serif'\n    }\n  }\n};\n\nvar checkStyle = function checkStyle(style, key, breakpointNo, objStyle) {\n  if (style) {\n    if (_babel_runtime_corejs3_core_js_stable_array_is_array__WEBPACK_IMPORTED_MODULE_9___default()(style)) {\n      if (style[breakpointNo]) {\n        objStyle[key] = style[breakpointNo];\n      } else {\n        objStyle[key] = style[style.length - 1];\n      }\n    } else {\n      objStyle[key] = style;\n    }\n  }\n\n  return objStyle;\n};\n\nvar getStyle = function getStyle(_ref, breakpointNo, isFlex) {\n  var flexDirection = _ref.flexDirection,\n      flex = _ref.flex,\n      width = _ref.width,\n      height = _ref.height,\n      pr = _ref.pr,\n      pl = _ref.pl,\n      pt = _ref.pt,\n      pb = _ref.pb,\n      px = _ref.px,\n      py = _ref.py,\n      mt = _ref.mt,\n      mb = _ref.mb,\n      mr = _ref.mr,\n      ml = _ref.ml,\n      mx = _ref.mx,\n      my = _ref.my,\n      m = _ref.m,\n      p = _ref.p,\n      alignItems = _ref.alignItems,\n      justifyContent = _ref.justifyContent,\n      bg = _ref.bg,\n      r = _ref.r,\n      backgroundImage = _ref.backgroundImage,\n      position = _ref.position,\n      style = _ref.style;\n  var objStyle = {\n    boxSizing: 'border-box'\n  };\n  if (isFlex) objStyle.display = 'flex';\n  objStyle = checkStyle(flexDirection, 'flexDirection', breakpointNo, objStyle);\n  objStyle = checkStyle(flex, 'flex', breakpointNo, objStyle);\n  objStyle = checkStyle(width, 'width', breakpointNo, objStyle);\n  objStyle = checkStyle(height, 'height', breakpointNo, objStyle);\n  objStyle = checkStyle(pr, 'paddingRight', breakpointNo, objStyle);\n  objStyle = checkStyle(pl, 'paddingLeft', breakpointNo, objStyle);\n  objStyle = checkStyle(pt, 'paddingTop', breakpointNo, objStyle);\n  objStyle = checkStyle(pb, 'paddingBottom', breakpointNo, objStyle);\n\n  if (px) {\n    objStyle = checkStyle(px, 'paddingRight', breakpointNo, objStyle);\n    objStyle = checkStyle(px, 'paddingLeft', breakpointNo, objStyle);\n  }\n\n  if (py) {\n    objStyle = checkStyle(py, 'paddingTop', breakpointNo, objStyle);\n    objStyle = checkStyle(py, 'paddingBottom', breakpointNo, objStyle);\n  }\n\n  objStyle = checkStyle(mr, 'marginRight', breakpointNo, objStyle);\n  objStyle = checkStyle(ml, 'marginLeft', breakpointNo, objStyle);\n\n  if (mx) {\n    objStyle = checkStyle(mx, 'marginRight', breakpointNo, objStyle);\n    objStyle = checkStyle(mx, 'marginLeft', breakpointNo, objStyle);\n  }\n\n  objStyle = checkStyle(mt, 'marginTop', breakpointNo, objStyle);\n  objStyle = checkStyle(mb, 'marginBottom', breakpointNo, objStyle);\n\n  if (my) {\n    objStyle = checkStyle(my, 'marginTop', breakpointNo, objStyle);\n    objStyle = checkStyle(my, 'marginBottom', breakpointNo, objStyle);\n  }\n\n  objStyle = checkStyle(alignItems, 'alignItems', breakpointNo, objStyle);\n  objStyle = checkStyle(justifyContent, 'justifyContent', breakpointNo, objStyle);\n  objStyle = checkStyle(p, 'padding', breakpointNo, objStyle);\n  objStyle = checkStyle(m, 'margin', breakpointNo, objStyle);\n  objStyle = checkStyle(r, 'borderRadius', breakpointNo, objStyle);\n\n  if (bg) {\n    var color = theme.color[bg] || bg;\n    objStyle = checkStyle(color, 'backgroundColor', breakpointNo, objStyle);\n  }\n\n  if (backgroundImage) {\n    var bgImage = \"url(\".concat(backgroundImage, \")\");\n    objStyle = checkStyle(bgImage, 'backgroundImage', breakpointNo, objStyle);\n  }\n\n  objStyle = checkStyle(position, 'position', breakpointNo, objStyle);\n  return _objectSpread(_objectSpread({}, style), objStyle);\n};\nvar getTextStyles = function getTextStyles(variant) {\n  return theme.textStyles[variant] || theme.textStyles['normal'];\n};\n\n//# sourceURL=webpack:///./Utilities/index.js?");

/***/ }),

/***/ "./src/Components/Atoms/Box.js":
/*!*************************************!*\
  !*** ./src/Components/Atoms/Box.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _babel_runtime_corejs3_helpers_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs3/helpers/extends */ \"@babel/runtime-corejs3/helpers/extends\");\n/* harmony import */ var _babel_runtime_corejs3_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_helpers_extends__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_index_of__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs3/core-js-stable/instance/index-of */ \"@babel/runtime-corejs3/core-js-stable/instance/index-of\");\n/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_index_of__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_core_js_stable_instance_index_of__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _root_src_Components_Atoms_Breakpoints__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @root/src/Components/Atoms/Breakpoints */ \"./src/Components/Atoms/Breakpoints.js\");\n/* harmony import */ var _root_Utilities__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @root/Utilities */ \"./Utilities/index.js\");\n\n\n\n\n\n\nvar Box = function Box(props) {\n  var _useBreakpoints = Object(_root_src_Components_Atoms_Breakpoints__WEBPACK_IMPORTED_MODULE_3__[\"useBreakpoints\"])(),\n      breakSize = _useBreakpoints.breakSize;\n\n  var sizes = ['xs', 'sm', 'md', 'lg'];\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(\"div\", _babel_runtime_corejs3_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default()({}, props, {\n    style: Object(_root_Utilities__WEBPACK_IMPORTED_MODULE_4__[\"getStyle\"])(props, _babel_runtime_corejs3_core_js_stable_instance_index_of__WEBPACK_IMPORTED_MODULE_1___default()(sizes).call(sizes, breakSize || 'lg'))\n  }), props && props.children);\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Box);\n\n//# sourceURL=webpack:///./src/Components/Atoms/Box.js?");

/***/ }),

/***/ "./src/Components/Atoms/Breakpoints.js":
/*!*********************************************!*\
  !*** ./src/Components/Atoms/Breakpoints.js ***!
  \*********************************************/
/*! exports provided: useBreakpoints, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"useBreakpoints\", function() { return useBreakpoints; });\n/* harmony import */ var _babel_runtime_corejs3_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs3/helpers/objectWithoutProperties */ \"@babel/runtime-corejs3/helpers/objectWithoutProperties\");\n/* harmony import */ var _babel_runtime_corejs3_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _babel_runtime_corejs3_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs3/helpers/slicedToArray */ \"@babel/runtime-corejs3/helpers/slicedToArray\");\n/* harmony import */ var _babel_runtime_corejs3_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! prop-types */ \"prop-types\");\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_3__);\n\n\n\n\nvar breakpoints = [577, 769, 1025, 1337];\n\nvar windowSize = function windowSize(w) {\n  if (!w) return 'lg';\n  var wSize = null;\n\n  if (w < breakpoints[0]) {\n    wSize = 'xs';\n  } else if (w < breakpoints[1]) {\n    wSize = 'sm';\n  } else if (w < breakpoints[2]) {\n    wSize = 'md';\n  } else {\n    wSize = 'lg';\n  }\n\n  return wSize;\n};\n\nvar useBreakpoints = function useBreakpoints() {\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useState\"])(null),\n      _useState2 = _babel_runtime_corejs3_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1___default()(_useState, 2),\n      size = _useState2[0],\n      setSize = _useState2[1];\n\n  Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useEffect\"])(function () {\n    var winSize = windowSize(window.innerWidth);\n    setSize(winSize);\n\n    var handleResize = function handleResize() {\n      winSize = windowSize(window.innerWidth);\n\n      if (size !== winSize) {\n        setSize(winSize);\n      }\n    };\n\n    window.addEventListener('resize', handleResize);\n    return function () {\n      window.removeEventListener('resize', handleResize);\n    };\n  }, []);\n  return {\n    breakSize: size\n  };\n};\n\nvar Breakpoints = function Breakpoints(_ref) {\n  var children = _ref.children,\n      extra = _babel_runtime_corejs3_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_0___default()(_ref, [\"children\"]);\n\n  var _useBreakpoints = useBreakpoints(),\n      breakSize = _useBreakpoints.breakSize;\n\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_2___default.a.Fragment, null, extra[breakSize || 'lg'] && children);\n};\n\nBreakpoints.defaultProps = {\n  xs: false,\n  sm: false,\n  md: false,\n  lg: false\n};\nBreakpoints.propTypes = {\n  children: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.node.isRequired,\n  xs: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.bool,\n  sm: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.bool,\n  md: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.bool,\n  lg: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.bool\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (Breakpoints);\n\n//# sourceURL=webpack:///./src/Components/Atoms/Breakpoints.js?");

/***/ }),

/***/ "./src/Components/Atoms/Button.js":
/*!****************************************!*\
  !*** ./src/Components/Atoms/Button.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _babel_runtime_corejs3_helpers_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs3/helpers/extends */ \"@babel/runtime-corejs3/helpers/extends\");\n/* harmony import */ var _babel_runtime_corejs3_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_helpers_extends__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _babel_runtime_corejs3_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs3/helpers/objectWithoutProperties */ \"@babel/runtime-corejs3/helpers/objectWithoutProperties\");\n/* harmony import */ var _babel_runtime_corejs3_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _material_ui_core_Button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/Button */ \"@material-ui/core/Button\");\n/* harmony import */ var _material_ui_core_Button__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_3__);\n\n\n\n\n\nvar Button = function Button(_ref) {\n  var children = _ref.children,\n      variant = _ref.variant,\n      size = _ref.size,\n      color = _ref.color,\n      buttonType = _ref.buttonType,\n      props = _babel_runtime_corejs3_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1___default()(_ref, [\"children\", \"variant\", \"size\", \"color\", \"buttonType\"]);\n\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_3___default.a, _babel_runtime_corejs3_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default()({}, props, {\n    variant: variant || \"contained\",\n    color: color || \"primary\",\n    size: size,\n    type: buttonType || \"submit\"\n  }), children);\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Button);\n\n//# sourceURL=webpack:///./src/Components/Atoms/Button.js?");

/***/ }),

/***/ "./src/Components/Atoms/Flex.js":
/*!**************************************!*\
  !*** ./src/Components/Atoms/Flex.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _babel_runtime_corejs3_helpers_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs3/helpers/extends */ \"@babel/runtime-corejs3/helpers/extends\");\n/* harmony import */ var _babel_runtime_corejs3_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_helpers_extends__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_index_of__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs3/core-js-stable/instance/index-of */ \"@babel/runtime-corejs3/core-js-stable/instance/index-of\");\n/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_index_of__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_core_js_stable_instance_index_of__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _root_src_Components_Atoms_Breakpoints__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @root/src/Components/Atoms/Breakpoints */ \"./src/Components/Atoms/Breakpoints.js\");\n/* harmony import */ var _root_Utilities__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @root/Utilities */ \"./Utilities/index.js\");\n\n\n\n\n\n\nvar Flex = function Flex(props) {\n  var _useBreakpoints = Object(_root_src_Components_Atoms_Breakpoints__WEBPACK_IMPORTED_MODULE_3__[\"useBreakpoints\"])(),\n      breakSize = _useBreakpoints.breakSize;\n\n  var sizes = ['xs', 'sm', 'md', 'lg'];\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(\"div\", _babel_runtime_corejs3_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default()({}, props, {\n    style: Object(_root_Utilities__WEBPACK_IMPORTED_MODULE_4__[\"getStyle\"])(props, _babel_runtime_corejs3_core_js_stable_instance_index_of__WEBPACK_IMPORTED_MODULE_1___default()(sizes).call(sizes, breakSize || 'lg'), true)\n  }), props && props.children);\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Flex);\n\n//# sourceURL=webpack:///./src/Components/Atoms/Flex.js?");

/***/ }),

/***/ "./src/Components/Atoms/Snackbar.js":
/*!******************************************!*\
  !*** ./src/Components/Atoms/Snackbar.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _babel_runtime_corejs3_helpers_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs3/helpers/extends */ \"@babel/runtime-corejs3/helpers/extends\");\n/* harmony import */ var _babel_runtime_corejs3_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_helpers_extends__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _babel_runtime_corejs3_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs3/helpers/objectWithoutProperties */ \"@babel/runtime-corejs3/helpers/objectWithoutProperties\");\n/* harmony import */ var _babel_runtime_corejs3_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _root_src_Components_Atoms_Flex__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @root/src/Components/Atoms/Flex */ \"./src/Components/Atoms/Flex.js\");\n/* harmony import */ var _root_src_Components_Atoms_TextType__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @root/src/Components/Atoms/TextType */ \"./src/Components/Atoms/TextType.js\");\n\n\n\n\n\n\nvar SnackBar = function SnackBar(_ref) {\n  var variant = _ref.variant,\n      open = _ref.open,\n      snackbarText = _ref.snackbarText,\n      onClose = _ref.onClose,\n      props = _babel_runtime_corejs3_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1___default()(_ref, [\"variant\", \"open\", \"snackbarText\", \"onClose\"]);\n\n  var styleprops = {};\n\n  if (variant === 'success') {\n    styleprops.bg = 'success';\n  } else if (variant === 'error') {\n    styleprops.bg = 'error';\n  }\n\n  styleprops.height = '50px';\n  styleprops.width = '100%';\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_2___default.a.Fragment, null, \" \", open && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_root_src_Components_Atoms_Flex__WEBPACK_IMPORTED_MODULE_3__[\"default\"], _babel_runtime_corejs3_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default()({}, styleprops, props, {\n    justifyContent: \"center\",\n    position: \"fixed\",\n    style: {\n      top: '0',\n      zIndex: 30,\n      boxShadow: '0 0 10 px 0 rgba(0, 0, 0, 0.4)'\n    }\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_root_src_Components_Atoms_Flex__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n    mx: \"auto\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_root_src_Components_Atoms_TextType__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n    variant: \"status\"\n  }, snackbarText))));\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (SnackBar);\n\n//# sourceURL=webpack:///./src/Components/Atoms/Snackbar.js?");

/***/ }),

/***/ "./src/Components/Atoms/TextField.js":
/*!*******************************************!*\
  !*** ./src/Components/Atoms/TextField.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _babel_runtime_corejs3_core_js_stable_object_define_property__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs3/core-js-stable/object/define-property */ \"@babel/runtime-corejs3/core-js-stable/object/define-property\");\n/* harmony import */ var _babel_runtime_corejs3_core_js_stable_object_define_property__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_core_js_stable_object_define_property__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _babel_runtime_corejs3_core_js_stable_object_define_properties__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs3/core-js-stable/object/define-properties */ \"@babel/runtime-corejs3/core-js-stable/object/define-properties\");\n/* harmony import */ var _babel_runtime_corejs3_core_js_stable_object_define_properties__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_core_js_stable_object_define_properties__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _babel_runtime_corejs3_core_js_stable_object_get_own_property_descriptors__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs3/core-js-stable/object/get-own-property-descriptors */ \"@babel/runtime-corejs3/core-js-stable/object/get-own-property-descriptors\");\n/* harmony import */ var _babel_runtime_corejs3_core_js_stable_object_get_own_property_descriptors__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_core_js_stable_object_get_own_property_descriptors__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_for_each__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs3/core-js-stable/instance/for-each */ \"@babel/runtime-corejs3/core-js-stable/instance/for-each\");\n/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_for_each__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_core_js_stable_instance_for_each__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _babel_runtime_corejs3_core_js_stable_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs3/core-js-stable/object/get-own-property-descriptor */ \"@babel/runtime-corejs3/core-js-stable/object/get-own-property-descriptor\");\n/* harmony import */ var _babel_runtime_corejs3_core_js_stable_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_core_js_stable_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_filter__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs3/core-js-stable/instance/filter */ \"@babel/runtime-corejs3/core-js-stable/instance/filter\");\n/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_filter__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_core_js_stable_instance_filter__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _babel_runtime_corejs3_core_js_stable_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime-corejs3/core-js-stable/object/get-own-property-symbols */ \"@babel/runtime-corejs3/core-js-stable/object/get-own-property-symbols\");\n/* harmony import */ var _babel_runtime_corejs3_core_js_stable_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_core_js_stable_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var _babel_runtime_corejs3_core_js_stable_object_keys__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @babel/runtime-corejs3/core-js-stable/object/keys */ \"@babel/runtime-corejs3/core-js-stable/object/keys\");\n/* harmony import */ var _babel_runtime_corejs3_core_js_stable_object_keys__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_core_js_stable_object_keys__WEBPACK_IMPORTED_MODULE_7__);\n/* harmony import */ var _babel_runtime_corejs3_helpers_extends__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @babel/runtime-corejs3/helpers/extends */ \"@babel/runtime-corejs3/helpers/extends\");\n/* harmony import */ var _babel_runtime_corejs3_helpers_extends__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_helpers_extends__WEBPACK_IMPORTED_MODULE_8__);\n/* harmony import */ var _babel_runtime_corejs3_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @babel/runtime-corejs3/helpers/defineProperty */ \"@babel/runtime-corejs3/helpers/defineProperty\");\n/* harmony import */ var _babel_runtime_corejs3_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_9__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_10__);\n/* harmony import */ var _material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @material-ui/core/TextField */ \"@material-ui/core/TextField\");\n/* harmony import */ var _material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_11__);\n\n\n\n\n\n\n\n\n\n\n\nfunction ownKeys(object, enumerableOnly) { var keys = _babel_runtime_corejs3_core_js_stable_object_keys__WEBPACK_IMPORTED_MODULE_7___default()(object); if (_babel_runtime_corejs3_core_js_stable_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_6___default.a) { var symbols = _babel_runtime_corejs3_core_js_stable_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_6___default()(object); if (enumerableOnly) symbols = _babel_runtime_corejs3_core_js_stable_instance_filter__WEBPACK_IMPORTED_MODULE_5___default()(symbols).call(symbols, function (sym) { return _babel_runtime_corejs3_core_js_stable_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_4___default()(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { var _context; _babel_runtime_corejs3_core_js_stable_instance_for_each__WEBPACK_IMPORTED_MODULE_3___default()(_context = ownKeys(Object(source), true)).call(_context, function (key) { _babel_runtime_corejs3_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_9___default()(target, key, source[key]); }); } else if (_babel_runtime_corejs3_core_js_stable_object_get_own_property_descriptors__WEBPACK_IMPORTED_MODULE_2___default.a) { _babel_runtime_corejs3_core_js_stable_object_define_properties__WEBPACK_IMPORTED_MODULE_1___default()(target, _babel_runtime_corejs3_core_js_stable_object_get_own_property_descriptors__WEBPACK_IMPORTED_MODULE_2___default()(source)); } else { var _context2; _babel_runtime_corejs3_core_js_stable_instance_for_each__WEBPACK_IMPORTED_MODULE_3___default()(_context2 = ownKeys(Object(source))).call(_context2, function (key) { _babel_runtime_corejs3_core_js_stable_object_define_property__WEBPACK_IMPORTED_MODULE_0___default()(target, key, _babel_runtime_corejs3_core_js_stable_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_4___default()(source, key)); }); } } return target; }\n\n\n\n\nvar TextField = function TextField(_ref) {\n  var error = _ref.error,\n      validationMessage = _ref.validationMessage,\n      label = _ref.label,\n      behaviourProps = _ref.behaviourProps,\n      inputType = _ref.inputType,\n      styleProps = _ref.styleProps,\n      input = _ref.input,\n      meta = _ref.meta;\n  var metaProps = {};\n\n  if (meta.error) {\n    if (meta.touched) {\n      metaProps.error = true;\n      metaProps.helperText = meta.error;\n    }\n  }\n\n  console.log(\"metaprops\", metaProps);\n  console.log(\"metaprops\", meta.touched);\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_11___default.a, _babel_runtime_corejs3_helpers_extends__WEBPACK_IMPORTED_MODULE_8___default()({}, input, {\n    label: label,\n    InputLabelProps: _objectSpread({}, behaviourProps),\n    type: inputType,\n    style: styleProps\n  }, metaProps));\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (TextField);\n\n//# sourceURL=webpack:///./src/Components/Atoms/TextField.js?");

/***/ }),

/***/ "./src/Components/Atoms/TextType.js":
/*!******************************************!*\
  !*** ./src/Components/Atoms/TextType.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _root_Utilities__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @root/Utilities */ \"./Utilities/index.js\");\n/* harmony import */ var _TextField__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./TextField */ \"./src/Components/Atoms/TextField.js\");\n\n\n\n\nvar TextType = function TextType(_ref) {\n  var children = _ref.children,\n      variant = _ref.variant;\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"p\", {\n    style: Object(_root_Utilities__WEBPACK_IMPORTED_MODULE_1__[\"getTextStyles\"])(variant)\n  }, children);\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (TextType);\n\n//# sourceURL=webpack:///./src/Components/Atoms/TextType.js?");

/***/ }),

/***/ "./src/Components/Atoms/index.js":
/*!***************************************!*\
  !*** ./src/Components/Atoms/index.js ***!
  \***************************************/
/*! exports provided: Flex, Box, Breakpoints, TextType, TextField, Button, Snackbar */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _root_src_Components_Atoms_Flex__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @root/src/Components/Atoms/Flex */ \"./src/Components/Atoms/Flex.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"Flex\", function() { return _root_src_Components_Atoms_Flex__WEBPACK_IMPORTED_MODULE_0__[\"default\"]; });\n\n/* harmony import */ var _root_src_Components_Atoms_Box__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @root/src/Components/Atoms/Box */ \"./src/Components/Atoms/Box.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"Box\", function() { return _root_src_Components_Atoms_Box__WEBPACK_IMPORTED_MODULE_1__[\"default\"]; });\n\n/* harmony import */ var _root_src_Components_Atoms_Breakpoints__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @root/src/Components/Atoms/Breakpoints */ \"./src/Components/Atoms/Breakpoints.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"Breakpoints\", function() { return _root_src_Components_Atoms_Breakpoints__WEBPACK_IMPORTED_MODULE_2__[\"default\"]; });\n\n/* harmony import */ var _root_src_Components_Atoms_TextType__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @root/src/Components/Atoms/TextType */ \"./src/Components/Atoms/TextType.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"TextType\", function() { return _root_src_Components_Atoms_TextType__WEBPACK_IMPORTED_MODULE_3__[\"default\"]; });\n\n/* harmony import */ var _root_src_Components_Atoms_TextField__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @root/src/Components/Atoms/TextField */ \"./src/Components/Atoms/TextField.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"TextField\", function() { return _root_src_Components_Atoms_TextField__WEBPACK_IMPORTED_MODULE_4__[\"default\"]; });\n\n/* harmony import */ var _root_src_Components_Atoms_Button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @root/src/Components/Atoms/Button */ \"./src/Components/Atoms/Button.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"Button\", function() { return _root_src_Components_Atoms_Button__WEBPACK_IMPORTED_MODULE_5__[\"default\"]; });\n\n/* harmony import */ var _root_src_Components_Atoms_Snackbar__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @root/src/Components/Atoms/Snackbar */ \"./src/Components/Atoms/Snackbar.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"Snackbar\", function() { return _root_src_Components_Atoms_Snackbar__WEBPACK_IMPORTED_MODULE_6__[\"default\"]; });\n\n\n\n\n\n\n\n\n\n\n//# sourceURL=webpack:///./src/Components/Atoms/index.js?");

/***/ }),

/***/ "./src/Components/withAuth.js":
/*!************************************!*\
  !*** ./src/Components/withAuth.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _babel_runtime_corejs3_core_js_stable_object_define_property__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs3/core-js-stable/object/define-property */ \"@babel/runtime-corejs3/core-js-stable/object/define-property\");\n/* harmony import */ var _babel_runtime_corejs3_core_js_stable_object_define_property__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_core_js_stable_object_define_property__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _babel_runtime_corejs3_core_js_stable_object_define_properties__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs3/core-js-stable/object/define-properties */ \"@babel/runtime-corejs3/core-js-stable/object/define-properties\");\n/* harmony import */ var _babel_runtime_corejs3_core_js_stable_object_define_properties__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_core_js_stable_object_define_properties__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _babel_runtime_corejs3_core_js_stable_object_get_own_property_descriptors__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs3/core-js-stable/object/get-own-property-descriptors */ \"@babel/runtime-corejs3/core-js-stable/object/get-own-property-descriptors\");\n/* harmony import */ var _babel_runtime_corejs3_core_js_stable_object_get_own_property_descriptors__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_core_js_stable_object_get_own_property_descriptors__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_for_each__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs3/core-js-stable/instance/for-each */ \"@babel/runtime-corejs3/core-js-stable/instance/for-each\");\n/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_for_each__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_core_js_stable_instance_for_each__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _babel_runtime_corejs3_core_js_stable_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs3/core-js-stable/object/get-own-property-descriptor */ \"@babel/runtime-corejs3/core-js-stable/object/get-own-property-descriptor\");\n/* harmony import */ var _babel_runtime_corejs3_core_js_stable_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_core_js_stable_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _babel_runtime_corejs3_core_js_stable_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs3/core-js-stable/object/get-own-property-symbols */ \"@babel/runtime-corejs3/core-js-stable/object/get-own-property-symbols\");\n/* harmony import */ var _babel_runtime_corejs3_core_js_stable_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_core_js_stable_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _babel_runtime_corejs3_core_js_stable_object_keys__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime-corejs3/core-js-stable/object/keys */ \"@babel/runtime-corejs3/core-js-stable/object/keys\");\n/* harmony import */ var _babel_runtime_corejs3_core_js_stable_object_keys__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_core_js_stable_object_keys__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var _babel_runtime_corejs3_helpers_extends__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @babel/runtime-corejs3/helpers/extends */ \"@babel/runtime-corejs3/helpers/extends\");\n/* harmony import */ var _babel_runtime_corejs3_helpers_extends__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_helpers_extends__WEBPACK_IMPORTED_MODULE_7__);\n/* harmony import */ var _babel_runtime_corejs3_core_js_stable_promise__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @babel/runtime-corejs3/core-js-stable/promise */ \"@babel/runtime-corejs3/core-js-stable/promise\");\n/* harmony import */ var _babel_runtime_corejs3_core_js_stable_promise__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_core_js_stable_promise__WEBPACK_IMPORTED_MODULE_8__);\n/* harmony import */ var _babel_runtime_corejs3_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @babel/runtime-corejs3/helpers/defineProperty */ \"@babel/runtime-corejs3/helpers/defineProperty\");\n/* harmony import */ var _babel_runtime_corejs3_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_9__);\n/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_filter__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @babel/runtime-corejs3/core-js-stable/instance/filter */ \"@babel/runtime-corejs3/core-js-stable/instance/filter\");\n/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_filter__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_core_js_stable_instance_filter__WEBPACK_IMPORTED_MODULE_10__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_11__);\n/* harmony import */ var _root_Utilities_httpRequest__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @root/Utilities/httpRequest */ \"./Utilities/httpRequest.js\");\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! react-redux */ \"react-redux\");\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_13__);\n\n\n\n\n\n\n\n\n\n\n\n\nfunction ownKeys(object, enumerableOnly) { var keys = _babel_runtime_corejs3_core_js_stable_object_keys__WEBPACK_IMPORTED_MODULE_6___default()(object); if (_babel_runtime_corejs3_core_js_stable_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_5___default.a) { var symbols = _babel_runtime_corejs3_core_js_stable_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_5___default()(object); if (enumerableOnly) symbols = _babel_runtime_corejs3_core_js_stable_instance_filter__WEBPACK_IMPORTED_MODULE_10___default()(symbols).call(symbols, function (sym) { return _babel_runtime_corejs3_core_js_stable_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_4___default()(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { var _context; _babel_runtime_corejs3_core_js_stable_instance_for_each__WEBPACK_IMPORTED_MODULE_3___default()(_context = ownKeys(Object(source), true)).call(_context, function (key) { _babel_runtime_corejs3_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_9___default()(target, key, source[key]); }); } else if (_babel_runtime_corejs3_core_js_stable_object_get_own_property_descriptors__WEBPACK_IMPORTED_MODULE_2___default.a) { _babel_runtime_corejs3_core_js_stable_object_define_properties__WEBPACK_IMPORTED_MODULE_1___default()(target, _babel_runtime_corejs3_core_js_stable_object_get_own_property_descriptors__WEBPACK_IMPORTED_MODULE_2___default()(source)); } else { var _context2; _babel_runtime_corejs3_core_js_stable_instance_for_each__WEBPACK_IMPORTED_MODULE_3___default()(_context2 = ownKeys(Object(source))).call(_context2, function (key) { _babel_runtime_corejs3_core_js_stable_object_define_property__WEBPACK_IMPORTED_MODULE_0___default()(target, key, _babel_runtime_corejs3_core_js_stable_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_4___default()(source, key)); }); } } return target; }\n\n\n\n\n\nvar withAuth = function withAuth(Comp) {\n  return function (props) {\n    var _useSelector = Object(react_redux__WEBPACK_IMPORTED_MODULE_13__[\"useSelector\"])(function (state) {\n      return state.user;\n    }),\n        token = _useSelector.token;\n\n    var arrEclusions = [{\n      url: '/api/login',\n      type: 'all'\n    }, {\n      url: '/api/register',\n      type: 'all'\n    }];\n\n    var GetHeaders = function GetHeaders(Headers, url) {\n      var objHeaders = {};\n\n      if (_babel_runtime_corejs3_core_js_stable_instance_filter__WEBPACK_IMPORTED_MODULE_10___default()(arrEclusions).call(arrEclusions, function (item) {\n        return item.url === url.replace(window.location.origin, '') && item.type === 'all';\n      }).length === 0) {\n        objHeaders = _objectSpread({\n          authorization: \"Token \".concat(token)\n        }, Headers);\n      }\n\n      return objHeaders;\n    };\n\n    _root_Utilities_httpRequest__WEBPACK_IMPORTED_MODULE_12__[\"default\"].interceptors.request.use(function (config) {\n      if (config.method === 'post') {\n        return _objectSpread(_objectSpread({}, config), {}, {\n          headers: GetHeaders(config.headers, config.url)\n        });\n      }\n\n      return config;\n    }, function (error) {\n      // commented due to empty bracket, either put something meaningful or remove this code\n      // if (DEBUG) {}\n      return _babel_runtime_corejs3_core_js_stable_promise__WEBPACK_IMPORTED_MODULE_8___default.a.reject(error);\n    });\n    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(Comp, _babel_runtime_corejs3_helpers_extends__WEBPACK_IMPORTED_MODULE_7___default()({}, props, {\n      isAuthorised: !!token\n    }));\n  };\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (withAuth);\n\n//# sourceURL=webpack:///./src/Components/withAuth.js?");

/***/ }),

/***/ "./src/Pages/Login.js":
/*!****************************!*\
  !*** ./src/Pages/Login.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _babel_runtime_corejs3_core_js_stable_object_define_property__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs3/core-js-stable/object/define-property */ \"@babel/runtime-corejs3/core-js-stable/object/define-property\");\n/* harmony import */ var _babel_runtime_corejs3_core_js_stable_object_define_property__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_core_js_stable_object_define_property__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _babel_runtime_corejs3_core_js_stable_object_define_properties__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs3/core-js-stable/object/define-properties */ \"@babel/runtime-corejs3/core-js-stable/object/define-properties\");\n/* harmony import */ var _babel_runtime_corejs3_core_js_stable_object_define_properties__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_core_js_stable_object_define_properties__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _babel_runtime_corejs3_core_js_stable_object_get_own_property_descriptors__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs3/core-js-stable/object/get-own-property-descriptors */ \"@babel/runtime-corejs3/core-js-stable/object/get-own-property-descriptors\");\n/* harmony import */ var _babel_runtime_corejs3_core_js_stable_object_get_own_property_descriptors__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_core_js_stable_object_get_own_property_descriptors__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_for_each__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs3/core-js-stable/instance/for-each */ \"@babel/runtime-corejs3/core-js-stable/instance/for-each\");\n/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_for_each__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_core_js_stable_instance_for_each__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _babel_runtime_corejs3_core_js_stable_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs3/core-js-stable/object/get-own-property-descriptor */ \"@babel/runtime-corejs3/core-js-stable/object/get-own-property-descriptor\");\n/* harmony import */ var _babel_runtime_corejs3_core_js_stable_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_core_js_stable_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_filter__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs3/core-js-stable/instance/filter */ \"@babel/runtime-corejs3/core-js-stable/instance/filter\");\n/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_filter__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_core_js_stable_instance_filter__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _babel_runtime_corejs3_core_js_stable_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime-corejs3/core-js-stable/object/get-own-property-symbols */ \"@babel/runtime-corejs3/core-js-stable/object/get-own-property-symbols\");\n/* harmony import */ var _babel_runtime_corejs3_core_js_stable_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_core_js_stable_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var _babel_runtime_corejs3_core_js_stable_object_keys__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @babel/runtime-corejs3/core-js-stable/object/keys */ \"@babel/runtime-corejs3/core-js-stable/object/keys\");\n/* harmony import */ var _babel_runtime_corejs3_core_js_stable_object_keys__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_core_js_stable_object_keys__WEBPACK_IMPORTED_MODULE_7__);\n/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_values__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @babel/runtime-corejs3/core-js-stable/instance/values */ \"@babel/runtime-corejs3/core-js-stable/instance/values\");\n/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_values__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_core_js_stable_instance_values__WEBPACK_IMPORTED_MODULE_8__);\n/* harmony import */ var _babel_runtime_corejs3_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @babel/runtime-corejs3/helpers/defineProperty */ \"@babel/runtime-corejs3/helpers/defineProperty\");\n/* harmony import */ var _babel_runtime_corejs3_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_9__);\n/* harmony import */ var _babel_runtime_corejs3_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @babel/runtime-corejs3/helpers/slicedToArray */ \"@babel/runtime-corejs3/helpers/slicedToArray\");\n/* harmony import */ var _babel_runtime_corejs3_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_10__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_11__);\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! react-redux */ \"react-redux\");\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_12__);\n/* harmony import */ var _root_src_Components_Atoms__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @root/src/Components/Atoms */ \"./src/Components/Atoms/index.js\");\n/* harmony import */ var react_final_form__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! react-final-form */ \"react-final-form\");\n/* harmony import */ var react_final_form__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(react_final_form__WEBPACK_IMPORTED_MODULE_14__);\n/* harmony import */ var _root_src_Redux_ActionCreators__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @root/src/Redux/ActionCreators */ \"./src/Redux/ActionCreators/index.js\");\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! react-router-dom */ \"react-router-dom\");\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_16__);\n\n\n\n\n\n\n\n\n\n\n\n\nfunction ownKeys(object, enumerableOnly) { var keys = _babel_runtime_corejs3_core_js_stable_object_keys__WEBPACK_IMPORTED_MODULE_7___default()(object); if (_babel_runtime_corejs3_core_js_stable_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_6___default.a) { var symbols = _babel_runtime_corejs3_core_js_stable_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_6___default()(object); if (enumerableOnly) symbols = _babel_runtime_corejs3_core_js_stable_instance_filter__WEBPACK_IMPORTED_MODULE_5___default()(symbols).call(symbols, function (sym) { return _babel_runtime_corejs3_core_js_stable_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_4___default()(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { var _context; _babel_runtime_corejs3_core_js_stable_instance_for_each__WEBPACK_IMPORTED_MODULE_3___default()(_context = ownKeys(Object(source), true)).call(_context, function (key) { _babel_runtime_corejs3_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_9___default()(target, key, source[key]); }); } else if (_babel_runtime_corejs3_core_js_stable_object_get_own_property_descriptors__WEBPACK_IMPORTED_MODULE_2___default.a) { _babel_runtime_corejs3_core_js_stable_object_define_properties__WEBPACK_IMPORTED_MODULE_1___default()(target, _babel_runtime_corejs3_core_js_stable_object_get_own_property_descriptors__WEBPACK_IMPORTED_MODULE_2___default()(source)); } else { var _context2; _babel_runtime_corejs3_core_js_stable_instance_for_each__WEBPACK_IMPORTED_MODULE_3___default()(_context2 = ownKeys(Object(source))).call(_context2, function (key) { _babel_runtime_corejs3_core_js_stable_object_define_property__WEBPACK_IMPORTED_MODULE_0___default()(target, key, _babel_runtime_corejs3_core_js_stable_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_4___default()(source, key)); }); } } return target; }\n\n\n\n\n\n\n\n\n\n\nvar Login = function Login() {\n  var dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_12__[\"useDispatch\"])();\n\n  var _useSelector = Object(react_redux__WEBPACK_IMPORTED_MODULE_12__[\"useSelector\"])(function (state) {\n    return state.user;\n  }),\n      error = _useSelector.error;\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_11__[\"useState\"])(false),\n      _useState2 = _babel_runtime_corejs3_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_10___default()(_useState, 2),\n      openSnackbar = _useState2[0],\n      setSnackBarStatus = _useState2[1];\n\n  var handleSubmit = function handleSubmit(values) {\n    dispatch(Object(_root_src_Redux_ActionCreators__WEBPACK_IMPORTED_MODULE_15__[\"login\"])(_objectSpread({}, values)));\n  };\n\n  Object(react__WEBPACK_IMPORTED_MODULE_11__[\"useEffect\"])(function () {\n    if (error) {\n      console.log(\"error\", error);\n      setSnackBarStatus(true);\n    }\n  }, [error]);\n\n  var isRequired = function isRequired(value) {\n    return value ? undefined : '* Required';\n  };\n\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(_root_src_Components_Atoms__WEBPACK_IMPORTED_MODULE_13__[\"Flex\"], {\n    width: \"100%\",\n    height: \"100%\",\n    flexDirection: \"column\",\n    backgroundImage: \"/signup-bg.jpg\",\n    alignItems: \"center\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(_root_src_Components_Atoms__WEBPACK_IMPORTED_MODULE_13__[\"Box\"], {\n    m: \"auto\",\n    r: \"15px\",\n    bg: \"white\",\n    width: ['95%', '95%', '45%', '45%'],\n    alignItems: \"center\",\n    px: ['25px', '25px', '85px', '85px'],\n    py: \"50px\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(_root_src_Components_Atoms__WEBPACK_IMPORTED_MODULE_13__[\"Box\"], {\n    mb: \"40px\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(_root_src_Components_Atoms__WEBPACK_IMPORTED_MODULE_13__[\"TextType\"], {\n    variant: \"header\"\n  }, \"Login\")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(react_final_form__WEBPACK_IMPORTED_MODULE_14__[\"Form\"], {\n    onSubmit: handleSubmit,\n    render: function render(_ref) {\n      var form = _ref.form,\n          values = _babel_runtime_corejs3_core_js_stable_instance_values__WEBPACK_IMPORTED_MODULE_8___default()(_ref),\n          invalid = _ref.invalid,\n          handleSubmit = _ref.handleSubmit;\n\n      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(\"form\", {\n        onSubmit: handleSubmit\n      }, console.log(\"values\", values), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(react_final_form__WEBPACK_IMPORTED_MODULE_14__[\"Field\"], {\n        name: \"username\",\n        render: function render(_ref2) {\n          var input = _ref2.input,\n              meta = _ref2.meta;\n          return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(_root_src_Components_Atoms__WEBPACK_IMPORTED_MODULE_13__[\"TextField\"], {\n            label: \"Username\",\n            input: input,\n            meta: meta,\n            styleProps: {\n              width: '100%',\n              marginBottom: '16px'\n            }\n          });\n        },\n        validate: isRequired\n      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(react_final_form__WEBPACK_IMPORTED_MODULE_14__[\"Field\"], {\n        name: \"password\",\n        render: function render(_ref3) {\n          var input = _ref3.input,\n              meta = _ref3.meta;\n          return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(_root_src_Components_Atoms__WEBPACK_IMPORTED_MODULE_13__[\"TextField\"], {\n            label: \"Password\",\n            inputType: \"password\",\n            input: input,\n            meta: meta,\n            styleProps: {\n              width: '100%',\n              marginBottom: '50px'\n            }\n          });\n        },\n        validate: isRequired\n      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(_root_src_Components_Atoms__WEBPACK_IMPORTED_MODULE_13__[\"Button\"], {\n        size: \"medium\",\n        buttonType: \"submit\",\n        disabled: invalid\n      }, \"Login\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(_root_src_Components_Atoms__WEBPACK_IMPORTED_MODULE_13__[\"Box\"], {\n        mt: \"15px\"\n      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(_root_src_Components_Atoms__WEBPACK_IMPORTED_MODULE_13__[\"TextType\"], {\n        variant: \"normal\"\n      }, \"Sign up \", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_16__[\"Link\"], {\n        to: \"/register\"\n      }, \"here\"), \".\")));\n    }\n  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(_root_src_Components_Atoms__WEBPACK_IMPORTED_MODULE_13__[\"Snackbar\"], {\n    open: openSnackbar,\n    snackbarText: error && error.description,\n    variant: \"error\",\n    onClose: function onClose() {\n      return setSnackBarStatus(false);\n    }\n  }));\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Object(react_router_dom__WEBPACK_IMPORTED_MODULE_16__[\"withRouter\"])(Login));\n\n//# sourceURL=webpack:///./src/Pages/Login.js?");

/***/ }),

/***/ "./src/Pages/Profile.js":
/*!******************************!*\
  !*** ./src/Pages/Profile.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_map__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs3/core-js-stable/instance/map */ \"@babel/runtime-corejs3/core-js-stable/instance/map\");\n/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_map__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_core_js_stable_instance_map__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _babel_runtime_corejs3_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs3/helpers/slicedToArray */ \"@babel/runtime-corejs3/helpers/slicedToArray\");\n/* harmony import */ var _babel_runtime_corejs3_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-redux */ \"react-redux\");\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _root_src_Components_Atoms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @root/src/Components/Atoms */ \"./src/Components/Atoms/index.js\");\n/* harmony import */ var _root_src_Redux_ActionCreators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @root/src/Redux/ActionCreators */ \"./src/Redux/ActionCreators/index.js\");\n\n\n\n\n\n\n\nvar Profile = function Profile() {\n  var ref = Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useRef\"])(null);\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useState\"])(''),\n      _useState2 = _babel_runtime_corejs3_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1___default()(_useState, 2),\n      currImage = _useState2[0],\n      setCurrentImage = _useState2[1];\n\n  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useState\"])(''),\n      _useState4 = _babel_runtime_corejs3_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1___default()(_useState3, 2),\n      currFileName = _useState4[0],\n      setFileName = _useState4[1];\n\n  var _useState5 = Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useState\"])(''),\n      _useState6 = _babel_runtime_corejs3_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1___default()(_useState5, 2),\n      currDoc = _useState6[0],\n      setDoc = _useState6[1];\n\n  var _useState7 = Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useState\"])(false),\n      _useState8 = _babel_runtime_corejs3_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1___default()(_useState7, 2),\n      openSnackbar = _useState8[0],\n      setSnackBarStatus = _useState8[1];\n\n  var _useState9 = Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useState\"])(true),\n      _useState10 = _babel_runtime_corejs3_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1___default()(_useState9, 2),\n      upload = _useState10[0],\n      setUpload = _useState10[1];\n\n  var dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_3__[\"useDispatch\"])();\n\n  var _useSelector = Object(react_redux__WEBPACK_IMPORTED_MODULE_3__[\"useSelector\"])(function (state) {\n    return state.user;\n  }),\n      status = _useSelector.status,\n      files = _useSelector.files;\n\n  Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useEffect\"])(function () {\n    dispatch(Object(_root_src_Redux_ActionCreators__WEBPACK_IMPORTED_MODULE_5__[\"getFiles\"])());\n  }, []);\n\n  var handleSubmit = function handleSubmit() {\n    if (currImage) dispatch(Object(_root_src_Redux_ActionCreators__WEBPACK_IMPORTED_MODULE_5__[\"uploadFile\"])({\n      image: currImage.split(',')[1],\n      name: currFileName\n    }));else alert(\"select a document to upload\");\n  };\n\n  var readerLoad = function readerLoad(e) {\n    setCurrentImage(e.target.result);\n  };\n\n  var fileUploadChange = function fileUploadChange(e) {\n    var reader = new FileReader();\n    reader.addEventListener(\"load\", readerLoad);\n    setFileName(e.target.files[0].name);\n    reader.readAsDataURL(e.target.files[0]);\n  };\n\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_root_src_Components_Atoms__WEBPACK_IMPORTED_MODULE_4__[\"Flex\"], {\n    width: \"100%\",\n    height: \"100%\",\n    flexDirection: \"column\",\n    bg: \"bgBlue\",\n    alignItems: \"center\"\n  }, upload ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_root_src_Components_Atoms__WEBPACK_IMPORTED_MODULE_4__[\"Box\"], {\n    m: \"auto\",\n    r: \"15px\",\n    bg: \"white\",\n    width: ['95%', '95%', '45%', '45%'],\n    alignItems: \"center\",\n    px: ['25px', '25px', '85px', '85px'],\n    py: \"50px\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_root_src_Components_Atoms__WEBPACK_IMPORTED_MODULE_4__[\"Box\"], {\n    mb: \"40px\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_root_src_Components_Atoms__WEBPACK_IMPORTED_MODULE_4__[\"Flex\"], {\n    flexDirection: \"column\",\n    alignItems: \"center\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_root_src_Components_Atoms__WEBPACK_IMPORTED_MODULE_4__[\"TextType\"], {\n    variant: \"header\"\n  }, \"Profile\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_root_src_Components_Atoms__WEBPACK_IMPORTED_MODULE_4__[\"TextType\"], {\n    variant: \"normal\"\n  }, \"Upload your relevant documents for verification.\"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(\"input\", {\n    ref: ref,\n    type: \"file\",\n    style: {\n      display: 'none'\n    },\n    onChange: fileUploadChange\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_root_src_Components_Atoms__WEBPACK_IMPORTED_MODULE_4__[\"Flex\"], {\n    style: {\n      cursor: 'pointer',\n      borderStyle: 'dashed'\n    },\n    mx: \"auto\",\n    onClick: function onClick() {\n      return ref.current.click();\n    },\n    alignItems: \"center\",\n    width: ['90%', '90%', '70%', '70%'],\n    height: ['70px', '70px', '400px', '400px']\n  }, currImage ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(\"img\", {\n    src: currImage,\n    style: {\n      width: '100%',\n      height: '100%'\n    }\n  }) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_root_src_Components_Atoms__WEBPACK_IMPORTED_MODULE_4__[\"Box\"], {\n    m: \"auto\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_root_src_Components_Atoms__WEBPACK_IMPORTED_MODULE_4__[\"TextType\"], {\n    variant: \"normal\"\n  }, \"Click to Upload\"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_root_src_Components_Atoms__WEBPACK_IMPORTED_MODULE_4__[\"Flex\"], {\n    alignItems: \"center\",\n    flexDirection: \"column\",\n    mt: \"25px\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_root_src_Components_Atoms__WEBPACK_IMPORTED_MODULE_4__[\"Button\"], {\n    buttonType: \"button\",\n    style: {\n      marginLeft: 'auto',\n      marginRight: 'auto'\n    },\n    onClick: handleSubmit\n  }, \"Save\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_root_src_Components_Atoms__WEBPACK_IMPORTED_MODULE_4__[\"Button\"], {\n    buttonType: \"button\",\n    style: {\n      marginLeft: 'auto',\n      marginRight: 'auto',\n      marginTop: '16px'\n    },\n    onClick: function onClick() {\n      return setUpload(false);\n    }\n  }, \"View Documents\")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_root_src_Components_Atoms__WEBPACK_IMPORTED_MODULE_4__[\"Snackbar\"], {\n    open: openSnackbar,\n    snackbarText: status && status.description,\n    variant: status && status.type,\n    onClose: function onClose() {\n      return setSnackBarStatus(false);\n    }\n  })) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_root_src_Components_Atoms__WEBPACK_IMPORTED_MODULE_4__[\"Box\"], {\n    m: \"auto\",\n    r: \"15px\",\n    bg: \"white\",\n    width: ['95%', '95%', '45%', '45%'],\n    alignItems: \"center\",\n    px: ['25px', '25px', '85px', '85px'],\n    py: \"50px\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_root_src_Components_Atoms__WEBPACK_IMPORTED_MODULE_4__[\"Box\"], {\n    mb: \"40px\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_root_src_Components_Atoms__WEBPACK_IMPORTED_MODULE_4__[\"Flex\"], {\n    flexDirection: \"column\",\n    alignItems: \"center\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_root_src_Components_Atoms__WEBPACK_IMPORTED_MODULE_4__[\"TextType\"], {\n    variant: \"header\"\n  }, \"View Documents\")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_root_src_Components_Atoms__WEBPACK_IMPORTED_MODULE_4__[\"Box\"], {\n    style: {\n      cursor: 'pointer'\n    },\n    onClick: function onClick() {\n      return setUpload(true);\n    }\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_root_src_Components_Atoms__WEBPACK_IMPORTED_MODULE_4__[\"TextType\"], {\n    variant: \"link\"\n  }, \"\\u2190 Upload\")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_root_src_Components_Atoms__WEBPACK_IMPORTED_MODULE_4__[\"Flex\"], {\n    flexDirection: \"column\",\n    alignItems: \"flex-start\",\n    pl: \"20px\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(\"ul\", null, files && _babel_runtime_corejs3_core_js_stable_instance_map__WEBPACK_IMPORTED_MODULE_0___default()(files).call(files, function (item) {\n    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_root_src_Components_Atoms__WEBPACK_IMPORTED_MODULE_4__[\"Box\"], {\n      style: {\n        cursor: 'pointer'\n      },\n      onClick: function onClick() {\n        return setDoc(item.fileName);\n      }\n    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_root_src_Components_Atoms__WEBPACK_IMPORTED_MODULE_4__[\"TextType\"], {\n      variant: \"link\"\n    }, item.displayName));\n  })))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_root_src_Components_Atoms__WEBPACK_IMPORTED_MODULE_4__[\"Box\"], null)));\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Profile);\n\n//# sourceURL=webpack:///./src/Pages/Profile.js?");

/***/ }),

/***/ "./src/Pages/Register.js":
/*!*******************************!*\
  !*** ./src/Pages/Register.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _babel_runtime_corejs3_core_js_stable_object_define_property__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs3/core-js-stable/object/define-property */ \"@babel/runtime-corejs3/core-js-stable/object/define-property\");\n/* harmony import */ var _babel_runtime_corejs3_core_js_stable_object_define_property__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_core_js_stable_object_define_property__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _babel_runtime_corejs3_core_js_stable_object_define_properties__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs3/core-js-stable/object/define-properties */ \"@babel/runtime-corejs3/core-js-stable/object/define-properties\");\n/* harmony import */ var _babel_runtime_corejs3_core_js_stable_object_define_properties__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_core_js_stable_object_define_properties__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _babel_runtime_corejs3_core_js_stable_object_get_own_property_descriptors__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs3/core-js-stable/object/get-own-property-descriptors */ \"@babel/runtime-corejs3/core-js-stable/object/get-own-property-descriptors\");\n/* harmony import */ var _babel_runtime_corejs3_core_js_stable_object_get_own_property_descriptors__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_core_js_stable_object_get_own_property_descriptors__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_for_each__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs3/core-js-stable/instance/for-each */ \"@babel/runtime-corejs3/core-js-stable/instance/for-each\");\n/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_for_each__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_core_js_stable_instance_for_each__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _babel_runtime_corejs3_core_js_stable_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs3/core-js-stable/object/get-own-property-descriptor */ \"@babel/runtime-corejs3/core-js-stable/object/get-own-property-descriptor\");\n/* harmony import */ var _babel_runtime_corejs3_core_js_stable_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_core_js_stable_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_filter__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs3/core-js-stable/instance/filter */ \"@babel/runtime-corejs3/core-js-stable/instance/filter\");\n/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_filter__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_core_js_stable_instance_filter__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _babel_runtime_corejs3_core_js_stable_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime-corejs3/core-js-stable/object/get-own-property-symbols */ \"@babel/runtime-corejs3/core-js-stable/object/get-own-property-symbols\");\n/* harmony import */ var _babel_runtime_corejs3_core_js_stable_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_core_js_stable_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var _babel_runtime_corejs3_core_js_stable_object_keys__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @babel/runtime-corejs3/core-js-stable/object/keys */ \"@babel/runtime-corejs3/core-js-stable/object/keys\");\n/* harmony import */ var _babel_runtime_corejs3_core_js_stable_object_keys__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_core_js_stable_object_keys__WEBPACK_IMPORTED_MODULE_7__);\n/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_values__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @babel/runtime-corejs3/core-js-stable/instance/values */ \"@babel/runtime-corejs3/core-js-stable/instance/values\");\n/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_values__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_core_js_stable_instance_values__WEBPACK_IMPORTED_MODULE_8__);\n/* harmony import */ var _babel_runtime_corejs3_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @babel/runtime-corejs3/helpers/defineProperty */ \"@babel/runtime-corejs3/helpers/defineProperty\");\n/* harmony import */ var _babel_runtime_corejs3_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_9__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_10__);\n/* harmony import */ var _root_src_Components_Atoms__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @root/src/Components/Atoms */ \"./src/Components/Atoms/index.js\");\n/* harmony import */ var react_final_form__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! react-final-form */ \"react-final-form\");\n/* harmony import */ var react_final_form__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(react_final_form__WEBPACK_IMPORTED_MODULE_12__);\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! react-redux */ \"react-redux\");\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_13__);\n/* harmony import */ var _root_src_Redux_ActionCreators__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @root/src/Redux/ActionCreators */ \"./src/Redux/ActionCreators/index.js\");\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! react-router-dom */ \"react-router-dom\");\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_15__);\n\n\n\n\n\n\n\n\n\n\n\nfunction ownKeys(object, enumerableOnly) { var keys = _babel_runtime_corejs3_core_js_stable_object_keys__WEBPACK_IMPORTED_MODULE_7___default()(object); if (_babel_runtime_corejs3_core_js_stable_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_6___default.a) { var symbols = _babel_runtime_corejs3_core_js_stable_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_6___default()(object); if (enumerableOnly) symbols = _babel_runtime_corejs3_core_js_stable_instance_filter__WEBPACK_IMPORTED_MODULE_5___default()(symbols).call(symbols, function (sym) { return _babel_runtime_corejs3_core_js_stable_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_4___default()(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { var _context; _babel_runtime_corejs3_core_js_stable_instance_for_each__WEBPACK_IMPORTED_MODULE_3___default()(_context = ownKeys(Object(source), true)).call(_context, function (key) { _babel_runtime_corejs3_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_9___default()(target, key, source[key]); }); } else if (_babel_runtime_corejs3_core_js_stable_object_get_own_property_descriptors__WEBPACK_IMPORTED_MODULE_2___default.a) { _babel_runtime_corejs3_core_js_stable_object_define_properties__WEBPACK_IMPORTED_MODULE_1___default()(target, _babel_runtime_corejs3_core_js_stable_object_get_own_property_descriptors__WEBPACK_IMPORTED_MODULE_2___default()(source)); } else { var _context2; _babel_runtime_corejs3_core_js_stable_instance_for_each__WEBPACK_IMPORTED_MODULE_3___default()(_context2 = ownKeys(Object(source))).call(_context2, function (key) { _babel_runtime_corejs3_core_js_stable_object_define_property__WEBPACK_IMPORTED_MODULE_0___default()(target, key, _babel_runtime_corejs3_core_js_stable_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_4___default()(source, key)); }); } } return target; }\n\n\n\n\n\n\n\n\n\nvar Register = function Register() {\n  var dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_13__[\"useDispatch\"])();\n\n  var handleSubmit = function handleSubmit(values) {\n    dispatch(Object(_root_src_Redux_ActionCreators__WEBPACK_IMPORTED_MODULE_14__[\"callRegister\"])(_objectSpread({}, values)));\n  };\n\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(_root_src_Components_Atoms__WEBPACK_IMPORTED_MODULE_11__[\"Flex\"], {\n    width: \"100%\",\n    height: \"100%\",\n    flexDirection: \"column\",\n    backgroundImage: \"/signup-bg.jpg\",\n    alignItems: \"center\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(_root_src_Components_Atoms__WEBPACK_IMPORTED_MODULE_11__[\"Box\"], {\n    m: \"auto\",\n    r: \"15px\",\n    bg: \"white\",\n    width: ['95%', '95%', '45%', '45%'],\n    alignItems: \"center\",\n    px: ['25px', '25px', '85px', '85px'],\n    py: \"50px\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(_root_src_Components_Atoms__WEBPACK_IMPORTED_MODULE_11__[\"Box\"], {\n    mb: \"40px\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(_root_src_Components_Atoms__WEBPACK_IMPORTED_MODULE_11__[\"TextType\"], {\n    variant: \"header\"\n  }, \"Register\")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(react_final_form__WEBPACK_IMPORTED_MODULE_12__[\"Form\"], {\n    onSubmit: handleSubmit,\n    validate: function validate(values) {\n      var objErrors = {};\n\n      if (values.password) {\n        if (values.password !== values.confirmPass) objErrors.confirmPass = \"Passwords do not match.\";\n      }\n\n      return objErrors;\n    },\n    render: function render(_ref) {\n      var form = _ref.form,\n          values = _babel_runtime_corejs3_core_js_stable_instance_values__WEBPACK_IMPORTED_MODULE_8___default()(_ref),\n          invalid = _ref.invalid,\n          handleSubmit = _ref.handleSubmit;\n\n      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(\"form\", {\n        onSubmit: handleSubmit\n      }, console.log(\"values\", values), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(_root_src_Components_Atoms__WEBPACK_IMPORTED_MODULE_11__[\"Flex\"], {\n        justifyContent: ['center', 'center', 'space-between', 'space-between'],\n        flexDirection: ['column', 'column', 'row', 'row']\n      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(_root_src_Components_Atoms__WEBPACK_IMPORTED_MODULE_11__[\"Box\"], {\n        width: ['100%', '100%', '47%', '47%']\n      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(react_final_form__WEBPACK_IMPORTED_MODULE_12__[\"Field\"], {\n        name: \"firstName\",\n        render: function render(_ref2) {\n          var input = _ref2.input,\n              meta = _ref2.meta;\n          return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(_root_src_Components_Atoms__WEBPACK_IMPORTED_MODULE_11__[\"TextField\"], {\n            label: \"First Name\",\n            input: input,\n            meta: meta,\n            styleProps: {\n              width: \"100%\",\n              marginBottom: '16px'\n            }\n          });\n        }\n      })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(_root_src_Components_Atoms__WEBPACK_IMPORTED_MODULE_11__[\"Box\"], {\n        width: ['100%', '100%', '47%', '47%']\n      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(react_final_form__WEBPACK_IMPORTED_MODULE_12__[\"Field\"], {\n        name: \"lastName\",\n        render: function render(_ref3) {\n          var input = _ref3.input,\n              meta = _ref3.meta;\n          return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(_root_src_Components_Atoms__WEBPACK_IMPORTED_MODULE_11__[\"TextField\"], {\n            label: \"Last Name\",\n            input: input,\n            meta: meta,\n            styleProps: {\n              width: \"100%\",\n              marginBottom: '16px'\n            }\n          });\n        }\n      }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(react_final_form__WEBPACK_IMPORTED_MODULE_12__[\"Field\"], {\n        name: \"username\",\n        render: function render(_ref4) {\n          var input = _ref4.input,\n              meta = _ref4.meta;\n          return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(_root_src_Components_Atoms__WEBPACK_IMPORTED_MODULE_11__[\"TextField\"], {\n            label: \"Username\",\n            input: input,\n            meta: meta,\n            styleProps: {\n              width: '100%',\n              marginBottom: '16px'\n            }\n          });\n        }\n      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(react_final_form__WEBPACK_IMPORTED_MODULE_12__[\"Field\"], {\n        name: \"password\",\n        render: function render(_ref5) {\n          var input = _ref5.input,\n              meta = _ref5.meta;\n          return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(_root_src_Components_Atoms__WEBPACK_IMPORTED_MODULE_11__[\"TextField\"], {\n            label: \"Password\",\n            inputType: \"password\",\n            input: input,\n            meta: meta,\n            styleProps: {\n              width: '100%',\n              marginBottom: '16px'\n            }\n          });\n        }\n      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(react_final_form__WEBPACK_IMPORTED_MODULE_12__[\"Field\"], {\n        name: \"confirmPass\",\n        render: function render(_ref6) {\n          var input = _ref6.input,\n              meta = _ref6.meta;\n          return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(_root_src_Components_Atoms__WEBPACK_IMPORTED_MODULE_11__[\"TextField\"], {\n            label: \" Confirm Password\",\n            inputType: \"password\",\n            input: input,\n            meta: meta,\n            styleProps: {\n              width: '100%',\n              marginBottom: '50px'\n            }\n          });\n        }\n      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(_root_src_Components_Atoms__WEBPACK_IMPORTED_MODULE_11__[\"Button\"], {\n        size: \"medium\",\n        buttonType: \"submit\"\n      }, \"Register\"));\n    }\n  })));\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Object(react_router_dom__WEBPACK_IMPORTED_MODULE_15__[\"withRouter\"])(Register));\n\n//# sourceURL=webpack:///./src/Pages/Register.js?");

/***/ }),

/***/ "./src/Redux/ActionCreators/index.js":
/*!*******************************************!*\
  !*** ./src/Redux/ActionCreators/index.js ***!
  \*******************************************/
/*! exports provided: login, setLoginData, setLoginError, callRegister, uploadFile, getFiles, setUploadStatus, setFiles */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"login\", function() { return login; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"setLoginData\", function() { return setLoginData; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"setLoginError\", function() { return setLoginError; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"callRegister\", function() { return callRegister; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"uploadFile\", function() { return uploadFile; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getFiles\", function() { return getFiles; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"setUploadStatus\", function() { return setUploadStatus; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"setFiles\", function() { return setFiles; });\n/* harmony import */ var _root_src_Redux_constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @root/src/Redux/constants */ \"./src/Redux/constants.js\");\n\nvar login = function login(payload) {\n  return {\n    type: _root_src_Redux_constants__WEBPACK_IMPORTED_MODULE_0__[\"LOGIN\"],\n    payload: payload\n  };\n};\nvar setLoginData = function setLoginData(payload) {\n  return {\n    type: _root_src_Redux_constants__WEBPACK_IMPORTED_MODULE_0__[\"LOGIN_SUCCESS\"],\n    payload: payload\n  };\n};\nvar setLoginError = function setLoginError(payload) {\n  return {\n    type: _root_src_Redux_constants__WEBPACK_IMPORTED_MODULE_0__[\"LOGIN_FAILURE\"],\n    payload: payload\n  };\n};\nvar callRegister = function callRegister(payload) {\n  return {\n    type: _root_src_Redux_constants__WEBPACK_IMPORTED_MODULE_0__[\"CALL_REGISTER\"],\n    payload: payload\n  };\n};\nvar uploadFile = function uploadFile(payload) {\n  return {\n    type: _root_src_Redux_constants__WEBPACK_IMPORTED_MODULE_0__[\"UPLOAD_FILE\"],\n    payload: payload\n  };\n};\nvar getFiles = function getFiles() {\n  return {\n    type: _root_src_Redux_constants__WEBPACK_IMPORTED_MODULE_0__[\"GET_FILES\"]\n  };\n};\nvar setUploadStatus = function setUploadStatus(payload) {\n  return {\n    type: _root_src_Redux_constants__WEBPACK_IMPORTED_MODULE_0__[\"SET_UPLOAD_STATUS\"],\n    payload: payload\n  };\n};\nvar setFiles = function setFiles(payload) {\n  return {\n    type: _root_src_Redux_constants__WEBPACK_IMPORTED_MODULE_0__[\"SET_FILES\"],\n    payload: payload\n  };\n};\n\n//# sourceURL=webpack:///./src/Redux/ActionCreators/index.js?");

/***/ }),

/***/ "./src/Redux/constants.js":
/*!********************************!*\
  !*** ./src/Redux/constants.js ***!
  \********************************/
/*! exports provided: LOGIN, LOGIN_SUCCESS, LOGIN_FAILURE, CALL_UPLOAD, UPLOAD_SUCCESS, UPLOAD_FAILURE, CALL_REGISTER, UPLOAD_FILE, GET_FILES, SET_UPLOAD_STATUS, SET_FILES */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"LOGIN\", function() { return LOGIN; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"LOGIN_SUCCESS\", function() { return LOGIN_SUCCESS; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"LOGIN_FAILURE\", function() { return LOGIN_FAILURE; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"CALL_UPLOAD\", function() { return CALL_UPLOAD; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"UPLOAD_SUCCESS\", function() { return UPLOAD_SUCCESS; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"UPLOAD_FAILURE\", function() { return UPLOAD_FAILURE; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"CALL_REGISTER\", function() { return CALL_REGISTER; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"UPLOAD_FILE\", function() { return UPLOAD_FILE; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"GET_FILES\", function() { return GET_FILES; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"SET_UPLOAD_STATUS\", function() { return SET_UPLOAD_STATUS; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"SET_FILES\", function() { return SET_FILES; });\nvar LOGIN = 'LOGIN';\nvar LOGIN_SUCCESS = 'LOGIN_SUCCESS';\nvar LOGIN_FAILURE = 'LOGIN_FAILURE';\nvar CALL_UPLOAD = 'CALL_UPLOAD';\nvar UPLOAD_SUCCESS = 'UPLOAD_SUCCESS';\nvar UPLOAD_FAILURE = 'UPLOAD_FAILURE';\nvar CALL_REGISTER = 'CALL_REGISTER';\nvar UPLOAD_FILE = 'UPLOAD_FILE';\nvar GET_FILES = 'GET_FILES';\nvar SET_UPLOAD_STATUS = 'SET_UPLOAD_STATUS';\nvar SET_FILES = 'SET_FILES';\n\n//# sourceURL=webpack:///./src/Redux/constants.js?");

/***/ }),

/***/ "./src/Redux/reducer/index.js":
/*!************************************!*\
  !*** ./src/Redux/reducer/index.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux */ \"redux\");\n/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(redux__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _root_src_Redux_reducer_user__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @root/src/Redux/reducer/user */ \"./src/Redux/reducer/user/index.js\");\n/* harmony import */ var connected_react_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! connected-react-router */ \"connected-react-router\");\n/* harmony import */ var connected_react_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(connected_react_router__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\n\nvar createRootReducer = function createRootReducer(history) {\n  return Object(redux__WEBPACK_IMPORTED_MODULE_0__[\"combineReducers\"])({\n    user: _root_src_Redux_reducer_user__WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n    router: Object(connected_react_router__WEBPACK_IMPORTED_MODULE_2__[\"connectRouter\"])(history)\n  });\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (createRootReducer);\n\n//# sourceURL=webpack:///./src/Redux/reducer/index.js?");

/***/ }),

/***/ "./src/Redux/reducer/user/index.js":
/*!*****************************************!*\
  !*** ./src/Redux/reducer/user/index.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _babel_runtime_corejs3_core_js_stable_object_define_property__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs3/core-js-stable/object/define-property */ \"@babel/runtime-corejs3/core-js-stable/object/define-property\");\n/* harmony import */ var _babel_runtime_corejs3_core_js_stable_object_define_property__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_core_js_stable_object_define_property__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _babel_runtime_corejs3_core_js_stable_object_define_properties__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs3/core-js-stable/object/define-properties */ \"@babel/runtime-corejs3/core-js-stable/object/define-properties\");\n/* harmony import */ var _babel_runtime_corejs3_core_js_stable_object_define_properties__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_core_js_stable_object_define_properties__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _babel_runtime_corejs3_core_js_stable_object_get_own_property_descriptors__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs3/core-js-stable/object/get-own-property-descriptors */ \"@babel/runtime-corejs3/core-js-stable/object/get-own-property-descriptors\");\n/* harmony import */ var _babel_runtime_corejs3_core_js_stable_object_get_own_property_descriptors__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_core_js_stable_object_get_own_property_descriptors__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_for_each__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs3/core-js-stable/instance/for-each */ \"@babel/runtime-corejs3/core-js-stable/instance/for-each\");\n/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_for_each__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_core_js_stable_instance_for_each__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _babel_runtime_corejs3_core_js_stable_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs3/core-js-stable/object/get-own-property-descriptor */ \"@babel/runtime-corejs3/core-js-stable/object/get-own-property-descriptor\");\n/* harmony import */ var _babel_runtime_corejs3_core_js_stable_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_core_js_stable_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_filter__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs3/core-js-stable/instance/filter */ \"@babel/runtime-corejs3/core-js-stable/instance/filter\");\n/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_filter__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_core_js_stable_instance_filter__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _babel_runtime_corejs3_core_js_stable_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime-corejs3/core-js-stable/object/get-own-property-symbols */ \"@babel/runtime-corejs3/core-js-stable/object/get-own-property-symbols\");\n/* harmony import */ var _babel_runtime_corejs3_core_js_stable_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_core_js_stable_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var _babel_runtime_corejs3_core_js_stable_object_keys__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @babel/runtime-corejs3/core-js-stable/object/keys */ \"@babel/runtime-corejs3/core-js-stable/object/keys\");\n/* harmony import */ var _babel_runtime_corejs3_core_js_stable_object_keys__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_core_js_stable_object_keys__WEBPACK_IMPORTED_MODULE_7__);\n/* harmony import */ var _babel_runtime_corejs3_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @babel/runtime-corejs3/helpers/defineProperty */ \"@babel/runtime-corejs3/helpers/defineProperty\");\n/* harmony import */ var _babel_runtime_corejs3_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_8__);\n/* harmony import */ var _root_src_Redux_constants__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @root/src/Redux/constants */ \"./src/Redux/constants.js\");\n\n\n\n\n\n\n\n\n\n\nfunction ownKeys(object, enumerableOnly) { var keys = _babel_runtime_corejs3_core_js_stable_object_keys__WEBPACK_IMPORTED_MODULE_7___default()(object); if (_babel_runtime_corejs3_core_js_stable_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_6___default.a) { var symbols = _babel_runtime_corejs3_core_js_stable_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_6___default()(object); if (enumerableOnly) symbols = _babel_runtime_corejs3_core_js_stable_instance_filter__WEBPACK_IMPORTED_MODULE_5___default()(symbols).call(symbols, function (sym) { return _babel_runtime_corejs3_core_js_stable_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_4___default()(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { var _context; _babel_runtime_corejs3_core_js_stable_instance_for_each__WEBPACK_IMPORTED_MODULE_3___default()(_context = ownKeys(Object(source), true)).call(_context, function (key) { _babel_runtime_corejs3_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_8___default()(target, key, source[key]); }); } else if (_babel_runtime_corejs3_core_js_stable_object_get_own_property_descriptors__WEBPACK_IMPORTED_MODULE_2___default.a) { _babel_runtime_corejs3_core_js_stable_object_define_properties__WEBPACK_IMPORTED_MODULE_1___default()(target, _babel_runtime_corejs3_core_js_stable_object_get_own_property_descriptors__WEBPACK_IMPORTED_MODULE_2___default()(source)); } else { var _context2; _babel_runtime_corejs3_core_js_stable_instance_for_each__WEBPACK_IMPORTED_MODULE_3___default()(_context2 = ownKeys(Object(source))).call(_context2, function (key) { _babel_runtime_corejs3_core_js_stable_object_define_property__WEBPACK_IMPORTED_MODULE_0___default()(target, key, _babel_runtime_corejs3_core_js_stable_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_4___default()(source, key)); }); } } return target; }\n\n\n\nvar reducer = function reducer() {\n  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};\n  var action = arguments.length > 1 ? arguments[1] : undefined;\n\n  switch (action.type) {\n    case _root_src_Redux_constants__WEBPACK_IMPORTED_MODULE_9__[\"GET_FILES\"]:\n    case _root_src_Redux_constants__WEBPACK_IMPORTED_MODULE_9__[\"UPLOAD_FILE\"]:\n    case _root_src_Redux_constants__WEBPACK_IMPORTED_MODULE_9__[\"CALL_REGISTER\"]:\n    case _root_src_Redux_constants__WEBPACK_IMPORTED_MODULE_9__[\"LOGIN\"]:\n      return state;\n\n    case _root_src_Redux_constants__WEBPACK_IMPORTED_MODULE_9__[\"LOGIN_SUCCESS\"]:\n      return _objectSpread(_objectSpread({}, state), action.payload);\n\n    case _root_src_Redux_constants__WEBPACK_IMPORTED_MODULE_9__[\"LOGIN_FAILURE\"]:\n      return _objectSpread(_objectSpread({}, state), {}, {\n        error: action.payload\n      });\n\n    case _root_src_Redux_constants__WEBPACK_IMPORTED_MODULE_9__[\"SET_UPLOAD_STATUS\"]:\n      return _objectSpread(_objectSpread({}, state), {}, {\n        status: action.payload\n      });\n\n    case _root_src_Redux_constants__WEBPACK_IMPORTED_MODULE_9__[\"SET_FILES\"]:\n      return _objectSpread(_objectSpread({}, state), {}, {\n        files: action.payload\n      });\n\n    default:\n      return state;\n  }\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (reducer);\n\n//# sourceURL=webpack:///./src/Redux/reducer/user/index.js?");

/***/ }),

/***/ "./src/Routes.js":
/*!***********************!*\
  !*** ./src/Routes.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var connected_react_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! connected-react-router */ \"connected-react-router\");\n/* harmony import */ var connected_react_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(connected_react_router__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ \"react-redux\");\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _root_src_Pages_Login__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @root/src/Pages/Login */ \"./src/Pages/Login.js\");\n/* harmony import */ var _root_src_Pages_Register__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @root/src/Pages/Register */ \"./src/Pages/Register.js\");\n/* harmony import */ var _root_src_Pages_Profile__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @root/src/Pages/Profile */ \"./src/Pages/Profile.js\");\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-router-dom */ \"react-router-dom\");\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var _root_src_Components_withAuth__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @root/src/Components/withAuth */ \"./src/Components/withAuth.js\");\n\n\n\n\n\n\n\n\n\nvar Routes = function Routes(_ref) {\n  var isAuthorised = _ref.isAuthorised;\n  var history = Object(react_router_dom__WEBPACK_IMPORTED_MODULE_6__[\"useHistory\"])();\n  var location = Object(react_router_dom__WEBPACK_IMPORTED_MODULE_6__[\"useLocation\"])();\n  Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useEffect\"])(function () {\n    console.log(\"edfref\");\n  }, []);\n  Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useEffect\"])(function () {\n    var jssStyles = document.querySelector('#jss-server-side');\n\n    if (jssStyles) {\n      jssStyles.parentElement.removeChild(jssStyles);\n    }\n  }, []);\n  console.log(\"loc\", location.pathname);\n\n  var checkAuthorization = function checkAuthorization(Comp) {\n    return Object(react_router_dom__WEBPACK_IMPORTED_MODULE_6__[\"withRouter\"])(function (_ref2) {\n      var history = _ref2.history;\n      Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useEffect\"])(function () {\n        if (!isAuthorised) history.push(\"/\");\n      }, []);\n      return isAuthorised ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Comp, null) : '';\n    });\n  };\n\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_6__[\"Route\"], {\n    exact: true,\n    path: \"/\",\n    component: _root_src_Pages_Login__WEBPACK_IMPORTED_MODULE_3__[\"default\"]\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_6__[\"Route\"], {\n    path: \"/register\",\n    component: _root_src_Pages_Register__WEBPACK_IMPORTED_MODULE_4__[\"default\"]\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_6__[\"Route\"], {\n    path: \"/profile\",\n    component: _root_src_Pages_Profile__WEBPACK_IMPORTED_MODULE_5__[\"default\"]\n  }));\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Object(_root_src_Components_withAuth__WEBPACK_IMPORTED_MODULE_7__[\"default\"])(Routes));\n\n//# sourceURL=webpack:///./src/Routes.js?");

/***/ }),

/***/ "./src/app_server.js":
/*!***************************!*\
  !*** ./src/app_server.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_concat__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs3/core-js-stable/instance/concat */ \"@babel/runtime-corejs3/core-js-stable/instance/concat\");\n/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_concat__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_core_js_stable_instance_concat__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_dom_server__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-dom/server */ \"react-dom/server\");\n/* harmony import */ var react_dom_server__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_dom_server__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! express */ \"express\");\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(express__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _Routes__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Routes */ \"./src/Routes.js\");\n/* harmony import */ var _root_src_Redux_reducer__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @root/src/Redux/reducer */ \"./src/Redux/reducer/index.js\");\n/* harmony import */ var redux_logger__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! redux-logger */ \"redux-logger\");\n/* harmony import */ var redux_logger__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(redux_logger__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var redux_saga__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! redux-saga */ \"redux-saga\");\n/* harmony import */ var redux_saga__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(redux_saga__WEBPACK_IMPORTED_MODULE_7__);\n/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! redux */ \"redux\");\n/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(redux__WEBPACK_IMPORTED_MODULE_8__);\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react-router-dom */ \"react-router-dom\");\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_9__);\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react-redux */ \"react-redux\");\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_10__);\n/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @material-ui/core/styles */ \"@material-ui/core/styles\");\n/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_11__);\n/* harmony import */ var _root_src_theme__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @root/src/theme */ \"./src/theme.js\");\n/* harmony import */ var regenerator_runtime_runtime__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! regenerator-runtime/runtime */ \"regenerator-runtime/runtime\");\n/* harmony import */ var regenerator_runtime_runtime__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(regenerator_runtime_runtime__WEBPACK_IMPORTED_MODULE_13__);\n/* harmony import */ var core_js_stable__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! core-js/stable */ \"core-js/stable\");\n/* harmony import */ var core_js_stable__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(core_js_stable__WEBPACK_IMPORTED_MODULE_14__);\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\nvar sagaMiddleware = redux_saga__WEBPACK_IMPORTED_MODULE_7___default()();\nvar middleware = [sagaMiddleware, redux_logger__WEBPACK_IMPORTED_MODULE_6___default.a];\nvar store = Object(redux__WEBPACK_IMPORTED_MODULE_8__[\"createStore\"])(Object(_root_src_Redux_reducer__WEBPACK_IMPORTED_MODULE_5__[\"default\"])({}), redux__WEBPACK_IMPORTED_MODULE_8__[\"applyMiddleware\"].apply(void 0, middleware));\nvar window = {};\nvar router = express__WEBPACK_IMPORTED_MODULE_3___default.a.Router();\n\nfunction main() {\n  router.get('*', function (req, res) {\n    var _context;\n\n    var sheets = new _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_11__[\"ServerStyleSheets\"]();\n    var app = react_dom_server__WEBPACK_IMPORTED_MODULE_2___default.a.renderToString(sheets.collect( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_11__[\"ThemeProvider\"], {\n      theme: _root_src_theme__WEBPACK_IMPORTED_MODULE_12__[\"default\"]\n    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_redux__WEBPACK_IMPORTED_MODULE_10__[\"Provider\"], {\n      store: store\n    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_9__[\"StaticRouter\"], {\n      location: req.url\n    }, \" \", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_9__[\"Switch\"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_Routes__WEBPACK_IMPORTED_MODULE_4__[\"default\"], null)))))));\n    var css = sheets.toString();\n    res.send(_babel_runtime_corejs3_core_js_stable_instance_concat__WEBPACK_IMPORTED_MODULE_0___default()(_context = \"<html>\\n    <head>\\n    <title>Home Test</title>\\n    <meta\\n    name=\\\"viewport\\\"\\n    content=\\\"width=device-width,minimum-scale=1,initial-scale=1\\\"\\n     />\\n     <style>\".concat(css, \"</style>\\n    <script src=\\\"/dist/client.js\\\" defer></script>\\n    <style>\\n    html, body, p, div, h1, h2, h3, h4, h5, h6, ul, ol, dl, img, pre, form, fieldset {\\n      padding: 0;\\n      margin: 0;\\n    }\\n    </style>\\n    </head>\\n    <body>\\n    <div style=\\\"width:100%;height:100%;\\\" id=\\\"root\\\">\")).call(_context, app, \"</div>\\n    </body>\\n  </html>\"));\n  });\n  return router;\n}\n\n;\n/* harmony default export */ __webpack_exports__[\"default\"] = (main);\n\n//# sourceURL=webpack:///./src/app_server.js?");

/***/ }),

/***/ "./src/theme.js":
/*!**********************!*\
  !*** ./src/theme.js ***!
  \**********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @material-ui/core/styles */ \"@material-ui/core/styles\");\n/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _material_ui_core_colors_red__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/core/colors/red */ \"@material-ui/core/colors/red\");\n/* harmony import */ var _material_ui_core_colors_red__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_colors_red__WEBPACK_IMPORTED_MODULE_1__);\n\n // Create a theme instance.\n\nvar theme = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_0__[\"createMuiTheme\"])({\n  palette: {\n    primary: {\n      main: '#556cd6'\n    },\n    secondary: {\n      main: '#19857b'\n    },\n    error: {\n      main: _material_ui_core_colors_red__WEBPACK_IMPORTED_MODULE_1___default.a.A400\n    },\n    background: {\n      \"default\": '#fff'\n    }\n  }\n});\n/* harmony default export */ __webpack_exports__[\"default\"] = (theme);\n\n//# sourceURL=webpack:///./src/theme.js?");

/***/ }),

/***/ "@babel/runtime-corejs3/core-js-stable/array/is-array":
/*!***********************************************************************!*\
  !*** external "@babel/runtime-corejs3/core-js-stable/array/is-array" ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"@babel/runtime-corejs3/core-js-stable/array/is-array\");\n\n//# sourceURL=webpack:///external_%22@babel/runtime-corejs3/core-js-stable/array/is-array%22?");

/***/ }),

/***/ "@babel/runtime-corejs3/core-js-stable/instance/concat":
/*!************************************************************************!*\
  !*** external "@babel/runtime-corejs3/core-js-stable/instance/concat" ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"@babel/runtime-corejs3/core-js-stable/instance/concat\");\n\n//# sourceURL=webpack:///external_%22@babel/runtime-corejs3/core-js-stable/instance/concat%22?");

/***/ }),

/***/ "@babel/runtime-corejs3/core-js-stable/instance/filter":
/*!************************************************************************!*\
  !*** external "@babel/runtime-corejs3/core-js-stable/instance/filter" ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"@babel/runtime-corejs3/core-js-stable/instance/filter\");\n\n//# sourceURL=webpack:///external_%22@babel/runtime-corejs3/core-js-stable/instance/filter%22?");

/***/ }),

/***/ "@babel/runtime-corejs3/core-js-stable/instance/for-each":
/*!**************************************************************************!*\
  !*** external "@babel/runtime-corejs3/core-js-stable/instance/for-each" ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"@babel/runtime-corejs3/core-js-stable/instance/for-each\");\n\n//# sourceURL=webpack:///external_%22@babel/runtime-corejs3/core-js-stable/instance/for-each%22?");

/***/ }),

/***/ "@babel/runtime-corejs3/core-js-stable/instance/index-of":
/*!**************************************************************************!*\
  !*** external "@babel/runtime-corejs3/core-js-stable/instance/index-of" ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"@babel/runtime-corejs3/core-js-stable/instance/index-of\");\n\n//# sourceURL=webpack:///external_%22@babel/runtime-corejs3/core-js-stable/instance/index-of%22?");

/***/ }),

/***/ "@babel/runtime-corejs3/core-js-stable/instance/map":
/*!*********************************************************************!*\
  !*** external "@babel/runtime-corejs3/core-js-stable/instance/map" ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"@babel/runtime-corejs3/core-js-stable/instance/map\");\n\n//# sourceURL=webpack:///external_%22@babel/runtime-corejs3/core-js-stable/instance/map%22?");

/***/ }),

/***/ "@babel/runtime-corejs3/core-js-stable/instance/values":
/*!************************************************************************!*\
  !*** external "@babel/runtime-corejs3/core-js-stable/instance/values" ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"@babel/runtime-corejs3/core-js-stable/instance/values\");\n\n//# sourceURL=webpack:///external_%22@babel/runtime-corejs3/core-js-stable/instance/values%22?");

/***/ }),

/***/ "@babel/runtime-corejs3/core-js-stable/object/define-properties":
/*!*********************************************************************************!*\
  !*** external "@babel/runtime-corejs3/core-js-stable/object/define-properties" ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"@babel/runtime-corejs3/core-js-stable/object/define-properties\");\n\n//# sourceURL=webpack:///external_%22@babel/runtime-corejs3/core-js-stable/object/define-properties%22?");

/***/ }),

/***/ "@babel/runtime-corejs3/core-js-stable/object/define-property":
/*!*******************************************************************************!*\
  !*** external "@babel/runtime-corejs3/core-js-stable/object/define-property" ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"@babel/runtime-corejs3/core-js-stable/object/define-property\");\n\n//# sourceURL=webpack:///external_%22@babel/runtime-corejs3/core-js-stable/object/define-property%22?");

/***/ }),

/***/ "@babel/runtime-corejs3/core-js-stable/object/get-own-property-descriptor":
/*!*******************************************************************************************!*\
  !*** external "@babel/runtime-corejs3/core-js-stable/object/get-own-property-descriptor" ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"@babel/runtime-corejs3/core-js-stable/object/get-own-property-descriptor\");\n\n//# sourceURL=webpack:///external_%22@babel/runtime-corejs3/core-js-stable/object/get-own-property-descriptor%22?");

/***/ }),

/***/ "@babel/runtime-corejs3/core-js-stable/object/get-own-property-descriptors":
/*!********************************************************************************************!*\
  !*** external "@babel/runtime-corejs3/core-js-stable/object/get-own-property-descriptors" ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"@babel/runtime-corejs3/core-js-stable/object/get-own-property-descriptors\");\n\n//# sourceURL=webpack:///external_%22@babel/runtime-corejs3/core-js-stable/object/get-own-property-descriptors%22?");

/***/ }),

/***/ "@babel/runtime-corejs3/core-js-stable/object/get-own-property-symbols":
/*!****************************************************************************************!*\
  !*** external "@babel/runtime-corejs3/core-js-stable/object/get-own-property-symbols" ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"@babel/runtime-corejs3/core-js-stable/object/get-own-property-symbols\");\n\n//# sourceURL=webpack:///external_%22@babel/runtime-corejs3/core-js-stable/object/get-own-property-symbols%22?");

/***/ }),

/***/ "@babel/runtime-corejs3/core-js-stable/object/keys":
/*!********************************************************************!*\
  !*** external "@babel/runtime-corejs3/core-js-stable/object/keys" ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"@babel/runtime-corejs3/core-js-stable/object/keys\");\n\n//# sourceURL=webpack:///external_%22@babel/runtime-corejs3/core-js-stable/object/keys%22?");

/***/ }),

/***/ "@babel/runtime-corejs3/core-js-stable/promise":
/*!****************************************************************!*\
  !*** external "@babel/runtime-corejs3/core-js-stable/promise" ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"@babel/runtime-corejs3/core-js-stable/promise\");\n\n//# sourceURL=webpack:///external_%22@babel/runtime-corejs3/core-js-stable/promise%22?");

/***/ }),

/***/ "@babel/runtime-corejs3/helpers/defineProperty":
/*!****************************************************************!*\
  !*** external "@babel/runtime-corejs3/helpers/defineProperty" ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"@babel/runtime-corejs3/helpers/defineProperty\");\n\n//# sourceURL=webpack:///external_%22@babel/runtime-corejs3/helpers/defineProperty%22?");

/***/ }),

/***/ "@babel/runtime-corejs3/helpers/extends":
/*!*********************************************************!*\
  !*** external "@babel/runtime-corejs3/helpers/extends" ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"@babel/runtime-corejs3/helpers/extends\");\n\n//# sourceURL=webpack:///external_%22@babel/runtime-corejs3/helpers/extends%22?");

/***/ }),

/***/ "@babel/runtime-corejs3/helpers/objectWithoutProperties":
/*!*************************************************************************!*\
  !*** external "@babel/runtime-corejs3/helpers/objectWithoutProperties" ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"@babel/runtime-corejs3/helpers/objectWithoutProperties\");\n\n//# sourceURL=webpack:///external_%22@babel/runtime-corejs3/helpers/objectWithoutProperties%22?");

/***/ }),

/***/ "@babel/runtime-corejs3/helpers/slicedToArray":
/*!***************************************************************!*\
  !*** external "@babel/runtime-corejs3/helpers/slicedToArray" ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"@babel/runtime-corejs3/helpers/slicedToArray\");\n\n//# sourceURL=webpack:///external_%22@babel/runtime-corejs3/helpers/slicedToArray%22?");

/***/ }),

/***/ "@material-ui/core/Button":
/*!*******************************************!*\
  !*** external "@material-ui/core/Button" ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"@material-ui/core/Button\");\n\n//# sourceURL=webpack:///external_%22@material-ui/core/Button%22?");

/***/ }),

/***/ "@material-ui/core/TextField":
/*!**********************************************!*\
  !*** external "@material-ui/core/TextField" ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"@material-ui/core/TextField\");\n\n//# sourceURL=webpack:///external_%22@material-ui/core/TextField%22?");

/***/ }),

/***/ "@material-ui/core/colors/red":
/*!***********************************************!*\
  !*** external "@material-ui/core/colors/red" ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"@material-ui/core/colors/red\");\n\n//# sourceURL=webpack:///external_%22@material-ui/core/colors/red%22?");

/***/ }),

/***/ "@material-ui/core/styles":
/*!*******************************************!*\
  !*** external "@material-ui/core/styles" ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"@material-ui/core/styles\");\n\n//# sourceURL=webpack:///external_%22@material-ui/core/styles%22?");

/***/ }),

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"axios\");\n\n//# sourceURL=webpack:///external_%22axios%22?");

/***/ }),

/***/ "connected-react-router":
/*!*****************************************!*\
  !*** external "connected-react-router" ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"connected-react-router\");\n\n//# sourceURL=webpack:///external_%22connected-react-router%22?");

/***/ }),

/***/ "core-js/stable":
/*!*********************************!*\
  !*** external "core-js/stable" ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"core-js/stable\");\n\n//# sourceURL=webpack:///external_%22core-js/stable%22?");

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

/***/ }),

/***/ "react-final-form":
/*!***********************************!*\
  !*** external "react-final-form" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react-final-form\");\n\n//# sourceURL=webpack:///external_%22react-final-form%22?");

/***/ }),

/***/ "react-redux":
/*!******************************!*\
  !*** external "react-redux" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react-redux\");\n\n//# sourceURL=webpack:///external_%22react-redux%22?");

/***/ }),

/***/ "react-router-dom":
/*!***********************************!*\
  !*** external "react-router-dom" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react-router-dom\");\n\n//# sourceURL=webpack:///external_%22react-router-dom%22?");

/***/ }),

/***/ "redux":
/*!************************!*\
  !*** external "redux" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"redux\");\n\n//# sourceURL=webpack:///external_%22redux%22?");

/***/ }),

/***/ "redux-logger":
/*!*******************************!*\
  !*** external "redux-logger" ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"redux-logger\");\n\n//# sourceURL=webpack:///external_%22redux-logger%22?");

/***/ }),

/***/ "redux-saga":
/*!*****************************!*\
  !*** external "redux-saga" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"redux-saga\");\n\n//# sourceURL=webpack:///external_%22redux-saga%22?");

/***/ }),

/***/ "regenerator-runtime/runtime":
/*!**********************************************!*\
  !*** external "regenerator-runtime/runtime" ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"regenerator-runtime/runtime\");\n\n//# sourceURL=webpack:///external_%22regenerator-runtime/runtime%22?");

/***/ })

/******/ });