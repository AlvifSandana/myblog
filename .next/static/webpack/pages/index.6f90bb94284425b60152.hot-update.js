webpackHotUpdate_N_E("pages/index",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Home; });\n/* harmony import */ var _home_alvif_Documents_sinau_myblog_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/regenerator */ \"./node_modules/@babel/runtime/regenerator/index.js\");\n/* harmony import */ var _home_alvif_Documents_sinau_myblog_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_home_alvif_Documents_sinau_myblog_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _home_alvif_Documents_sinau_myblog_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ \"./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _components_jumbotron__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/jumbotron */ \"./components/jumbotron.js\");\n/* harmony import */ var _components_article__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/article */ \"./components/article.js\");\n/* harmony import */ var _components_pagination__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/pagination */ \"./components/pagination.js\");\n/* harmony import */ var _components_sidebar__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/sidebar */ \"./components/sidebar.js\");\n/* harmony import */ var _components_layout__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/layout */ \"./components/layout.js\");\n/* harmony import */ var _data_dummy_post_json__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../data-dummy/post.json */ \"./data-dummy/post.json\");\nvar _data_dummy_post_json__WEBPACK_IMPORTED_MODULE_8___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../data-dummy/post.json */ \"./data-dummy/post.json\", 1);\n\n\n\nvar _jsxFileName = \"/home/alvif/Documents/sinau/myblog/pages/index.js\";\n// import Head from \"next/head\"\n\n\n\n\n // import Menu from '../data-dummy/menu.json';\n\n\nfunction Home(_ref) {\n  var props = _ref.props;\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(_components_layout__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {\n    LayoutProps: props.menu,\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(_components_jumbotron__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {}, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 13,\n      columnNumber: 9\n    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(\"div\", {\n      className: \"row\",\n      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(\"div\", {\n        className: \"col-md-8\",\n        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(\"h3\", {\n          className: \"pb-4 mb-4 fst-italic border-bottom\",\n          children: \"From the Firehose\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 16,\n          columnNumber: 13\n        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(_components_pagination__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {}, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 25,\n          columnNumber: 13\n        }, this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 15,\n        columnNumber: 11\n      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(_components_sidebar__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {}, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 27,\n        columnNumber: 11\n      }, this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 14,\n      columnNumber: 9\n    }, this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 12,\n    columnNumber: 7\n  }, this);\n}\n_c = Home;\nHome.getInitialProps = /*#__PURE__*/Object(_home_alvif_Documents_sinau_myblog_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__[\"default\"])( /*#__PURE__*/_home_alvif_Documents_sinau_myblog_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {\n  var req, res;\n  return _home_alvif_Documents_sinau_myblog_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {\n    while (1) {\n      switch (_context.prev = _context.next) {\n        case 0:\n          _context.next = 2;\n          return fetch('http://localhost:3000/api/hello');\n\n        case 2:\n          req = _context.sent;\n          _context.next = 5;\n          return req.json();\n\n        case 5:\n          res = _context.sent;\n          console.log(_data_dummy_post_json__WEBPACK_IMPORTED_MODULE_8__);\n          return _context.abrupt(\"return\", {\n            props: {\n              menu: res,\n              post: _data_dummy_post_json__WEBPACK_IMPORTED_MODULE_8__\n            }\n          });\n\n        case 8:\n        case \"end\":\n          return _context.stop();\n      }\n    }\n  }, _callee);\n}));\n\nvar _c;\n\n$RefreshReg$(_c, \"Home\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/next/dist/compiled/webpack/harmony-module.js */ \"./node_modules/next/dist/compiled/webpack/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanM/NDRkOCJdLCJuYW1lcyI6WyJIb21lIiwicHJvcHMiLCJtZW51IiwiZ2V0SW5pdGlhbFByb3BzIiwiZmV0Y2giLCJyZXEiLCJqc29uIiwicmVzIiwiY29uc29sZSIsImxvZyIsIlBvc3QiLCJwb3N0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0NBRUE7O0FBQ0E7QUFFZSxTQUFTQSxJQUFULE9BQXlCO0FBQUEsTUFBVEMsS0FBUyxRQUFUQSxLQUFTO0FBQ3RDLHNCQUNJLHFFQUFDLDBEQUFEO0FBQVEsZUFBVyxFQUFJQSxLQUFLLENBQUNDLElBQTdCO0FBQUEsNEJBQ0UscUVBQUMsNkRBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQURGLGVBRUU7QUFBSyxlQUFTLEVBQUMsS0FBZjtBQUFBLDhCQUNFO0FBQUssaUJBQVMsRUFBQyxVQUFmO0FBQUEsZ0NBQ0U7QUFBSSxtQkFBUyxFQUFDLG9DQUFkO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQURGLGVBVUUscUVBQUMsOERBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFWRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FERixlQWFFLHFFQUFDLDJEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FiRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFGRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFESjtBQW9CRDtLQXJCdUJGLEk7QUF1QnhCQSxJQUFJLENBQUNHLGVBQUwsK1JBQXVCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBQ0hDLEtBQUssQ0FBQyxpQ0FBRCxDQURGOztBQUFBO0FBQ2ZDLGFBRGU7QUFBQTtBQUFBLGlCQUVIQSxHQUFHLENBQUNDLElBQUosRUFGRzs7QUFBQTtBQUVmQyxhQUZlO0FBR3JCQyxpQkFBTyxDQUFDQyxHQUFSLENBQVlDLGtEQUFaO0FBSHFCLDJDQUlkO0FBQ0xULGlCQUFLLEVBQUc7QUFDTkMsa0JBQUksRUFBR0ssR0FERDtBQUVOSSxrQkFBSSxFQUFHRCxrREFBSUE7QUFGTDtBQURILFdBSmM7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsQ0FBdkIiLCJmaWxlIjoiLi9wYWdlcy9pbmRleC5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIGltcG9ydCBIZWFkIGZyb20gXCJuZXh0L2hlYWRcIlxuaW1wb3J0IEp1bWJvdHJvbiBmcm9tIFwiLi4vY29tcG9uZW50cy9qdW1ib3Ryb25cIjtcbmltcG9ydCBBcnRpY2xlIGZyb20gXCIuLi9jb21wb25lbnRzL2FydGljbGVcIjtcbmltcG9ydCBQYWdpbmF0aW9uIGZyb20gXCIuLi9jb21wb25lbnRzL3BhZ2luYXRpb25cIjtcbmltcG9ydCBTaWRlYmFyIGZyb20gXCIuLi9jb21wb25lbnRzL3NpZGViYXJcIjtcbmltcG9ydCBMYXlvdXQgZnJvbSBcIi4uL2NvbXBvbmVudHMvbGF5b3V0XCI7XG4vLyBpbXBvcnQgTWVudSBmcm9tICcuLi9kYXRhLWR1bW15L21lbnUuanNvbic7XG5pbXBvcnQgUG9zdCBmcm9tICcuLi9kYXRhLWR1bW15L3Bvc3QuanNvbic7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEhvbWUoeyBwcm9wcyB9KSB7XG4gIHJldHVybiAoXG4gICAgICA8TGF5b3V0IExheW91dFByb3BzID0ge3Byb3BzLm1lbnV9PlxuICAgICAgICA8SnVtYm90cm9uIC8+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93XCI+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtbWQtOFwiPlxuICAgICAgICAgICAgPGgzIGNsYXNzTmFtZT1cInBiLTQgbWItNCBmc3QtaXRhbGljIGJvcmRlci1ib3R0b21cIj5cbiAgICAgICAgICAgICAgRnJvbSB0aGUgRmlyZWhvc2VcbiAgICAgICAgICAgIDwvaDM+XG4gICAgICAgICAgICB7IFxuICAgICAgICAgICAgICAvLyBwb3N0Lm1hcChwID0+IChcbiAgICAgICAgICAgICAgLy8gICAgIDxBcnRpY2xlIGtleT17cC5pZH0gcG9zdCA9IHtwfS8+XG4gICAgICAgICAgICAgIC8vICAgKVxuICAgICAgICAgICAgICAvLyApXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICA8UGFnaW5hdGlvbiAvPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxTaWRlYmFyIC8+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9MYXlvdXQ+XG4gICk7XG59XG5cbkhvbWUuZ2V0SW5pdGlhbFByb3BzID0gYXN5bmMoKSA9PiB7XG4gIGNvbnN0IHJlcSA9IGF3YWl0IGZldGNoKCdodHRwOi8vbG9jYWxob3N0OjMwMDAvYXBpL2hlbGxvJylcbiAgY29uc3QgcmVzID0gYXdhaXQgcmVxLmpzb24oKVxuICBjb25zb2xlLmxvZyhQb3N0KVxuICByZXR1cm4ge1xuICAgIHByb3BzIDoge1xuICAgICAgbWVudSA6IHJlcyxcbiAgICAgIHBvc3QgOiBQb3N0XG4gICAgfVxuICB9XG59Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/index.js\n");

/***/ })

})