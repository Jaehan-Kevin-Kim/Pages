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
/*! exports provided: initialState, generateDummyPost, LOAD_POSTS_REQUEST, LOAD_POSTS_SUCCESS, LOAD_POSTS_FAILURE, ADD_POST_REQUEST, ADD_POST_SUCCESS, ADD_POST_FAILURE, REMOVE_POST_REQUEST, REMOVE_POST_SUCCESS, REMOVE_POST_FAILURE, ADD_COMMENT_REQUEST, ADD_COMMENT_SUCCESS, ADD_COMMENT_FAILURE, addPost, addComment, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initialState", function() { return initialState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "generateDummyPost", function() { return generateDummyPost; });
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
/* harmony import */ var shortid__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! shortid */ "shortid");
/* harmony import */ var shortid__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(shortid__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var immer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! immer */ "immer");
/* harmony import */ var immer__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(immer__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var faker__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! faker */ "faker");
/* harmony import */ var faker__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(faker__WEBPACK_IMPORTED_MODULE_2__);



const initialState = {
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
const generateDummyPost = number => Array(number).fill().map(() => ({
  id: shortid__WEBPACK_IMPORTED_MODULE_0___default.a.generate(),
  User: {
    id: shortid__WEBPACK_IMPORTED_MODULE_0___default.a.generate(),
    nickname: faker__WEBPACK_IMPORTED_MODULE_2___default.a.name.findName()
  },
  content: faker__WEBPACK_IMPORTED_MODULE_2___default.a.lorem.paragraph(),
  Images: [{
    src: faker__WEBPACK_IMPORTED_MODULE_2___default.a.image.image()
  }],
  Comments: [{
    User: {
      id: shortid__WEBPACK_IMPORTED_MODULE_0___default.a.generate(),
      nickname: faker__WEBPACK_IMPORTED_MODULE_2___default.a.name.findName()
    },
    content: faker__WEBPACK_IMPORTED_MODULE_2___default.a.lorem.sentence()
  }]
})); // initialState.mainPosts = initialState.mainPosts.concat(generateDummyPost(10));

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

const dummyPost = data => ({
  id: data.id,
  content: data.content,
  User: {
    id: 1,
    nickname: "Kevin"
  },
  Images: [],
  Comments: []
});

const dummyComment = data => ({
  id: shortid__WEBPACK_IMPORTED_MODULE_0___default.a.generate(),
  content: data,
  User: {
    id: 1,
    nickname: "Kevin"
  }
}); //reducer: 이전 상태를 액션을 통해 다음 상태로 만들어내는 함수 (불변성은 지키면서)


const reducer = (state = initialState, action) => {
  // immer: 이전 상태를 액션을 통해 다음 상태로 만들어내는 함수 (불변성 안지켜도 immer가 알아서 지켜줌.)
  // 여기부터는 draft가 state처럼 사용되고 이건 막 바꿔도 됨. (immer가 알아서 처리해 주므로)
  return immer__WEBPACK_IMPORTED_MODULE_1___default()(state, draft => {
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
          draft.addPostDone = true; // draft.mainPosts = [dummyPost(action.data), ...state.mainPosts]; //이렇게 하거나 혹은 아래와 같이 unshift사용 하면 배열값을 따로 정의안하고 (...이 사라 짐) 바로 사용가능 함

          draft.mainPosts.unshift(dummyPost(action.data));
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
          draft.mainPosts = draft.mainPosts.filter(v => v.id !== action.data);
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
          const post = draft.mainPosts.find(v => v.id === action.data.postId);
          post.Comments.unshift(dummyComment(action.data.content));
          draft.addCommentLoading = false;
          draft.addcommentDone = true;
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
/*! exports provided: initialState, LOG_IN_REQUEST, LOG_IN_SUCCESS, LOG_IN_FAILURE, LOG_OUT_REQUEST, LOG_OUT_SUCCESS, LOG_OUT_FAILURE, SIGN_UP_REQUEST, SIGN_UP_SUCCESS, SIGN_UP_FAILURE, CHANGE_NICKNAME_REQUEST, CHANGE_NICKNAME_SUCCESS, CHANGE_NICKNAME_FAILURE, FOLLOW_REQUEST, FOLLOW_SUCCESS, FOLLOW_FAILURE, UNFOLLOW_REQUEST, UNFOLLOW_SUCCESS, UNFOLLOW_FAILURE, ADD_POST_TO_ME, REMOVE_POST_OF_ME, loginRequestAction, logoutRequestAction, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initialState", function() { return initialState; });
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
  unfollowLoading: false,
  // 언팔로우 시도중
  unfollowDone: false,
  unfollowError: null,
  followLoading: false,
  // 팔로우 시도중
  followDone: false,
  followError: null,
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
const LOG_IN_REQUEST = "LOG_IN_REQUEST";
const LOG_IN_SUCCESS = "LOG_IN_SUCCESS";
const LOG_IN_FAILURE = "LOG_IN_FAILURE";
const LOG_OUT_REQUEST = "LOG_OUT_REQUEST";
const LOG_OUT_SUCCESS = "LOG_OUT_SUCCESS";
const LOG_OUT_FAILURE = "LOG_OUT_FAILURE";
const SIGN_UP_REQUEST = "SIGN_UP_REQUEST";
const SIGN_UP_SUCCESS = "SIGN_UP_SUCCESS";
const SIGN_UP_FAILURE = "SIGN_UP_FAILURE";
const CHANGE_NICKNAME_REQUEST = "SIGN_UP_REQUEST";
const CHANGE_NICKNAME_SUCCESS = "SIGN_UP_SUCCESS";
const CHANGE_NICKNAME_FAILURE = "SIGN_UP_FAILURE";
const FOLLOW_REQUEST = "FOLLOW_REQUEST";
const FOLLOW_SUCCESS = "FOLLOW_SUCCESS";
const FOLLOW_FAILURE = "FOLLOW_FAILURE";
const UNFOLLOW_REQUEST = "UNFOLLOW_REQUEST";
const UNFOLLOW_SUCCESS = "UNFOLLOW_SUCCESS";
const UNFOLLOW_FAILURE = "UNFOLLOW_FAILURE";
const ADD_POST_TO_ME = "ADD_POST_TO_ME";
const REMOVE_POST_OF_ME = "REMOVE_POST_OF_ME";

const dummyUser = data => _objectSpread(_objectSpread({}, data), {}, {
  nickname: "Kevin Kim",
  id: 1,
  Posts: [{
    id: 1
  }],
  Followings: [{
    nickname: "cho"
  }, {
    nickname: "kim"
  }, {
    nickname: "lee"
  }],
  Followers: [{
    nickname: "cho"
  }, {
    nickname: "kim"
  }, {
    nickname: "lee"
  }]
});

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
      case UNFOLLOW_REQUEST:
        {
          draft.unfollowLoading = true;
          draft.unfollowError = null;
          draft.unfollowDone = false;
          break;
        }

      case UNFOLLOW_SUCCESS:
        draft.unfollowLoading = false;
        draft.unfollowDone = true;
        draft.me.Followings = draft.me.Followings.filter(v => v.id !== action.data); // draft.me.Followings.push({ id: action.data });

        break;

      case UNFOLLOW_FAILURE:
        draft.unfollowLoading = false;
        draft.unfollowError = action.error;
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
          id: action.data
        });
        break;

      case FOLLOW_FAILURE:
        draft.followLoading = false;
        draft.followError = action.error;
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
        draft.logInDone = true;
        draft.me = dummyUser(action.data);
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
        console.log("reducer signUp");
        break;
        return _objectSpread(_objectSpread({}, state), {}, {
          changeNicknameLoading: true,
          changeNicknameDone: false,
          changeNicknameError: null
        });

      case CHANGE_NICKNAME_SUCCESS:
        draft.changeNicknameLoading = false;
        draft.changeNicknameDone = true;
        break;
      // return { ...state, changeNicknameLoading: false, changeNicknameDone: true };

      case CHANGE_NICKNAME_FAILURE:
        draft.changeNicknameLoading = false;
        draft.changeNicknameError = action.error;
        break;
        return _objectSpread(_objectSpread({}, state), {}, {
          changeNicknameLoading: false,
          changeNicknameError: action.error
        });

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
/* harmony import */ var _post__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./post */ "./sagas/post.js");
/* harmony import */ var _user__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./user */ "./sagas/user.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! axios */ "axios");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_3__);




axios__WEBPACK_IMPORTED_MODULE_3___default.a.defaults.baseURL = "http://localhost:3065";
function* rootSaga() {
  //ALL을 하면 배열안의 모든 것들을 한번에 다 실행 함.
  //fork는 함수를 실행한다는 뜻 .
  //fork대신 call을 쓰는 경우도 있음. 하지만 두개의 차이점 정확히 알기.
  //ㄴ FORK는 비동기 함수 호출 / call은 동기 함수 호출
  // yield는 await과 비슷함.
  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["all"])([Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["fork"])(_post__WEBPACK_IMPORTED_MODULE_1__["default"]), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["fork"])(_user__WEBPACK_IMPORTED_MODULE_2__["default"])]);
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
/* harmony import */ var shortid__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! shortid */ "shortid");
/* harmony import */ var shortid__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(shortid__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _reducers_post__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../reducers/post */ "./reducers/post.js");
/* harmony import */ var _reducers_user__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../reducers/user */ "./reducers/user.js");






function loadPostsAPI(data) {
  return axios__WEBPACK_IMPORTED_MODULE_0___default.a.get("/api/posts", data);
}

function* loadPosts(action) {
  try {
    console.log("loadPosts in Saga"); // const result = yield call(loadPostsAPI, action.data);

    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["delay"])(1000);
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])({
      type: _reducers_post__WEBPACK_IMPORTED_MODULE_3__["LOAD_POSTS_SUCCESS"],
      data: Object(_reducers_post__WEBPACK_IMPORTED_MODULE_3__["generateDummyPost"])(10)
    });
  } catch (err) {
    console.error(err);
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])({
      type: _reducers_post__WEBPACK_IMPORTED_MODULE_3__["LOAD_POSTS_FAILURE"],
      data: err.response.data
    });
  }
}

function addPostAPI(data) {
  return axios__WEBPACK_IMPORTED_MODULE_0___default.a.post("/api/post", data);
}

function* addPost(action) {
  try {
    // const result = yield call(addPostAPI, action.data);
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["delay"])(1000);
    const id = shortid__WEBPACK_IMPORTED_MODULE_2___default.a.generate(); // 아래는 post reducer 조작 부분

    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])({
      type: _reducers_post__WEBPACK_IMPORTED_MODULE_3__["ADD_POST_SUCCESS"],
      data: {
        id,
        content: action.data
      }
    }); // 아래는 user reducer 조작 부분

    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])({
      type: _reducers_user__WEBPACK_IMPORTED_MODULE_4__["ADD_POST_TO_ME"],
      data: id
    });
  } catch (err) {
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])({
      type: _reducers_post__WEBPACK_IMPORTED_MODULE_3__["ADD_POST_FAILURE"],
      data: err.response.data
    });
  }
}

function removePostAPI(data) {
  return axios__WEBPACK_IMPORTED_MODULE_0___default.a.delete("/api/post", data);
}

function* removePost(action) {
  try {
    // const result = yield call(removePostAPI, action.data);
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["delay"])(1000); // 아래는 post reducer 조작 부분

    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])({
      type: _reducers_post__WEBPACK_IMPORTED_MODULE_3__["REMOVE_POST_SUCCESS"],
      data: action.data
    }); // 아래는 user reducer 조작 부분

    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])({
      type: _reducers_user__WEBPACK_IMPORTED_MODULE_4__["REMOVE_POST_OF_ME"],
      data: action.data
    });
  } catch (err) {
    console.error(err);
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])({
      type: _reducers_post__WEBPACK_IMPORTED_MODULE_3__["REMOVE_POST_FAILURE"],
      data: err.response.data
    });
  }
}

function addCommentAPI(data) {
  return axios__WEBPACK_IMPORTED_MODULE_0___default.a.post("/api/post/${id}/comment;'", data);
}

function* addComment(action) {
  try {
    // const result = yield call(addPostAPI, action.data);
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["delay"])(1000);
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])({
      type: _reducers_post__WEBPACK_IMPORTED_MODULE_3__["ADD_COMMENT_SUCCESS"],
      data: action.data
    });
  } catch (err) {
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])({
      type: _reducers_post__WEBPACK_IMPORTED_MODULE_3__["ADD_COMMENT_FAILURE"],
      data: err.response.data
    });
  }
}

function* watchLoadPosts() {
  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["throttle"])(2000, _reducers_post__WEBPACK_IMPORTED_MODULE_3__["LOAD_POSTS_REQUEST"], loadPosts);
}

function* watchAddComment() {
  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["takeLatest"])(_reducers_post__WEBPACK_IMPORTED_MODULE_3__["ADD_COMMENT_REQUEST"], addComment);
}

function* watchRemovePost() {
  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["takeLatest"])(_reducers_post__WEBPACK_IMPORTED_MODULE_3__["REMOVE_POST_REQUEST"], removePost);
}

function* watchAddPost() {
  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["takeLatest"])(_reducers_post__WEBPACK_IMPORTED_MODULE_3__["ADD_POST_REQUEST"], addPost);
}

function* postSaga() {
  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["all"])([Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["fork"])(watchAddPost), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["fork"])(watchLoadPosts), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["fork"])(watchRemovePost), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["fork"])(watchAddComment)]);
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




function logInAPI(data) {
  return axios__WEBPACK_IMPORTED_MODULE_0___default.a.post("/user/login", data);
} // const l = logIn({type: 'LOG_IN_REQUEST', data: {id: 'jhkevin21@gmail.com'}})
// l.next();
// l.next();


function* logIn(action) {
  // 성공 결과는 result.data에, 실패경과는 err.response.data에 담겨있음
  // put은 dispatch라고 생각하기
  try {
    console.log("saga login");
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
    console.log("saga logout"); // const result = yield call(logOutAPI);

    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["delay"])(1000);
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
  return axios__WEBPACK_IMPORTED_MODULE_0___default.a.post("/api/follow");
}

function* follow(action) {
  try {
    // const result = yield call(followAPI, action.data);
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["delay"])(1000);
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])({
      type: _reducers_user__WEBPACK_IMPORTED_MODULE_2__["FOLLOW_SUCCESS"],
      data: action.data
    });
  } catch (err) {
    console.error(err);
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])({
      type: _reducers_user__WEBPACK_IMPORTED_MODULE_2__["FOLLOW_FAILURE"],
      data: err.response.data
    });
  }
}

function unFollowAPI(data) {
  return axios__WEBPACK_IMPORTED_MODULE_0___default.a.delete("/api/post", data);
}

function* unFollow(action) {
  try {
    // const result = yield call(unFollowAPI, action.data);
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["delay"])(1000); // 아래는 post reducer 조작 부분

    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])({
      type: _reducers_user__WEBPACK_IMPORTED_MODULE_2__["UNFOLLOW_SUCCESS"],
      data: action.data
    });
  } catch (err) {
    console.error(err);
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])({
      type: _reducers_user__WEBPACK_IMPORTED_MODULE_2__["UNFOLLOW_FAILURE"],
      data: err.response.data
    });
  }
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

function* userSaga() {
  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["all"])([Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["fork"])(watchLogIn), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["fork"])(watchLogOut), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["fork"])(watchSignUp), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["fork"])(watchFollow), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["fork"])(watchUnFollow)]);
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

/***/ "faker":
/*!************************!*\
  !*** external "faker" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("faker");

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

/***/ }),

/***/ "shortid":
/*!**************************!*\
  !*** external "shortid" ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("shortid");

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vcGFnZXMvX2FwcC5qcyIsIndlYnBhY2s6Ly8vLi9yZWR1Y2Vycy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9yZWR1Y2Vycy9wb3N0LmpzIiwid2VicGFjazovLy8uL3JlZHVjZXJzL3VzZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc2FnYXMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc2FnYXMvcG9zdC5qcyIsIndlYnBhY2s6Ly8vLi9zYWdhcy91c2VyLmpzIiwid2VicGFjazovLy8uL3N0b3JlL2NvbmZpZ3VyZVN0b3JlLmpzIiwid2VicGFjazovLy9leHRlcm5hbCBcImF4aW9zXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiZmFrZXJcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJpbW1lclwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIm5leHQtcmVkdXgtc2FnYVwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIm5leHQtcmVkdXgtd3JhcHBlclwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIm5leHQvaGVhZFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInByb3AtdHlwZXNcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0L2pzeC1kZXYtcnVudGltZVwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlZHV4XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVkdXgtZGV2dG9vbHMtZXh0ZW5zaW9uXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVkdXgtc2FnYVwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlZHV4LXNhZ2EvZWZmZWN0c1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcInNob3J0aWRcIiJdLCJuYW1lcyI6WyJOb2RlQmlyZCIsIkNvbXBvbmVudCIsInByb3BUeXBlcyIsIlByb3BUeXBlcyIsImVsZW1lbnRUeXBlIiwiaXNSZXF1aXJlZCIsIndyYXBwZXIiLCJ3aXRoUmVkdXgiLCJ3aXRoUmVkdXhTYWdhIiwicm9vdFJlZHVjZXIiLCJjb21iaW5lUmVkdWNlcnMiLCJpbmRleCIsInN0YXRlIiwiYWN0aW9uIiwidHlwZSIsIkhZRFJBVEUiLCJjb25zb2xlIiwibG9nIiwicGF5bG9hZCIsInVzZXIiLCJwb3N0IiwiaW5pdGlhbFN0YXRlIiwibWFpblBvc3RzIiwiaW1hZ2VQYXRocyIsImhhc01vcmVQb3N0cyIsImxvYWRQb3N0c0xvYWRpbmciLCJsb2FkUG9zdHNEb25lIiwibG9hZFBvc3RzRXJyb3IiLCJhZGRQb3N0TG9hZGluZyIsImFkZFBvc3REb25lIiwiYWRkUG9zdEVycm9yIiwicmVtb3ZlUG9zdExvYWRpbmciLCJyZW1vdmVQb3N0RG9uZSIsInJlbW92ZVBvc3RFcnJvciIsImFkZENvbW1lbnRMb2FkaW5nIiwiYWRkQ29tbWVudERvbmUiLCJhZGRDb21tZW50RXJyb3IiLCJnZW5lcmF0ZUR1bW15UG9zdCIsIm51bWJlciIsIkFycmF5IiwiZmlsbCIsIm1hcCIsImlkIiwic2hvcnRJZCIsImdlbmVyYXRlIiwiVXNlciIsIm5pY2tuYW1lIiwiZmFrZXIiLCJuYW1lIiwiZmluZE5hbWUiLCJjb250ZW50IiwibG9yZW0iLCJwYXJhZ3JhcGgiLCJJbWFnZXMiLCJzcmMiLCJpbWFnZSIsIkNvbW1lbnRzIiwic2VudGVuY2UiLCJMT0FEX1BPU1RTX1JFUVVFU1QiLCJMT0FEX1BPU1RTX1NVQ0NFU1MiLCJMT0FEX1BPU1RTX0ZBSUxVUkUiLCJBRERfUE9TVF9SRVFVRVNUIiwiQUREX1BPU1RfU1VDQ0VTUyIsIkFERF9QT1NUX0ZBSUxVUkUiLCJSRU1PVkVfUE9TVF9SRVFVRVNUIiwiUkVNT1ZFX1BPU1RfU1VDQ0VTUyIsIlJFTU9WRV9QT1NUX0ZBSUxVUkUiLCJBRERfQ09NTUVOVF9SRVFVRVNUIiwiQUREX0NPTU1FTlRfU1VDQ0VTUyIsIkFERF9DT01NRU5UX0ZBSUxVUkUiLCJhZGRQb3N0IiwiZGF0YSIsImFkZENvbW1lbnQiLCJkdW1teVBvc3QiLCJkdW1teUNvbW1lbnQiLCJyZWR1Y2VyIiwicHJvZHVjZSIsImRyYWZ0IiwiY29uY2F0IiwibGVuZ3RoIiwiZXJyb3IiLCJ1bnNoaWZ0IiwiZmlsdGVyIiwidiIsImZpbmQiLCJwb3N0SWQiLCJhZGRjb21tZW50RG9uZSIsImFkZENvb21lbnRMb2FkaW5nIiwidW5mb2xsb3dMb2FkaW5nIiwidW5mb2xsb3dEb25lIiwidW5mb2xsb3dFcnJvciIsImZvbGxvd0xvYWRpbmciLCJmb2xsb3dEb25lIiwiZm9sbG93RXJyb3IiLCJsb2dJbkxvYWRpbmciLCJsb2dJbkRvbmUiLCJsb2dJbkVycm9yIiwibG9nT3V0TG9hZGluZyIsImxvZ091dERvbmUiLCJsb2dPdXRFcnJvciIsInNpZ25VcExvYWRpbmciLCJzaWduVXBEb25lIiwic2lnblVwRXJyb3IiLCJjaGFuZ2VOaWNrbmFtZUxvYWRpbmciLCJjaGFuZ2VOaWNrbmFtZURvbmUiLCJjaGFuZ2VOaWNrbmFtZUVycm9yIiwibWUiLCJzaWduVXBEYXRhIiwibG9naW5EYXRhIiwiTE9HX0lOX1JFUVVFU1QiLCJMT0dfSU5fU1VDQ0VTUyIsIkxPR19JTl9GQUlMVVJFIiwiTE9HX09VVF9SRVFVRVNUIiwiTE9HX09VVF9TVUNDRVNTIiwiTE9HX09VVF9GQUlMVVJFIiwiU0lHTl9VUF9SRVFVRVNUIiwiU0lHTl9VUF9TVUNDRVNTIiwiU0lHTl9VUF9GQUlMVVJFIiwiQ0hBTkdFX05JQ0tOQU1FX1JFUVVFU1QiLCJDSEFOR0VfTklDS05BTUVfU1VDQ0VTUyIsIkNIQU5HRV9OSUNLTkFNRV9GQUlMVVJFIiwiRk9MTE9XX1JFUVVFU1QiLCJGT0xMT1dfU1VDQ0VTUyIsIkZPTExPV19GQUlMVVJFIiwiVU5GT0xMT1dfUkVRVUVTVCIsIlVORk9MTE9XX1NVQ0NFU1MiLCJVTkZPTExPV19GQUlMVVJFIiwiQUREX1BPU1RfVE9fTUUiLCJSRU1PVkVfUE9TVF9PRl9NRSIsImR1bW15VXNlciIsIlBvc3RzIiwiRm9sbG93aW5ncyIsIkZvbGxvd2VycyIsImxvZ2luUmVxdWVzdEFjdGlvbiIsImxvZ291dFJlcXVlc3RBY3Rpb24iLCJwdXNoIiwiYXhpb3MiLCJkZWZhdWx0cyIsImJhc2VVUkwiLCJyb290U2FnYSIsImFsbCIsImZvcmsiLCJwb3N0U2FnYSIsInVzZXJTYWdhIiwibG9hZFBvc3RzQVBJIiwiZ2V0IiwibG9hZFBvc3RzIiwiZGVsYXkiLCJwdXQiLCJlcnIiLCJyZXNwb25zZSIsImFkZFBvc3RBUEkiLCJyZW1vdmVQb3N0QVBJIiwiZGVsZXRlIiwicmVtb3ZlUG9zdCIsImFkZENvbW1lbnRBUEkiLCJ3YXRjaExvYWRQb3N0cyIsInRocm90dGxlIiwid2F0Y2hBZGRDb21tZW50IiwidGFrZUxhdGVzdCIsIndhdGNoUmVtb3ZlUG9zdCIsIndhdGNoQWRkUG9zdCIsImxvZ0luQVBJIiwibG9nSW4iLCJyZXN1bHQiLCJjYWxsIiwibG9nT3V0QVBJIiwibG9nT3V0Iiwic2lnblVwQVBJIiwic2lnblVwIiwiZm9sbG93QVBJIiwiZm9sbG93IiwidW5Gb2xsb3dBUEkiLCJ1bkZvbGxvdyIsIndhdGNoTG9nSW4iLCJ3YXRjaExvZ091dCIsIndhdGNoU2lnblVwIiwid2F0Y2hGb2xsb3ciLCJ3YXRjaFVuRm9sbG93IiwibG9nZ2VyTWlkZGxld2FyZSIsImRpc3BhdGNoIiwiZ2V0U3RhdGUiLCJuZXh0IiwiY29uZmlndXJlU3RvcmUiLCJzYWdhTWlkZGxld2FyZSIsImNyZWF0ZVNhZ2FNaWRkbGV3YXJlIiwibWlkZGxld2FyZXMiLCJlbmhhbmNlciIsImNvbXBvc2UiLCJjb21wb3NlV2l0aERldlRvb2xzIiwiYXBwbHlNaWRkbGV3YXJlIiwic3RvcmUiLCJjcmVhdGVTdG9yZSIsInNhZ2FUYXNrIiwicnVuIiwiY3JlYXRlV3JhcHBlciIsImRlYnVnIl0sIm1hcHBpbmdzIjoiOztRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNB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Ozs7Ozs7OztBQ0FBLGtDOzs7Ozs7Ozs7OztBQ0FBLDRDOzs7Ozs7Ozs7OztBQ0FBLCtDOzs7Ozs7Ozs7OztBQ0FBLHNDOzs7Ozs7Ozs7OztBQ0FBLHVDOzs7Ozs7Ozs7OztBQ0FBLGtDOzs7Ozs7Ozs7OztBQ0FBLGtEOzs7Ozs7Ozs7OztBQ0FBLGtDOzs7Ozs7Ozs7OztBQ0FBLHFEOzs7Ozs7Ozs7OztBQ0FBLHVDOzs7Ozs7Ozs7OztBQ0FBLCtDOzs7Ozs7Ozs7OztBQ0FBLG9DIiwiZmlsZSI6InBhZ2VzL19hcHAuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHJlcXVpcmUoJy4uL3Nzci1tb2R1bGUtY2FjaGUuanMnKTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0dmFyIHRocmV3ID0gdHJ1ZTtcbiBcdFx0dHJ5IHtcbiBcdFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcbiBcdFx0XHR0aHJldyA9IGZhbHNlO1xuIFx0XHR9IGZpbmFsbHkge1xuIFx0XHRcdGlmKHRocmV3KSBkZWxldGUgaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF07XG4gXHRcdH1cblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gMCk7XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSBcInByb3AtdHlwZXNcIjtcclxuaW1wb3J0IFwiYW50ZC9kaXN0L2FudGQuY3NzXCI7XHJcbmltcG9ydCBIZWFkIGZyb20gXCJuZXh0L2hlYWRcIjtcclxuaW1wb3J0IHdpdGhSZWR1eFNhZ2EgZnJvbSBcIm5leHQtcmVkdXgtc2FnYVwiO1xyXG5cclxuaW1wb3J0IHdyYXBwZXIgZnJvbSBcIi4uL3N0b3JlL2NvbmZpZ3VyZVN0b3JlXCI7XHJcblxyXG5jb25zdCBOb2RlQmlyZCA9ICh7IENvbXBvbmVudCB9KSA9PiB7XHJcbiAgcmV0dXJuIChcclxuICAgIDw+XHJcbiAgICAgIDxIZWFkPlxyXG4gICAgICAgIDxtZXRhIGNoYXJTZXQ9J3V0Zi04JyAvPlxyXG4gICAgICAgIDx0aXRsZT5Ob2RlIEJpcmQ8L3RpdGxlPlxyXG4gICAgICA8L0hlYWQ+XHJcbiAgICAgIDxDb21wb25lbnQgLz5cclxuICAgIDwvPlxyXG4gICk7XHJcbn07XHJcblxyXG5Ob2RlQmlyZC5wcm9wVHlwZXMgPSB7XHJcbiAgQ29tcG9uZW50OiBQcm9wVHlwZXMuZWxlbWVudFR5cGUuaXNSZXF1aXJlZCxcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IHdyYXBwZXIud2l0aFJlZHV4KHdpdGhSZWR1eFNhZ2EoTm9kZUJpcmQpKTtcclxuIiwiaW1wb3J0IHsgSFlEUkFURSB9IGZyb20gXCJuZXh0LXJlZHV4LXdyYXBwZXJcIjtcclxuaW1wb3J0IHsgY29tYmluZVJlZHVjZXJzIH0gZnJvbSBcInJlZHV4XCI7XHJcbmltcG9ydCB1c2VyIGZyb20gXCIuL3VzZXJcIjtcclxuaW1wb3J0IHBvc3QgZnJvbSBcIi4vcG9zdFwiO1xyXG5cclxuLypcclxuY29uc3QgaW5pdGlhbFN0YXRlID0ge1xyXG4gIHVzZXI6IHtcclxuICAgIC8v7JWE656YIOyEuOu2gCDrgrTsmqnrk6TsnYAgcmVkdXjsqrzqsJzquLAg7ZWg65WMIOqwgeqwgeydmCDtjIzsnbzroZwg65Ok7Ja06rCU7J2MLlxyXG4gICAgLy8gaXNMb2dnZWRJbjogZmFsc2UsXHJcbiAgICAvLyB1c2VyOiBudWxsLFxyXG4gICAgLy8gc2lnblVwRGF0YToge30sXHJcbiAgICAvLyBsb2dpbkRhdGE6IHt9LFxyXG4gIH0sXHJcbiAgcG9zdDoge1xyXG4gICAgLy8gbWFpblBvc3RzOiBbXSxcclxuICB9LFxyXG59O1xyXG4qL1xyXG5cclxuLy/sl63si5zrgpgg7JWE656YIOuCtOyaqeuTpOydgCDrtoTrpqzrkJwgcmVkdXgg7KSRIOunnuuKlCDqsJLsl5Ag64Sj7J2MXHJcbi8vIGV4cG9ydCBjb25zdCBsb2dpbkFjdGlvbiA9IChkYXRhKSA9PiB7XHJcbi8vICAgcmV0dXJuIHtcclxuLy8gICAgIHR5cGU6IFwiTE9HX0lOXCIsXHJcbi8vICAgICBkYXRhLFxyXG4vLyAgIH07XHJcbi8vIH07XHJcbi8vIGV4cG9ydCBjb25zdCBsb2dvdXRBY3Rpb24gPSAoKSA9PiB7XHJcbi8vICAgcmV0dXJuIHtcclxuLy8gICAgIHR5cGU6IFwiTE9HX09VVFwiLFxyXG4vLyAgIH07XHJcbi8vIH07XHJcblxyXG4vLyByZWR1Y2VyICjsnbTsoITsg4Htg5wsIOyVoeyFmCkgPT4g64uk7J2M7IOB7YOcICjsnbTsoITsg4Htg5zsmYAsIOyVoeyFmOydhCDthrXtlbTshJwg64uk7J2MIOyDge2DnOulvCDrp4zrk6TslrQg64K064qUIO2VqOyImClcclxuY29uc3Qgcm9vdFJlZHVjZXIgPSBjb21iaW5lUmVkdWNlcnMoe1xyXG4gIGluZGV4OiAoc3RhdGUgPSB7fSwgYWN0aW9uKSA9PiB7XHJcbiAgICBzd2l0Y2ggKGFjdGlvbi50eXBlKSB7XHJcbiAgICAgIGNhc2UgSFlEUkFURTpcclxuICAgICAgICBjb25zb2xlLmxvZyhcIkhZRFJBVEVcIiwgYWN0aW9uKTtcclxuICAgICAgICByZXR1cm4geyAuLi5zdGF0ZSwgLi4uYWN0aW9uLnBheWxvYWQgfTtcclxuXHJcbiAgICAgIC8v7Jet7Iuc64KYIOyVhOuemCDrgrTsmqnrk6TsnYAg67aE66as65CcIHJlZHV4IOykkSDrp57ripQg6rCS7JeQIOuEo+ydjFxyXG4gICAgICAvLyBjYXNlIFwiTE9HX0lOXCI6XHJcbiAgICAgIC8vICAgcmV0dXJuIHsgLi4uc3RhdGUsIHVzZXI6IHsgLi4uc3RhdGUudXNlciwgaXNMb2dnZWRJbjogdHJ1ZSwgdXNlcjogYWN0aW9uLmRhdGEgfSB9O1xyXG4gICAgICAvLyBjYXNlIFwiTE9HX09VVFwiOlxyXG4gICAgICAvLyAgIHJldHVybiB7IC4uLnN0YXRlLCB1c2VyOiB7IC4uLnN0YXRlLnVzZXIsIGlzTG9nZ2VkSW46IGZhbHNlLCB1c2VyOiBudWxsIH0gfTtcclxuICAgICAgZGVmYXVsdDpcclxuICAgICAgICByZXR1cm4gc3RhdGU7XHJcbiAgICB9XHJcbiAgfSxcclxuICB1c2VyLFxyXG4gIHBvc3QsXHJcbn0pO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgcm9vdFJlZHVjZXI7XHJcblxyXG4vKlxyXG5jb25zdCBpbml0aWFsU3RhdGUgPSB7XHJcbiAgbmFtZTogXCJrZXZpblwiLFxyXG4gIGFnZTogMzQsXHJcbiAgcGFzc3dvcmQ6IFwicGFzc3dvcmRcIixcclxufTtcclxuXHJcbi8vIGFjdGlvbiBjcmVhdG9yXHJcbmNvbnN0IGNoYW5nZU5pY2tuYW1lID0ge1xyXG4gIHR5cGU6IFwiQ0hBTkdFX05JQ0tOQU1FXCIsXHJcbiAgZGF0YTogXCJqYWVoYW5cIixcclxufTtcclxuXHJcbmNvbnN0IGNoYW5nZU5pY2tuYW1lID0gKGRhdGEpID0+IHtcclxuICByZXR1cm4ge1xyXG4gICAgdHlwZTogXCJDSEFOR0VfTklDS05BTUVcIixcclxuICAgIGRhdGE6IGRhdGEsXHJcbiAgfTtcclxufTtcclxuXHJcbmNoYW5nZU5pY2tuYW1lKFwiYm9vZ2ljaG9cIik7IC8v7JWE656Y7JmAIOqwmeydjFxyXG4vLyB7XHJcbi8vICAgIHR5cGU6ICdDSEFOR0VfTklDS05BTUUnLFxyXG4vLyAgICBkYXRhOiAnbmV1ZSB6ZWFsJyxcclxuLy8gfVxyXG4vL1xyXG5cclxuLy/stZzsooXsoIHsnLzroZwg7JWE656Y7JmAIOqwmeydtCDsgqzsmqnqsIDriqVcclxuLy8gMS4g7JyEIOyymOufvCBjaGFuZ2VOaWNrbmFtZeydhCDshKDslrjtlZjqs6BcclxuLy8gMi4g7JWE656Y7JmAIOqwmeydtCBkaXNwYXRjaOulvCDsi5zsvJwg7KSMLlxyXG5zdG9yZS5kaXNwYXRjaChjaGFuZ2VOaWNrbmFtZShcImhvbGx5XCIpKTtcclxuXHJcblxyXG4vLyByZWR1Y2VyICjsnbTsoITsg4Htg5wsIOyVoeyFmCkgPT4g64uk7J2M7IOB7YOcICjsnbTsoITsg4Htg5zsmYAsIOyVoeyFmOydhCDthrXtlbTshJwg64uk7J2MIOyDge2DnOulvCDrp4zrk6TslrQg64K064qUIO2VqOyImClcclxuY29uc3Qgcm9vdFJlZHVjZXIgPSAoc3RhdGUgPSBpbml0aWFsU3RhdGUsIGFjdGlvbikgPT4ge1xyXG4gIHN3aXRjaCAoYWN0aW9uLnR5cGUpIHtcclxuICAgIGNhc2UgXCJDSEFOR0VfTklDS05BTUVcIjpcclxuICAgICAgcmV0dXJuIHsgLi4uc3RhdGUsIG5hbWU6IGFjdGlvbi5kYXRhIH07XHJcbiAgfVxyXG59O1xyXG5cclxuKi9cclxuIiwiaW1wb3J0IHNob3J0SWQgZnJvbSBcInNob3J0aWRcIjtcclxuaW1wb3J0IHByb2R1Y2UgZnJvbSBcImltbWVyXCI7XHJcbmltcG9ydCBmYWtlciBmcm9tIFwiZmFrZXJcIjtcclxuXHJcbmV4cG9ydCBjb25zdCBpbml0aWFsU3RhdGUgPSB7XHJcbiAgLy8gbWFpblBvc3RzOiBbXHJcbiAgLy8gICAvLyB7XHJcbiAgLy8gICAvLyAgIGlkOiAxLFxyXG4gIC8vICAgLy8gICBVc2VyOiB7XHJcbiAgLy8gICAvLyAgICAgaWQ6IDEsXHJcbiAgLy8gICAvLyAgICAgbmlja25hbWU6IFwiS2V2aW5cIixcclxuICAvLyAgIC8vICAgfSxcclxuICAvLyAgIC8vICAgY29udGVudDogXCJGaXJzdCBQb3N0ICNIYXNoVGFnLCAjRXhwcmVzc1wiLFxyXG4gIC8vICAgLy8gICAvLyBJbWFnZXM6IFtcclxuICAvLyAgIC8vICAgLy8gICB7XHJcbiAgLy8gICAvLyAgIC8vICAgICBzcmM6IFwiaHR0cHM6Ly9yZXMuY2xvdWRpbmFyeS5jb20vaGlnaGVyZWR1Y2F0aW9uL2ltYWdlL3VwbG9hZC9jX3NjYWxlLHdfNzUwL2ZfYXV0byxmbF9sb3NzeSxxX2F1dG86ZWNvL3YxNTMyOTg4ODY0L1RoZUJlc3RDb2xsZWdlcy5vcmcvaW1hZ2VzL3N0dWR5LW5vdGVib29rcy5qcGdcIixcclxuICAvLyAgIC8vICAgLy8gICB9LFxyXG4gIC8vICAgLy8gICAvLyAgIHtcclxuICAvLyAgIC8vICAgLy8gICAgIHNyYzogXCJodHRwczovL3d3dy5mYXN0d2ViLmNvbS91cGxvYWRzL2FydGljbGVfcGhvdG8vcGhvdG8vMjE2MS9jcm9wMzgwd19pc3RvY2tfMDAwMDAyMTkzODQyeHNtYWxsLWJvb2tzLmpwZ1wiLFxyXG4gIC8vICAgLy8gICAvLyAgIH0sXHJcbiAgLy8gICAvLyAgIC8vICAge1xyXG4gIC8vICAgLy8gICAvLyAgICAgc3JjOiBcImh0dHBzOi8vd3d3Lmluc2lkZWhpZ2hlcmVkLmNvbS9zaXRlcy9kZWZhdWx0L3NlcnZlcl9maWxlcy9tZWRpYS9pU3RvY2stNTIwMzc0Mzc4LmpwZ1wiLFxyXG4gIC8vICAgLy8gICAvLyAgIH0sXHJcbiAgLy8gICAvLyAgIC8vIF0sXHJcbiAgLy8gICAvLyAgIEltYWdlczogW1xyXG4gIC8vICAgLy8gICAgIHtcclxuICAvLyAgIC8vICAgICAgIGlkOiBzaG9ydElkLmdlbmVyYXRlKCksXHJcbiAgLy8gICAvLyAgICAgICBzcmM6IFwiaHR0cHM6Ly9ib29rdGh1bWItcGhpbmYucHN0YXRpYy5uZXQvY292ZXIvMTM3Lzk5NS8xMzc5OTU4NS5qcGc/dWRhdGU9MjAxODA3MjZcIixcclxuICAvLyAgIC8vICAgICB9LFxyXG4gIC8vICAgLy8gICAgIHtcclxuICAvLyAgIC8vICAgICAgIGlkOiBzaG9ydElkLmdlbmVyYXRlKCksXHJcbiAgLy8gICAvLyAgICAgICBzcmM6IFwiaHR0cHM6Ly9naW1nLmdpbGJ1dC5jby5rci9ib29rL0JOMDAxOTU4L3JuX3ZpZXdfQk4wMDE5NTguanBnXCIsXHJcbiAgLy8gICAvLyAgICAgfSxcclxuICAvLyAgIC8vICAgICB7XHJcbiAgLy8gICAvLyAgICAgICBpZDogc2hvcnRJZC5nZW5lcmF0ZSgpLFxyXG4gIC8vICAgLy8gICAgICAgc3JjOiBcImh0dHBzOi8vZ2ltZy5naWxidXQuY28ua3IvYm9vay9CTjAwMTk5OC9ybl92aWV3X0JOMDAxOTk4LmpwZ1wiLFxyXG4gIC8vICAgLy8gICAgIH0sXHJcbiAgLy8gICAvLyAgIF0sXHJcbiAgLy8gICAvLyAgIENvbW1lbnRzOiBbXHJcbiAgLy8gICAvLyAgICAge1xyXG4gIC8vICAgLy8gICAgICAgaWQ6IHNob3J0SWQuZ2VuZXJhdGUoKSxcclxuICAvLyAgIC8vICAgICAgIFVzZXI6IHtcclxuICAvLyAgIC8vICAgICAgICAgaWQ6IHNob3J0SWQuZ2VuZXJhdGUoKSxcclxuICAvLyAgIC8vICAgICAgICAgbmlja25hbWU6IFwibmVyb1wiLFxyXG4gIC8vICAgLy8gICAgICAgfSxcclxuICAvLyAgIC8vICAgICAgIGNvbnRlbnQ6IFwiR3JlYXQgcG9zdCFcIixcclxuICAvLyAgIC8vICAgICB9LFxyXG4gIC8vICAgLy8gICAgIHtcclxuICAvLyAgIC8vICAgICAgIGlkOiBzaG9ydElkLmdlbmVyYXRlKCksXHJcbiAgLy8gICAvLyAgICAgICBVc2VyOiB7XHJcbiAgLy8gICAvLyAgICAgICAgIGlkOiBzaG9ydElkLmdlbmVyYXRlKCksXHJcbiAgLy8gICAvLyAgICAgICAgIG5pY2tuYW1lOiBcImphZWhhblwiLFxyXG4gIC8vICAgLy8gICAgICAgfSxcclxuICAvLyAgIC8vICAgICAgIGNvbnRlbnQ6IGBpdCdzIHJlYWxseSBlZHVjYXRpb25hbGAsXHJcbiAgLy8gICAvLyAgICAgfSxcclxuICAvLyAgIC8vICAgXSxcclxuICAvLyAgIC8vIH0sXHJcbiAgLy8gXSxcclxuICBtYWluUG9zdHM6IFtdLFxyXG4gIGltYWdlUGF0aHM6IFtdLFxyXG4gIGhhc01vcmVQb3N0czogdHJ1ZSxcclxuICBsb2FkUG9zdHNMb2FkaW5nOiBmYWxzZSxcclxuICBsb2FkUG9zdHNEb25lOiBmYWxzZSxcclxuICBsb2FkUG9zdHNFcnJvcjogbnVsbCxcclxuICBhZGRQb3N0TG9hZGluZzogZmFsc2UsXHJcbiAgYWRkUG9zdERvbmU6IGZhbHNlLFxyXG4gIGFkZFBvc3RFcnJvcjogbnVsbCxcclxuICByZW1vdmVQb3N0TG9hZGluZzogZmFsc2UsXHJcbiAgcmVtb3ZlUG9zdERvbmU6IGZhbHNlLFxyXG4gIHJlbW92ZVBvc3RFcnJvcjogbnVsbCxcclxuICBhZGRDb21tZW50TG9hZGluZzogZmFsc2UsXHJcbiAgYWRkQ29tbWVudERvbmU6IGZhbHNlLFxyXG4gIGFkZENvbW1lbnRFcnJvcjogbnVsbCxcclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCBnZW5lcmF0ZUR1bW15UG9zdCA9IChudW1iZXIpID0+XHJcbiAgQXJyYXkobnVtYmVyKVxyXG4gICAgLmZpbGwoKVxyXG4gICAgLm1hcCgoKSA9PiAoe1xyXG4gICAgICBpZDogc2hvcnRJZC5nZW5lcmF0ZSgpLFxyXG4gICAgICBVc2VyOiB7XHJcbiAgICAgICAgaWQ6IHNob3J0SWQuZ2VuZXJhdGUoKSxcclxuICAgICAgICBuaWNrbmFtZTogZmFrZXIubmFtZS5maW5kTmFtZSgpLFxyXG4gICAgICB9LFxyXG4gICAgICBjb250ZW50OiBmYWtlci5sb3JlbS5wYXJhZ3JhcGgoKSxcclxuICAgICAgSW1hZ2VzOiBbXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgc3JjOiBmYWtlci5pbWFnZS5pbWFnZSgpLFxyXG4gICAgICAgIH0sXHJcbiAgICAgIF0sXHJcbiAgICAgIENvbW1lbnRzOiBbXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgVXNlcjoge1xyXG4gICAgICAgICAgICBpZDogc2hvcnRJZC5nZW5lcmF0ZSgpLFxyXG4gICAgICAgICAgICBuaWNrbmFtZTogZmFrZXIubmFtZS5maW5kTmFtZSgpLFxyXG4gICAgICAgICAgfSxcclxuICAgICAgICAgIGNvbnRlbnQ6IGZha2VyLmxvcmVtLnNlbnRlbmNlKCksXHJcbiAgICAgICAgfSxcclxuICAgICAgXSxcclxuICAgIH0pKTtcclxuLy8gaW5pdGlhbFN0YXRlLm1haW5Qb3N0cyA9IGluaXRpYWxTdGF0ZS5tYWluUG9zdHMuY29uY2F0KGdlbmVyYXRlRHVtbXlQb3N0KDEwKSk7XHJcblxyXG5leHBvcnQgY29uc3QgTE9BRF9QT1NUU19SRVFVRVNUID0gXCJMT0FEX1BPU1RTX1JFUVVFU1RcIjtcclxuZXhwb3J0IGNvbnN0IExPQURfUE9TVFNfU1VDQ0VTUyA9IFwiTE9BRF9QT1NUU19TVUNDRVNTXCI7XHJcbmV4cG9ydCBjb25zdCBMT0FEX1BPU1RTX0ZBSUxVUkUgPSBcIkxPQURfUE9TVFNfRkFJTFVSRVwiO1xyXG5cclxuZXhwb3J0IGNvbnN0IEFERF9QT1NUX1JFUVVFU1QgPSBcIkFERF9QT1NUX1JFUVVFU1RcIjtcclxuZXhwb3J0IGNvbnN0IEFERF9QT1NUX1NVQ0NFU1MgPSBcIkFERF9QT1NUX1NVQ0NFU1NcIjtcclxuZXhwb3J0IGNvbnN0IEFERF9QT1NUX0ZBSUxVUkUgPSBcIkFERF9QT1NUX0ZBSUxVUkVcIjtcclxuXHJcbmV4cG9ydCBjb25zdCBSRU1PVkVfUE9TVF9SRVFVRVNUID0gXCJSRU1PVkVfUE9TVF9SRVFVRVNUXCI7XHJcbmV4cG9ydCBjb25zdCBSRU1PVkVfUE9TVF9TVUNDRVNTID0gXCJSRU1PVkVfUE9TVF9TVUNDRVNTXCI7XHJcbmV4cG9ydCBjb25zdCBSRU1PVkVfUE9TVF9GQUlMVVJFID0gXCJSRU1PVkVfUE9TVF9GQUlMVVJFXCI7XHJcblxyXG5leHBvcnQgY29uc3QgQUREX0NPTU1FTlRfUkVRVUVTVCA9IFwiQUREX0NPTU1FTlRfUkVRVUVTVFwiO1xyXG5leHBvcnQgY29uc3QgQUREX0NPTU1FTlRfU1VDQ0VTUyA9IFwiQUREX0NPTU1FTlRfU1VDQ0VTU1wiO1xyXG5leHBvcnQgY29uc3QgQUREX0NPTU1FTlRfRkFJTFVSRSA9IFwiQUREX0NPTU1FTlRfRkFJTFVSRVwiO1xyXG5cclxuZXhwb3J0IGNvbnN0IGFkZFBvc3QgPSAoZGF0YSkgPT4gKHtcclxuICB0eXBlOiBBRERfUE9TVF9SRVFVRVNULFxyXG4gIGRhdGEsXHJcbn0pO1xyXG5leHBvcnQgY29uc3QgYWRkQ29tbWVudCA9IChkYXRhKSA9PiAoe1xyXG4gIHR5cGU6IEFERF9DT01NRU5UX1JFUVVFU1QsXHJcbiAgZGF0YSxcclxufSk7XHJcblxyXG5jb25zdCBkdW1teVBvc3QgPSAoZGF0YSkgPT4gKHtcclxuICBpZDogZGF0YS5pZCxcclxuICBjb250ZW50OiBkYXRhLmNvbnRlbnQsXHJcbiAgVXNlcjoge1xyXG4gICAgaWQ6IDEsXHJcbiAgICBuaWNrbmFtZTogXCJLZXZpblwiLFxyXG4gIH0sXHJcbiAgSW1hZ2VzOiBbXSxcclxuICBDb21tZW50czogW10sXHJcbn0pO1xyXG5cclxuY29uc3QgZHVtbXlDb21tZW50ID0gKGRhdGEpID0+ICh7XHJcbiAgaWQ6IHNob3J0SWQuZ2VuZXJhdGUoKSxcclxuICBjb250ZW50OiBkYXRhLFxyXG4gIFVzZXI6IHtcclxuICAgIGlkOiAxLFxyXG4gICAgbmlja25hbWU6IFwiS2V2aW5cIixcclxuICB9LFxyXG59KTtcclxuXHJcbi8vcmVkdWNlcjog7J207KCEIOyDge2DnOulvCDslaHshZjsnYQg7Ya17ZW0IOuLpOydjCDsg4Htg5zroZwg66eM65Ok7Ja064K064qUIO2VqOyImCAo67aI67OA7ISx7J2AIOyngO2CpOuptOyEnClcclxuY29uc3QgcmVkdWNlciA9IChzdGF0ZSA9IGluaXRpYWxTdGF0ZSwgYWN0aW9uKSA9PiB7XHJcbiAgLy8gaW1tZXI6IOydtOyghCDsg4Htg5zrpbwg7JWh7IWY7J2EIO2Gte2VtCDri6TsnYwg7IOB7YOc66GcIOunjOuTpOyWtOuCtOuKlCDtlajsiJggKOu2iOuzgOyEsSDslYjsp4DsvJzrj4QgaW1tZXLqsIAg7JWM7JWE7IScIOyngOy8nOykjC4pXHJcbiAgLy8g7Jes6riw67aA7YSw64qUIGRyYWZ06rCAIHN0YXRl7LKY65+8IOyCrOyaqeuQmOqzoCDsnbTqsbQg66eJIOuwlOq/lOuPhCDrkKguIChpbW1lcuqwgCDslYzslYTshJwg7LKY66as7ZW0IOyjvOuvgOuhnClcclxuICByZXR1cm4gcHJvZHVjZShzdGF0ZSwgKGRyYWZ0KSA9PiB7XHJcbiAgICBzd2l0Y2ggKGFjdGlvbi50eXBlKSB7XHJcbiAgICAgIGNhc2UgTE9BRF9QT1NUU19SRVFVRVNUOiB7XHJcbiAgICAgICAgZHJhZnQubG9hZFBvc3RzTG9hZGluZyA9IHRydWU7XHJcbiAgICAgICAgZHJhZnQubG9hZFBvc3RzRG9uZSA9IGZhbHNlO1xyXG4gICAgICAgIGRyYWZ0LmxvYWRQb3N0c0Vycm9yID0gbnVsbDtcclxuICAgICAgICBicmVhaztcclxuICAgICAgfVxyXG4gICAgICBjYXNlIExPQURfUE9TVFNfU1VDQ0VTUzoge1xyXG4gICAgICAgIGRyYWZ0LmxvYWRQb3N0c0xvYWRpbmcgPSBmYWxzZTtcclxuICAgICAgICBkcmFmdC5sb2FkUG9zdHNEb25lID0gdHJ1ZTtcclxuICAgICAgICBkcmFmdC5tYWluUG9zdHMgPSBhY3Rpb24uZGF0YS5jb25jYXQoZHJhZnQubWFpblBvc3RzKTtcclxuICAgICAgICBkcmFmdC5oYXNNb3JlUG9zdHMgPSBkcmFmdC5tYWluUG9zdHMubGVuZ3RoIDwgNTA7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIH1cclxuICAgICAgY2FzZSBMT0FEX1BPU1RTX0ZBSUxVUkU6XHJcbiAgICAgICAgZHJhZnQubG9hZFBvc3RzTG9hZGluZyA9IGZhbHNlO1xyXG4gICAgICAgIGRyYWZ0LmxvYWRQb3N0c0Vycm9yID0gYWN0aW9uLmVycm9yO1xyXG4gICAgICAgIGJyZWFrO1xyXG5cclxuICAgICAgY2FzZSBBRERfUE9TVF9SRVFVRVNUOiB7XHJcbiAgICAgICAgZHJhZnQuYWRkUG9zdExvYWRpbmcgPSB0cnVlO1xyXG4gICAgICAgIGRyYWZ0LmFkZFBvc3REb25lID0gZmFsc2U7XHJcbiAgICAgICAgZHJhZnQuYWRkUG9zdEVycm9yID0gbnVsbDtcclxuICAgICAgICBicmVhaztcclxuICAgICAgICAvLyByZXR1cm4geyAuLi5zdGF0ZSwgYWRkUG9zdExvYWRpbmc6IHRydWUsIGFkZFBvc3REb25lOiBmYWxzZSwgYWRkUG9zdEVycm9yOiBudWxsIH07XHJcbiAgICAgIH1cclxuICAgICAgY2FzZSBBRERfUE9TVF9TVUNDRVNTOiB7XHJcbiAgICAgICAgZHJhZnQuYWRkUG9zdExvYWRpbmcgPSBmYWxzZTtcclxuICAgICAgICBkcmFmdC5hZGRQb3N0RG9uZSA9IHRydWU7XHJcbiAgICAgICAgLy8gZHJhZnQubWFpblBvc3RzID0gW2R1bW15UG9zdChhY3Rpb24uZGF0YSksIC4uLnN0YXRlLm1haW5Qb3N0c107IC8v7J2066CH6rKMIO2VmOqxsOuCmCDtmLnsnYAg7JWE656Y7JmAIOqwmeydtCB1bnNoaWZ07IKs7JqpIO2VmOuptCDrsLDsl7TqsJLsnYQg65Sw66GcIOygleydmOyViO2VmOqzoCAoLi4u7J20IOyCrOudvCDsp5ApIOuwlOuhnCDsgqzsmqnqsIDriqUg7ZWoXHJcbiAgICAgICAgZHJhZnQubWFpblBvc3RzLnVuc2hpZnQoZHVtbXlQb3N0KGFjdGlvbi5kYXRhKSk7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgLy8gYWN0aW9uLmRhdGEuY29udGVudCwgcG9zdElkLCB1c2VySWQ7XHJcbiAgICAgICAgLy8gcmV0dXJuIHtcclxuICAgICAgICAvLyAgIC4uLnN0YXRlLFxyXG4gICAgICAgIC8vICAgbWFpblBvc3RzOiBbZHVtbXlQb3N0KGFjdGlvbi5kYXRhKSwgLi4uc3RhdGUubWFpblBvc3RzXSxcclxuICAgICAgICAvLyAgIGFkZFBvc3RMb2FkaW5nOiBmYWxzZSxcclxuICAgICAgICAvLyAgIGFkZFBvc3REb25lOiB0cnVlLFxyXG4gICAgICAgIC8vIH07XHJcbiAgICAgIH1cclxuICAgICAgY2FzZSBBRERfUE9TVF9GQUlMVVJFOlxyXG4gICAgICAgIGRyYWZ0LmFkZFBvc3RMb2FkaW5nID0gZmFsc2U7XHJcbiAgICAgICAgZHJhZnQuYWRkUG9zdEVycm9yID0gYWN0aW9uLmVycm9yO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICAvLyByZXR1cm4geyAuLi5zdGF0ZSwgYWRkUG9zdExvYWRpbmc6IGZhbHNlLCBhZGRQb3N0RXJyb3I6IGFjdGlvbi5lcnJvciB9O1xyXG4gICAgICBjYXNlIFJFTU9WRV9QT1NUX1JFUVVFU1Q6IHtcclxuICAgICAgICBkcmFmdC5yZW1vdmVQb3N0TG9hZGluZyA9IHRydWU7XHJcbiAgICAgICAgZHJhZnQucmVtb3ZlUG9zdERvbmUgPSBmYWxzZTtcclxuICAgICAgICBkcmFmdC5yZW1vdmVQb3N0RXJyb3IgPSBudWxsO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICAgIC8vIHJldHVybiB7IC4uLnN0YXRlLCByZW1vdmVQb3N0TG9hZGluZzogdHJ1ZSwgcmVtb3ZlUG9zdERvbmU6IGZhbHNlLCByZW1vdmVQb3N0RXJyb3I6IG51bGwgfTtcclxuICAgICAgfVxyXG4gICAgICBjYXNlIFJFTU9WRV9QT1NUX1NVQ0NFU1M6IHtcclxuICAgICAgICAvLyBhY3Rpb24uZGF0YS5jb250ZW50LCBwb3N0SWQsIHVzZXJJZDtcclxuICAgICAgICBkcmFmdC5yZW1vdmVQb3N0TG9hZGluZyA9IGZhbHNlO1xyXG4gICAgICAgIGRyYWZ0LnJlbW92ZVBvc3REb25lID0gdHJ1ZTtcclxuICAgICAgICBkcmFmdC5tYWluUG9zdHMgPSBkcmFmdC5tYWluUG9zdHMuZmlsdGVyKCh2KSA9PiB2LmlkICE9PSBhY3Rpb24uZGF0YSk7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgLy8gcmV0dXJuIHtcclxuICAgICAgICAvLyAgIC4uLnN0YXRlLFxyXG4gICAgICAgIC8vICAgbWFpblBvc3RzOiBzdGF0ZS5tYWluUG9zdHMuZmlsdGVyKCh2KSA9PiB2LmlkICE9PSBhY3Rpb24uZGF0YSksXHJcbiAgICAgICAgLy8gICByZW1vdmVQb3N0TG9hZGluZzogZmFsc2UsXHJcbiAgICAgICAgLy8gICByZW1vdmVQb3N0RG9uZTogdHJ1ZSxcclxuICAgICAgICAvLyB9O1xyXG4gICAgICB9XHJcbiAgICAgIGNhc2UgUkVNT1ZFX1BPU1RfRkFJTFVSRTpcclxuICAgICAgICBkcmFmdC5yZW1vdmVQb3N0TG9hZGluZyA9IGZhbHNlO1xyXG4gICAgICAgIGRyYWZ0LnJlbW92ZVBvc3RFcnJvciA9IHRydWU7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIC8vIHJldHVybiB7IC4uLnN0YXRlLCByZW1vdmVQb3N0TG9hZGluZzogZmFsc2UsIHJlbW92ZVBvc3RFcnJvcjogYWN0aW9uLmVycm9yIH07XHJcblxyXG4gICAgICBjYXNlIEFERF9DT01NRU5UX1JFUVVFU1Q6IHtcclxuICAgICAgICBkcmFmdC5hZGRDb21tZW50TG9hZGluZyA9IHRydWU7XHJcbiAgICAgICAgZHJhZnQuYWRkQ29tbWVudERvbmUgPSBmYWxzZTtcclxuICAgICAgICBkcmFmdC5hZGRDb21tZW50RXJyb3IgPSBudWxsO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICAgIC8vIHJldHVybiB7IC4uLnN0YXRlLCBhZGRDb21tZW50TG9hZGluZzogdHJ1ZSwgYWRkQ29tbWVudERvbmU6IGZhbHNlLCBhZGRDb21tZW50RXJyb3I6IG51bGwgfTtcclxuICAgICAgfVxyXG5cclxuICAgICAgLy/slYTrnpgg67aA67aEIOydtO2VtCDslYjrkJjrqbQg6rKM7Iuc6riALOuMk+q4gCBzYWdhIOyekeyEsSDtlZjquLAg64uk7IucIOyytO2BrC4gMTE6MzDrtoQg7KCV64+EXHJcbiAgICAgIGNhc2UgQUREX0NPTU1FTlRfU1VDQ0VTUzoge1xyXG4gICAgICAgIGNvbnN0IHBvc3QgPSBkcmFmdC5tYWluUG9zdHMuZmluZCgodikgPT4gdi5pZCA9PT0gYWN0aW9uLmRhdGEucG9zdElkKTtcclxuICAgICAgICBwb3N0LkNvbW1lbnRzLnVuc2hpZnQoZHVtbXlDb21tZW50KGFjdGlvbi5kYXRhLmNvbnRlbnQpKTtcclxuICAgICAgICBkcmFmdC5hZGRDb21tZW50TG9hZGluZyA9IGZhbHNlO1xyXG4gICAgICAgIGRyYWZ0LmFkZGNvbW1lbnREb25lID0gdHJ1ZTtcclxuICAgICAgICBicmVhaztcclxuICAgICAgICAvL+ychOuKlCBpbW1lcuulvCDthrXtlbTshJwg67aI67OA7ISxIOyLoOqyveyViOyTsOqzoCDsvZTrlKntlaguIOyVhOuemOuKlCDquLDsobQg67Cp7Iud7Jy866GcIOu2iOuzgOyEsSDsi6Dqsr3sk7Dqs6Ag7L2U65Sp7ZWcIOuCtOyaqVxyXG4gICAgICAgIC8vIGNvbnN0IHBvc3RJbmRleCA9IHN0YXRlLm1haW5Qb3N0cy5maW5kSW5kZXgoKHYpID0+IHYuaWQgPT09IGFjdGlvbi5kYXRhLnBvc3RJZCk7XHJcbiAgICAgICAgLy8gY29uc3QgcG9zdCA9IHsgLi4uc3RhdGUubWFpblBvc3RzW3Bvc3RJbmRleF0gfTtcclxuICAgICAgICAvLyBwb3N0LkNvbW1lbnRzID0gW2R1bW15Q29tbWVudChhY3Rpb24uZGF0YS5jb250ZW50KSwgLi4ucG9zdC5Db21tZW50c107XHJcbiAgICAgICAgLy8gY29uc3QgbWFpblBvc3RzID0gWy4uLnN0YXRlLm1haW5Qb3N0c107XHJcbiAgICAgICAgLy8gbWFpblBvc3RzW3Bvc3RJbmRleF0gPSBwb3N0O1xyXG4gICAgICAgIC8vIHJldHVybiB7XHJcbiAgICAgICAgLy8gICAuLi5zdGF0ZSxcclxuICAgICAgICAvLyAgIG1haW5Qb3N0cyxcclxuICAgICAgICAvLyAgIGFkZENvbW1lbnRMb2FkaW5nOiBmYWxzZSxcclxuICAgICAgICAvLyAgIGFkZENvbW1lbnREb25lOiB0cnVlLFxyXG4gICAgICAgIC8vIH07XHJcbiAgICAgIH1cclxuICAgICAgY2FzZSBBRERfQ09NTUVOVF9GQUlMVVJFOlxyXG4gICAgICAgIGRyYWZ0LmFkZENvb21lbnRMb2FkaW5nID0gZmFsc2U7XHJcbiAgICAgICAgZHJhZnQuYWRkQ29tbWVudEVycm9yID0gYWN0aW9uLmVycm9yO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICAvLyByZXR1cm4geyAuLi5zdGF0ZSwgYWRkQ29tbWVudExvYWRpbmc6IGZhbHNlLCBhZGRDb21tZW50RXJyb3I6IGFjdGlvbi5lcnJvciB9O1xyXG5cclxuICAgICAgZGVmYXVsdDoge1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICAgIC8vIHJldHVybiB7IC4uLnN0YXRlIH07XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9KTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IHJlZHVjZXI7XHJcbiIsImltcG9ydCBwcm9kdWNlIGZyb20gXCJpbW1lclwiO1xyXG5cclxuZXhwb3J0IGNvbnN0IGluaXRpYWxTdGF0ZSA9IHtcclxuICB1bmZvbGxvd0xvYWRpbmc6IGZhbHNlLCAvLyDslrjtjJTroZzsmrAg7Iuc64+E7KSRXHJcbiAgdW5mb2xsb3dEb25lOiBmYWxzZSxcclxuICB1bmZvbGxvd0Vycm9yOiBudWxsLFxyXG4gIGZvbGxvd0xvYWRpbmc6IGZhbHNlLCAvLyDtjJTroZzsmrAg7Iuc64+E7KSRXHJcbiAgZm9sbG93RG9uZTogZmFsc2UsXHJcbiAgZm9sbG93RXJyb3I6IG51bGwsXHJcbiAgbG9nSW5Mb2FkaW5nOiBmYWxzZSwgLy8g66Gc6re47J24IOyLnOuPhOykkVxyXG4gIGxvZ0luRG9uZTogZmFsc2UsXHJcbiAgbG9nSW5FcnJvcjogbnVsbCxcclxuICBsb2dPdXRMb2FkaW5nOiBmYWxzZSwgLy8g66Gc6re47JWE7JuDIOyLnOuPhOykkVxyXG4gIGxvZ091dERvbmU6IGZhbHNlLFxyXG4gIGxvZ091dEVycm9yOiBudWxsLFxyXG4gIHNpZ25VcExvYWRpbmc6IGZhbHNlLCAvLyDtmozsm5DqsIDsnoUg7Iuc64+E7KSRXHJcbiAgc2lnblVwRG9uZTogZmFsc2UsXHJcbiAgc2lnblVwRXJyb3I6IG51bGwsXHJcbiAgY2hhbmdlTmlja25hbWVMb2FkaW5nOiBmYWxzZSwgLy8g64uJ64Sk7J6EIOuzgOqyvSDsi5zrj4TspJFcclxuICBjaGFuZ2VOaWNrbmFtZURvbmU6IGZhbHNlLFxyXG4gIGNoYW5nZU5pY2tuYW1lRXJyb3I6IG51bGwsXHJcbiAgbWU6IG51bGwsXHJcbiAgc2lnblVwRGF0YToge30sXHJcbiAgbG9naW5EYXRhOiB7fSxcclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCBMT0dfSU5fUkVRVUVTVCA9IFwiTE9HX0lOX1JFUVVFU1RcIjtcclxuZXhwb3J0IGNvbnN0IExPR19JTl9TVUNDRVNTID0gXCJMT0dfSU5fU1VDQ0VTU1wiO1xyXG5leHBvcnQgY29uc3QgTE9HX0lOX0ZBSUxVUkUgPSBcIkxPR19JTl9GQUlMVVJFXCI7XHJcblxyXG5leHBvcnQgY29uc3QgTE9HX09VVF9SRVFVRVNUID0gXCJMT0dfT1VUX1JFUVVFU1RcIjtcclxuZXhwb3J0IGNvbnN0IExPR19PVVRfU1VDQ0VTUyA9IFwiTE9HX09VVF9TVUNDRVNTXCI7XHJcbmV4cG9ydCBjb25zdCBMT0dfT1VUX0ZBSUxVUkUgPSBcIkxPR19PVVRfRkFJTFVSRVwiO1xyXG5cclxuZXhwb3J0IGNvbnN0IFNJR05fVVBfUkVRVUVTVCA9IFwiU0lHTl9VUF9SRVFVRVNUXCI7XHJcbmV4cG9ydCBjb25zdCBTSUdOX1VQX1NVQ0NFU1MgPSBcIlNJR05fVVBfU1VDQ0VTU1wiO1xyXG5leHBvcnQgY29uc3QgU0lHTl9VUF9GQUlMVVJFID0gXCJTSUdOX1VQX0ZBSUxVUkVcIjtcclxuXHJcbmV4cG9ydCBjb25zdCBDSEFOR0VfTklDS05BTUVfUkVRVUVTVCA9IFwiU0lHTl9VUF9SRVFVRVNUXCI7XHJcbmV4cG9ydCBjb25zdCBDSEFOR0VfTklDS05BTUVfU1VDQ0VTUyA9IFwiU0lHTl9VUF9TVUNDRVNTXCI7XHJcbmV4cG9ydCBjb25zdCBDSEFOR0VfTklDS05BTUVfRkFJTFVSRSA9IFwiU0lHTl9VUF9GQUlMVVJFXCI7XHJcblxyXG5leHBvcnQgY29uc3QgRk9MTE9XX1JFUVVFU1QgPSBcIkZPTExPV19SRVFVRVNUXCI7XHJcbmV4cG9ydCBjb25zdCBGT0xMT1dfU1VDQ0VTUyA9IFwiRk9MTE9XX1NVQ0NFU1NcIjtcclxuZXhwb3J0IGNvbnN0IEZPTExPV19GQUlMVVJFID0gXCJGT0xMT1dfRkFJTFVSRVwiO1xyXG5cclxuZXhwb3J0IGNvbnN0IFVORk9MTE9XX1JFUVVFU1QgPSBcIlVORk9MTE9XX1JFUVVFU1RcIjtcclxuZXhwb3J0IGNvbnN0IFVORk9MTE9XX1NVQ0NFU1MgPSBcIlVORk9MTE9XX1NVQ0NFU1NcIjtcclxuZXhwb3J0IGNvbnN0IFVORk9MTE9XX0ZBSUxVUkUgPSBcIlVORk9MTE9XX0ZBSUxVUkVcIjtcclxuXHJcbmV4cG9ydCBjb25zdCBBRERfUE9TVF9UT19NRSA9IFwiQUREX1BPU1RfVE9fTUVcIjtcclxuZXhwb3J0IGNvbnN0IFJFTU9WRV9QT1NUX09GX01FID0gXCJSRU1PVkVfUE9TVF9PRl9NRVwiO1xyXG5cclxuY29uc3QgZHVtbXlVc2VyID0gKGRhdGEpID0+ICh7XHJcbiAgLi4uZGF0YSxcclxuICBuaWNrbmFtZTogXCJLZXZpbiBLaW1cIixcclxuICBpZDogMSxcclxuICBQb3N0czogW3sgaWQ6IDEgfV0sXHJcbiAgRm9sbG93aW5nczogW3sgbmlja25hbWU6IFwiY2hvXCIgfSwgeyBuaWNrbmFtZTogXCJraW1cIiB9LCB7IG5pY2tuYW1lOiBcImxlZVwiIH1dLFxyXG4gIEZvbGxvd2VyczogW3sgbmlja25hbWU6IFwiY2hvXCIgfSwgeyBuaWNrbmFtZTogXCJraW1cIiB9LCB7IG5pY2tuYW1lOiBcImxlZVwiIH1dLFxyXG59KTtcclxuXHJcbmV4cG9ydCBjb25zdCBsb2dpblJlcXVlc3RBY3Rpb24gPSAoZGF0YSkgPT4ge1xyXG4gIHJldHVybiB7XHJcbiAgICB0eXBlOiBMT0dfSU5fUkVRVUVTVCxcclxuICAgIGRhdGEsXHJcbiAgfTtcclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCBsb2dvdXRSZXF1ZXN0QWN0aW9uID0gKCkgPT4ge1xyXG4gIHJldHVybiB7XHJcbiAgICB0eXBlOiBMT0dfT1VUX1JFUVVFU1QsXHJcbiAgfTtcclxufTtcclxuXHJcbmNvbnN0IHJlZHVjZXIgPSAoc3RhdGUgPSBpbml0aWFsU3RhdGUsIGFjdGlvbikgPT4ge1xyXG4gIHJldHVybiBwcm9kdWNlKHN0YXRlLCAoZHJhZnQpID0+IHtcclxuICAgIHN3aXRjaCAoYWN0aW9uLnR5cGUpIHtcclxuICAgICAgY2FzZSBVTkZPTExPV19SRVFVRVNUOiB7XHJcbiAgICAgICAgZHJhZnQudW5mb2xsb3dMb2FkaW5nID0gdHJ1ZTtcclxuICAgICAgICBkcmFmdC51bmZvbGxvd0Vycm9yID0gbnVsbDtcclxuICAgICAgICBkcmFmdC51bmZvbGxvd0RvbmUgPSBmYWxzZTtcclxuICAgICAgICBicmVhaztcclxuICAgICAgfVxyXG5cclxuICAgICAgY2FzZSBVTkZPTExPV19TVUNDRVNTOlxyXG4gICAgICAgIGRyYWZ0LnVuZm9sbG93TG9hZGluZyA9IGZhbHNlO1xyXG4gICAgICAgIGRyYWZ0LnVuZm9sbG93RG9uZSA9IHRydWU7XHJcbiAgICAgICAgZHJhZnQubWUuRm9sbG93aW5ncyA9IGRyYWZ0Lm1lLkZvbGxvd2luZ3MuZmlsdGVyKCh2KSA9PiB2LmlkICE9PSBhY3Rpb24uZGF0YSk7XHJcbiAgICAgICAgLy8gZHJhZnQubWUuRm9sbG93aW5ncy5wdXNoKHsgaWQ6IGFjdGlvbi5kYXRhIH0pO1xyXG4gICAgICAgIGJyZWFrO1xyXG5cclxuICAgICAgY2FzZSBVTkZPTExPV19GQUlMVVJFOlxyXG4gICAgICAgIGRyYWZ0LnVuZm9sbG93TG9hZGluZyA9IGZhbHNlO1xyXG4gICAgICAgIGRyYWZ0LnVuZm9sbG93RXJyb3IgPSBhY3Rpb24uZXJyb3I7XHJcbiAgICAgICAgYnJlYWs7XHJcblxyXG4gICAgICBjYXNlIEZPTExPV19SRVFVRVNUOiB7XHJcbiAgICAgICAgZHJhZnQuZm9sbG93TG9hZGluZyA9IHRydWU7XHJcbiAgICAgICAgZHJhZnQuZm9sbG93RXJyb3IgPSBudWxsO1xyXG4gICAgICAgIGRyYWZ0LmZvbGxvd0RvbmUgPSBmYWxzZTtcclxuICAgICAgICBicmVhaztcclxuICAgICAgfVxyXG5cclxuICAgICAgY2FzZSBGT0xMT1dfU1VDQ0VTUzpcclxuICAgICAgICBkcmFmdC5mb2xsb3dMb2FkaW5nID0gZmFsc2U7XHJcbiAgICAgICAgZHJhZnQuZm9sbG93RG9uZSA9IHRydWU7XHJcbiAgICAgICAgLy8gZHJhZnQubWUgPSBkdW1teVVzZXIoYWN0aW9uLmRhdGEpO1xyXG4gICAgICAgIGRyYWZ0Lm1lLkZvbGxvd2luZ3MucHVzaCh7IGlkOiBhY3Rpb24uZGF0YSB9KTtcclxuICAgICAgICBicmVhaztcclxuXHJcbiAgICAgIGNhc2UgRk9MTE9XX0ZBSUxVUkU6XHJcbiAgICAgICAgZHJhZnQuZm9sbG93TG9hZGluZyA9IGZhbHNlO1xyXG4gICAgICAgIGRyYWZ0LmZvbGxvd0Vycm9yID0gYWN0aW9uLmVycm9yO1xyXG4gICAgICAgIGJyZWFrO1xyXG5cclxuICAgICAgY2FzZSBMT0dfSU5fUkVRVUVTVDoge1xyXG4gICAgICAgIGRyYWZ0LmxvZ0luTG9hZGluZyA9IHRydWU7XHJcbiAgICAgICAgZHJhZnQubG9nSW5FcnJvciA9IG51bGw7XHJcbiAgICAgICAgZHJhZnQubG9nSW5Eb25lID0gZmFsc2U7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIH1cclxuICAgICAgLy8gY29uc29sZS5sb2coXCJyZWR1Y2VyIGxvZ2luXCIpO1xyXG4gICAgICAvLyByZXR1cm4geyAuLi5zdGF0ZSwgbG9nSW5Mb2FkaW5nOiB0cnVlLCBsb2dJbkVycm9yOiBudWxsLCBsb2dJbkRvbmU6IGZhbHNlIH07XHJcbiAgICAgIGNhc2UgTE9HX0lOX1NVQ0NFU1M6XHJcbiAgICAgICAgZHJhZnQubG9nSW5Mb2FkaW5nID0gZmFsc2U7XHJcbiAgICAgICAgZHJhZnQubG9nSW5Eb25lID0gdHJ1ZTtcclxuICAgICAgICBkcmFmdC5tZSA9IGR1bW15VXNlcihhY3Rpb24uZGF0YSk7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIC8vIHJldHVybiB7XHJcbiAgICAgIC8vICAgLi4uc3RhdGUsXHJcbiAgICAgIC8vICAgbG9nSW5Mb2FkaW5nOiBmYWxzZSxcclxuICAgICAgLy8gICBsb2dJbkRvbmU6IHRydWUsXHJcbiAgICAgIC8vICAgbWU6IGR1bW15VXNlcihhY3Rpb24uZGF0YSksXHJcbiAgICAgIC8vIH07XHJcbiAgICAgIGNhc2UgTE9HX0lOX0ZBSUxVUkU6XHJcbiAgICAgICAgZHJhZnQubG9nSW5Mb2FkaW5nID0gZmFsc2U7XHJcbiAgICAgICAgZHJhZnQubG9nSW5FcnJvciA9IGFjdGlvbi5lcnJvcjtcclxuICAgICAgICBicmVhaztcclxuICAgICAgLy8gcmV0dXJuIHsgLi4uc3RhdGUsIGxvZ0luTG9hZGluZzogZmFsc2UsIGxvZ0luRXJyb3I6IGZhbHNlLCBtZTogYWN0aW9uLmRhdGEgfTtcclxuICAgICAgY2FzZSBMT0dfT1VUX1JFUVVFU1Q6XHJcbiAgICAgICAgZHJhZnQubG9nT3V0TG9hZGluZyA9IHRydWU7XHJcbiAgICAgICAgZHJhZnQubG9nT3V0RG9uZSA9IGZhbHNlO1xyXG4gICAgICAgIGRyYWZ0LmxvZ091dEVycm9yID0gbnVsbDtcclxuICAgICAgICBjb25zb2xlLmxvZyhcInJlZHVjZXIgbG9nb3V0XCIpO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICAvLyByZXR1cm4geyAuLi5zdGF0ZSwgbG9nT3V0TG9hZGluZzogdHJ1ZSwgbG9nT3V0RG9uZTogZmFsc2UsIGxvZ091dEVycm9yOiBudWxsIH07XHJcbiAgICAgIGNhc2UgTE9HX09VVF9TVUNDRVNTOlxyXG4gICAgICAgIGRyYWZ0LmxvZ091dExvYWRpbmcgPSBmYWxzZTtcclxuICAgICAgICBkcmFmdC5sb2dPdXREb25lID0gdHJ1ZTtcclxuICAgICAgICBkcmFmdC5tZSA9IG51bGw7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIC8vIHJldHVybiB7IC4uLnN0YXRlLCBsb2dPdXRMb2FkaW5nOiBmYWxzZSwgbG9nT3V0RG9uZTogdHJ1ZSwgbWU6IG51bGwgfTtcclxuICAgICAgY2FzZSBMT0dfT1VUX0ZBSUxVUkU6XHJcbiAgICAgICAgZHJhZnQubG9nT3V0TG9hZGluZyA9IGZhbHNlO1xyXG4gICAgICAgIGRyYWZ0LmxvZ091dEVycm9yID0gYWN0aW9uLmVycm9yO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICAvLyByZXR1cm4geyAuLi5zdGF0ZSwgbG9nT3V0TG9hZGluZzogZmFsc2UsIGxvZ091dEVycm9yOiBhY3Rpb24uZXJyb3IgfTtcclxuXHJcbiAgICAgIGNhc2UgU0lHTl9VUF9SRVFVRVNUOlxyXG4gICAgICAgIGRyYWZ0LnNpZ25VcExvYWRpbmcgPSB0cnVlO1xyXG4gICAgICAgIGRyYWZ0LnNpZ25VcERvbmUgPSBmYWxzZTtcclxuICAgICAgICBkcmFmdC5zaWduVXBFcnJvciA9IG51bGw7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCJyZWR1Y2VyIHNpZ25VcFwiKTtcclxuICAgICAgICBicmVhaztcclxuICAgICAgLy8gcmV0dXJuIHsgLi4uc3RhdGUsIHNpZ25VcExvYWRpbmc6IHRydWUsIHNpZ25VcERvbmU6IGZhbHNlLCBzaWduVXBFcnJvcjogbnVsbCB9O1xyXG4gICAgICBjYXNlIFNJR05fVVBfU1VDQ0VTUzpcclxuICAgICAgICBkcmFmdC5zaWduVXBMb2FkaW5nID0gZmFsc2U7XHJcbiAgICAgICAgZHJhZnQuc2lnblVwRG9uZSA9IHRydWU7XHJcbiAgICAgICAgZHJhZnQubWUgPSBudWxsO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICAvLyByZXR1cm4geyAuLi5zdGF0ZSwgc2lnblVwTG9hZGluZzogZmFsc2UsIHNpZ25VcERvbmU6IHRydWUsIG1lOiBudWxsIH07XHJcbiAgICAgIGNhc2UgU0lHTl9VUF9GQUlMVVJFOlxyXG4gICAgICAgIGRyYWZ0LnNpZ25VcExvYWRpbmcgPSBmYWxzZTtcclxuICAgICAgICBkcmFmdC5zaWduVXBFcnJvciA9IGFjdGlvbi5lcnJvcjtcclxuICAgICAgICBicmVhaztcclxuICAgICAgICByZXR1cm4geyAuLi5zdGF0ZSwgc2lnblVwTG9hZGluZzogZmFsc2UsIHNpZ25VcEVycm9yOiBhY3Rpb24uZXJyb3IgfTtcclxuXHJcbiAgICAgIGNhc2UgQ0hBTkdFX05JQ0tOQU1FX1JFUVVFU1Q6XHJcbiAgICAgICAgZHJhZnQuY2hhbmdlTmlja25hbWVMb2FkaW5nID0gdHJ1ZTtcclxuICAgICAgICBkcmFmdC5jaGFuZ2VOaWNrbmFtZURvbmUgPSBmYWxzZTtcclxuICAgICAgICBkcmFmdC5jaGFuZ2VOaWNrbmFtZUVycm9yID0gbnVsbDtcclxuICAgICAgICBjb25zb2xlLmxvZyhcInJlZHVjZXIgc2lnblVwXCIpO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAuLi5zdGF0ZSxcclxuICAgICAgICAgIGNoYW5nZU5pY2tuYW1lTG9hZGluZzogdHJ1ZSxcclxuICAgICAgICAgIGNoYW5nZU5pY2tuYW1lRG9uZTogZmFsc2UsXHJcbiAgICAgICAgICBjaGFuZ2VOaWNrbmFtZUVycm9yOiBudWxsLFxyXG4gICAgICAgIH07XHJcbiAgICAgIGNhc2UgQ0hBTkdFX05JQ0tOQU1FX1NVQ0NFU1M6XHJcbiAgICAgICAgZHJhZnQuY2hhbmdlTmlja25hbWVMb2FkaW5nID0gZmFsc2U7XHJcbiAgICAgICAgZHJhZnQuY2hhbmdlTmlja25hbWVEb25lID0gdHJ1ZTtcclxuICAgICAgICBicmVhaztcclxuICAgICAgLy8gcmV0dXJuIHsgLi4uc3RhdGUsIGNoYW5nZU5pY2tuYW1lTG9hZGluZzogZmFsc2UsIGNoYW5nZU5pY2tuYW1lRG9uZTogdHJ1ZSB9O1xyXG4gICAgICBjYXNlIENIQU5HRV9OSUNLTkFNRV9GQUlMVVJFOlxyXG4gICAgICAgIGRyYWZ0LmNoYW5nZU5pY2tuYW1lTG9hZGluZyA9IGZhbHNlO1xyXG4gICAgICAgIGRyYWZ0LmNoYW5nZU5pY2tuYW1lRXJyb3IgPSBhY3Rpb24uZXJyb3I7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgcmV0dXJuIHsgLi4uc3RhdGUsIGNoYW5nZU5pY2tuYW1lTG9hZGluZzogZmFsc2UsIGNoYW5nZU5pY2tuYW1lRXJyb3I6IGFjdGlvbi5lcnJvciB9O1xyXG4gICAgICBjYXNlIEFERF9QT1NUX1RPX01FOlxyXG4gICAgICAgIGRyYWZ0Lm1lLlBvc3RzLnVuc2hpZnQoeyBpZDogYWN0aW9uLmRhdGEgfSk7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIC8vIHJldHVybiB7XHJcbiAgICAgIC8vICAgLi4uc3RhdGUsXHJcbiAgICAgIC8vICAgbWU6IHtcclxuICAgICAgLy8gICAgIC4uLnN0YXRlLm1lLFxyXG4gICAgICAvLyAgICAgUG9zdHM6IFt7IGlkOiBhY3Rpb24uZGF0YSB9LCAuLi5zdGF0ZS5tZS5Qb3N0c10sXHJcbiAgICAgIC8vICAgfSxcclxuICAgICAgLy8gfTtcclxuICAgICAgY2FzZSBSRU1PVkVfUE9TVF9PRl9NRTpcclxuICAgICAgICBkcmFmdC5tZS5Qb3N0cyA9IGRyYWZ0Lm1lLlBvc3RzLmZpbHRlcigodikgPT4gdi5pZCAhPT0gYWN0aW9uLmRhdGEpO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICAvLyByZXR1cm4ge1xyXG4gICAgICAvLyAgIC4uLnN0YXRlLFxyXG4gICAgICAvLyAgIG1lOiB7XHJcbiAgICAgIC8vICAgICAuLi5zdGF0ZS5tZSxcclxuICAgICAgLy8gICAgIFBvc3RzOiBzdGF0ZS5tZS5Qb3N0cy5maWx0ZXIoKHYpID0+IHYuaWQgIT09IGFjdGlvbi5kYXRhKSxcclxuICAgICAgLy8gICB9LFxyXG4gICAgICAvLyB9O1xyXG4gICAgICBkZWZhdWx0OlxyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICAvLyByZXR1cm4gc3RhdGU7XHJcbiAgICB9XHJcbiAgfSk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCByZWR1Y2VyO1xyXG4iLCJpbXBvcnQgeyBhbGwsIGZvcmsgfSBmcm9tIFwicmVkdXgtc2FnYS9lZmZlY3RzXCI7XHJcbmltcG9ydCBwb3N0U2FnYSBmcm9tIFwiLi9wb3N0XCI7XHJcbmltcG9ydCB1c2VyU2FnYSBmcm9tIFwiLi91c2VyXCI7XHJcbmltcG9ydCBheGlvcyBmcm9tIFwiYXhpb3NcIjtcclxuXHJcbmF4aW9zLmRlZmF1bHRzLmJhc2VVUkwgPSBcImh0dHA6Ly9sb2NhbGhvc3Q6MzA2NVwiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24qIHJvb3RTYWdhKCkge1xyXG4gIC8vQUxM7J2EIO2VmOuptCDrsLDsl7TslYjsnZgg66qo65OgIOqyg+uTpOydhCDtlZzrsojsl5Ag64ukIOyLpO2WiSDtlaguXHJcbiAgLy9mb3Jr64qUIO2VqOyImOulvCDsi6TtlontlZzri6TripQg65y7IC5cclxuICAvL2ZvcmvrjIDsi6AgY2FsbOydhCDsk7DripQg6rK97Jqw64+EIOyeiOydjC4g7ZWY7KeA66eMIOuRkOqwnOydmCDssKjsnbTsoJAg7KCV7ZmV7Z6IIOyVjOq4sC5cclxuICAvL+OEtCBGT1JL64qUIOu5hOuPmeq4sCDtlajsiJgg7Zi47LacIC8gY2FsbOydgCDrj5nquLAg7ZWo7IiYIO2YuOy2nFxyXG4gIC8vIHlpZWxk64qUIGF3YWl06rO8IOu5hOyKt+2VqC5cclxuICB5aWVsZCBhbGwoW2ZvcmsocG9zdFNhZ2EpLCBmb3JrKHVzZXJTYWdhKV0pO1xyXG59XHJcblxyXG4vLyBmdW5jdGlvbiBsb2dJbkFQSShkYXRhKSB7XHJcbi8vICAgcmV0dXJuIGF4aW9zLnBvc3QoXCIvYXBpL2xvZ2luXCIsIGRhdGEpO1xyXG4vLyB9XHJcblxyXG4vLyAvLyBjb25zdCBsID0gbG9nSW4oe3R5cGU6ICdMT0dfSU5fUkVRVUVTVCcsIGRhdGE6IHtpZDogJ2poa2V2aW4yMUBnbWFpbC5jb20nfX0pXHJcbi8vIC8vIGwubmV4dCgpO1xyXG4vLyAvLyBsLm5leHQoKTtcclxuXHJcbi8vIGZ1bmN0aW9uKiBsb2dJbihhY3Rpb24pIHtcclxuLy8gICAvL+yEseqztSDqsrDqs7zripQgcmVzdWx0LmRhdGHsl5AsIOyLpO2MqOqyveqzvOuKlCBlcnIucmVzcG9uc2UuZGF0YeyXkCDri7TqsqjsnojsnYxcclxuLy8gICAvL3B1dOydgCBkaXNwYXRjaOudvOqzoCDsg53qsIHtlZjquLBcclxuLy8gICB0cnkge1xyXG4vLyAgICAgLy8gY29uc3QgcmVzdWx0ID0geWllbGQgY2FsbChsb2dJbkFQSSwgYWN0aW9uLmRhdGEpO1xyXG4vLyAgICAgeWllbGQgZGVsYXkoMTAwMCk7XHJcbi8vICAgICB5aWVsZCBwdXQoe1xyXG4vLyAgICAgICB0eXBlOiBcIkxPR19JTl9TVUNDRVNTXCIsXHJcbi8vICAgICAgIGRhdGE6IHJlc3VsdC5kYXRhLFxyXG4vLyAgICAgfSk7XHJcbi8vICAgfSBjYXRjaCAoZXJyKSB7XHJcbi8vICAgICB5aWVsZCBwdXQoe1xyXG4vLyAgICAgICB0eXBlOiBcIkxPR19JTl9GQUlMVVJFXCIsXHJcbi8vICAgICAgIGRhdGE6IGVyci5yZXNwb25zZS5kYXRhLFxyXG4vLyAgICAgfSk7XHJcbi8vICAgfVxyXG4vLyB9XHJcblxyXG4vLyBmdW5jdGlvbiBsb2dPdXRBUEkoKSB7XHJcbi8vICAgcmV0dXJuIGF4aW9zLnBvc3QoXCIvYXBpL2xvZ291dFwiKTtcclxuLy8gfVxyXG5cclxuLy8gZnVuY3Rpb24qIGxvZ091dCgpIHtcclxuLy8gICB0cnkge1xyXG4vLyAgICAgLy8gY29uc3QgcmVzdWx0ID0geWllbGQgY2FsbChsb2dPdXRBUEkpO1xyXG4vLyAgICAgeWllbGQgZGVsYXkoMTAwMCk7XHJcbi8vICAgICB5aWVsZCBwdXQoe1xyXG4vLyAgICAgICB0eXBlOiBcIkxPR19PVVRfU1VDQ0VTU1wiLFxyXG4vLyAgICAgICBkYXRhOiByZXN1bHQuZGF0YSxcclxuLy8gICAgIH0pO1xyXG4vLyAgIH0gY2F0Y2ggKGVycikge1xyXG4vLyAgICAgeWllbGQgcHV0KHtcclxuLy8gICAgICAgdHlwZTogXCJMT0dfT1VUX0ZBSUxVUkVcIixcclxuLy8gICAgICAgZGF0YTogZXJyLnJlc3BvbnNlLmRhdGEsXHJcbi8vICAgICB9KTtcclxuLy8gICB9XHJcbi8vIH1cclxuXHJcbi8vIGZ1bmN0aW9uIGFkZFBvc3RBUEkoZGF0YSkge1xyXG4vLyAgIHJldHVybiBheGlvcy5wb3N0KFwiL2FwaS9wb3N0XCIsIGRhdGEpO1xyXG4vLyB9XHJcblxyXG4vLyBmdW5jdGlvbiogYWRkUG9zdChhY3Rpb24pIHtcclxuLy8gICB0cnkge1xyXG4vLyAgICAgLy8gY29uc3QgcmVzdWx0ID0geWllbGQgY2FsbChhZGRQb3N0QVBJLCBhY3Rpb24uZGF0YSk7XHJcbi8vICAgICB5aWVsZCBkZWxheSgxMDAwKTtcclxuLy8gICAgIHlpZWxkIHB1dCh7XHJcbi8vICAgICAgIHR5cGU6IFwiQUREX1BPU1RfU1VDQ0VTU1wiLFxyXG4vLyAgICAgfSk7XHJcbi8vICAgfSBjYXRjaCAoZXJyKSB7XHJcbi8vICAgICB5aWVsZCBwdXQoe1xyXG4vLyAgICAgICB0eXBlOiBcIkxPR19PVVRfRkFJTFVSRVwiLFxyXG4vLyAgICAgICBkYXRhOiBlcnIucmVzcG9uc2UuZGF0YSxcclxuLy8gICAgIH0pO1xyXG4vLyAgIH1cclxuLy8gfVxyXG5cclxuLy90YWtl64qUIOuSpOyXkCBhY3Rpb27snbQg7Iuk7ZaJIOuQoOuVjOq5jOyngCDquLDri6TrpqzqsqDri6TripQg65y7ICh0YWtlKCdMT0dfSU4nLCBsb2dpbikpID0+ICdMT0dfSU4nKGFjdGlvbinsnbQg7Iuk7ZaJIOuQoOuVjCDquYzsp4Ag6riw64uk66as6rOgLCDsi6Ttlokg65CY66m0IOuSpOyXkCBsb2dJbiBmdW5jdGlvbuydhCDsi6Ttlokg7ZWoLlxyXG4vLyBldmVudCBsaXN0ZW5lciDqsJnsnYAg7Jet7ZWg7J2EIO2VmOyngOunjCDsuZjrqoXsoIHsnbgg64uo7KCQ7J2AIDHtmozsmqnsnoQuICjtlZzrsogg7Iuk7ZaJ65CY6rOgIOuCmOuptCDtlbTri7kgZXZlbnQgbGlzdG5lcuqwgCDsgqzrnbzsp5AuIOuUsOudvOyEnCB3aGlsZeuhnCDqsJDsi7jso7zqsbDrgpggdGFrZUV2ZXJ566GcIOuwm+yVhCDspJjslbwg7ZWoLikgPT4gdGFrZUxhdGVzdOuhnCDsk7gg7IiY64+EIOyeiOuKlOuNsCDsnbTqsbQsIOyLpOyImOuhnCDrkZDrsojriITrpbTqsbDrgpgg7ZaI7J2E65WMIOuniOyngOunieq6vOunjCDsnbjsi53tlbTshJwg7LKY66as7ZW0IOykjC5cclxuLy8gZnVuY3Rpb24qIHdhdGNoTG9naW4oKSB7XHJcbi8vICAgeWllbGQgdGFrZUxhdGVzdChcIkxPR19JTl9SRVFVRVNUXCIsIGxvZ0luKTtcclxuLy8gfVxyXG5cclxuLy8gZnVuY3Rpb24qIHdhdGNoTG9nT3V0KCkge1xyXG4vLyAgIHlpZWxkIHRha2VMYXRlc3QoXCJMT0dfT1VUX1JFUVVFU1RcIiwgbG9nT3V0KTtcclxuLy8gfVxyXG4vLyBmdW5jdGlvbiogd2F0Y2hBZGRQb3N0KCkge1xyXG4vLyAgIHlpZWxkIHRha2VMYXRlc3QoXCJBRERfUE9TVF9SRVFVRVNUXCIsIGFkZFBvc3QpO1xyXG4vLyB9XHJcblxyXG4vLyBleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiogcm9vdFNhZ2EoKSB7XHJcbi8vICAgLy9BTEzsnYQg7ZWY66m0IOuwsOyXtOyViOydmCDrqqjrk6Ag6rKD65Ok7J2EIO2VnOuyiOyXkCDri6Qg7Iuk7ZaJIO2VqC5cclxuLy8gICAvL2ZvcmvripQg7ZWo7IiY66W8IOyLpO2Wie2VnOuLpOuKlCDrnLsgLlxyXG4vLyAgIC8vZm9ya+uMgOyLoCBjYWxs7J2EIOyTsOuKlCDqsr3smrDrj4Qg7J6I7J2MLiDtlZjsp4Drp4wg65GQ6rCc7J2YIOywqOydtOygkCDsoJXtmZXtnogg7JWM6riwLlxyXG4vLyAgIC8v44S0IEZPUkvripQg67mE64+Z6riwIO2VqOyImCDtmLjstpwgLyBjYWxs7J2AIOuPmeq4sCDtlajsiJgg7Zi47LacXHJcbi8vICAgLy8geWllbGTripQgYXdhaXTqs7wg67mE7Iq37ZWoLlxyXG4vLyAgIHlpZWxkIGFsbChbZm9yayh3YXRjaExvZ2luKSwgZm9yayh3YXRjaExvZ091dCksIGZvcmsod2F0Y2hBZGRQb3N0KV0pO1xyXG4vLyB9XHJcbiIsImltcG9ydCBheGlvcyBmcm9tIFwiYXhpb3NcIjtcclxuaW1wb3J0IHsgYWxsLCBmb3JrLCBkZWxheSwgdGFrZUxhdGVzdCwgcHV0LCB0aHJvdHRsZSB9IGZyb20gXCJyZWR1eC1zYWdhL2VmZmVjdHNcIjtcclxuaW1wb3J0IHNob3J0SWQgZnJvbSBcInNob3J0aWRcIjtcclxuaW1wb3J0IHtcclxuICBBRERfQ09NTUVOVF9GQUlMVVJFLFxyXG4gIEFERF9DT01NRU5UX1JFUVVFU1QsXHJcbiAgQUREX0NPTU1FTlRfU1VDQ0VTUyxcclxuICBBRERfUE9TVF9GQUlMVVJFLFxyXG4gIEFERF9QT1NUX1JFUVVFU1QsXHJcbiAgQUREX1BPU1RfU1VDQ0VTUyxcclxuICBnZW5lcmF0ZUR1bW15UG9zdCxcclxuICBMT0FEX1BPU1RTX0ZBSUxVUkUsXHJcbiAgTE9BRF9QT1NUU19SRVFVRVNULFxyXG4gIExPQURfUE9TVFNfU1VDQ0VTUyxcclxuICBSRU1PVkVfUE9TVF9GQUlMVVJFLFxyXG4gIFJFTU9WRV9QT1NUX1JFUVVFU1QsXHJcbiAgUkVNT1ZFX1BPU1RfU1VDQ0VTUyxcclxufSBmcm9tIFwiLi4vcmVkdWNlcnMvcG9zdFwiO1xyXG5pbXBvcnQgeyBBRERfUE9TVF9UT19NRSwgUkVNT1ZFX1BPU1RfT0ZfTUUgfSBmcm9tIFwiLi4vcmVkdWNlcnMvdXNlclwiO1xyXG5cclxuZnVuY3Rpb24gbG9hZFBvc3RzQVBJKGRhdGEpIHtcclxuICByZXR1cm4gYXhpb3MuZ2V0KFwiL2FwaS9wb3N0c1wiLCBkYXRhKTtcclxufVxyXG5cclxuZnVuY3Rpb24qIGxvYWRQb3N0cyhhY3Rpb24pIHtcclxuICB0cnkge1xyXG4gICAgY29uc29sZS5sb2coXCJsb2FkUG9zdHMgaW4gU2FnYVwiKTtcclxuICAgIC8vIGNvbnN0IHJlc3VsdCA9IHlpZWxkIGNhbGwobG9hZFBvc3RzQVBJLCBhY3Rpb24uZGF0YSk7XHJcbiAgICB5aWVsZCBkZWxheSgxMDAwKTtcclxuICAgIHlpZWxkIHB1dCh7XHJcbiAgICAgIHR5cGU6IExPQURfUE9TVFNfU1VDQ0VTUyxcclxuICAgICAgZGF0YTogZ2VuZXJhdGVEdW1teVBvc3QoMTApLFxyXG4gICAgfSk7XHJcbiAgfSBjYXRjaCAoZXJyKSB7XHJcbiAgICBjb25zb2xlLmVycm9yKGVycik7XHJcbiAgICB5aWVsZCBwdXQoe1xyXG4gICAgICB0eXBlOiBMT0FEX1BPU1RTX0ZBSUxVUkUsXHJcbiAgICAgIGRhdGE6IGVyci5yZXNwb25zZS5kYXRhLFxyXG4gICAgfSk7XHJcbiAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiBhZGRQb3N0QVBJKGRhdGEpIHtcclxuICByZXR1cm4gYXhpb3MucG9zdChcIi9hcGkvcG9zdFwiLCBkYXRhKTtcclxufVxyXG5cclxuZnVuY3Rpb24qIGFkZFBvc3QoYWN0aW9uKSB7XHJcbiAgdHJ5IHtcclxuICAgIC8vIGNvbnN0IHJlc3VsdCA9IHlpZWxkIGNhbGwoYWRkUG9zdEFQSSwgYWN0aW9uLmRhdGEpO1xyXG4gICAgeWllbGQgZGVsYXkoMTAwMCk7XHJcbiAgICBjb25zdCBpZCA9IHNob3J0SWQuZ2VuZXJhdGUoKTtcclxuICAgIC8vIOyVhOuemOuKlCBwb3N0IHJlZHVjZXIg7KGw7J6RIOu2gOu2hFxyXG4gICAgeWllbGQgcHV0KHtcclxuICAgICAgdHlwZTogQUREX1BPU1RfU1VDQ0VTUyxcclxuICAgICAgZGF0YToge1xyXG4gICAgICAgIGlkLFxyXG4gICAgICAgIGNvbnRlbnQ6IGFjdGlvbi5kYXRhLFxyXG4gICAgICB9LFxyXG4gICAgfSk7XHJcbiAgICAvLyDslYTrnpjripQgdXNlciByZWR1Y2VyIOyhsOyekSDrtoDrtoRcclxuICAgIHlpZWxkIHB1dCh7XHJcbiAgICAgIHR5cGU6IEFERF9QT1NUX1RPX01FLFxyXG4gICAgICBkYXRhOiBpZCxcclxuICAgIH0pO1xyXG4gIH0gY2F0Y2ggKGVycikge1xyXG4gICAgeWllbGQgcHV0KHtcclxuICAgICAgdHlwZTogQUREX1BPU1RfRkFJTFVSRSxcclxuICAgICAgZGF0YTogZXJyLnJlc3BvbnNlLmRhdGEsXHJcbiAgICB9KTtcclxuICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHJlbW92ZVBvc3RBUEkoZGF0YSkge1xyXG4gIHJldHVybiBheGlvcy5kZWxldGUoXCIvYXBpL3Bvc3RcIiwgZGF0YSk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uKiByZW1vdmVQb3N0KGFjdGlvbikge1xyXG4gIHRyeSB7XHJcbiAgICAvLyBjb25zdCByZXN1bHQgPSB5aWVsZCBjYWxsKHJlbW92ZVBvc3RBUEksIGFjdGlvbi5kYXRhKTtcclxuICAgIHlpZWxkIGRlbGF5KDEwMDApO1xyXG4gICAgLy8g7JWE656Y64qUIHBvc3QgcmVkdWNlciDsobDsnpEg67aA67aEXHJcbiAgICB5aWVsZCBwdXQoe1xyXG4gICAgICB0eXBlOiBSRU1PVkVfUE9TVF9TVUNDRVNTLFxyXG4gICAgICBkYXRhOiBhY3Rpb24uZGF0YSxcclxuICAgIH0pO1xyXG4gICAgLy8g7JWE656Y64qUIHVzZXIgcmVkdWNlciDsobDsnpEg67aA67aEXHJcbiAgICB5aWVsZCBwdXQoe1xyXG4gICAgICB0eXBlOiBSRU1PVkVfUE9TVF9PRl9NRSxcclxuICAgICAgZGF0YTogYWN0aW9uLmRhdGEsXHJcbiAgICB9KTtcclxuICB9IGNhdGNoIChlcnIpIHtcclxuICAgIGNvbnNvbGUuZXJyb3IoZXJyKTtcclxuICAgIHlpZWxkIHB1dCh7XHJcbiAgICAgIHR5cGU6IFJFTU9WRV9QT1NUX0ZBSUxVUkUsXHJcbiAgICAgIGRhdGE6IGVyci5yZXNwb25zZS5kYXRhLFxyXG4gICAgfSk7XHJcbiAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiBhZGRDb21tZW50QVBJKGRhdGEpIHtcclxuICByZXR1cm4gYXhpb3MucG9zdChcIi9hcGkvcG9zdC8ke2lkfS9jb21tZW50OydcIiwgZGF0YSk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uKiBhZGRDb21tZW50KGFjdGlvbikge1xyXG4gIHRyeSB7XHJcbiAgICAvLyBjb25zdCByZXN1bHQgPSB5aWVsZCBjYWxsKGFkZFBvc3RBUEksIGFjdGlvbi5kYXRhKTtcclxuICAgIHlpZWxkIGRlbGF5KDEwMDApO1xyXG4gICAgeWllbGQgcHV0KHtcclxuICAgICAgdHlwZTogQUREX0NPTU1FTlRfU1VDQ0VTUyxcclxuICAgICAgZGF0YTogYWN0aW9uLmRhdGEsXHJcbiAgICB9KTtcclxuICB9IGNhdGNoIChlcnIpIHtcclxuICAgIHlpZWxkIHB1dCh7XHJcbiAgICAgIHR5cGU6IEFERF9DT01NRU5UX0ZBSUxVUkUsXHJcbiAgICAgIGRhdGE6IGVyci5yZXNwb25zZS5kYXRhLFxyXG4gICAgfSk7XHJcbiAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiogd2F0Y2hMb2FkUG9zdHMoKSB7XHJcbiAgeWllbGQgdGhyb3R0bGUoMjAwMCwgTE9BRF9QT1NUU19SRVFVRVNULCBsb2FkUG9zdHMpO1xyXG59XHJcbmZ1bmN0aW9uKiB3YXRjaEFkZENvbW1lbnQoKSB7XHJcbiAgeWllbGQgdGFrZUxhdGVzdChBRERfQ09NTUVOVF9SRVFVRVNULCBhZGRDb21tZW50KTtcclxufVxyXG5mdW5jdGlvbiogd2F0Y2hSZW1vdmVQb3N0KCkge1xyXG4gIHlpZWxkIHRha2VMYXRlc3QoUkVNT1ZFX1BPU1RfUkVRVUVTVCwgcmVtb3ZlUG9zdCk7XHJcbn1cclxuZnVuY3Rpb24qIHdhdGNoQWRkUG9zdCgpIHtcclxuICB5aWVsZCB0YWtlTGF0ZXN0KEFERF9QT1NUX1JFUVVFU1QsIGFkZFBvc3QpO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiogcG9zdFNhZ2EoKSB7XHJcbiAgeWllbGQgYWxsKFtcclxuICAgIGZvcmsod2F0Y2hBZGRQb3N0KSxcclxuICAgIGZvcmsod2F0Y2hMb2FkUG9zdHMpLFxyXG4gICAgZm9yayh3YXRjaFJlbW92ZVBvc3QpLFxyXG4gICAgZm9yayh3YXRjaEFkZENvbW1lbnQpLFxyXG4gIF0pO1xyXG59XHJcbiIsImltcG9ydCBheGlvcyBmcm9tIFwiYXhpb3NcIjtcclxuaW1wb3J0IHsgYWxsLCBmb3JrLCBwdXQsIHRha2VMYXRlc3QsIGRlbGF5LCBjYWxsIH0gZnJvbSBcInJlZHV4LXNhZ2EvZWZmZWN0c1wiO1xyXG5pbXBvcnQge1xyXG4gIExPR19JTl9GQUlMVVJFLFxyXG4gIExPR19JTl9SRVFVRVNULFxyXG4gIExPR19JTl9TVUNDRVNTLFxyXG4gIExPR19PVVRfRkFJTFVSRSxcclxuICBMT0dfT1VUX1JFUVVFU1QsXHJcbiAgTE9HX09VVF9TVUNDRVNTLFxyXG4gIFNJR05fVVBfUkVRVUVTVCxcclxuICBTSUdOX1VQX1NVQ0NFU1MsXHJcbiAgU0lHTl9VUF9GQUlMVVJFLFxyXG4gIFVORk9MTE9XX0ZBSUxVUkUsXHJcbiAgVU5GT0xMT1dfUkVRVUVTVCxcclxuICBVTkZPTExPV19TVUNDRVNTLFxyXG4gIEZPTExPV19GQUlMVVJFLFxyXG4gIEZPTExPV19SRVFVRVNULFxyXG4gIEZPTExPV19TVUNDRVNTLFxyXG59IGZyb20gXCIuLi9yZWR1Y2Vycy91c2VyXCI7XHJcblxyXG5mdW5jdGlvbiBsb2dJbkFQSShkYXRhKSB7XHJcbiAgcmV0dXJuIGF4aW9zLnBvc3QoXCIvdXNlci9sb2dpblwiLCBkYXRhKTtcclxufVxyXG5cclxuLy8gY29uc3QgbCA9IGxvZ0luKHt0eXBlOiAnTE9HX0lOX1JFUVVFU1QnLCBkYXRhOiB7aWQ6ICdqaGtldmluMjFAZ21haWwuY29tJ319KVxyXG4vLyBsLm5leHQoKTtcclxuLy8gbC5uZXh0KCk7XHJcblxyXG5mdW5jdGlvbiogbG9nSW4oYWN0aW9uKSB7XHJcbiAgLy8g7ISx6rO1IOqysOqzvOuKlCByZXN1bHQuZGF0YeyXkCwg7Iuk7Yyo6rK96rO864qUIGVyci5yZXNwb25zZS5kYXRh7JeQIOuLtOqyqOyeiOydjFxyXG4gIC8vIHB1dOydgCBkaXNwYXRjaOudvOqzoCDsg53qsIHtlZjquLBcclxuICB0cnkge1xyXG4gICAgY29uc29sZS5sb2coXCJzYWdhIGxvZ2luXCIpO1xyXG4gICAgY29uc3QgcmVzdWx0ID0geWllbGQgY2FsbChsb2dJbkFQSSwgYWN0aW9uLmRhdGEpO1xyXG4gICAgLy8geWllbGQgZGVsYXkoMTAwMCk7XHJcbiAgICB5aWVsZCBwdXQoe1xyXG4gICAgICB0eXBlOiBMT0dfSU5fU1VDQ0VTUyxcclxuICAgICAgZGF0YTogcmVzdWx0LmRhdGEsXHJcbiAgICB9KTtcclxuICB9IGNhdGNoIChlcnIpIHtcclxuICAgIHlpZWxkIHB1dCh7XHJcbiAgICAgIHR5cGU6IExPR19JTl9GQUlMVVJFLFxyXG4gICAgICBlcnJvcjogZXJyLnJlc3BvbnNlLmRhdGEsXHJcbiAgICB9KTtcclxuICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGxvZ091dEFQSSgpIHtcclxuICByZXR1cm4gYXhpb3MucG9zdChcIi91c2VyL2xvZ291dFwiKTtcclxufVxyXG5cclxuZnVuY3Rpb24qIGxvZ091dCgpIHtcclxuICB0cnkge1xyXG4gICAgY29uc29sZS5sb2coXCJzYWdhIGxvZ291dFwiKTtcclxuICAgIC8vIGNvbnN0IHJlc3VsdCA9IHlpZWxkIGNhbGwobG9nT3V0QVBJKTtcclxuICAgIHlpZWxkIGRlbGF5KDEwMDApO1xyXG4gICAgeWllbGQgcHV0KHtcclxuICAgICAgdHlwZTogTE9HX09VVF9TVUNDRVNTLFxyXG4gICAgICAvLyAgIGRhdGE6IHJlc3VsdC5kYXRhLFxyXG4gICAgfSk7XHJcbiAgfSBjYXRjaCAoZXJyKSB7XHJcbiAgICB5aWVsZCBwdXQoe1xyXG4gICAgICB0eXBlOiBMT0dfT1VUX0ZBSUxVUkUsXHJcbiAgICAgIGVycm9yOiBlcnIucmVzcG9uc2UuZGF0YSxcclxuICAgIH0pO1xyXG4gIH1cclxufVxyXG5cclxuZnVuY3Rpb24gc2lnblVwQVBJKGRhdGEpIHtcclxuICByZXR1cm4gYXhpb3MucG9zdChcIi91c2VyXCIsIGRhdGEpO1xyXG59XHJcblxyXG5mdW5jdGlvbiogc2lnblVwKGFjdGlvbikge1xyXG4gIHRyeSB7XHJcbiAgICBjb25zb2xlLmxvZyhcInNhZ2Egc2lnblVwXCIpO1xyXG4gICAgY29uc3QgcmVzdWx0ID0geWllbGQgY2FsbChzaWduVXBBUEksIGFjdGlvbi5kYXRhKTtcclxuICAgIGNvbnNvbGUubG9nKHJlc3VsdCk7XHJcbiAgICAvLyB5aWVsZCBkZWxheSgxMDAwKTtcclxuICAgIHlpZWxkIHB1dCh7XHJcbiAgICAgIHR5cGU6IFNJR05fVVBfU1VDQ0VTUyxcclxuICAgIH0pO1xyXG4gIH0gY2F0Y2ggKGVycikge1xyXG4gICAgeWllbGQgcHV0KHtcclxuICAgICAgdHlwZTogU0lHTl9VUF9GQUlMVVJFLFxyXG4gICAgICBlcnJvcjogZXJyLnJlc3BvbnNlLmRhdGEsXHJcbiAgICB9KTtcclxuICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGZvbGxvd0FQSShkYXRhKSB7XHJcbiAgcmV0dXJuIGF4aW9zLnBvc3QoXCIvYXBpL2ZvbGxvd1wiKTtcclxufVxyXG5cclxuZnVuY3Rpb24qIGZvbGxvdyhhY3Rpb24pIHtcclxuICB0cnkge1xyXG4gICAgLy8gY29uc3QgcmVzdWx0ID0geWllbGQgY2FsbChmb2xsb3dBUEksIGFjdGlvbi5kYXRhKTtcclxuICAgIHlpZWxkIGRlbGF5KDEwMDApO1xyXG5cclxuICAgIHlpZWxkIHB1dCh7XHJcbiAgICAgIHR5cGU6IEZPTExPV19TVUNDRVNTLFxyXG4gICAgICBkYXRhOiBhY3Rpb24uZGF0YSxcclxuICAgIH0pO1xyXG4gIH0gY2F0Y2ggKGVycikge1xyXG4gICAgY29uc29sZS5lcnJvcihlcnIpO1xyXG4gICAgeWllbGQgcHV0KHtcclxuICAgICAgdHlwZTogRk9MTE9XX0ZBSUxVUkUsXHJcbiAgICAgIGRhdGE6IGVyci5yZXNwb25zZS5kYXRhLFxyXG4gICAgfSk7XHJcbiAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiB1bkZvbGxvd0FQSShkYXRhKSB7XHJcbiAgcmV0dXJuIGF4aW9zLmRlbGV0ZShcIi9hcGkvcG9zdFwiLCBkYXRhKTtcclxufVxyXG5cclxuZnVuY3Rpb24qIHVuRm9sbG93KGFjdGlvbikge1xyXG4gIHRyeSB7XHJcbiAgICAvLyBjb25zdCByZXN1bHQgPSB5aWVsZCBjYWxsKHVuRm9sbG93QVBJLCBhY3Rpb24uZGF0YSk7XHJcbiAgICB5aWVsZCBkZWxheSgxMDAwKTtcclxuICAgIC8vIOyVhOuemOuKlCBwb3N0IHJlZHVjZXIg7KGw7J6RIOu2gOu2hFxyXG4gICAgeWllbGQgcHV0KHtcclxuICAgICAgdHlwZTogVU5GT0xMT1dfU1VDQ0VTUyxcclxuICAgICAgZGF0YTogYWN0aW9uLmRhdGEsXHJcbiAgICB9KTtcclxuICB9IGNhdGNoIChlcnIpIHtcclxuICAgIGNvbnNvbGUuZXJyb3IoZXJyKTtcclxuICAgIHlpZWxkIHB1dCh7XHJcbiAgICAgIHR5cGU6IFVORk9MTE9XX0ZBSUxVUkUsXHJcbiAgICAgIGRhdGE6IGVyci5yZXNwb25zZS5kYXRhLFxyXG4gICAgfSk7XHJcbiAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiogd2F0Y2hMb2dJbigpIHtcclxuICB5aWVsZCB0YWtlTGF0ZXN0KExPR19JTl9SRVFVRVNULCBsb2dJbik7XHJcbn1cclxuXHJcbmZ1bmN0aW9uKiB3YXRjaExvZ091dCgpIHtcclxuICB5aWVsZCB0YWtlTGF0ZXN0KExPR19PVVRfUkVRVUVTVCwgbG9nT3V0KTtcclxufVxyXG5mdW5jdGlvbiogd2F0Y2hTaWduVXAoKSB7XHJcbiAgeWllbGQgdGFrZUxhdGVzdChTSUdOX1VQX1JFUVVFU1QsIHNpZ25VcCk7XHJcbn1cclxuZnVuY3Rpb24qIHdhdGNoRm9sbG93KCkge1xyXG4gIHlpZWxkIHRha2VMYXRlc3QoRk9MTE9XX1JFUVVFU1QsIGZvbGxvdyk7XHJcbn1cclxuZnVuY3Rpb24qIHdhdGNoVW5Gb2xsb3coKSB7XHJcbiAgeWllbGQgdGFrZUxhdGVzdChVTkZPTExPV19SRVFVRVNULCB1bkZvbGxvdyk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKiB1c2VyU2FnYSgpIHtcclxuICB5aWVsZCBhbGwoW1xyXG4gICAgZm9yayh3YXRjaExvZ0luKSxcclxuICAgIGZvcmsod2F0Y2hMb2dPdXQpLFxyXG4gICAgZm9yayh3YXRjaFNpZ25VcCksXHJcbiAgICBmb3JrKHdhdGNoRm9sbG93KSxcclxuICAgIGZvcmsod2F0Y2hVbkZvbGxvdyksXHJcbiAgXSk7XHJcbn1cclxuIiwiLy8gaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5cclxuaW1wb3J0IHsgY3JlYXRlV3JhcHBlciB9IGZyb20gXCJuZXh0LXJlZHV4LXdyYXBwZXJcIjtcclxuaW1wb3J0IHsgY3JlYXRlU3RvcmUsIGFwcGx5TWlkZGxld2FyZSwgY29tcG9zZSB9IGZyb20gXCJyZWR1eFwiO1xyXG5pbXBvcnQgeyBjb21wb3NlV2l0aERldlRvb2xzIH0gZnJvbSBcInJlZHV4LWRldnRvb2xzLWV4dGVuc2lvblwiO1xyXG5pbXBvcnQgY3JlYXRlU2FnYU1pZGRsZXdhcmUgZnJvbSBcInJlZHV4LXNhZ2FcIjtcclxuXHJcbmltcG9ydCByZWR1Y2VyIGZyb20gXCIuLi9yZWR1Y2Vycy9pbmRleFwiO1xyXG5pbXBvcnQgcm9vdFNhZ2EgZnJvbSBcIi4uL3NhZ2FzXCI7XHJcblxyXG5jb25zdCBsb2dnZXJNaWRkbGV3YXJlID1cclxuICAoeyBkaXNwYXRjaCwgZ2V0U3RhdGUgfSkgPT5cclxuICAobmV4dCkgPT5cclxuICAoYWN0aW9uKSA9PiB7XHJcbiAgICAvLyBpZiAodHlwZW9mIGFjdGlvbiA9PT0gXCJmdW5jdGlvblwiKSB7XHJcbiAgICAvLyAgIHJldHVybiBhY3Rpb24oZGlzcGF0Y2gsIGdldFN0YXRlKTtcclxuICAgIC8vIH1cclxuICAgIGNvbnNvbGUubG9nKGFjdGlvbik7XHJcbiAgICByZXR1cm4gbmV4dChhY3Rpb24pO1xyXG4gIH07XHJcblxyXG5jb25zdCBjb25maWd1cmVTdG9yZSA9ICgpID0+IHtcclxuICBjb25zdCBzYWdhTWlkZGxld2FyZSA9IGNyZWF0ZVNhZ2FNaWRkbGV3YXJlKCk7XHJcbiAgY29uc3QgbWlkZGxld2FyZXMgPSBbc2FnYU1pZGRsZXdhcmUsIGxvZ2dlck1pZGRsZXdhcmVdO1xyXG4gIGNvbnN0IGVuaGFuY2VyID1cclxuICAgIHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSBcInByb2R1Y3Rpb25cIlxyXG4gICAgICA/IGNvbXBvc2UoYXBwbHlNaWRkbGV3YXJlKC4uLm1pZGRsZXdhcmVzKSlcclxuICAgICAgOiBjb21wb3NlV2l0aERldlRvb2xzKGFwcGx5TWlkZGxld2FyZSguLi5taWRkbGV3YXJlcykpO1xyXG4gIC8v7JyEIOyEpOuqhTog6rCc67Cc7JqpIG1pZGRsZXdhcmXrnpEg67Cw7Y+s7JqpIG1pZGRsZXdhcmXripQg64uk66W06riwIOuVjOusuOyXkCDsnITsmYAg6rCZ7J20IOygleydmCDtlaguXHJcblxyXG4gIGNvbnN0IHN0b3JlID0gY3JlYXRlU3RvcmUocmVkdWNlciwgZW5oYW5jZXIpO1xyXG4gIHN0b3JlLnNhZ2FUYXNrID0gc2FnYU1pZGRsZXdhcmUucnVuKHJvb3RTYWdhKTtcclxuICAvLyBzdG9yZS5kaXNwYXRjaCh7XHJcbiAgLy8gICB0eXBlOiBcIkNIQU5HRV9OSUNLTkFNRVwiLFxyXG4gIC8vICAgZGF0YTogXCJKYWVoYW5cIixcclxuICAvLyB9KTtcclxuICByZXR1cm4gc3RvcmU7XHJcbn07XHJcblxyXG5jb25zdCB3cmFwcGVyID0gY3JlYXRlV3JhcHBlcihjb25maWd1cmVTdG9yZSwgeyBkZWJ1ZzogcHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09IFwiZGV2ZWxvcG1lbnRcIiB9KTtcclxuLy/snITsmYAg6rCZ7J20IO2VmOuptCByZWR1eCDsgqzsmqnsi5wg66y47KCc7KCQ65Ox7J20IOuNlCDsnpDshLjtnogg64KY7Ji0LiDrlLDrnbzshJwg7JyE7JmAIOqwmeydtCDshKTsoJUg7ZWY6riwXHJcblxyXG5leHBvcnQgZGVmYXVsdCB3cmFwcGVyO1xyXG4iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJheGlvc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJmYWtlclwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJpbW1lclwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0LXJlZHV4LXNhZ2FcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC1yZWR1eC13cmFwcGVyXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvaGVhZFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJwcm9wLXR5cGVzXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0L2pzeC1kZXYtcnVudGltZVwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWR1eFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWR1eC1kZXZ0b29scy1leHRlbnNpb25cIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVkdXgtc2FnYVwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWR1eC1zYWdhL2VmZmVjdHNcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwic2hvcnRpZFwiKTsiXSwic291cmNlUm9vdCI6IiJ9