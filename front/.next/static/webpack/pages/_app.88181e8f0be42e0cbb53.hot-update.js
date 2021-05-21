webpackHotUpdate_N_E("pages/_app",{

/***/ "./reducers/user.js":
/*!**************************!*\
  !*** ./reducers/user.js ***!
  \**************************/
/*! exports provided: initialState, loginRequestAction, loginSuccessAction, loginFailureAction, logoutRequestAction, logoutSuccessAction, logoutFailureAction, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initialState", function() { return initialState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "loginRequestAction", function() { return loginRequestAction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "loginSuccessAction", function() { return loginSuccessAction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "loginFailureAction", function() { return loginFailureAction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "logoutRequestAction", function() { return logoutRequestAction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "logoutSuccessAction", function() { return logoutSuccessAction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "logoutFailureAction", function() { return logoutFailureAction; });
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");


function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

var initialState = {
  isLoggingIn: false,
  // Login 시도 중
  isLoggedIn: false,
  isLoggingOut: false,
  //Logout 시도 중
  me: null,
  signUpData: {},
  loginData: {}
};
var loginRequestAction = function loginRequestAction(data) {
  return {
    type: "LOG_IN_REQUEST",
    data: data
  };
};
var loginSuccessAction = function loginSuccessAction(data) {
  return {
    type: "LOG_IN_SUCCESS",
    data: data
  };
};
var loginFailureAction = function loginFailureAction(data) {
  return {
    type: "LOG_IN_FAILURE",
    data: data
  };
};
var logoutRequestAction = function logoutRequestAction() {
  return {
    type: "LOG_OUT_REQUEST"
  };
};
var logoutSuccessAction = function logoutSuccessAction() {
  return {
    type: "LOG_OUT_SUCCESS"
  };
};
var logoutFailureAction = function logoutFailureAction() {
  return {
    type: "LOG_OUT_FAILURE"
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
        isLoggingOut: true
      });

    case "LOG_OUT_SUCCESS":
      return _objectSpread(_objectSpread({}, state), {}, {
        isLoggingOut: false,
        isLoggedIn: false,
        me: null
      });

    case "LOG_OUT_FAILURE":
      return _objectSpread(_objectSpread({}, state), {}, {
        isLoggingOut: false
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcmVkdWNlcnMvdXNlci5qcyJdLCJuYW1lcyI6WyJpbml0aWFsU3RhdGUiLCJpc0xvZ2dpbmdJbiIsImlzTG9nZ2VkSW4iLCJpc0xvZ2dpbmdPdXQiLCJtZSIsInNpZ25VcERhdGEiLCJsb2dpbkRhdGEiLCJsb2dpblJlcXVlc3RBY3Rpb24iLCJkYXRhIiwidHlwZSIsImxvZ2luU3VjY2Vzc0FjdGlvbiIsImxvZ2luRmFpbHVyZUFjdGlvbiIsImxvZ291dFJlcXVlc3RBY3Rpb24iLCJsb2dvdXRTdWNjZXNzQWN0aW9uIiwibG9nb3V0RmFpbHVyZUFjdGlvbiIsInJlZHVjZXIiLCJzdGF0ZSIsImFjdGlvbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFPLElBQU1BLFlBQVksR0FBRztBQUMxQkMsYUFBVyxFQUFFLEtBRGE7QUFDTjtBQUNwQkMsWUFBVSxFQUFFLEtBRmM7QUFHMUJDLGNBQVksRUFBRSxLQUhZO0FBR0w7QUFDckJDLElBQUUsRUFBRSxJQUpzQjtBQUsxQkMsWUFBVSxFQUFFLEVBTGM7QUFNMUJDLFdBQVMsRUFBRTtBQU5lLENBQXJCO0FBU0EsSUFBTUMsa0JBQWtCLEdBQUcsU0FBckJBLGtCQUFxQixDQUFDQyxJQUFELEVBQVU7QUFDMUMsU0FBTztBQUNMQyxRQUFJLEVBQUUsZ0JBREQ7QUFFTEQsUUFBSSxFQUFKQTtBQUZLLEdBQVA7QUFJRCxDQUxNO0FBTUEsSUFBTUUsa0JBQWtCLEdBQUcsU0FBckJBLGtCQUFxQixDQUFDRixJQUFELEVBQVU7QUFDMUMsU0FBTztBQUNMQyxRQUFJLEVBQUUsZ0JBREQ7QUFFTEQsUUFBSSxFQUFKQTtBQUZLLEdBQVA7QUFJRCxDQUxNO0FBTUEsSUFBTUcsa0JBQWtCLEdBQUcsU0FBckJBLGtCQUFxQixDQUFDSCxJQUFELEVBQVU7QUFDMUMsU0FBTztBQUNMQyxRQUFJLEVBQUUsZ0JBREQ7QUFFTEQsUUFBSSxFQUFKQTtBQUZLLEdBQVA7QUFJRCxDQUxNO0FBT0EsSUFBTUksbUJBQW1CLEdBQUcsU0FBdEJBLG1CQUFzQixHQUFNO0FBQ3ZDLFNBQU87QUFDTEgsUUFBSSxFQUFFO0FBREQsR0FBUDtBQUdELENBSk07QUFLQSxJQUFNSSxtQkFBbUIsR0FBRyxTQUF0QkEsbUJBQXNCLEdBQU07QUFDdkMsU0FBTztBQUNMSixRQUFJLEVBQUU7QUFERCxHQUFQO0FBR0QsQ0FKTTtBQUtBLElBQU1LLG1CQUFtQixHQUFHLFNBQXRCQSxtQkFBc0IsR0FBTTtBQUN2QyxTQUFPO0FBQ0xMLFFBQUksRUFBRTtBQURELEdBQVA7QUFHRCxDQUpNOztBQU1QLElBQU1NLE9BQU8sR0FBRyxTQUFWQSxPQUFVLEdBQWtDO0FBQUEsTUFBakNDLEtBQWlDLHVFQUF6QmhCLFlBQXlCO0FBQUEsTUFBWGlCLE1BQVc7O0FBQ2hELFVBQVFBLE1BQU0sQ0FBQ1IsSUFBZjtBQUNFLFNBQUssZ0JBQUw7QUFDRSw2Q0FBWU8sS0FBWjtBQUFtQmYsbUJBQVcsRUFBRTtBQUFoQzs7QUFDRixTQUFLLGdCQUFMO0FBQ0UsNkNBQVllLEtBQVo7QUFBbUJmLG1CQUFXLEVBQUUsS0FBaEM7QUFBdUNDLGtCQUFVLEVBQUUsSUFBbkQ7QUFBeURFLFVBQUUsRUFBRWEsTUFBTSxDQUFDVDtBQUFwRTs7QUFDRixTQUFLLGdCQUFMO0FBQ0UsNkNBQVlRLEtBQVo7QUFBbUJmLG1CQUFXLEVBQUUsS0FBaEM7QUFBdUNDLGtCQUFVLEVBQUUsS0FBbkQ7QUFBMERFLFVBQUUsRUFBRWEsTUFBTSxDQUFDVDtBQUFyRTs7QUFDRixTQUFLLGlCQUFMO0FBQ0UsNkNBQVlRLEtBQVo7QUFBbUJiLG9CQUFZLEVBQUU7QUFBakM7O0FBQ0YsU0FBSyxpQkFBTDtBQUNFLDZDQUFZYSxLQUFaO0FBQW1CYixvQkFBWSxFQUFFLEtBQWpDO0FBQXdDRCxrQkFBVSxFQUFFLEtBQXBEO0FBQTJERSxVQUFFLEVBQUU7QUFBL0Q7O0FBQ0YsU0FBSyxpQkFBTDtBQUNFLDZDQUFZWSxLQUFaO0FBQW1CYixvQkFBWSxFQUFFO0FBQWpDOztBQUNGO0FBQ0UsYUFBT2EsS0FBUDtBQWRKO0FBZ0JELENBakJEOztBQW1CZUQsc0VBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvX2FwcC44ODE4MWU4ZjBiZTQyZTBjYmI1My5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGNvbnN0IGluaXRpYWxTdGF0ZSA9IHtcclxuICBpc0xvZ2dpbmdJbjogZmFsc2UsIC8vIExvZ2luIOyLnOuPhCDspJFcclxuICBpc0xvZ2dlZEluOiBmYWxzZSxcclxuICBpc0xvZ2dpbmdPdXQ6IGZhbHNlLCAvL0xvZ291dCDsi5zrj4Qg7KSRXHJcbiAgbWU6IG51bGwsXHJcbiAgc2lnblVwRGF0YToge30sXHJcbiAgbG9naW5EYXRhOiB7fSxcclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCBsb2dpblJlcXVlc3RBY3Rpb24gPSAoZGF0YSkgPT4ge1xyXG4gIHJldHVybiB7XHJcbiAgICB0eXBlOiBcIkxPR19JTl9SRVFVRVNUXCIsXHJcbiAgICBkYXRhLFxyXG4gIH07XHJcbn07XHJcbmV4cG9ydCBjb25zdCBsb2dpblN1Y2Nlc3NBY3Rpb24gPSAoZGF0YSkgPT4ge1xyXG4gIHJldHVybiB7XHJcbiAgICB0eXBlOiBcIkxPR19JTl9TVUNDRVNTXCIsXHJcbiAgICBkYXRhLFxyXG4gIH07XHJcbn07XHJcbmV4cG9ydCBjb25zdCBsb2dpbkZhaWx1cmVBY3Rpb24gPSAoZGF0YSkgPT4ge1xyXG4gIHJldHVybiB7XHJcbiAgICB0eXBlOiBcIkxPR19JTl9GQUlMVVJFXCIsXHJcbiAgICBkYXRhLFxyXG4gIH07XHJcbn07XHJcblxyXG5leHBvcnQgY29uc3QgbG9nb3V0UmVxdWVzdEFjdGlvbiA9ICgpID0+IHtcclxuICByZXR1cm4ge1xyXG4gICAgdHlwZTogXCJMT0dfT1VUX1JFUVVFU1RcIixcclxuICB9O1xyXG59O1xyXG5leHBvcnQgY29uc3QgbG9nb3V0U3VjY2Vzc0FjdGlvbiA9ICgpID0+IHtcclxuICByZXR1cm4ge1xyXG4gICAgdHlwZTogXCJMT0dfT1VUX1NVQ0NFU1NcIixcclxuICB9O1xyXG59O1xyXG5leHBvcnQgY29uc3QgbG9nb3V0RmFpbHVyZUFjdGlvbiA9ICgpID0+IHtcclxuICByZXR1cm4ge1xyXG4gICAgdHlwZTogXCJMT0dfT1VUX0ZBSUxVUkVcIixcclxuICB9O1xyXG59O1xyXG5cclxuY29uc3QgcmVkdWNlciA9IChzdGF0ZSA9IGluaXRpYWxTdGF0ZSwgYWN0aW9uKSA9PiB7XHJcbiAgc3dpdGNoIChhY3Rpb24udHlwZSkge1xyXG4gICAgY2FzZSBcIkxPR19JTl9SRVFVRVNUXCI6XHJcbiAgICAgIHJldHVybiB7IC4uLnN0YXRlLCBpc0xvZ2dpbmdJbjogdHJ1ZSB9O1xyXG4gICAgY2FzZSBcIkxPR19JTl9TVUNDRVNTXCI6XHJcbiAgICAgIHJldHVybiB7IC4uLnN0YXRlLCBpc0xvZ2dpbmdJbjogZmFsc2UsIGlzTG9nZ2VkSW46IHRydWUsIG1lOiBhY3Rpb24uZGF0YSB9O1xyXG4gICAgY2FzZSBcIkxPR19JTl9GQUlMVVJFXCI6XHJcbiAgICAgIHJldHVybiB7IC4uLnN0YXRlLCBpc0xvZ2dpbmdJbjogZmFsc2UsIGlzTG9nZ2VkSW46IGZhbHNlLCBtZTogYWN0aW9uLmRhdGEgfTtcclxuICAgIGNhc2UgXCJMT0dfT1VUX1JFUVVFU1RcIjpcclxuICAgICAgcmV0dXJuIHsgLi4uc3RhdGUsIGlzTG9nZ2luZ091dDogdHJ1ZSB9O1xyXG4gICAgY2FzZSBcIkxPR19PVVRfU1VDQ0VTU1wiOlxyXG4gICAgICByZXR1cm4geyAuLi5zdGF0ZSwgaXNMb2dnaW5nT3V0OiBmYWxzZSwgaXNMb2dnZWRJbjogZmFsc2UsIG1lOiBudWxsIH07XHJcbiAgICBjYXNlIFwiTE9HX09VVF9GQUlMVVJFXCI6XHJcbiAgICAgIHJldHVybiB7IC4uLnN0YXRlLCBpc0xvZ2dpbmdPdXQ6IGZhbHNlIH07XHJcbiAgICBkZWZhdWx0OlxyXG4gICAgICByZXR1cm4gc3RhdGU7XHJcbiAgfVxyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgcmVkdWNlcjtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==