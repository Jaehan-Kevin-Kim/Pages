webpackHotUpdate_N_E("pages/index",{

/***/ "./components/PostCard.js":
/*!********************************!*\
  !*** ./components/PostCard.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! antd */ "./node_modules/antd/es/index.js");
/* harmony import */ var _ant_design_icons__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ant-design/icons */ "./node_modules/@ant-design/icons/es/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _PostImages__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./PostImages */ "./components/PostImages.js");
/* harmony import */ var _CommentForm__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./CommentForm */ "./components/CommentForm.js");
/* harmony import */ var _PostCardContent__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./PostCardContent */ "./components/PostCardContent.js");
/* harmony import */ var _reducers_post__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../reducers/post */ "./reducers/post.js");
/* harmony import */ var _FollowButton__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./FollowButton */ "./components/FollowButton.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__);
var _jsxFileName = "F:\\Self Study_Coding\\Web\\Portfolio\\React_NodeBird\\preapre_second\\front\\components\\PostCard.js",
    _this = undefined,
    _s = $RefreshSig$();














var PostCard = function PostCard(_ref) {
  _s();

  var post = _ref.post;

  // const [liked, setLiked] = useState(false);
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(false),
      commentFormOpened = _useState[0],
      setCommentFormOpened = _useState[1];

  var dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_3__["useDispatch"])();

  var _useSelector = Object(react_redux__WEBPACK_IMPORTED_MODULE_3__["useSelector"])(function (state) {
    return state.post;
  }),
      removePostLoading = _useSelector.removePostLoading,
      retweetError = _useSelector.retweetError;

  var _useSelector2 = Object(react_redux__WEBPACK_IMPORTED_MODULE_3__["useSelector"])(function (state) {
    return state.user;
  }),
      me = _useSelector2.me; // const id = me && me.id;


  var id = me === null || me === void 0 ? void 0 : me.id; // (위 me && me.id 와 같은 문법이지만 훨씬 짧은 새로운 문법)
  // useEffect(() => {
  //   if (retweetError) {
  //     alert(retweetError);
  //   }
  // }, [retweetError]);

  var onLike = Object(react__WEBPACK_IMPORTED_MODULE_2__["useCallback"])(function () {
    if (!id) {
      return alert("You need to sign in.");
    }

    return dispatch({
      type: _reducers_post__WEBPACK_IMPORTED_MODULE_8__["LIKE_POST_REQUEST"],
      data: post.id
    });
    /*
    setLiked((prev) => true);
    //참을 거짓으로, 거짓을 참으로 toggle로 바꿀때는 위와 같이 작성
    */
  }, [id]);
  var onUnlike = Object(react__WEBPACK_IMPORTED_MODULE_2__["useCallback"])(function () {
    if (!id) {
      return alert("You need to sign in.");
    }

    return dispatch({
      type: _reducers_post__WEBPACK_IMPORTED_MODULE_8__["UNLIKE_POST_REQUEST"],
      data: post.id
    });
  }, [id]);
  var onToggleComment = Object(react__WEBPACK_IMPORTED_MODULE_2__["useCallback"])(function () {
    setCommentFormOpened(function (prev) {
      return !prev;
    });
  }, []);
  var onRemovePost = Object(react__WEBPACK_IMPORTED_MODULE_2__["useCallback"])(function () {
    if (!id) {
      return alert("You need to sign in.");
    }

    return dispatch({
      type: _reducers_post__WEBPACK_IMPORTED_MODULE_8__["REMOVE_POST_REQUEST"],
      data: post.id
    });
  }, []);
  var onRetweet = Object(react__WEBPACK_IMPORTED_MODULE_2__["useCallback"])(function () {
    if (!id) {
      return alert("You need to sign in.");
    }

    return dispatch({
      type: _reducers_post__WEBPACK_IMPORTED_MODULE_8__["RETWEET_REQUEST"],
      data: post.id
    });
  }, [id]);
  var liked = post.Likers.find(function (v) {
    return v.id === id;
  });
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__["jsxDEV"])("div", {
    style: {
      marginBottom: 20
    },
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_0__["Card"], {
      cover: post.Images[0] && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__["jsxDEV"])(_PostImages__WEBPACK_IMPORTED_MODULE_5__["default"], {
        images: post.Images
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 92,
        columnNumber: 34
      }, _this),
      actions: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__["jsxDEV"])(_ant_design_icons__WEBPACK_IMPORTED_MODULE_1__["RetweetOutlined"], {
        onClick: onRetweet
      }, "retweet", false, {
        fileName: _jsxFileName,
        lineNumber: 94,
        columnNumber: 11
      }, _this), liked ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__["jsxDEV"])(_ant_design_icons__WEBPACK_IMPORTED_MODULE_1__["HeartTwoTone"], {
        twoToneColor: "red",
        onClick: onUnlike
      }, "heart", false, {
        fileName: _jsxFileName,
        lineNumber: 96,
        columnNumber: 13
      }, _this) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__["jsxDEV"])(_ant_design_icons__WEBPACK_IMPORTED_MODULE_1__["HeartOutlined"], {
        onClick: onLike
      }, "heart", false, {
        fileName: _jsxFileName,
        lineNumber: 98,
        columnNumber: 13
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__["jsxDEV"])(_ant_design_icons__WEBPACK_IMPORTED_MODULE_1__["MessageOutlined"], {
        onClick: onToggleComment
      }, "comment", false, {
        fileName: _jsxFileName,
        lineNumber: 100,
        columnNumber: 11
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_0__["Popover"], {
        content: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_0__["Button"].Group, {
          children: id && post.User.id === id ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__["Fragment"], {
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_0__["Button"], {
              children: "Modify"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 107,
              columnNumber: 21
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_0__["Button"], {
              type: "danger",
              onClick: onRemovePost,
              loading: removePostLoading,
              children: "Delete"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 108,
              columnNumber: 21
            }, _this)]
          }, void 0, true) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_0__["Button"], {
            children: "Report"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 113,
            columnNumber: 19
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 104,
          columnNumber: 15
        }, _this),
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__["jsxDEV"])(_ant_design_icons__WEBPACK_IMPORTED_MODULE_1__["EllipsisOutlined"], {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 117,
          columnNumber: 13
        }, _this)
      }, "more", false, {
        fileName: _jsxFileName,
        lineNumber: 101,
        columnNumber: 11
      }, _this)],
      extra: id && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__["jsxDEV"])(_FollowButton__WEBPACK_IMPORTED_MODULE_9__["default"], {
        post: post
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 120,
        columnNumber: 22
      }, _this),
      children: post.RetweetId && post.Retweet ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_0__["Card"], {
        cover: post.Retweet.Images[0] && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__["jsxDEV"])(_PostImages__WEBPACK_IMPORTED_MODULE_5__["default"], {
          images: post.Retweet.Images
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 122,
          columnNumber: 50
        }, _this),
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_0__["Card"].Meta, {
          avatar: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_0__["Avatar"], {
            children: post.Retweet.User.nickname[0]
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 124,
            columnNumber: 23
          }, _this),
          title: post.Retweet.User.nickname,
          description: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__["jsxDEV"])(_PostCardContent__WEBPACK_IMPORTED_MODULE_7__["default"], {
            postData: post.Retweet.content
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 126,
            columnNumber: 28
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 123,
          columnNumber: 13
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 122,
        columnNumber: 11
      }, _this) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_0__["Card"].Meta, {
        avatar: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_0__["Avatar"], {
          children: post.User.nickname[0]
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 131,
          columnNumber: 21
        }, _this),
        title: post.User.nickname,
        description: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__["jsxDEV"])(_PostCardContent__WEBPACK_IMPORTED_MODULE_7__["default"], {
          postData: post.content
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 133,
          columnNumber: 26
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 130,
        columnNumber: 11
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 91,
      columnNumber: 7
    }, _this), commentFormOpened && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__["jsxDEV"])("div", {
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__["jsxDEV"])(_CommentForm__WEBPACK_IMPORTED_MODULE_6__["default"], {
        post: post
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 139,
        columnNumber: 11
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_0__["List"], {
        header: "".concat(post.Comments.length, "'s comments"),
        itemLayout: "horizontal",
        dataSource: post.Comments,
        renderItem: function renderItem(item) {
          return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__["jsxDEV"])("li", {
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_0__["Comment"], {
              author: item.User.nickname,
              avatar: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_0__["Avatar"], {
                children: item.User.nickname[0]
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 148,
                columnNumber: 27
              }, _this),
              content: item.content
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 146,
              columnNumber: 17
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 145,
            columnNumber: 15
          }, _this);
        }
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 140,
        columnNumber: 11
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 138,
      columnNumber: 9
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 90,
    columnNumber: 5
  }, _this);
};

_s(PostCard, "ls/NrpQ0qa4ye4hvVDYQe4KpLA4=", false, function () {
  return [react_redux__WEBPACK_IMPORTED_MODULE_3__["useDispatch"], react_redux__WEBPACK_IMPORTED_MODULE_3__["useSelector"], react_redux__WEBPACK_IMPORTED_MODULE_3__["useSelector"]];
});

_c = PostCard;
PostCard.propTypes = {
  post: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.shape({
    id: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.number,
    User: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.object,
    content: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.string,
    createdAt: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.string,
    Comment: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.object),
    Images: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.object),
    Likers: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.object),
    RetweetId: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.number,
    Retweet: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.objectOf(prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.any)
  }).isRequired
};
/* harmony default export */ __webpack_exports__["default"] = (PostCard);

var _c;

$RefreshReg$(_c, "PostCard");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Qb3N0Q2FyZC5qcyJdLCJuYW1lcyI6WyJQb3N0Q2FyZCIsInBvc3QiLCJ1c2VTdGF0ZSIsImNvbW1lbnRGb3JtT3BlbmVkIiwic2V0Q29tbWVudEZvcm1PcGVuZWQiLCJkaXNwYXRjaCIsInVzZURpc3BhdGNoIiwidXNlU2VsZWN0b3IiLCJzdGF0ZSIsInJlbW92ZVBvc3RMb2FkaW5nIiwicmV0d2VldEVycm9yIiwidXNlciIsIm1lIiwiaWQiLCJvbkxpa2UiLCJ1c2VDYWxsYmFjayIsImFsZXJ0IiwidHlwZSIsIkxJS0VfUE9TVF9SRVFVRVNUIiwiZGF0YSIsIm9uVW5saWtlIiwiVU5MSUtFX1BPU1RfUkVRVUVTVCIsIm9uVG9nZ2xlQ29tbWVudCIsInByZXYiLCJvblJlbW92ZVBvc3QiLCJSRU1PVkVfUE9TVF9SRVFVRVNUIiwib25SZXR3ZWV0IiwiUkVUV0VFVF9SRVFVRVNUIiwibGlrZWQiLCJMaWtlcnMiLCJmaW5kIiwidiIsIm1hcmdpbkJvdHRvbSIsIkltYWdlcyIsIlVzZXIiLCJSZXR3ZWV0SWQiLCJSZXR3ZWV0Iiwibmlja25hbWUiLCJjb250ZW50IiwiQ29tbWVudHMiLCJsZW5ndGgiLCJpdGVtIiwicHJvcFR5cGVzIiwiUHJvcFR5cGVzIiwic2hhcGUiLCJudW1iZXIiLCJvYmplY3QiLCJzdHJpbmciLCJjcmVhdGVkQXQiLCJDb21tZW50IiwiYXJyYXlPZiIsIm9iamVjdE9mIiwiYW55IiwiaXNSZXF1aXJlZCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBT0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFNQTs7OztBQUVBLElBQU1BLFFBQVEsR0FBRyxTQUFYQSxRQUFXLE9BQWM7QUFBQTs7QUFBQSxNQUFYQyxJQUFXLFFBQVhBLElBQVc7O0FBQzdCO0FBQ0Esa0JBQWtEQyxzREFBUSxDQUFDLEtBQUQsQ0FBMUQ7QUFBQSxN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QUFPLEVBQUVLLGlEQUFTLENBQUNJLE1BSEM7QUFJcEJDLGFBQVMsRUFBRUwsaURBQVMsQ0FBQ0ksTUFKRDtBQUtwQkUsV0FBTyxFQUFFTixpREFBUyxDQUFDTyxPQUFWLENBQWtCUCxpREFBUyxDQUFDRyxNQUE1QixDQUxXO0FBTXBCYixVQUFNLEVBQUVVLGlEQUFTLENBQUNPLE9BQVYsQ0FBa0JQLGlEQUFTLENBQUNHLE1BQTVCLENBTlk7QUFPcEJqQixVQUFNLEVBQUVjLGlEQUFTLENBQUNPLE9BQVYsQ0FBa0JQLGlEQUFTLENBQUNHLE1BQTVCLENBUFk7QUFRcEJYLGFBQVMsRUFBRVEsaURBQVMsQ0FBQ0UsTUFSRDtBQVNwQlQsV0FBTyxFQUFFTyxpREFBUyxDQUFDUSxRQUFWLENBQW1CUixpREFBUyxDQUFDUyxHQUE3QjtBQVRXLEdBQWhCLEVBVUhDO0FBWGdCLENBQXJCO0FBY2VyRCx1RUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC5mMTgzMzY1MWIzNjgxZmI4OTJmYy5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQXZhdGFyLCBCdXR0b24sIENhcmQsIENvbW1lbnQsIExpc3QsIFBvcG92ZXIgfSBmcm9tIFwiYW50ZFwiO1xyXG5pbXBvcnQge1xyXG4gIFJldHdlZXRPdXRsaW5lZCxcclxuICBIZWFydE91dGxpbmVkLFxyXG4gIE1lc3NhZ2VPdXRsaW5lZCxcclxuICBFbGxpcHNpc091dGxpbmVkLFxyXG4gIEhlYXJ0VHdvVG9uZSxcclxufSBmcm9tIFwiQGFudC1kZXNpZ24vaWNvbnNcIjtcclxuaW1wb3J0IFJlYWN0LCB7IHVzZUNhbGxiYWNrLCB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7IHVzZURpc3BhdGNoLCB1c2VTZWxlY3RvciB9IGZyb20gXCJyZWFjdC1yZWR1eFwiO1xyXG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gXCJwcm9wLXR5cGVzXCI7XHJcbmltcG9ydCBQb3N0SW1hZ2VzIGZyb20gXCIuL1Bvc3RJbWFnZXNcIjtcclxuaW1wb3J0IENvbW1lbnRGb3JtIGZyb20gXCIuL0NvbW1lbnRGb3JtXCI7XHJcbmltcG9ydCBQb3N0Q2FyZENvbnRlbnQgZnJvbSBcIi4vUG9zdENhcmRDb250ZW50XCI7XHJcbmltcG9ydCB7XHJcbiAgTElLRV9QT1NUX1JFUVVFU1QsXHJcbiAgUkVNT1ZFX1BPU1RfUkVRVUVTVCxcclxuICBVTkxJS0VfUE9TVF9SRVFVRVNULFxyXG4gIFJFVFdFRVRfUkVRVUVTVCxcclxufSBmcm9tIFwiLi4vcmVkdWNlcnMvcG9zdFwiO1xyXG5pbXBvcnQgRm9sbG93QnV0dG9uIGZyb20gXCIuL0ZvbGxvd0J1dHRvblwiO1xyXG5cclxuY29uc3QgUG9zdENhcmQgPSAoeyBwb3N0IH0pID0+IHtcclxuICAvLyBjb25zdCBbbGlrZWQsIHNldExpa2VkXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICBjb25zdCBbY29tbWVudEZvcm1PcGVuZWQsIHNldENvbW1lbnRGb3JtT3BlbmVkXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuXHJcbiAgY29uc3QgZGlzcGF0Y2ggPSB1c2VEaXNwYXRjaCgpO1xyXG4gIGNvbnN0IHsgcmVtb3ZlUG9zdExvYWRpbmcsIHJldHdlZXRFcnJvciB9ID0gdXNlU2VsZWN0b3IoKHN0YXRlKSA9PiBzdGF0ZS5wb3N0KTtcclxuXHJcbiAgY29uc3QgeyBtZSB9ID0gdXNlU2VsZWN0b3IoKHN0YXRlKSA9PiBzdGF0ZS51c2VyKTtcclxuICAvLyBjb25zdCBpZCA9IG1lICYmIG1lLmlkO1xyXG4gIGNvbnN0IGlkID0gbWU/LmlkO1xyXG4gIC8vICjsnIQgbWUgJiYgbWUuaWQg7JmAIOqwmeydgCDrrLjrspXsnbTsp4Drp4wg7Zuo7JSsIOynp+ydgCDsg4jroZzsmrQg66y467KVKVxyXG5cclxuICAvLyB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gIC8vICAgaWYgKHJldHdlZXRFcnJvcikge1xyXG4gIC8vICAgICBhbGVydChyZXR3ZWV0RXJyb3IpO1xyXG4gIC8vICAgfVxyXG4gIC8vIH0sIFtyZXR3ZWV0RXJyb3JdKTtcclxuXHJcbiAgY29uc3Qgb25MaWtlID0gdXNlQ2FsbGJhY2soKCkgPT4ge1xyXG4gICAgaWYgKCFpZCkge1xyXG4gICAgICByZXR1cm4gYWxlcnQoXCJZb3UgbmVlZCB0byBzaWduIGluLlwiKTtcclxuICAgIH1cclxuICAgIHJldHVybiBkaXNwYXRjaCh7XHJcbiAgICAgIHR5cGU6IExJS0VfUE9TVF9SRVFVRVNULFxyXG4gICAgICBkYXRhOiBwb3N0LmlkLFxyXG4gICAgfSk7XHJcbiAgICAvKlxyXG4gICAgc2V0TGlrZWQoKHByZXYpID0+IHRydWUpO1xyXG4gICAgLy/ssLjsnYQg6rGw7KeT7Jy866GcLCDqsbDsp5PsnYQg7LC47Jy866GcIHRvZ2dsZeuhnCDrsJTqv4DrlYzripQg7JyE7JmAIOqwmeydtCDsnpHshLFcclxuICAgICovXHJcbiAgfSwgW2lkXSk7XHJcbiAgY29uc3Qgb25Vbmxpa2UgPSB1c2VDYWxsYmFjaygoKSA9PiB7XHJcbiAgICBpZiAoIWlkKSB7XHJcbiAgICAgIHJldHVybiBhbGVydChcIllvdSBuZWVkIHRvIHNpZ24gaW4uXCIpO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIGRpc3BhdGNoKHtcclxuICAgICAgdHlwZTogVU5MSUtFX1BPU1RfUkVRVUVTVCxcclxuICAgICAgZGF0YTogcG9zdC5pZCxcclxuICAgIH0pO1xyXG4gIH0sIFtpZF0pO1xyXG5cclxuICBjb25zdCBvblRvZ2dsZUNvbW1lbnQgPSB1c2VDYWxsYmFjaygoKSA9PiB7XHJcbiAgICBzZXRDb21tZW50Rm9ybU9wZW5lZCgocHJldikgPT4gIXByZXYpO1xyXG4gIH0sIFtdKTtcclxuXHJcbiAgY29uc3Qgb25SZW1vdmVQb3N0ID0gdXNlQ2FsbGJhY2soKCkgPT4ge1xyXG4gICAgaWYgKCFpZCkge1xyXG4gICAgICByZXR1cm4gYWxlcnQoXCJZb3UgbmVlZCB0byBzaWduIGluLlwiKTtcclxuICAgIH1cclxuICAgIHJldHVybiBkaXNwYXRjaCh7XHJcbiAgICAgIHR5cGU6IFJFTU9WRV9QT1NUX1JFUVVFU1QsXHJcbiAgICAgIGRhdGE6IHBvc3QuaWQsXHJcbiAgICB9KTtcclxuICB9LCBbXSk7XHJcblxyXG4gIGNvbnN0IG9uUmV0d2VldCA9IHVzZUNhbGxiYWNrKCgpID0+IHtcclxuICAgIGlmICghaWQpIHtcclxuICAgICAgcmV0dXJuIGFsZXJ0KFwiWW91IG5lZWQgdG8gc2lnbiBpbi5cIik7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gZGlzcGF0Y2goe1xyXG4gICAgICB0eXBlOiBSRVRXRUVUX1JFUVVFU1QsXHJcbiAgICAgIGRhdGE6IHBvc3QuaWQsXHJcbiAgICB9KTtcclxuICB9LCBbaWRdKTtcclxuXHJcbiAgY29uc3QgbGlrZWQgPSBwb3N0Lkxpa2Vycy5maW5kKCh2KSA9PiB2LmlkID09PSBpZCk7XHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgc3R5bGU9e3sgbWFyZ2luQm90dG9tOiAyMCB9fT5cclxuICAgICAgPENhcmRcclxuICAgICAgICBjb3Zlcj17cG9zdC5JbWFnZXNbMF0gJiYgPFBvc3RJbWFnZXMgaW1hZ2VzPXtwb3N0LkltYWdlc30gLz59XHJcbiAgICAgICAgYWN0aW9ucz17W1xyXG4gICAgICAgICAgPFJldHdlZXRPdXRsaW5lZCBrZXk9XCJyZXR3ZWV0XCIgb25DbGljaz17b25SZXR3ZWV0fSAvPixcclxuICAgICAgICAgIGxpa2VkID8gKFxyXG4gICAgICAgICAgICA8SGVhcnRUd29Ub25lIHR3b1RvbmVDb2xvcj1cInJlZFwiIGtleT1cImhlYXJ0XCIgb25DbGljaz17b25Vbmxpa2V9IC8+XHJcbiAgICAgICAgICApIDogKFxyXG4gICAgICAgICAgICA8SGVhcnRPdXRsaW5lZCBrZXk9XCJoZWFydFwiIG9uQ2xpY2s9e29uTGlrZX0gLz5cclxuICAgICAgICAgICksXHJcbiAgICAgICAgICA8TWVzc2FnZU91dGxpbmVkIGtleT1cImNvbW1lbnRcIiBvbkNsaWNrPXtvblRvZ2dsZUNvbW1lbnR9IC8+LFxyXG4gICAgICAgICAgPFBvcG92ZXJcclxuICAgICAgICAgICAga2V5PVwibW9yZVwiXHJcbiAgICAgICAgICAgIGNvbnRlbnQ9e1xyXG4gICAgICAgICAgICAgIDxCdXR0b24uR3JvdXA+XHJcbiAgICAgICAgICAgICAgICB7aWQgJiYgcG9zdC5Vc2VyLmlkID09PSBpZCA/IChcclxuICAgICAgICAgICAgICAgICAgPD5cclxuICAgICAgICAgICAgICAgICAgICA8QnV0dG9uPk1vZGlmeTwvQnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgIDxCdXR0b24gdHlwZT1cImRhbmdlclwiIG9uQ2xpY2s9e29uUmVtb3ZlUG9zdH0gbG9hZGluZz17cmVtb3ZlUG9zdExvYWRpbmd9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgRGVsZXRlXHJcbiAgICAgICAgICAgICAgICAgICAgPC9CdXR0b24+XHJcbiAgICAgICAgICAgICAgICAgIDwvPlxyXG4gICAgICAgICAgICAgICAgKSA6IChcclxuICAgICAgICAgICAgICAgICAgPEJ1dHRvbj5SZXBvcnQ8L0J1dHRvbj5cclxuICAgICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgICAgPC9CdXR0b24uR3JvdXA+XHJcbiAgICAgICAgICAgIH0+XHJcbiAgICAgICAgICAgIDxFbGxpcHNpc091dGxpbmVkIC8+XHJcbiAgICAgICAgICA8L1BvcG92ZXI+LFxyXG4gICAgICAgIF19XHJcbiAgICAgICAgZXh0cmE9e2lkICYmIDxGb2xsb3dCdXR0b24gcG9zdD17cG9zdH0gLz59PlxyXG4gICAgICAgIHtwb3N0LlJldHdlZXRJZCAmJiBwb3N0LlJldHdlZXQgPyAoXHJcbiAgICAgICAgICA8Q2FyZCBjb3Zlcj17cG9zdC5SZXR3ZWV0LkltYWdlc1swXSAmJiA8UG9zdEltYWdlcyBpbWFnZXM9e3Bvc3QuUmV0d2VldC5JbWFnZXN9IC8+fT5cclxuICAgICAgICAgICAgPENhcmQuTWV0YVxyXG4gICAgICAgICAgICAgIGF2YXRhcj17PEF2YXRhcj57cG9zdC5SZXR3ZWV0LlVzZXIubmlja25hbWVbMF19PC9BdmF0YXI+fVxyXG4gICAgICAgICAgICAgIHRpdGxlPXtwb3N0LlJldHdlZXQuVXNlci5uaWNrbmFtZX1cclxuICAgICAgICAgICAgICBkZXNjcmlwdGlvbj17PFBvc3RDYXJkQ29udGVudCBwb3N0RGF0YT17cG9zdC5SZXR3ZWV0LmNvbnRlbnR9IC8+fVxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICAgPC9DYXJkPlxyXG4gICAgICAgICkgOiAoXHJcbiAgICAgICAgICA8Q2FyZC5NZXRhXHJcbiAgICAgICAgICAgIGF2YXRhcj17PEF2YXRhcj57cG9zdC5Vc2VyLm5pY2tuYW1lWzBdfTwvQXZhdGFyPn1cclxuICAgICAgICAgICAgdGl0bGU9e3Bvc3QuVXNlci5uaWNrbmFtZX1cclxuICAgICAgICAgICAgZGVzY3JpcHRpb249ezxQb3N0Q2FyZENvbnRlbnQgcG9zdERhdGE9e3Bvc3QuY29udGVudH0gLz59XHJcbiAgICAgICAgICAvPlxyXG4gICAgICAgICl9XHJcbiAgICAgIDwvQ2FyZD5cclxuICAgICAge2NvbW1lbnRGb3JtT3BlbmVkICYmIChcclxuICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgPENvbW1lbnRGb3JtIHBvc3Q9e3Bvc3R9IC8+XHJcbiAgICAgICAgICA8TGlzdFxyXG4gICAgICAgICAgICBoZWFkZXI9e2Ake3Bvc3QuQ29tbWVudHMubGVuZ3RofSdzIGNvbW1lbnRzYH1cclxuICAgICAgICAgICAgaXRlbUxheW91dD1cImhvcml6b250YWxcIlxyXG4gICAgICAgICAgICBkYXRhU291cmNlPXtwb3N0LkNvbW1lbnRzfVxyXG4gICAgICAgICAgICByZW5kZXJJdGVtPXsoaXRlbSkgPT4gKFxyXG4gICAgICAgICAgICAgIDxsaT5cclxuICAgICAgICAgICAgICAgIDxDb21tZW50XHJcbiAgICAgICAgICAgICAgICAgIGF1dGhvcj17aXRlbS5Vc2VyLm5pY2tuYW1lfVxyXG4gICAgICAgICAgICAgICAgICBhdmF0YXI9ezxBdmF0YXI+e2l0ZW0uVXNlci5uaWNrbmFtZVswXX08L0F2YXRhcj59XHJcbiAgICAgICAgICAgICAgICAgIGNvbnRlbnQ9e2l0ZW0uY29udGVudH1cclxuICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgKX1cclxuICAgICAgICAgIC8+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICl9XHJcbiAgICAgIHsvKiA8Q29tbWVudEZvcm0gLz5cclxuICAgICAgPENvbW1lbnRzIC8+ICovfVxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufTtcclxuXHJcblBvc3RDYXJkLnByb3BUeXBlcyA9IHtcclxuICBwb3N0OiBQcm9wVHlwZXMuc2hhcGUoe1xyXG4gICAgaWQ6IFByb3BUeXBlcy5udW1iZXIsXHJcbiAgICBVc2VyOiBQcm9wVHlwZXMub2JqZWN0LFxyXG4gICAgY29udGVudDogUHJvcFR5cGVzLnN0cmluZyxcclxuICAgIGNyZWF0ZWRBdDogUHJvcFR5cGVzLnN0cmluZyxcclxuICAgIENvbW1lbnQ6IFByb3BUeXBlcy5hcnJheU9mKFByb3BUeXBlcy5vYmplY3QpLFxyXG4gICAgSW1hZ2VzOiBQcm9wVHlwZXMuYXJyYXlPZihQcm9wVHlwZXMub2JqZWN0KSxcclxuICAgIExpa2VyczogUHJvcFR5cGVzLmFycmF5T2YoUHJvcFR5cGVzLm9iamVjdCksXHJcbiAgICBSZXR3ZWV0SWQ6IFByb3BUeXBlcy5udW1iZXIsXHJcbiAgICBSZXR3ZWV0OiBQcm9wVHlwZXMub2JqZWN0T2YoUHJvcFR5cGVzLmFueSksXHJcbiAgfSkuaXNSZXF1aXJlZCxcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IFBvc3RDYXJkO1xyXG4iXSwic291cmNlUm9vdCI6IiJ9