module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../ssr-module-cache.js');
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
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
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
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./pages/api/hello.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./pages/api/hello.js":
/*!****************************!*\
  !*** ./pages/api/hello.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n// Next.js API route support: https://nextjs.org/docs/api-routes/introduction\n/* harmony default export */ __webpack_exports__[\"default\"] = ((req, res) => {\n  res.status(200).json([{\n    \"kode\": \"nx\",\n    \"title\": \"Next JS\"\n  }, {\n    \"kode\": \"deno\",\n    \"title\": \"Deno TS\"\n  }, {\n    \"kode\": \"php\",\n    \"title\": \"PHP\"\n  } // {\"kode\" : \"js\", \"title\" : \"Javascript\"},\n  // {\"kode\" : \"aspx\", \"title\" : \"ASPX\"}\n  ]);\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9hcGkvaGVsbG8uanM/MzcxOCJdLCJuYW1lcyI6WyJyZXEiLCJyZXMiLCJzdGF0dXMiLCJqc29uIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUFBO0FBRWUsZ0VBQUNBLEdBQUQsRUFBTUMsR0FBTixLQUFjO0FBQzNCQSxLQUFHLENBQUNDLE1BQUosQ0FBVyxHQUFYLEVBQWdCQyxJQUFoQixDQUFxQixDQUNuQjtBQUFDLFlBQVMsSUFBVjtBQUFnQixhQUFVO0FBQTFCLEdBRG1CLEVBRW5CO0FBQUMsWUFBUyxNQUFWO0FBQWtCLGFBQVU7QUFBNUIsR0FGbUIsRUFHbkI7QUFBQyxZQUFTLEtBQVY7QUFBaUIsYUFBVTtBQUEzQixHQUhtQixDQUluQjtBQUNBO0FBTG1CLEdBQXJCO0FBT0QsQ0FSRCIsImZpbGUiOiIuL3BhZ2VzL2FwaS9oZWxsby5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIE5leHQuanMgQVBJIHJvdXRlIHN1cHBvcnQ6IGh0dHBzOi8vbmV4dGpzLm9yZy9kb2NzL2FwaS1yb3V0ZXMvaW50cm9kdWN0aW9uXG5cbmV4cG9ydCBkZWZhdWx0IChyZXEsIHJlcykgPT4ge1xuICByZXMuc3RhdHVzKDIwMCkuanNvbihbXG4gICAge1wia29kZVwiIDogXCJueFwiLCBcInRpdGxlXCIgOiBcIk5leHQgSlNcIn0sXG4gICAge1wia29kZVwiIDogXCJkZW5vXCIsIFwidGl0bGVcIiA6IFwiRGVubyBUU1wifSxcbiAgICB7XCJrb2RlXCIgOiBcInBocFwiLCBcInRpdGxlXCIgOiBcIlBIUFwifSxcbiAgICAvLyB7XCJrb2RlXCIgOiBcImpzXCIsIFwidGl0bGVcIiA6IFwiSmF2YXNjcmlwdFwifSxcbiAgICAvLyB7XCJrb2RlXCIgOiBcImFzcHhcIiwgXCJ0aXRsZVwiIDogXCJBU1BYXCJ9XG4gIF0pXG59XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/api/hello.js\n");

/***/ })

/******/ });