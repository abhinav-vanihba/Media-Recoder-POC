"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./src/pages/index.tsx":
/*!*****************************!*\
  !*** ./src/pages/index.tsx ***!
  \*****************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/dynamic */ \"./node_modules/next/dynamic.js\");\n/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_dynamic__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\nvar _this = undefined;\n\n\n\nvar _s = $RefreshSig$();\nvar DynamicComponent = next_dynamic__WEBPACK_IMPORTED_MODULE_1___default()(function() {\n    return __webpack_require__.e(/*! import() */ \"node_modules_react-media-recorder_index_js\").then(__webpack_require__.t.bind(__webpack_require__, /*! react-media-recorder */ \"./node_modules/react-media-recorder/index.js\", 23)).then(function(mod) {\n        return mod.ReactMediaRecorder;\n    });\n}, {\n    loadableGenerated: {\n        modules: [\n            \"index.tsx -> \" + \"react-media-recorder\"\n        ]\n    },\n    ssr: false\n});\n_c = DynamicComponent;\nvar Home = function() {\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(\"audio\"), selectedMedia = ref[0], setSelectedMedia = ref[1];\n    var handleChange = function(e) {\n        setSelectedMedia(e.target.value);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"container\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"main\", {\n            className: \"container\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"select\", {\n                    value: selectedMedia,\n                    onChange: function(value) {\n                        return handleChange(value);\n                    },\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"option\", {\n                            value: \"audio\",\n                            children: \"Orange\"\n                        }, void 0, false, {\n                            fileName: \"/Users/abhinavbansal/Documents/Projects/React Media Recorder/Media-Recoder-POC/src/pages/index.tsx\",\n                            lineNumber: 22,\n                            columnNumber: 11\n                        }, _this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"option\", {\n                            value: \"Radish\",\n                            children: \"Radish\"\n                        }, void 0, false, {\n                            fileName: \"/Users/abhinavbansal/Documents/Projects/React Media Recorder/Media-Recoder-POC/src/pages/index.tsx\",\n                            lineNumber: 23,\n                            columnNumber: 11\n                        }, _this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"option\", {\n                            value: \"Cherry\",\n                            children: \"Cherry\"\n                        }, void 0, false, {\n                            fileName: \"/Users/abhinavbansal/Documents/Projects/React Media Recorder/Media-Recoder-POC/src/pages/index.tsx\",\n                            lineNumber: 24,\n                            columnNumber: 11\n                        }, _this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/abhinavbansal/Documents/Projects/React Media Recorder/Media-Recoder-POC/src/pages/index.tsx\",\n                    lineNumber: 21,\n                    columnNumber: 9\n                }, _this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(DynamicComponent, {\n                        audio: true,\n                        render: function(param) {\n                            var status = param.status, startRecording = param.startRecording, stopRecording = param.stopRecording, mediaBlobUrl = param.mediaBlobUrl;\n                            return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                        children: [\n                                            \"Audio Recording Status:- \",\n                                            status\n                                        ]\n                                    }, void 0, true, void 0, void 0),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                        onClick: startRecording,\n                                        children: \"Start Audio Recording\"\n                                    }, void 0, false, void 0, void 0),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                        onClick: stopRecording,\n                                        children: \"Stop Audio Recording\"\n                                    }, void 0, false, void 0, void 0),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"video\", {\n                                        src: mediaBlobUrl,\n                                        controls: true,\n                                        autoPlay: true\n                                    }, void 0, false, void 0, void 0)\n                                ]\n                            }, void 0, true, void 0, void 0);\n                        }\n                    }, void 0, false, {\n                        fileName: \"/Users/abhinavbansal/Documents/Projects/React Media Recorder/Media-Recoder-POC/src/pages/index.tsx\",\n                        lineNumber: 27,\n                        columnNumber: 11\n                    }, _this)\n                }, void 0, false, {\n                    fileName: \"/Users/abhinavbansal/Documents/Projects/React Media Recorder/Media-Recoder-POC/src/pages/index.tsx\",\n                    lineNumber: 26,\n                    columnNumber: 9\n                }, _this)\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/abhinavbansal/Documents/Projects/React Media Recorder/Media-Recoder-POC/src/pages/index.tsx\",\n            lineNumber: 20,\n            columnNumber: 7\n        }, _this)\n    }, void 0, false, {\n        fileName: \"/Users/abhinavbansal/Documents/Projects/React Media Recorder/Media-Recoder-POC/src/pages/index.tsx\",\n        lineNumber: 19,\n        columnNumber: 5\n    }, _this);\n};\n_s(Home, \"g1cAk6o/8Q1VdevhYe48swV0N0I=\");\n_c1 = Home;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Home);\nvar _c, _c1;\n$RefreshReg$(_c, \"DynamicComponent\");\n$RefreshReg$(_c1, \"Home\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXMvaW5kZXgudHN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQTs7QUFDbUM7QUFDVzs7QUFDOUMsSUFBTUUsZ0JBQWdCLEdBQUdGLG1EQUFPLENBQzlCO1dBQU0seU5BQThCLENBQUNHLElBQUksQ0FBQyxTQUFDQyxHQUFHO2VBQUtBLEdBQUcsQ0FBQ0Msa0JBQWtCO0tBQUEsQ0FBQztDQUFBOzs7Ozs7SUFFeEVDLEdBQUcsRUFBRSxLQUFLO0VBRWI7QUFMS0osS0FBQUEsZ0JBQWdCO0FBT3RCLElBQU1LLElBQUksR0FBYSxXQUFNOztJQUMzQixJQUEwQ04sR0FBaUIsR0FBakJBLCtDQUFRLENBQUMsT0FBTyxDQUFDLEVBWDdELGFBV3NCLEdBQXNCQSxHQUFpQixHQUF2QyxFQVh0QixnQkFXd0MsR0FBSUEsR0FBaUIsR0FBckI7SUFFdEMsSUFBTVMsWUFBWSxHQUFHLFNBQUNDLENBQWlDLEVBQUs7UUFDMURGLGdCQUFnQixDQUFDRSxDQUFDLENBQUNDLE1BQU0sQ0FBQ0MsS0FBSyxDQUFDLENBQUM7S0FDbEM7SUFFRCxxQkFDRSw4REFBQ0MsS0FBRztRQUFDQyxTQUFTLEVBQUMsV0FBVztrQkFDeEIsNEVBQUNDLE1BQUk7WUFBQ0QsU0FBUyxFQUFDLFdBQVc7OzhCQUN6Qiw4REFBQ0UsUUFBTTtvQkFBQ0osS0FBSyxFQUFFTCxhQUFhO29CQUFFVSxRQUFRLEVBQUUsU0FBQ0wsS0FBSzsrQkFBS0gsWUFBWSxDQUFDRyxLQUFLLENBQUM7cUJBQUE7O3NDQUNwRSw4REFBQ00sUUFBTTs0QkFBQ04sS0FBSyxFQUFDLE9BQU87c0NBQUMsUUFBTTs7Ozs7aUNBQVM7c0NBQ3JDLDhEQUFDTSxRQUFNOzRCQUFDTixLQUFLLEVBQUMsUUFBUTtzQ0FBQyxRQUFNOzs7OztpQ0FBUztzQ0FDdEMsOERBQUNNLFFBQU07NEJBQUNOLEtBQUssRUFBQyxRQUFRO3NDQUFDLFFBQU07Ozs7O2lDQUFTOzs7Ozs7eUJBQy9COzhCQUNULDhEQUFDQyxLQUFHOzhCQUNGLDRFQUFDWixnQkFBZ0I7d0JBQ2ZrQixLQUFLO3dCQUNMQyxNQUFNLEVBQUU7Z0NBQ05DLE1BQU0sU0FBTkEsTUFBTSxFQUNOQyxjQUFjLFNBQWRBLGNBQWMsRUFDZEMsYUFBYSxTQUFiQSxhQUFhLEVBQ2JDLFlBQVksU0FBWkEsWUFBWTtpREFFWiw4REFBQ1gsS0FBRzs7a0RBQ0YsOERBQUNZLEdBQUM7OzRDQUFDLDJCQUF5Qjs0Q0FBQ0osTUFBTTs7b0VBQUs7a0RBQ3hDLDhEQUFDSyxRQUFNO3dDQUFDQyxPQUFPLEVBQUVMLGNBQWM7a0RBQUUsdUJBQXFCO3FFQUFTO2tEQUMvRCw4REFBQ0ksUUFBTTt3Q0FBQ0MsT0FBTyxFQUFFSixhQUFhO2tEQUFFLHNCQUFvQjtxRUFBUztrREFDN0QsOERBQUNLLE9BQUs7d0NBQUNDLEdBQUcsRUFBRUwsWUFBWTt3Q0FBRU0sUUFBUTt3Q0FBQ0MsUUFBUTtxRUFBRzs7NERBQzFDO3lCQUNQOzs7Ozs2QkFDRDs7Ozs7eUJBQ0U7Ozs7OztpQkFDRDs7Ozs7YUFDSCxDQUNOO0NBQ0g7R0FwQ0t6QixJQUFJO0FBQUpBLE1BQUFBLElBQUk7QUFzQ1YsK0RBQWVBLElBQUksRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvcGFnZXMvaW5kZXgudHN4PzE5YTAiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmV4dFBhZ2UgfSBmcm9tIFwibmV4dFwiO1xuaW1wb3J0IGR5bmFtaWMgZnJvbSBcIm5leHQvZHluYW1pY1wiO1xuaW1wb3J0IHsgQ2hhbmdlRXZlbnQsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5jb25zdCBEeW5hbWljQ29tcG9uZW50ID0gZHluYW1pYyhcbiAgKCkgPT4gaW1wb3J0KFwicmVhY3QtbWVkaWEtcmVjb3JkZXJcIikudGhlbigobW9kKSA9PiBtb2QuUmVhY3RNZWRpYVJlY29yZGVyKSxcbiAge1xuICAgIHNzcjogZmFsc2UsXG4gIH1cbik7XG5cbmNvbnN0IEhvbWU6IE5leHRQYWdlID0gKCkgPT4ge1xuICBjb25zdCBbc2VsZWN0ZWRNZWRpYSwgc2V0U2VsZWN0ZWRNZWRpYV0gPSB1c2VTdGF0ZShcImF1ZGlvXCIpO1xuXG4gIGNvbnN0IGhhbmRsZUNoYW5nZSA9IChlOiBDaGFuZ2VFdmVudDxIVE1MU2VsZWN0RWxlbWVudD4pID0+IHtcbiAgICBzZXRTZWxlY3RlZE1lZGlhKGUudGFyZ2V0LnZhbHVlKTtcbiAgfTtcblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyXCI+XG4gICAgICA8bWFpbiBjbGFzc05hbWU9XCJjb250YWluZXJcIj5cbiAgICAgICAgPHNlbGVjdCB2YWx1ZT17c2VsZWN0ZWRNZWRpYX0gb25DaGFuZ2U9eyh2YWx1ZSkgPT4gaGFuZGxlQ2hhbmdlKHZhbHVlKX0+XG4gICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cImF1ZGlvXCI+T3JhbmdlPC9vcHRpb24+XG4gICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIlJhZGlzaFwiPlJhZGlzaDwvb3B0aW9uPlxuICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJDaGVycnlcIj5DaGVycnk8L29wdGlvbj5cbiAgICAgICAgPC9zZWxlY3Q+XG4gICAgICAgIDxkaXY+XG4gICAgICAgICAgPER5bmFtaWNDb21wb25lbnRcbiAgICAgICAgICAgIGF1ZGlvXG4gICAgICAgICAgICByZW5kZXI9eyh7XG4gICAgICAgICAgICAgIHN0YXR1cyxcbiAgICAgICAgICAgICAgc3RhcnRSZWNvcmRpbmcsXG4gICAgICAgICAgICAgIHN0b3BSZWNvcmRpbmcsXG4gICAgICAgICAgICAgIG1lZGlhQmxvYlVybCxcbiAgICAgICAgICAgIH0pID0+IChcbiAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICA8cD5BdWRpbyBSZWNvcmRpbmcgU3RhdHVzOi0ge3N0YXR1c308L3A+XG4gICAgICAgICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXtzdGFydFJlY29yZGluZ30+U3RhcnQgQXVkaW8gUmVjb3JkaW5nPC9idXR0b24+XG4gICAgICAgICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXtzdG9wUmVjb3JkaW5nfT5TdG9wIEF1ZGlvIFJlY29yZGluZzwvYnV0dG9uPlxuICAgICAgICAgICAgICAgIDx2aWRlbyBzcmM9e21lZGlhQmxvYlVybH0gY29udHJvbHMgYXV0b1BsYXkgLz5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICApfVxuICAgICAgICAgIC8+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9tYWluPlxuICAgIDwvZGl2PlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgSG9tZTtcbiJdLCJuYW1lcyI6WyJkeW5hbWljIiwidXNlU3RhdGUiLCJEeW5hbWljQ29tcG9uZW50IiwidGhlbiIsIm1vZCIsIlJlYWN0TWVkaWFSZWNvcmRlciIsInNzciIsIkhvbWUiLCJzZWxlY3RlZE1lZGlhIiwic2V0U2VsZWN0ZWRNZWRpYSIsImhhbmRsZUNoYW5nZSIsImUiLCJ0YXJnZXQiLCJ2YWx1ZSIsImRpdiIsImNsYXNzTmFtZSIsIm1haW4iLCJzZWxlY3QiLCJvbkNoYW5nZSIsIm9wdGlvbiIsImF1ZGlvIiwicmVuZGVyIiwic3RhdHVzIiwic3RhcnRSZWNvcmRpbmciLCJzdG9wUmVjb3JkaW5nIiwibWVkaWFCbG9iVXJsIiwicCIsImJ1dHRvbiIsIm9uQ2xpY2siLCJ2aWRlbyIsInNyYyIsImNvbnRyb2xzIiwiYXV0b1BsYXkiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/pages/index.tsx\n");

/***/ })

});