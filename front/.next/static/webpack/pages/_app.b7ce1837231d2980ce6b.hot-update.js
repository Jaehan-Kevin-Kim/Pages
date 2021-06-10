webpackHotUpdate_N_E("pages/_app",{

/***/ "./reducers/post.js":
/*!**************************!*\
  !*** ./reducers/post.js ***!
  \**************************/
/*! exports provided: initialState, LOAD_POSTS_REQUEST, LOAD_POSTS_SUCCESS, LOAD_POSTS_FAILURE, ADD_POST_REQUEST, ADD_POST_SUCCESS, ADD_POST_FAILURE, REMOVE_POST_REQUEST, REMOVE_POST_SUCCESS, REMOVE_POST_FAILURE, ADD_COMMENT_REQUEST, ADD_COMMENT_SUCCESS, ADD_COMMENT_FAILURE, addPost, addComment, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initialState", function() { return initialState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOAD_POSTS_REQUEST", function() { return LOAD_POSTS_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOAD_POSTS_SUCCESS", function() { return LOAD_POSTS_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOAD_POSTS_FAILURE", function() { return LOAD_POSTS_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ADD_POST_REQUEST", function() { return ADD_POST_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ADD_POST_SUCCESS", function() { return ADD_POST_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ADD_POST_FAILURE", function() { return ADD_POST_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "REMOVE_POST_REQUEST", function() { return REMOVE_POST_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "REMOVE_POST_SUCCESS", function() { return REMOVE_POST_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "REMOVE_POST_FAILURE", function() { return REMOVE_POST_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ADD_COMMENT_REQUEST", function() { return ADD_COMMENT_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ADD_COMMENT_SUCCESS", function() { return ADD_COMMENT_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ADD_COMMENT_FAILURE", function() { return ADD_COMMENT_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addPost", function() { return addPost; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addComment", function() { return addComment; });
/* harmony import */ var immer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! immer */ "./node_modules/immer/dist/immer.esm.js");
// import shortId from "shortid";
 // import faker from "faker";

var initialState = {
  /*
  // mainPosts: [
  //   // {
  //   //   id: 1,
  //   //   User: {
  //   //     id: 1,
  //   //     nickname: "Kevin",
  //   //   },
  //   //   content: "First Post #HashTag, #Express",
  //   //   // Images: [
  //   //   //   {
  //   //   //     src: "https://res.cloudinary.com/highereducation/image/upload/c_scale,w_750/f_auto,fl_lossy,q_auto:eco/v1532988864/TheBestColleges.org/images/study-notebooks.jpg",
  //   //   //   },
  //   //   //   {
  //   //   //     src: "https://www.fastweb.com/uploads/article_photo/photo/2161/crop380w_istock_000002193842xsmall-books.jpg",
  //   //   //   },
  //   //   //   {
  //   //   //     src: "https://www.insidehighered.com/sites/default/server_files/media/iStock-520374378.jpg",
  //   //   //   },
  //   //   // ],
  //   //   Images: [
  //   //     {
  //   //       id: shortId.generate(),
  //   //       src: "https://bookthumb-phinf.pstatic.net/cover/137/995/13799585.jpg?udate=20180726",
  //   //     },
  //   //     {
  //   //       id: shortId.generate(),
  //   //       src: "https://gimg.gilbut.co.kr/book/BN001958/rn_view_BN001958.jpg",
  //   //     },
  //   //     {
  //   //       id: shortId.generate(),
  //   //       src: "https://gimg.gilbut.co.kr/book/BN001998/rn_view_BN001998.jpg",
  //   //     },
  //   //   ],
  //   //   Comments: [
  //   //     {
  //   //       id: shortId.generate(),
  //   //       User: {
  //   //         id: shortId.generate(),
  //   //         nickname: "nero",
  //   //       },
  //   //       content: "Great post!",
  //   //     },
  //   //     {
  //   //       id: shortId.generate(),
  //   //       User: {
  //   //         id: shortId.generate(),
  //   //         nickname: "jaehan",
  //   //       },
  //   //       content: `it's really educational`,
  //   //     },
  //   //   ],
  //   // },
  // ],
  */
  mainPosts: [],
  imagePaths: [],
  hasMorePosts: true,
  loadPostsLoading: false,
  loadPostsDone: false,
  loadPostsError: null,
  addPostLoading: false,
  addPostDone: false,
  addPostError: null,
  removePostLoading: false,
  removePostDone: false,
  removePostError: null,
  addCommentLoading: false,
  addCommentDone: false,
  addCommentError: null
};
/*
export const generateDummyPost = (number) =>
  Array(number)
    .fill()
    .map(() => ({
      id: shortId.generate(),
      User: {
        id: shortId.generate(),
        nickname: faker.name.findName(),
      },
      content: faker.lorem.paragraph(),
      Images: [
        {
          src: faker.image.image(),
        },
      ],
      Comments: [
        {
          User: {
            id: shortId.generate(),
            nickname: faker.name.findName(),
          },
          content: faker.lorem.sentence(),
        },
      ],
    }));
    */
// initialState.mainPosts = initialState.mainPosts.concat(generateDummyPost(10));

var LOAD_POSTS_REQUEST = "LOAD_POSTS_REQUEST";
var LOAD_POSTS_SUCCESS = "LOAD_POSTS_SUCCESS";
var LOAD_POSTS_FAILURE = "LOAD_POSTS_FAILURE";
var ADD_POST_REQUEST = "ADD_POST_REQUEST";
var ADD_POST_SUCCESS = "ADD_POST_SUCCESS";
var ADD_POST_FAILURE = "ADD_POST_FAILURE";
var REMOVE_POST_REQUEST = "REMOVE_POST_REQUEST";
var REMOVE_POST_SUCCESS = "REMOVE_POST_SUCCESS";
var REMOVE_POST_FAILURE = "REMOVE_POST_FAILURE";
var ADD_COMMENT_REQUEST = "ADD_COMMENT_REQUEST";
var ADD_COMMENT_SUCCESS = "ADD_COMMENT_SUCCESS";
var ADD_COMMENT_FAILURE = "ADD_COMMENT_FAILURE";
var addPost = function addPost(data) {
  return {
    type: ADD_POST_REQUEST,
    data: data
  };
};
var addComment = function addComment(data) {
  return {
    type: ADD_COMMENT_REQUEST,
    data: data
  };
};
/*
const dummyPost = (data) => ({
  id: data.id,
  content: data.content,
  User: {
    id: 1,
    nickname: "Kevin",
  },
  Images: [],
  Comments: [],
});

const dummyComment = (data) => ({
  id: shortId.generate(),
  content: data,
  User: {
    id: 1,
    nickname: "Kevin",
  },
});
*/
//reducer: 이전 상태를 액션을 통해 다음 상태로 만들어내는 함수 (불변성은 지키면서)

var reducer = function reducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
  var action = arguments.length > 1 ? arguments[1] : undefined;
  // immer: 이전 상태를 액션을 통해 다음 상태로 만들어내는 함수 (불변성 안지켜도 immer가 알아서 지켜줌.)
  // 여기부터는 draft가 state처럼 사용되고 이건 막 바꿔도 됨. (immer가 알아서 처리해 주므로)
  return Object(immer__WEBPACK_IMPORTED_MODULE_0__["default"])(state, function (draft) {
    switch (action.type) {
      case LOAD_POSTS_REQUEST:
        {
          draft.loadPostsLoading = true;
          draft.loadPostsDone = false;
          draft.loadPostsError = null;
          break;
        }

      case LOAD_POSTS_SUCCESS:
        {
          draft.loadPostsLoading = false;
          draft.loadPostsDone = true;
          draft.mainPosts = action.data.concat(draft.mainPosts);
          draft.hasMorePosts = draft.mainPosts.length < 50;
          break;
        }

      case LOAD_POSTS_FAILURE:
        draft.loadPostsLoading = false;
        draft.loadPostsError = action.error;
        break;

      case ADD_POST_REQUEST:
        {
          draft.addPostLoading = true;
          draft.addPostDone = false;
          draft.addPostError = null;
          break; // return { ...state, addPostLoading: true, addPostDone: false, addPostError: null };
        }

      case ADD_POST_SUCCESS:
        {
          draft.addPostLoading = false;
          draft.addPostDone = true; // draft.mainPosts = [dummyPost(action.data), ...state.mainPosts]; // 이렇게 하거나 혹은 아래와 같이 unshift사용 하면 배열값을 따로 정의안하고 (...이 사라 짐) 바로 사용가능 함
          // draft.mainPosts.unshift(dummyPost(action.data));

          draft.mainPosts.unshift(action.data);
          break; // action.data.content, postId, userId;
          // return {
          //   ...state,
          //   mainPosts: [dummyPost(action.data), ...state.mainPosts],
          //   addPostLoading: false,
          //   addPostDone: true,
          // };
        }

      case ADD_POST_FAILURE:
        draft.addPostLoading = false;
        draft.addPostError = action.error;
        break;
      // return { ...state, addPostLoading: false, addPostError: action.error };

      case REMOVE_POST_REQUEST:
        {
          draft.removePostLoading = true;
          draft.removePostDone = false;
          draft.removePostError = null;
          break; // return { ...state, removePostLoading: true, removePostDone: false, removePostError: null };
        }

      case REMOVE_POST_SUCCESS:
        {
          // action.data.content, postId, userId;
          draft.removePostLoading = false;
          draft.removePostDone = true;
          draft.mainPosts = draft.mainPosts.filter(function (v) {
            return v.id !== action.data;
          });
          break; // return {
          //   ...state,
          //   mainPosts: state.mainPosts.filter((v) => v.id !== action.data),
          //   removePostLoading: false,
          //   removePostDone: true,
          // };
        }

      case REMOVE_POST_FAILURE:
        draft.removePostLoading = false;
        draft.removePostError = true;
        break;
      // return { ...state, removePostLoading: false, removePostError: action.error };

      case ADD_COMMENT_REQUEST:
        {
          draft.addCommentLoading = true;
          draft.addCommentDone = false;
          draft.addCommentError = null;
          break; // return { ...state, addCommentLoading: true, addCommentDone: false, addCommentError: null };
        }
      //아래 부분 이해 안되면 게시글,댓글 saga 작성 하기 다시 체크. 11:30분 정도

      case ADD_COMMENT_SUCCESS:
        {
          var post = draft.mainPosts.find(function (v) {
            return v.id === action.data.PostId;
          });
          post.Comments.unshift(action.data);
          draft.addCommentLoading = false;
          draft.addCommentDone = true;
          break; //위는 immer를 통해서 불변성 신경안쓰고 코딩함. 아래는 기존 방식으로 불변성 신경쓰고 코딩한 내용
          // const postIndex = state.mainPosts.findIndex((v) => v.id === action.data.postId);
          // const post = { ...state.mainPosts[postIndex] };
          // post.Comments = [dummyComment(action.data.content), ...post.Comments];
          // const mainPosts = [...state.mainPosts];
          // mainPosts[postIndex] = post;
          // return {
          //   ...state,
          //   mainPosts,
          //   addCommentLoading: false,
          //   addCommentDone: true,
          // };
        }

      case ADD_COMMENT_FAILURE:
        draft.addCoomentLoading = false;
        draft.addCommentError = action.error;
        break;
      // return { ...state, addCommentLoading: false, addCommentError: action.error };

      default:
        {
          break; // return { ...state };
        }
    }
  });
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcmVkdWNlcnMvcG9zdC5qcyJdLCJuYW1lcyI6WyJpbml0aWFsU3RhdGUiLCJtYWluUG9zdHMiLCJpbWFnZVBhdGhzIiwiaGFzTW9yZVBvc3RzIiwibG9hZFBvc3RzTG9hZGluZyIsImxvYWRQb3N0c0RvbmUiLCJsb2FkUG9zdHNFcnJvciIsImFkZFBvc3RMb2FkaW5nIiwiYWRkUG9zdERvbmUiLCJhZGRQb3N0RXJyb3IiLCJyZW1vdmVQb3N0TG9hZGluZyIsInJlbW92ZVBvc3REb25lIiwicmVtb3ZlUG9zdEVycm9yIiwiYWRkQ29tbWVudExvYWRpbmciLCJhZGRDb21tZW50RG9uZSIsImFkZENvbW1lbnRFcnJvciIsIkxPQURfUE9TVFNfUkVRVUVTVCIsIkxPQURfUE9TVFNfU1VDQ0VTUyIsIkxPQURfUE9TVFNfRkFJTFVSRSIsIkFERF9QT1NUX1JFUVVFU1QiLCJBRERfUE9TVF9TVUNDRVNTIiwiQUREX1BPU1RfRkFJTFVSRSIsIlJFTU9WRV9QT1NUX1JFUVVFU1QiLCJSRU1PVkVfUE9TVF9TVUNDRVNTIiwiUkVNT1ZFX1BPU1RfRkFJTFVSRSIsIkFERF9DT01NRU5UX1JFUVVFU1QiLCJBRERfQ09NTUVOVF9TVUNDRVNTIiwiQUREX0NPTU1FTlRfRkFJTFVSRSIsImFkZFBvc3QiLCJkYXRhIiwidHlwZSIsImFkZENvbW1lbnQiLCJyZWR1Y2VyIiwic3RhdGUiLCJhY3Rpb24iLCJwcm9kdWNlIiwiZHJhZnQiLCJjb25jYXQiLCJsZW5ndGgiLCJlcnJvciIsInVuc2hpZnQiLCJmaWx0ZXIiLCJ2IiwiaWQiLCJwb3N0IiwiZmluZCIsIlBvc3RJZCIsIkNvbW1lbnRzIiwiYWRkQ29vbWVudExvYWRpbmciXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7Q0FFQTs7QUFFTyxJ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ckIsQ0FBYjtBQUNBRixjQUFJLENBQUNHLFFBQUwsQ0FBY1AsT0FBZCxDQUFzQk4sTUFBTSxDQUFDTCxJQUE3QjtBQUNBTyxlQUFLLENBQUN2QixpQkFBTixHQUEwQixLQUExQjtBQUNBdUIsZUFBSyxDQUFDdEIsY0FBTixHQUF1QixJQUF2QjtBQUNBLGdCQUx3QixDQU14QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDRDs7QUFDRCxXQUFLYSxtQkFBTDtBQUNFUyxhQUFLLENBQUNZLGlCQUFOLEdBQTBCLEtBQTFCO0FBQ0FaLGFBQUssQ0FBQ3JCLGVBQU4sR0FBd0JtQixNQUFNLENBQUNLLEtBQS9CO0FBQ0E7QUFDRjs7QUFFQTtBQUFTO0FBQ1AsZ0JBRE8sQ0FFUDtBQUNEO0FBN0dIO0FBK0dELEdBaEhhLENBQWQ7QUFpSEQsQ0FwSEQ7O0FBc0hlUCxzRUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9fYXBwLmI3Y2UxODM3MjMxZDI5ODBjZTZiLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBpbXBvcnQgc2hvcnRJZCBmcm9tIFwic2hvcnRpZFwiO1xyXG5pbXBvcnQgcHJvZHVjZSBmcm9tIFwiaW1tZXJcIjtcclxuLy8gaW1wb3J0IGZha2VyIGZyb20gXCJmYWtlclwiO1xyXG5cclxuZXhwb3J0IGNvbnN0IGluaXRpYWxTdGF0ZSA9IHtcclxuICAvKlxyXG4gIC8vIG1haW5Qb3N0czogW1xyXG4gIC8vICAgLy8ge1xyXG4gIC8vICAgLy8gICBpZDogMSxcclxuICAvLyAgIC8vICAgVXNlcjoge1xyXG4gIC8vICAgLy8gICAgIGlkOiAxLFxyXG4gIC8vICAgLy8gICAgIG5pY2tuYW1lOiBcIktldmluXCIsXHJcbiAgLy8gICAvLyAgIH0sXHJcbiAgLy8gICAvLyAgIGNvbnRlbnQ6IFwiRmlyc3QgUG9zdCAjSGFzaFRhZywgI0V4cHJlc3NcIixcclxuICAvLyAgIC8vICAgLy8gSW1hZ2VzOiBbXHJcbiAgLy8gICAvLyAgIC8vICAge1xyXG4gIC8vICAgLy8gICAvLyAgICAgc3JjOiBcImh0dHBzOi8vcmVzLmNsb3VkaW5hcnkuY29tL2hpZ2hlcmVkdWNhdGlvbi9pbWFnZS91cGxvYWQvY19zY2FsZSx3Xzc1MC9mX2F1dG8sZmxfbG9zc3kscV9hdXRvOmVjby92MTUzMjk4ODg2NC9UaGVCZXN0Q29sbGVnZXMub3JnL2ltYWdlcy9zdHVkeS1ub3RlYm9va3MuanBnXCIsXHJcbiAgLy8gICAvLyAgIC8vICAgfSxcclxuICAvLyAgIC8vICAgLy8gICB7XHJcbiAgLy8gICAvLyAgIC8vICAgICBzcmM6IFwiaHR0cHM6Ly93d3cuZmFzdHdlYi5jb20vdXBsb2Fkcy9hcnRpY2xlX3Bob3RvL3Bob3RvLzIxNjEvY3JvcDM4MHdfaXN0b2NrXzAwMDAwMjE5Mzg0MnhzbWFsbC1ib29rcy5qcGdcIixcclxuICAvLyAgIC8vICAgLy8gICB9LFxyXG4gIC8vICAgLy8gICAvLyAgIHtcclxuICAvLyAgIC8vICAgLy8gICAgIHNyYzogXCJodHRwczovL3d3dy5pbnNpZGVoaWdoZXJlZC5jb20vc2l0ZXMvZGVmYXVsdC9zZXJ2ZXJfZmlsZXMvbWVkaWEvaVN0b2NrLTUyMDM3NDM3OC5qcGdcIixcclxuICAvLyAgIC8vICAgLy8gICB9LFxyXG4gIC8vICAgLy8gICAvLyBdLFxyXG4gIC8vICAgLy8gICBJbWFnZXM6IFtcclxuICAvLyAgIC8vICAgICB7XHJcbiAgLy8gICAvLyAgICAgICBpZDogc2hvcnRJZC5nZW5lcmF0ZSgpLFxyXG4gIC8vICAgLy8gICAgICAgc3JjOiBcImh0dHBzOi8vYm9va3RodW1iLXBoaW5mLnBzdGF0aWMubmV0L2NvdmVyLzEzNy85OTUvMTM3OTk1ODUuanBnP3VkYXRlPTIwMTgwNzI2XCIsXHJcbiAgLy8gICAvLyAgICAgfSxcclxuICAvLyAgIC8vICAgICB7XHJcbiAgLy8gICAvLyAgICAgICBpZDogc2hvcnRJZC5nZW5lcmF0ZSgpLFxyXG4gIC8vICAgLy8gICAgICAgc3JjOiBcImh0dHBzOi8vZ2ltZy5naWxidXQuY28ua3IvYm9vay9CTjAwMTk1OC9ybl92aWV3X0JOMDAxOTU4LmpwZ1wiLFxyXG4gIC8vICAgLy8gICAgIH0sXHJcbiAgLy8gICAvLyAgICAge1xyXG4gIC8vICAgLy8gICAgICAgaWQ6IHNob3J0SWQuZ2VuZXJhdGUoKSxcclxuICAvLyAgIC8vICAgICAgIHNyYzogXCJodHRwczovL2dpbWcuZ2lsYnV0LmNvLmtyL2Jvb2svQk4wMDE5OTgvcm5fdmlld19CTjAwMTk5OC5qcGdcIixcclxuICAvLyAgIC8vICAgICB9LFxyXG4gIC8vICAgLy8gICBdLFxyXG4gIC8vICAgLy8gICBDb21tZW50czogW1xyXG4gIC8vICAgLy8gICAgIHtcclxuICAvLyAgIC8vICAgICAgIGlkOiBzaG9ydElkLmdlbmVyYXRlKCksXHJcbiAgLy8gICAvLyAgICAgICBVc2VyOiB7XHJcbiAgLy8gICAvLyAgICAgICAgIGlkOiBzaG9ydElkLmdlbmVyYXRlKCksXHJcbiAgLy8gICAvLyAgICAgICAgIG5pY2tuYW1lOiBcIm5lcm9cIixcclxuICAvLyAgIC8vICAgICAgIH0sXHJcbiAgLy8gICAvLyAgICAgICBjb250ZW50OiBcIkdyZWF0IHBvc3QhXCIsXHJcbiAgLy8gICAvLyAgICAgfSxcclxuICAvLyAgIC8vICAgICB7XHJcbiAgLy8gICAvLyAgICAgICBpZDogc2hvcnRJZC5nZW5lcmF0ZSgpLFxyXG4gIC8vICAgLy8gICAgICAgVXNlcjoge1xyXG4gIC8vICAgLy8gICAgICAgICBpZDogc2hvcnRJZC5nZW5lcmF0ZSgpLFxyXG4gIC8vICAgLy8gICAgICAgICBuaWNrbmFtZTogXCJqYWVoYW5cIixcclxuICAvLyAgIC8vICAgICAgIH0sXHJcbiAgLy8gICAvLyAgICAgICBjb250ZW50OiBgaXQncyByZWFsbHkgZWR1Y2F0aW9uYWxgLFxyXG4gIC8vICAgLy8gICAgIH0sXHJcbiAgLy8gICAvLyAgIF0sXHJcbiAgLy8gICAvLyB9LFxyXG4gIC8vIF0sXHJcbiAgKi9cclxuICBtYWluUG9zdHM6IFtdLFxyXG4gIGltYWdlUGF0aHM6IFtdLFxyXG4gIGhhc01vcmVQb3N0czogdHJ1ZSxcclxuICBsb2FkUG9zdHNMb2FkaW5nOiBmYWxzZSxcclxuICBsb2FkUG9zdHNEb25lOiBmYWxzZSxcclxuICBsb2FkUG9zdHNFcnJvcjogbnVsbCxcclxuICBhZGRQb3N0TG9hZGluZzogZmFsc2UsXHJcbiAgYWRkUG9zdERvbmU6IGZhbHNlLFxyXG4gIGFkZFBvc3RFcnJvcjogbnVsbCxcclxuICByZW1vdmVQb3N0TG9hZGluZzogZmFsc2UsXHJcbiAgcmVtb3ZlUG9zdERvbmU6IGZhbHNlLFxyXG4gIHJlbW92ZVBvc3RFcnJvcjogbnVsbCxcclxuICBhZGRDb21tZW50TG9hZGluZzogZmFsc2UsXHJcbiAgYWRkQ29tbWVudERvbmU6IGZhbHNlLFxyXG4gIGFkZENvbW1lbnRFcnJvcjogbnVsbCxcclxufTtcclxuXHJcbi8qXHJcbmV4cG9ydCBjb25zdCBnZW5lcmF0ZUR1bW15UG9zdCA9IChudW1iZXIpID0+XHJcbiAgQXJyYXkobnVtYmVyKVxyXG4gICAgLmZpbGwoKVxyXG4gICAgLm1hcCgoKSA9PiAoe1xyXG4gICAgICBpZDogc2hvcnRJZC5nZW5lcmF0ZSgpLFxyXG4gICAgICBVc2VyOiB7XHJcbiAgICAgICAgaWQ6IHNob3J0SWQuZ2VuZXJhdGUoKSxcclxuICAgICAgICBuaWNrbmFtZTogZmFrZXIubmFtZS5maW5kTmFtZSgpLFxyXG4gICAgICB9LFxyXG4gICAgICBjb250ZW50OiBmYWtlci5sb3JlbS5wYXJhZ3JhcGgoKSxcclxuICAgICAgSW1hZ2VzOiBbXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgc3JjOiBmYWtlci5pbWFnZS5pbWFnZSgpLFxyXG4gICAgICAgIH0sXHJcbiAgICAgIF0sXHJcbiAgICAgIENvbW1lbnRzOiBbXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgVXNlcjoge1xyXG4gICAgICAgICAgICBpZDogc2hvcnRJZC5nZW5lcmF0ZSgpLFxyXG4gICAgICAgICAgICBuaWNrbmFtZTogZmFrZXIubmFtZS5maW5kTmFtZSgpLFxyXG4gICAgICAgICAgfSxcclxuICAgICAgICAgIGNvbnRlbnQ6IGZha2VyLmxvcmVtLnNlbnRlbmNlKCksXHJcbiAgICAgICAgfSxcclxuICAgICAgXSxcclxuICAgIH0pKTtcclxuICAgICovXHJcbi8vIGluaXRpYWxTdGF0ZS5tYWluUG9zdHMgPSBpbml0aWFsU3RhdGUubWFpblBvc3RzLmNvbmNhdChnZW5lcmF0ZUR1bW15UG9zdCgxMCkpO1xyXG5cclxuZXhwb3J0IGNvbnN0IExPQURfUE9TVFNfUkVRVUVTVCA9IFwiTE9BRF9QT1NUU19SRVFVRVNUXCI7XHJcbmV4cG9ydCBjb25zdCBMT0FEX1BPU1RTX1NVQ0NFU1MgPSBcIkxPQURfUE9TVFNfU1VDQ0VTU1wiO1xyXG5leHBvcnQgY29uc3QgTE9BRF9QT1NUU19GQUlMVVJFID0gXCJMT0FEX1BPU1RTX0ZBSUxVUkVcIjtcclxuXHJcbmV4cG9ydCBjb25zdCBBRERfUE9TVF9SRVFVRVNUID0gXCJBRERfUE9TVF9SRVFVRVNUXCI7XHJcbmV4cG9ydCBjb25zdCBBRERfUE9TVF9TVUNDRVNTID0gXCJBRERfUE9TVF9TVUNDRVNTXCI7XHJcbmV4cG9ydCBjb25zdCBBRERfUE9TVF9GQUlMVVJFID0gXCJBRERfUE9TVF9GQUlMVVJFXCI7XHJcblxyXG5leHBvcnQgY29uc3QgUkVNT1ZFX1BPU1RfUkVRVUVTVCA9IFwiUkVNT1ZFX1BPU1RfUkVRVUVTVFwiO1xyXG5leHBvcnQgY29uc3QgUkVNT1ZFX1BPU1RfU1VDQ0VTUyA9IFwiUkVNT1ZFX1BPU1RfU1VDQ0VTU1wiO1xyXG5leHBvcnQgY29uc3QgUkVNT1ZFX1BPU1RfRkFJTFVSRSA9IFwiUkVNT1ZFX1BPU1RfRkFJTFVSRVwiO1xyXG5cclxuZXhwb3J0IGNvbnN0IEFERF9DT01NRU5UX1JFUVVFU1QgPSBcIkFERF9DT01NRU5UX1JFUVVFU1RcIjtcclxuZXhwb3J0IGNvbnN0IEFERF9DT01NRU5UX1NVQ0NFU1MgPSBcIkFERF9DT01NRU5UX1NVQ0NFU1NcIjtcclxuZXhwb3J0IGNvbnN0IEFERF9DT01NRU5UX0ZBSUxVUkUgPSBcIkFERF9DT01NRU5UX0ZBSUxVUkVcIjtcclxuXHJcbmV4cG9ydCBjb25zdCBhZGRQb3N0ID0gKGRhdGEpID0+ICh7XHJcbiAgdHlwZTogQUREX1BPU1RfUkVRVUVTVCxcclxuICBkYXRhLFxyXG59KTtcclxuZXhwb3J0IGNvbnN0IGFkZENvbW1lbnQgPSAoZGF0YSkgPT4gKHtcclxuICB0eXBlOiBBRERfQ09NTUVOVF9SRVFVRVNULFxyXG4gIGRhdGEsXHJcbn0pO1xyXG5cclxuLypcclxuY29uc3QgZHVtbXlQb3N0ID0gKGRhdGEpID0+ICh7XHJcbiAgaWQ6IGRhdGEuaWQsXHJcbiAgY29udGVudDogZGF0YS5jb250ZW50LFxyXG4gIFVzZXI6IHtcclxuICAgIGlkOiAxLFxyXG4gICAgbmlja25hbWU6IFwiS2V2aW5cIixcclxuICB9LFxyXG4gIEltYWdlczogW10sXHJcbiAgQ29tbWVudHM6IFtdLFxyXG59KTtcclxuXHJcbmNvbnN0IGR1bW15Q29tbWVudCA9IChkYXRhKSA9PiAoe1xyXG4gIGlkOiBzaG9ydElkLmdlbmVyYXRlKCksXHJcbiAgY29udGVudDogZGF0YSxcclxuICBVc2VyOiB7XHJcbiAgICBpZDogMSxcclxuICAgIG5pY2tuYW1lOiBcIktldmluXCIsXHJcbiAgfSxcclxufSk7XHJcbiovXHJcblxyXG4vL3JlZHVjZXI6IOydtOyghCDsg4Htg5zrpbwg7JWh7IWY7J2EIO2Gte2VtCDri6TsnYwg7IOB7YOc66GcIOunjOuTpOyWtOuCtOuKlCDtlajsiJggKOu2iOuzgOyEseydgCDsp4DtgqTrqbTshJwpXHJcbmNvbnN0IHJlZHVjZXIgPSAoc3RhdGUgPSBpbml0aWFsU3RhdGUsIGFjdGlvbikgPT4ge1xyXG4gIC8vIGltbWVyOiDsnbTsoIQg7IOB7YOc66W8IOyVoeyFmOydhCDthrXtlbQg64uk7J2MIOyDge2DnOuhnCDrp4zrk6TslrTrgrTripQg7ZWo7IiYICjrtojrs4DshLEg7JWI7KeA7Lyc64+EIGltbWVy6rCAIOyVjOyVhOyEnCDsp4DsvJzspIwuKVxyXG4gIC8vIOyXrOq4sOu2gO2EsOuKlCBkcmFmdOqwgCBzdGF0ZeyymOufvCDsgqzsmqnrkJjqs6Ag7J206rG0IOuniSDrsJTqv5Trj4Qg65CoLiAoaW1tZXLqsIAg7JWM7JWE7IScIOyymOumrO2VtCDso7zrr4DroZwpXHJcbiAgcmV0dXJuIHByb2R1Y2Uoc3RhdGUsIChkcmFmdCkgPT4ge1xyXG4gICAgc3dpdGNoIChhY3Rpb24udHlwZSkge1xyXG4gICAgICBjYXNlIExPQURfUE9TVFNfUkVRVUVTVDoge1xyXG4gICAgICAgIGRyYWZ0LmxvYWRQb3N0c0xvYWRpbmcgPSB0cnVlO1xyXG4gICAgICAgIGRyYWZ0LmxvYWRQb3N0c0RvbmUgPSBmYWxzZTtcclxuICAgICAgICBkcmFmdC5sb2FkUG9zdHNFcnJvciA9IG51bGw7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIH1cclxuICAgICAgY2FzZSBMT0FEX1BPU1RTX1NVQ0NFU1M6IHtcclxuICAgICAgICBkcmFmdC5sb2FkUG9zdHNMb2FkaW5nID0gZmFsc2U7XHJcbiAgICAgICAgZHJhZnQubG9hZFBvc3RzRG9uZSA9IHRydWU7XHJcbiAgICAgICAgZHJhZnQubWFpblBvc3RzID0gYWN0aW9uLmRhdGEuY29uY2F0KGRyYWZ0Lm1haW5Qb3N0cyk7XHJcbiAgICAgICAgZHJhZnQuaGFzTW9yZVBvc3RzID0gZHJhZnQubWFpblBvc3RzLmxlbmd0aCA8IDUwO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICB9XHJcbiAgICAgIGNhc2UgTE9BRF9QT1NUU19GQUlMVVJFOlxyXG4gICAgICAgIGRyYWZ0LmxvYWRQb3N0c0xvYWRpbmcgPSBmYWxzZTtcclxuICAgICAgICBkcmFmdC5sb2FkUG9zdHNFcnJvciA9IGFjdGlvbi5lcnJvcjtcclxuICAgICAgICBicmVhaztcclxuXHJcbiAgICAgIGNhc2UgQUREX1BPU1RfUkVRVUVTVDoge1xyXG4gICAgICAgIGRyYWZ0LmFkZFBvc3RMb2FkaW5nID0gdHJ1ZTtcclxuICAgICAgICBkcmFmdC5hZGRQb3N0RG9uZSA9IGZhbHNlO1xyXG4gICAgICAgIGRyYWZ0LmFkZFBvc3RFcnJvciA9IG51bGw7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgLy8gcmV0dXJuIHsgLi4uc3RhdGUsIGFkZFBvc3RMb2FkaW5nOiB0cnVlLCBhZGRQb3N0RG9uZTogZmFsc2UsIGFkZFBvc3RFcnJvcjogbnVsbCB9O1xyXG4gICAgICB9XHJcbiAgICAgIGNhc2UgQUREX1BPU1RfU1VDQ0VTUzoge1xyXG4gICAgICAgIGRyYWZ0LmFkZFBvc3RMb2FkaW5nID0gZmFsc2U7XHJcbiAgICAgICAgZHJhZnQuYWRkUG9zdERvbmUgPSB0cnVlO1xyXG4gICAgICAgIC8vIGRyYWZ0Lm1haW5Qb3N0cyA9IFtkdW1teVBvc3QoYWN0aW9uLmRhdGEpLCAuLi5zdGF0ZS5tYWluUG9zdHNdOyAvLyDsnbTroIfqsowg7ZWY6rGw64KYIO2YueydgCDslYTrnpjsmYAg6rCZ7J20IHVuc2hpZnTsgqzsmqkg7ZWY66m0IOuwsOyXtOqwkuydhCDrlLDroZwg7KCV7J2Y7JWI7ZWY6rOgICguLi7snbQg7IKs6528IOynkCkg67CU66GcIOyCrOyaqeqwgOuKpSDtlahcclxuICAgICAgICAvLyBkcmFmdC5tYWluUG9zdHMudW5zaGlmdChkdW1teVBvc3QoYWN0aW9uLmRhdGEpKTtcclxuICAgICAgICBkcmFmdC5tYWluUG9zdHMudW5zaGlmdChhY3Rpb24uZGF0YSk7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgLy8gYWN0aW9uLmRhdGEuY29udGVudCwgcG9zdElkLCB1c2VySWQ7XHJcbiAgICAgICAgLy8gcmV0dXJuIHtcclxuICAgICAgICAvLyAgIC4uLnN0YXRlLFxyXG4gICAgICAgIC8vICAgbWFpblBvc3RzOiBbZHVtbXlQb3N0KGFjdGlvbi5kYXRhKSwgLi4uc3RhdGUubWFpblBvc3RzXSxcclxuICAgICAgICAvLyAgIGFkZFBvc3RMb2FkaW5nOiBmYWxzZSxcclxuICAgICAgICAvLyAgIGFkZFBvc3REb25lOiB0cnVlLFxyXG4gICAgICAgIC8vIH07XHJcbiAgICAgIH1cclxuICAgICAgY2FzZSBBRERfUE9TVF9GQUlMVVJFOlxyXG4gICAgICAgIGRyYWZ0LmFkZFBvc3RMb2FkaW5nID0gZmFsc2U7XHJcbiAgICAgICAgZHJhZnQuYWRkUG9zdEVycm9yID0gYWN0aW9uLmVycm9yO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICAvLyByZXR1cm4geyAuLi5zdGF0ZSwgYWRkUG9zdExvYWRpbmc6IGZhbHNlLCBhZGRQb3N0RXJyb3I6IGFjdGlvbi5lcnJvciB9O1xyXG4gICAgICBjYXNlIFJFTU9WRV9QT1NUX1JFUVVFU1Q6IHtcclxuICAgICAgICBkcmFmdC5yZW1vdmVQb3N0TG9hZGluZyA9IHRydWU7XHJcbiAgICAgICAgZHJhZnQucmVtb3ZlUG9zdERvbmUgPSBmYWxzZTtcclxuICAgICAgICBkcmFmdC5yZW1vdmVQb3N0RXJyb3IgPSBudWxsO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICAgIC8vIHJldHVybiB7IC4uLnN0YXRlLCByZW1vdmVQb3N0TG9hZGluZzogdHJ1ZSwgcmVtb3ZlUG9zdERvbmU6IGZhbHNlLCByZW1vdmVQb3N0RXJyb3I6IG51bGwgfTtcclxuICAgICAgfVxyXG4gICAgICBjYXNlIFJFTU9WRV9QT1NUX1NVQ0NFU1M6IHtcclxuICAgICAgICAvLyBhY3Rpb24uZGF0YS5jb250ZW50LCBwb3N0SWQsIHVzZXJJZDtcclxuICAgICAgICBkcmFmdC5yZW1vdmVQb3N0TG9hZGluZyA9IGZhbHNlO1xyXG4gICAgICAgIGRyYWZ0LnJlbW92ZVBvc3REb25lID0gdHJ1ZTtcclxuICAgICAgICBkcmFmdC5tYWluUG9zdHMgPSBkcmFmdC5tYWluUG9zdHMuZmlsdGVyKCh2KSA9PiB2LmlkICE9PSBhY3Rpb24uZGF0YSk7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgLy8gcmV0dXJuIHtcclxuICAgICAgICAvLyAgIC4uLnN0YXRlLFxyXG4gICAgICAgIC8vICAgbWFpblBvc3RzOiBzdGF0ZS5tYWluUG9zdHMuZmlsdGVyKCh2KSA9PiB2LmlkICE9PSBhY3Rpb24uZGF0YSksXHJcbiAgICAgICAgLy8gICByZW1vdmVQb3N0TG9hZGluZzogZmFsc2UsXHJcbiAgICAgICAgLy8gICByZW1vdmVQb3N0RG9uZTogdHJ1ZSxcclxuICAgICAgICAvLyB9O1xyXG4gICAgICB9XHJcbiAgICAgIGNhc2UgUkVNT1ZFX1BPU1RfRkFJTFVSRTpcclxuICAgICAgICBkcmFmdC5yZW1vdmVQb3N0TG9hZGluZyA9IGZhbHNlO1xyXG4gICAgICAgIGRyYWZ0LnJlbW92ZVBvc3RFcnJvciA9IHRydWU7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIC8vIHJldHVybiB7IC4uLnN0YXRlLCByZW1vdmVQb3N0TG9hZGluZzogZmFsc2UsIHJlbW92ZVBvc3RFcnJvcjogYWN0aW9uLmVycm9yIH07XHJcblxyXG4gICAgICBjYXNlIEFERF9DT01NRU5UX1JFUVVFU1Q6IHtcclxuICAgICAgICBkcmFmdC5hZGRDb21tZW50TG9hZGluZyA9IHRydWU7XHJcbiAgICAgICAgZHJhZnQuYWRkQ29tbWVudERvbmUgPSBmYWxzZTtcclxuICAgICAgICBkcmFmdC5hZGRDb21tZW50RXJyb3IgPSBudWxsO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICAgIC8vIHJldHVybiB7IC4uLnN0YXRlLCBhZGRDb21tZW50TG9hZGluZzogdHJ1ZSwgYWRkQ29tbWVudERvbmU6IGZhbHNlLCBhZGRDb21tZW50RXJyb3I6IG51bGwgfTtcclxuICAgICAgfVxyXG5cclxuICAgICAgLy/slYTrnpgg67aA67aEIOydtO2VtCDslYjrkJjrqbQg6rKM7Iuc6riALOuMk+q4gCBzYWdhIOyekeyEsSDtlZjquLAg64uk7IucIOyytO2BrC4gMTE6MzDrtoQg7KCV64+EXHJcbiAgICAgIGNhc2UgQUREX0NPTU1FTlRfU1VDQ0VTUzoge1xyXG4gICAgICAgIGNvbnN0IHBvc3QgPSBkcmFmdC5tYWluUG9zdHMuZmluZCgodikgPT4gdi5pZCA9PT0gYWN0aW9uLmRhdGEuUG9zdElkKTtcclxuICAgICAgICBwb3N0LkNvbW1lbnRzLnVuc2hpZnQoYWN0aW9uLmRhdGEpO1xyXG4gICAgICAgIGRyYWZ0LmFkZENvbW1lbnRMb2FkaW5nID0gZmFsc2U7XHJcbiAgICAgICAgZHJhZnQuYWRkQ29tbWVudERvbmUgPSB0cnVlO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICAgIC8v7JyE64qUIGltbWVy66W8IO2Gte2VtOyEnCDrtojrs4DshLEg7Iug6rK97JWI7JOw6rOgIOy9lOuUqe2VqC4g7JWE656Y64qUIOq4sOyhtCDrsKnsi53snLzroZwg67aI67OA7ISxIOyLoOqyveyTsOqzoCDsvZTrlKntlZwg64K07JqpXHJcbiAgICAgICAgLy8gY29uc3QgcG9zdEluZGV4ID0gc3RhdGUubWFpblBvc3RzLmZpbmRJbmRleCgodikgPT4gdi5pZCA9PT0gYWN0aW9uLmRhdGEucG9zdElkKTtcclxuICAgICAgICAvLyBjb25zdCBwb3N0ID0geyAuLi5zdGF0ZS5tYWluUG9zdHNbcG9zdEluZGV4XSB9O1xyXG4gICAgICAgIC8vIHBvc3QuQ29tbWVudHMgPSBbZHVtbXlDb21tZW50KGFjdGlvbi5kYXRhLmNvbnRlbnQpLCAuLi5wb3N0LkNvbW1lbnRzXTtcclxuICAgICAgICAvLyBjb25zdCBtYWluUG9zdHMgPSBbLi4uc3RhdGUubWFpblBvc3RzXTtcclxuICAgICAgICAvLyBtYWluUG9zdHNbcG9zdEluZGV4XSA9IHBvc3Q7XHJcbiAgICAgICAgLy8gcmV0dXJuIHtcclxuICAgICAgICAvLyAgIC4uLnN0YXRlLFxyXG4gICAgICAgIC8vICAgbWFpblBvc3RzLFxyXG4gICAgICAgIC8vICAgYWRkQ29tbWVudExvYWRpbmc6IGZhbHNlLFxyXG4gICAgICAgIC8vICAgYWRkQ29tbWVudERvbmU6IHRydWUsXHJcbiAgICAgICAgLy8gfTtcclxuICAgICAgfVxyXG4gICAgICBjYXNlIEFERF9DT01NRU5UX0ZBSUxVUkU6XHJcbiAgICAgICAgZHJhZnQuYWRkQ29vbWVudExvYWRpbmcgPSBmYWxzZTtcclxuICAgICAgICBkcmFmdC5hZGRDb21tZW50RXJyb3IgPSBhY3Rpb24uZXJyb3I7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIC8vIHJldHVybiB7IC4uLnN0YXRlLCBhZGRDb21tZW50TG9hZGluZzogZmFsc2UsIGFkZENvbW1lbnRFcnJvcjogYWN0aW9uLmVycm9yIH07XHJcblxyXG4gICAgICBkZWZhdWx0OiB7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgLy8gcmV0dXJuIHsgLi4uc3RhdGUgfTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH0pO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgcmVkdWNlcjtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==