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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/dynamic */ \"./node_modules/next/dynamic.js\");\n/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_dynamic__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\nvar _this = undefined;\n\n\n\nvar _s = $RefreshSig$();\nvar DynamicComponent = next_dynamic__WEBPACK_IMPORTED_MODULE_1___default()(function() {\n    return __webpack_require__.e(/*! import() */ \"node_modules_react-media-recorder_index_js\").then(__webpack_require__.t.bind(__webpack_require__, /*! react-media-recorder */ \"./node_modules/react-media-recorder/index.js\", 23)).then(function(mod) {\n        return mod.ReactMediaRecorder;\n    });\n}, {\n    loadableGenerated: {\n        modules: [\n            \"index.tsx -> \" + \"react-media-recorder\"\n        ]\n    },\n    ssr: false\n});\n_c = DynamicComponent;\nvar Home = function() {\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(\"audio\"), selectedMedia = ref[0], setSelectedMedia = ref[1];\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(\"audio\"), mediaBlob = ref1[0], setmediaBlob = ref1[1];\n    var handleChange = function(e) {\n        setSelectedMedia(e.target.value);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"container\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"main\", {\n            className: \"container\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"select\", {\n                    value: selectedMedia,\n                    onChange: function(value) {\n                        return handleChange(value);\n                    },\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"option\", {\n                            value: \"audio\",\n                            children: \"Audio\"\n                        }, void 0, false, {\n                            fileName: \"/Users/abhinavbansal/Documents/Projects/React Media Recorder/Media-Recoder-POC/src/pages/index.tsx\",\n                            lineNumber: 24,\n                            columnNumber: 11\n                        }, _this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"option\", {\n                            value: \"video\",\n                            children: \"Video\"\n                        }, void 0, false, {\n                            fileName: \"/Users/abhinavbansal/Documents/Projects/React Media Recorder/Media-Recoder-POC/src/pages/index.tsx\",\n                            lineNumber: 25,\n                            columnNumber: 11\n                        }, _this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"option\", {\n                            value: \"screen\",\n                            children: \"Screen\"\n                        }, void 0, false, {\n                            fileName: \"/Users/abhinavbansal/Documents/Projects/React Media Recorder/Media-Recoder-POC/src/pages/index.tsx\",\n                            lineNumber: 26,\n                            columnNumber: 11\n                        }, _this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/abhinavbansal/Documents/Projects/React Media Recorder/Media-Recoder-POC/src/pages/index.tsx\",\n                    lineNumber: 23,\n                    columnNumber: 9\n                }, _this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(DynamicComponent, {\n                        audio: selectedMedia === \"audio\" ? true : false,\n                        video: selectedMedia === \"video\" ? true : false,\n                        screen: selectedMedia === \"screen\" ? true : false,\n                        render: function(param) {\n                            var status = param.status, startRecording = param.startRecording, stopRecording = param.stopRecording, mediaBlobUrl = param.mediaBlobUrl;\n                            return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                        children: [\n                                            \"Recording Status:- \",\n                                            status\n                                        ]\n                                    }, void 0, true, void 0, void 0),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                        onClick: startRecording,\n                                        children: \"Start Recording\"\n                                    }, void 0, false, void 0, void 0),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                        onClick: stopRecording,\n                                        children: \"Stop Recording\"\n                                    }, void 0, false, void 0, void 0),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"video\", {\n                                        src: mediaBlob,\n                                        controls: true,\n                                        autoPlay: true\n                                    }, void 0, false, void 0, void 0)\n                                ]\n                            }, void 0, true, void 0, void 0);\n                        }\n                    }, void 0, false, {\n                        fileName: \"/Users/abhinavbansal/Documents/Projects/React Media Recorder/Media-Recoder-POC/src/pages/index.tsx\",\n                        lineNumber: 29,\n                        columnNumber: 11\n                    }, _this)\n                }, void 0, false, {\n                    fileName: \"/Users/abhinavbansal/Documents/Projects/React Media Recorder/Media-Recoder-POC/src/pages/index.tsx\",\n                    lineNumber: 28,\n                    columnNumber: 9\n                }, _this)\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/abhinavbansal/Documents/Projects/React Media Recorder/Media-Recoder-POC/src/pages/index.tsx\",\n            lineNumber: 22,\n            columnNumber: 7\n        }, _this)\n    }, void 0, false, {\n        fileName: \"/Users/abhinavbansal/Documents/Projects/React Media Recorder/Media-Recoder-POC/src/pages/index.tsx\",\n        lineNumber: 21,\n        columnNumber: 5\n    }, _this);\n};\n_s(Home, \"UFRoOCiG/9I6Yds7Nen46KPLnNU=\");\n_c1 = Home;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Home);\nvar _c, _c1;\n$RefreshReg$(_c, \"DynamicComponent\");\n$RefreshReg$(_c1, \"Home\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXMvaW5kZXgudHN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQTs7QUFDbUM7QUFDVzs7QUFDOUMsSUFBTUUsZ0JBQWdCLEdBQUdGLG1EQUFPLENBQzlCO1dBQU0seU5BQThCLENBQUNHLElBQUksQ0FBQyxTQUFDQyxHQUFHO2VBQUtBLEdBQUcsQ0FBQ0Msa0JBQWtCO0tBQUEsQ0FBQztDQUFBOzs7Ozs7SUFFeEVDLEdBQUcsRUFBRSxLQUFLO0VBRWI7QUFMS0osS0FBQUEsZ0JBQWdCO0FBT3RCLElBQU1LLElBQUksR0FBYSxXQUFNOztJQUMzQixJQUEwQ04sR0FBaUIsR0FBakJBLCtDQUFRLENBQUMsT0FBTyxDQUFDLEVBWDdELGFBV3NCLEdBQXNCQSxHQUFpQixHQUF2QyxFQVh0QixnQkFXd0MsR0FBSUEsR0FBaUIsR0FBckI7SUFFdEMsSUFBa0NBLElBQWlCLEdBQWpCQSwrQ0FBUSxDQUFDLE9BQU8sQ0FBQyxFQWJyRCxTQWFrQixHQUFrQkEsSUFBaUIsR0FBbkMsRUFibEIsWUFhZ0MsR0FBSUEsSUFBaUIsR0FBckI7SUFFOUIsSUFBTVcsWUFBWSxHQUFHLFNBQUNDLENBQWlDLEVBQUs7UUFDMURKLGdCQUFnQixDQUFDSSxDQUFDLENBQUNDLE1BQU0sQ0FBQ0MsS0FBSyxDQUFDLENBQUM7S0FDbEM7SUFFRCxxQkFDRSw4REFBQ0MsS0FBRztRQUFDQyxTQUFTLEVBQUMsV0FBVztrQkFDeEIsNEVBQUNDLE1BQUk7WUFBQ0QsU0FBUyxFQUFDLFdBQVc7OzhCQUN6Qiw4REFBQ0UsUUFBTTtvQkFBQ0osS0FBSyxFQUFFUCxhQUFhO29CQUFFWSxRQUFRLEVBQUUsU0FBQ0wsS0FBSzsrQkFBS0gsWUFBWSxDQUFDRyxLQUFLLENBQUM7cUJBQUE7O3NDQUNwRSw4REFBQ00sUUFBTTs0QkFBQ04sS0FBSyxFQUFDLE9BQU87c0NBQUMsT0FBSzs7Ozs7aUNBQVM7c0NBQ3BDLDhEQUFDTSxRQUFNOzRCQUFDTixLQUFLLEVBQUMsT0FBTztzQ0FBQyxPQUFLOzs7OztpQ0FBUztzQ0FDcEMsOERBQUNNLFFBQU07NEJBQUNOLEtBQUssRUFBQyxRQUFRO3NDQUFDLFFBQU07Ozs7O2lDQUFTOzs7Ozs7eUJBQy9COzhCQUNULDhEQUFDQyxLQUFHOzhCQUNGLDRFQUFDZCxnQkFBZ0I7d0JBQ2ZvQixLQUFLLEVBQUVkLGFBQWEsS0FBSyxPQUFPLEdBQUcsSUFBSSxHQUFHLEtBQUs7d0JBQy9DZSxLQUFLLEVBQUVmLGFBQWEsS0FBSyxPQUFPLEdBQUcsSUFBSSxHQUFHLEtBQUs7d0JBQy9DZ0IsTUFBTSxFQUFFaEIsYUFBYSxLQUFLLFFBQVEsR0FBRyxJQUFJLEdBQUcsS0FBSzt3QkFDakRpQixNQUFNLEVBQUU7Z0NBQ05DLE1BQU0sU0FBTkEsTUFBTSxFQUNOQyxjQUFjLFNBQWRBLGNBQWMsRUFDZEMsYUFBYSxTQUFiQSxhQUFhLEVBQ2JDLFlBQVksU0FBWkEsWUFBWTtpREFJWiw4REFBQ2IsS0FBRzs7a0RBQ0YsOERBQUNjLEdBQUM7OzRDQUFDLHFCQUFtQjs0Q0FBQ0osTUFBTTs7b0VBQUs7a0RBQ2xDLDhEQUFDSyxRQUFNO3dDQUFDQyxPQUFPLEVBQUVMLGNBQWM7a0RBQUUsaUJBQWU7cUVBQVM7a0RBQ3pELDhEQUFDSSxRQUFNO3dDQUFDQyxPQUFPLEVBQUVKLGFBQWE7a0RBQUUsZ0JBQWM7cUVBQVM7a0RBQ3ZELDhEQUFDTCxPQUFLO3dDQUFDVSxHQUFHLEVBQUV2QixTQUFTO3dDQUFFd0IsUUFBUTt3Q0FBQ0MsUUFBUTtxRUFBRzs7NERBQ3ZDO3lCQUNQOzs7Ozs2QkFDRDs7Ozs7eUJBQ0U7Ozs7OztpQkFDRDs7Ozs7YUFDSCxDQUNOO0NBQ0g7R0ExQ0s1QixJQUFJO0FBQUpBLE1BQUFBLElBQUk7QUE0Q1YsK0RBQWVBLElBQUksRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvcGFnZXMvaW5kZXgudHN4PzE5YTAiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmV4dFBhZ2UgfSBmcm9tIFwibmV4dFwiO1xuaW1wb3J0IGR5bmFtaWMgZnJvbSBcIm5leHQvZHluYW1pY1wiO1xuaW1wb3J0IHsgQ2hhbmdlRXZlbnQsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5jb25zdCBEeW5hbWljQ29tcG9uZW50ID0gZHluYW1pYyhcbiAgKCkgPT4gaW1wb3J0KFwicmVhY3QtbWVkaWEtcmVjb3JkZXJcIikudGhlbigobW9kKSA9PiBtb2QuUmVhY3RNZWRpYVJlY29yZGVyKSxcbiAge1xuICAgIHNzcjogZmFsc2UsXG4gIH1cbik7XG5cbmNvbnN0IEhvbWU6IE5leHRQYWdlID0gKCkgPT4ge1xuICBjb25zdCBbc2VsZWN0ZWRNZWRpYSwgc2V0U2VsZWN0ZWRNZWRpYV0gPSB1c2VTdGF0ZShcImF1ZGlvXCIpO1xuXG4gIGNvbnN0IFttZWRpYUJsb2IsIHNldG1lZGlhQmxvYl0gPSB1c2VTdGF0ZShcImF1ZGlvXCIpO1xuXG4gIGNvbnN0IGhhbmRsZUNoYW5nZSA9IChlOiBDaGFuZ2VFdmVudDxIVE1MU2VsZWN0RWxlbWVudD4pID0+IHtcbiAgICBzZXRTZWxlY3RlZE1lZGlhKGUudGFyZ2V0LnZhbHVlKTtcbiAgfTtcblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyXCI+XG4gICAgICA8bWFpbiBjbGFzc05hbWU9XCJjb250YWluZXJcIj5cbiAgICAgICAgPHNlbGVjdCB2YWx1ZT17c2VsZWN0ZWRNZWRpYX0gb25DaGFuZ2U9eyh2YWx1ZSkgPT4gaGFuZGxlQ2hhbmdlKHZhbHVlKX0+XG4gICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cImF1ZGlvXCI+QXVkaW88L29wdGlvbj5cbiAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwidmlkZW9cIj5WaWRlbzwvb3B0aW9uPlxuICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJzY3JlZW5cIj5TY3JlZW48L29wdGlvbj5cbiAgICAgICAgPC9zZWxlY3Q+XG4gICAgICAgIDxkaXY+XG4gICAgICAgICAgPER5bmFtaWNDb21wb25lbnRcbiAgICAgICAgICAgIGF1ZGlvPXtzZWxlY3RlZE1lZGlhID09PSBcImF1ZGlvXCIgPyB0cnVlIDogZmFsc2V9XG4gICAgICAgICAgICB2aWRlbz17c2VsZWN0ZWRNZWRpYSA9PT0gXCJ2aWRlb1wiID8gdHJ1ZSA6IGZhbHNlfVxuICAgICAgICAgICAgc2NyZWVuPXtzZWxlY3RlZE1lZGlhID09PSBcInNjcmVlblwiID8gdHJ1ZSA6IGZhbHNlfVxuICAgICAgICAgICAgcmVuZGVyPXsoe1xuICAgICAgICAgICAgICBzdGF0dXMsXG4gICAgICAgICAgICAgIHN0YXJ0UmVjb3JkaW5nLFxuICAgICAgICAgICAgICBzdG9wUmVjb3JkaW5nLFxuICAgICAgICAgICAgICBtZWRpYUJsb2JVcmwsXG4gICAgICAgICAgICB9KSA9PiAoXG5cblxuICAgICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgIDxwPlJlY29yZGluZyBTdGF0dXM6LSB7c3RhdHVzfTwvcD5cbiAgICAgICAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9e3N0YXJ0UmVjb3JkaW5nfT5TdGFydCBSZWNvcmRpbmc8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9e3N0b3BSZWNvcmRpbmd9PlN0b3AgUmVjb3JkaW5nPC9idXR0b24+XG4gICAgICAgICAgICAgICAgPHZpZGVvIHNyYz17bWVkaWFCbG9ifSBjb250cm9scyBhdXRvUGxheSAvPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICl9XG4gICAgICAgICAgLz5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L21haW4+XG4gICAgPC9kaXY+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBIb21lO1xuIl0sIm5hbWVzIjpbImR5bmFtaWMiLCJ1c2VTdGF0ZSIsIkR5bmFtaWNDb21wb25lbnQiLCJ0aGVuIiwibW9kIiwiUmVhY3RNZWRpYVJlY29yZGVyIiwic3NyIiwiSG9tZSIsInNlbGVjdGVkTWVkaWEiLCJzZXRTZWxlY3RlZE1lZGlhIiwibWVkaWFCbG9iIiwic2V0bWVkaWFCbG9iIiwiaGFuZGxlQ2hhbmdlIiwiZSIsInRhcmdldCIsInZhbHVlIiwiZGl2IiwiY2xhc3NOYW1lIiwibWFpbiIsInNlbGVjdCIsIm9uQ2hhbmdlIiwib3B0aW9uIiwiYXVkaW8iLCJ2aWRlbyIsInNjcmVlbiIsInJlbmRlciIsInN0YXR1cyIsInN0YXJ0UmVjb3JkaW5nIiwic3RvcFJlY29yZGluZyIsIm1lZGlhQmxvYlVybCIsInAiLCJidXR0b24iLCJvbkNsaWNrIiwic3JjIiwiY29udHJvbHMiLCJhdXRvUGxheSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/pages/index.tsx\n");

/***/ })

});