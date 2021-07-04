webpackHotUpdate_N_E("pages/_app",{

/***/ "./reducers/post.js":
/*!**************************!*\
  !*** ./reducers/post.js ***!
  \**************************/
/*! exports provided: initialState, RETWEET_REQUEST, RETWEET_SUCCESS, RETWEET_FAILURE, UPLOAD_IMAGES_REQUEST, UPLOAD_IMAGES_SUCCESS, UPLOAD_IMAGES_FAILURE, REMOVE_IMAGE, LIKE_POST_REQUEST, LIKE_POST_SUCCESS, LIKE_POST_FAILURE, UNLIKE_POST_REQUEST, UNLIKE_POST_SUCCESS, UNLIKE_POST_FAILURE, LOAD_POSTS_REQUEST, LOAD_POSTS_SUCCESS, LOAD_POSTS_FAILURE, ADD_POST_REQUEST, ADD_POST_SUCCESS, ADD_POST_FAILURE, REMOVE_POST_REQUEST, REMOVE_POST_SUCCESS, REMOVE_POST_FAILURE, ADD_COMMENT_REQUEST, ADD_COMMENT_SUCCESS, ADD_COMMENT_FAILURE, addPost, addComment, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initialState", function() { return initialState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RETWEET_REQUEST", function() { return RETWEET_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RETWEET_SUCCESS", function() { return RETWEET_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RETWEET_FAILURE", function() { return RETWEET_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UPLOAD_IMAGES_REQUEST", function() { return UPLOAD_IMAGES_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UPLOAD_IMAGES_SUCCESS", function() { return UPLOAD_IMAGES_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UPLOAD_IMAGES_FAILURE", function() { return UPLOAD_IMAGES_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "REMOVE_IMAGE", function() { return REMOVE_IMAGE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LIKE_POST_REQUEST", function() { return LIKE_POST_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LIKE_POST_SUCCESS", function() { return LIKE_POST_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LIKE_POST_FAILURE", function() { return LIKE_POST_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UNLIKE_POST_REQUEST", function() { return UNLIKE_POST_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UNLIKE_POST_SUCCESS", function() { return UNLIKE_POST_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UNLIKE_POST_FAILURE", function() { return UNLIKE_POST_FAILURE; });
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
  likePostLoading: false,
  likePostDone: false,
  likePostError: null,
  unlikePostLoading: false,
  unlikePostDone: false,
  unlikePostError: null,
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
  addCommentError: null,
  uploadImagesLoading: false,
  uploadImagesDone: false,
  uploadImagesError: null,
  retweetLoading: false,
  retweetDone: false,
  retweetError: null
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

var RETWEET_REQUEST = "RETWEET_REQUEST";
var RETWEET_SUCCESS = "RETWEET_SUCCESS";
var RETWEET_FAILURE = "RETWEET_FAILURE";
var UPLOAD_IMAGES_REQUEST = "UPLOAD_IMAGES_REQUEST";
var UPLOAD_IMAGES_SUCCESS = "UPLOAD_IMAGES_SUCCESS";
var UPLOAD_IMAGES_FAILURE = "UPLOAD_IMAGES_FAILURE";
var REMOVE_IMAGE = "REMOVE_IMAGE"; //Remove Image경우 하나만 만들면 됨(동기이기 때문에). 만약 서버에서도 빼주고 싶다면 보통 다른 것들과 같이 request,success,failure 다 해줘야 함. image의 경우 서버에서 가지고 있는게 더 이득이기때문에 프론트에서만 지워주는 경우가 많암. (지금은 프론트에서만 지우기때문에 request,success,failure등이 필요 없음)

var LIKE_POST_REQUEST = "LIKE_POST_REQUEST";
var LIKE_POST_SUCCESS = "LIKE_POST_SUCCESS";
var LIKE_POST_FAILURE = "LIKE_POST_FAILURE";
var UNLIKE_POST_REQUEST = "UNLIKE_POST_REQUEST";
var UNLIKE_POST_SUCCESS = "UNLIKE_POST_SUCCESS";
var UNLIKE_POST_FAILURE = "UNLIKE_POST_FAILURE";
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
      case RETWEET_REQUEST:
        {
          draft.retweetLoading = true;
          draft.retweetDone = false;
          draft.retweetError = null;
          break;
        }

      case RETWEET_SUCCESS:
        {
          draft.retweetLoading = false;
          draft.retweetDone = true;
          draft.mainPosts.unshift(action.data);
          break;
        }

      case RETWEET_FAILURE:
        {
          draft.retweetLoading = false;
          draft.retweetError = action.error;
          break;
        }
      // 아래가 request, success, failure가 아닌 remove_image 하나인 이유는 동기 함수이기 때문. (back-end에서 요청을 기다려서 받는게 아닌 그냥 front-end측에서만 지우고, backend에서는 사진을 남겨 둠.)

      case REMOVE_IMAGE:
        {
          draft.imagePaths = draft.imagePaths.filter(function (v, i) {
            return i !== action.data;
          });
          break;
        }

      case UPLOAD_IMAGES_REQUEST:
        {
          draft.uploadImagesLoading = true;
          draft.uploadImagesDone = false;
          draft.uploadImagesError = null;
          break;
        }

      case UPLOAD_IMAGES_SUCCESS:
        {
          draft.uploadImagesLoading = false;
          draft.uploadImagesDone = true;
          draft.imagePaths = action.data;
          break;
        }

      case UPLOAD_IMAGES_FAILURE:
        {
          draft.uploadImagesLoading = false;
          draft.uploadImagesError = action.error;
          break;
        }

      case LIKE_POST_REQUEST:
        {
          draft.likePostLoading = true;
          draft.likePostDone = false;
          draft.likePostError = null;
          break;
        }

      case LIKE_POST_SUCCESS:
        {
          var post = draft.mainPosts.find(function (v) {
            return v.id === action.data.PostId;
          });
          post.Likers.push({
            id: action.data.UserId
          });
          draft.likePostLoading = false;
          draft.likePostDone = true;
          break;
        }

      case LIKE_POST_FAILURE:
        {
          draft.likePostLoading = false;
          draft.likePostError = action.error;
          break;
        }

      case UNLIKE_POST_REQUEST:
        {
          draft.unlikePostLoading = true;
          draft.unlikePostDone = false;
          draft.unlikePostError = null;
          break;
        }

      case UNLIKE_POST_SUCCESS:
        {
          var _post = draft.mainPosts.find(function (v) {
            return v.id === action.data.PostId;
          });

          _post.Likers = _post.Likers.filter(function (v) {
            return v.id !== action.data.UserId;
          });
          draft.unlikePostLoading = false;
          draft.unlikePostDone = true;
          break;
        }

      case UNLIKE_POST_FAILURE:
        draft.unlikePostLoading = false;
        draft.unlikePostError = action.error;
        break;

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
          draft.hasMorePosts = draft.mainPosts.length === 10;
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
          draft.imagePaths = [];
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
            return v.id !== action.data.PostId;
          });
          break;
          /*
          // return {
          //   ...state,
          //   mainPosts: state.mainPosts.filter((v) => v.id !== action.data),
          //   removePostLoading: false,
          //   removePostDone: true,
          // };
          */
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
          var _post2 = draft.mainPosts.find(function (v) {
            return v.id === action.data.PostId;
          });

          _post2.Comments.unshift(action.data);

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcmVkdWNlcnMvcG9zdC5qcyJdLCJuYW1lcyI6WyJpbml0aWFsU3RhdGUiLCJtYWluUG9zdHMiLCJpbWFnZVBhdGhzIiwiaGFzTW9yZVBvc3RzIiwibGlrZVBvc3RMb2FkaW5nIiwibGlrZVBvc3REb25lIiwibGlrZVBvc3RFcnJvciIsInVubGlrZVBvc3RMb2FkaW5nIiwidW5saWtlUG9zdERvbmUiLCJ1bmxpa2VQb3N0RXJyb3IiLCJsb2FkUG9zdHNMb2FkaW5nIiwibG9hZFBvc3RzRG9uZSIsImxvYWRQb3N0c0Vycm9yIiwiYWRkUG9zdExvYWRpbmciLCJhZGRQb3N0RG9uZSIsImFkZFBvc3RFcnJvciIsInJlbW92ZVBvc3RMb2FkaW5nIiwicmVtb3ZlUG9zdERvbmUiLCJyZW1vdmVQb3N0RXJyb3IiLCJhZGRDb21tZW50TG9hZGluZyIsImFkZENvbW1lbnREb25lIiwiYWRkQ29tbWVudEVycm9yIiwidXBsb2FkSW1hZ2VzTG9hZGluZyIsInVwbG9hZEltYWdlc0RvbmUiLCJ1cGxvYWRJbWFnZXNFcnJvciIsInJldHdlZXRMb2FkaW5nIiwicmV0d2VldERvbmUiLCJyZXR3ZWV0RXJyb3IiLCJSRVRXRUVUX1JFUVVFU1QiLCJSRVRXRUVUX1NVQ0NFU1MiLCJSRVRXRUVUX0ZBSUxVUkUiLCJVUExPQURfSU1BR0VTX1JFUVVFU1QiLCJVUExPQURfSU1BR0VTX1NVQ0NFU1MiLCJVUExPQURfSU1BR0VTX0ZBSUxVUkUiLCJSRU1PVkVfSU1BR0UiLCJMSUtFX1BPU1RfUkVRVUVTVCIsIkxJS0VfUE9TVF9TVUNDRVNTIiwiTElLRV9QT1NUX0ZBSUxVUkUiLCJVTkxJS0VfUE9TVF9SRVFVRVNUIiwiVU5MSUtFX1BPU1RfU1VDQ0VTUyIsIlVOTElLRV9QT1NUX0ZBSUxVUkUiLCJMT0FEX1BPU1RTX1JFUVVFU1QiLCJMT0FEX1BPU1RTX1NVQ0NFU1MiLCJMT0FEX1BPU1RTX0ZBSUxVUkUiLCJBRERfUE9TVF9SRVFVRVNUIiwiQUREX1BPU1RfU1VDQ0VTUyIsIkFERF9QT1NUX0ZBSUxVUkUiLCJSRU1PVkVfUE9TVF9SRVFVRVNUIiwiUkVNT1ZFX1BPU1RfU1VDQ0VTUyIsIlJFTU9WRV9QT1NUX0ZBSUxVUkUiLCJBRERfQ09NTUVOVF9SRVFVRVNUIiwiQUREX0NPTU1FTlRfU1VDQ0VTUyIsIkFERF9DT01NRU5UX0ZBSUxVUkUiLCJhZGRQb3N0IiwiZGF0YSIsInR5cGUiLCJhZGRDb21tZW50IiwicmVkdWNlciIsInN0YXRlIiwiYWN0aW9uIiwicHJvZHVjZSIsImRyYWZ0IiwidW5zaGlmdCIsImVycm9yIiwiZmlsdGVyIiwidiIsImkiLCJwb3N0IiwiZmluZCIsImlkIiwiUG9zdElkIiwiTGlrZXJzIiwicHVzaCIsIlVzZXJJZCIsImNvbmNhdCIsImxlbmd0aCIsIkNvbW1lbnRzIiwiYWRkQ29vbWVudExvYWRpbmciXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtDQUVBOztBQUVPLElBQU1BLFlBQVksR0FBRztBQUMxQjtBQUNGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNFQyxXQUFTLEVBQUUsRUF4RGU7QUF5RDFCQyxZQUFVLEVB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QUYsS0FBU1YsTUFBTSxDQUFDTCxJQUFQLENBQVlnQixNQUE1QjtBQUFBLFdBQXJCLENBQWI7O0FBQ0FILGdCQUFJLENBQUNTLFFBQUwsQ0FBY2QsT0FBZCxDQUFzQkgsTUFBTSxDQUFDTCxJQUE3Qjs7QUFDQU8sZUFBSyxDQUFDMUMsaUJBQU4sR0FBMEIsS0FBMUI7QUFDQTBDLGVBQUssQ0FBQ3pDLGNBQU4sR0FBdUIsSUFBdkI7QUFDQSxnQkFMd0IsQ0FNeEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Q7O0FBQ0QsV0FBS2dDLG1CQUFMO0FBQ0VTLGFBQUssQ0FBQ2dCLGlCQUFOLEdBQTBCLEtBQTFCO0FBQ0FoQixhQUFLLENBQUN4QyxlQUFOLEdBQXdCc0MsTUFBTSxDQUFDSSxLQUEvQjtBQUNBO0FBQ0Y7O0FBRUE7QUFBUztBQUNQLGdCQURPLENBRVA7QUFDRDtBQS9MSDtBQWlNRCxHQWxNYSxDQUFkO0FBbU1ELENBdE1EOztBQXdNZU4sc0VBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvX2FwcC5iNGJkY2M4N2YzMDdlNzkxZmQ0NC5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gaW1wb3J0IHNob3J0SWQgZnJvbSBcInNob3J0aWRcIjtcclxuaW1wb3J0IHByb2R1Y2UgZnJvbSBcImltbWVyXCI7XHJcbi8vIGltcG9ydCBmYWtlciBmcm9tIFwiZmFrZXJcIjtcclxuXHJcbmV4cG9ydCBjb25zdCBpbml0aWFsU3RhdGUgPSB7XHJcbiAgLypcclxuICAvLyBtYWluUG9zdHM6IFtcclxuICAvLyAgIC8vIHtcclxuICAvLyAgIC8vICAgaWQ6IDEsXHJcbiAgLy8gICAvLyAgIFVzZXI6IHtcclxuICAvLyAgIC8vICAgICBpZDogMSxcclxuICAvLyAgIC8vICAgICBuaWNrbmFtZTogXCJLZXZpblwiLFxyXG4gIC8vICAgLy8gICB9LFxyXG4gIC8vICAgLy8gICBjb250ZW50OiBcIkZpcnN0IFBvc3QgI0hhc2hUYWcsICNFeHByZXNzXCIsXHJcbiAgLy8gICAvLyAgIC8vIEltYWdlczogW1xyXG4gIC8vICAgLy8gICAvLyAgIHtcclxuICAvLyAgIC8vICAgLy8gICAgIHNyYzogXCJodHRwczovL3Jlcy5jbG91ZGluYXJ5LmNvbS9oaWdoZXJlZHVjYXRpb24vaW1hZ2UvdXBsb2FkL2Nfc2NhbGUsd183NTAvZl9hdXRvLGZsX2xvc3N5LHFfYXV0bzplY28vdjE1MzI5ODg4NjQvVGhlQmVzdENvbGxlZ2VzLm9yZy9pbWFnZXMvc3R1ZHktbm90ZWJvb2tzLmpwZ1wiLFxyXG4gIC8vICAgLy8gICAvLyAgIH0sXHJcbiAgLy8gICAvLyAgIC8vICAge1xyXG4gIC8vICAgLy8gICAvLyAgICAgc3JjOiBcImh0dHBzOi8vd3d3LmZhc3R3ZWIuY29tL3VwbG9hZHMvYXJ0aWNsZV9waG90by9waG90by8yMTYxL2Nyb3AzODB3X2lzdG9ja18wMDAwMDIxOTM4NDJ4c21hbGwtYm9va3MuanBnXCIsXHJcbiAgLy8gICAvLyAgIC8vICAgfSxcclxuICAvLyAgIC8vICAgLy8gICB7XHJcbiAgLy8gICAvLyAgIC8vICAgICBzcmM6IFwiaHR0cHM6Ly93d3cuaW5zaWRlaGlnaGVyZWQuY29tL3NpdGVzL2RlZmF1bHQvc2VydmVyX2ZpbGVzL21lZGlhL2lTdG9jay01MjAzNzQzNzguanBnXCIsXHJcbiAgLy8gICAvLyAgIC8vICAgfSxcclxuICAvLyAgIC8vICAgLy8gXSxcclxuICAvLyAgIC8vICAgSW1hZ2VzOiBbXHJcbiAgLy8gICAvLyAgICAge1xyXG4gIC8vICAgLy8gICAgICAgaWQ6IHNob3J0SWQuZ2VuZXJhdGUoKSxcclxuICAvLyAgIC8vICAgICAgIHNyYzogXCJodHRwczovL2Jvb2t0aHVtYi1waGluZi5wc3RhdGljLm5ldC9jb3Zlci8xMzcvOTk1LzEzNzk5NTg1LmpwZz91ZGF0ZT0yMDE4MDcyNlwiLFxyXG4gIC8vICAgLy8gICAgIH0sXHJcbiAgLy8gICAvLyAgICAge1xyXG4gIC8vICAgLy8gICAgICAgaWQ6IHNob3J0SWQuZ2VuZXJhdGUoKSxcclxuICAvLyAgIC8vICAgICAgIHNyYzogXCJodHRwczovL2dpbWcuZ2lsYnV0LmNvLmtyL2Jvb2svQk4wMDE5NTgvcm5fdmlld19CTjAwMTk1OC5qcGdcIixcclxuICAvLyAgIC8vICAgICB9LFxyXG4gIC8vICAgLy8gICAgIHtcclxuICAvLyAgIC8vICAgICAgIGlkOiBzaG9ydElkLmdlbmVyYXRlKCksXHJcbiAgLy8gICAvLyAgICAgICBzcmM6IFwiaHR0cHM6Ly9naW1nLmdpbGJ1dC5jby5rci9ib29rL0JOMDAxOTk4L3JuX3ZpZXdfQk4wMDE5OTguanBnXCIsXHJcbiAgLy8gICAvLyAgICAgfSxcclxuICAvLyAgIC8vICAgXSxcclxuICAvLyAgIC8vICAgQ29tbWVudHM6IFtcclxuICAvLyAgIC8vICAgICB7XHJcbiAgLy8gICAvLyAgICAgICBpZDogc2hvcnRJZC5nZW5lcmF0ZSgpLFxyXG4gIC8vICAgLy8gICAgICAgVXNlcjoge1xyXG4gIC8vICAgLy8gICAgICAgICBpZDogc2hvcnRJZC5nZW5lcmF0ZSgpLFxyXG4gIC8vICAgLy8gICAgICAgICBuaWNrbmFtZTogXCJuZXJvXCIsXHJcbiAgLy8gICAvLyAgICAgICB9LFxyXG4gIC8vICAgLy8gICAgICAgY29udGVudDogXCJHcmVhdCBwb3N0IVwiLFxyXG4gIC8vICAgLy8gICAgIH0sXHJcbiAgLy8gICAvLyAgICAge1xyXG4gIC8vICAgLy8gICAgICAgaWQ6IHNob3J0SWQuZ2VuZXJhdGUoKSxcclxuICAvLyAgIC8vICAgICAgIFVzZXI6IHtcclxuICAvLyAgIC8vICAgICAgICAgaWQ6IHNob3J0SWQuZ2VuZXJhdGUoKSxcclxuICAvLyAgIC8vICAgICAgICAgbmlja25hbWU6IFwiamFlaGFuXCIsXHJcbiAgLy8gICAvLyAgICAgICB9LFxyXG4gIC8vICAgLy8gICAgICAgY29udGVudDogYGl0J3MgcmVhbGx5IGVkdWNhdGlvbmFsYCxcclxuICAvLyAgIC8vICAgICB9LFxyXG4gIC8vICAgLy8gICBdLFxyXG4gIC8vICAgLy8gfSxcclxuICAvLyBdLFxyXG4gICovXHJcbiAgbWFpblBvc3RzOiBbXSxcclxuICBpbWFnZVBhdGhzOiBbXSxcclxuICBoYXNNb3JlUG9zdHM6IHRydWUsXHJcbiAgbGlrZVBvc3RMb2FkaW5nOiBmYWxzZSxcclxuICBsaWtlUG9zdERvbmU6IGZhbHNlLFxyXG4gIGxpa2VQb3N0RXJyb3I6IG51bGwsXHJcbiAgdW5saWtlUG9zdExvYWRpbmc6IGZhbHNlLFxyXG4gIHVubGlrZVBvc3REb25lOiBmYWxzZSxcclxuICB1bmxpa2VQb3N0RXJyb3I6IG51bGwsXHJcbiAgbG9hZFBvc3RzTG9hZGluZzogZmFsc2UsXHJcbiAgbG9hZFBvc3RzRG9uZTogZmFsc2UsXHJcbiAgbG9hZFBvc3RzRXJyb3I6IG51bGwsXHJcbiAgYWRkUG9zdExvYWRpbmc6IGZhbHNlLFxyXG4gIGFkZFBvc3REb25lOiBmYWxzZSxcclxuICBhZGRQb3N0RXJyb3I6IG51bGwsXHJcbiAgcmVtb3ZlUG9zdExvYWRpbmc6IGZhbHNlLFxyXG4gIHJlbW92ZVBvc3REb25lOiBmYWxzZSxcclxuICByZW1vdmVQb3N0RXJyb3I6IG51bGwsXHJcbiAgYWRkQ29tbWVudExvYWRpbmc6IGZhbHNlLFxyXG4gIGFkZENvbW1lbnREb25lOiBmYWxzZSxcclxuICBhZGRDb21tZW50RXJyb3I6IG51bGwsXHJcblxyXG4gIHVwbG9hZEltYWdlc0xvYWRpbmc6IGZhbHNlLFxyXG4gIHVwbG9hZEltYWdlc0RvbmU6IGZhbHNlLFxyXG4gIHVwbG9hZEltYWdlc0Vycm9yOiBudWxsLFxyXG5cclxuICByZXR3ZWV0TG9hZGluZzogZmFsc2UsXHJcbiAgcmV0d2VldERvbmU6IGZhbHNlLFxyXG4gIHJldHdlZXRFcnJvcjogbnVsbCxcclxufTtcclxuXHJcbi8qXHJcbmV4cG9ydCBjb25zdCBnZW5lcmF0ZUR1bW15UG9zdCA9IChudW1iZXIpID0+XHJcbiAgQXJyYXkobnVtYmVyKVxyXG4gICAgLmZpbGwoKVxyXG4gICAgLm1hcCgoKSA9PiAoe1xyXG4gICAgICBpZDogc2hvcnRJZC5nZW5lcmF0ZSgpLFxyXG4gICAgICBVc2VyOiB7XHJcbiAgICAgICAgaWQ6IHNob3J0SWQuZ2VuZXJhdGUoKSxcclxuICAgICAgICBuaWNrbmFtZTogZmFrZXIubmFtZS5maW5kTmFtZSgpLFxyXG4gICAgICB9LFxyXG4gICAgICBjb250ZW50OiBmYWtlci5sb3JlbS5wYXJhZ3JhcGgoKSxcclxuICAgICAgSW1hZ2VzOiBbXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgc3JjOiBmYWtlci5pbWFnZS5pbWFnZSgpLFxyXG4gICAgICAgIH0sXHJcbiAgICAgIF0sXHJcbiAgICAgIENvbW1lbnRzOiBbXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgVXNlcjoge1xyXG4gICAgICAgICAgICBpZDogc2hvcnRJZC5nZW5lcmF0ZSgpLFxyXG4gICAgICAgICAgICBuaWNrbmFtZTogZmFrZXIubmFtZS5maW5kTmFtZSgpLFxyXG4gICAgICAgICAgfSxcclxuICAgICAgICAgIGNvbnRlbnQ6IGZha2VyLmxvcmVtLnNlbnRlbmNlKCksXHJcbiAgICAgICAgfSxcclxuICAgICAgXSxcclxuICAgIH0pKTtcclxuICAgICovXHJcbi8vIGluaXRpYWxTdGF0ZS5tYWluUG9zdHMgPSBpbml0aWFsU3RhdGUubWFpblBvc3RzLmNvbmNhdChnZW5lcmF0ZUR1bW15UG9zdCgxMCkpO1xyXG5cclxuZXhwb3J0IGNvbnN0IFJFVFdFRVRfUkVRVUVTVCA9IFwiUkVUV0VFVF9SRVFVRVNUXCI7XHJcbmV4cG9ydCBjb25zdCBSRVRXRUVUX1NVQ0NFU1MgPSBcIlJFVFdFRVRfU1VDQ0VTU1wiO1xyXG5leHBvcnQgY29uc3QgUkVUV0VFVF9GQUlMVVJFID0gXCJSRVRXRUVUX0ZBSUxVUkVcIjtcclxuXHJcbmV4cG9ydCBjb25zdCBVUExPQURfSU1BR0VTX1JFUVVFU1QgPSBcIlVQTE9BRF9JTUFHRVNfUkVRVUVTVFwiO1xyXG5leHBvcnQgY29uc3QgVVBMT0FEX0lNQUdFU19TVUNDRVNTID0gXCJVUExPQURfSU1BR0VTX1NVQ0NFU1NcIjtcclxuZXhwb3J0IGNvbnN0IFVQTE9BRF9JTUFHRVNfRkFJTFVSRSA9IFwiVVBMT0FEX0lNQUdFU19GQUlMVVJFXCI7XHJcblxyXG5leHBvcnQgY29uc3QgUkVNT1ZFX0lNQUdFID0gXCJSRU1PVkVfSU1BR0VcIjsgLy9SZW1vdmUgSW1hZ2Xqsr3smrAg7ZWY64KY66eMIOunjOuTpOuptCDrkKgo64+Z6riw7J206riwIOuVjOusuOyXkCkuIOunjOyVvSDshJzrsoTsl5DshJzrj4Qg67m87KO86rOgIOyLtuuLpOuptCDrs7TthrUg64uk66W4IOqyg+uTpOqzvCDqsJnsnbQgcmVxdWVzdCxzdWNjZXNzLGZhaWx1cmUg64ukIO2VtOykmOyVvCDtlaguIGltYWdl7J2YIOqyveyasCDshJzrsoTsl5DshJwg6rCA7KeA6rOgIOyeiOuKlOqyjCDrjZQg7J2065Od7J206riw65WM66y47JeQIO2UhOuhoO2KuOyXkOyEnOunjCDsp4Dsm4zso7zripQg6rK97Jqw6rCAIOunjuyVlC4gKOyngOq4iOydgCDtlITroaDtirjsl5DshJzrp4wg7KeA7Jqw6riw65WM66y47JeQIHJlcXVlc3Qsc3VjY2VzcyxmYWlsdXJl65Ox7J20IO2VhOyalCDsl4bsnYwpXHJcblxyXG5leHBvcnQgY29uc3QgTElLRV9QT1NUX1JFUVVFU1QgPSBcIkxJS0VfUE9TVF9SRVFVRVNUXCI7XHJcbmV4cG9ydCBjb25zdCBMSUtFX1BPU1RfU1VDQ0VTUyA9IFwiTElLRV9QT1NUX1NVQ0NFU1NcIjtcclxuZXhwb3J0IGNvbnN0IExJS0VfUE9TVF9GQUlMVVJFID0gXCJMSUtFX1BPU1RfRkFJTFVSRVwiO1xyXG5cclxuZXhwb3J0IGNvbnN0IFVOTElLRV9QT1NUX1JFUVVFU1QgPSBcIlVOTElLRV9QT1NUX1JFUVVFU1RcIjtcclxuZXhwb3J0IGNvbnN0IFVOTElLRV9QT1NUX1NVQ0NFU1MgPSBcIlVOTElLRV9QT1NUX1NVQ0NFU1NcIjtcclxuZXhwb3J0IGNvbnN0IFVOTElLRV9QT1NUX0ZBSUxVUkUgPSBcIlVOTElLRV9QT1NUX0ZBSUxVUkVcIjtcclxuXHJcbmV4cG9ydCBjb25zdCBMT0FEX1BPU1RTX1JFUVVFU1QgPSBcIkxPQURfUE9TVFNfUkVRVUVTVFwiO1xyXG5leHBvcnQgY29uc3QgTE9BRF9QT1NUU19TVUNDRVNTID0gXCJMT0FEX1BPU1RTX1NVQ0NFU1NcIjtcclxuZXhwb3J0IGNvbnN0IExPQURfUE9TVFNfRkFJTFVSRSA9IFwiTE9BRF9QT1NUU19GQUlMVVJFXCI7XHJcblxyXG5leHBvcnQgY29uc3QgQUREX1BPU1RfUkVRVUVTVCA9IFwiQUREX1BPU1RfUkVRVUVTVFwiO1xyXG5leHBvcnQgY29uc3QgQUREX1BPU1RfU1VDQ0VTUyA9IFwiQUREX1BPU1RfU1VDQ0VTU1wiO1xyXG5leHBvcnQgY29uc3QgQUREX1BPU1RfRkFJTFVSRSA9IFwiQUREX1BPU1RfRkFJTFVSRVwiO1xyXG5cclxuZXhwb3J0IGNvbnN0IFJFTU9WRV9QT1NUX1JFUVVFU1QgPSBcIlJFTU9WRV9QT1NUX1JFUVVFU1RcIjtcclxuZXhwb3J0IGNvbnN0IFJFTU9WRV9QT1NUX1NVQ0NFU1MgPSBcIlJFTU9WRV9QT1NUX1NVQ0NFU1NcIjtcclxuZXhwb3J0IGNvbnN0IFJFTU9WRV9QT1NUX0ZBSUxVUkUgPSBcIlJFTU9WRV9QT1NUX0ZBSUxVUkVcIjtcclxuXHJcbmV4cG9ydCBjb25zdCBBRERfQ09NTUVOVF9SRVFVRVNUID0gXCJBRERfQ09NTUVOVF9SRVFVRVNUXCI7XHJcbmV4cG9ydCBjb25zdCBBRERfQ09NTUVOVF9TVUNDRVNTID0gXCJBRERfQ09NTUVOVF9TVUNDRVNTXCI7XHJcbmV4cG9ydCBjb25zdCBBRERfQ09NTUVOVF9GQUlMVVJFID0gXCJBRERfQ09NTUVOVF9GQUlMVVJFXCI7XHJcblxyXG5leHBvcnQgY29uc3QgYWRkUG9zdCA9IChkYXRhKSA9PiAoe1xyXG4gIHR5cGU6IEFERF9QT1NUX1JFUVVFU1QsXHJcbiAgZGF0YSxcclxufSk7XHJcbmV4cG9ydCBjb25zdCBhZGRDb21tZW50ID0gKGRhdGEpID0+ICh7XHJcbiAgdHlwZTogQUREX0NPTU1FTlRfUkVRVUVTVCxcclxuICBkYXRhLFxyXG59KTtcclxuXHJcbi8qXHJcbmNvbnN0IGR1bW15UG9zdCA9IChkYXRhKSA9PiAoe1xyXG4gIGlkOiBkYXRhLmlkLFxyXG4gIGNvbnRlbnQ6IGRhdGEuY29udGVudCxcclxuICBVc2VyOiB7XHJcbiAgICBpZDogMSxcclxuICAgIG5pY2tuYW1lOiBcIktldmluXCIsXHJcbiAgfSxcclxuICBJbWFnZXM6IFtdLFxyXG4gIENvbW1lbnRzOiBbXSxcclxufSk7XHJcblxyXG5jb25zdCBkdW1teUNvbW1lbnQgPSAoZGF0YSkgPT4gKHtcclxuICBpZDogc2hvcnRJZC5nZW5lcmF0ZSgpLFxyXG4gIGNvbnRlbnQ6IGRhdGEsXHJcbiAgVXNlcjoge1xyXG4gICAgaWQ6IDEsXHJcbiAgICBuaWNrbmFtZTogXCJLZXZpblwiLFxyXG4gIH0sXHJcbn0pO1xyXG4qL1xyXG5cclxuLy9yZWR1Y2VyOiDsnbTsoIQg7IOB7YOc66W8IOyVoeyFmOydhCDthrXtlbQg64uk7J2MIOyDge2DnOuhnCDrp4zrk6TslrTrgrTripQg7ZWo7IiYICjrtojrs4DshLHsnYAg7KeA7YKk66m07IScKVxyXG5jb25zdCByZWR1Y2VyID0gKHN0YXRlID0gaW5pdGlhbFN0YXRlLCBhY3Rpb24pID0+IHtcclxuICAvLyBpbW1lcjog7J207KCEIOyDge2DnOulvCDslaHshZjsnYQg7Ya17ZW0IOuLpOydjCDsg4Htg5zroZwg66eM65Ok7Ja064K064qUIO2VqOyImCAo67aI67OA7ISxIOyViOyngOy8nOuPhCBpbW1lcuqwgCDslYzslYTshJwg7KeA7Lyc7KSMLilcclxuICAvLyDsl6zquLDrtoDthLDripQgZHJhZnTqsIAgc3RhdGXsspjrn7wg7IKs7Jqp65CY6rOgIOydtOqxtCDrp4kg67CU6r+U64+EIOuQqC4gKGltbWVy6rCAIOyVjOyVhOyEnCDsspjrpqztlbQg7KO866+A66GcKVxyXG4gIHJldHVybiBwcm9kdWNlKHN0YXRlLCAoZHJhZnQpID0+IHtcclxuICAgIHN3aXRjaCAoYWN0aW9uLnR5cGUpIHtcclxuICAgICAgY2FzZSBSRVRXRUVUX1JFUVVFU1Q6IHtcclxuICAgICAgICBkcmFmdC5yZXR3ZWV0TG9hZGluZyA9IHRydWU7XHJcbiAgICAgICAgZHJhZnQucmV0d2VldERvbmUgPSBmYWxzZTtcclxuICAgICAgICBkcmFmdC5yZXR3ZWV0RXJyb3IgPSBudWxsO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICB9XHJcbiAgICAgIGNhc2UgUkVUV0VFVF9TVUNDRVNTOiB7XHJcbiAgICAgICAgZHJhZnQucmV0d2VldExvYWRpbmcgPSBmYWxzZTtcclxuICAgICAgICBkcmFmdC5yZXR3ZWV0RG9uZSA9IHRydWU7XHJcbiAgICAgICAgZHJhZnQubWFpblBvc3RzLnVuc2hpZnQoYWN0aW9uLmRhdGEpO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICB9XHJcbiAgICAgIGNhc2UgUkVUV0VFVF9GQUlMVVJFOiB7XHJcbiAgICAgICAgZHJhZnQucmV0d2VldExvYWRpbmcgPSBmYWxzZTtcclxuICAgICAgICBkcmFmdC5yZXR3ZWV0RXJyb3IgPSBhY3Rpb24uZXJyb3I7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIC8vIOyVhOuemOqwgCByZXF1ZXN0LCBzdWNjZXNzLCBmYWlsdXJl6rCAIOyVhOuLjCByZW1vdmVfaW1hZ2Ug7ZWY64KY7J24IOydtOycoOuKlCDrj5nquLAg7ZWo7IiY7J206riwIOuVjOusuC4gKGJhY2stZW5k7JeQ7IScIOyalOyyreydhCDquLDri6TroKTshJwg67Cb64qU6rKMIOyVhOuLjCDqt7jrg6UgZnJvbnQtZW5k7Lih7JeQ7ISc66eMIOyngOyasOqzoCwgYmFja2VuZOyXkOyEnOuKlCDsgqzsp4TsnYQg64Ko6rKoIOuRoC4pXHJcbiAgICAgIGNhc2UgUkVNT1ZFX0lNQUdFOiB7XHJcbiAgICAgICAgZHJhZnQuaW1hZ2VQYXRocyA9IGRyYWZ0LmltYWdlUGF0aHMuZmlsdGVyKCh2LCBpKSA9PiBpICE9PSBhY3Rpb24uZGF0YSk7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGNhc2UgVVBMT0FEX0lNQUdFU19SRVFVRVNUOiB7XHJcbiAgICAgICAgZHJhZnQudXBsb2FkSW1hZ2VzTG9hZGluZyA9IHRydWU7XHJcbiAgICAgICAgZHJhZnQudXBsb2FkSW1hZ2VzRG9uZSA9IGZhbHNlO1xyXG4gICAgICAgIGRyYWZ0LnVwbG9hZEltYWdlc0Vycm9yID0gbnVsbDtcclxuICAgICAgICBicmVhaztcclxuICAgICAgfVxyXG4gICAgICBjYXNlIFVQTE9BRF9JTUFHRVNfU1VDQ0VTUzoge1xyXG4gICAgICAgIGRyYWZ0LnVwbG9hZEltYWdlc0xvYWRpbmcgPSBmYWxzZTtcclxuICAgICAgICBkcmFmdC51cGxvYWRJbWFnZXNEb25lID0gdHJ1ZTtcclxuICAgICAgICBkcmFmdC5pbWFnZVBhdGhzID0gYWN0aW9uLmRhdGE7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIH1cclxuICAgICAgY2FzZSBVUExPQURfSU1BR0VTX0ZBSUxVUkU6IHtcclxuICAgICAgICBkcmFmdC51cGxvYWRJbWFnZXNMb2FkaW5nID0gZmFsc2U7XHJcbiAgICAgICAgZHJhZnQudXBsb2FkSW1hZ2VzRXJyb3IgPSBhY3Rpb24uZXJyb3I7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGNhc2UgTElLRV9QT1NUX1JFUVVFU1Q6IHtcclxuICAgICAgICBkcmFmdC5saWtlUG9zdExvYWRpbmcgPSB0cnVlO1xyXG4gICAgICAgIGRyYWZ0Lmxpa2VQb3N0RG9uZSA9IGZhbHNlO1xyXG4gICAgICAgIGRyYWZ0Lmxpa2VQb3N0RXJyb3IgPSBudWxsO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICB9XHJcbiAgICAgIGNhc2UgTElLRV9QT1NUX1NVQ0NFU1M6IHtcclxuICAgICAgICBjb25zdCBwb3N0ID0gZHJhZnQubWFpblBvc3RzLmZpbmQoKHYpID0+IHYuaWQgPT09IGFjdGlvbi5kYXRhLlBvc3RJZCk7XHJcbiAgICAgICAgcG9zdC5MaWtlcnMucHVzaCh7IGlkOiBhY3Rpb24uZGF0YS5Vc2VySWQgfSk7XHJcbiAgICAgICAgZHJhZnQubGlrZVBvc3RMb2FkaW5nID0gZmFsc2U7XHJcbiAgICAgICAgZHJhZnQubGlrZVBvc3REb25lID0gdHJ1ZTtcclxuICAgICAgICBicmVhaztcclxuICAgICAgfVxyXG4gICAgICBjYXNlIExJS0VfUE9TVF9GQUlMVVJFOiB7XHJcbiAgICAgICAgZHJhZnQubGlrZVBvc3RMb2FkaW5nID0gZmFsc2U7XHJcbiAgICAgICAgZHJhZnQubGlrZVBvc3RFcnJvciA9IGFjdGlvbi5lcnJvcjtcclxuICAgICAgICBicmVhaztcclxuICAgICAgfVxyXG5cclxuICAgICAgY2FzZSBVTkxJS0VfUE9TVF9SRVFVRVNUOiB7XHJcbiAgICAgICAgZHJhZnQudW5saWtlUG9zdExvYWRpbmcgPSB0cnVlO1xyXG4gICAgICAgIGRyYWZ0LnVubGlrZVBvc3REb25lID0gZmFsc2U7XHJcbiAgICAgICAgZHJhZnQudW5saWtlUG9zdEVycm9yID0gbnVsbDtcclxuICAgICAgICBicmVhaztcclxuICAgICAgfVxyXG4gICAgICBjYXNlIFVOTElLRV9QT1NUX1NVQ0NFU1M6IHtcclxuICAgICAgICBjb25zdCBwb3N0ID0gZHJhZnQubWFpblBvc3RzLmZpbmQoKHYpID0+IHYuaWQgPT09IGFjdGlvbi5kYXRhLlBvc3RJZCk7XHJcbiAgICAgICAgcG9zdC5MaWtlcnMgPSBwb3N0Lkxpa2Vycy5maWx0ZXIoKHYpID0+IHYuaWQgIT09IGFjdGlvbi5kYXRhLlVzZXJJZCk7XHJcbiAgICAgICAgZHJhZnQudW5saWtlUG9zdExvYWRpbmcgPSBmYWxzZTtcclxuICAgICAgICBkcmFmdC51bmxpa2VQb3N0RG9uZSA9IHRydWU7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIH1cclxuICAgICAgY2FzZSBVTkxJS0VfUE9TVF9GQUlMVVJFOlxyXG4gICAgICAgIGRyYWZ0LnVubGlrZVBvc3RMb2FkaW5nID0gZmFsc2U7XHJcbiAgICAgICAgZHJhZnQudW5saWtlUG9zdEVycm9yID0gYWN0aW9uLmVycm9yO1xyXG4gICAgICAgIGJyZWFrO1xyXG5cclxuICAgICAgY2FzZSBMT0FEX1BPU1RTX1JFUVVFU1Q6IHtcclxuICAgICAgICBkcmFmdC5sb2FkUG9zdHNMb2FkaW5nID0gdHJ1ZTtcclxuICAgICAgICBkcmFmdC5sb2FkUG9zdHNEb25lID0gZmFsc2U7XHJcbiAgICAgICAgZHJhZnQubG9hZFBvc3RzRXJyb3IgPSBudWxsO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICB9XHJcbiAgICAgIGNhc2UgTE9BRF9QT1NUU19TVUNDRVNTOiB7XHJcbiAgICAgICAgZHJhZnQubG9hZFBvc3RzTG9hZGluZyA9IGZhbHNlO1xyXG4gICAgICAgIGRyYWZ0LmxvYWRQb3N0c0RvbmUgPSB0cnVlO1xyXG4gICAgICAgIGRyYWZ0Lm1haW5Qb3N0cyA9IGFjdGlvbi5kYXRhLmNvbmNhdChkcmFmdC5tYWluUG9zdHMpO1xyXG4gICAgICAgIGRyYWZ0Lmhhc01vcmVQb3N0cyA9IGRyYWZ0Lm1haW5Qb3N0cy5sZW5ndGggPT09IDEwO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICB9XHJcbiAgICAgIGNhc2UgTE9BRF9QT1NUU19GQUlMVVJFOlxyXG4gICAgICAgIGRyYWZ0LmxvYWRQb3N0c0xvYWRpbmcgPSBmYWxzZTtcclxuICAgICAgICBkcmFmdC5sb2FkUG9zdHNFcnJvciA9IGFjdGlvbi5lcnJvcjtcclxuICAgICAgICBicmVhaztcclxuXHJcbiAgICAgIGNhc2UgQUREX1BPU1RfUkVRVUVTVDoge1xyXG4gICAgICAgIGRyYWZ0LmFkZFBvc3RMb2FkaW5nID0gdHJ1ZTtcclxuICAgICAgICBkcmFmdC5hZGRQb3N0RG9uZSA9IGZhbHNlO1xyXG4gICAgICAgIGRyYWZ0LmFkZFBvc3RFcnJvciA9IG51bGw7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgLy8gcmV0dXJuIHsgLi4uc3RhdGUsIGFkZFBvc3RMb2FkaW5nOiB0cnVlLCBhZGRQb3N0RG9uZTogZmFsc2UsIGFkZFBvc3RFcnJvcjogbnVsbCB9O1xyXG4gICAgICB9XHJcbiAgICAgIGNhc2UgQUREX1BPU1RfU1VDQ0VTUzoge1xyXG4gICAgICAgIGRyYWZ0LmFkZFBvc3RMb2FkaW5nID0gZmFsc2U7XHJcbiAgICAgICAgZHJhZnQuYWRkUG9zdERvbmUgPSB0cnVlO1xyXG4gICAgICAgIC8vIGRyYWZ0Lm1haW5Qb3N0cyA9IFtkdW1teVBvc3QoYWN0aW9uLmRhdGEpLCAuLi5zdGF0ZS5tYWluUG9zdHNdOyAvLyDsnbTroIfqsowg7ZWY6rGw64KYIO2YueydgCDslYTrnpjsmYAg6rCZ7J20IHVuc2hpZnTsgqzsmqkg7ZWY66m0IOuwsOyXtOqwkuydhCDrlLDroZwg7KCV7J2Y7JWI7ZWY6rOgICguLi7snbQg7IKs6528IOynkCkg67CU66GcIOyCrOyaqeqwgOuKpSDtlahcclxuICAgICAgICAvLyBkcmFmdC5tYWluUG9zdHMudW5zaGlmdChkdW1teVBvc3QoYWN0aW9uLmRhdGEpKTtcclxuICAgICAgICBkcmFmdC5tYWluUG9zdHMudW5zaGlmdChhY3Rpb24uZGF0YSk7XHJcbiAgICAgICAgZHJhZnQuaW1hZ2VQYXRocyA9IFtdO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICAgIC8vIGFjdGlvbi5kYXRhLmNvbnRlbnQsIHBvc3RJZCwgdXNlcklkO1xyXG4gICAgICAgIC8vIHJldHVybiB7XHJcbiAgICAgICAgLy8gICAuLi5zdGF0ZSxcclxuICAgICAgICAvLyAgIG1haW5Qb3N0czogW2R1bW15UG9zdChhY3Rpb24uZGF0YSksIC4uLnN0YXRlLm1haW5Qb3N0c10sXHJcbiAgICAgICAgLy8gICBhZGRQb3N0TG9hZGluZzogZmFsc2UsXHJcbiAgICAgICAgLy8gICBhZGRQb3N0RG9uZTogdHJ1ZSxcclxuICAgICAgICAvLyB9O1xyXG4gICAgICB9XHJcbiAgICAgIGNhc2UgQUREX1BPU1RfRkFJTFVSRTpcclxuICAgICAgICBkcmFmdC5hZGRQb3N0TG9hZGluZyA9IGZhbHNlO1xyXG4gICAgICAgIGRyYWZ0LmFkZFBvc3RFcnJvciA9IGFjdGlvbi5lcnJvcjtcclxuICAgICAgICBicmVhaztcclxuICAgICAgLy8gcmV0dXJuIHsgLi4uc3RhdGUsIGFkZFBvc3RMb2FkaW5nOiBmYWxzZSwgYWRkUG9zdEVycm9yOiBhY3Rpb24uZXJyb3IgfTtcclxuICAgICAgY2FzZSBSRU1PVkVfUE9TVF9SRVFVRVNUOiB7XHJcbiAgICAgICAgZHJhZnQucmVtb3ZlUG9zdExvYWRpbmcgPSB0cnVlO1xyXG4gICAgICAgIGRyYWZ0LnJlbW92ZVBvc3REb25lID0gZmFsc2U7XHJcbiAgICAgICAgZHJhZnQucmVtb3ZlUG9zdEVycm9yID0gbnVsbDtcclxuICAgICAgICBicmVhaztcclxuICAgICAgICAvLyByZXR1cm4geyAuLi5zdGF0ZSwgcmVtb3ZlUG9zdExvYWRpbmc6IHRydWUsIHJlbW92ZVBvc3REb25lOiBmYWxzZSwgcmVtb3ZlUG9zdEVycm9yOiBudWxsIH07XHJcbiAgICAgIH1cclxuICAgICAgY2FzZSBSRU1PVkVfUE9TVF9TVUNDRVNTOiB7XHJcbiAgICAgICAgLy8gYWN0aW9uLmRhdGEuY29udGVudCwgcG9zdElkLCB1c2VySWQ7XHJcbiAgICAgICAgZHJhZnQucmVtb3ZlUG9zdExvYWRpbmcgPSBmYWxzZTtcclxuICAgICAgICBkcmFmdC5yZW1vdmVQb3N0RG9uZSA9IHRydWU7XHJcbiAgICAgICAgZHJhZnQubWFpblBvc3RzID0gZHJhZnQubWFpblBvc3RzLmZpbHRlcigodikgPT4gdi5pZCAhPT0gYWN0aW9uLmRhdGEuUG9zdElkKTtcclxuICAgICAgICBicmVhaztcclxuICAgICAgICAvKlxyXG4gICAgICAgIC8vIHJldHVybiB7XHJcbiAgICAgICAgLy8gICAuLi5zdGF0ZSxcclxuICAgICAgICAvLyAgIG1haW5Qb3N0czogc3RhdGUubWFpblBvc3RzLmZpbHRlcigodikgPT4gdi5pZCAhPT0gYWN0aW9uLmRhdGEpLFxyXG4gICAgICAgIC8vICAgcmVtb3ZlUG9zdExvYWRpbmc6IGZhbHNlLFxyXG4gICAgICAgIC8vICAgcmVtb3ZlUG9zdERvbmU6IHRydWUsXHJcbiAgICAgICAgLy8gfTtcclxuICAgICAgICAqL1xyXG4gICAgICB9XHJcbiAgICAgIGNhc2UgUkVNT1ZFX1BPU1RfRkFJTFVSRTpcclxuICAgICAgICBkcmFmdC5yZW1vdmVQb3N0TG9hZGluZyA9IGZhbHNlO1xyXG4gICAgICAgIGRyYWZ0LnJlbW92ZVBvc3RFcnJvciA9IHRydWU7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIC8vIHJldHVybiB7IC4uLnN0YXRlLCByZW1vdmVQb3N0TG9hZGluZzogZmFsc2UsIHJlbW92ZVBvc3RFcnJvcjogYWN0aW9uLmVycm9yIH07XHJcblxyXG4gICAgICBjYXNlIEFERF9DT01NRU5UX1JFUVVFU1Q6IHtcclxuICAgICAgICBkcmFmdC5hZGRDb21tZW50TG9hZGluZyA9IHRydWU7XHJcbiAgICAgICAgZHJhZnQuYWRkQ29tbWVudERvbmUgPSBmYWxzZTtcclxuICAgICAgICBkcmFmdC5hZGRDb21tZW50RXJyb3IgPSBudWxsO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICAgIC8vIHJldHVybiB7IC4uLnN0YXRlLCBhZGRDb21tZW50TG9hZGluZzogdHJ1ZSwgYWRkQ29tbWVudERvbmU6IGZhbHNlLCBhZGRDb21tZW50RXJyb3I6IG51bGwgfTtcclxuICAgICAgfVxyXG5cclxuICAgICAgLy/slYTrnpgg67aA67aEIOydtO2VtCDslYjrkJjrqbQg6rKM7Iuc6riALOuMk+q4gCBzYWdhIOyekeyEsSDtlZjquLAg64uk7IucIOyytO2BrC4gMTE6MzDrtoQg7KCV64+EXHJcbiAgICAgIGNhc2UgQUREX0NPTU1FTlRfU1VDQ0VTUzoge1xyXG4gICAgICAgIGNvbnN0IHBvc3QgPSBkcmFmdC5tYWluUG9zdHMuZmluZCgodikgPT4gdi5pZCA9PT0gYWN0aW9uLmRhdGEuUG9zdElkKTtcclxuICAgICAgICBwb3N0LkNvbW1lbnRzLnVuc2hpZnQoYWN0aW9uLmRhdGEpO1xyXG4gICAgICAgIGRyYWZ0LmFkZENvbW1lbnRMb2FkaW5nID0gZmFsc2U7XHJcbiAgICAgICAgZHJhZnQuYWRkQ29tbWVudERvbmUgPSB0cnVlO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICAgIC8v7JyE64qUIGltbWVy66W8IO2Gte2VtOyEnCDrtojrs4DshLEg7Iug6rK97JWI7JOw6rOgIOy9lOuUqe2VqC4g7JWE656Y64qUIOq4sOyhtCDrsKnsi53snLzroZwg67aI67OA7ISxIOyLoOqyveyTsOqzoCDsvZTrlKntlZwg64K07JqpXHJcbiAgICAgICAgLy8gY29uc3QgcG9zdEluZGV4ID0gc3RhdGUubWFpblBvc3RzLmZpbmRJbmRleCgodikgPT4gdi5pZCA9PT0gYWN0aW9uLmRhdGEucG9zdElkKTtcclxuICAgICAgICAvLyBjb25zdCBwb3N0ID0geyAuLi5zdGF0ZS5tYWluUG9zdHNbcG9zdEluZGV4XSB9O1xyXG4gICAgICAgIC8vIHBvc3QuQ29tbWVudHMgPSBbZHVtbXlDb21tZW50KGFjdGlvbi5kYXRhLmNvbnRlbnQpLCAuLi5wb3N0LkNvbW1lbnRzXTtcclxuICAgICAgICAvLyBjb25zdCBtYWluUG9zdHMgPSBbLi4uc3RhdGUubWFpblBvc3RzXTtcclxuICAgICAgICAvLyBtYWluUG9zdHNbcG9zdEluZGV4XSA9IHBvc3Q7XHJcbiAgICAgICAgLy8gcmV0dXJuIHtcclxuICAgICAgICAvLyAgIC4uLnN0YXRlLFxyXG4gICAgICAgIC8vICAgbWFpblBvc3RzLFxyXG4gICAgICAgIC8vICAgYWRkQ29tbWVudExvYWRpbmc6IGZhbHNlLFxyXG4gICAgICAgIC8vICAgYWRkQ29tbWVudERvbmU6IHRydWUsXHJcbiAgICAgICAgLy8gfTtcclxuICAgICAgfVxyXG4gICAgICBjYXNlIEFERF9DT01NRU5UX0ZBSUxVUkU6XHJcbiAgICAgICAgZHJhZnQuYWRkQ29vbWVudExvYWRpbmcgPSBmYWxzZTtcclxuICAgICAgICBkcmFmdC5hZGRDb21tZW50RXJyb3IgPSBhY3Rpb24uZXJyb3I7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIC8vIHJldHVybiB7IC4uLnN0YXRlLCBhZGRDb21tZW50TG9hZGluZzogZmFsc2UsIGFkZENvbW1lbnRFcnJvcjogYWN0aW9uLmVycm9yIH07XHJcblxyXG4gICAgICBkZWZhdWx0OiB7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgLy8gcmV0dXJuIHsgLi4uc3RhdGUgfTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH0pO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgcmVkdWNlcjtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==