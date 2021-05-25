webpackHotUpdate_N_E("pages/profile",{

/***/ "./pages/profile.js":
/*!**************************!*\
  !*** ./pages/profile.js ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/router */ "./node_modules/next/dist/client/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ "./node_modules/next/dist/next-server/lib/head.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _components_AppLayout__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/AppLayout */ "./components/AppLayout.js");
/* harmony import */ var _components_FollowerList__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/FollowerList */ "./components/FollowerList.js");
/* harmony import */ var _components_FollowList__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/FollowList */ "./components/FollowList.js");
/* harmony import */ var _components_NicknameEditForm__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/NicknameEditForm */ "./components/NicknameEditForm.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__);
var _jsxFileName = "F:\\Self Study_Coding\\Web\\Portfolio\\React_NodeBird\\preapre_second\\front\\pages\\profile.js",
    _this = undefined,
    _s = $RefreshSig$();












var profile = function profile() {
  _s();

  // const followerList = [{ nickname: "kevin" }, { nickname: "sample" }, { nickname: "admin user" }];
  // const followingList = [{ nickname: "kevin" }, { nickname: "sample" }, { nickname: "admin" }];
  var _useSelector = Object(react_redux__WEBPACK_IMPORTED_MODULE_3__["useSelector"])(function (state) {
    return state.user;
  }),
      me = _useSelector.me;

  Object(react__WEBPACK_IMPORTED_MODULE_2__["useEffect"])(function () {
    if (!(me && me.id)) {
      next_router__WEBPACK_IMPORTED_MODULE_0___default.a.push("/");
    }
  }, [me && me.id]);

  if (!me) {
    return null;
  }

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["Fragment"], {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])(next_head__WEBPACK_IMPORTED_MODULE_1___default.a, {
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])("title", {
        children: "My Profile | NodeBird"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 26,
        columnNumber: 9
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 7
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])(_components_AppLayout__WEBPACK_IMPORTED_MODULE_4__["default"], {
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])(_components_NicknameEditForm__WEBPACK_IMPORTED_MODULE_7__["default"], {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 29,
        columnNumber: 9
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])(_components_FollowList__WEBPACK_IMPORTED_MODULE_6__["default"], {
        header: "Following List",
        data: me.Followings
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 30,
        columnNumber: 9
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])(_components_FollowList__WEBPACK_IMPORTED_MODULE_6__["default"], {
        header: "Follower List",
        data: me.Followers
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 31,
        columnNumber: 9
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 7
    }, _this)]
  }, void 0, true);
};

_s(profile, "dXV5Ddi7LLTWnG2eWiuuh7S2+8o=", false, function () {
  return [react_redux__WEBPACK_IMPORTED_MODULE_3__["useSelector"]];
});

/* harmony default export */ __webpack_exports__["default"] = (profile);

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvcHJvZmlsZS5qcyJdLCJuYW1lcyI6WyJwcm9maWxlIiwidXNlU2VsZWN0b3IiLCJzdGF0ZSIsInVzZXIiLCJtZSIsInVzZUVmZmVjdCIsImlkIiwiUm91dGVyIiwicHVzaCIsIkZvbGxvd2luZ3MiLCJGb2xsb3dlcnMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7O0FBRUEsSUFBTUEsT0FBTyxHQUFHLFNBQVZBLE9BQVUsR0FBTTtBQUFBOztBQUNwQjtBQUNBO0FBQ0EscUJBQWVDLCtEQUFXLENBQUMsVUFBQ0MsS0FBRDtBQUFBLFdBQVdBLEtBQUssQ0FBQ0MsSUFBakI7QUFBQSxHQUFELENBQTFCO0FBQUEsTUFBUUMsRUFBUixnQkFBUUEsRUFBUjs7QUFDQUMseURBQVMsQ0FBQyxZQUFNO0FBQ2QsUUFBSSxFQUFFRCxFQUFFLElBQUlBLEVBQUUsQ0FBQ0UsRUFBWCxDQUFKLEVBQW9CO0FBQ2xCQyx3REFBTSxDQUFDQyxJQUFQLENBQVksR0FBWjtBQUNEO0FBQ0YsR0FKUSxFQUlOLENBQUNKLEVBQUUsSUFBSUEsRUFBRSxDQUFDRSxFQUFWLENBSk0sQ0FBVDs7QUFNQSxNQUFJLENBQUNGLEVBQUwsRUFBUztBQUNQLFdBQU8sSUFBUDtBQUNEOztBQUNELHNCQUNFO0FBQUEsNEJBQ0UscUVBQUMsZ0RBQUQ7QUFBQSw2QkFDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFERixlQUlFLHFFQUFDLDZEQUFEO0FBQUEsOEJBQ0UscUVBQUMsb0VBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQURGLGVBRUUscUVBQUMsOERBQUQ7QUFBWSxjQUFNLEVBQUMsZ0JBQW5CO0FBQW9DLFlBQUksRUFBRUEsRUFBRSxDQUFDSztBQUE3QztBQUFBO0FBQUE7QUFBQTtBQUFBLGVBRkYsZUFHRSxxRUFBQyw4REFBRDtBQUFZLGNBQU0sRUFBQyxlQUFuQjtBQUFtQyxZQUFJLEVBQUVMLEVBQUUsQ0FBQ007QUFBNUM7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQUhGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQUpGO0FBQUEsa0JBREY7QUFZRCxDQXpCRDs7R0FBTVYsTztVQUdXQyx1RDs7O0FBd0JGRCxzRUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9wcm9maWxlLjk4OThiOGU3ZTE1MjE4YWQxMzA3LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUm91dGVyIGZyb20gXCJuZXh0L3JvdXRlclwiO1xyXG5pbXBvcnQgSGVhZCBmcm9tIFwibmV4dC9oZWFkXCI7XHJcbmltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgdXNlU2VsZWN0b3IgfSBmcm9tIFwicmVhY3QtcmVkdXhcIjtcclxuaW1wb3J0IEFwcExheW91dCBmcm9tIFwiLi4vY29tcG9uZW50cy9BcHBMYXlvdXRcIjtcclxuaW1wb3J0IEZvbGxvd2VyTGlzdCBmcm9tIFwiLi4vY29tcG9uZW50cy9Gb2xsb3dlckxpc3RcIjtcclxuaW1wb3J0IEZvbGxvd0xpc3QgZnJvbSBcIi4uL2NvbXBvbmVudHMvRm9sbG93TGlzdFwiO1xyXG5pbXBvcnQgTmlja25hbWVFZGl0Rm9ybSBmcm9tIFwiLi4vY29tcG9uZW50cy9OaWNrbmFtZUVkaXRGb3JtXCI7XHJcblxyXG5jb25zdCBwcm9maWxlID0gKCkgPT4ge1xyXG4gIC8vIGNvbnN0IGZvbGxvd2VyTGlzdCA9IFt7IG5pY2tuYW1lOiBcImtldmluXCIgfSwgeyBuaWNrbmFtZTogXCJzYW1wbGVcIiB9LCB7IG5pY2tuYW1lOiBcImFkbWluIHVzZXJcIiB9XTtcclxuICAvLyBjb25zdCBmb2xsb3dpbmdMaXN0ID0gW3sgbmlja25hbWU6IFwia2V2aW5cIiB9LCB7IG5pY2tuYW1lOiBcInNhbXBsZVwiIH0sIHsgbmlja25hbWU6IFwiYWRtaW5cIiB9XTtcclxuICBjb25zdCB7IG1lIH0gPSB1c2VTZWxlY3Rvcigoc3RhdGUpID0+IHN0YXRlLnVzZXIpO1xyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBpZiAoIShtZSAmJiBtZS5pZCkpIHtcclxuICAgICAgUm91dGVyLnB1c2goXCIvXCIpO1xyXG4gICAgfVxyXG4gIH0sIFttZSAmJiBtZS5pZF0pO1xyXG5cclxuICBpZiAoIW1lKSB7XHJcbiAgICByZXR1cm4gbnVsbDtcclxuICB9XHJcbiAgcmV0dXJuIChcclxuICAgIDw+XHJcbiAgICAgIDxIZWFkPlxyXG4gICAgICAgIDx0aXRsZT5NeSBQcm9maWxlIHwgTm9kZUJpcmQ8L3RpdGxlPlxyXG4gICAgICA8L0hlYWQ+XHJcbiAgICAgIDxBcHBMYXlvdXQ+XHJcbiAgICAgICAgPE5pY2tuYW1lRWRpdEZvcm0gLz5cclxuICAgICAgICA8Rm9sbG93TGlzdCBoZWFkZXI9J0ZvbGxvd2luZyBMaXN0JyBkYXRhPXttZS5Gb2xsb3dpbmdzfSAvPlxyXG4gICAgICAgIDxGb2xsb3dMaXN0IGhlYWRlcj0nRm9sbG93ZXIgTGlzdCcgZGF0YT17bWUuRm9sbG93ZXJzfSAvPlxyXG4gICAgICA8L0FwcExheW91dD5cclxuICAgIDwvPlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBwcm9maWxlO1xyXG4iXSwic291cmNlUm9vdCI6IiJ9