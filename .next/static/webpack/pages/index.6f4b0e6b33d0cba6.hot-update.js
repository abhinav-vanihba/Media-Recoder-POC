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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/dynamic */ \"./node_modules/next/dynamic.js\");\n/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_dynamic__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\nvar _this = undefined;\n\n\n\nvar _s = $RefreshSig$();\nvar DynamicComponent = next_dynamic__WEBPACK_IMPORTED_MODULE_1___default()(function() {\n    return __webpack_require__.e(/*! import() */ \"node_modules_react-media-recorder_index_js\").then(__webpack_require__.t.bind(__webpack_require__, /*! react-media-recorder */ \"./node_modules/react-media-recorder/index.js\", 23)).then(function(mod) {\n        return mod.ReactMediaRecorder;\n    });\n}, {\n    loadableGenerated: {\n        modules: [\n            \"index.tsx -> \" + \"react-media-recorder\"\n        ]\n    },\n    ssr: false\n});\n_c = DynamicComponent;\nvar Home = function() {\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(\"audio\"), selectedMedia = ref[0], setSelectedMedia = ref[1];\n    var handleChange = function(e) {\n        setSelectedMedia(e.target.value);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"container\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"main\", {\n            className: \"container\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"select\", {\n                    value: selectedMedia,\n                    onChange: function(value) {\n                        return handleChange(value);\n                    },\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"option\", {\n                            value: \"audio\",\n                            children: \"Audio\"\n                        }, void 0, false, {\n                            fileName: \"/Users/abhinavbansal/Documents/Projects/React Media Recorder/Media-Recoder-POC/src/pages/index.tsx\",\n                            lineNumber: 22,\n                            columnNumber: 11\n                        }, _this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"option\", {\n                            value: \"video\",\n                            children: \"Video\"\n                        }, void 0, false, {\n                            fileName: \"/Users/abhinavbansal/Documents/Projects/React Media Recorder/Media-Recoder-POC/src/pages/index.tsx\",\n                            lineNumber: 23,\n                            columnNumber: 11\n                        }, _this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"option\", {\n                            value: \"screen\",\n                            children: \"Screen\"\n                        }, void 0, false, {\n                            fileName: \"/Users/abhinavbansal/Documents/Projects/React Media Recorder/Media-Recoder-POC/src/pages/index.tsx\",\n                            lineNumber: 24,\n                            columnNumber: 11\n                        }, _this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/abhinavbansal/Documents/Projects/React Media Recorder/Media-Recoder-POC/src/pages/index.tsx\",\n                    lineNumber: 21,\n                    columnNumber: 9\n                }, _this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(DynamicComponent, {\n                        audio: selectedMedia === \"audio\" ? true : false,\n                        video: selectedMedia === \"video\" ? true : false,\n                        screen: selectedMedia === \"screen\" ? true : false,\n                        render: function(param) {\n                            var status = param.status, startRecording = param.startRecording, stopRecording = param.stopRecording, mediaBlobUrl = param.mediaBlobUrl;\n                            return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                        children: [\n                                            \"Recording Status:- \",\n                                            status\n                                        ]\n                                    }, void 0, true, void 0, void 0),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                        onClick: startRecording,\n                                        children: \"Start Recording\"\n                                    }, void 0, false, void 0, void 0),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                        onClick: stopRecording,\n                                        children: \"Stop Recording\"\n                                    }, void 0, false, void 0, void 0),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"video\", {\n                                        src: mediaBlobUrl,\n                                        controls: true,\n                                        autoPlay: true,\n                                        clea: true\n                                    }, void 0, false, void 0, void 0)\n                                ]\n                            }, void 0, true, void 0, void 0);\n                        }\n                    }, void 0, false, {\n                        fileName: \"/Users/abhinavbansal/Documents/Projects/React Media Recorder/Media-Recoder-POC/src/pages/index.tsx\",\n                        lineNumber: 27,\n                        columnNumber: 11\n                    }, _this)\n                }, void 0, false, {\n                    fileName: \"/Users/abhinavbansal/Documents/Projects/React Media Recorder/Media-Recoder-POC/src/pages/index.tsx\",\n                    lineNumber: 26,\n                    columnNumber: 9\n                }, _this)\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/abhinavbansal/Documents/Projects/React Media Recorder/Media-Recoder-POC/src/pages/index.tsx\",\n            lineNumber: 20,\n            columnNumber: 7\n        }, _this)\n    }, void 0, false, {\n        fileName: \"/Users/abhinavbansal/Documents/Projects/React Media Recorder/Media-Recoder-POC/src/pages/index.tsx\",\n        lineNumber: 19,\n        columnNumber: 5\n    }, _this);\n};\n_s(Home, \"g1cAk6o/8Q1VdevhYe48swV0N0I=\");\n_c1 = Home;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Home);\nvar _c, _c1;\n$RefreshReg$(_c, \"DynamicComponent\");\n$RefreshReg$(_c1, \"Home\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXMvaW5kZXgudHN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQTs7QUFDbUM7QUFDVzs7QUFDOUMsSUFBTUUsZ0JBQWdCLEdBQUdGLG1EQUFPLENBQzlCO1dBQU0seU5BQThCLENBQUNHLElBQUksQ0FBQyxTQUFDQyxHQUFHO2VBQUtBLEdBQUcsQ0FBQ0Msa0JBQWtCO0tBQUEsQ0FBQztDQUFBOzs7Ozs7SUFFeEVDLEdBQUcsRUFBRSxLQUFLO0VBRWI7QUFMS0osS0FBQUEsZ0JBQWdCO0FBT3RCLElBQU1LLElBQUksR0FBYSxXQUFNOztJQUMzQixJQUEwQ04sR0FBaUIsR0FBakJBLCtDQUFRLENBQUMsT0FBTyxDQUFDLEVBWDdELGFBV3NCLEdBQXNCQSxHQUFpQixHQUF2QyxFQVh0QixnQkFXd0MsR0FBSUEsR0FBaUIsR0FBckI7SUFFdEMsSUFBTVMsWUFBWSxHQUFHLFNBQUNDLENBQWlDLEVBQUs7UUFDMURGLGdCQUFnQixDQUFDRSxDQUFDLENBQUNDLE1BQU0sQ0FBQ0MsS0FBSyxDQUFDLENBQUM7S0FDbEM7SUFFRCxxQkFDRSw4REFBQ0MsS0FBRztRQUFDQyxTQUFTLEVBQUMsV0FBVztrQkFDeEIsNEVBQUNDLE1BQUk7WUFBQ0QsU0FBUyxFQUFDLFdBQVc7OzhCQUN6Qiw4REFBQ0UsUUFBTTtvQkFBQ0osS0FBSyxFQUFFTCxhQUFhO29CQUFFVSxRQUFRLEVBQUUsU0FBQ0wsS0FBSzsrQkFBS0gsWUFBWSxDQUFDRyxLQUFLLENBQUM7cUJBQUE7O3NDQUNwRSw4REFBQ00sUUFBTTs0QkFBQ04sS0FBSyxFQUFDLE9BQU87c0NBQUMsT0FBSzs7Ozs7aUNBQVM7c0NBQ3BDLDhEQUFDTSxRQUFNOzRCQUFDTixLQUFLLEVBQUMsT0FBTztzQ0FBQyxPQUFLOzs7OztpQ0FBUztzQ0FDcEMsOERBQUNNLFFBQU07NEJBQUNOLEtBQUssRUFBQyxRQUFRO3NDQUFDLFFBQU07Ozs7O2lDQUFTOzs7Ozs7eUJBQy9COzhCQUNULDhEQUFDQyxLQUFHOzhCQUNGLDRFQUFDWixnQkFBZ0I7d0JBQ2ZrQixLQUFLLEVBQUVaLGFBQWEsS0FBSyxPQUFPLEdBQUcsSUFBSSxHQUFHLEtBQUs7d0JBQy9DYSxLQUFLLEVBQUViLGFBQWEsS0FBSyxPQUFPLEdBQUcsSUFBSSxHQUFHLEtBQUs7d0JBQy9DYyxNQUFNLEVBQUVkLGFBQWEsS0FBSyxRQUFRLEdBQUcsSUFBSSxHQUFHLEtBQUs7d0JBQ2pEZSxNQUFNLEVBQUU7Z0NBQ05DLE1BQU0sU0FBTkEsTUFBTSxFQUNOQyxjQUFjLFNBQWRBLGNBQWMsRUFDZEMsYUFBYSxTQUFiQSxhQUFhLEVBQ2JDLFlBQVksU0FBWkEsWUFBWTtpREFFWiw4REFBQ2IsS0FBRzs7a0RBQ0YsOERBQUNjLEdBQUM7OzRDQUFDLHFCQUFtQjs0Q0FBQ0osTUFBTTs7b0VBQUs7a0RBQ2xDLDhEQUFDSyxRQUFNO3dDQUFDQyxPQUFPLEVBQUVMLGNBQWM7a0RBQUUsaUJBQWU7cUVBQVM7a0RBQ3pELDhEQUFDSSxRQUFNO3dDQUFDQyxPQUFPLEVBQUVKLGFBQWE7a0RBQUUsZ0JBQWM7cUVBQVM7a0RBQ3ZELDhEQUFDTCxPQUFLO3dDQUFDVSxHQUFHLEVBQUVKLFlBQVk7d0NBQUVLLFFBQVE7d0NBQUNDLFFBQVE7d0NBQUNDLElBQUk7cUVBQUc7OzREQUMvQzt5QkFDUDs7Ozs7NkJBQ0Q7Ozs7O3lCQUNFOzs7Ozs7aUJBQ0Q7Ozs7O2FBQ0gsQ0FDTjtDQUNIO0dBdENLM0IsSUFBSTtBQUFKQSxNQUFBQSxJQUFJO0FBd0NWLCtEQUFlQSxJQUFJLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3BhZ2VzL2luZGV4LnRzeD8xOWEwIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5leHRQYWdlIH0gZnJvbSBcIm5leHRcIjtcbmltcG9ydCBkeW5hbWljIGZyb20gXCJuZXh0L2R5bmFtaWNcIjtcbmltcG9ydCB7IENoYW5nZUV2ZW50LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuY29uc3QgRHluYW1pY0NvbXBvbmVudCA9IGR5bmFtaWMoXG4gICgpID0+IGltcG9ydChcInJlYWN0LW1lZGlhLXJlY29yZGVyXCIpLnRoZW4oKG1vZCkgPT4gbW9kLlJlYWN0TWVkaWFSZWNvcmRlciksXG4gIHtcbiAgICBzc3I6IGZhbHNlLFxuICB9XG4pO1xuXG5jb25zdCBIb21lOiBOZXh0UGFnZSA9ICgpID0+IHtcbiAgY29uc3QgW3NlbGVjdGVkTWVkaWEsIHNldFNlbGVjdGVkTWVkaWFdID0gdXNlU3RhdGUoXCJhdWRpb1wiKTtcblxuICBjb25zdCBoYW5kbGVDaGFuZ2UgPSAoZTogQ2hhbmdlRXZlbnQ8SFRNTFNlbGVjdEVsZW1lbnQ+KSA9PiB7XG4gICAgc2V0U2VsZWN0ZWRNZWRpYShlLnRhcmdldC52YWx1ZSk7XG4gIH07XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lclwiPlxuICAgICAgPG1haW4gY2xhc3NOYW1lPVwiY29udGFpbmVyXCI+XG4gICAgICAgIDxzZWxlY3QgdmFsdWU9e3NlbGVjdGVkTWVkaWF9IG9uQ2hhbmdlPXsodmFsdWUpID0+IGhhbmRsZUNoYW5nZSh2YWx1ZSl9PlxuICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJhdWRpb1wiPkF1ZGlvPC9vcHRpb24+XG4gICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cInZpZGVvXCI+VmlkZW88L29wdGlvbj5cbiAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwic2NyZWVuXCI+U2NyZWVuPC9vcHRpb24+XG4gICAgICAgIDwvc2VsZWN0PlxuICAgICAgICA8ZGl2PlxuICAgICAgICAgIDxEeW5hbWljQ29tcG9uZW50XG4gICAgICAgICAgICBhdWRpbz17c2VsZWN0ZWRNZWRpYSA9PT0gXCJhdWRpb1wiID8gdHJ1ZSA6IGZhbHNlfVxuICAgICAgICAgICAgdmlkZW89e3NlbGVjdGVkTWVkaWEgPT09IFwidmlkZW9cIiA/IHRydWUgOiBmYWxzZX1cbiAgICAgICAgICAgIHNjcmVlbj17c2VsZWN0ZWRNZWRpYSA9PT0gXCJzY3JlZW5cIiA/IHRydWUgOiBmYWxzZX1cbiAgICAgICAgICAgIHJlbmRlcj17KHtcbiAgICAgICAgICAgICAgc3RhdHVzLFxuICAgICAgICAgICAgICBzdGFydFJlY29yZGluZyxcbiAgICAgICAgICAgICAgc3RvcFJlY29yZGluZyxcbiAgICAgICAgICAgICAgbWVkaWFCbG9iVXJsLFxuICAgICAgICAgICAgfSkgPT4gKFxuICAgICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgIDxwPlJlY29yZGluZyBTdGF0dXM6LSB7c3RhdHVzfTwvcD5cbiAgICAgICAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9e3N0YXJ0UmVjb3JkaW5nfT5TdGFydCBSZWNvcmRpbmc8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9e3N0b3BSZWNvcmRpbmd9PlN0b3AgUmVjb3JkaW5nPC9idXR0b24+XG4gICAgICAgICAgICAgICAgPHZpZGVvIHNyYz17bWVkaWFCbG9iVXJsfSBjb250cm9scyBhdXRvUGxheSBjbGVhIC8+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgKX1cbiAgICAgICAgICAvPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvbWFpbj5cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEhvbWU7XG4iXSwibmFtZXMiOlsiZHluYW1pYyIsInVzZVN0YXRlIiwiRHluYW1pY0NvbXBvbmVudCIsInRoZW4iLCJtb2QiLCJSZWFjdE1lZGlhUmVjb3JkZXIiLCJzc3IiLCJIb21lIiwic2VsZWN0ZWRNZWRpYSIsInNldFNlbGVjdGVkTWVkaWEiLCJoYW5kbGVDaGFuZ2UiLCJlIiwidGFyZ2V0IiwidmFsdWUiLCJkaXYiLCJjbGFzc05hbWUiLCJtYWluIiwic2VsZWN0Iiwib25DaGFuZ2UiLCJvcHRpb24iLCJhdWRpbyIsInZpZGVvIiwic2NyZWVuIiwicmVuZGVyIiwic3RhdHVzIiwic3RhcnRSZWNvcmRpbmciLCJzdG9wUmVjb3JkaW5nIiwibWVkaWFCbG9iVXJsIiwicCIsImJ1dHRvbiIsIm9uQ2xpY2siLCJzcmMiLCJjb250cm9scyIsImF1dG9QbGF5IiwiY2xlYSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/pages/index.tsx\n");

/***/ })

});