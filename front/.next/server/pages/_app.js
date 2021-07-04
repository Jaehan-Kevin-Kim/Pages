module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/antd/dist/antd.css":
/*!*****************************************!*\
  !*** ./node_modules/antd/dist/antd.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./pages/_app.js":
/*!***********************!*\
  !*** ./pages/_app.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var antd_dist_antd_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! antd/dist/antd.css */ "./node_modules/antd/dist/antd.css");
/* harmony import */ var antd_dist_antd_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(antd_dist_antd_css__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/head */ "next/head");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var next_redux_saga__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next-redux-saga */ "next-redux-saga");
/* harmony import */ var next_redux_saga__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_redux_saga__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _store_configureStore__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../store/configureStore */ "./store/configureStore.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__);
var _jsxFileName = "F:\\Self Study_Coding\\Web\\Portfolio\\React_NodeBird\\preapre_second\\front\\pages\\_app.js";









const NodeBird = ({
  Component
}) => {
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["Fragment"], {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])(next_head__WEBPACK_IMPORTED_MODULE_3___default.a, {
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])("meta", {
        charSet: "utf-8"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 13,
        columnNumber: 9
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])("title", {
        children: "Node Bird"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 14,
        columnNumber: 9
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 7
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])(Component, {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 7
    }, undefined)]
  }, void 0, true);
};

NodeBird.propTypes = {
  Component: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.elementType.isRequired
};
/* harmony default export */ __webpack_exports__["default"] = (_store_configureStore__WEBPACK_IMPORTED_MODULE_5__["default"].withRedux(next_redux_saga__WEBPACK_IMPORTED_MODULE_4___default()(NodeBird)));

/***/ }),

/***/ "./reducers/index.js":
/*!***************************!*\
  !*** ./reducers/index.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var next_redux_wrapper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next-redux-wrapper */ "next-redux-wrapper");
/* harmony import */ var next_redux_wrapper__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_redux_wrapper__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! redux */ "redux");
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(redux__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _user__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./user */ "./reducers/user.js");
/* harmony import */ var _post__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./post */ "./reducers/post.js");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }





/*
const initialState = {
  user: {
    //아래 세부 내용들은 redux쪼개기 할때 각각의 파일로 들어갔음.
    // isLoggedIn: false,
    // user: null,
    // signUpData: {},
    // loginData: {},
  },
  post: {
    // mainPosts: [],
  },
};
*/
//역시나 아래 내용들은 분리된 redux 중 맞는 값에 넣음
// export const loginAction = (data) => {
//   return {
//     type: "LOG_IN",
//     data,
//   };
// };
// export const logoutAction = () => {
//   return {
//     type: "LOG_OUT",
//   };
// };
// reducer (이전상태, 액션) => 다음상태 (이전상태와, 액션을 통해서 다음 상태를 만들어 내는 함수)

const rootReducer = Object(redux__WEBPACK_IMPORTED_MODULE_1__["combineReducers"])({
  index: (state = {}, action) => {
    switch (action.type) {
      case next_redux_wrapper__WEBPACK_IMPORTED_MODULE_0__["HYDRATE"]:
        console.log("HYDRATE", action);
        return _objectSpread(_objectSpread({}, state), action.payload);
      //역시나 아래 내용들은 분리된 redux 중 맞는 값에 넣음
      // case "LOG_IN":
      //   return { ...state, user: { ...state.user, isLoggedIn: true, user: action.data } };
      // case "LOG_OUT":
      //   return { ...state, user: { ...state.user, isLoggedIn: false, user: null } };

      default:
        return state;
    }
  },
  user: _user__WEBPACK_IMPORTED_MODULE_2__["default"],
  post: _post__WEBPACK_IMPORTED_MODULE_3__["default"]
});
/* harmony default export */ __webpack_exports__["default"] = (rootReducer);
/*
const initialState = {
  name: "kevin",
  age: 34,
  password: "password",
};

// action creator
const changeNickname = {
  type: "CHANGE_NICKNAME",
  data: "jaehan",
};

const changeNickname = (data) => {
  return {
    type: "CHANGE_NICKNAME",
    data: data,
  };
};

changeNickname("boogicho"); //아래와 같음
// {
//    type: 'CHANGE_NICKNAME',
//    data: 'neue zeal',
// }
//

//최종적으로 아래와 같이 사용가능
// 1. 위 처럼 changeNickname을 선언하고
// 2. 아래와 같이 dispatch를 시켜 줌.
store.dispatch(changeNickname("holly"));


// reducer (이전상태, 액션) => 다음상태 (이전상태와, 액션을 통해서 다음 상태를 만들어 내는 함수)
const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case "CHANGE_NICKNAME":
      return { ...state, name: action.data };
  }
};

*/

/***/ }),

/***/ "./reducers/post.js":
/*!**************************!*\
  !*** ./reducers/post.js ***!
  \**************************/
/*! exports provided: initialState, RETWEET_REQUEST, RETWEET_SUCCESS, RETWEET_FAILURE, UPLOAD_IMAGES_REQUEST, UPLOAD_IMAGES_SUCCESS, UPLOAD_IMAGES_FAILURE, REMOVE_IMAGE, LIKE_POST_REQUEST, LIKE_POST_SUCCESS, LIKE_POST_FAILURE, UNLIKE_POST_REQUEST, UNLIKE_POST_SUCCESS, UNLIKE_POST_FAILURE, LOAD_POSTS_REQUEST, LOAD_POSTS_SUCCESS, LOAD_POSTS_FAILURE, ADD_POST_REQUEST, ADD_POST_SUCCESS, ADD_POST_FAILURE, REMOVE_POST_REQUEST, REMOVE_POST_SUCCESS, REMOVE_POST_FAILURE, ADD_COMMENT_REQUEST, ADD_COMMENT_SUCCESS, ADD_COMMENT_FAILURE, addPost, addComment, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initialState", function() { return initialState; });
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
/* harmony import */ var immer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! immer */ "immer");
/* harmony import */ var immer__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(immer__WEBPACK_IMPORTED_MODULE_0__);
// import shortId from "shortid";
 // import faker from "faker";

const initialState = {
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

const RETWEET_REQUEST = "RETWEET_REQUEST";
const RETWEET_SUCCESS = "RETWEET_SUCCESS";
const RETWEET_FAILURE = "RETWEET_FAILURE";
const UPLOAD_IMAGES_REQUEST = "UPLOAD_IMAGES_REQUEST";
const UPLOAD_IMAGES_SUCCESS = "UPLOAD_IMAGES_SUCCESS";
const UPLOAD_IMAGES_FAILURE = "UPLOAD_IMAGES_FAILURE";
const REMOVE_IMAGE = "REMOVE_IMAGE"; //Remove Image경우 하나만 만들면 됨(동기이기 때문에). 만약 서버에서도 빼주고 싶다면 보통 다른 것들과 같이 request,success,failure 다 해줘야 함. image의 경우 서버에서 가지고 있는게 더 이득이기때문에 프론트에서만 지워주는 경우가 많암. (지금은 프론트에서만 지우기때문에 request,success,failure등이 필요 없음)

const LIKE_POST_REQUEST = "LIKE_POST_REQUEST";
const LIKE_POST_SUCCESS = "LIKE_POST_SUCCESS";
const LIKE_POST_FAILURE = "LIKE_POST_FAILURE";
const UNLIKE_POST_REQUEST = "UNLIKE_POST_REQUEST";
const UNLIKE_POST_SUCCESS = "UNLIKE_POST_SUCCESS";
const UNLIKE_POST_FAILURE = "UNLIKE_POST_FAILURE";
const LOAD_POSTS_REQUEST = "LOAD_POSTS_REQUEST";
const LOAD_POSTS_SUCCESS = "LOAD_POSTS_SUCCESS";
const LOAD_POSTS_FAILURE = "LOAD_POSTS_FAILURE";
const ADD_POST_REQUEST = "ADD_POST_REQUEST";
const ADD_POST_SUCCESS = "ADD_POST_SUCCESS";
const ADD_POST_FAILURE = "ADD_POST_FAILURE";
const REMOVE_POST_REQUEST = "REMOVE_POST_REQUEST";
const REMOVE_POST_SUCCESS = "REMOVE_POST_SUCCESS";
const REMOVE_POST_FAILURE = "REMOVE_POST_FAILURE";
const ADD_COMMENT_REQUEST = "ADD_COMMENT_REQUEST";
const ADD_COMMENT_SUCCESS = "ADD_COMMENT_SUCCESS";
const ADD_COMMENT_FAILURE = "ADD_COMMENT_FAILURE";
const addPost = data => ({
  type: ADD_POST_REQUEST,
  data
});
const addComment = data => ({
  type: ADD_COMMENT_REQUEST,
  data
});
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

const reducer = (state = initialState, action) => {
  // immer: 이전 상태를 액션을 통해 다음 상태로 만들어내는 함수 (불변성 안지켜도 immer가 알아서 지켜줌.)
  // 여기부터는 draft가 state처럼 사용되고 이건 막 바꿔도 됨. (immer가 알아서 처리해 주므로)
  return immer__WEBPACK_IMPORTED_MODULE_0___default()(state, draft => {
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
          draft.imagePaths = draft.imagePaths.filter((v, i) => i !== action.data);
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
          const post = draft.mainPosts.find(v => v.id === action.data.PostId);
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
          const post = draft.mainPosts.find(v => v.id === action.data.PostId);
          post.Likers = post.Likers.filter(v => v.id !== action.data.UserId);
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
          draft.mainPosts = draft.mainPosts.concat(action.data);
          draft.hasMorePosts = action.data.length === 10;
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
          draft.mainPosts = draft.mainPosts.filter(v => v.id !== action.data.PostId);
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
          const post = draft.mainPosts.find(v => v.id === action.data.PostId);
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

/***/ }),

/***/ "./reducers/user.js":
/*!**************************!*\
  !*** ./reducers/user.js ***!
  \**************************/
/*! exports provided: initialState, LOAD_FOLLOWINGS_REQUEST, LOAD_FOLLOWINGS_SUCCESS, LOAD_FOLLOWINGS_FAILURE, LOAD_FOLLOWERS_REQUEST, LOAD_FOLLOWERS_SUCCESS, LOAD_FOLLOWERS_FAILURE, LOAD_MY_INFO_REQUEST, LOAD_MY_INFO_SUCCESS, LOAD_MY_INFO_FAILURE, LOG_IN_REQUEST, LOG_IN_SUCCESS, LOG_IN_FAILURE, LOG_OUT_REQUEST, LOG_OUT_SUCCESS, LOG_OUT_FAILURE, SIGN_UP_REQUEST, SIGN_UP_SUCCESS, SIGN_UP_FAILURE, CHANGE_NICKNAME_REQUEST, CHANGE_NICKNAME_SUCCESS, CHANGE_NICKNAME_FAILURE, FOLLOW_REQUEST, FOLLOW_SUCCESS, FOLLOW_FAILURE, UNFOLLOW_REQUEST, UNFOLLOW_SUCCESS, UNFOLLOW_FAILURE, REMOVE_FOLLOWER_REQUEST, REMOVE_FOLLOWER_SUCCESS, REMOVE_FOLLOWER_FAILURE, ADD_POST_TO_ME, REMOVE_POST_OF_ME, loginRequestAction, logoutRequestAction, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initialState", function() { return initialState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOAD_FOLLOWINGS_REQUEST", function() { return LOAD_FOLLOWINGS_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOAD_FOLLOWINGS_SUCCESS", function() { return LOAD_FOLLOWINGS_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOAD_FOLLOWINGS_FAILURE", function() { return LOAD_FOLLOWINGS_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOAD_FOLLOWERS_REQUEST", function() { return LOAD_FOLLOWERS_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOAD_FOLLOWERS_SUCCESS", function() { return LOAD_FOLLOWERS_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOAD_FOLLOWERS_FAILURE", function() { return LOAD_FOLLOWERS_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOAD_MY_INFO_REQUEST", function() { return LOAD_MY_INFO_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOAD_MY_INFO_SUCCESS", function() { return LOAD_MY_INFO_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOAD_MY_INFO_FAILURE", function() { return LOAD_MY_INFO_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOG_IN_REQUEST", function() { return LOG_IN_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOG_IN_SUCCESS", function() { return LOG_IN_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOG_IN_FAILURE", function() { return LOG_IN_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOG_OUT_REQUEST", function() { return LOG_OUT_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOG_OUT_SUCCESS", function() { return LOG_OUT_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOG_OUT_FAILURE", function() { return LOG_OUT_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SIGN_UP_REQUEST", function() { return SIGN_UP_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SIGN_UP_SUCCESS", function() { return SIGN_UP_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SIGN_UP_FAILURE", function() { return SIGN_UP_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CHANGE_NICKNAME_REQUEST", function() { return CHANGE_NICKNAME_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CHANGE_NICKNAME_SUCCESS", function() { return CHANGE_NICKNAME_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CHANGE_NICKNAME_FAILURE", function() { return CHANGE_NICKNAME_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FOLLOW_REQUEST", function() { return FOLLOW_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FOLLOW_SUCCESS", function() { return FOLLOW_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FOLLOW_FAILURE", function() { return FOLLOW_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UNFOLLOW_REQUEST", function() { return UNFOLLOW_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UNFOLLOW_SUCCESS", function() { return UNFOLLOW_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UNFOLLOW_FAILURE", function() { return UNFOLLOW_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "REMOVE_FOLLOWER_REQUEST", function() { return REMOVE_FOLLOWER_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "REMOVE_FOLLOWER_SUCCESS", function() { return REMOVE_FOLLOWER_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "REMOVE_FOLLOWER_FAILURE", function() { return REMOVE_FOLLOWER_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ADD_POST_TO_ME", function() { return ADD_POST_TO_ME; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "REMOVE_POST_OF_ME", function() { return REMOVE_POST_OF_ME; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "loginRequestAction", function() { return loginRequestAction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "logoutRequestAction", function() { return logoutRequestAction; });
/* harmony import */ var immer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! immer */ "immer");
/* harmony import */ var immer__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(immer__WEBPACK_IMPORTED_MODULE_0__);
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


const initialState = {
  loadMyInfoLoading: false,
  // 유저 정보 가져오기 시도중
  loadMyInfoDone: false,
  loadMyInfoError: null,
  unfollowLoading: false,
  // 언팔로우 시도중
  unfollowDone: false,
  unfollowError: null,
  removeFollowerLoading: false,
  // 언팔로우 시도중
  removeFollowerDone: false,
  removeFollowerError: null,
  followLoading: false,
  // 팔로우 시도중
  followDone: false,
  followError: null,
  loadFollowersLoading: false,
  // 팔로워 숫자 가져오기 시도중
  loadFollowersDone: false,
  loadFollowersError: null,
  loadFollowingsLoading: false,
  // 팔로잉 숫자 가져오기 시도중
  loadFollowingsDone: false,
  loadFollowingsError: null,
  logInLoading: false,
  // 로그인 시도중
  logInDone: false,
  logInError: null,
  logOutLoading: false,
  // 로그아웃 시도중
  logOutDone: false,
  logOutError: null,
  signUpLoading: false,
  // 회원가입 시도중
  signUpDone: false,
  signUpError: null,
  changeNicknameLoading: false,
  // 닉네임 변경 시도중
  changeNicknameDone: false,
  changeNicknameError: null,
  me: null,
  signUpData: {},
  loginData: {}
};
const LOAD_FOLLOWINGS_REQUEST = "LOAD_FOLLOWINGS_REQUEST";
const LOAD_FOLLOWINGS_SUCCESS = "LOAD_FOLLOWINGS_SUCCESS";
const LOAD_FOLLOWINGS_FAILURE = "LOAD_FOLLOWINGS_FAILURE";
const LOAD_FOLLOWERS_REQUEST = "LOAD_FOLLOWERS_REQUEST";
const LOAD_FOLLOWERS_SUCCESS = "LOAD_FOLLOWERS_SUCCESS";
const LOAD_FOLLOWERS_FAILURE = "LOAD_FOLLOWERS_FAILURE";
const LOAD_MY_INFO_REQUEST = "LOAD_MY_INFO_REQUEST";
const LOAD_MY_INFO_SUCCESS = "LOAD_MY_INFO_SUCCESS";
const LOAD_MY_INFO_FAILURE = "LOAD_MY_INFO_FAILURE";
const LOG_IN_REQUEST = "LOG_IN_REQUEST";
const LOG_IN_SUCCESS = "LOG_IN_SUCCESS";
const LOG_IN_FAILURE = "LOG_IN_FAILURE";
const LOG_OUT_REQUEST = "LOG_OUT_REQUEST";
const LOG_OUT_SUCCESS = "LOG_OUT_SUCCESS";
const LOG_OUT_FAILURE = "LOG_OUT_FAILURE";
const SIGN_UP_REQUEST = "SIGN_UP_REQUEST";
const SIGN_UP_SUCCESS = "SIGN_UP_SUCCESS";
const SIGN_UP_FAILURE = "SIGN_UP_FAILURE";
const CHANGE_NICKNAME_REQUEST = "CHANGE_NICKNAME_REQUEST";
const CHANGE_NICKNAME_SUCCESS = "CHANGE_NICKNAME_SUCCESS";
const CHANGE_NICKNAME_FAILURE = "CHANGE_NICKNAME_FAILURE";
const FOLLOW_REQUEST = "FOLLOW_REQUEST";
const FOLLOW_SUCCESS = "FOLLOW_SUCCESS";
const FOLLOW_FAILURE = "FOLLOW_FAILURE";
const UNFOLLOW_REQUEST = "UNFOLLOW_REQUEST";
const UNFOLLOW_SUCCESS = "UNFOLLOW_SUCCESS";
const UNFOLLOW_FAILURE = "UNFOLLOW_FAILURE";
const REMOVE_FOLLOWER_REQUEST = "REMOVE_FOLLOWER_REQUEST";
const REMOVE_FOLLOWER_SUCCESS = "REMOVE_FOLLOWER_SUCCESS";
const REMOVE_FOLLOWER_FAILURE = "REMOVE_FOLLOWER_FAILURE";
const ADD_POST_TO_ME = "ADD_POST_TO_ME";
const REMOVE_POST_OF_ME = "REMOVE_POST_OF_ME";
/*
const dummyUser = (data) => ({
  ...data,
  nickname: "Kevin Kim",
  id: 1,
  Posts: [{ id: 1 }],
  Followings: [{ nickname: "cho" }, { nickname: "kim" }, { nickname: "lee" }],
  Followers: [{ nickname: "cho" }, { nickname: "kim" }, { nickname: "lee" }],
});
*/

const loginRequestAction = data => {
  return {
    type: LOG_IN_REQUEST,
    data
  };
};
const logoutRequestAction = () => {
  return {
    type: LOG_OUT_REQUEST
  };
};

const reducer = (state = initialState, action) => {
  return immer__WEBPACK_IMPORTED_MODULE_0___default()(state, draft => {
    switch (action.type) {
      case LOAD_FOLLOWINGS_REQUEST:
        {
          draft.loadFollowingsLoading = true;
          draft.loadFollowingsError = null;
          draft.loadFollowingsDone = false;
          break;
        }

      case LOAD_FOLLOWINGS_SUCCESS:
        draft.loadFollowingsLoading = false;
        draft.me.Followings = action.data;
        draft.loadFollowingsDone = true; // draft.me.Followings.push({ id: action.data });

        break;

      case LOAD_FOLLOWINGS_FAILURE:
        draft.loadFollowingsLoading = false;
        draft.loadFollowingsError = action.error;
        break;

      case LOAD_FOLLOWERS_REQUEST:
        {
          draft.loadFollowersLoading = true;
          draft.loadFollowersError = null;
          draft.loadFollowersDone = false;
          break;
        }

      case LOAD_FOLLOWERS_SUCCESS:
        draft.loadFollowersLoading = false;
        draft.me.Followers = action.data;
        draft.loadFollowersDone = true; // draft.me.FOLLOWERS.push({ id: action.data });

        break;

      case LOAD_FOLLOWERS_FAILURE:
        draft.loadFollowersLoading = false;
        draft.loadFollowersError = action.error;
        break;

      case LOAD_MY_INFO_REQUEST:
        {
          draft.loadMyInfoLoading = true;
          draft.loadMyInfoError = null;
          draft.loadMyInfoDone = false;
          break;
        }

      case LOAD_MY_INFO_SUCCESS:
        draft.loadMyInfoLoading = false;
        draft.me = action.data;
        draft.loadMyInfoDone = true; // draft.me.Followings.push({ id: action.data });

        break;

      case LOAD_MY_INFO_FAILURE:
        draft.loadMyInfoLoading = false;
        draft.loadMyInfoError = action.error;
        break;

      case FOLLOW_REQUEST:
        {
          draft.followLoading = true;
          draft.followError = null;
          draft.followDone = false;
          break;
        }

      case FOLLOW_SUCCESS:
        draft.followLoading = false;
        draft.followDone = true; // draft.me = dummyUser(action.data);

        draft.me.Followings.push({
          id: action.data.UserId
        });
        break;

      case FOLLOW_FAILURE:
        draft.followLoading = false;
        draft.followError = action.error;
        break;

      case UNFOLLOW_REQUEST:
        {
          draft.unfollowLoading = true;
          draft.unfollowError = null;
          draft.unfollowDone = false;
          break;
        }

      case UNFOLLOW_SUCCESS:
        draft.unfollowLoading = false;
        draft.unfollowDone = true; // draft.me = dummyUser(action.data);

        draft.me.Followings = draft.me.Followings.filter(v => v.id !== action.data.UserId);
        break;

      case UNFOLLOW_FAILURE:
        draft.unfollowLoading = false;
        draft.unfollowError = action.error;
        break;

      case REMOVE_FOLLOWER_REQUEST:
        {
          draft.removeFollowerLoading = true;
          draft.removeFollowerError = null;
          draft.removeFollowerDone = false;
          break;
        }

      case REMOVE_FOLLOWER_SUCCESS:
        draft.removeFollowerLoading = false;
        draft.removeFollowerDone = true; // draft.me = dummyUser(action.data);

        draft.me.Followers = draft.me.Followers.filter(v => v.id !== action.data.UserId);
        break;

      case REMOVE_FOLLOWER_FAILURE:
        draft.removeFollowerLoading = false;
        draft.removeFollowerError = action.error;
        break;

      case LOG_IN_REQUEST:
        {
          draft.logInLoading = true;
          draft.logInError = null;
          draft.logInDone = false;
          break;
        }
      // console.log("reducer login");
      // return { ...state, logInLoading: true, logInError: null, logInDone: false };

      case LOG_IN_SUCCESS:
        draft.logInLoading = false;
        draft.logInDone = true; // draft.me = dummyUser(action.data);

        draft.me = action.data;
        break;
      // return {
      //   ...state,
      //   logInLoading: false,
      //   logInDone: true,
      //   me: dummyUser(action.data),
      // };

      case LOG_IN_FAILURE:
        draft.logInLoading = false;
        draft.logInError = action.error;
        break;
      // return { ...state, logInLoading: false, logInError: false, me: action.data };

      case LOG_OUT_REQUEST:
        draft.logOutLoading = true;
        draft.logOutDone = false;
        draft.logOutError = null;
        console.log("reducer logout");
        break;
      // return { ...state, logOutLoading: true, logOutDone: false, logOutError: null };

      case LOG_OUT_SUCCESS:
        draft.logOutLoading = false;
        draft.logOutDone = true;
        draft.me = null;
        break;
      // return { ...state, logOutLoading: false, logOutDone: true, me: null };

      case LOG_OUT_FAILURE:
        draft.logOutLoading = false;
        draft.logOutError = action.error;
        break;
      // return { ...state, logOutLoading: false, logOutError: action.error };

      case SIGN_UP_REQUEST:
        draft.signUpLoading = true;
        draft.signUpDone = false;
        draft.signUpError = null;
        console.log("reducer signUp");
        break;
      // return { ...state, signUpLoading: true, signUpDone: false, signUpError: null };

      case SIGN_UP_SUCCESS:
        draft.signUpLoading = false;
        draft.signUpDone = true;
        draft.me = null;
        break;
      // return { ...state, signUpLoading: false, signUpDone: true, me: null };

      case SIGN_UP_FAILURE:
        draft.signUpLoading = false;
        draft.signUpError = action.error;
        break;
        return _objectSpread(_objectSpread({}, state), {}, {
          signUpLoading: false,
          signUpError: action.error
        });

      case CHANGE_NICKNAME_REQUEST:
        draft.changeNicknameLoading = true;
        draft.changeNicknameDone = false;
        draft.changeNicknameError = null;
        break;

      /*
        return {
          ...state,
          changeNicknameLoading: true,
          changeNicknameDone: false,
          changeNicknameError: null,
        };
        */

      case CHANGE_NICKNAME_SUCCESS:
        draft.me.nickname = action.data.nickname;
        draft.changeNicknameLoading = false;
        draft.changeNicknameDone = true;
        break;
      // return { ...state, changeNicknameLoading: false, changeNicknameDone: true };

      case CHANGE_NICKNAME_FAILURE:
        draft.changeNicknameLoading = false;
        draft.changeNicknameError = action.error;
        break;
      //return { ...state, changeNicknameLoading: false, changeNicknameError: action.error };

      case ADD_POST_TO_ME:
        draft.me.Posts.unshift({
          id: action.data
        });
        break;
      // return {
      //   ...state,
      //   me: {
      //     ...state.me,
      //     Posts: [{ id: action.data }, ...state.me.Posts],
      //   },
      // };

      case REMOVE_POST_OF_ME:
        draft.me.Posts = draft.me.Posts.filter(v => v.id !== action.data);
        break;
      // return {
      //   ...state,
      //   me: {
      //     ...state.me,
      //     Posts: state.me.Posts.filter((v) => v.id !== action.data),
      //   },
      // };

      default:
        break;
      // return state;
    }
  });
};

/* harmony default export */ __webpack_exports__["default"] = (reducer);

/***/ }),

/***/ "./sagas/index.js":
/*!************************!*\
  !*** ./sagas/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return rootSaga; });
/* harmony import */ var redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux-saga/effects */ "redux-saga/effects");
/* harmony import */ var redux_saga_effects__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! axios */ "axios");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _post__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./post */ "./sagas/post.js");
/* harmony import */ var _user__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./user */ "./sagas/user.js");




axios__WEBPACK_IMPORTED_MODULE_1___default.a.defaults.baseURL = "http://localhost:3065";
axios__WEBPACK_IMPORTED_MODULE_1___default.a.defaults.withCredentials = true;
function* rootSaga() {
  //ALL을 하면 배열안의 모든 것들을 한번에 다 실행 함.
  //fork는 함수를 실행한다는 뜻 .
  //fork대신 call을 쓰는 경우도 있음. 하지만 두개의 차이점 정확히 알기.
  //ㄴ FORK는 비동기 함수 호출 / call은 동기 함수 호출
  // yield는 await과 비슷함.
  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["all"])([Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["fork"])(_post__WEBPACK_IMPORTED_MODULE_2__["default"]), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["fork"])(_user__WEBPACK_IMPORTED_MODULE_3__["default"])]);
} // function logInAPI(data) {
//   return axios.post("/api/login", data);
// }
// // const l = logIn({type: 'LOG_IN_REQUEST', data: {id: 'jhkevin21@gmail.com'}})
// // l.next();
// // l.next();
// function* logIn(action) {
//   //성공 결과는 result.data에, 실패경과는 err.response.data에 담겨있음
//   //put은 dispatch라고 생각하기
//   try {
//     // const result = yield call(logInAPI, action.data);
//     yield delay(1000);
//     yield put({
//       type: "LOG_IN_SUCCESS",
//       data: result.data,
//     });
//   } catch (err) {
//     yield put({
//       type: "LOG_IN_FAILURE",
//       data: err.response.data,
//     });
//   }
// }
// function logOutAPI() {
//   return axios.post("/api/logout");
// }
// function* logOut() {
//   try {
//     // const result = yield call(logOutAPI);
//     yield delay(1000);
//     yield put({
//       type: "LOG_OUT_SUCCESS",
//       data: result.data,
//     });
//   } catch (err) {
//     yield put({
//       type: "LOG_OUT_FAILURE",
//       data: err.response.data,
//     });
//   }
// }
// function addPostAPI(data) {
//   return axios.post("/api/post", data);
// }
// function* addPost(action) {
//   try {
//     // const result = yield call(addPostAPI, action.data);
//     yield delay(1000);
//     yield put({
//       type: "ADD_POST_SUCCESS",
//     });
//   } catch (err) {
//     yield put({
//       type: "LOG_OUT_FAILURE",
//       data: err.response.data,
//     });
//   }
// }
//take는 뒤에 action이 실행 될때까지 기다리겠다는 뜻 (take('LOG_IN', login)) => 'LOG_IN'(action)이 실행 될때 까지 기다리고, 실행 되면 뒤에 logIn function을 실행 함.
// event listener 같은 역할을 하지만 치명적인 단점은 1회용임. (한번 실행되고 나면 해당 event listner가 사라짐. 따라서 while로 감싸주거나 takeEvery로 받아 줘야 함.) => takeLatest로 쓸 수도 있는데 이건, 실수로 두번누르거나 했을때 마지막꺼만 인식해서 처리해 줌.
// function* watchLogin() {
//   yield takeLatest("LOG_IN_REQUEST", logIn);
// }
// function* watchLogOut() {
//   yield takeLatest("LOG_OUT_REQUEST", logOut);
// }
// function* watchAddPost() {
//   yield takeLatest("ADD_POST_REQUEST", addPost);
// }
// export default function* rootSaga() {
//   //ALL을 하면 배열안의 모든 것들을 한번에 다 실행 함.
//   //fork는 함수를 실행한다는 뜻 .
//   //fork대신 call을 쓰는 경우도 있음. 하지만 두개의 차이점 정확히 알기.
//   //ㄴ FORK는 비동기 함수 호출 / call은 동기 함수 호출
//   // yield는 await과 비슷함.
//   yield all([fork(watchLogin), fork(watchLogOut), fork(watchAddPost)]);
// }

/***/ }),

/***/ "./sagas/post.js":
/*!***********************!*\
  !*** ./sagas/post.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return postSaga; });
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ "axios");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! redux-saga/effects */ "redux-saga/effects");
/* harmony import */ var redux_saga_effects__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _reducers_post__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../reducers/post */ "./reducers/post.js");
/* harmony import */ var _reducers_user__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../reducers/user */ "./reducers/user.js");

 // import shortId from "shortid";




function retweetAPI(data) {
  return axios__WEBPACK_IMPORTED_MODULE_0___default.a.post(`/post/${data}/retweet`, data);
}

function* retweet(action) {
  try {
    // console.log("retweet in Saga");
    const result = yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["call"])(retweetAPI, action.data); // yield delay(1000);

    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])({
      type: _reducers_post__WEBPACK_IMPORTED_MODULE_2__["RETWEET_SUCCESS"],
      data: result.data
    });
  } catch (err) {
    console.error(err);
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])({
      type: _reducers_post__WEBPACK_IMPORTED_MODULE_2__["RETWEET_FAILURE"],
      error: err.response.data
    });
  }
}

function uploadImagesAPI(data) {
  return axios__WEBPACK_IMPORTED_MODULE_0___default.a.post(`/post/images`, data);
}

function* uploadImages(action) {
  try {
    // console.log("uploadImages in Saga");
    const result = yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["call"])(uploadImagesAPI, action.data); // yield delay(1000);

    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])({
      type: _reducers_post__WEBPACK_IMPORTED_MODULE_2__["UPLOAD_IMAGES_SUCCESS"],
      data: result.data
    });
  } catch (err) {
    console.error(err);
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])({
      type: _reducers_post__WEBPACK_IMPORTED_MODULE_2__["UPLOAD_IMAGES_FAILURE"],
      error: err.response.data
    });
  }
}

function likePostAPI(data) {
  return axios__WEBPACK_IMPORTED_MODULE_0___default.a.patch(`/post/${data}/like`);
}

function* likePost(action) {
  try {
    // console.log("likePost in Saga");
    const result = yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["call"])(likePostAPI, action.data); // yield delay(1000);

    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])({
      type: _reducers_post__WEBPACK_IMPORTED_MODULE_2__["LIKE_POST_SUCCESS"],
      data: result.data
    });
  } catch (err) {
    console.error(err);
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])({
      type: _reducers_post__WEBPACK_IMPORTED_MODULE_2__["LIKE_POST_FAILURE"],
      error: err.response.data
    });
  }
}

function unlikePostAPI(data) {
  return axios__WEBPACK_IMPORTED_MODULE_0___default.a.delete(`/post/${data}/like`);
}

function* unlikePost(action) {
  try {
    // console.log("unlikePost in Saga");
    const result = yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["call"])(unlikePostAPI, action.data); // yield delay(1000);

    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])({
      type: _reducers_post__WEBPACK_IMPORTED_MODULE_2__["UNLIKE_POST_SUCCESS"],
      data: result.data
    });
  } catch (err) {
    console.error(err);
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])({
      type: _reducers_post__WEBPACK_IMPORTED_MODULE_2__["UNLIKE_POST_FAILURE"],
      error: err.response.data
    });
  }
} //get의 경우 ,뒤의 자리가 data가 아닌 withCredentials의 자리이므로 get에서 data를 보내려면 querystring으로 넣어야 함.(key=value의 형태)


function loadPostsAPI(lastId) {
  return axios__WEBPACK_IMPORTED_MODULE_0___default.a.get(`/posts?lastId=${lastId || 0}`);
}

function* loadPosts(action) {
  try {
    // console.log("loadPosts in Saga");
    const result = yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["call"])(loadPostsAPI, action.lastId); // yield delay(1000);

    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])({
      type: _reducers_post__WEBPACK_IMPORTED_MODULE_2__["LOAD_POSTS_SUCCESS"],
      data: result.data
    });
  } catch (err) {
    console.error(err);
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])({
      type: _reducers_post__WEBPACK_IMPORTED_MODULE_2__["LOAD_POSTS_FAILURE"],
      error: err.response.data
    });
  }
}

function addPostAPI(data) {
  return axios__WEBPACK_IMPORTED_MODULE_0___default.a.post("/post", data);
}

function* addPost(action) {
  try {
    const result = yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["call"])(addPostAPI, action.data); // yield delay(1000);
    // const id = shortId.generate();
    // 아래는 post reducer 조작 부분

    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])({
      type: _reducers_post__WEBPACK_IMPORTED_MODULE_2__["ADD_POST_SUCCESS"],
      data: result.data // data: {
      //   id,
      //   content: action.data,
      // },

    }); // 아래는 user reducer 조작 부분

    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])({
      type: _reducers_user__WEBPACK_IMPORTED_MODULE_3__["ADD_POST_TO_ME"],
      data: result.data.id
    });
  } catch (err) {
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])({
      type: _reducers_post__WEBPACK_IMPORTED_MODULE_2__["ADD_POST_FAILURE"],
      error: err.response.data
    });
  }
}

function removePostAPI(data) {
  return axios__WEBPACK_IMPORTED_MODULE_0___default.a.delete(`/post/${data}`);
}

function* removePost(action) {
  try {
    const result = yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["call"])(removePostAPI, action.data); // yield delay(1000);
    // 아래는 post reducer 조작 부분

    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])({
      type: _reducers_post__WEBPACK_IMPORTED_MODULE_2__["REMOVE_POST_SUCCESS"],
      data: result.data
    }); // 아래는 user reducer 조작 부분

    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])({
      type: _reducers_user__WEBPACK_IMPORTED_MODULE_3__["REMOVE_POST_OF_ME"],
      data: action.data
    });
  } catch (err) {
    console.error(err);
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])({
      type: _reducers_post__WEBPACK_IMPORTED_MODULE_2__["REMOVE_POST_FAILURE"],
      error: err.response.data
    });
  }
}

function addCommentAPI(data) {
  //POST /post/1/comment
  return axios__WEBPACK_IMPORTED_MODULE_0___default.a.post(`/post/${data.postId}/comment`, data);
}

function* addComment(action) {
  try {
    const result = yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["call"])(addCommentAPI, action.data); // yield delay(1000);

    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])({
      type: _reducers_post__WEBPACK_IMPORTED_MODULE_2__["ADD_COMMENT_SUCCESS"],
      data: result.data
    });
  } catch (err) {
    console.error(err);
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])({
      type: _reducers_post__WEBPACK_IMPORTED_MODULE_2__["ADD_COMMENT_FAILURE"],
      error: err.response.data
    });
  }
}

function* watchRetweet() {
  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["takeLatest"])(_reducers_post__WEBPACK_IMPORTED_MODULE_2__["RETWEET_REQUEST"], retweet);
}

function* watchUploadImages() {
  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["takeLatest"])(_reducers_post__WEBPACK_IMPORTED_MODULE_2__["UPLOAD_IMAGES_REQUEST"], uploadImages);
}

function* watchLikePost() {
  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["takeLatest"])(_reducers_post__WEBPACK_IMPORTED_MODULE_2__["LIKE_POST_REQUEST"], likePost);
}

function* watchUnlikePost() {
  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["takeLatest"])(_reducers_post__WEBPACK_IMPORTED_MODULE_2__["UNLIKE_POST_REQUEST"], unlikePost);
}

function* watchLoadPosts() {
  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["throttle"])(5000, _reducers_post__WEBPACK_IMPORTED_MODULE_2__["LOAD_POSTS_REQUEST"], loadPosts);
}

function* watchAddComment() {
  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["takeLatest"])(_reducers_post__WEBPACK_IMPORTED_MODULE_2__["ADD_COMMENT_REQUEST"], addComment);
}

function* watchRemovePost() {
  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["takeLatest"])(_reducers_post__WEBPACK_IMPORTED_MODULE_2__["REMOVE_POST_REQUEST"], removePost);
}

function* watchAddPost() {
  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["takeLatest"])(_reducers_post__WEBPACK_IMPORTED_MODULE_2__["ADD_POST_REQUEST"], addPost);
}

function* postSaga() {
  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["all"])([Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["fork"])(watchRetweet), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["fork"])(watchUploadImages), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["fork"])(watchLikePost), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["fork"])(watchUnlikePost), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["fork"])(watchAddPost), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["fork"])(watchLoadPosts), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["fork"])(watchRemovePost), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["fork"])(watchAddComment)]);
}

/***/ }),

/***/ "./sagas/user.js":
/*!***********************!*\
  !*** ./sagas/user.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return userSaga; });
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ "axios");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! redux-saga/effects */ "redux-saga/effects");
/* harmony import */ var redux_saga_effects__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _reducers_user__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../reducers/user */ "./reducers/user.js");




function loadFollowersAPI(data) {
  return axios__WEBPACK_IMPORTED_MODULE_0___default.a.get("/user/followers", data);
}

function* loadFollowers(action) {
  try {
    const result = yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["call"])(loadFollowersAPI, action.data); // yield delay(1000);

    console.log("loadFollowers result", result);
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])({
      type: _reducers_user__WEBPACK_IMPORTED_MODULE_2__["LOAD_FOLLOWERS_SUCCESS"],
      data: result.data
    });
  } catch (err) {
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])({
      type: _reducers_user__WEBPACK_IMPORTED_MODULE_2__["LOAD_FOLLOWERS_FAILURE"],
      error: err.response.data
    });
  }
}

function loadFollowingsAPI(data) {
  return axios__WEBPACK_IMPORTED_MODULE_0___default.a.get("/user/followings", data);
}

function* loadFollowings(action) {
  try {
    const result = yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["call"])(loadFollowingsAPI, action.data); // yield delay(1000);

    console.log("loadFollowing result", result);
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])({
      type: _reducers_user__WEBPACK_IMPORTED_MODULE_2__["LOAD_FOLLOWINGS_SUCCESS"],
      data: result.data
    });
  } catch (err) {
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])({
      type: _reducers_user__WEBPACK_IMPORTED_MODULE_2__["LOAD_FOLLOWINGS_FAILURE"],
      error: err.response.data
    });
  }
} // 일부 값 수정시는 PATCH 사용


function changeNicknameAPI(data) {
  return axios__WEBPACK_IMPORTED_MODULE_0___default.a.patch("/user/nickname", {
    nickname: data
  });
}

function* changeNickname(action) {
  try {
    console.log("saga login");
    const result = yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["call"])(changeNicknameAPI, action.data); // yield delay(1000);

    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])({
      type: _reducers_user__WEBPACK_IMPORTED_MODULE_2__["CHANGE_NICKNAME_SUCCESS"],
      data: result.data
    });
  } catch (err) {
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])({
      type: _reducers_user__WEBPACK_IMPORTED_MODULE_2__["CHANGE_NICKNAME_FAILURE"],
      error: err.response.data
    });
  }
}

function loadMyInfoAPI() {
  return axios__WEBPACK_IMPORTED_MODULE_0___default.a.get("/user");
} // const l = logIn({type: 'LOG_IN_REQUEST', data: {id: 'jhkevin21@gmail.com'}})
// l.next();
// l.next();


function* loadMyInfo(action) {
  // 성공 결과는 result.data에, 실패경과는 err.response.data에 담겨있음
  // put은 dispatch라고 생각하기
  try {
    // console.log("saga login");
    const result = yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["call"])(loadMyInfoAPI, action.data); // yield delay(1000);

    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])({
      type: _reducers_user__WEBPACK_IMPORTED_MODULE_2__["LOAD_MY_INFO_SUCCESS"],
      data: result.data
    });
  } catch (err) {
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])({
      type: _reducers_user__WEBPACK_IMPORTED_MODULE_2__["LOAD_MY_INFO_FAILURE"],
      error: err.response.data
    });
  }
}

function logInAPI(data) {
  return axios__WEBPACK_IMPORTED_MODULE_0___default.a.post("/user/login", data);
} // const l = logIn({type: 'LOG_IN_REQUEST', data: {id: 'jhkevin21@gmail.com'}})
// l.next();
// l.next();


function* logIn(action) {
  // 성공 결과는 result.data에, 실패경과는 err.response.data에 담겨있음
  // put은 dispatch라고 생각하기
  try {
    // console.log("saga login");
    const result = yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["call"])(logInAPI, action.data); // yield delay(1000);

    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])({
      type: _reducers_user__WEBPACK_IMPORTED_MODULE_2__["LOG_IN_SUCCESS"],
      data: result.data
    });
  } catch (err) {
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])({
      type: _reducers_user__WEBPACK_IMPORTED_MODULE_2__["LOG_IN_FAILURE"],
      error: err.response.data
    });
  }
}

function logOutAPI() {
  return axios__WEBPACK_IMPORTED_MODULE_0___default.a.post("/user/logout");
}

function* logOut() {
  try {
    // console.log("saga logout");
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["call"])(logOutAPI); // yield delay(1000);

    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])({
      type: _reducers_user__WEBPACK_IMPORTED_MODULE_2__["LOG_OUT_SUCCESS"] //   data: result.data,

    });
  } catch (err) {
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])({
      type: _reducers_user__WEBPACK_IMPORTED_MODULE_2__["LOG_OUT_FAILURE"],
      error: err.response.data
    });
  }
}

function signUpAPI(data) {
  return axios__WEBPACK_IMPORTED_MODULE_0___default.a.post("/user", data);
}

function* signUp(action) {
  try {
    console.log("saga signUp");
    const result = yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["call"])(signUpAPI, action.data);
    console.log(result); // yield delay(1000);

    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])({
      type: _reducers_user__WEBPACK_IMPORTED_MODULE_2__["SIGN_UP_SUCCESS"]
    });
  } catch (err) {
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])({
      type: _reducers_user__WEBPACK_IMPORTED_MODULE_2__["SIGN_UP_FAILURE"],
      error: err.response.data
    });
  }
}

function followAPI(data) {
  return axios__WEBPACK_IMPORTED_MODULE_0___default.a.patch(`/user/${data}/follow`);
}

function* follow(action) {
  try {
    const result = yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["call"])(followAPI, action.data); // yield delay(1000);

    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])({
      type: _reducers_user__WEBPACK_IMPORTED_MODULE_2__["FOLLOW_SUCCESS"],
      data: result.data
    });
  } catch (err) {
    console.error(err);
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])({
      type: _reducers_user__WEBPACK_IMPORTED_MODULE_2__["FOLLOW_FAILURE"],
      error: err.response.data
    });
  }
}

function unFollowAPI(data) {
  return axios__WEBPACK_IMPORTED_MODULE_0___default.a.delete(`/user/${data}/follow`);
}

function* unFollow(action) {
  try {
    const result = yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["call"])(unFollowAPI, action.data); // yield delay(1000);
    // 아래는 post reducer 조작 부분

    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])({
      type: _reducers_user__WEBPACK_IMPORTED_MODULE_2__["UNFOLLOW_SUCCESS"],
      data: result.data
    });
  } catch (err) {
    console.error(err);
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])({
      type: _reducers_user__WEBPACK_IMPORTED_MODULE_2__["UNFOLLOW_FAILURE"],
      error: err.response.data
    });
  }
}

function removeFollowerAPI(data) {
  return axios__WEBPACK_IMPORTED_MODULE_0___default.a.delete(`/user/FOLLOWER/${data}`);
}

function* removeFollower(action) {
  try {
    const result = yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["call"])(removeFollowerAPI, action.data); // yield delay(1000);
    // 아래는 post reducer 조작 부분

    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])({
      type: _reducers_user__WEBPACK_IMPORTED_MODULE_2__["REMOVE_FOLLOWER_SUCCESS"],
      data: result.data
    });
  } catch (err) {
    console.error(err);
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])({
      type: _reducers_user__WEBPACK_IMPORTED_MODULE_2__["REMOVE_FOLLOWER_FAILURE"],
      error: err.response.data
    });
  }
}

function* watchLoadFollowings() {
  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["takeLatest"])(_reducers_user__WEBPACK_IMPORTED_MODULE_2__["LOAD_FOLLOWINGS_REQUEST"], loadFollowings);
}

function* watchLoadFollowers() {
  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["takeLatest"])(_reducers_user__WEBPACK_IMPORTED_MODULE_2__["LOAD_FOLLOWERS_REQUEST"], loadFollowers);
}

function* watchChangeNickname() {
  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["takeLatest"])(_reducers_user__WEBPACK_IMPORTED_MODULE_2__["CHANGE_NICKNAME_REQUEST"], changeNickname);
}

function* watchLoadMyInfo() {
  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["takeLatest"])(_reducers_user__WEBPACK_IMPORTED_MODULE_2__["LOAD_MY_INFO_REQUEST"], loadMyInfo);
}

function* watchLogIn() {
  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["takeLatest"])(_reducers_user__WEBPACK_IMPORTED_MODULE_2__["LOG_IN_REQUEST"], logIn);
}

function* watchLogOut() {
  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["takeLatest"])(_reducers_user__WEBPACK_IMPORTED_MODULE_2__["LOG_OUT_REQUEST"], logOut);
}

function* watchSignUp() {
  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["takeLatest"])(_reducers_user__WEBPACK_IMPORTED_MODULE_2__["SIGN_UP_REQUEST"], signUp);
}

function* watchFollow() {
  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["takeLatest"])(_reducers_user__WEBPACK_IMPORTED_MODULE_2__["FOLLOW_REQUEST"], follow);
}

function* watchUnFollow() {
  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["takeLatest"])(_reducers_user__WEBPACK_IMPORTED_MODULE_2__["UNFOLLOW_REQUEST"], unFollow);
}

function* watchRemoveFollower() {
  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["takeLatest"])(_reducers_user__WEBPACK_IMPORTED_MODULE_2__["REMOVE_FOLLOWER_REQUEST"], removeFollower);
}

function* userSaga() {
  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["all"])([Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["fork"])(watchChangeNickname), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["fork"])(watchLoadFollowers), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["fork"])(watchLoadFollowings), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["fork"])(watchLoadMyInfo), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["fork"])(watchLogIn), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["fork"])(watchLogOut), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["fork"])(watchSignUp), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["fork"])(watchFollow), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["fork"])(watchUnFollow), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["fork"])(watchRemoveFollower)]);
}

/***/ }),

/***/ "./store/configureStore.js":
/*!*********************************!*\
  !*** ./store/configureStore.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var next_redux_wrapper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next-redux-wrapper */ "next-redux-wrapper");
/* harmony import */ var next_redux_wrapper__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_redux_wrapper__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! redux */ "redux");
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(redux__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var redux_devtools_extension__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! redux-devtools-extension */ "redux-devtools-extension");
/* harmony import */ var redux_devtools_extension__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(redux_devtools_extension__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var redux_saga__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! redux-saga */ "redux-saga");
/* harmony import */ var redux_saga__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(redux_saga__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _reducers_index__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../reducers/index */ "./reducers/index.js");
/* harmony import */ var _sagas__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../sagas */ "./sagas/index.js");
// import React from "react";







const loggerMiddleware = ({
  dispatch,
  getState
}) => next => action => {
  // if (typeof action === "function") {
  //   return action(dispatch, getState);
  // }
  console.log(action);
  return next(action);
};

const configureStore = () => {
  const sagaMiddleware = redux_saga__WEBPACK_IMPORTED_MODULE_3___default()();
  const middlewares = [sagaMiddleware, loggerMiddleware];
  const enhancer = false ? undefined : Object(redux_devtools_extension__WEBPACK_IMPORTED_MODULE_2__["composeWithDevTools"])(Object(redux__WEBPACK_IMPORTED_MODULE_1__["applyMiddleware"])(...middlewares)); //위 설명: 개발용 middleware랑 배포용 middleware는 다르기 때문에 위와 같이 정의 함.

  const store = Object(redux__WEBPACK_IMPORTED_MODULE_1__["createStore"])(_reducers_index__WEBPACK_IMPORTED_MODULE_4__["default"], enhancer);
  store.sagaTask = sagaMiddleware.run(_sagas__WEBPACK_IMPORTED_MODULE_5__["default"]); // store.dispatch({
  //   type: "CHANGE_NICKNAME",
  //   data: "Jaehan",
  // });

  return store;
};

const wrapper = Object(next_redux_wrapper__WEBPACK_IMPORTED_MODULE_0__["createWrapper"])(configureStore, {
  debug: true
}); //위와 같이 하면 redux 사용시 문제점등이 더 자세히 나옴. 따라서 위와 같이 설정 하기

/* harmony default export */ __webpack_exports__["default"] = (wrapper);

/***/ }),

/***/ 0:
/*!****************************************!*\
  !*** multi private-next-pages/_app.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! private-next-pages/_app.js */"./pages/_app.js");


/***/ }),

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("axios");

/***/ }),

/***/ "immer":
/*!************************!*\
  !*** external "immer" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("immer");

/***/ }),

/***/ "next-redux-saga":
/*!**********************************!*\
  !*** external "next-redux-saga" ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next-redux-saga");

/***/ }),

/***/ "next-redux-wrapper":
/*!*************************************!*\
  !*** external "next-redux-wrapper" ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next-redux-wrapper");

/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/head");

/***/ }),

/***/ "prop-types":
/*!*****************************!*\
  !*** external "prop-types" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("prop-types");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react/jsx-dev-runtime");

/***/ }),

/***/ "redux":
/*!************************!*\
  !*** external "redux" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("redux");

/***/ }),

/***/ "redux-devtools-extension":
/*!*******************************************!*\
  !*** external "redux-devtools-extension" ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("redux-devtools-extension");

/***/ }),

/***/ "redux-saga":
/*!*****************************!*\
  !*** external "redux-saga" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("redux-saga");

/***/ }),

/***/ "redux-saga/effects":
/*!*************************************!*\
  !*** external "redux-saga/effects" ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("redux-saga/effects");

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vcGFnZXMvX2FwcC5qcyIsIndlYnBhY2s6Ly8vLi9yZWR1Y2Vycy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9yZWR1Y2Vycy9wb3N0LmpzIiwid2VicGFjazovLy8uL3JlZHVjZXJzL3VzZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc2FnYXMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc2FnYXMvcG9zdC5qcyIsIndlYnBhY2s6Ly8vLi9zYWdhcy91c2VyLmpzIiwid2VicGFjazovLy8uL3N0b3JlL2NvbmZpZ3VyZVN0b3JlLmpzIiwid2VicGFjazovLy9leHRlcm5hbCBcImF4aW9zXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiaW1tZXJcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJuZXh0LXJlZHV4LXNhZ2FcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJuZXh0LXJlZHV4LXdyYXBwZXJcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJuZXh0L2hlYWRcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJwcm9wLXR5cGVzXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3RcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC9qc3gtZGV2LXJ1bnRpbWVcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWR1eFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlZHV4LWRldnRvb2xzLWV4dGVuc2lvblwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlZHV4LXNhZ2FcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWR1eC1zYWdhL2VmZmVjdHNcIiJdLCJuYW1lcyI6WyJOb2RlQmlyZCIsIkNvbXBvbmVudCIsInByb3BUeXBlcyIsIlByb3BUeXBlcyIsImVsZW1lbnRUeXBlIiwiaXNSZXF1aXJlZCIsIndyYXBwZXIiLCJ3aXRoUmVkdXgiLCJ3aXRoUmVkdXhTYWdhIiwicm9vdFJlZHVjZXIiLCJjb21iaW5lUmVkdWNlcnMiLCJpbmRleCIsInN0YXRlIiwiYWN0aW9uIiwidHlwZSIsIkhZRFJBVEUiLCJjb25zb2xlIiwibG9nIiwicGF5bG9hZCIsInVzZXIiLCJwb3N0IiwiaW5pdGlhbFN0YXRlIiwibWFpblBvc3RzIiwiaW1hZ2VQYXRocyIsImhhc01vcmVQb3N0cyIsImxpa2VQb3N0TG9hZGluZyIsImxpa2VQb3N0RG9uZSIsImxpa2VQb3N0RXJyb3IiLCJ1bmxpa2VQb3N0TG9hZGluZyIsInVubGlrZVBvc3REb25lIiwidW5saWtlUG9zdEVycm9yIiwibG9hZFBvc3RzTG9hZGluZyIsImxvYWRQb3N0c0RvbmUiLCJsb2FkUG9zdHNFcnJvciIsImFkZFBvc3RMb2FkaW5nIiwiYWRkUG9zdERvbmUiLCJhZGRQb3N0RXJyb3IiLCJyZW1vdmVQb3N0TG9hZGluZyIsInJlbW92ZVBvc3REb25lIiwicmVtb3ZlUG9zdEVycm9yIiwiYWRkQ29tbWVudExvYWRpbmciLCJhZGRDb21tZW50RG9uZSIsImFkZENvbW1lbnRFcnJvciIsInVwbG9hZEltYWdlc0xvYWRpbmciLCJ1cGxvYWRJbWFnZXNEb25lIiwidXBsb2FkSW1hZ2VzRXJyb3IiLCJyZXR3ZWV0TG9hZGluZyIsInJldHdlZXREb25lIiwicmV0d2VldEVycm9yIiwiUkVUV0VFVF9SRVFVRVNUIiwiUkVUV0VFVF9TVUNDRVNTIiwiUkVUV0VFVF9GQUlMVVJFIiwiVVBMT0FEX0lNQUdFU19SRVFVRVNUIiwiVVBMT0FEX0lNQUdFU19TVUNDRVNTIiwiVVBMT0FEX0lNQUdFU19GQUlMVVJFIiwiUkVNT1ZFX0lNQUdFIiwiTElLRV9QT1NUX1JFUVVFU1QiLCJMSUtFX1BPU1RfU1VDQ0VTUyIsIkxJS0VfUE9TVF9GQUlMVVJFIiwiVU5MSUtFX1BPU1RfUkVRVUVTVCIsIlVOTElLRV9QT1NUX1NVQ0NFU1MiLCJVTkxJS0VfUE9TVF9GQUlMVVJFIiwiTE9BRF9QT1NUU19SRVFVRVNUIiwiTE9BRF9QT1NUU19TVUNDRVNTIiwiTE9BRF9QT1NUU19GQUlMVVJFIiwiQUREX1BPU1RfUkVRVUVTVCIsIkFERF9QT1NUX1NVQ0NFU1MiLCJBRERfUE9TVF9GQUlMVVJFIiwiUkVNT1ZFX1BPU1RfUkVRVUVTVCIsIlJFTU9WRV9QT1NUX1NVQ0NFU1MiLCJSRU1PVkVfUE9TVF9GQUlMVVJFIiwiQUREX0NPTU1FTlRfUkVRVUVTVCIsIkFERF9DT01NRU5UX1NVQ0NFU1MiLCJBRERfQ09NTUVOVF9GQUlMVVJFIiwiYWRkUG9zdCIsImRhdGEiLCJhZGRDb21tZW50IiwicmVkdWNlciIsInByb2R1Y2UiLCJkcmFmdCIsInVuc2hpZnQiLCJlcnJvciIsImZpbHRlciIsInYiLCJpIiwiZmluZCIsImlkIiwiUG9zdElkIiwiTGlrZXJzIiwicHVzaCIsIlVzZXJJZCIsImNvbmNhdCIsImxlbmd0aCIsIkNvbW1lbnRzIiwiYWRkQ29vbWVudExvYWRpbmciLCJsb2FkTXlJbmZvTG9hZGluZyIsImxvYWRNeUluZm9Eb25lIiwibG9hZE15SW5mb0Vycm9yIiwidW5mb2xsb3dMb2FkaW5nIiwidW5mb2xsb3dEb25lIiwidW5mb2xsb3dFcnJvciIsInJlbW92ZUZvbGxvd2VyTG9hZGluZyIsInJlbW92ZUZvbGxvd2VyRG9uZSIsInJlbW92ZUZvbGxvd2VyRXJyb3IiLCJmb2xsb3dMb2FkaW5nIiwiZm9sbG93RG9uZSIsImZvbGxvd0Vycm9yIiwibG9hZEZvbGxvd2Vyc0xvYWRpbmciLCJsb2FkRm9sbG93ZXJzRG9uZSIsImxvYWRGb2xsb3dlcnNFcnJvciIsImxvYWRGb2xsb3dpbmdzTG9hZGluZyIsImxvYWRGb2xsb3dpbmdzRG9uZSIsImxvYWRGb2xsb3dpbmdzRXJyb3IiLCJsb2dJbkxvYWRpbmciLCJsb2dJbkRvbmUiLCJsb2dJbkVycm9yIiwibG9nT3V0TG9hZGluZyIsImxvZ091dERvbmUiLCJsb2dPdXRFcnJvciIsInNpZ25VcExvYWRpbmciLCJzaWduVXBEb25lIiwic2lnblVwRXJyb3IiLCJjaGFuZ2VOaWNrbmFtZUxvYWRpbmciLCJjaGFuZ2VOaWNrbmFtZURvbmUiLCJjaGFuZ2VOaWNrbmFtZUVycm9yIiwibWUiLCJzaWduVXBEYXRhIiwibG9naW5EYXRhIiwiTE9BRF9GT0xMT1dJTkdTX1JFUVVFU1QiLCJMT0FEX0ZPTExPV0lOR1NfU1VDQ0VTUyIsIkxPQURfRk9MTE9XSU5HU19GQUlMVVJFIiwiTE9BRF9GT0xMT1dFUlNfUkVRVUVTVCIsIkxPQURfRk9MTE9XRVJTX1NVQ0NFU1MiLCJMT0FEX0ZPTExPV0VSU19GQUlMVVJFIiwiTE9BRF9NWV9JTkZPX1JFUVVFU1QiLCJMT0FEX01ZX0lORk9fU1VDQ0VTUyIsIkxPQURfTVlfSU5GT19GQUlMVVJFIiwiTE9HX0lOX1JFUVVFU1QiLCJMT0dfSU5fU1VDQ0VTUyIsIkxPR19JTl9GQUlMVVJFIiwiTE9HX09VVF9SRVFVRVNUIiwiTE9HX09VVF9TVUNDRVNTIiwiTE9HX09VVF9GQUlMVVJFIiwiU0lHTl9VUF9SRVFVRVNUIiwiU0lHTl9VUF9TVUNDRVNTIiwiU0lHTl9VUF9GQUlMVVJFIiwiQ0hBTkdFX05JQ0tOQU1FX1JFUVVFU1QiLCJDSEFOR0VfTklDS05BTUVfU1VDQ0VTUyIsIkNIQU5HRV9OSUNLTkFNRV9GQUlMVVJFIiwiRk9MTE9XX1JFUVVFU1QiLCJGT0xMT1dfU1VDQ0VTUyIsIkZPTExPV19GQUlMVVJFIiwiVU5GT0xMT1dfUkVRVUVTVCIsIlVORk9MTE9XX1NVQ0NFU1MiLCJVTkZPTExPV19GQUlMVVJFIiwiUkVNT1ZFX0ZPTExPV0VSX1JFUVVFU1QiLCJSRU1PVkVfRk9MTE9XRVJfU1VDQ0VTUyIsIlJFTU9WRV9GT0xMT1dFUl9GQUlMVVJFIiwiQUREX1BPU1RfVE9fTUUiLCJSRU1PVkVfUE9TVF9PRl9NRSIsImxvZ2luUmVxdWVzdEFjdGlvbiIsImxvZ291dFJlcXVlc3RBY3Rpb24iLCJGb2xsb3dpbmdzIiwiRm9sbG93ZXJzIiwibmlja25hbWUiLCJQb3N0cyIsImF4aW9zIiwiZGVmYXVsdHMiLCJiYXNlVVJMIiwid2l0aENyZWRlbnRpYWxzIiwicm9vdFNhZ2EiLCJhbGwiLCJmb3JrIiwicG9zdFNhZ2EiLCJ1c2VyU2FnYSIsInJldHdlZXRBUEkiLCJyZXR3ZWV0IiwicmVzdWx0IiwiY2FsbCIsInB1dCIsImVyciIsInJlc3BvbnNlIiwidXBsb2FkSW1hZ2VzQVBJIiwidXBsb2FkSW1hZ2VzIiwibGlrZVBvc3RBUEkiLCJwYXRjaCIsImxpa2VQb3N0IiwidW5saWtlUG9zdEFQSSIsImRlbGV0ZSIsInVubGlrZVBvc3QiLCJsb2FkUG9zdHNBUEkiLCJsYXN0SWQiLCJnZXQiLCJsb2FkUG9zdHMiLCJhZGRQb3N0QVBJIiwicmVtb3ZlUG9zdEFQSSIsInJlbW92ZVBvc3QiLCJhZGRDb21tZW50QVBJIiwicG9zdElkIiwid2F0Y2hSZXR3ZWV0IiwidGFrZUxhdGVzdCIsIndhdGNoVXBsb2FkSW1hZ2VzIiwid2F0Y2hMaWtlUG9zdCIsIndhdGNoVW5saWtlUG9zdCIsIndhdGNoTG9hZFBvc3RzIiwidGhyb3R0bGUiLCJ3YXRjaEFkZENvbW1lbnQiLCJ3YXRjaFJlbW92ZVBvc3QiLCJ3YXRjaEFkZFBvc3QiLCJsb2FkRm9sbG93ZXJzQVBJIiwibG9hZEZvbGxvd2VycyIsImxvYWRGb2xsb3dpbmdzQVBJIiwibG9hZEZvbGxvd2luZ3MiLCJjaGFuZ2VOaWNrbmFtZUFQSSIsImNoYW5nZU5pY2tuYW1lIiwibG9hZE15SW5mb0FQSSIsImxvYWRNeUluZm8iLCJsb2dJbkFQSSIsImxvZ0luIiwibG9nT3V0QVBJIiwibG9nT3V0Iiwic2lnblVwQVBJIiwic2lnblVwIiwiZm9sbG93QVBJIiwiZm9sbG93IiwidW5Gb2xsb3dBUEkiLCJ1bkZvbGxvdyIsInJlbW92ZUZvbGxvd2VyQVBJIiwicmVtb3ZlRm9sbG93ZXIiLCJ3YXRjaExvYWRGb2xsb3dpbmdzIiwid2F0Y2hMb2FkRm9sbG93ZXJzIiwid2F0Y2hDaGFuZ2VOaWNrbmFtZSIsIndhdGNoTG9hZE15SW5mbyIsIndhdGNoTG9nSW4iLCJ3YXRjaExvZ091dCIsIndhdGNoU2lnblVwIiwid2F0Y2hGb2xsb3ciLCJ3YXRjaFVuRm9sbG93Iiwid2F0Y2hSZW1vdmVGb2xsb3dlciIsImxvZ2dlck1pZGRsZXdhcmUiLCJkaXNwYXRjaCIsImdldFN0YXRlIiwibmV4dCIsImNvbmZpZ3VyZVN0b3JlIiwic2FnYU1pZGRsZXdhcmUiLCJjcmVhdGVTYWdhTWlkZGxld2FyZSIsIm1pZGRsZXdhcmVzIiwiZW5oYW5jZXIiLCJjb21wb3NlIiwiY29tcG9zZVdpdGhEZXZUb29scyIsImFwcGx5TWlkZGxld2FyZSIsInN0b3JlIiwiY3JlYXRlU3RvcmUiLCJzYWdhVGFzayIsInJ1biIsImNyZWF0ZVdyYXBwZXIiLCJkZWJ1ZyJdLCJtYXBwaW5ncyI6Ijs7UUFBQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLElBQUk7UUFDSjtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMENBQTBDLGdDQUFnQztRQUMxRTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLHdEQUF3RCxrQkFBa0I7UUFDMUU7UUFDQSxpREFBaUQsY0FBYztRQUMvRDs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EseUNBQXlDLGlDQUFpQztRQUMxRSxnSEFBZ0gsbUJBQW1CLEVBQUU7UUFDckk7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwyQkFBMkIsMEJBQTBCLEVBQUU7UUFDdkQsaUNBQWlDLGVBQWU7UUFDaEQ7UUFDQTtRQUNBOztRQUVBO1FBQ0Esc0RBQXNELCtEQUErRDs7UUFFckg7UUFDQTs7O1FBR0E7UUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDeEZBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTs7OztBQUVBLE1BQU1BLFFBQVEsR0FBRyxDQUFDO0FBQUVDO0FBQUYsQ0FB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Ozs7Ozs7Ozs7QUNBQSx1Qzs7Ozs7Ozs7Ozs7QUNBQSxrQzs7Ozs7Ozs7Ozs7QUNBQSxrRDs7Ozs7Ozs7Ozs7QUNBQSxrQzs7Ozs7Ozs7Ozs7QUNBQSxxRDs7Ozs7Ozs7Ozs7QUNBQSx1Qzs7Ozs7Ozs7Ozs7QUNBQSwrQyIsImZpbGUiOiJwYWdlcy9fYXBwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSByZXF1aXJlKCcuLi9zc3ItbW9kdWxlLWNhY2hlLmpzJyk7XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdHZhciB0aHJldyA9IHRydWU7XG4gXHRcdHRyeSB7XG4gXHRcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG4gXHRcdFx0dGhyZXcgPSBmYWxzZTtcbiBcdFx0fSBmaW5hbGx5IHtcbiBcdFx0XHRpZih0aHJldykgZGVsZXRlIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdO1xuIFx0XHR9XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IDApO1xuIiwiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gXCJwcm9wLXR5cGVzXCI7XHJcbmltcG9ydCBcImFudGQvZGlzdC9hbnRkLmNzc1wiO1xyXG5pbXBvcnQgSGVhZCBmcm9tIFwibmV4dC9oZWFkXCI7XHJcbmltcG9ydCB3aXRoUmVkdXhTYWdhIGZyb20gXCJuZXh0LXJlZHV4LXNhZ2FcIjtcclxuXHJcbmltcG9ydCB3cmFwcGVyIGZyb20gXCIuLi9zdG9yZS9jb25maWd1cmVTdG9yZVwiO1xyXG5cclxuY29uc3QgTm9kZUJpcmQgPSAoeyBDb21wb25lbnQgfSkgPT4ge1xyXG4gIHJldHVybiAoXHJcbiAgICA8PlxyXG4gICAgICA8SGVhZD5cclxuICAgICAgICA8bWV0YSBjaGFyU2V0PSd1dGYtOCcgLz5cclxuICAgICAgICA8dGl0bGU+Tm9kZSBCaXJkPC90aXRsZT5cclxuICAgICAgPC9IZWFkPlxyXG4gICAgICA8Q29tcG9uZW50IC8+XHJcbiAgICA8Lz5cclxuICApO1xyXG59O1xyXG5cclxuTm9kZUJpcmQucHJvcFR5cGVzID0ge1xyXG4gIENvbXBvbmVudDogUHJvcFR5cGVzLmVsZW1lbnRUeXBlLmlzUmVxdWlyZWQsXHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCB3cmFwcGVyLndpdGhSZWR1eCh3aXRoUmVkdXhTYWdhKE5vZGVCaXJkKSk7XHJcbiIsImltcG9ydCB7IEhZRFJBVEUgfSBmcm9tIFwibmV4dC1yZWR1eC13cmFwcGVyXCI7XHJcbmltcG9ydCB7IGNvbWJpbmVSZWR1Y2VycyB9IGZyb20gXCJyZWR1eFwiO1xyXG5pbXBvcnQgdXNlciBmcm9tIFwiLi91c2VyXCI7XHJcbmltcG9ydCBwb3N0IGZyb20gXCIuL3Bvc3RcIjtcclxuXHJcbi8qXHJcbmNvbnN0IGluaXRpYWxTdGF0ZSA9IHtcclxuICB1c2VyOiB7XHJcbiAgICAvL+yVhOuemCDshLjrtoAg64K07Jqp65Ok7J2AIHJlZHV47Kq86rCc6riwIO2VoOuVjCDqsIHqsIHsnZgg7YyM7J2866GcIOuTpOyWtOqwlOydjC5cclxuICAgIC8vIGlzTG9nZ2VkSW46IGZhbHNlLFxyXG4gICAgLy8gdXNlcjogbnVsbCxcclxuICAgIC8vIHNpZ25VcERhdGE6IHt9LFxyXG4gICAgLy8gbG9naW5EYXRhOiB7fSxcclxuICB9LFxyXG4gIHBvc3Q6IHtcclxuICAgIC8vIG1haW5Qb3N0czogW10sXHJcbiAgfSxcclxufTtcclxuKi9cclxuXHJcbi8v7Jet7Iuc64KYIOyVhOuemCDrgrTsmqnrk6TsnYAg67aE66as65CcIHJlZHV4IOykkSDrp57ripQg6rCS7JeQIOuEo+ydjFxyXG4vLyBleHBvcnQgY29uc3QgbG9naW5BY3Rpb24gPSAoZGF0YSkgPT4ge1xyXG4vLyAgIHJldHVybiB7XHJcbi8vICAgICB0eXBlOiBcIkxPR19JTlwiLFxyXG4vLyAgICAgZGF0YSxcclxuLy8gICB9O1xyXG4vLyB9O1xyXG4vLyBleHBvcnQgY29uc3QgbG9nb3V0QWN0aW9uID0gKCkgPT4ge1xyXG4vLyAgIHJldHVybiB7XHJcbi8vICAgICB0eXBlOiBcIkxPR19PVVRcIixcclxuLy8gICB9O1xyXG4vLyB9O1xyXG5cclxuLy8gcmVkdWNlciAo7J207KCE7IOB7YOcLCDslaHshZgpID0+IOuLpOydjOyDge2DnCAo7J207KCE7IOB7YOc7JmALCDslaHshZjsnYQg7Ya17ZW07IScIOuLpOydjCDsg4Htg5zrpbwg66eM65Ok7Ja0IOuCtOuKlCDtlajsiJgpXHJcbmNvbnN0IHJvb3RSZWR1Y2VyID0gY29tYmluZVJlZHVjZXJzKHtcclxuICBpbmRleDogKHN0YXRlID0ge30sIGFjdGlvbikgPT4ge1xyXG4gICAgc3dpdGNoIChhY3Rpb24udHlwZSkge1xyXG4gICAgICBjYXNlIEhZRFJBVEU6XHJcbiAgICAgICAgY29uc29sZS5sb2coXCJIWURSQVRFXCIsIGFjdGlvbik7XHJcbiAgICAgICAgcmV0dXJuIHsgLi4uc3RhdGUsIC4uLmFjdGlvbi5wYXlsb2FkIH07XHJcblxyXG4gICAgICAvL+yXreyLnOuCmCDslYTrnpgg64K07Jqp65Ok7J2AIOu2hOumrOuQnCByZWR1eCDspJEg66ee64qUIOqwkuyXkCDrhKPsnYxcclxuICAgICAgLy8gY2FzZSBcIkxPR19JTlwiOlxyXG4gICAgICAvLyAgIHJldHVybiB7IC4uLnN0YXRlLCB1c2VyOiB7IC4uLnN0YXRlLnVzZXIsIGlzTG9nZ2VkSW46IHRydWUsIHVzZXI6IGFjdGlvbi5kYXRhIH0gfTtcclxuICAgICAgLy8gY2FzZSBcIkxPR19PVVRcIjpcclxuICAgICAgLy8gICByZXR1cm4geyAuLi5zdGF0ZSwgdXNlcjogeyAuLi5zdGF0ZS51c2VyLCBpc0xvZ2dlZEluOiBmYWxzZSwgdXNlcjogbnVsbCB9IH07XHJcbiAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgcmV0dXJuIHN0YXRlO1xyXG4gICAgfVxyXG4gIH0sXHJcbiAgdXNlcixcclxuICBwb3N0LFxyXG59KTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IHJvb3RSZWR1Y2VyO1xyXG5cclxuLypcclxuY29uc3QgaW5pdGlhbFN0YXRlID0ge1xyXG4gIG5hbWU6IFwia2V2aW5cIixcclxuICBhZ2U6IDM0LFxyXG4gIHBhc3N3b3JkOiBcInBhc3N3b3JkXCIsXHJcbn07XHJcblxyXG4vLyBhY3Rpb24gY3JlYXRvclxyXG5jb25zdCBjaGFuZ2VOaWNrbmFtZSA9IHtcclxuICB0eXBlOiBcIkNIQU5HRV9OSUNLTkFNRVwiLFxyXG4gIGRhdGE6IFwiamFlaGFuXCIsXHJcbn07XHJcblxyXG5jb25zdCBjaGFuZ2VOaWNrbmFtZSA9IChkYXRhKSA9PiB7XHJcbiAgcmV0dXJuIHtcclxuICAgIHR5cGU6IFwiQ0hBTkdFX05JQ0tOQU1FXCIsXHJcbiAgICBkYXRhOiBkYXRhLFxyXG4gIH07XHJcbn07XHJcblxyXG5jaGFuZ2VOaWNrbmFtZShcImJvb2dpY2hvXCIpOyAvL+yVhOuemOyZgCDqsJnsnYxcclxuLy8ge1xyXG4vLyAgICB0eXBlOiAnQ0hBTkdFX05JQ0tOQU1FJyxcclxuLy8gICAgZGF0YTogJ25ldWUgemVhbCcsXHJcbi8vIH1cclxuLy9cclxuXHJcbi8v7LWc7KKF7KCB7Jy866GcIOyVhOuemOyZgCDqsJnsnbQg7IKs7Jqp6rCA64qlXHJcbi8vIDEuIOychCDsspjrn7wgY2hhbmdlTmlja25hbWXsnYQg7ISg7Ja47ZWY6rOgXHJcbi8vIDIuIOyVhOuemOyZgCDqsJnsnbQgZGlzcGF0Y2jrpbwg7Iuc7LycIOykjC5cclxuc3RvcmUuZGlzcGF0Y2goY2hhbmdlTmlja25hbWUoXCJob2xseVwiKSk7XHJcblxyXG5cclxuLy8gcmVkdWNlciAo7J207KCE7IOB7YOcLCDslaHshZgpID0+IOuLpOydjOyDge2DnCAo7J207KCE7IOB7YOc7JmALCDslaHshZjsnYQg7Ya17ZW07IScIOuLpOydjCDsg4Htg5zrpbwg66eM65Ok7Ja0IOuCtOuKlCDtlajsiJgpXHJcbmNvbnN0IHJvb3RSZWR1Y2VyID0gKHN0YXRlID0gaW5pdGlhbFN0YXRlLCBhY3Rpb24pID0+IHtcclxuICBzd2l0Y2ggKGFjdGlvbi50eXBlKSB7XHJcbiAgICBjYXNlIFwiQ0hBTkdFX05JQ0tOQU1FXCI6XHJcbiAgICAgIHJldHVybiB7IC4uLnN0YXRlLCBuYW1lOiBhY3Rpb24uZGF0YSB9O1xyXG4gIH1cclxufTtcclxuXHJcbiovXHJcbiIsIi8vIGltcG9ydCBzaG9ydElkIGZyb20gXCJzaG9ydGlkXCI7XHJcbmltcG9ydCBwcm9kdWNlIGZyb20gXCJpbW1lclwiO1xyXG4vLyBpbXBvcnQgZmFrZXIgZnJvbSBcImZha2VyXCI7XHJcblxyXG5leHBvcnQgY29uc3QgaW5pdGlhbFN0YXRlID0ge1xyXG4gIC8qXHJcbiAgLy8gbWFpblBvc3RzOiBbXHJcbiAgLy8gICAvLyB7XHJcbiAgLy8gICAvLyAgIGlkOiAxLFxyXG4gIC8vICAgLy8gICBVc2VyOiB7XHJcbiAgLy8gICAvLyAgICAgaWQ6IDEsXHJcbiAgLy8gICAvLyAgICAgbmlja25hbWU6IFwiS2V2aW5cIixcclxuICAvLyAgIC8vICAgfSxcclxuICAvLyAgIC8vICAgY29udGVudDogXCJGaXJzdCBQb3N0ICNIYXNoVGFnLCAjRXhwcmVzc1wiLFxyXG4gIC8vICAgLy8gICAvLyBJbWFnZXM6IFtcclxuICAvLyAgIC8vICAgLy8gICB7XHJcbiAgLy8gICAvLyAgIC8vICAgICBzcmM6IFwiaHR0cHM6Ly9yZXMuY2xvdWRpbmFyeS5jb20vaGlnaGVyZWR1Y2F0aW9uL2ltYWdlL3VwbG9hZC9jX3NjYWxlLHdfNzUwL2ZfYXV0byxmbF9sb3NzeSxxX2F1dG86ZWNvL3YxNTMyOTg4ODY0L1RoZUJlc3RDb2xsZWdlcy5vcmcvaW1hZ2VzL3N0dWR5LW5vdGVib29rcy5qcGdcIixcclxuICAvLyAgIC8vICAgLy8gICB9LFxyXG4gIC8vICAgLy8gICAvLyAgIHtcclxuICAvLyAgIC8vICAgLy8gICAgIHNyYzogXCJodHRwczovL3d3dy5mYXN0d2ViLmNvbS91cGxvYWRzL2FydGljbGVfcGhvdG8vcGhvdG8vMjE2MS9jcm9wMzgwd19pc3RvY2tfMDAwMDAyMTkzODQyeHNtYWxsLWJvb2tzLmpwZ1wiLFxyXG4gIC8vICAgLy8gICAvLyAgIH0sXHJcbiAgLy8gICAvLyAgIC8vICAge1xyXG4gIC8vICAgLy8gICAvLyAgICAgc3JjOiBcImh0dHBzOi8vd3d3Lmluc2lkZWhpZ2hlcmVkLmNvbS9zaXRlcy9kZWZhdWx0L3NlcnZlcl9maWxlcy9tZWRpYS9pU3RvY2stNTIwMzc0Mzc4LmpwZ1wiLFxyXG4gIC8vICAgLy8gICAvLyAgIH0sXHJcbiAgLy8gICAvLyAgIC8vIF0sXHJcbiAgLy8gICAvLyAgIEltYWdlczogW1xyXG4gIC8vICAgLy8gICAgIHtcclxuICAvLyAgIC8vICAgICAgIGlkOiBzaG9ydElkLmdlbmVyYXRlKCksXHJcbiAgLy8gICAvLyAgICAgICBzcmM6IFwiaHR0cHM6Ly9ib29rdGh1bWItcGhpbmYucHN0YXRpYy5uZXQvY292ZXIvMTM3Lzk5NS8xMzc5OTU4NS5qcGc/dWRhdGU9MjAxODA3MjZcIixcclxuICAvLyAgIC8vICAgICB9LFxyXG4gIC8vICAgLy8gICAgIHtcclxuICAvLyAgIC8vICAgICAgIGlkOiBzaG9ydElkLmdlbmVyYXRlKCksXHJcbiAgLy8gICAvLyAgICAgICBzcmM6IFwiaHR0cHM6Ly9naW1nLmdpbGJ1dC5jby5rci9ib29rL0JOMDAxOTU4L3JuX3ZpZXdfQk4wMDE5NTguanBnXCIsXHJcbiAgLy8gICAvLyAgICAgfSxcclxuICAvLyAgIC8vICAgICB7XHJcbiAgLy8gICAvLyAgICAgICBpZDogc2hvcnRJZC5nZW5lcmF0ZSgpLFxyXG4gIC8vICAgLy8gICAgICAgc3JjOiBcImh0dHBzOi8vZ2ltZy5naWxidXQuY28ua3IvYm9vay9CTjAwMTk5OC9ybl92aWV3X0JOMDAxOTk4LmpwZ1wiLFxyXG4gIC8vICAgLy8gICAgIH0sXHJcbiAgLy8gICAvLyAgIF0sXHJcbiAgLy8gICAvLyAgIENvbW1lbnRzOiBbXHJcbiAgLy8gICAvLyAgICAge1xyXG4gIC8vICAgLy8gICAgICAgaWQ6IHNob3J0SWQuZ2VuZXJhdGUoKSxcclxuICAvLyAgIC8vICAgICAgIFVzZXI6IHtcclxuICAvLyAgIC8vICAgICAgICAgaWQ6IHNob3J0SWQuZ2VuZXJhdGUoKSxcclxuICAvLyAgIC8vICAgICAgICAgbmlja25hbWU6IFwibmVyb1wiLFxyXG4gIC8vICAgLy8gICAgICAgfSxcclxuICAvLyAgIC8vICAgICAgIGNvbnRlbnQ6IFwiR3JlYXQgcG9zdCFcIixcclxuICAvLyAgIC8vICAgICB9LFxyXG4gIC8vICAgLy8gICAgIHtcclxuICAvLyAgIC8vICAgICAgIGlkOiBzaG9ydElkLmdlbmVyYXRlKCksXHJcbiAgLy8gICAvLyAgICAgICBVc2VyOiB7XHJcbiAgLy8gICAvLyAgICAgICAgIGlkOiBzaG9ydElkLmdlbmVyYXRlKCksXHJcbiAgLy8gICAvLyAgICAgICAgIG5pY2tuYW1lOiBcImphZWhhblwiLFxyXG4gIC8vICAgLy8gICAgICAgfSxcclxuICAvLyAgIC8vICAgICAgIGNvbnRlbnQ6IGBpdCdzIHJlYWxseSBlZHVjYXRpb25hbGAsXHJcbiAgLy8gICAvLyAgICAgfSxcclxuICAvLyAgIC8vICAgXSxcclxuICAvLyAgIC8vIH0sXHJcbiAgLy8gXSxcclxuICAqL1xyXG4gIG1haW5Qb3N0czogW10sXHJcbiAgaW1hZ2VQYXRoczogW10sXHJcbiAgaGFzTW9yZVBvc3RzOiB0cnVlLFxyXG4gIGxpa2VQb3N0TG9hZGluZzogZmFsc2UsXHJcbiAgbGlrZVBvc3REb25lOiBmYWxzZSxcclxuICBsaWtlUG9zdEVycm9yOiBudWxsLFxyXG4gIHVubGlrZVBvc3RMb2FkaW5nOiBmYWxzZSxcclxuICB1bmxpa2VQb3N0RG9uZTogZmFsc2UsXHJcbiAgdW5saWtlUG9zdEVycm9yOiBudWxsLFxyXG4gIGxvYWRQb3N0c0xvYWRpbmc6IGZhbHNlLFxyXG4gIGxvYWRQb3N0c0RvbmU6IGZhbHNlLFxyXG4gIGxvYWRQb3N0c0Vycm9yOiBudWxsLFxyXG4gIGFkZFBvc3RMb2FkaW5nOiBmYWxzZSxcclxuICBhZGRQb3N0RG9uZTogZmFsc2UsXHJcbiAgYWRkUG9zdEVycm9yOiBudWxsLFxyXG4gIHJlbW92ZVBvc3RMb2FkaW5nOiBmYWxzZSxcclxuICByZW1vdmVQb3N0RG9uZTogZmFsc2UsXHJcbiAgcmVtb3ZlUG9zdEVycm9yOiBudWxsLFxyXG4gIGFkZENvbW1lbnRMb2FkaW5nOiBmYWxzZSxcclxuICBhZGRDb21tZW50RG9uZTogZmFsc2UsXHJcbiAgYWRkQ29tbWVudEVycm9yOiBudWxsLFxyXG5cclxuICB1cGxvYWRJbWFnZXNMb2FkaW5nOiBmYWxzZSxcclxuICB1cGxvYWRJbWFnZXNEb25lOiBmYWxzZSxcclxuICB1cGxvYWRJbWFnZXNFcnJvcjogbnVsbCxcclxuXHJcbiAgcmV0d2VldExvYWRpbmc6IGZhbHNlLFxyXG4gIHJldHdlZXREb25lOiBmYWxzZSxcclxuICByZXR3ZWV0RXJyb3I6IG51bGwsXHJcbn07XHJcblxyXG4vKlxyXG5leHBvcnQgY29uc3QgZ2VuZXJhdGVEdW1teVBvc3QgPSAobnVtYmVyKSA9PlxyXG4gIEFycmF5KG51bWJlcilcclxuICAgIC5maWxsKClcclxuICAgIC5tYXAoKCkgPT4gKHtcclxuICAgICAgaWQ6IHNob3J0SWQuZ2VuZXJhdGUoKSxcclxuICAgICAgVXNlcjoge1xyXG4gICAgICAgIGlkOiBzaG9ydElkLmdlbmVyYXRlKCksXHJcbiAgICAgICAgbmlja25hbWU6IGZha2VyLm5hbWUuZmluZE5hbWUoKSxcclxuICAgICAgfSxcclxuICAgICAgY29udGVudDogZmFrZXIubG9yZW0ucGFyYWdyYXBoKCksXHJcbiAgICAgIEltYWdlczogW1xyXG4gICAgICAgIHtcclxuICAgICAgICAgIHNyYzogZmFrZXIuaW1hZ2UuaW1hZ2UoKSxcclxuICAgICAgICB9LFxyXG4gICAgICBdLFxyXG4gICAgICBDb21tZW50czogW1xyXG4gICAgICAgIHtcclxuICAgICAgICAgIFVzZXI6IHtcclxuICAgICAgICAgICAgaWQ6IHNob3J0SWQuZ2VuZXJhdGUoKSxcclxuICAgICAgICAgICAgbmlja25hbWU6IGZha2VyLm5hbWUuZmluZE5hbWUoKSxcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgICBjb250ZW50OiBmYWtlci5sb3JlbS5zZW50ZW5jZSgpLFxyXG4gICAgICAgIH0sXHJcbiAgICAgIF0sXHJcbiAgICB9KSk7XHJcbiAgICAqL1xyXG4vLyBpbml0aWFsU3RhdGUubWFpblBvc3RzID0gaW5pdGlhbFN0YXRlLm1haW5Qb3N0cy5jb25jYXQoZ2VuZXJhdGVEdW1teVBvc3QoMTApKTtcclxuXHJcbmV4cG9ydCBjb25zdCBSRVRXRUVUX1JFUVVFU1QgPSBcIlJFVFdFRVRfUkVRVUVTVFwiO1xyXG5leHBvcnQgY29uc3QgUkVUV0VFVF9TVUNDRVNTID0gXCJSRVRXRUVUX1NVQ0NFU1NcIjtcclxuZXhwb3J0IGNvbnN0IFJFVFdFRVRfRkFJTFVSRSA9IFwiUkVUV0VFVF9GQUlMVVJFXCI7XHJcblxyXG5leHBvcnQgY29uc3QgVVBMT0FEX0lNQUdFU19SRVFVRVNUID0gXCJVUExPQURfSU1BR0VTX1JFUVVFU1RcIjtcclxuZXhwb3J0IGNvbnN0IFVQTE9BRF9JTUFHRVNfU1VDQ0VTUyA9IFwiVVBMT0FEX0lNQUdFU19TVUNDRVNTXCI7XHJcbmV4cG9ydCBjb25zdCBVUExPQURfSU1BR0VTX0ZBSUxVUkUgPSBcIlVQTE9BRF9JTUFHRVNfRkFJTFVSRVwiO1xyXG5cclxuZXhwb3J0IGNvbnN0IFJFTU9WRV9JTUFHRSA9IFwiUkVNT1ZFX0lNQUdFXCI7IC8vUmVtb3ZlIEltYWdl6rK97JqwIO2VmOuCmOunjCDrp4zrk6TrqbQg65CoKOuPmeq4sOydtOq4sCDrlYzrrLjsl5ApLiDrp4zslb0g7ISc67KE7JeQ7ISc64+EIOu5vOyjvOqzoCDsi7bri6TrqbQg67O07Ya1IOuLpOuluCDqsoPrk6Tqs7wg6rCZ7J20IHJlcXVlc3Qsc3VjY2VzcyxmYWlsdXJlIOuLpCDtlbTspJjslbwg7ZWoLiBpbWFnZeydmCDqsr3smrAg7ISc67KE7JeQ7IScIOqwgOyngOqzoCDsnojripTqsowg642UIOydtOuTneydtOq4sOuVjOusuOyXkCDtlITroaDtirjsl5DshJzrp4wg7KeA7JuM7KO864qUIOqyveyasOqwgCDrp47slZQuICjsp4DquIjsnYAg7ZSE66Gg7Yq47JeQ7ISc66eMIOyngOyasOq4sOuVjOusuOyXkCByZXF1ZXN0LHN1Y2Nlc3MsZmFpbHVyZeuTseydtCDtlYTsmpQg7JeG7J2MKVxyXG5cclxuZXhwb3J0IGNvbnN0IExJS0VfUE9TVF9SRVFVRVNUID0gXCJMSUtFX1BPU1RfUkVRVUVTVFwiO1xyXG5leHBvcnQgY29uc3QgTElLRV9QT1NUX1NVQ0NFU1MgPSBcIkxJS0VfUE9TVF9TVUNDRVNTXCI7XHJcbmV4cG9ydCBjb25zdCBMSUtFX1BPU1RfRkFJTFVSRSA9IFwiTElLRV9QT1NUX0ZBSUxVUkVcIjtcclxuXHJcbmV4cG9ydCBjb25zdCBVTkxJS0VfUE9TVF9SRVFVRVNUID0gXCJVTkxJS0VfUE9TVF9SRVFVRVNUXCI7XHJcbmV4cG9ydCBjb25zdCBVTkxJS0VfUE9TVF9TVUNDRVNTID0gXCJVTkxJS0VfUE9TVF9TVUNDRVNTXCI7XHJcbmV4cG9ydCBjb25zdCBVTkxJS0VfUE9TVF9GQUlMVVJFID0gXCJVTkxJS0VfUE9TVF9GQUlMVVJFXCI7XHJcblxyXG5leHBvcnQgY29uc3QgTE9BRF9QT1NUU19SRVFVRVNUID0gXCJMT0FEX1BPU1RTX1JFUVVFU1RcIjtcclxuZXhwb3J0IGNvbnN0IExPQURfUE9TVFNfU1VDQ0VTUyA9IFwiTE9BRF9QT1NUU19TVUNDRVNTXCI7XHJcbmV4cG9ydCBjb25zdCBMT0FEX1BPU1RTX0ZBSUxVUkUgPSBcIkxPQURfUE9TVFNfRkFJTFVSRVwiO1xyXG5cclxuZXhwb3J0IGNvbnN0IEFERF9QT1NUX1JFUVVFU1QgPSBcIkFERF9QT1NUX1JFUVVFU1RcIjtcclxuZXhwb3J0IGNvbnN0IEFERF9QT1NUX1NVQ0NFU1MgPSBcIkFERF9QT1NUX1NVQ0NFU1NcIjtcclxuZXhwb3J0IGNvbnN0IEFERF9QT1NUX0ZBSUxVUkUgPSBcIkFERF9QT1NUX0ZBSUxVUkVcIjtcclxuXHJcbmV4cG9ydCBjb25zdCBSRU1PVkVfUE9TVF9SRVFVRVNUID0gXCJSRU1PVkVfUE9TVF9SRVFVRVNUXCI7XHJcbmV4cG9ydCBjb25zdCBSRU1PVkVfUE9TVF9TVUNDRVNTID0gXCJSRU1PVkVfUE9TVF9TVUNDRVNTXCI7XHJcbmV4cG9ydCBjb25zdCBSRU1PVkVfUE9TVF9GQUlMVVJFID0gXCJSRU1PVkVfUE9TVF9GQUlMVVJFXCI7XHJcblxyXG5leHBvcnQgY29uc3QgQUREX0NPTU1FTlRfUkVRVUVTVCA9IFwiQUREX0NPTU1FTlRfUkVRVUVTVFwiO1xyXG5leHBvcnQgY29uc3QgQUREX0NPTU1FTlRfU1VDQ0VTUyA9IFwiQUREX0NPTU1FTlRfU1VDQ0VTU1wiO1xyXG5leHBvcnQgY29uc3QgQUREX0NPTU1FTlRfRkFJTFVSRSA9IFwiQUREX0NPTU1FTlRfRkFJTFVSRVwiO1xyXG5cclxuZXhwb3J0IGNvbnN0IGFkZFBvc3QgPSAoZGF0YSkgPT4gKHtcclxuICB0eXBlOiBBRERfUE9TVF9SRVFVRVNULFxyXG4gIGRhdGEsXHJcbn0pO1xyXG5leHBvcnQgY29uc3QgYWRkQ29tbWVudCA9IChkYXRhKSA9PiAoe1xyXG4gIHR5cGU6IEFERF9DT01NRU5UX1JFUVVFU1QsXHJcbiAgZGF0YSxcclxufSk7XHJcblxyXG4vKlxyXG5jb25zdCBkdW1teVBvc3QgPSAoZGF0YSkgPT4gKHtcclxuICBpZDogZGF0YS5pZCxcclxuICBjb250ZW50OiBkYXRhLmNvbnRlbnQsXHJcbiAgVXNlcjoge1xyXG4gICAgaWQ6IDEsXHJcbiAgICBuaWNrbmFtZTogXCJLZXZpblwiLFxyXG4gIH0sXHJcbiAgSW1hZ2VzOiBbXSxcclxuICBDb21tZW50czogW10sXHJcbn0pO1xyXG5cclxuY29uc3QgZHVtbXlDb21tZW50ID0gKGRhdGEpID0+ICh7XHJcbiAgaWQ6IHNob3J0SWQuZ2VuZXJhdGUoKSxcclxuICBjb250ZW50OiBkYXRhLFxyXG4gIFVzZXI6IHtcclxuICAgIGlkOiAxLFxyXG4gICAgbmlja25hbWU6IFwiS2V2aW5cIixcclxuICB9LFxyXG59KTtcclxuKi9cclxuXHJcbi8vcmVkdWNlcjog7J207KCEIOyDge2DnOulvCDslaHshZjsnYQg7Ya17ZW0IOuLpOydjCDsg4Htg5zroZwg66eM65Ok7Ja064K064qUIO2VqOyImCAo67aI67OA7ISx7J2AIOyngO2CpOuptOyEnClcclxuY29uc3QgcmVkdWNlciA9IChzdGF0ZSA9IGluaXRpYWxTdGF0ZSwgYWN0aW9uKSA9PiB7XHJcbiAgLy8gaW1tZXI6IOydtOyghCDsg4Htg5zrpbwg7JWh7IWY7J2EIO2Gte2VtCDri6TsnYwg7IOB7YOc66GcIOunjOuTpOyWtOuCtOuKlCDtlajsiJggKOu2iOuzgOyEsSDslYjsp4DsvJzrj4QgaW1tZXLqsIAg7JWM7JWE7IScIOyngOy8nOykjC4pXHJcbiAgLy8g7Jes6riw67aA7YSw64qUIGRyYWZ06rCAIHN0YXRl7LKY65+8IOyCrOyaqeuQmOqzoCDsnbTqsbQg66eJIOuwlOq/lOuPhCDrkKguIChpbW1lcuqwgCDslYzslYTshJwg7LKY66as7ZW0IOyjvOuvgOuhnClcclxuICByZXR1cm4gcHJvZHVjZShzdGF0ZSwgKGRyYWZ0KSA9PiB7XHJcbiAgICBzd2l0Y2ggKGFjdGlvbi50eXBlKSB7XHJcbiAgICAgIGNhc2UgUkVUV0VFVF9SRVFVRVNUOiB7XHJcbiAgICAgICAgZHJhZnQucmV0d2VldExvYWRpbmcgPSB0cnVlO1xyXG4gICAgICAgIGRyYWZ0LnJldHdlZXREb25lID0gZmFsc2U7XHJcbiAgICAgICAgZHJhZnQucmV0d2VldEVycm9yID0gbnVsbDtcclxuICAgICAgICBicmVhaztcclxuICAgICAgfVxyXG4gICAgICBjYXNlIFJFVFdFRVRfU1VDQ0VTUzoge1xyXG4gICAgICAgIGRyYWZ0LnJldHdlZXRMb2FkaW5nID0gZmFsc2U7XHJcbiAgICAgICAgZHJhZnQucmV0d2VldERvbmUgPSB0cnVlO1xyXG4gICAgICAgIGRyYWZ0Lm1haW5Qb3N0cy51bnNoaWZ0KGFjdGlvbi5kYXRhKTtcclxuICAgICAgICBicmVhaztcclxuICAgICAgfVxyXG4gICAgICBjYXNlIFJFVFdFRVRfRkFJTFVSRToge1xyXG4gICAgICAgIGRyYWZ0LnJldHdlZXRMb2FkaW5nID0gZmFsc2U7XHJcbiAgICAgICAgZHJhZnQucmV0d2VldEVycm9yID0gYWN0aW9uLmVycm9yO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICB9XHJcblxyXG4gICAgICAvLyDslYTrnpjqsIAgcmVxdWVzdCwgc3VjY2VzcywgZmFpbHVyZeqwgCDslYTri4wgcmVtb3ZlX2ltYWdlIO2VmOuCmOyduCDsnbTsnKDripQg64+Z6riwIO2VqOyImOydtOq4sCDrlYzrrLguIChiYWNrLWVuZOyXkOyEnCDsmpTssq3snYQg6riw64uk66Ck7IScIOuwm+uKlOqyjCDslYTri4wg6re464OlIGZyb250LWVuZOy4oeyXkOyEnOunjCDsp4DsmrDqs6AsIGJhY2tlbmTsl5DshJzripQg7IKs7KeE7J2EIOuCqOqyqCDrkaAuKVxyXG4gICAgICBjYXNlIFJFTU9WRV9JTUFHRToge1xyXG4gICAgICAgIGRyYWZ0LmltYWdlUGF0aHMgPSBkcmFmdC5pbWFnZVBhdGhzLmZpbHRlcigodiwgaSkgPT4gaSAhPT0gYWN0aW9uLmRhdGEpO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICB9XHJcblxyXG4gICAgICBjYXNlIFVQTE9BRF9JTUFHRVNfUkVRVUVTVDoge1xyXG4gICAgICAgIGRyYWZ0LnVwbG9hZEltYWdlc0xvYWRpbmcgPSB0cnVlO1xyXG4gICAgICAgIGRyYWZ0LnVwbG9hZEltYWdlc0RvbmUgPSBmYWxzZTtcclxuICAgICAgICBkcmFmdC51cGxvYWRJbWFnZXNFcnJvciA9IG51bGw7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIH1cclxuICAgICAgY2FzZSBVUExPQURfSU1BR0VTX1NVQ0NFU1M6IHtcclxuICAgICAgICBkcmFmdC51cGxvYWRJbWFnZXNMb2FkaW5nID0gZmFsc2U7XHJcbiAgICAgICAgZHJhZnQudXBsb2FkSW1hZ2VzRG9uZSA9IHRydWU7XHJcbiAgICAgICAgZHJhZnQuaW1hZ2VQYXRocyA9IGFjdGlvbi5kYXRhO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICB9XHJcbiAgICAgIGNhc2UgVVBMT0FEX0lNQUdFU19GQUlMVVJFOiB7XHJcbiAgICAgICAgZHJhZnQudXBsb2FkSW1hZ2VzTG9hZGluZyA9IGZhbHNlO1xyXG4gICAgICAgIGRyYWZ0LnVwbG9hZEltYWdlc0Vycm9yID0gYWN0aW9uLmVycm9yO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICB9XHJcblxyXG4gICAgICBjYXNlIExJS0VfUE9TVF9SRVFVRVNUOiB7XHJcbiAgICAgICAgZHJhZnQubGlrZVBvc3RMb2FkaW5nID0gdHJ1ZTtcclxuICAgICAgICBkcmFmdC5saWtlUG9zdERvbmUgPSBmYWxzZTtcclxuICAgICAgICBkcmFmdC5saWtlUG9zdEVycm9yID0gbnVsbDtcclxuICAgICAgICBicmVhaztcclxuICAgICAgfVxyXG4gICAgICBjYXNlIExJS0VfUE9TVF9TVUNDRVNTOiB7XHJcbiAgICAgICAgY29uc3QgcG9zdCA9IGRyYWZ0Lm1haW5Qb3N0cy5maW5kKCh2KSA9PiB2LmlkID09PSBhY3Rpb24uZGF0YS5Qb3N0SWQpO1xyXG4gICAgICAgIHBvc3QuTGlrZXJzLnB1c2goeyBpZDogYWN0aW9uLmRhdGEuVXNlcklkIH0pO1xyXG4gICAgICAgIGRyYWZ0Lmxpa2VQb3N0TG9hZGluZyA9IGZhbHNlO1xyXG4gICAgICAgIGRyYWZ0Lmxpa2VQb3N0RG9uZSA9IHRydWU7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIH1cclxuICAgICAgY2FzZSBMSUtFX1BPU1RfRkFJTFVSRToge1xyXG4gICAgICAgIGRyYWZ0Lmxpa2VQb3N0TG9hZGluZyA9IGZhbHNlO1xyXG4gICAgICAgIGRyYWZ0Lmxpa2VQb3N0RXJyb3IgPSBhY3Rpb24uZXJyb3I7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGNhc2UgVU5MSUtFX1BPU1RfUkVRVUVTVDoge1xyXG4gICAgICAgIGRyYWZ0LnVubGlrZVBvc3RMb2FkaW5nID0gdHJ1ZTtcclxuICAgICAgICBkcmFmdC51bmxpa2VQb3N0RG9uZSA9IGZhbHNlO1xyXG4gICAgICAgIGRyYWZ0LnVubGlrZVBvc3RFcnJvciA9IG51bGw7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIH1cclxuICAgICAgY2FzZSBVTkxJS0VfUE9TVF9TVUNDRVNTOiB7XHJcbiAgICAgICAgY29uc3QgcG9zdCA9IGRyYWZ0Lm1haW5Qb3N0cy5maW5kKCh2KSA9PiB2LmlkID09PSBhY3Rpb24uZGF0YS5Qb3N0SWQpO1xyXG4gICAgICAgIHBvc3QuTGlrZXJzID0gcG9zdC5MaWtlcnMuZmlsdGVyKCh2KSA9PiB2LmlkICE9PSBhY3Rpb24uZGF0YS5Vc2VySWQpO1xyXG4gICAgICAgIGRyYWZ0LnVubGlrZVBvc3RMb2FkaW5nID0gZmFsc2U7XHJcbiAgICAgICAgZHJhZnQudW5saWtlUG9zdERvbmUgPSB0cnVlO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICB9XHJcbiAgICAgIGNhc2UgVU5MSUtFX1BPU1RfRkFJTFVSRTpcclxuICAgICAgICBkcmFmdC51bmxpa2VQb3N0TG9hZGluZyA9IGZhbHNlO1xyXG4gICAgICAgIGRyYWZ0LnVubGlrZVBvc3RFcnJvciA9IGFjdGlvbi5lcnJvcjtcclxuICAgICAgICBicmVhaztcclxuXHJcbiAgICAgIGNhc2UgTE9BRF9QT1NUU19SRVFVRVNUOiB7XHJcbiAgICAgICAgZHJhZnQubG9hZFBvc3RzTG9hZGluZyA9IHRydWU7XHJcbiAgICAgICAgZHJhZnQubG9hZFBvc3RzRG9uZSA9IGZhbHNlO1xyXG4gICAgICAgIGRyYWZ0LmxvYWRQb3N0c0Vycm9yID0gbnVsbDtcclxuICAgICAgICBicmVhaztcclxuICAgICAgfVxyXG4gICAgICBjYXNlIExPQURfUE9TVFNfU1VDQ0VTUzoge1xyXG4gICAgICAgIGRyYWZ0LmxvYWRQb3N0c0xvYWRpbmcgPSBmYWxzZTtcclxuICAgICAgICBkcmFmdC5sb2FkUG9zdHNEb25lID0gdHJ1ZTtcclxuICAgICAgICBkcmFmdC5tYWluUG9zdHMgPSBkcmFmdC5tYWluUG9zdHMuY29uY2F0KGFjdGlvbi5kYXRhKTtcclxuICAgICAgICBkcmFmdC5oYXNNb3JlUG9zdHMgPSBhY3Rpb24uZGF0YS5sZW5ndGggPT09IDEwO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICB9XHJcbiAgICAgIGNhc2UgTE9BRF9QT1NUU19GQUlMVVJFOlxyXG4gICAgICAgIGRyYWZ0LmxvYWRQb3N0c0xvYWRpbmcgPSBmYWxzZTtcclxuICAgICAgICBkcmFmdC5sb2FkUG9zdHNFcnJvciA9IGFjdGlvbi5lcnJvcjtcclxuICAgICAgICBicmVhaztcclxuXHJcbiAgICAgIGNhc2UgQUREX1BPU1RfUkVRVUVTVDoge1xyXG4gICAgICAgIGRyYWZ0LmFkZFBvc3RMb2FkaW5nID0gdHJ1ZTtcclxuICAgICAgICBkcmFmdC5hZGRQb3N0RG9uZSA9IGZhbHNlO1xyXG4gICAgICAgIGRyYWZ0LmFkZFBvc3RFcnJvciA9IG51bGw7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgLy8gcmV0dXJuIHsgLi4uc3RhdGUsIGFkZFBvc3RMb2FkaW5nOiB0cnVlLCBhZGRQb3N0RG9uZTogZmFsc2UsIGFkZFBvc3RFcnJvcjogbnVsbCB9O1xyXG4gICAgICB9XHJcbiAgICAgIGNhc2UgQUREX1BPU1RfU1VDQ0VTUzoge1xyXG4gICAgICAgIGRyYWZ0LmFkZFBvc3RMb2FkaW5nID0gZmFsc2U7XHJcbiAgICAgICAgZHJhZnQuYWRkUG9zdERvbmUgPSB0cnVlO1xyXG4gICAgICAgIC8vIGRyYWZ0Lm1haW5Qb3N0cyA9IFtkdW1teVBvc3QoYWN0aW9uLmRhdGEpLCAuLi5zdGF0ZS5tYWluUG9zdHNdOyAvLyDsnbTroIfqsowg7ZWY6rGw64KYIO2YueydgCDslYTrnpjsmYAg6rCZ7J20IHVuc2hpZnTsgqzsmqkg7ZWY66m0IOuwsOyXtOqwkuydhCDrlLDroZwg7KCV7J2Y7JWI7ZWY6rOgICguLi7snbQg7IKs6528IOynkCkg67CU66GcIOyCrOyaqeqwgOuKpSDtlahcclxuICAgICAgICAvLyBkcmFmdC5tYWluUG9zdHMudW5zaGlmdChkdW1teVBvc3QoYWN0aW9uLmRhdGEpKTtcclxuICAgICAgICBkcmFmdC5tYWluUG9zdHMudW5zaGlmdChhY3Rpb24uZGF0YSk7XHJcbiAgICAgICAgZHJhZnQuaW1hZ2VQYXRocyA9IFtdO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICAgIC8vIGFjdGlvbi5kYXRhLmNvbnRlbnQsIHBvc3RJZCwgdXNlcklkO1xyXG4gICAgICAgIC8vIHJldHVybiB7XHJcbiAgICAgICAgLy8gICAuLi5zdGF0ZSxcclxuICAgICAgICAvLyAgIG1haW5Qb3N0czogW2R1bW15UG9zdChhY3Rpb24uZGF0YSksIC4uLnN0YXRlLm1haW5Qb3N0c10sXHJcbiAgICAgICAgLy8gICBhZGRQb3N0TG9hZGluZzogZmFsc2UsXHJcbiAgICAgICAgLy8gICBhZGRQb3N0RG9uZTogdHJ1ZSxcclxuICAgICAgICAvLyB9O1xyXG4gICAgICB9XHJcbiAgICAgIGNhc2UgQUREX1BPU1RfRkFJTFVSRTpcclxuICAgICAgICBkcmFmdC5hZGRQb3N0TG9hZGluZyA9IGZhbHNlO1xyXG4gICAgICAgIGRyYWZ0LmFkZFBvc3RFcnJvciA9IGFjdGlvbi5lcnJvcjtcclxuICAgICAgICBicmVhaztcclxuICAgICAgLy8gcmV0dXJuIHsgLi4uc3RhdGUsIGFkZFBvc3RMb2FkaW5nOiBmYWxzZSwgYWRkUG9zdEVycm9yOiBhY3Rpb24uZXJyb3IgfTtcclxuICAgICAgY2FzZSBSRU1PVkVfUE9TVF9SRVFVRVNUOiB7XHJcbiAgICAgICAgZHJhZnQucmVtb3ZlUG9zdExvYWRpbmcgPSB0cnVlO1xyXG4gICAgICAgIGRyYWZ0LnJlbW92ZVBvc3REb25lID0gZmFsc2U7XHJcbiAgICAgICAgZHJhZnQucmVtb3ZlUG9zdEVycm9yID0gbnVsbDtcclxuICAgICAgICBicmVhaztcclxuICAgICAgICAvLyByZXR1cm4geyAuLi5zdGF0ZSwgcmVtb3ZlUG9zdExvYWRpbmc6IHRydWUsIHJlbW92ZVBvc3REb25lOiBmYWxzZSwgcmVtb3ZlUG9zdEVycm9yOiBudWxsIH07XHJcbiAgICAgIH1cclxuICAgICAgY2FzZSBSRU1PVkVfUE9TVF9TVUNDRVNTOiB7XHJcbiAgICAgICAgLy8gYWN0aW9uLmRhdGEuY29udGVudCwgcG9zdElkLCB1c2VySWQ7XHJcbiAgICAgICAgZHJhZnQucmVtb3ZlUG9zdExvYWRpbmcgPSBmYWxzZTtcclxuICAgICAgICBkcmFmdC5yZW1vdmVQb3N0RG9uZSA9IHRydWU7XHJcbiAgICAgICAgZHJhZnQubWFpblBvc3RzID0gZHJhZnQubWFpblBvc3RzLmZpbHRlcigodikgPT4gdi5pZCAhPT0gYWN0aW9uLmRhdGEuUG9zdElkKTtcclxuICAgICAgICBicmVhaztcclxuICAgICAgICAvKlxyXG4gICAgICAgIC8vIHJldHVybiB7XHJcbiAgICAgICAgLy8gICAuLi5zdGF0ZSxcclxuICAgICAgICAvLyAgIG1haW5Qb3N0czogc3RhdGUubWFpblBvc3RzLmZpbHRlcigodikgPT4gdi5pZCAhPT0gYWN0aW9uLmRhdGEpLFxyXG4gICAgICAgIC8vICAgcmVtb3ZlUG9zdExvYWRpbmc6IGZhbHNlLFxyXG4gICAgICAgIC8vICAgcmVtb3ZlUG9zdERvbmU6IHRydWUsXHJcbiAgICAgICAgLy8gfTtcclxuICAgICAgICAqL1xyXG4gICAgICB9XHJcbiAgICAgIGNhc2UgUkVNT1ZFX1BPU1RfRkFJTFVSRTpcclxuICAgICAgICBkcmFmdC5yZW1vdmVQb3N0TG9hZGluZyA9IGZhbHNlO1xyXG4gICAgICAgIGRyYWZ0LnJlbW92ZVBvc3RFcnJvciA9IHRydWU7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIC8vIHJldHVybiB7IC4uLnN0YXRlLCByZW1vdmVQb3N0TG9hZGluZzogZmFsc2UsIHJlbW92ZVBvc3RFcnJvcjogYWN0aW9uLmVycm9yIH07XHJcblxyXG4gICAgICBjYXNlIEFERF9DT01NRU5UX1JFUVVFU1Q6IHtcclxuICAgICAgICBkcmFmdC5hZGRDb21tZW50TG9hZGluZyA9IHRydWU7XHJcbiAgICAgICAgZHJhZnQuYWRkQ29tbWVudERvbmUgPSBmYWxzZTtcclxuICAgICAgICBkcmFmdC5hZGRDb21tZW50RXJyb3IgPSBudWxsO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICAgIC8vIHJldHVybiB7IC4uLnN0YXRlLCBhZGRDb21tZW50TG9hZGluZzogdHJ1ZSwgYWRkQ29tbWVudERvbmU6IGZhbHNlLCBhZGRDb21tZW50RXJyb3I6IG51bGwgfTtcclxuICAgICAgfVxyXG5cclxuICAgICAgLy/slYTrnpgg67aA67aEIOydtO2VtCDslYjrkJjrqbQg6rKM7Iuc6riALOuMk+q4gCBzYWdhIOyekeyEsSDtlZjquLAg64uk7IucIOyytO2BrC4gMTE6MzDrtoQg7KCV64+EXHJcbiAgICAgIGNhc2UgQUREX0NPTU1FTlRfU1VDQ0VTUzoge1xyXG4gICAgICAgIGNvbnN0IHBvc3QgPSBkcmFmdC5tYWluUG9zdHMuZmluZCgodikgPT4gdi5pZCA9PT0gYWN0aW9uLmRhdGEuUG9zdElkKTtcclxuICAgICAgICBwb3N0LkNvbW1lbnRzLnVuc2hpZnQoYWN0aW9uLmRhdGEpO1xyXG4gICAgICAgIGRyYWZ0LmFkZENvbW1lbnRMb2FkaW5nID0gZmFsc2U7XHJcbiAgICAgICAgZHJhZnQuYWRkQ29tbWVudERvbmUgPSB0cnVlO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICAgIC8v7JyE64qUIGltbWVy66W8IO2Gte2VtOyEnCDrtojrs4DshLEg7Iug6rK97JWI7JOw6rOgIOy9lOuUqe2VqC4g7JWE656Y64qUIOq4sOyhtCDrsKnsi53snLzroZwg67aI67OA7ISxIOyLoOqyveyTsOqzoCDsvZTrlKntlZwg64K07JqpXHJcbiAgICAgICAgLy8gY29uc3QgcG9zdEluZGV4ID0gc3RhdGUubWFpblBvc3RzLmZpbmRJbmRleCgodikgPT4gdi5pZCA9PT0gYWN0aW9uLmRhdGEucG9zdElkKTtcclxuICAgICAgICAvLyBjb25zdCBwb3N0ID0geyAuLi5zdGF0ZS5tYWluUG9zdHNbcG9zdEluZGV4XSB9O1xyXG4gICAgICAgIC8vIHBvc3QuQ29tbWVudHMgPSBbZHVtbXlDb21tZW50KGFjdGlvbi5kYXRhLmNvbnRlbnQpLCAuLi5wb3N0LkNvbW1lbnRzXTtcclxuICAgICAgICAvLyBjb25zdCBtYWluUG9zdHMgPSBbLi4uc3RhdGUubWFpblBvc3RzXTtcclxuICAgICAgICAvLyBtYWluUG9zdHNbcG9zdEluZGV4XSA9IHBvc3Q7XHJcbiAgICAgICAgLy8gcmV0dXJuIHtcclxuICAgICAgICAvLyAgIC4uLnN0YXRlLFxyXG4gICAgICAgIC8vICAgbWFpblBvc3RzLFxyXG4gICAgICAgIC8vICAgYWRkQ29tbWVudExvYWRpbmc6IGZhbHNlLFxyXG4gICAgICAgIC8vICAgYWRkQ29tbWVudERvbmU6IHRydWUsXHJcbiAgICAgICAgLy8gfTtcclxuICAgICAgfVxyXG4gICAgICBjYXNlIEFERF9DT01NRU5UX0ZBSUxVUkU6XHJcbiAgICAgICAgZHJhZnQuYWRkQ29vbWVudExvYWRpbmcgPSBmYWxzZTtcclxuICAgICAgICBkcmFmdC5hZGRDb21tZW50RXJyb3IgPSBhY3Rpb24uZXJyb3I7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIC8vIHJldHVybiB7IC4uLnN0YXRlLCBhZGRDb21tZW50TG9hZGluZzogZmFsc2UsIGFkZENvbW1lbnRFcnJvcjogYWN0aW9uLmVycm9yIH07XHJcblxyXG4gICAgICBkZWZhdWx0OiB7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgLy8gcmV0dXJuIHsgLi4uc3RhdGUgfTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH0pO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgcmVkdWNlcjtcclxuIiwiaW1wb3J0IHByb2R1Y2UgZnJvbSBcImltbWVyXCI7XHJcblxyXG5leHBvcnQgY29uc3QgaW5pdGlhbFN0YXRlID0ge1xyXG4gIGxvYWRNeUluZm9Mb2FkaW5nOiBmYWxzZSwgLy8g7Jyg7KCAIOygleuztCDqsIDsoLjsmKTquLAg7Iuc64+E7KSRXHJcbiAgbG9hZE15SW5mb0RvbmU6IGZhbHNlLFxyXG4gIGxvYWRNeUluZm9FcnJvcjogbnVsbCxcclxuICB1bmZvbGxvd0xvYWRpbmc6IGZhbHNlLCAvLyDslrjtjJTroZzsmrAg7Iuc64+E7KSRXHJcbiAgdW5mb2xsb3dEb25lOiBmYWxzZSxcclxuICB1bmZvbGxvd0Vycm9yOiBudWxsLFxyXG4gIHJlbW92ZUZvbGxvd2VyTG9hZGluZzogZmFsc2UsIC8vIOyWuO2MlOuhnOyasCDsi5zrj4TspJFcclxuICByZW1vdmVGb2xsb3dlckRvbmU6IGZhbHNlLFxyXG4gIHJlbW92ZUZvbGxvd2VyRXJyb3I6IG51bGwsXHJcbiAgZm9sbG93TG9hZGluZzogZmFsc2UsIC8vIO2MlOuhnOyasCDsi5zrj4TspJFcclxuICBmb2xsb3dEb25lOiBmYWxzZSxcclxuICBmb2xsb3dFcnJvcjogbnVsbCxcclxuICBsb2FkRm9sbG93ZXJzTG9hZGluZzogZmFsc2UsIC8vIO2MlOuhnOybjCDsiKvsnpAg6rCA7KC47Jik6riwIOyLnOuPhOykkVxyXG4gIGxvYWRGb2xsb3dlcnNEb25lOiBmYWxzZSxcclxuICBsb2FkRm9sbG93ZXJzRXJyb3I6IG51bGwsXHJcbiAgbG9hZEZvbGxvd2luZ3NMb2FkaW5nOiBmYWxzZSwgLy8g7YyU66Gc7J6JIOyIq+yekCDqsIDsoLjsmKTquLAg7Iuc64+E7KSRXHJcbiAgbG9hZEZvbGxvd2luZ3NEb25lOiBmYWxzZSxcclxuICBsb2FkRm9sbG93aW5nc0Vycm9yOiBudWxsLFxyXG4gIGxvZ0luTG9hZGluZzogZmFsc2UsIC8vIOuhnOq3uOyduCDsi5zrj4TspJFcclxuICBsb2dJbkRvbmU6IGZhbHNlLFxyXG4gIGxvZ0luRXJyb3I6IG51bGwsXHJcbiAgbG9nT3V0TG9hZGluZzogZmFsc2UsIC8vIOuhnOq3uOyVhOybgyDsi5zrj4TspJFcclxuICBsb2dPdXREb25lOiBmYWxzZSxcclxuICBsb2dPdXRFcnJvcjogbnVsbCxcclxuICBzaWduVXBMb2FkaW5nOiBmYWxzZSwgLy8g7ZqM7JuQ6rCA7J6FIOyLnOuPhOykkVxyXG4gIHNpZ25VcERvbmU6IGZhbHNlLFxyXG4gIHNpZ25VcEVycm9yOiBudWxsLFxyXG4gIGNoYW5nZU5pY2tuYW1lTG9hZGluZzogZmFsc2UsIC8vIOuLieuEpOyehCDrs4Dqsr0g7Iuc64+E7KSRXHJcbiAgY2hhbmdlTmlja25hbWVEb25lOiBmYWxzZSxcclxuICBjaGFuZ2VOaWNrbmFtZUVycm9yOiBudWxsLFxyXG4gIG1lOiBudWxsLFxyXG4gIHNpZ25VcERhdGE6IHt9LFxyXG4gIGxvZ2luRGF0YToge30sXHJcbn07XHJcblxyXG5leHBvcnQgY29uc3QgTE9BRF9GT0xMT1dJTkdTX1JFUVVFU1QgPSBcIkxPQURfRk9MTE9XSU5HU19SRVFVRVNUXCI7XHJcbmV4cG9ydCBjb25zdCBMT0FEX0ZPTExPV0lOR1NfU1VDQ0VTUyA9IFwiTE9BRF9GT0xMT1dJTkdTX1NVQ0NFU1NcIjtcclxuZXhwb3J0IGNvbnN0IExPQURfRk9MTE9XSU5HU19GQUlMVVJFID0gXCJMT0FEX0ZPTExPV0lOR1NfRkFJTFVSRVwiO1xyXG5cclxuZXhwb3J0IGNvbnN0IExPQURfRk9MTE9XRVJTX1JFUVVFU1QgPSBcIkxPQURfRk9MTE9XRVJTX1JFUVVFU1RcIjtcclxuZXhwb3J0IGNvbnN0IExPQURfRk9MTE9XRVJTX1NVQ0NFU1MgPSBcIkxPQURfRk9MTE9XRVJTX1NVQ0NFU1NcIjtcclxuZXhwb3J0IGNvbnN0IExPQURfRk9MTE9XRVJTX0ZBSUxVUkUgPSBcIkxPQURfRk9MTE9XRVJTX0ZBSUxVUkVcIjtcclxuXHJcbmV4cG9ydCBjb25zdCBMT0FEX01ZX0lORk9fUkVRVUVTVCA9IFwiTE9BRF9NWV9JTkZPX1JFUVVFU1RcIjtcclxuZXhwb3J0IGNvbnN0IExPQURfTVlfSU5GT19TVUNDRVNTID0gXCJMT0FEX01ZX0lORk9fU1VDQ0VTU1wiO1xyXG5leHBvcnQgY29uc3QgTE9BRF9NWV9JTkZPX0ZBSUxVUkUgPSBcIkxPQURfTVlfSU5GT19GQUlMVVJFXCI7XHJcblxyXG5leHBvcnQgY29uc3QgTE9HX0lOX1JFUVVFU1QgPSBcIkxPR19JTl9SRVFVRVNUXCI7XHJcbmV4cG9ydCBjb25zdCBMT0dfSU5fU1VDQ0VTUyA9IFwiTE9HX0lOX1NVQ0NFU1NcIjtcclxuZXhwb3J0IGNvbnN0IExPR19JTl9GQUlMVVJFID0gXCJMT0dfSU5fRkFJTFVSRVwiO1xyXG5cclxuZXhwb3J0IGNvbnN0IExPR19PVVRfUkVRVUVTVCA9IFwiTE9HX09VVF9SRVFVRVNUXCI7XHJcbmV4cG9ydCBjb25zdCBMT0dfT1VUX1NVQ0NFU1MgPSBcIkxPR19PVVRfU1VDQ0VTU1wiO1xyXG5leHBvcnQgY29uc3QgTE9HX09VVF9GQUlMVVJFID0gXCJMT0dfT1VUX0ZBSUxVUkVcIjtcclxuXHJcbmV4cG9ydCBjb25zdCBTSUdOX1VQX1JFUVVFU1QgPSBcIlNJR05fVVBfUkVRVUVTVFwiO1xyXG5leHBvcnQgY29uc3QgU0lHTl9VUF9TVUNDRVNTID0gXCJTSUdOX1VQX1NVQ0NFU1NcIjtcclxuZXhwb3J0IGNvbnN0IFNJR05fVVBfRkFJTFVSRSA9IFwiU0lHTl9VUF9GQUlMVVJFXCI7XHJcblxyXG5leHBvcnQgY29uc3QgQ0hBTkdFX05JQ0tOQU1FX1JFUVVFU1QgPSBcIkNIQU5HRV9OSUNLTkFNRV9SRVFVRVNUXCI7XHJcbmV4cG9ydCBjb25zdCBDSEFOR0VfTklDS05BTUVfU1VDQ0VTUyA9IFwiQ0hBTkdFX05JQ0tOQU1FX1NVQ0NFU1NcIjtcclxuZXhwb3J0IGNvbnN0IENIQU5HRV9OSUNLTkFNRV9GQUlMVVJFID0gXCJDSEFOR0VfTklDS05BTUVfRkFJTFVSRVwiO1xyXG5cclxuZXhwb3J0IGNvbnN0IEZPTExPV19SRVFVRVNUID0gXCJGT0xMT1dfUkVRVUVTVFwiO1xyXG5leHBvcnQgY29uc3QgRk9MTE9XX1NVQ0NFU1MgPSBcIkZPTExPV19TVUNDRVNTXCI7XHJcbmV4cG9ydCBjb25zdCBGT0xMT1dfRkFJTFVSRSA9IFwiRk9MTE9XX0ZBSUxVUkVcIjtcclxuXHJcbmV4cG9ydCBjb25zdCBVTkZPTExPV19SRVFVRVNUID0gXCJVTkZPTExPV19SRVFVRVNUXCI7XHJcbmV4cG9ydCBjb25zdCBVTkZPTExPV19TVUNDRVNTID0gXCJVTkZPTExPV19TVUNDRVNTXCI7XHJcbmV4cG9ydCBjb25zdCBVTkZPTExPV19GQUlMVVJFID0gXCJVTkZPTExPV19GQUlMVVJFXCI7XHJcblxyXG5leHBvcnQgY29uc3QgUkVNT1ZFX0ZPTExPV0VSX1JFUVVFU1QgPSBcIlJFTU9WRV9GT0xMT1dFUl9SRVFVRVNUXCI7XHJcbmV4cG9ydCBjb25zdCBSRU1PVkVfRk9MTE9XRVJfU1VDQ0VTUyA9IFwiUkVNT1ZFX0ZPTExPV0VSX1NVQ0NFU1NcIjtcclxuZXhwb3J0IGNvbnN0IFJFTU9WRV9GT0xMT1dFUl9GQUlMVVJFID0gXCJSRU1PVkVfRk9MTE9XRVJfRkFJTFVSRVwiO1xyXG5cclxuZXhwb3J0IGNvbnN0IEFERF9QT1NUX1RPX01FID0gXCJBRERfUE9TVF9UT19NRVwiO1xyXG5leHBvcnQgY29uc3QgUkVNT1ZFX1BPU1RfT0ZfTUUgPSBcIlJFTU9WRV9QT1NUX09GX01FXCI7XHJcblxyXG4vKlxyXG5jb25zdCBkdW1teVVzZXIgPSAoZGF0YSkgPT4gKHtcclxuICAuLi5kYXRhLFxyXG4gIG5pY2tuYW1lOiBcIktldmluIEtpbVwiLFxyXG4gIGlkOiAxLFxyXG4gIFBvc3RzOiBbeyBpZDogMSB9XSxcclxuICBGb2xsb3dpbmdzOiBbeyBuaWNrbmFtZTogXCJjaG9cIiB9LCB7IG5pY2tuYW1lOiBcImtpbVwiIH0sIHsgbmlja25hbWU6IFwibGVlXCIgfV0sXHJcbiAgRm9sbG93ZXJzOiBbeyBuaWNrbmFtZTogXCJjaG9cIiB9LCB7IG5pY2tuYW1lOiBcImtpbVwiIH0sIHsgbmlja25hbWU6IFwibGVlXCIgfV0sXHJcbn0pO1xyXG4qL1xyXG5cclxuZXhwb3J0IGNvbnN0IGxvZ2luUmVxdWVzdEFjdGlvbiA9IChkYXRhKSA9PiB7XHJcbiAgcmV0dXJuIHtcclxuICAgIHR5cGU6IExPR19JTl9SRVFVRVNULFxyXG4gICAgZGF0YSxcclxuICB9O1xyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IGxvZ291dFJlcXVlc3RBY3Rpb24gPSAoKSA9PiB7XHJcbiAgcmV0dXJuIHtcclxuICAgIHR5cGU6IExPR19PVVRfUkVRVUVTVCxcclxuICB9O1xyXG59O1xyXG5cclxuY29uc3QgcmVkdWNlciA9IChzdGF0ZSA9IGluaXRpYWxTdGF0ZSwgYWN0aW9uKSA9PiB7XHJcbiAgcmV0dXJuIHByb2R1Y2Uoc3RhdGUsIChkcmFmdCkgPT4ge1xyXG4gICAgc3dpdGNoIChhY3Rpb24udHlwZSkge1xyXG4gICAgICBjYXNlIExPQURfRk9MTE9XSU5HU19SRVFVRVNUOiB7XHJcbiAgICAgICAgZHJhZnQubG9hZEZvbGxvd2luZ3NMb2FkaW5nID0gdHJ1ZTtcclxuICAgICAgICBkcmFmdC5sb2FkRm9sbG93aW5nc0Vycm9yID0gbnVsbDtcclxuICAgICAgICBkcmFmdC5sb2FkRm9sbG93aW5nc0RvbmUgPSBmYWxzZTtcclxuICAgICAgICBicmVhaztcclxuICAgICAgfVxyXG5cclxuICAgICAgY2FzZSBMT0FEX0ZPTExPV0lOR1NfU1VDQ0VTUzpcclxuICAgICAgICBkcmFmdC5sb2FkRm9sbG93aW5nc0xvYWRpbmcgPSBmYWxzZTtcclxuICAgICAgICBkcmFmdC5tZS5Gb2xsb3dpbmdzID0gYWN0aW9uLmRhdGE7XHJcbiAgICAgICAgZHJhZnQubG9hZEZvbGxvd2luZ3NEb25lID0gdHJ1ZTtcclxuICAgICAgICAvLyBkcmFmdC5tZS5Gb2xsb3dpbmdzLnB1c2goeyBpZDogYWN0aW9uLmRhdGEgfSk7XHJcbiAgICAgICAgYnJlYWs7XHJcblxyXG4gICAgICBjYXNlIExPQURfRk9MTE9XSU5HU19GQUlMVVJFOlxyXG4gICAgICAgIGRyYWZ0LmxvYWRGb2xsb3dpbmdzTG9hZGluZyA9IGZhbHNlO1xyXG4gICAgICAgIGRyYWZ0LmxvYWRGb2xsb3dpbmdzRXJyb3IgPSBhY3Rpb24uZXJyb3I7XHJcbiAgICAgICAgYnJlYWs7XHJcblxyXG4gICAgICBjYXNlIExPQURfRk9MTE9XRVJTX1JFUVVFU1Q6IHtcclxuICAgICAgICBkcmFmdC5sb2FkRm9sbG93ZXJzTG9hZGluZyA9IHRydWU7XHJcbiAgICAgICAgZHJhZnQubG9hZEZvbGxvd2Vyc0Vycm9yID0gbnVsbDtcclxuICAgICAgICBkcmFmdC5sb2FkRm9sbG93ZXJzRG9uZSA9IGZhbHNlO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICB9XHJcblxyXG4gICAgICBjYXNlIExPQURfRk9MTE9XRVJTX1NVQ0NFU1M6XHJcbiAgICAgICAgZHJhZnQubG9hZEZvbGxvd2Vyc0xvYWRpbmcgPSBmYWxzZTtcclxuICAgICAgICBkcmFmdC5tZS5Gb2xsb3dlcnMgPSBhY3Rpb24uZGF0YTtcclxuICAgICAgICBkcmFmdC5sb2FkRm9sbG93ZXJzRG9uZSA9IHRydWU7XHJcbiAgICAgICAgLy8gZHJhZnQubWUuRk9MTE9XRVJTLnB1c2goeyBpZDogYWN0aW9uLmRhdGEgfSk7XHJcbiAgICAgICAgYnJlYWs7XHJcblxyXG4gICAgICBjYXNlIExPQURfRk9MTE9XRVJTX0ZBSUxVUkU6XHJcbiAgICAgICAgZHJhZnQubG9hZEZvbGxvd2Vyc0xvYWRpbmcgPSBmYWxzZTtcclxuICAgICAgICBkcmFmdC5sb2FkRm9sbG93ZXJzRXJyb3IgPSBhY3Rpb24uZXJyb3I7XHJcbiAgICAgICAgYnJlYWs7XHJcblxyXG4gICAgICBjYXNlIExPQURfTVlfSU5GT19SRVFVRVNUOiB7XHJcbiAgICAgICAgZHJhZnQubG9hZE15SW5mb0xvYWRpbmcgPSB0cnVlO1xyXG4gICAgICAgIGRyYWZ0LmxvYWRNeUluZm9FcnJvciA9IG51bGw7XHJcbiAgICAgICAgZHJhZnQubG9hZE15SW5mb0RvbmUgPSBmYWxzZTtcclxuICAgICAgICBicmVhaztcclxuICAgICAgfVxyXG5cclxuICAgICAgY2FzZSBMT0FEX01ZX0lORk9fU1VDQ0VTUzpcclxuICAgICAgICBkcmFmdC5sb2FkTXlJbmZvTG9hZGluZyA9IGZhbHNlO1xyXG4gICAgICAgIGRyYWZ0Lm1lID0gYWN0aW9uLmRhdGE7XHJcbiAgICAgICAgZHJhZnQubG9hZE15SW5mb0RvbmUgPSB0cnVlO1xyXG4gICAgICAgIC8vIGRyYWZ0Lm1lLkZvbGxvd2luZ3MucHVzaCh7IGlkOiBhY3Rpb24uZGF0YSB9KTtcclxuICAgICAgICBicmVhaztcclxuXHJcbiAgICAgIGNhc2UgTE9BRF9NWV9JTkZPX0ZBSUxVUkU6XHJcbiAgICAgICAgZHJhZnQubG9hZE15SW5mb0xvYWRpbmcgPSBmYWxzZTtcclxuICAgICAgICBkcmFmdC5sb2FkTXlJbmZvRXJyb3IgPSBhY3Rpb24uZXJyb3I7XHJcbiAgICAgICAgYnJlYWs7XHJcblxyXG4gICAgICBjYXNlIEZPTExPV19SRVFVRVNUOiB7XHJcbiAgICAgICAgZHJhZnQuZm9sbG93TG9hZGluZyA9IHRydWU7XHJcbiAgICAgICAgZHJhZnQuZm9sbG93RXJyb3IgPSBudWxsO1xyXG4gICAgICAgIGRyYWZ0LmZvbGxvd0RvbmUgPSBmYWxzZTtcclxuICAgICAgICBicmVhaztcclxuICAgICAgfVxyXG5cclxuICAgICAgY2FzZSBGT0xMT1dfU1VDQ0VTUzpcclxuICAgICAgICBkcmFmdC5mb2xsb3dMb2FkaW5nID0gZmFsc2U7XHJcbiAgICAgICAgZHJhZnQuZm9sbG93RG9uZSA9IHRydWU7XHJcbiAgICAgICAgLy8gZHJhZnQubWUgPSBkdW1teVVzZXIoYWN0aW9uLmRhdGEpO1xyXG4gICAgICAgIGRyYWZ0Lm1lLkZvbGxvd2luZ3MucHVzaCh7IGlkOiBhY3Rpb24uZGF0YS5Vc2VySWQgfSk7XHJcbiAgICAgICAgYnJlYWs7XHJcblxyXG4gICAgICBjYXNlIEZPTExPV19GQUlMVVJFOlxyXG4gICAgICAgIGRyYWZ0LmZvbGxvd0xvYWRpbmcgPSBmYWxzZTtcclxuICAgICAgICBkcmFmdC5mb2xsb3dFcnJvciA9IGFjdGlvbi5lcnJvcjtcclxuICAgICAgICBicmVhaztcclxuXHJcbiAgICAgIGNhc2UgVU5GT0xMT1dfUkVRVUVTVDoge1xyXG4gICAgICAgIGRyYWZ0LnVuZm9sbG93TG9hZGluZyA9IHRydWU7XHJcbiAgICAgICAgZHJhZnQudW5mb2xsb3dFcnJvciA9IG51bGw7XHJcbiAgICAgICAgZHJhZnQudW5mb2xsb3dEb25lID0gZmFsc2U7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGNhc2UgVU5GT0xMT1dfU1VDQ0VTUzpcclxuICAgICAgICBkcmFmdC51bmZvbGxvd0xvYWRpbmcgPSBmYWxzZTtcclxuICAgICAgICBkcmFmdC51bmZvbGxvd0RvbmUgPSB0cnVlO1xyXG4gICAgICAgIC8vIGRyYWZ0Lm1lID0gZHVtbXlVc2VyKGFjdGlvbi5kYXRhKTtcclxuICAgICAgICBkcmFmdC5tZS5Gb2xsb3dpbmdzID0gZHJhZnQubWUuRm9sbG93aW5ncy5maWx0ZXIoKHYpID0+IHYuaWQgIT09IGFjdGlvbi5kYXRhLlVzZXJJZCk7XHJcbiAgICAgICAgYnJlYWs7XHJcblxyXG4gICAgICBjYXNlIFVORk9MTE9XX0ZBSUxVUkU6XHJcbiAgICAgICAgZHJhZnQudW5mb2xsb3dMb2FkaW5nID0gZmFsc2U7XHJcbiAgICAgICAgZHJhZnQudW5mb2xsb3dFcnJvciA9IGFjdGlvbi5lcnJvcjtcclxuICAgICAgICBicmVhaztcclxuXHJcbiAgICAgIGNhc2UgUkVNT1ZFX0ZPTExPV0VSX1JFUVVFU1Q6IHtcclxuICAgICAgICBkcmFmdC5yZW1vdmVGb2xsb3dlckxvYWRpbmcgPSB0cnVlO1xyXG4gICAgICAgIGRyYWZ0LnJlbW92ZUZvbGxvd2VyRXJyb3IgPSBudWxsO1xyXG4gICAgICAgIGRyYWZ0LnJlbW92ZUZvbGxvd2VyRG9uZSA9IGZhbHNlO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICB9XHJcblxyXG4gICAgICBjYXNlIFJFTU9WRV9GT0xMT1dFUl9TVUNDRVNTOlxyXG4gICAgICAgIGRyYWZ0LnJlbW92ZUZvbGxvd2VyTG9hZGluZyA9IGZhbHNlO1xyXG4gICAgICAgIGRyYWZ0LnJlbW92ZUZvbGxvd2VyRG9uZSA9IHRydWU7XHJcbiAgICAgICAgLy8gZHJhZnQubWUgPSBkdW1teVVzZXIoYWN0aW9uLmRhdGEpO1xyXG4gICAgICAgIGRyYWZ0Lm1lLkZvbGxvd2VycyA9IGRyYWZ0Lm1lLkZvbGxvd2Vycy5maWx0ZXIoKHYpID0+IHYuaWQgIT09IGFjdGlvbi5kYXRhLlVzZXJJZCk7XHJcbiAgICAgICAgYnJlYWs7XHJcblxyXG4gICAgICBjYXNlIFJFTU9WRV9GT0xMT1dFUl9GQUlMVVJFOlxyXG4gICAgICAgIGRyYWZ0LnJlbW92ZUZvbGxvd2VyTG9hZGluZyA9IGZhbHNlO1xyXG4gICAgICAgIGRyYWZ0LnJlbW92ZUZvbGxvd2VyRXJyb3IgPSBhY3Rpb24uZXJyb3I7XHJcbiAgICAgICAgYnJlYWs7XHJcblxyXG4gICAgICBjYXNlIExPR19JTl9SRVFVRVNUOiB7XHJcbiAgICAgICAgZHJhZnQubG9nSW5Mb2FkaW5nID0gdHJ1ZTtcclxuICAgICAgICBkcmFmdC5sb2dJbkVycm9yID0gbnVsbDtcclxuICAgICAgICBkcmFmdC5sb2dJbkRvbmUgPSBmYWxzZTtcclxuICAgICAgICBicmVhaztcclxuICAgICAgfVxyXG4gICAgICAvLyBjb25zb2xlLmxvZyhcInJlZHVjZXIgbG9naW5cIik7XHJcbiAgICAgIC8vIHJldHVybiB7IC4uLnN0YXRlLCBsb2dJbkxvYWRpbmc6IHRydWUsIGxvZ0luRXJyb3I6IG51bGwsIGxvZ0luRG9uZTogZmFsc2UgfTtcclxuICAgICAgY2FzZSBMT0dfSU5fU1VDQ0VTUzpcclxuICAgICAgICBkcmFmdC5sb2dJbkxvYWRpbmcgPSBmYWxzZTtcclxuICAgICAgICBkcmFmdC5sb2dJbkRvbmUgPSB0cnVlO1xyXG4gICAgICAgIC8vIGRyYWZ0Lm1lID0gZHVtbXlVc2VyKGFjdGlvbi5kYXRhKTtcclxuICAgICAgICBkcmFmdC5tZSA9IGFjdGlvbi5kYXRhO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICAvLyByZXR1cm4ge1xyXG4gICAgICAvLyAgIC4uLnN0YXRlLFxyXG4gICAgICAvLyAgIGxvZ0luTG9hZGluZzogZmFsc2UsXHJcbiAgICAgIC8vICAgbG9nSW5Eb25lOiB0cnVlLFxyXG4gICAgICAvLyAgIG1lOiBkdW1teVVzZXIoYWN0aW9uLmRhdGEpLFxyXG4gICAgICAvLyB9O1xyXG4gICAgICBjYXNlIExPR19JTl9GQUlMVVJFOlxyXG4gICAgICAgIGRyYWZ0LmxvZ0luTG9hZGluZyA9IGZhbHNlO1xyXG4gICAgICAgIGRyYWZ0LmxvZ0luRXJyb3IgPSBhY3Rpb24uZXJyb3I7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIC8vIHJldHVybiB7IC4uLnN0YXRlLCBsb2dJbkxvYWRpbmc6IGZhbHNlLCBsb2dJbkVycm9yOiBmYWxzZSwgbWU6IGFjdGlvbi5kYXRhIH07XHJcbiAgICAgIGNhc2UgTE9HX09VVF9SRVFVRVNUOlxyXG4gICAgICAgIGRyYWZ0LmxvZ091dExvYWRpbmcgPSB0cnVlO1xyXG4gICAgICAgIGRyYWZ0LmxvZ091dERvbmUgPSBmYWxzZTtcclxuICAgICAgICBkcmFmdC5sb2dPdXRFcnJvciA9IG51bGw7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCJyZWR1Y2VyIGxvZ291dFwiKTtcclxuICAgICAgICBicmVhaztcclxuICAgICAgLy8gcmV0dXJuIHsgLi4uc3RhdGUsIGxvZ091dExvYWRpbmc6IHRydWUsIGxvZ091dERvbmU6IGZhbHNlLCBsb2dPdXRFcnJvcjogbnVsbCB9O1xyXG4gICAgICBjYXNlIExPR19PVVRfU1VDQ0VTUzpcclxuICAgICAgICBkcmFmdC5sb2dPdXRMb2FkaW5nID0gZmFsc2U7XHJcbiAgICAgICAgZHJhZnQubG9nT3V0RG9uZSA9IHRydWU7XHJcbiAgICAgICAgZHJhZnQubWUgPSBudWxsO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICAvLyByZXR1cm4geyAuLi5zdGF0ZSwgbG9nT3V0TG9hZGluZzogZmFsc2UsIGxvZ091dERvbmU6IHRydWUsIG1lOiBudWxsIH07XHJcbiAgICAgIGNhc2UgTE9HX09VVF9GQUlMVVJFOlxyXG4gICAgICAgIGRyYWZ0LmxvZ091dExvYWRpbmcgPSBmYWxzZTtcclxuICAgICAgICBkcmFmdC5sb2dPdXRFcnJvciA9IGFjdGlvbi5lcnJvcjtcclxuICAgICAgICBicmVhaztcclxuICAgICAgLy8gcmV0dXJuIHsgLi4uc3RhdGUsIGxvZ091dExvYWRpbmc6IGZhbHNlLCBsb2dPdXRFcnJvcjogYWN0aW9uLmVycm9yIH07XHJcblxyXG4gICAgICBjYXNlIFNJR05fVVBfUkVRVUVTVDpcclxuICAgICAgICBkcmFmdC5zaWduVXBMb2FkaW5nID0gdHJ1ZTtcclxuICAgICAgICBkcmFmdC5zaWduVXBEb25lID0gZmFsc2U7XHJcbiAgICAgICAgZHJhZnQuc2lnblVwRXJyb3IgPSBudWxsO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwicmVkdWNlciBzaWduVXBcIik7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIC8vIHJldHVybiB7IC4uLnN0YXRlLCBzaWduVXBMb2FkaW5nOiB0cnVlLCBzaWduVXBEb25lOiBmYWxzZSwgc2lnblVwRXJyb3I6IG51bGwgfTtcclxuICAgICAgY2FzZSBTSUdOX1VQX1NVQ0NFU1M6XHJcbiAgICAgICAgZHJhZnQuc2lnblVwTG9hZGluZyA9IGZhbHNlO1xyXG4gICAgICAgIGRyYWZ0LnNpZ25VcERvbmUgPSB0cnVlO1xyXG4gICAgICAgIGRyYWZ0Lm1lID0gbnVsbDtcclxuICAgICAgICBicmVhaztcclxuICAgICAgLy8gcmV0dXJuIHsgLi4uc3RhdGUsIHNpZ25VcExvYWRpbmc6IGZhbHNlLCBzaWduVXBEb25lOiB0cnVlLCBtZTogbnVsbCB9O1xyXG4gICAgICBjYXNlIFNJR05fVVBfRkFJTFVSRTpcclxuICAgICAgICBkcmFmdC5zaWduVXBMb2FkaW5nID0gZmFsc2U7XHJcbiAgICAgICAgZHJhZnQuc2lnblVwRXJyb3IgPSBhY3Rpb24uZXJyb3I7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgcmV0dXJuIHsgLi4uc3RhdGUsIHNpZ25VcExvYWRpbmc6IGZhbHNlLCBzaWduVXBFcnJvcjogYWN0aW9uLmVycm9yIH07XHJcblxyXG4gICAgICBjYXNlIENIQU5HRV9OSUNLTkFNRV9SRVFVRVNUOlxyXG4gICAgICAgIGRyYWZ0LmNoYW5nZU5pY2tuYW1lTG9hZGluZyA9IHRydWU7XHJcbiAgICAgICAgZHJhZnQuY2hhbmdlTmlja25hbWVEb25lID0gZmFsc2U7XHJcbiAgICAgICAgZHJhZnQuY2hhbmdlTmlja25hbWVFcnJvciA9IG51bGw7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIC8qXHJcbiAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgIC4uLnN0YXRlLFxyXG4gICAgICAgICAgY2hhbmdlTmlja25hbWVMb2FkaW5nOiB0cnVlLFxyXG4gICAgICAgICAgY2hhbmdlTmlja25hbWVEb25lOiBmYWxzZSxcclxuICAgICAgICAgIGNoYW5nZU5pY2tuYW1lRXJyb3I6IG51bGwsXHJcbiAgICAgICAgfTtcclxuICAgICAgICAqL1xyXG4gICAgICBjYXNlIENIQU5HRV9OSUNLTkFNRV9TVUNDRVNTOlxyXG4gICAgICAgIGRyYWZ0Lm1lLm5pY2tuYW1lID0gYWN0aW9uLmRhdGEubmlja25hbWU7XHJcbiAgICAgICAgZHJhZnQuY2hhbmdlTmlja25hbWVMb2FkaW5nID0gZmFsc2U7XHJcbiAgICAgICAgZHJhZnQuY2hhbmdlTmlja25hbWVEb25lID0gdHJ1ZTtcclxuICAgICAgICBicmVhaztcclxuICAgICAgLy8gcmV0dXJuIHsgLi4uc3RhdGUsIGNoYW5nZU5pY2tuYW1lTG9hZGluZzogZmFsc2UsIGNoYW5nZU5pY2tuYW1lRG9uZTogdHJ1ZSB9O1xyXG4gICAgICBjYXNlIENIQU5HRV9OSUNLTkFNRV9GQUlMVVJFOlxyXG4gICAgICAgIGRyYWZ0LmNoYW5nZU5pY2tuYW1lTG9hZGluZyA9IGZhbHNlO1xyXG4gICAgICAgIGRyYWZ0LmNoYW5nZU5pY2tuYW1lRXJyb3IgPSBhY3Rpb24uZXJyb3I7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIC8vcmV0dXJuIHsgLi4uc3RhdGUsIGNoYW5nZU5pY2tuYW1lTG9hZGluZzogZmFsc2UsIGNoYW5nZU5pY2tuYW1lRXJyb3I6IGFjdGlvbi5lcnJvciB9O1xyXG4gICAgICBjYXNlIEFERF9QT1NUX1RPX01FOlxyXG4gICAgICAgIGRyYWZ0Lm1lLlBvc3RzLnVuc2hpZnQoeyBpZDogYWN0aW9uLmRhdGEgfSk7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIC8vIHJldHVybiB7XHJcbiAgICAgIC8vICAgLi4uc3RhdGUsXHJcbiAgICAgIC8vICAgbWU6IHtcclxuICAgICAgLy8gICAgIC4uLnN0YXRlLm1lLFxyXG4gICAgICAvLyAgICAgUG9zdHM6IFt7IGlkOiBhY3Rpb24uZGF0YSB9LCAuLi5zdGF0ZS5tZS5Qb3N0c10sXHJcbiAgICAgIC8vICAgfSxcclxuICAgICAgLy8gfTtcclxuICAgICAgY2FzZSBSRU1PVkVfUE9TVF9PRl9NRTpcclxuICAgICAgICBkcmFmdC5tZS5Qb3N0cyA9IGRyYWZ0Lm1lLlBvc3RzLmZpbHRlcigodikgPT4gdi5pZCAhPT0gYWN0aW9uLmRhdGEpO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICAvLyByZXR1cm4ge1xyXG4gICAgICAvLyAgIC4uLnN0YXRlLFxyXG4gICAgICAvLyAgIG1lOiB7XHJcbiAgICAgIC8vICAgICAuLi5zdGF0ZS5tZSxcclxuICAgICAgLy8gICAgIFBvc3RzOiBzdGF0ZS5tZS5Qb3N0cy5maWx0ZXIoKHYpID0+IHYuaWQgIT09IGFjdGlvbi5kYXRhKSxcclxuICAgICAgLy8gICB9LFxyXG4gICAgICAvLyB9O1xyXG4gICAgICBkZWZhdWx0OlxyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICAvLyByZXR1cm4gc3RhdGU7XHJcbiAgICB9XHJcbiAgfSk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCByZWR1Y2VyO1xyXG4iLCJpbXBvcnQgeyBhbGwsIGZvcmsgfSBmcm9tIFwicmVkdXgtc2FnYS9lZmZlY3RzXCI7XHJcbmltcG9ydCBheGlvcyBmcm9tIFwiYXhpb3NcIjtcclxuaW1wb3J0IHBvc3RTYWdhIGZyb20gXCIuL3Bvc3RcIjtcclxuaW1wb3J0IHVzZXJTYWdhIGZyb20gXCIuL3VzZXJcIjtcclxuXHJcbmF4aW9zLmRlZmF1bHRzLmJhc2VVUkwgPSBcImh0dHA6Ly9sb2NhbGhvc3Q6MzA2NVwiO1xyXG5heGlvcy5kZWZhdWx0cy53aXRoQ3JlZGVudGlhbHMgPSB0cnVlO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24qIHJvb3RTYWdhKCkge1xyXG4gIC8vQUxM7J2EIO2VmOuptCDrsLDsl7TslYjsnZgg66qo65OgIOqyg+uTpOydhCDtlZzrsojsl5Ag64ukIOyLpO2WiSDtlaguXHJcbiAgLy9mb3Jr64qUIO2VqOyImOulvCDsi6TtlontlZzri6TripQg65y7IC5cclxuICAvL2ZvcmvrjIDsi6AgY2FsbOydhCDsk7DripQg6rK97Jqw64+EIOyeiOydjC4g7ZWY7KeA66eMIOuRkOqwnOydmCDssKjsnbTsoJAg7KCV7ZmV7Z6IIOyVjOq4sC5cclxuICAvL+OEtCBGT1JL64qUIOu5hOuPmeq4sCDtlajsiJgg7Zi47LacIC8gY2FsbOydgCDrj5nquLAg7ZWo7IiYIO2YuOy2nFxyXG4gIC8vIHlpZWxk64qUIGF3YWl06rO8IOu5hOyKt+2VqC5cclxuICB5aWVsZCBhbGwoW2ZvcmsocG9zdFNhZ2EpLCBmb3JrKHVzZXJTYWdhKV0pO1xyXG59XHJcblxyXG4vLyBmdW5jdGlvbiBsb2dJbkFQSShkYXRhKSB7XHJcbi8vICAgcmV0dXJuIGF4aW9zLnBvc3QoXCIvYXBpL2xvZ2luXCIsIGRhdGEpO1xyXG4vLyB9XHJcblxyXG4vLyAvLyBjb25zdCBsID0gbG9nSW4oe3R5cGU6ICdMT0dfSU5fUkVRVUVTVCcsIGRhdGE6IHtpZDogJ2poa2V2aW4yMUBnbWFpbC5jb20nfX0pXHJcbi8vIC8vIGwubmV4dCgpO1xyXG4vLyAvLyBsLm5leHQoKTtcclxuXHJcbi8vIGZ1bmN0aW9uKiBsb2dJbihhY3Rpb24pIHtcclxuLy8gICAvL+yEseqztSDqsrDqs7zripQgcmVzdWx0LmRhdGHsl5AsIOyLpO2MqOqyveqzvOuKlCBlcnIucmVzcG9uc2UuZGF0YeyXkCDri7TqsqjsnojsnYxcclxuLy8gICAvL3B1dOydgCBkaXNwYXRjaOudvOqzoCDsg53qsIHtlZjquLBcclxuLy8gICB0cnkge1xyXG4vLyAgICAgLy8gY29uc3QgcmVzdWx0ID0geWllbGQgY2FsbChsb2dJbkFQSSwgYWN0aW9uLmRhdGEpO1xyXG4vLyAgICAgeWllbGQgZGVsYXkoMTAwMCk7XHJcbi8vICAgICB5aWVsZCBwdXQoe1xyXG4vLyAgICAgICB0eXBlOiBcIkxPR19JTl9TVUNDRVNTXCIsXHJcbi8vICAgICAgIGRhdGE6IHJlc3VsdC5kYXRhLFxyXG4vLyAgICAgfSk7XHJcbi8vICAgfSBjYXRjaCAoZXJyKSB7XHJcbi8vICAgICB5aWVsZCBwdXQoe1xyXG4vLyAgICAgICB0eXBlOiBcIkxPR19JTl9GQUlMVVJFXCIsXHJcbi8vICAgICAgIGRhdGE6IGVyci5yZXNwb25zZS5kYXRhLFxyXG4vLyAgICAgfSk7XHJcbi8vICAgfVxyXG4vLyB9XHJcblxyXG4vLyBmdW5jdGlvbiBsb2dPdXRBUEkoKSB7XHJcbi8vICAgcmV0dXJuIGF4aW9zLnBvc3QoXCIvYXBpL2xvZ291dFwiKTtcclxuLy8gfVxyXG5cclxuLy8gZnVuY3Rpb24qIGxvZ091dCgpIHtcclxuLy8gICB0cnkge1xyXG4vLyAgICAgLy8gY29uc3QgcmVzdWx0ID0geWllbGQgY2FsbChsb2dPdXRBUEkpO1xyXG4vLyAgICAgeWllbGQgZGVsYXkoMTAwMCk7XHJcbi8vICAgICB5aWVsZCBwdXQoe1xyXG4vLyAgICAgICB0eXBlOiBcIkxPR19PVVRfU1VDQ0VTU1wiLFxyXG4vLyAgICAgICBkYXRhOiByZXN1bHQuZGF0YSxcclxuLy8gICAgIH0pO1xyXG4vLyAgIH0gY2F0Y2ggKGVycikge1xyXG4vLyAgICAgeWllbGQgcHV0KHtcclxuLy8gICAgICAgdHlwZTogXCJMT0dfT1VUX0ZBSUxVUkVcIixcclxuLy8gICAgICAgZGF0YTogZXJyLnJlc3BvbnNlLmRhdGEsXHJcbi8vICAgICB9KTtcclxuLy8gICB9XHJcbi8vIH1cclxuXHJcbi8vIGZ1bmN0aW9uIGFkZFBvc3RBUEkoZGF0YSkge1xyXG4vLyAgIHJldHVybiBheGlvcy5wb3N0KFwiL2FwaS9wb3N0XCIsIGRhdGEpO1xyXG4vLyB9XHJcblxyXG4vLyBmdW5jdGlvbiogYWRkUG9zdChhY3Rpb24pIHtcclxuLy8gICB0cnkge1xyXG4vLyAgICAgLy8gY29uc3QgcmVzdWx0ID0geWllbGQgY2FsbChhZGRQb3N0QVBJLCBhY3Rpb24uZGF0YSk7XHJcbi8vICAgICB5aWVsZCBkZWxheSgxMDAwKTtcclxuLy8gICAgIHlpZWxkIHB1dCh7XHJcbi8vICAgICAgIHR5cGU6IFwiQUREX1BPU1RfU1VDQ0VTU1wiLFxyXG4vLyAgICAgfSk7XHJcbi8vICAgfSBjYXRjaCAoZXJyKSB7XHJcbi8vICAgICB5aWVsZCBwdXQoe1xyXG4vLyAgICAgICB0eXBlOiBcIkxPR19PVVRfRkFJTFVSRVwiLFxyXG4vLyAgICAgICBkYXRhOiBlcnIucmVzcG9uc2UuZGF0YSxcclxuLy8gICAgIH0pO1xyXG4vLyAgIH1cclxuLy8gfVxyXG5cclxuLy90YWtl64qUIOuSpOyXkCBhY3Rpb27snbQg7Iuk7ZaJIOuQoOuVjOq5jOyngCDquLDri6TrpqzqsqDri6TripQg65y7ICh0YWtlKCdMT0dfSU4nLCBsb2dpbikpID0+ICdMT0dfSU4nKGFjdGlvbinsnbQg7Iuk7ZaJIOuQoOuVjCDquYzsp4Ag6riw64uk66as6rOgLCDsi6Ttlokg65CY66m0IOuSpOyXkCBsb2dJbiBmdW5jdGlvbuydhCDsi6Ttlokg7ZWoLlxyXG4vLyBldmVudCBsaXN0ZW5lciDqsJnsnYAg7Jet7ZWg7J2EIO2VmOyngOunjCDsuZjrqoXsoIHsnbgg64uo7KCQ7J2AIDHtmozsmqnsnoQuICjtlZzrsogg7Iuk7ZaJ65CY6rOgIOuCmOuptCDtlbTri7kgZXZlbnQgbGlzdG5lcuqwgCDsgqzrnbzsp5AuIOuUsOudvOyEnCB3aGlsZeuhnCDqsJDsi7jso7zqsbDrgpggdGFrZUV2ZXJ566GcIOuwm+yVhCDspJjslbwg7ZWoLikgPT4gdGFrZUxhdGVzdOuhnCDsk7gg7IiY64+EIOyeiOuKlOuNsCDsnbTqsbQsIOyLpOyImOuhnCDrkZDrsojriITrpbTqsbDrgpgg7ZaI7J2E65WMIOuniOyngOunieq6vOunjCDsnbjsi53tlbTshJwg7LKY66as7ZW0IOykjC5cclxuLy8gZnVuY3Rpb24qIHdhdGNoTG9naW4oKSB7XHJcbi8vICAgeWllbGQgdGFrZUxhdGVzdChcIkxPR19JTl9SRVFVRVNUXCIsIGxvZ0luKTtcclxuLy8gfVxyXG5cclxuLy8gZnVuY3Rpb24qIHdhdGNoTG9nT3V0KCkge1xyXG4vLyAgIHlpZWxkIHRha2VMYXRlc3QoXCJMT0dfT1VUX1JFUVVFU1RcIiwgbG9nT3V0KTtcclxuLy8gfVxyXG4vLyBmdW5jdGlvbiogd2F0Y2hBZGRQb3N0KCkge1xyXG4vLyAgIHlpZWxkIHRha2VMYXRlc3QoXCJBRERfUE9TVF9SRVFVRVNUXCIsIGFkZFBvc3QpO1xyXG4vLyB9XHJcblxyXG4vLyBleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiogcm9vdFNhZ2EoKSB7XHJcbi8vICAgLy9BTEzsnYQg7ZWY66m0IOuwsOyXtOyViOydmCDrqqjrk6Ag6rKD65Ok7J2EIO2VnOuyiOyXkCDri6Qg7Iuk7ZaJIO2VqC5cclxuLy8gICAvL2ZvcmvripQg7ZWo7IiY66W8IOyLpO2Wie2VnOuLpOuKlCDrnLsgLlxyXG4vLyAgIC8vZm9ya+uMgOyLoCBjYWxs7J2EIOyTsOuKlCDqsr3smrDrj4Qg7J6I7J2MLiDtlZjsp4Drp4wg65GQ6rCc7J2YIOywqOydtOygkCDsoJXtmZXtnogg7JWM6riwLlxyXG4vLyAgIC8v44S0IEZPUkvripQg67mE64+Z6riwIO2VqOyImCDtmLjstpwgLyBjYWxs7J2AIOuPmeq4sCDtlajsiJgg7Zi47LacXHJcbi8vICAgLy8geWllbGTripQgYXdhaXTqs7wg67mE7Iq37ZWoLlxyXG4vLyAgIHlpZWxkIGFsbChbZm9yayh3YXRjaExvZ2luKSwgZm9yayh3YXRjaExvZ091dCksIGZvcmsod2F0Y2hBZGRQb3N0KV0pO1xyXG4vLyB9XHJcbiIsImltcG9ydCBheGlvcyBmcm9tIFwiYXhpb3NcIjtcclxuaW1wb3J0IHsgYWxsLCBmb3JrLCBkZWxheSwgdGFrZUxhdGVzdCwgcHV0LCB0aHJvdHRsZSwgY2FsbCB9IGZyb20gXCJyZWR1eC1zYWdhL2VmZmVjdHNcIjtcclxuLy8gaW1wb3J0IHNob3J0SWQgZnJvbSBcInNob3J0aWRcIjtcclxuaW1wb3J0IHtcclxuICBBRERfQ09NTUVOVF9GQUlMVVJFLFxyXG4gIEFERF9DT01NRU5UX1JFUVVFU1QsXHJcbiAgQUREX0NPTU1FTlRfU1VDQ0VTUyxcclxuICBBRERfUE9TVF9GQUlMVVJFLFxyXG4gIEFERF9QT1NUX1JFUVVFU1QsXHJcbiAgQUREX1BPU1RfU1VDQ0VTUyxcclxuICAvLyBnZW5lcmF0ZUR1bW15UG9zdCxcclxuICBMT0FEX1BPU1RTX0ZBSUxVUkUsXHJcbiAgTE9BRF9QT1NUU19SRVFVRVNULFxyXG4gIExPQURfUE9TVFNfU1VDQ0VTUyxcclxuICBSRU1PVkVfUE9TVF9GQUlMVVJFLFxyXG4gIFJFTU9WRV9QT1NUX1JFUVVFU1QsXHJcbiAgUkVNT1ZFX1BPU1RfU1VDQ0VTUyxcclxuICBMSUtFX1BPU1RfUkVRVUVTVCxcclxuICBVTkxJS0VfUE9TVF9SRVFVRVNULFxyXG4gIExJS0VfUE9TVF9TVUNDRVNTLFxyXG4gIExJS0VfUE9TVF9GQUlMVVJFLFxyXG4gIFVOTElLRV9QT1NUX1NVQ0NFU1MsXHJcbiAgVU5MSUtFX1BPU1RfRkFJTFVSRSxcclxuICBVUExPQURfSU1BR0VTX1JFUVVFU1QsXHJcbiAgVVBMT0FEX0lNQUdFU19TVUNDRVNTLFxyXG4gIFVQTE9BRF9JTUFHRVNfRkFJTFVSRSxcclxuICBSRVRXRUVUX1JFUVVFU1QsXHJcbiAgUkVUV0VFVF9TVUNDRVNTLFxyXG4gIFJFVFdFRVRfRkFJTFVSRSxcclxufSBmcm9tIFwiLi4vcmVkdWNlcnMvcG9zdFwiO1xyXG5pbXBvcnQgeyBBRERfUE9TVF9UT19NRSwgUkVNT1ZFX1BPU1RfT0ZfTUUgfSBmcm9tIFwiLi4vcmVkdWNlcnMvdXNlclwiO1xyXG5cclxuZnVuY3Rpb24gcmV0d2VldEFQSShkYXRhKSB7XHJcbiAgcmV0dXJuIGF4aW9zLnBvc3QoYC9wb3N0LyR7ZGF0YX0vcmV0d2VldGAsIGRhdGEpO1xyXG59XHJcblxyXG5mdW5jdGlvbiogcmV0d2VldChhY3Rpb24pIHtcclxuICB0cnkge1xyXG4gICAgLy8gY29uc29sZS5sb2coXCJyZXR3ZWV0IGluIFNhZ2FcIik7XHJcbiAgICBjb25zdCByZXN1bHQgPSB5aWVsZCBjYWxsKHJldHdlZXRBUEksIGFjdGlvbi5kYXRhKTtcclxuICAgIC8vIHlpZWxkIGRlbGF5KDEwMDApO1xyXG4gICAgeWllbGQgcHV0KHtcclxuICAgICAgdHlwZTogUkVUV0VFVF9TVUNDRVNTLFxyXG4gICAgICBkYXRhOiByZXN1bHQuZGF0YSxcclxuICAgIH0pO1xyXG4gIH0gY2F0Y2ggKGVycikge1xyXG4gICAgY29uc29sZS5lcnJvcihlcnIpO1xyXG4gICAgeWllbGQgcHV0KHtcclxuICAgICAgdHlwZTogUkVUV0VFVF9GQUlMVVJFLFxyXG4gICAgICBlcnJvcjogZXJyLnJlc3BvbnNlLmRhdGEsXHJcbiAgICB9KTtcclxuICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHVwbG9hZEltYWdlc0FQSShkYXRhKSB7XHJcbiAgcmV0dXJuIGF4aW9zLnBvc3QoYC9wb3N0L2ltYWdlc2AsIGRhdGEpO1xyXG59XHJcblxyXG5mdW5jdGlvbiogdXBsb2FkSW1hZ2VzKGFjdGlvbikge1xyXG4gIHRyeSB7XHJcbiAgICAvLyBjb25zb2xlLmxvZyhcInVwbG9hZEltYWdlcyBpbiBTYWdhXCIpO1xyXG4gICAgY29uc3QgcmVzdWx0ID0geWllbGQgY2FsbCh1cGxvYWRJbWFnZXNBUEksIGFjdGlvbi5kYXRhKTtcclxuICAgIC8vIHlpZWxkIGRlbGF5KDEwMDApO1xyXG4gICAgeWllbGQgcHV0KHtcclxuICAgICAgdHlwZTogVVBMT0FEX0lNQUdFU19TVUNDRVNTLFxyXG4gICAgICBkYXRhOiByZXN1bHQuZGF0YSxcclxuICAgIH0pO1xyXG4gIH0gY2F0Y2ggKGVycikge1xyXG4gICAgY29uc29sZS5lcnJvcihlcnIpO1xyXG4gICAgeWllbGQgcHV0KHtcclxuICAgICAgdHlwZTogVVBMT0FEX0lNQUdFU19GQUlMVVJFLFxyXG4gICAgICBlcnJvcjogZXJyLnJlc3BvbnNlLmRhdGEsXHJcbiAgICB9KTtcclxuICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGxpa2VQb3N0QVBJKGRhdGEpIHtcclxuICByZXR1cm4gYXhpb3MucGF0Y2goYC9wb3N0LyR7ZGF0YX0vbGlrZWApO1xyXG59XHJcblxyXG5mdW5jdGlvbiogbGlrZVBvc3QoYWN0aW9uKSB7XHJcbiAgdHJ5IHtcclxuICAgIC8vIGNvbnNvbGUubG9nKFwibGlrZVBvc3QgaW4gU2FnYVwiKTtcclxuICAgIGNvbnN0IHJlc3VsdCA9IHlpZWxkIGNhbGwobGlrZVBvc3RBUEksIGFjdGlvbi5kYXRhKTtcclxuICAgIC8vIHlpZWxkIGRlbGF5KDEwMDApO1xyXG4gICAgeWllbGQgcHV0KHtcclxuICAgICAgdHlwZTogTElLRV9QT1NUX1NVQ0NFU1MsXHJcbiAgICAgIGRhdGE6IHJlc3VsdC5kYXRhLFxyXG4gICAgfSk7XHJcbiAgfSBjYXRjaCAoZXJyKSB7XHJcbiAgICBjb25zb2xlLmVycm9yKGVycik7XHJcbiAgICB5aWVsZCBwdXQoe1xyXG4gICAgICB0eXBlOiBMSUtFX1BPU1RfRkFJTFVSRSxcclxuICAgICAgZXJyb3I6IGVyci5yZXNwb25zZS5kYXRhLFxyXG4gICAgfSk7XHJcbiAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiB1bmxpa2VQb3N0QVBJKGRhdGEpIHtcclxuICByZXR1cm4gYXhpb3MuZGVsZXRlKGAvcG9zdC8ke2RhdGF9L2xpa2VgKTtcclxufVxyXG5cclxuZnVuY3Rpb24qIHVubGlrZVBvc3QoYWN0aW9uKSB7XHJcbiAgdHJ5IHtcclxuICAgIC8vIGNvbnNvbGUubG9nKFwidW5saWtlUG9zdCBpbiBTYWdhXCIpO1xyXG4gICAgY29uc3QgcmVzdWx0ID0geWllbGQgY2FsbCh1bmxpa2VQb3N0QVBJLCBhY3Rpb24uZGF0YSk7XHJcbiAgICAvLyB5aWVsZCBkZWxheSgxMDAwKTtcclxuICAgIHlpZWxkIHB1dCh7XHJcbiAgICAgIHR5cGU6IFVOTElLRV9QT1NUX1NVQ0NFU1MsXHJcbiAgICAgIGRhdGE6IHJlc3VsdC5kYXRhLFxyXG4gICAgfSk7XHJcbiAgfSBjYXRjaCAoZXJyKSB7XHJcbiAgICBjb25zb2xlLmVycm9yKGVycik7XHJcbiAgICB5aWVsZCBwdXQoe1xyXG4gICAgICB0eXBlOiBVTkxJS0VfUE9TVF9GQUlMVVJFLFxyXG4gICAgICBlcnJvcjogZXJyLnJlc3BvbnNlLmRhdGEsXHJcbiAgICB9KTtcclxuICB9XHJcbn1cclxuXHJcbi8vZ2V07J2YIOqyveyasCAs65Kk7J2YIOyekOumrOqwgCBkYXRh6rCAIOyVhOuLjCB3aXRoQ3JlZGVudGlhbHPsnZgg7J6Q66as7J2066+A66GcIGdldOyXkOyEnCBkYXRh66W8IOuztOuCtOugpOuptCBxdWVyeXN0cmluZ+ycvOuhnCDrhKPslrTslbwg7ZWoLihrZXk9dmFsdWXsnZgg7ZiV7YOcKVxyXG5mdW5jdGlvbiBsb2FkUG9zdHNBUEkobGFzdElkKSB7XHJcbiAgcmV0dXJuIGF4aW9zLmdldChgL3Bvc3RzP2xhc3RJZD0ke2xhc3RJZCB8fCAwfWApO1xyXG59XHJcblxyXG5mdW5jdGlvbiogbG9hZFBvc3RzKGFjdGlvbikge1xyXG4gIHRyeSB7XHJcbiAgICAvLyBjb25zb2xlLmxvZyhcImxvYWRQb3N0cyBpbiBTYWdhXCIpO1xyXG4gICAgY29uc3QgcmVzdWx0ID0geWllbGQgY2FsbChsb2FkUG9zdHNBUEksIGFjdGlvbi5sYXN0SWQpO1xyXG4gICAgLy8geWllbGQgZGVsYXkoMTAwMCk7XHJcbiAgICB5aWVsZCBwdXQoe1xyXG4gICAgICB0eXBlOiBMT0FEX1BPU1RTX1NVQ0NFU1MsXHJcbiAgICAgIGRhdGE6IHJlc3VsdC5kYXRhLFxyXG4gICAgfSk7XHJcbiAgfSBjYXRjaCAoZXJyKSB7XHJcbiAgICBjb25zb2xlLmVycm9yKGVycik7XHJcbiAgICB5aWVsZCBwdXQoe1xyXG4gICAgICB0eXBlOiBMT0FEX1BPU1RTX0ZBSUxVUkUsXHJcbiAgICAgIGVycm9yOiBlcnIucmVzcG9uc2UuZGF0YSxcclxuICAgIH0pO1xyXG4gIH1cclxufVxyXG5cclxuZnVuY3Rpb24gYWRkUG9zdEFQSShkYXRhKSB7XHJcbiAgcmV0dXJuIGF4aW9zLnBvc3QoXCIvcG9zdFwiLCBkYXRhKTtcclxufVxyXG5cclxuZnVuY3Rpb24qIGFkZFBvc3QoYWN0aW9uKSB7XHJcbiAgdHJ5IHtcclxuICAgIGNvbnN0IHJlc3VsdCA9IHlpZWxkIGNhbGwoYWRkUG9zdEFQSSwgYWN0aW9uLmRhdGEpO1xyXG4gICAgLy8geWllbGQgZGVsYXkoMTAwMCk7XHJcbiAgICAvLyBjb25zdCBpZCA9IHNob3J0SWQuZ2VuZXJhdGUoKTtcclxuICAgIC8vIOyVhOuemOuKlCBwb3N0IHJlZHVjZXIg7KGw7J6RIOu2gOu2hFxyXG4gICAgeWllbGQgcHV0KHtcclxuICAgICAgdHlwZTogQUREX1BPU1RfU1VDQ0VTUyxcclxuICAgICAgZGF0YTogcmVzdWx0LmRhdGEsXHJcbiAgICAgIC8vIGRhdGE6IHtcclxuICAgICAgLy8gICBpZCxcclxuICAgICAgLy8gICBjb250ZW50OiBhY3Rpb24uZGF0YSxcclxuICAgICAgLy8gfSxcclxuICAgIH0pO1xyXG4gICAgLy8g7JWE656Y64qUIHVzZXIgcmVkdWNlciDsobDsnpEg67aA67aEXHJcbiAgICB5aWVsZCBwdXQoe1xyXG4gICAgICB0eXBlOiBBRERfUE9TVF9UT19NRSxcclxuICAgICAgZGF0YTogcmVzdWx0LmRhdGEuaWQsXHJcbiAgICB9KTtcclxuICB9IGNhdGNoIChlcnIpIHtcclxuICAgIHlpZWxkIHB1dCh7XHJcbiAgICAgIHR5cGU6IEFERF9QT1NUX0ZBSUxVUkUsXHJcbiAgICAgIGVycm9yOiBlcnIucmVzcG9uc2UuZGF0YSxcclxuICAgIH0pO1xyXG4gIH1cclxufVxyXG5cclxuZnVuY3Rpb24gcmVtb3ZlUG9zdEFQSShkYXRhKSB7XHJcbiAgcmV0dXJuIGF4aW9zLmRlbGV0ZShgL3Bvc3QvJHtkYXRhfWApO1xyXG59XHJcblxyXG5mdW5jdGlvbiogcmVtb3ZlUG9zdChhY3Rpb24pIHtcclxuICB0cnkge1xyXG4gICAgY29uc3QgcmVzdWx0ID0geWllbGQgY2FsbChyZW1vdmVQb3N0QVBJLCBhY3Rpb24uZGF0YSk7XHJcbiAgICAvLyB5aWVsZCBkZWxheSgxMDAwKTtcclxuICAgIC8vIOyVhOuemOuKlCBwb3N0IHJlZHVjZXIg7KGw7J6RIOu2gOu2hFxyXG4gICAgeWllbGQgcHV0KHtcclxuICAgICAgdHlwZTogUkVNT1ZFX1BPU1RfU1VDQ0VTUyxcclxuICAgICAgZGF0YTogcmVzdWx0LmRhdGEsXHJcbiAgICB9KTtcclxuICAgIC8vIOyVhOuemOuKlCB1c2VyIHJlZHVjZXIg7KGw7J6RIOu2gOu2hFxyXG4gICAgeWllbGQgcHV0KHtcclxuICAgICAgdHlwZTogUkVNT1ZFX1BPU1RfT0ZfTUUsXHJcbiAgICAgIGRhdGE6IGFjdGlvbi5kYXRhLFxyXG4gICAgfSk7XHJcbiAgfSBjYXRjaCAoZXJyKSB7XHJcbiAgICBjb25zb2xlLmVycm9yKGVycik7XHJcbiAgICB5aWVsZCBwdXQoe1xyXG4gICAgICB0eXBlOiBSRU1PVkVfUE9TVF9GQUlMVVJFLFxyXG4gICAgICBlcnJvcjogZXJyLnJlc3BvbnNlLmRhdGEsXHJcbiAgICB9KTtcclxuICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGFkZENvbW1lbnRBUEkoZGF0YSkge1xyXG4gIC8vUE9TVCAvcG9zdC8xL2NvbW1lbnRcclxuICByZXR1cm4gYXhpb3MucG9zdChgL3Bvc3QvJHtkYXRhLnBvc3RJZH0vY29tbWVudGAsIGRhdGEpO1xyXG59XHJcblxyXG5mdW5jdGlvbiogYWRkQ29tbWVudChhY3Rpb24pIHtcclxuICB0cnkge1xyXG4gICAgY29uc3QgcmVzdWx0ID0geWllbGQgY2FsbChhZGRDb21tZW50QVBJLCBhY3Rpb24uZGF0YSk7XHJcbiAgICAvLyB5aWVsZCBkZWxheSgxMDAwKTtcclxuICAgIHlpZWxkIHB1dCh7XHJcbiAgICAgIHR5cGU6IEFERF9DT01NRU5UX1NVQ0NFU1MsXHJcbiAgICAgIGRhdGE6IHJlc3VsdC5kYXRhLFxyXG4gICAgfSk7XHJcbiAgfSBjYXRjaCAoZXJyKSB7XHJcbiAgICBjb25zb2xlLmVycm9yKGVycik7XHJcbiAgICB5aWVsZCBwdXQoe1xyXG4gICAgICB0eXBlOiBBRERfQ09NTUVOVF9GQUlMVVJFLFxyXG4gICAgICBlcnJvcjogZXJyLnJlc3BvbnNlLmRhdGEsXHJcbiAgICB9KTtcclxuICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uKiB3YXRjaFJldHdlZXQoKSB7XHJcbiAgeWllbGQgdGFrZUxhdGVzdChSRVRXRUVUX1JFUVVFU1QsIHJldHdlZXQpO1xyXG59XHJcbmZ1bmN0aW9uKiB3YXRjaFVwbG9hZEltYWdlcygpIHtcclxuICB5aWVsZCB0YWtlTGF0ZXN0KFVQTE9BRF9JTUFHRVNfUkVRVUVTVCwgdXBsb2FkSW1hZ2VzKTtcclxufVxyXG5mdW5jdGlvbiogd2F0Y2hMaWtlUG9zdCgpIHtcclxuICB5aWVsZCB0YWtlTGF0ZXN0KExJS0VfUE9TVF9SRVFVRVNULCBsaWtlUG9zdCk7XHJcbn1cclxuZnVuY3Rpb24qIHdhdGNoVW5saWtlUG9zdCgpIHtcclxuICB5aWVsZCB0YWtlTGF0ZXN0KFVOTElLRV9QT1NUX1JFUVVFU1QsIHVubGlrZVBvc3QpO1xyXG59XHJcblxyXG5mdW5jdGlvbiogd2F0Y2hMb2FkUG9zdHMoKSB7XHJcbiAgeWllbGQgdGhyb3R0bGUoNTAwMCwgTE9BRF9QT1NUU19SRVFVRVNULCBsb2FkUG9zdHMpO1xyXG59XHJcbmZ1bmN0aW9uKiB3YXRjaEFkZENvbW1lbnQoKSB7XHJcbiAgeWllbGQgdGFrZUxhdGVzdChBRERfQ09NTUVOVF9SRVFVRVNULCBhZGRDb21tZW50KTtcclxufVxyXG5mdW5jdGlvbiogd2F0Y2hSZW1vdmVQb3N0KCkge1xyXG4gIHlpZWxkIHRha2VMYXRlc3QoUkVNT1ZFX1BPU1RfUkVRVUVTVCwgcmVtb3ZlUG9zdCk7XHJcbn1cclxuZnVuY3Rpb24qIHdhdGNoQWRkUG9zdCgpIHtcclxuICB5aWVsZCB0YWtlTGF0ZXN0KEFERF9QT1NUX1JFUVVFU1QsIGFkZFBvc3QpO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiogcG9zdFNhZ2EoKSB7XHJcbiAgeWllbGQgYWxsKFtcclxuICAgIGZvcmsod2F0Y2hSZXR3ZWV0KSxcclxuICAgIGZvcmsod2F0Y2hVcGxvYWRJbWFnZXMpLFxyXG4gICAgZm9yayh3YXRjaExpa2VQb3N0KSxcclxuICAgIGZvcmsod2F0Y2hVbmxpa2VQb3N0KSxcclxuICAgIGZvcmsod2F0Y2hBZGRQb3N0KSxcclxuICAgIGZvcmsod2F0Y2hMb2FkUG9zdHMpLFxyXG4gICAgZm9yayh3YXRjaFJlbW92ZVBvc3QpLFxyXG4gICAgZm9yayh3YXRjaEFkZENvbW1lbnQpLFxyXG4gIF0pO1xyXG59XHJcbiIsImltcG9ydCBheGlvcyBmcm9tIFwiYXhpb3NcIjtcclxuaW1wb3J0IHsgYWxsLCBmb3JrLCBwdXQsIHRha2VMYXRlc3QsIGRlbGF5LCBjYWxsIH0gZnJvbSBcInJlZHV4LXNhZ2EvZWZmZWN0c1wiO1xyXG5pbXBvcnQge1xyXG4gIExPR19JTl9GQUlMVVJFLFxyXG4gIExPR19JTl9SRVFVRVNULFxyXG4gIExPR19JTl9TVUNDRVNTLFxyXG4gIExPR19PVVRfRkFJTFVSRSxcclxuICBMT0dfT1VUX1JFUVVFU1QsXHJcbiAgTE9HX09VVF9TVUNDRVNTLFxyXG4gIFNJR05fVVBfUkVRVUVTVCxcclxuICBTSUdOX1VQX1NVQ0NFU1MsXHJcbiAgU0lHTl9VUF9GQUlMVVJFLFxyXG4gIFVORk9MTE9XX0ZBSUxVUkUsXHJcbiAgVU5GT0xMT1dfUkVRVUVTVCxcclxuICBVTkZPTExPV19TVUNDRVNTLFxyXG4gIEZPTExPV19GQUlMVVJFLFxyXG4gIEZPTExPV19SRVFVRVNULFxyXG4gIEZPTExPV19TVUNDRVNTLFxyXG4gIExPQURfTVlfSU5GT19TVUNDRVNTLFxyXG4gIExPQURfTVlfSU5GT19GQUlMVVJFLFxyXG4gIExPQURfTVlfSU5GT19SRVFVRVNULFxyXG4gIENIQU5HRV9OSUNLTkFNRV9SRVFVRVNULFxyXG4gIENIQU5HRV9OSUNLTkFNRV9TVUNDRVNTLFxyXG4gIENIQU5HRV9OSUNLTkFNRV9GQUlMVVJFLFxyXG4gIExPQURfRk9MTE9XSU5HU19SRVFVRVNULFxyXG4gIExPQURfRk9MTE9XRVJTX1JFUVVFU1QsXHJcbiAgTE9BRF9GT0xMT1dJTkdTX1NVQ0NFU1MsXHJcbiAgTE9BRF9GT0xMT1dJTkdTX0ZBSUxVUkUsXHJcbiAgTE9BRF9GT0xMT1dFUlNfRkFJTFVSRSxcclxuICBMT0FEX0ZPTExPV0VSU19TVUNDRVNTLFxyXG4gIFJFTU9WRV9GT0xMT1dFUl9SRVFVRVNULFxyXG4gIFJFTU9WRV9GT0xMT1dFUl9TVUNDRVNTLFxyXG4gIFJFTU9WRV9GT0xMT1dFUl9GQUlMVVJFLFxyXG59IGZyb20gXCIuLi9yZWR1Y2Vycy91c2VyXCI7XHJcblxyXG5mdW5jdGlvbiBsb2FkRm9sbG93ZXJzQVBJKGRhdGEpIHtcclxuICByZXR1cm4gYXhpb3MuZ2V0KFwiL3VzZXIvZm9sbG93ZXJzXCIsIGRhdGEpO1xyXG59XHJcblxyXG5mdW5jdGlvbiogbG9hZEZvbGxvd2VycyhhY3Rpb24pIHtcclxuICB0cnkge1xyXG4gICAgY29uc3QgcmVzdWx0ID0geWllbGQgY2FsbChsb2FkRm9sbG93ZXJzQVBJLCBhY3Rpb24uZGF0YSk7XHJcbiAgICAvLyB5aWVsZCBkZWxheSgxMDAwKTtcclxuICAgIGNvbnNvbGUubG9nKFwibG9hZEZvbGxvd2VycyByZXN1bHRcIiwgcmVzdWx0KTtcclxuICAgIHlpZWxkIHB1dCh7XHJcbiAgICAgIHR5cGU6IExPQURfRk9MTE9XRVJTX1NVQ0NFU1MsXHJcbiAgICAgIGRhdGE6IHJlc3VsdC5kYXRhLFxyXG4gICAgfSk7XHJcbiAgfSBjYXRjaCAoZXJyKSB7XHJcbiAgICB5aWVsZCBwdXQoe1xyXG4gICAgICB0eXBlOiBMT0FEX0ZPTExPV0VSU19GQUlMVVJFLFxyXG4gICAgICBlcnJvcjogZXJyLnJlc3BvbnNlLmRhdGEsXHJcbiAgICB9KTtcclxuICB9XHJcbn1cclxuZnVuY3Rpb24gbG9hZEZvbGxvd2luZ3NBUEkoZGF0YSkge1xyXG4gIHJldHVybiBheGlvcy5nZXQoXCIvdXNlci9mb2xsb3dpbmdzXCIsIGRhdGEpO1xyXG59XHJcblxyXG5mdW5jdGlvbiogbG9hZEZvbGxvd2luZ3MoYWN0aW9uKSB7XHJcbiAgdHJ5IHtcclxuICAgIGNvbnN0IHJlc3VsdCA9IHlpZWxkIGNhbGwobG9hZEZvbGxvd2luZ3NBUEksIGFjdGlvbi5kYXRhKTtcclxuICAgIC8vIHlpZWxkIGRlbGF5KDEwMDApO1xyXG4gICAgY29uc29sZS5sb2coXCJsb2FkRm9sbG93aW5nIHJlc3VsdFwiLCByZXN1bHQpO1xyXG4gICAgeWllbGQgcHV0KHtcclxuICAgICAgdHlwZTogTE9BRF9GT0xMT1dJTkdTX1NVQ0NFU1MsXHJcbiAgICAgIGRhdGE6IHJlc3VsdC5kYXRhLFxyXG4gICAgfSk7XHJcbiAgfSBjYXRjaCAoZXJyKSB7XHJcbiAgICB5aWVsZCBwdXQoe1xyXG4gICAgICB0eXBlOiBMT0FEX0ZPTExPV0lOR1NfRkFJTFVSRSxcclxuICAgICAgZXJyb3I6IGVyci5yZXNwb25zZS5kYXRhLFxyXG4gICAgfSk7XHJcbiAgfVxyXG59XHJcblxyXG4vLyDsnbzrtoAg6rCSIOyImOygleyLnOuKlCBQQVRDSCDsgqzsmqlcclxuZnVuY3Rpb24gY2hhbmdlTmlja25hbWVBUEkoZGF0YSkge1xyXG4gIHJldHVybiBheGlvcy5wYXRjaChcIi91c2VyL25pY2tuYW1lXCIsIHsgbmlja25hbWU6IGRhdGEgfSk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uKiBjaGFuZ2VOaWNrbmFtZShhY3Rpb24pIHtcclxuICB0cnkge1xyXG4gICAgY29uc29sZS5sb2coXCJzYWdhIGxvZ2luXCIpO1xyXG4gICAgY29uc3QgcmVzdWx0ID0geWllbGQgY2FsbChjaGFuZ2VOaWNrbmFtZUFQSSwgYWN0aW9uLmRhdGEpO1xyXG4gICAgLy8geWllbGQgZGVsYXkoMTAwMCk7XHJcbiAgICB5aWVsZCBwdXQoe1xyXG4gICAgICB0eXBlOiBDSEFOR0VfTklDS05BTUVfU1VDQ0VTUyxcclxuICAgICAgZGF0YTogcmVzdWx0LmRhdGEsXHJcbiAgICB9KTtcclxuICB9IGNhdGNoIChlcnIpIHtcclxuICAgIHlpZWxkIHB1dCh7XHJcbiAgICAgIHR5cGU6IENIQU5HRV9OSUNLTkFNRV9GQUlMVVJFLFxyXG4gICAgICBlcnJvcjogZXJyLnJlc3BvbnNlLmRhdGEsXHJcbiAgICB9KTtcclxuICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGxvYWRNeUluZm9BUEkoKSB7XHJcbiAgcmV0dXJuIGF4aW9zLmdldChcIi91c2VyXCIpO1xyXG59XHJcblxyXG4vLyBjb25zdCBsID0gbG9nSW4oe3R5cGU6ICdMT0dfSU5fUkVRVUVTVCcsIGRhdGE6IHtpZDogJ2poa2V2aW4yMUBnbWFpbC5jb20nfX0pXHJcbi8vIGwubmV4dCgpO1xyXG4vLyBsLm5leHQoKTtcclxuXHJcbmZ1bmN0aW9uKiBsb2FkTXlJbmZvKGFjdGlvbikge1xyXG4gIC8vIOyEseqztSDqsrDqs7zripQgcmVzdWx0LmRhdGHsl5AsIOyLpO2MqOqyveqzvOuKlCBlcnIucmVzcG9uc2UuZGF0YeyXkCDri7TqsqjsnojsnYxcclxuICAvLyBwdXTsnYAgZGlzcGF0Y2jrnbzqs6Ag7IOd6rCB7ZWY6riwXHJcbiAgdHJ5IHtcclxuICAgIC8vIGNvbnNvbGUubG9nKFwic2FnYSBsb2dpblwiKTtcclxuICAgIGNvbnN0IHJlc3VsdCA9IHlpZWxkIGNhbGwobG9hZE15SW5mb0FQSSwgYWN0aW9uLmRhdGEpO1xyXG4gICAgLy8geWllbGQgZGVsYXkoMTAwMCk7XHJcbiAgICB5aWVsZCBwdXQoe1xyXG4gICAgICB0eXBlOiBMT0FEX01ZX0lORk9fU1VDQ0VTUyxcclxuICAgICAgZGF0YTogcmVzdWx0LmRhdGEsXHJcbiAgICB9KTtcclxuICB9IGNhdGNoIChlcnIpIHtcclxuICAgIHlpZWxkIHB1dCh7XHJcbiAgICAgIHR5cGU6IExPQURfTVlfSU5GT19GQUlMVVJFLFxyXG4gICAgICBlcnJvcjogZXJyLnJlc3BvbnNlLmRhdGEsXHJcbiAgICB9KTtcclxuICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGxvZ0luQVBJKGRhdGEpIHtcclxuICByZXR1cm4gYXhpb3MucG9zdChcIi91c2VyL2xvZ2luXCIsIGRhdGEpO1xyXG59XHJcblxyXG4vLyBjb25zdCBsID0gbG9nSW4oe3R5cGU6ICdMT0dfSU5fUkVRVUVTVCcsIGRhdGE6IHtpZDogJ2poa2V2aW4yMUBnbWFpbC5jb20nfX0pXHJcbi8vIGwubmV4dCgpO1xyXG4vLyBsLm5leHQoKTtcclxuXHJcbmZ1bmN0aW9uKiBsb2dJbihhY3Rpb24pIHtcclxuICAvLyDshLHqs7Ug6rKw6rO864qUIHJlc3VsdC5kYXRh7JeQLCDsi6TtjKjqsr3qs7zripQgZXJyLnJlc3BvbnNlLmRhdGHsl5Ag64u06rKo7J6I7J2MXHJcbiAgLy8gcHV07J2AIGRpc3BhdGNo65286rOgIOyDneqwge2VmOq4sFxyXG4gIHRyeSB7XHJcbiAgICAvLyBjb25zb2xlLmxvZyhcInNhZ2EgbG9naW5cIik7XHJcbiAgICBjb25zdCByZXN1bHQgPSB5aWVsZCBjYWxsKGxvZ0luQVBJLCBhY3Rpb24uZGF0YSk7XHJcbiAgICAvLyB5aWVsZCBkZWxheSgxMDAwKTtcclxuICAgIHlpZWxkIHB1dCh7XHJcbiAgICAgIHR5cGU6IExPR19JTl9TVUNDRVNTLFxyXG4gICAgICBkYXRhOiByZXN1bHQuZGF0YSxcclxuICAgIH0pO1xyXG4gIH0gY2F0Y2ggKGVycikge1xyXG4gICAgeWllbGQgcHV0KHtcclxuICAgICAgdHlwZTogTE9HX0lOX0ZBSUxVUkUsXHJcbiAgICAgIGVycm9yOiBlcnIucmVzcG9uc2UuZGF0YSxcclxuICAgIH0pO1xyXG4gIH1cclxufVxyXG5cclxuZnVuY3Rpb24gbG9nT3V0QVBJKCkge1xyXG4gIHJldHVybiBheGlvcy5wb3N0KFwiL3VzZXIvbG9nb3V0XCIpO1xyXG59XHJcblxyXG5mdW5jdGlvbiogbG9nT3V0KCkge1xyXG4gIHRyeSB7XHJcbiAgICAvLyBjb25zb2xlLmxvZyhcInNhZ2EgbG9nb3V0XCIpO1xyXG4gICAgeWllbGQgY2FsbChsb2dPdXRBUEkpO1xyXG4gICAgLy8geWllbGQgZGVsYXkoMTAwMCk7XHJcbiAgICB5aWVsZCBwdXQoe1xyXG4gICAgICB0eXBlOiBMT0dfT1VUX1NVQ0NFU1MsXHJcbiAgICAgIC8vICAgZGF0YTogcmVzdWx0LmRhdGEsXHJcbiAgICB9KTtcclxuICB9IGNhdGNoIChlcnIpIHtcclxuICAgIHlpZWxkIHB1dCh7XHJcbiAgICAgIHR5cGU6IExPR19PVVRfRkFJTFVSRSxcclxuICAgICAgZXJyb3I6IGVyci5yZXNwb25zZS5kYXRhLFxyXG4gICAgfSk7XHJcbiAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiBzaWduVXBBUEkoZGF0YSkge1xyXG4gIHJldHVybiBheGlvcy5wb3N0KFwiL3VzZXJcIiwgZGF0YSk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uKiBzaWduVXAoYWN0aW9uKSB7XHJcbiAgdHJ5IHtcclxuICAgIGNvbnNvbGUubG9nKFwic2FnYSBzaWduVXBcIik7XHJcbiAgICBjb25zdCByZXN1bHQgPSB5aWVsZCBjYWxsKHNpZ25VcEFQSSwgYWN0aW9uLmRhdGEpO1xyXG4gICAgY29uc29sZS5sb2cocmVzdWx0KTtcclxuICAgIC8vIHlpZWxkIGRlbGF5KDEwMDApO1xyXG4gICAgeWllbGQgcHV0KHtcclxuICAgICAgdHlwZTogU0lHTl9VUF9TVUNDRVNTLFxyXG4gICAgfSk7XHJcbiAgfSBjYXRjaCAoZXJyKSB7XHJcbiAgICB5aWVsZCBwdXQoe1xyXG4gICAgICB0eXBlOiBTSUdOX1VQX0ZBSUxVUkUsXHJcbiAgICAgIGVycm9yOiBlcnIucmVzcG9uc2UuZGF0YSxcclxuICAgIH0pO1xyXG4gIH1cclxufVxyXG5cclxuZnVuY3Rpb24gZm9sbG93QVBJKGRhdGEpIHtcclxuICByZXR1cm4gYXhpb3MucGF0Y2goYC91c2VyLyR7ZGF0YX0vZm9sbG93YCk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uKiBmb2xsb3coYWN0aW9uKSB7XHJcbiAgdHJ5IHtcclxuICAgIGNvbnN0IHJlc3VsdCA9IHlpZWxkIGNhbGwoZm9sbG93QVBJLCBhY3Rpb24uZGF0YSk7XHJcbiAgICAvLyB5aWVsZCBkZWxheSgxMDAwKTtcclxuXHJcbiAgICB5aWVsZCBwdXQoe1xyXG4gICAgICB0eXBlOiBGT0xMT1dfU1VDQ0VTUyxcclxuICAgICAgZGF0YTogcmVzdWx0LmRhdGEsXHJcbiAgICB9KTtcclxuICB9IGNhdGNoIChlcnIpIHtcclxuICAgIGNvbnNvbGUuZXJyb3IoZXJyKTtcclxuICAgIHlpZWxkIHB1dCh7XHJcbiAgICAgIHR5cGU6IEZPTExPV19GQUlMVVJFLFxyXG4gICAgICBlcnJvcjogZXJyLnJlc3BvbnNlLmRhdGEsXHJcbiAgICB9KTtcclxuICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHVuRm9sbG93QVBJKGRhdGEpIHtcclxuICByZXR1cm4gYXhpb3MuZGVsZXRlKGAvdXNlci8ke2RhdGF9L2ZvbGxvd2ApO1xyXG59XHJcblxyXG5mdW5jdGlvbiogdW5Gb2xsb3coYWN0aW9uKSB7XHJcbiAgdHJ5IHtcclxuICAgIGNvbnN0IHJlc3VsdCA9IHlpZWxkIGNhbGwodW5Gb2xsb3dBUEksIGFjdGlvbi5kYXRhKTtcclxuICAgIC8vIHlpZWxkIGRlbGF5KDEwMDApO1xyXG4gICAgLy8g7JWE656Y64qUIHBvc3QgcmVkdWNlciDsobDsnpEg67aA67aEXHJcbiAgICB5aWVsZCBwdXQoe1xyXG4gICAgICB0eXBlOiBVTkZPTExPV19TVUNDRVNTLFxyXG4gICAgICBkYXRhOiByZXN1bHQuZGF0YSxcclxuICAgIH0pO1xyXG4gIH0gY2F0Y2ggKGVycikge1xyXG4gICAgY29uc29sZS5lcnJvcihlcnIpO1xyXG4gICAgeWllbGQgcHV0KHtcclxuICAgICAgdHlwZTogVU5GT0xMT1dfRkFJTFVSRSxcclxuICAgICAgZXJyb3I6IGVyci5yZXNwb25zZS5kYXRhLFxyXG4gICAgfSk7XHJcbiAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiByZW1vdmVGb2xsb3dlckFQSShkYXRhKSB7XHJcbiAgcmV0dXJuIGF4aW9zLmRlbGV0ZShgL3VzZXIvRk9MTE9XRVIvJHtkYXRhfWApO1xyXG59XHJcblxyXG5mdW5jdGlvbiogcmVtb3ZlRm9sbG93ZXIoYWN0aW9uKSB7XHJcbiAgdHJ5IHtcclxuICAgIGNvbnN0IHJlc3VsdCA9IHlpZWxkIGNhbGwocmVtb3ZlRm9sbG93ZXJBUEksIGFjdGlvbi5kYXRhKTtcclxuICAgIC8vIHlpZWxkIGRlbGF5KDEwMDApO1xyXG4gICAgLy8g7JWE656Y64qUIHBvc3QgcmVkdWNlciDsobDsnpEg67aA67aEXHJcbiAgICB5aWVsZCBwdXQoe1xyXG4gICAgICB0eXBlOiBSRU1PVkVfRk9MTE9XRVJfU1VDQ0VTUyxcclxuICAgICAgZGF0YTogcmVzdWx0LmRhdGEsXHJcbiAgICB9KTtcclxuICB9IGNhdGNoIChlcnIpIHtcclxuICAgIGNvbnNvbGUuZXJyb3IoZXJyKTtcclxuICAgIHlpZWxkIHB1dCh7XHJcbiAgICAgIHR5cGU6IFJFTU9WRV9GT0xMT1dFUl9GQUlMVVJFLFxyXG4gICAgICBlcnJvcjogZXJyLnJlc3BvbnNlLmRhdGEsXHJcbiAgICB9KTtcclxuICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uKiB3YXRjaExvYWRGb2xsb3dpbmdzKCkge1xyXG4gIHlpZWxkIHRha2VMYXRlc3QoTE9BRF9GT0xMT1dJTkdTX1JFUVVFU1QsIGxvYWRGb2xsb3dpbmdzKTtcclxufVxyXG5mdW5jdGlvbiogd2F0Y2hMb2FkRm9sbG93ZXJzKCkge1xyXG4gIHlpZWxkIHRha2VMYXRlc3QoTE9BRF9GT0xMT1dFUlNfUkVRVUVTVCwgbG9hZEZvbGxvd2Vycyk7XHJcbn1cclxuZnVuY3Rpb24qIHdhdGNoQ2hhbmdlTmlja25hbWUoKSB7XHJcbiAgeWllbGQgdGFrZUxhdGVzdChDSEFOR0VfTklDS05BTUVfUkVRVUVTVCwgY2hhbmdlTmlja25hbWUpO1xyXG59XHJcblxyXG5mdW5jdGlvbiogd2F0Y2hMb2FkTXlJbmZvKCkge1xyXG4gIHlpZWxkIHRha2VMYXRlc3QoTE9BRF9NWV9JTkZPX1JFUVVFU1QsIGxvYWRNeUluZm8pO1xyXG59XHJcblxyXG5mdW5jdGlvbiogd2F0Y2hMb2dJbigpIHtcclxuICB5aWVsZCB0YWtlTGF0ZXN0KExPR19JTl9SRVFVRVNULCBsb2dJbik7XHJcbn1cclxuXHJcbmZ1bmN0aW9uKiB3YXRjaExvZ091dCgpIHtcclxuICB5aWVsZCB0YWtlTGF0ZXN0KExPR19PVVRfUkVRVUVTVCwgbG9nT3V0KTtcclxufVxyXG5mdW5jdGlvbiogd2F0Y2hTaWduVXAoKSB7XHJcbiAgeWllbGQgdGFrZUxhdGVzdChTSUdOX1VQX1JFUVVFU1QsIHNpZ25VcCk7XHJcbn1cclxuZnVuY3Rpb24qIHdhdGNoRm9sbG93KCkge1xyXG4gIHlpZWxkIHRha2VMYXRlc3QoRk9MTE9XX1JFUVVFU1QsIGZvbGxvdyk7XHJcbn1cclxuZnVuY3Rpb24qIHdhdGNoVW5Gb2xsb3coKSB7XHJcbiAgeWllbGQgdGFrZUxhdGVzdChVTkZPTExPV19SRVFVRVNULCB1bkZvbGxvdyk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uKiB3YXRjaFJlbW92ZUZvbGxvd2VyKCkge1xyXG4gIHlpZWxkIHRha2VMYXRlc3QoUkVNT1ZFX0ZPTExPV0VSX1JFUVVFU1QsIHJlbW92ZUZvbGxvd2VyKTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24qIHVzZXJTYWdhKCkge1xyXG4gIHlpZWxkIGFsbChbXHJcbiAgICBmb3JrKHdhdGNoQ2hhbmdlTmlja25hbWUpLFxyXG4gICAgZm9yayh3YXRjaExvYWRGb2xsb3dlcnMpLFxyXG4gICAgZm9yayh3YXRjaExvYWRGb2xsb3dpbmdzKSxcclxuICAgIGZvcmsod2F0Y2hMb2FkTXlJbmZvKSxcclxuICAgIGZvcmsod2F0Y2hMb2dJbiksXHJcbiAgICBmb3JrKHdhdGNoTG9nT3V0KSxcclxuICAgIGZvcmsod2F0Y2hTaWduVXApLFxyXG4gICAgZm9yayh3YXRjaEZvbGxvdyksXHJcbiAgICBmb3JrKHdhdGNoVW5Gb2xsb3cpLFxyXG4gICAgZm9yayh3YXRjaFJlbW92ZUZvbGxvd2VyKSxcclxuICBdKTtcclxufVxyXG4iLCIvLyBpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcblxyXG5pbXBvcnQgeyBjcmVhdGVXcmFwcGVyIH0gZnJvbSBcIm5leHQtcmVkdXgtd3JhcHBlclwiO1xyXG5pbXBvcnQgeyBjcmVhdGVTdG9yZSwgYXBwbHlNaWRkbGV3YXJlLCBjb21wb3NlIH0gZnJvbSBcInJlZHV4XCI7XHJcbmltcG9ydCB7IGNvbXBvc2VXaXRoRGV2VG9vbHMgfSBmcm9tIFwicmVkdXgtZGV2dG9vbHMtZXh0ZW5zaW9uXCI7XHJcbmltcG9ydCBjcmVhdGVTYWdhTWlkZGxld2FyZSBmcm9tIFwicmVkdXgtc2FnYVwiO1xyXG5cclxuaW1wb3J0IHJlZHVjZXIgZnJvbSBcIi4uL3JlZHVjZXJzL2luZGV4XCI7XHJcbmltcG9ydCByb290U2FnYSBmcm9tIFwiLi4vc2FnYXNcIjtcclxuXHJcbmNvbnN0IGxvZ2dlck1pZGRsZXdhcmUgPVxyXG4gICh7IGRpc3BhdGNoLCBnZXRTdGF0ZSB9KSA9PlxyXG4gIChuZXh0KSA9PlxyXG4gIChhY3Rpb24pID0+IHtcclxuICAgIC8vIGlmICh0eXBlb2YgYWN0aW9uID09PSBcImZ1bmN0aW9uXCIpIHtcclxuICAgIC8vICAgcmV0dXJuIGFjdGlvbihkaXNwYXRjaCwgZ2V0U3RhdGUpO1xyXG4gICAgLy8gfVxyXG4gICAgY29uc29sZS5sb2coYWN0aW9uKTtcclxuICAgIHJldHVybiBuZXh0KGFjdGlvbik7XHJcbiAgfTtcclxuXHJcbmNvbnN0IGNvbmZpZ3VyZVN0b3JlID0gKCkgPT4ge1xyXG4gIGNvbnN0IHNhZ2FNaWRkbGV3YXJlID0gY3JlYXRlU2FnYU1pZGRsZXdhcmUoKTtcclxuICBjb25zdCBtaWRkbGV3YXJlcyA9IFtzYWdhTWlkZGxld2FyZSwgbG9nZ2VyTWlkZGxld2FyZV07XHJcbiAgY29uc3QgZW5oYW5jZXIgPVxyXG4gICAgcHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09IFwicHJvZHVjdGlvblwiXHJcbiAgICAgID8gY29tcG9zZShhcHBseU1pZGRsZXdhcmUoLi4ubWlkZGxld2FyZXMpKVxyXG4gICAgICA6IGNvbXBvc2VXaXRoRGV2VG9vbHMoYXBwbHlNaWRkbGV3YXJlKC4uLm1pZGRsZXdhcmVzKSk7XHJcbiAgLy/snIQg7ISk66qFOiDqsJzrsJzsmqkgbWlkZGxld2FyZeuekSDrsLDtj6zsmqkgbWlkZGxld2FyZeuKlCDri6TrpbTquLAg65WM66y47JeQIOychOyZgCDqsJnsnbQg7KCV7J2YIO2VqC5cclxuXHJcbiAgY29uc3Qgc3RvcmUgPSBjcmVhdGVTdG9yZShyZWR1Y2VyLCBlbmhhbmNlcik7XHJcbiAgc3RvcmUuc2FnYVRhc2sgPSBzYWdhTWlkZGxld2FyZS5ydW4ocm9vdFNhZ2EpO1xyXG4gIC8vIHN0b3JlLmRpc3BhdGNoKHtcclxuICAvLyAgIHR5cGU6IFwiQ0hBTkdFX05JQ0tOQU1FXCIsXHJcbiAgLy8gICBkYXRhOiBcIkphZWhhblwiLFxyXG4gIC8vIH0pO1xyXG4gIHJldHVybiBzdG9yZTtcclxufTtcclxuXHJcbmNvbnN0IHdyYXBwZXIgPSBjcmVhdGVXcmFwcGVyKGNvbmZpZ3VyZVN0b3JlLCB7IGRlYnVnOiBwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gXCJkZXZlbG9wbWVudFwiIH0pO1xyXG4vL+ychOyZgCDqsJnsnbQg7ZWY66m0IHJlZHV4IOyCrOyaqeyLnCDrrLjsoJzsoJDrk7HsnbQg642UIOyekOyEuO2eiCDrgpjsmLQuIOuUsOudvOyEnCDsnITsmYAg6rCZ7J20IOyEpOyglSDtlZjquLBcclxuXHJcbmV4cG9ydCBkZWZhdWx0IHdyYXBwZXI7XHJcbiIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImF4aW9zXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImltbWVyXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQtcmVkdXgtc2FnYVwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0LXJlZHV4LXdyYXBwZXJcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9oZWFkXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInByb3AtdHlwZXNcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3RcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QvanN4LWRldi1ydW50aW1lXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlZHV4XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlZHV4LWRldnRvb2xzLWV4dGVuc2lvblwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWR1eC1zYWdhXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlZHV4LXNhZ2EvZWZmZWN0c1wiKTsiXSwic291cmNlUm9vdCI6IiJ9