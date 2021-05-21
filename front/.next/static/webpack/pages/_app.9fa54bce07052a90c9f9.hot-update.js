webpackHotUpdate_N_E("pages/_app",{

/***/ "./sagas/index.js":
/*!************************!*\
  !*** ./sagas/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return rootSaga; });
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! redux-saga/effects */ "./node_modules/redux-saga/dist/redux-saga-effects-npm-proxy.esm.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_2__);


var _marked = /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(logIn),
    _marked2 = /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(logOut),
    _marked3 = /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(addPost),
    _marked4 = /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(watchAddPost),
    _marked5 = /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(rootSaga);




function logInAPI(data) {
  return axios__WEBPACK_IMPORTED_MODULE_2___default.a.post("/api/login", data);
} // const l = logIn({type: 'LOG_IN_REQUEST', data: {id: 'jhkevin21@gmail.com'}})
// l.next();
// l.next();


function logIn(action) {
  return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function logIn$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.prev = 0;
          _context.next = 3;
          return delay(1000);

        case 3:
          _context.next = 5;
          return put({
            type: "LOG_IN_SUCCESS",
            data: result.data
          });

        case 5:
          _context.next = 11;
          break;

        case 7:
          _context.prev = 7;
          _context.t0 = _context["catch"](0);
          _context.next = 11;
          return put({
            type: "LOG_IN_FAILURE",
            data: _context.t0.response.data
          });

        case 11:
        case "end":
          return _context.stop();
      }
    }
  }, _marked, null, [[0, 7]]);
}

function logOutAPI() {
  return axios__WEBPACK_IMPORTED_MODULE_2___default.a.post("/api/logout");
}

function logOut() {
  return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function logOut$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          _context2.prev = 0;
          _context2.next = 3;
          return delay(1000);

        case 3:
          _context2.next = 5;
          return put({
            type: "LOG_OUT_SUCCESS",
            data: result.data
          });

        case 5:
          _context2.next = 11;
          break;

        case 7:
          _context2.prev = 7;
          _context2.t0 = _context2["catch"](0);
          _context2.next = 11;
          return put({
            type: "LOG_OUT_FAILURE",
            data: _context2.t0.response.data
          });

        case 11:
        case "end":
          return _context2.stop();
      }
    }
  }, _marked2, null, [[0, 7]]);
}

function addPostAPI(data) {
  return axios__WEBPACK_IMPORTED_MODULE_2___default.a.post("/api/post", data);
}

function addPost(action) {
  return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function addPost$(_context3) {
    while (1) {
      switch (_context3.prev = _context3.next) {
        case 0:
          _context3.prev = 0;
          _context3.next = 3;
          return delay(1000);

        case 3:
          _context3.next = 5;
          return put({
            type: "ADD_POST_SUCCESS"
          });

        case 5:
          _context3.next = 11;
          break;

        case 7:
          _context3.prev = 7;
          _context3.t0 = _context3["catch"](0);
          _context3.next = 11;
          return put({
            type: "LOG_OUT_FAILURE",
            data: _context3.t0.response.data
          });

        case 11:
        case "end":
          return _context3.stop();
      }
    }
  }, _marked3, null, [[0, 7]]);
} //take는 뒤에 action이 실행 될때까지 기다리겠다는 뜻 (take('LOG_IN', login)) => 'LOG_IN'(action)이 실행 될때 까지 기다리고, 실행 되면 뒤에 logIn function을 실행 함.
// event listener 같은 역할을 하지만 치명적인 단점은 1회용임. (한번 실행되고 나면 해당 event listner가 사라짐. 따라서 while로 감싸주거나 takeEvery로 받아 줘야 함.) => takeLatest로 쓸 수도 있는데 이건, 실수로 두번누르거나 했을때 마지막꺼만 인식해서 처리해 줌.
// function* watchLogin() {
//   yield takeLatest("LOG_IN_REQUEST", logIn);
// }
// function* watchLogOut() {
//   yield takeLatest("LOG_OUT_REQUEST", logOut);
// }


function watchAddPost() {
  return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function watchAddPost$(_context4) {
    while (1) {
      switch (_context4.prev = _context4.next) {
        case 0:
          _context4.next = 2;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["takeLatest"])("ADD_POST_REQUEST", addPost);

        case 2:
        case "end":
          return _context4.stop();
      }
    }
  }, _marked4);
}

function rootSaga() {
  return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function rootSaga$(_context5) {
    while (1) {
      switch (_context5.prev = _context5.next) {
        case 0:
          _context5.next = 2;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["all"])([Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["fork"])(watchLogin), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["fork"])(watchLogOut), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["fork"])(watchAddPost)]);

        case 2:
        case "end":
          return _context5.stop();
      }
    }
  }, _marked5);
}

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc2FnYXMvaW5kZXguanMiXSwibmFtZXMiOlsibG9nSW4iLCJsb2dPdXQiLCJhZGRQb3N0Iiwid2F0Y2hBZGRQb3N0Iiwicm9vdFNhZ2EiLCJsb2dJbkFQSSIsImRhdGEiLCJheGlvcyIsInBvc3QiLCJhY3Rpb24iLCJkZWxheSIsInB1dCIsInR5cGUiLCJyZXN1bHQiLCJyZXNwb25zZSIsImxvZ091dEFQSSIsImFkZFBvc3RBUEkiLCJ0YWtlTGF0ZXN0IiwiYWxsIiwiZm9yayIsIndhdGNoTG9naW4iLCJ3YXRjaExvZ091dCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7OztrR0FXVUEsSzttR0FzQkFDLE07bUdBb0JBQyxPO21HQXdCQUMsWTttR0FJZUMsUTs7QUFqRnpCO0FBQ0E7O0FBRUEsU0FBU0MsUUFBVCxDQUFrQkMsSUFBbEIsRUFBd0I7QUFDdEIsU0FBT0MsNENBQUssQ0FBQ0MsSUFBTixDQUFXLFlBQVgsRUFBeUJGLElBQXpCLENBQVA7QUFDRCxDLENBRUQ7QUFDQTtBQUNBOzs7QUFFQSxTQUFVTixLQUFWLENBQWdCUyxNQUFoQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUtJLGlCQUFNQyxLQUFLLENBQUMsSUFBRCxDQUFYOztBQUxKO0FBQUE7QUFNSSxpQkFBTUMsR0FBRyxDQUFDO0FBQ1JDLGdCQUFJLEVBQUUsZ0JBREU7QUFFUk4sZ0JBQUksRUFBRU8sTUFBTSxDQUFDUDtBQUZMLFdBQUQsQ0FBVDs7QUFOSjtBQUFBO0FBQUE7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFXSSxpQkFBTUssR0FBRyxDQUFDO0FBQ1JDLGdCQUFJLEVBQUUsZ0JBREU7QUFFUk4sZ0JBQUksRUFBRSxZQUFJUSxRQUFKLENBQWFSO0FBRlgsV0FBRCxDQUFUOztBQVhKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBOztBQWtCQSxTQUFTUyxTQUFULEdBQXFCO0FBQ25CLFNBQU9SLDRDQUFLLENBQUNDLElBQU4sQ0FBVyxhQUFYLENBQVA7QUFDRDs7QUFFRCxTQUFVUCxNQUFWO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBR0ksaUJBQU1TLEtBQUssQ0FBQyxJQUFELENBQVg7O0FBSEo7QUFBQTtBQUlJLGlCQUFNQyxHQUFHLENBQUM7QUFDUkMsZ0JBQUksRUFBRSxpQkFERTtBQUVSTixnQkFBSSxFQUFFTyxNQUFNLENBQUNQO0FBRkwsV0FBRCxDQUFUOztBQUpKO0FBQUE7QUFBQTs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQVNJLGlCQUFNSyxHQUFHLENBQUM7QUFDUkMsZ0JBQUksRUFBRSxpQkFERTtBQUVSTixnQkFBSSxFQUFFLGFBQUlRLFFBQUosQ0FBYVI7QUFGWCxXQUFELENBQVQ7O0FBVEo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7O0FBZ0JBLFNBQVNVLFVBQVQsQ0FBb0JWLElBQXBCLEVBQTBCO0FBQ3hCLFNBQU9DLDRDQUFLLENBQUNDLElBQU4sQ0FBVyxXQUFYLEVBQXdCRixJQUF4QixDQUFQO0FBQ0Q7O0FBRUQsU0FBVUosT0FBVixDQUFrQk8sTUFBbEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFHSSxpQkFBTUMsS0FBSyxDQUFDLElBQUQsQ0FBWDs7QUFISjtBQUFBO0FBSUksaUJBQU1DLEdBQUcsQ0FBQztBQUNSQyxnQkFBSSxFQUFFO0FBREUsV0FBRCxDQUFUOztBQUpKO0FBQUE7QUFBQTs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQVFJLGlCQUFNRCxHQUFHLENBQUM7QUFDUkMsZ0JBQUksRUFBRSxpQkFERTtBQUVSTixnQkFBSSxFQUFFLGFBQUlRLFFBQUosQ0FBYVI7QUFGWCxXQUFELENBQVQ7O0FBUko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsQyxDQWVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7OztBQUNBLFNBQVVILFlBQVY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0UsaUJBQU1jLHFFQUFVLENBQUMsa0JBQUQsRUFBcUJmLE9BQXJCLENBQWhCOztBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBOztBQUllLFNBQVVFLFFBQVY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBTWIsaUJBQU1jLDhEQUFHLENBQUMsQ0FBQ0MsK0RBQUksQ0FBQ0MsVUFBRCxDQUFMLEVBQW1CRCwrREFBSSxDQUFDRSxXQUFELENBQXZCLEVBQXNDRiwrREFBSSxDQUFDaEIsWUFBRCxDQUExQyxDQUFELENBQVQ7O0FBTmE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvX2FwcC45ZmE1NGJjZTA3MDUyYTkwYzlmOS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgYWxsLCBmb3JrLCB0YWtlRXZlcnksIHRha2VMYXRlc3QgfSBmcm9tIFwicmVkdXgtc2FnYS9lZmZlY3RzXCI7XHJcbmltcG9ydCBheGlvcyBmcm9tIFwiYXhpb3NcIjtcclxuXHJcbmZ1bmN0aW9uIGxvZ0luQVBJKGRhdGEpIHtcclxuICByZXR1cm4gYXhpb3MucG9zdChcIi9hcGkvbG9naW5cIiwgZGF0YSk7XHJcbn1cclxuXHJcbi8vIGNvbnN0IGwgPSBsb2dJbih7dHlwZTogJ0xPR19JTl9SRVFVRVNUJywgZGF0YToge2lkOiAnamhrZXZpbjIxQGdtYWlsLmNvbSd9fSlcclxuLy8gbC5uZXh0KCk7XHJcbi8vIGwubmV4dCgpO1xyXG5cclxuZnVuY3Rpb24qIGxvZ0luKGFjdGlvbikge1xyXG4gIC8v7ISx6rO1IOqysOqzvOuKlCByZXN1bHQuZGF0YeyXkCwg7Iuk7Yyo6rK96rO864qUIGVyci5yZXNwb25zZS5kYXRh7JeQIOuLtOqyqOyeiOydjFxyXG4gIC8vcHV07J2AIGRpc3BhdGNo65286rOgIOyDneqwge2VmOq4sFxyXG4gIHRyeSB7XHJcbiAgICAvLyBjb25zdCByZXN1bHQgPSB5aWVsZCBjYWxsKGxvZ0luQVBJLCBhY3Rpb24uZGF0YSk7XHJcbiAgICB5aWVsZCBkZWxheSgxMDAwKTtcclxuICAgIHlpZWxkIHB1dCh7XHJcbiAgICAgIHR5cGU6IFwiTE9HX0lOX1NVQ0NFU1NcIixcclxuICAgICAgZGF0YTogcmVzdWx0LmRhdGEsXHJcbiAgICB9KTtcclxuICB9IGNhdGNoIChlcnIpIHtcclxuICAgIHlpZWxkIHB1dCh7XHJcbiAgICAgIHR5cGU6IFwiTE9HX0lOX0ZBSUxVUkVcIixcclxuICAgICAgZGF0YTogZXJyLnJlc3BvbnNlLmRhdGEsXHJcbiAgICB9KTtcclxuICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGxvZ091dEFQSSgpIHtcclxuICByZXR1cm4gYXhpb3MucG9zdChcIi9hcGkvbG9nb3V0XCIpO1xyXG59XHJcblxyXG5mdW5jdGlvbiogbG9nT3V0KCkge1xyXG4gIHRyeSB7XHJcbiAgICAvLyBjb25zdCByZXN1bHQgPSB5aWVsZCBjYWxsKGxvZ091dEFQSSk7XHJcbiAgICB5aWVsZCBkZWxheSgxMDAwKTtcclxuICAgIHlpZWxkIHB1dCh7XHJcbiAgICAgIHR5cGU6IFwiTE9HX09VVF9TVUNDRVNTXCIsXHJcbiAgICAgIGRhdGE6IHJlc3VsdC5kYXRhLFxyXG4gICAgfSk7XHJcbiAgfSBjYXRjaCAoZXJyKSB7XHJcbiAgICB5aWVsZCBwdXQoe1xyXG4gICAgICB0eXBlOiBcIkxPR19PVVRfRkFJTFVSRVwiLFxyXG4gICAgICBkYXRhOiBlcnIucmVzcG9uc2UuZGF0YSxcclxuICAgIH0pO1xyXG4gIH1cclxufVxyXG5cclxuZnVuY3Rpb24gYWRkUG9zdEFQSShkYXRhKSB7XHJcbiAgcmV0dXJuIGF4aW9zLnBvc3QoXCIvYXBpL3Bvc3RcIiwgZGF0YSk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uKiBhZGRQb3N0KGFjdGlvbikge1xyXG4gIHRyeSB7XHJcbiAgICAvLyBjb25zdCByZXN1bHQgPSB5aWVsZCBjYWxsKGFkZFBvc3RBUEksIGFjdGlvbi5kYXRhKTtcclxuICAgIHlpZWxkIGRlbGF5KDEwMDApO1xyXG4gICAgeWllbGQgcHV0KHtcclxuICAgICAgdHlwZTogXCJBRERfUE9TVF9TVUNDRVNTXCIsXHJcbiAgICB9KTtcclxuICB9IGNhdGNoIChlcnIpIHtcclxuICAgIHlpZWxkIHB1dCh7XHJcbiAgICAgIHR5cGU6IFwiTE9HX09VVF9GQUlMVVJFXCIsXHJcbiAgICAgIGRhdGE6IGVyci5yZXNwb25zZS5kYXRhLFxyXG4gICAgfSk7XHJcbiAgfVxyXG59XHJcblxyXG4vL3Rha2XripQg65Kk7JeQIGFjdGlvbuydtCDsi6Ttlokg65Cg65WM6rmM7KeAIOq4sOuLpOumrOqyoOuLpOuKlCDrnLsgKHRha2UoJ0xPR19JTicsIGxvZ2luKSkgPT4gJ0xPR19JTicoYWN0aW9uKeydtCDsi6Ttlokg65Cg65WMIOq5jOyngCDquLDri6Trpqzqs6AsIOyLpO2WiSDrkJjrqbQg65Kk7JeQIGxvZ0luIGZ1bmN0aW9u7J2EIOyLpO2WiSDtlaguXHJcbi8vIGV2ZW50IGxpc3RlbmVyIOqwmeydgCDsl63tlaDsnYQg7ZWY7KeA66eMIOy5mOuqheyggeyduCDri6jsoJDsnYAgMe2ajOyaqeyehC4gKO2VnOuyiCDsi6TtlonrkJjqs6Ag64KY66m0IO2VtOuLuSBldmVudCBsaXN0bmVy6rCAIOyCrOudvOynkC4g65Sw65287IScIHdoaWxl66GcIOqwkOyLuOyjvOqxsOuCmCB0YWtlRXZlcnnroZwg67Cb7JWEIOykmOyVvCDtlaguKSA9PiB0YWtlTGF0ZXN066GcIOyTuCDsiJjrj4Qg7J6I64qU642wIOydtOqxtCwg7Iuk7IiY66GcIOuRkOuyiOuIhOultOqxsOuCmCDtlojsnYTrlYwg66eI7KeA66eJ6rq866eMIOyduOyLne2VtOyEnCDsspjrpqztlbQg7KSMLlxyXG4vLyBmdW5jdGlvbiogd2F0Y2hMb2dpbigpIHtcclxuLy8gICB5aWVsZCB0YWtlTGF0ZXN0KFwiTE9HX0lOX1JFUVVFU1RcIiwgbG9nSW4pO1xyXG4vLyB9XHJcblxyXG4vLyBmdW5jdGlvbiogd2F0Y2hMb2dPdXQoKSB7XHJcbi8vICAgeWllbGQgdGFrZUxhdGVzdChcIkxPR19PVVRfUkVRVUVTVFwiLCBsb2dPdXQpO1xyXG4vLyB9XHJcbmZ1bmN0aW9uKiB3YXRjaEFkZFBvc3QoKSB7XHJcbiAgeWllbGQgdGFrZUxhdGVzdChcIkFERF9QT1NUX1JFUVVFU1RcIiwgYWRkUG9zdCk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKiByb290U2FnYSgpIHtcclxuICAvL0FMTOydhCDtlZjrqbQg67Cw7Je07JWI7J2YIOuqqOuToCDqsoPrk6TsnYQg7ZWc67KI7JeQIOuLpCDsi6Ttlokg7ZWoLlxyXG4gIC8vZm9ya+uKlCDtlajsiJjrpbwg7Iuk7ZaJ7ZWc64uk64qUIOucuyAuXHJcbiAgLy9mb3Jr64yA7IugIGNhbGzsnYQg7JOw64qUIOqyveyasOuPhCDsnojsnYwuIO2VmOyngOunjCDrkZDqsJzsnZgg7LCo7J207KCQIOygle2Zle2eiCDslYzquLAuXHJcbiAgLy/jhLQgRk9SS+uKlCDruYTrj5nquLAg7ZWo7IiYIO2YuOy2nCAvIGNhbGzsnYAg64+Z6riwIO2VqOyImCDtmLjstpxcclxuICAvLyB5aWVsZOuKlCBhd2FpdOqzvCDruYTsirftlaguXHJcbiAgeWllbGQgYWxsKFtmb3JrKHdhdGNoTG9naW4pLCBmb3JrKHdhdGNoTG9nT3V0KSwgZm9yayh3YXRjaEFkZFBvc3QpXSk7XHJcbn1cclxuIl0sInNvdXJjZVJvb3QiOiIifQ==