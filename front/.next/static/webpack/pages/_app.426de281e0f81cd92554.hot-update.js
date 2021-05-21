webpackHotUpdate_N_E("pages/_app",{

/***/ "./reducers/user.js":
/*!**************************!*\
  !*** ./reducers/user.js ***!
  \**************************/
/*! exports provided: initialState, loginAction, logoutAction, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initialState", function() { return initialState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "loginAction", function() { return loginAction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "logoutAction", function() { return logoutAction; });
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");


function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

var initialState = {
  isLoggingIn: false,
  // Login 시도 중
  isLoggedIn: false,
  me: null,
  signUpData: {},
  loginData: {}
};
var loginAction = function loginAction(data) {
  return {
    type: "LOG_IN",
    data: data
  };
};
var logoutAction = function logoutAction() {
  return {
    type: "LOG_OUT"
  };
};

var reducer = function reducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case "LOG_IN_REQUEST":
      return _objectSpread(_objectSpread({}, state), {}, {
        isLoggingIn: true
      });

    case "LOG_IN_SUCCESS":
      return _objectSpread(_objectSpread({}, state), {}, {
        isLoggingIn: false,
        isLoggedIn: true,
        me: action.data
      });

    case "LOG_IN_FAILURE":
      return _objectSpread(_objectSpread({}, state), {}, {
        isLoggingIn: false,
        isLoggedIn: false,
        me: action.data
      });

    case "LOG_OUT_REQUEST":
      return _objectSpread(_objectSpread({}, state), {}, {
        isLoggedIn: false,
        me: null
      });

    case "LOG_OUT_SUCCESS":
      return _objectSpread(_objectSpread({}, state), {}, {
        isLoggedIn: false,
        me: null
      });

    case "LOG_OUT_FAILURE":
      return _objectSpread(_objectSpread({}, state), {}, {
        isLoggedIn: false,
        me: null
      });

    default:
      return state;
  }
};

/* harmony default export */ __webpack_exports__["default"] = (reducer);

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcmVkdWNlcnMvdXNlci5qcyJdLCJuYW1lcyI6WyJpbml0aWFsU3RhdGUiLCJpc0xvZ2dpbmdJbiIsImlzTG9nZ2VkSW4iLCJtZSIsInNpZ25VcERhdGEiLCJsb2dpbkRhdGEiLCJsb2dpbkFjdGlvbiIsImRhdGEiLCJ0eXBlIiwibG9nb3V0QWN0aW9uIiwicmVkdWNlciIsInN0YXRlIiwiYWN0aW9uIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBTyxJQUFNQSxZQUFZLEdBQUc7QUFDMUJDLGFBQVcsRUFBRSxLQURhO0FBQ047QUFDcEJDLFlBQVUsRUFBRSxLQUZjO0FBRzFCQyxJQUFFLEVBQUUsSUFIc0I7QUFJMUJDLFlBQVUsRUFBRSxFQUpjO0FBSzFCQyxXQUFTLEVBQUU7QUFMZSxDQUFyQjtBQVFBLElBQU1DLFdBQVcsR0FBRyxTQUFkQSxXQUFjLENBQUNDLElBQUQsRUFBVTtBQUNuQyxTQUFPO0FBQ0xDLFFBQUksRUFBRSxRQUREO0FBRUxELFFBQUksRUFBSkE7QUFGSyxHQUFQO0FBSUQsQ0FMTTtBQU9BLElBQU1FLFlBQVksR0FBRyxTQUFmQSxZQUFlLEdBQU07QUFDaEMsU0FBTztBQUNMRCxRQUFJLEVBQUU7QUFERCxHQUFQO0FBR0QsQ0FKTTs7QUFNUCxJQUFNRSxPQUFPLEdBQUcsU0FBVkEsT0FBVSxHQUFrQztBQUFBLE1BQWpDQyxLQUFpQyx1RUFBekJYLFlBQXlCO0FBQUEsTUFBWFksTUFBVzs7QUFDaEQsVUFBUUEsTUFBTSxDQUFDSixJQUFmO0FBQ0UsU0FBSyxnQkFBTDtBQUNFLDZDQUFZRyxLQUFaO0FBQW1CVixtQkFBVyxFQUFFO0FBQWhDOztBQUNGLFNBQUssZ0JBQUw7QUFDRSw2Q0FBWVUsS0FBWjtBQUFtQlYsbUJBQVcsRUFBRSxLQUFoQztBQUF1Q0Msa0JBQVUsRUFBRSxJQUFuRDtBQUF5REMsVUFBRSxFQUFFUyxNQUFNLENBQUNMO0FBQXBFOztBQUNGLFNBQUssZ0JBQUw7QUFDRSw2Q0FBWUksS0FBWjtBQUFtQlYsbUJBQVcsRUFBRSxLQUFoQztBQUF1Q0Msa0JBQVUsRUFBRSxLQUFuRDtBQUEwREMsVUFBRSxFQUFFUyxNQUFNLENBQUNMO0FBQXJFOztBQUNGLFNBQUssaUJBQUw7QUFDRSw2Q0FBWUksS0FBWjtBQUFtQlQsa0JBQVUsRUFBRSxLQUEvQjtBQUFzQ0MsVUFBRSxFQUFFO0FBQTFDOztBQUNGLFNBQUssaUJBQUw7QUFDRSw2Q0FBWVEsS0FBWjtBQUFtQlQsa0JBQVUsRUFBRSxLQUEvQjtBQUFzQ0MsVUFBRSxFQUFFO0FBQTFDOztBQUNGLFNBQUssaUJBQUw7QUFDRSw2Q0FBWVEsS0FBWjtBQUFtQlQsa0JBQVUsRUFBRSxLQUEvQjtBQUFzQ0MsVUFBRSxFQUFFO0FBQTFDOztBQUNGO0FBQ0UsYUFBT1EsS0FBUDtBQWRKO0FBZ0JELENBakJEOztBQW1CZUQsc0VBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvX2FwcC40MjZkZTI4MWUwZjgxY2Q5MjU1NC5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGNvbnN0IGluaXRpYWxTdGF0ZSA9IHtcclxuICBpc0xvZ2dpbmdJbjogZmFsc2UsIC8vIExvZ2luIOyLnOuPhCDspJFcclxuICBpc0xvZ2dlZEluOiBmYWxzZSxcclxuICBtZTogbnVsbCxcclxuICBzaWduVXBEYXRhOiB7fSxcclxuICBsb2dpbkRhdGE6IHt9LFxyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IGxvZ2luQWN0aW9uID0gKGRhdGEpID0+IHtcclxuICByZXR1cm4ge1xyXG4gICAgdHlwZTogXCJMT0dfSU5cIixcclxuICAgIGRhdGEsXHJcbiAgfTtcclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCBsb2dvdXRBY3Rpb24gPSAoKSA9PiB7XHJcbiAgcmV0dXJuIHtcclxuICAgIHR5cGU6IFwiTE9HX09VVFwiLFxyXG4gIH07XHJcbn07XHJcblxyXG5jb25zdCByZWR1Y2VyID0gKHN0YXRlID0gaW5pdGlhbFN0YXRlLCBhY3Rpb24pID0+IHtcclxuICBzd2l0Y2ggKGFjdGlvbi50eXBlKSB7XHJcbiAgICBjYXNlIFwiTE9HX0lOX1JFUVVFU1RcIjpcclxuICAgICAgcmV0dXJuIHsgLi4uc3RhdGUsIGlzTG9nZ2luZ0luOiB0cnVlIH07XHJcbiAgICBjYXNlIFwiTE9HX0lOX1NVQ0NFU1NcIjpcclxuICAgICAgcmV0dXJuIHsgLi4uc3RhdGUsIGlzTG9nZ2luZ0luOiBmYWxzZSwgaXNMb2dnZWRJbjogdHJ1ZSwgbWU6IGFjdGlvbi5kYXRhIH07XHJcbiAgICBjYXNlIFwiTE9HX0lOX0ZBSUxVUkVcIjpcclxuICAgICAgcmV0dXJuIHsgLi4uc3RhdGUsIGlzTG9nZ2luZ0luOiBmYWxzZSwgaXNMb2dnZWRJbjogZmFsc2UsIG1lOiBhY3Rpb24uZGF0YSB9O1xyXG4gICAgY2FzZSBcIkxPR19PVVRfUkVRVUVTVFwiOlxyXG4gICAgICByZXR1cm4geyAuLi5zdGF0ZSwgaXNMb2dnZWRJbjogZmFsc2UsIG1lOiBudWxsIH07XHJcbiAgICBjYXNlIFwiTE9HX09VVF9TVUNDRVNTXCI6XHJcbiAgICAgIHJldHVybiB7IC4uLnN0YXRlLCBpc0xvZ2dlZEluOiBmYWxzZSwgbWU6IG51bGwgfTtcclxuICAgIGNhc2UgXCJMT0dfT1VUX0ZBSUxVUkVcIjpcclxuICAgICAgcmV0dXJuIHsgLi4uc3RhdGUsIGlzTG9nZ2VkSW46IGZhbHNlLCBtZTogbnVsbCB9O1xyXG4gICAgZGVmYXVsdDpcclxuICAgICAgcmV0dXJuIHN0YXRlO1xyXG4gIH1cclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IHJlZHVjZXI7XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=