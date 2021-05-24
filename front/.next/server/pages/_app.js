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
/*! exports provided: initialState, ADD_POST_REQUEST, ADD_POST_SUCCESS, ADD_POST_FAILURE, REMOVE_POST_REQUEST, REMOVE_POST_SUCCESS, REMOVE_POST_FAILURE, ADD_COMMENT_REQUEST, ADD_COMMENT_SUCCESS, ADD_COMMENT_FAILURE, addPost, addComment, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initialState", function() { return initialState; });
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
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


const initialState = {
  mainPosts: [{
    id: 1,
    User: {
      id: 1,
      nickname: "Kevin"
    },
    content: "First Post #HashTag, #Express",
    // Images: [
    //   {
    //     src: "https://res.cloudinary.com/highereducation/image/upload/c_scale,w_750/f_auto,fl_lossy,q_auto:eco/v1532988864/TheBestColleges.org/images/study-notebooks.jpg",
    //   },
    //   {
    //     src: "https://www.fastweb.com/uploads/article_photo/photo/2161/crop380w_istock_000002193842xsmall-books.jpg",
    //   },
    //   {
    //     src: "https://www.insidehighered.com/sites/default/server_files/media/iStock-520374378.jpg",
    //   },
    // ],
    Images: [{
      id: shortid__WEBPACK_IMPORTED_MODULE_0___default.a.generate(),
      src: "https://bookthumb-phinf.pstatic.net/cover/137/995/13799585.jpg?udate=20180726"
    }, {
      id: shortid__WEBPACK_IMPORTED_MODULE_0___default.a.generate(),
      src: "https://gimg.gilbut.co.kr/book/BN001958/rn_view_BN001958.jpg"
    }, {
      id: shortid__WEBPACK_IMPORTED_MODULE_0___default.a.generate(),
      src: "https://gimg.gilbut.co.kr/book/BN001998/rn_view_BN001998.jpg"
    }],
    Comments: [{
      id: shortid__WEBPACK_IMPORTED_MODULE_0___default.a.generate(),
      User: {
        id: shortid__WEBPACK_IMPORTED_MODULE_0___default.a.generate(),
        nickname: "nero"
      },
      content: "Great post!"
    }, {
      id: shortid__WEBPACK_IMPORTED_MODULE_0___default.a.generate(),
      User: {
        id: shortid__WEBPACK_IMPORTED_MODULE_0___default.a.generate(),
        nickname: "jaehan"
      },
      content: `it's really educational`
    }]
  }],
  imagePaths: [],
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
});

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_POST_REQUEST:
      {
        return _objectSpread(_objectSpread({}, state), {}, {
          addPostLoading: true,
          addPostDone: false,
          addPostError: null
        });
      }

    case ADD_POST_SUCCESS:
      {
        // action.data.content, postId, userId;
        return _objectSpread(_objectSpread({}, state), {}, {
          mainPosts: [dummyPost(action.data), ...state.mainPosts],
          addPostLoading: false,
          addPostDone: true
        });
      }

    case ADD_POST_FAILURE:
      return _objectSpread(_objectSpread({}, state), {}, {
        addPostLoading: false,
        addPostError: action.error
      });

    case REMOVE_POST_REQUEST:
      {
        return _objectSpread(_objectSpread({}, state), {}, {
          removePostLoading: true,
          removePostDone: false,
          removePostError: null
        });
      }

    case REMOVE_POST_SUCCESS:
      {
        // action.data.content, postId, userId;
        return _objectSpread(_objectSpread({}, state), {}, {
          mainPosts: state.mainPosts.filter(v => v.id !== action.data),
          removePostLoading: false,
          removePostDone: true
        });
      }

    case REMOVE_POST_FAILURE:
      return _objectSpread(_objectSpread({}, state), {}, {
        removePostLoading: false,
        removePostError: action.error
      });

    case ADD_COMMENT_REQUEST:
      {
        return _objectSpread(_objectSpread({}, state), {}, {
          addCommentLoading: true,
          addCommentDone: false,
          addCommentError: null
        });
      }
    //아래 부분 이해 안되면 게시글,댓글 saga 작성 하기 다시 체크. 11:30분 정도

    case ADD_COMMENT_SUCCESS:
      {
        const postIndex = state.mainPosts.findIndex(v => v.id === action.data.postId);

        const post = _objectSpread({}, state.mainPosts[postIndex]);

        post.Comments = [dummyComment(action.data.content), ...post.Comments];
        const mainPosts = [...state.mainPosts];
        mainPosts[postIndex] = post;
        return _objectSpread(_objectSpread({}, state), {}, {
          mainPosts,
          addCommentLoading: false,
          addCommentDone: true
        });
      }

    case ADD_COMMENT_FAILURE:
      return _objectSpread(_objectSpread({}, state), {}, {
        addCommentLoading: false,
        addCommentError: action.error
      });

    default:
      {
        return _objectSpread({}, state);
      }
  }
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
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

const initialState = {
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
  switch (action.type) {
    case LOG_IN_REQUEST:
      console.log("reducer login");
      return _objectSpread(_objectSpread({}, state), {}, {
        logInLoading: true,
        logInError: null,
        logInDone: false
      });

    case LOG_IN_SUCCESS:
      return _objectSpread(_objectSpread({}, state), {}, {
        logInLoading: false,
        logInDone: true,
        me: dummyUser(action.data)
      });

    case LOG_IN_FAILURE:
      return _objectSpread(_objectSpread({}, state), {}, {
        logInLoading: false,
        logInError: false,
        me: action.data
      });

    case LOG_OUT_REQUEST:
      console.log("reducer logout");
      return _objectSpread(_objectSpread({}, state), {}, {
        logOutLoading: true,
        logOutDone: false,
        logOutError: null
      });

    case LOG_OUT_SUCCESS:
      return _objectSpread(_objectSpread({}, state), {}, {
        logOutLoading: false,
        logOutDone: true,
        me: null
      });

    case LOG_OUT_FAILURE:
      return _objectSpread(_objectSpread({}, state), {}, {
        logOutLoading: false,
        logOutError: action.error
      });

    case SIGN_UP_REQUEST:
      console.log("reducer signUp");
      return _objectSpread(_objectSpread({}, state), {}, {
        signUpLoading: true,
        signUpDone: false,
        signUpError: null
      });

    case SIGN_UP_SUCCESS:
      return _objectSpread(_objectSpread({}, state), {}, {
        signUpLoading: false,
        signUpDone: true,
        me: null
      });

    case SIGN_UP_FAILURE:
      return _objectSpread(_objectSpread({}, state), {}, {
        signUpLoading: false,
        signUpError: action.error
      });

    case CHANGE_NICKNAME_REQUEST:
      console.log("reducer signUp");
      return _objectSpread(_objectSpread({}, state), {}, {
        changeNicknameLoading: true,
        changeNicknameDone: false,
        changeNicknameError: null
      });

    case CHANGE_NICKNAME_SUCCESS:
      return _objectSpread(_objectSpread({}, state), {}, {
        changeNicknameLoading: false,
        changeNicknameDone: true
      });

    case CHANGE_NICKNAME_FAILURE:
      return _objectSpread(_objectSpread({}, state), {}, {
        changeNicknameLoading: false,
        changeNicknameError: action.error
      });

    case ADD_POST_TO_ME:
      return _objectSpread(_objectSpread({}, state), {}, {
        me: _objectSpread(_objectSpread({}, state.me), {}, {
          Posts: [{
            id: action.data
          }, ...state.me.Posts]
        })
      });

    case REMOVE_POST_OF_ME:
      return _objectSpread(_objectSpread({}, state), {}, {
        me: _objectSpread(_objectSpread({}, state.me), {}, {
          Posts: state.me.Posts.filter(v => v.id === action.data)
        })
      });

    default:
      return state;
  }
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

function* watchAddPost() {
  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["takeLatest"])(_reducers_post__WEBPACK_IMPORTED_MODULE_3__["ADD_POST_REQUEST"], addPost);
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

function* watchRemovePost() {
  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["takeLatest"])(_reducers_post__WEBPACK_IMPORTED_MODULE_3__["REMOVE_POST_REQUEST"], removePost);
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

function* watchAddComment() {
  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["takeLatest"])(_reducers_post__WEBPACK_IMPORTED_MODULE_3__["ADD_COMMENT_REQUEST"], addComment);
}

function* postSaga() {
  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["all"])([Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["fork"])(watchAddPost), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["fork"])(watchRemovePost), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["fork"])(watchAddComment)]);
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
  return axios__WEBPACK_IMPORTED_MODULE_0___default.a.post("/api/login", data);
} // const l = logIn({type: 'LOG_IN_REQUEST', data: {id: 'jhkevin21@gmail.com'}})
// l.next();
// l.next();


function* logIn(action) {
  //성공 결과는 result.data에, 실패경과는 err.response.data에 담겨있음
  //put은 dispatch라고 생각하기
  try {
    console.log("saga login"); // const result = yield call(logInAPI, action.data);

    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["delay"])(1000);
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])({
      type: _reducers_user__WEBPACK_IMPORTED_MODULE_2__["LOG_IN_SUCCESS"],
      data: action.data
    });
  } catch (err) {
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])({
      type: _reducers_user__WEBPACK_IMPORTED_MODULE_2__["LOG_IN_FAILURE"],
      error: err.response.data
    });
  }
}

function logOutAPI() {
  return axios__WEBPACK_IMPORTED_MODULE_0___default.a.post("/api/logout");
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

function singUpAPI() {
  return axios__WEBPACK_IMPORTED_MODULE_0___default.a.get("/api/signUp");
}

function* signUp() {
  try {
    console.log("saga signUp"); // const result = yield call(signUp);

    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["delay"])(1000);
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

function* watchLogIn() {
  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["takeLatest"])(_reducers_user__WEBPACK_IMPORTED_MODULE_2__["LOG_IN_REQUEST"], logIn);
}

function* watchLogOut() {
  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["takeLatest"])(_reducers_user__WEBPACK_IMPORTED_MODULE_2__["LOG_OUT_REQUEST"], logOut);
}

function* watchSignUp() {
  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["takeLatest"])(_reducers_user__WEBPACK_IMPORTED_MODULE_2__["SIGN_UP_REQUEST"], signUp);
}

function* userSaga() {
  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["all"])([Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["fork"])(watchLogIn), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["fork"])(watchLogOut), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["fork"])(watchSignUp)]);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vcGFnZXMvX2FwcC5qcyIsIndlYnBhY2s6Ly8vLi9yZWR1Y2Vycy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9yZWR1Y2Vycy9wb3N0LmpzIiwid2VicGFjazovLy8uL3JlZHVjZXJzL3VzZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc2FnYXMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc2FnYXMvcG9zdC5qcyIsIndlYnBhY2s6Ly8vLi9zYWdhcy91c2VyLmpzIiwid2VicGFjazovLy8uL3N0b3JlL2NvbmZpZ3VyZVN0b3JlLmpzIiwid2VicGFjazovLy9leHRlcm5hbCBcImF4aW9zXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibmV4dC1yZWR1eC1zYWdhXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibmV4dC1yZWR1eC13cmFwcGVyXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibmV4dC9oZWFkXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicHJvcC10eXBlc1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3QvanN4LWRldi1ydW50aW1lXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVkdXhcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWR1eC1kZXZ0b29scy1leHRlbnNpb25cIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWR1eC1zYWdhXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVkdXgtc2FnYS9lZmZlY3RzXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwic2hvcnRpZFwiIl0sIm5hbWVzIjpbIk5vZGVCaXJkIiwiQ29tcG9uZW50IiwicHJvcFR5cGVzIiwiUHJvcFR5cGVzIiwiZWxlbWVudFR5cGUiLCJpc1JlcXVpcmVkIiwid3JhcHBlciIsIndpdGhSZWR1eCIsIndpdGhSZWR1eFNhZ2EiLCJyb290UmVkdWNlciIsImNvbWJpbmVSZWR1Y2VycyIsImluZGV4Iiwic3RhdGUiLCJhY3Rpb24iLCJ0eXBlIiwiSFlEUkFURSIsImNvbnNvbGUiLCJsb2ciLCJwYXlsb2FkIiwidXNlciIsInBvc3QiLCJpbml0aWFsU3RhdGUiLCJtYWluUG9zdHMiLCJpZCIsIlVzZXIiLCJuaWNrbmFtZSIsImNvbnRlbnQiLCJJbWFnZXMiLCJzaG9ydElkIiwiZ2VuZXJhdGUiLCJzcmMiLCJDb21tZW50cyIsImltYWdlUGF0aHMiLCJhZGRQb3N0TG9hZGluZyIsImFkZFBvc3REb25lIiwiYWRkUG9zdEVycm9yIiwicmVtb3ZlUG9zdExvYWRpbmciLCJyZW1vdmVQb3N0RG9uZSIsInJlbW92ZVBvc3RFcnJvciIsImFkZENvbW1lbnRMb2FkaW5nIiwiYWRkQ29tbWVudERvbmUiLCJhZGRDb21tZW50RXJyb3IiLCJBRERfUE9TVF9SRVFVRVNUIiwiQUREX1BPU1RfU1VDQ0VTUyIsIkFERF9QT1NUX0ZBSUxVUkUiLCJSRU1PVkVfUE9TVF9SRVFVRVNUIiwiUkVNT1ZFX1BPU1RfU1VDQ0VTUyIsIlJFTU9WRV9QT1NUX0ZBSUxVUkUiLCJBRERfQ09NTUVOVF9SRVFVRVNUIiwiQUREX0NPTU1FTlRfU1VDQ0VTUyIsIkFERF9DT01NRU5UX0ZBSUxVUkUiLCJhZGRQb3N0IiwiZGF0YSIsImFkZENvbW1lbnQiLCJkdW1teVBvc3QiLCJkdW1teUNvbW1lbnQiLCJyZWR1Y2VyIiwiZXJyb3IiLCJmaWx0ZXIiLCJ2IiwicG9zdEluZGV4IiwiZmluZEluZGV4IiwicG9zdElkIiwibG9nSW5Mb2FkaW5nIiwibG9nSW5Eb25lIiwibG9nSW5FcnJvciIsImxvZ091dExvYWRpbmciLCJsb2dPdXREb25lIiwibG9nT3V0RXJyb3IiLCJzaWduVXBMb2FkaW5nIiwic2lnblVwRG9uZSIsInNpZ25VcEVycm9yIiwiY2hhbmdlTmlja25hbWVMb2FkaW5nIiwiY2hhbmdlTmlja25hbWVEb25lIiwiY2hhbmdlTmlja25hbWVFcnJvciIsIm1lIiwic2lnblVwRGF0YSIsImxvZ2luRGF0YSIsIkxPR19JTl9SRVFVRVNUIiwiTE9HX0lOX1NVQ0NFU1MiLCJMT0dfSU5fRkFJTFVSRSIsIkxPR19PVVRfUkVRVUVTVCIsIkxPR19PVVRfU1VDQ0VTUyIsIkxPR19PVVRfRkFJTFVSRSIsIlNJR05fVVBfUkVRVUVTVCIsIlNJR05fVVBfU1VDQ0VTUyIsIlNJR05fVVBfRkFJTFVSRSIsIkNIQU5HRV9OSUNLTkFNRV9SRVFVRVNUIiwiQ0hBTkdFX05JQ0tOQU1FX1NVQ0NFU1MiLCJDSEFOR0VfTklDS05BTUVfRkFJTFVSRSIsIkZPTExPV19SRVFVRVNUIiwiRk9MTE9XX1NVQ0NFU1MiLCJGT0xMT1dfRkFJTFVSRSIsIlVORk9MTE9XX1JFUVVFU1QiLCJVTkZPTExPV19TVUNDRVNTIiwiVU5GT0xMT1dfRkFJTFVSRSIsIkFERF9QT1NUX1RPX01FIiwiUkVNT1ZFX1BPU1RfT0ZfTUUiLCJkdW1teVVzZXIiLCJQb3N0cyIsIkZvbGxvd2luZ3MiLCJGb2xsb3dlcnMiLCJsb2dpblJlcXVlc3RBY3Rpb24iLCJsb2dvdXRSZXF1ZXN0QWN0aW9uIiwicm9vdFNhZ2EiLCJhbGwiLCJmb3JrIiwicG9zdFNhZ2EiLCJ1c2VyU2FnYSIsImFkZFBvc3RBUEkiLCJheGlvcyIsImRlbGF5IiwicHV0IiwiZXJyIiwicmVzcG9uc2UiLCJ3YXRjaEFkZFBvc3QiLCJ0YWtlTGF0ZXN0IiwicmVtb3ZlUG9zdEFQSSIsImRlbGV0ZSIsInJlbW92ZVBvc3QiLCJ3YXRjaFJlbW92ZVBvc3QiLCJhZGRDb21tZW50QVBJIiwid2F0Y2hBZGRDb21tZW50IiwibG9nSW5BUEkiLCJsb2dJbiIsImxvZ091dEFQSSIsImxvZ091dCIsInNpbmdVcEFQSSIsImdldCIsInNpZ25VcCIsIndhdGNoTG9nSW4iLCJ3YXRjaExvZ091dCIsIndhdGNoU2lnblVwIiwibG9nZ2VyTWlkZGxld2FyZSIsImRpc3BhdGNoIiwiZ2V0U3RhdGUiLCJuZXh0IiwiY29uZmlndXJlU3RvcmUiLCJzYWdhTWlkZGxld2FyZSIsImNyZWF0ZVNhZ2FNaWRkbGV3YXJlIiwibWlkZGxld2FyZXMiLCJlbmhhbmNlciIsImNvbXBvc2UiLCJjb21wb3NlV2l0aERldlRvb2xzIiwiYXBwbHlNaWRkbGV3YXJlIiwic3RvcmUiLCJjcmVhdGVTdG9yZSIsInNhZ2FUYXNrIiwicnVuIiwiY3JlYXRlV3JhcHBlciIsImRlYnVnIl0sIm1hcHBpbmdzIjoiOztRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EsSUFBSTtRQUNKO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0Esd0RBQXdELGtCQUFrQjtRQUMxRTtRQUNBLGlEQUFpRCxjQUFjO1FBQy9EOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSx5Q0FBeUMsaUNBQWlDO1FBQzFFLGdIQUFnSCxtQkFBbUIsRUFBRTtRQUNySTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDJCQUEyQiwwQkFBMEIsRUFBRTtRQUN2RCxpQ0FBaUMsZUFBZTtRQUNoRDtRQUNBO1FBQ0E7O1FBRUE7UUFDQSxzREFBc0QsK0RBQStEOztRQUVySDtRQUNBOzs7UUFHQTtRQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN4RkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBOzs7O0FBRUEsTUFBTUEsUUFBUSxHQUFHLENBQUM7QUFBRUM7QUFBRixDQUFELEtBQW1CO0FBQ2xDLHNCQUNFO0FBQUEsNEJBQ0UscUVBQUMsZ0RBQUQ7QUFBQSw4QkFDRTtBQUFNLGVBQU8sRUFBQztBQUFkO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBREYs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Ozs7Ozs7QUNBQSx1Qzs7Ozs7Ozs7Ozs7QUNBQSxrQzs7Ozs7Ozs7Ozs7QUNBQSxrRDs7Ozs7Ozs7Ozs7QUNBQSxrQzs7Ozs7Ozs7Ozs7QUNBQSxxRDs7Ozs7Ozs7Ozs7QUNBQSx1Qzs7Ozs7Ozs7Ozs7QUNBQSwrQzs7Ozs7Ozs7Ozs7QUNBQSxvQyIsImZpbGUiOiJwYWdlcy9fYXBwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSByZXF1aXJlKCcuLi9zc3ItbW9kdWxlLWNhY2hlLmpzJyk7XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdHZhciB0aHJldyA9IHRydWU7XG4gXHRcdHRyeSB7XG4gXHRcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG4gXHRcdFx0dGhyZXcgPSBmYWxzZTtcbiBcdFx0fSBmaW5hbGx5IHtcbiBcdFx0XHRpZih0aHJldykgZGVsZXRlIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdO1xuIFx0XHR9XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IDApO1xuIiwiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gXCJwcm9wLXR5cGVzXCI7XHJcbmltcG9ydCBcImFudGQvZGlzdC9hbnRkLmNzc1wiO1xyXG5pbXBvcnQgSGVhZCBmcm9tIFwibmV4dC9oZWFkXCI7XHJcbmltcG9ydCB3aXRoUmVkdXhTYWdhIGZyb20gXCJuZXh0LXJlZHV4LXNhZ2FcIjtcclxuXHJcbmltcG9ydCB3cmFwcGVyIGZyb20gXCIuLi9zdG9yZS9jb25maWd1cmVTdG9yZVwiO1xyXG5cclxuY29uc3QgTm9kZUJpcmQgPSAoeyBDb21wb25lbnQgfSkgPT4ge1xyXG4gIHJldHVybiAoXHJcbiAgICA8PlxyXG4gICAgICA8SGVhZD5cclxuICAgICAgICA8bWV0YSBjaGFyU2V0PSd1dGYtOCcgLz5cclxuICAgICAgICA8dGl0bGU+Tm9kZSBCaXJkPC90aXRsZT5cclxuICAgICAgPC9IZWFkPlxyXG4gICAgICA8Q29tcG9uZW50IC8+XHJcbiAgICA8Lz5cclxuICApO1xyXG59O1xyXG5cclxuTm9kZUJpcmQucHJvcFR5cGVzID0ge1xyXG4gIENvbXBvbmVudDogUHJvcFR5cGVzLmVsZW1lbnRUeXBlLmlzUmVxdWlyZWQsXHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCB3cmFwcGVyLndpdGhSZWR1eCh3aXRoUmVkdXhTYWdhKE5vZGVCaXJkKSk7XHJcbiIsImltcG9ydCB7IEhZRFJBVEUgfSBmcm9tIFwibmV4dC1yZWR1eC13cmFwcGVyXCI7XHJcbmltcG9ydCB7IGNvbWJpbmVSZWR1Y2VycyB9IGZyb20gXCJyZWR1eFwiO1xyXG5pbXBvcnQgdXNlciBmcm9tIFwiLi91c2VyXCI7XHJcbmltcG9ydCBwb3N0IGZyb20gXCIuL3Bvc3RcIjtcclxuXHJcbi8qXHJcbmNvbnN0IGluaXRpYWxTdGF0ZSA9IHtcclxuICB1c2VyOiB7XHJcbiAgICAvL+yVhOuemCDshLjrtoAg64K07Jqp65Ok7J2AIHJlZHV47Kq86rCc6riwIO2VoOuVjCDqsIHqsIHsnZgg7YyM7J2866GcIOuTpOyWtOqwlOydjC5cclxuICAgIC8vIGlzTG9nZ2VkSW46IGZhbHNlLFxyXG4gICAgLy8gdXNlcjogbnVsbCxcclxuICAgIC8vIHNpZ25VcERhdGE6IHt9LFxyXG4gICAgLy8gbG9naW5EYXRhOiB7fSxcclxuICB9LFxyXG4gIHBvc3Q6IHtcclxuICAgIC8vIG1haW5Qb3N0czogW10sXHJcbiAgfSxcclxufTtcclxuKi9cclxuXHJcbi8v7Jet7Iuc64KYIOyVhOuemCDrgrTsmqnrk6TsnYAg67aE66as65CcIHJlZHV4IOykkSDrp57ripQg6rCS7JeQIOuEo+ydjFxyXG4vLyBleHBvcnQgY29uc3QgbG9naW5BY3Rpb24gPSAoZGF0YSkgPT4ge1xyXG4vLyAgIHJldHVybiB7XHJcbi8vICAgICB0eXBlOiBcIkxPR19JTlwiLFxyXG4vLyAgICAgZGF0YSxcclxuLy8gICB9O1xyXG4vLyB9O1xyXG4vLyBleHBvcnQgY29uc3QgbG9nb3V0QWN0aW9uID0gKCkgPT4ge1xyXG4vLyAgIHJldHVybiB7XHJcbi8vICAgICB0eXBlOiBcIkxPR19PVVRcIixcclxuLy8gICB9O1xyXG4vLyB9O1xyXG5cclxuLy8gcmVkdWNlciAo7J207KCE7IOB7YOcLCDslaHshZgpID0+IOuLpOydjOyDge2DnCAo7J207KCE7IOB7YOc7JmALCDslaHshZjsnYQg7Ya17ZW07IScIOuLpOydjCDsg4Htg5zrpbwg66eM65Ok7Ja0IOuCtOuKlCDtlajsiJgpXHJcbmNvbnN0IHJvb3RSZWR1Y2VyID0gY29tYmluZVJlZHVjZXJzKHtcclxuICBpbmRleDogKHN0YXRlID0ge30sIGFjdGlvbikgPT4ge1xyXG4gICAgc3dpdGNoIChhY3Rpb24udHlwZSkge1xyXG4gICAgICBjYXNlIEhZRFJBVEU6XHJcbiAgICAgICAgY29uc29sZS5sb2coXCJIWURSQVRFXCIsIGFjdGlvbik7XHJcbiAgICAgICAgcmV0dXJuIHsgLi4uc3RhdGUsIC4uLmFjdGlvbi5wYXlsb2FkIH07XHJcblxyXG4gICAgICAvL+yXreyLnOuCmCDslYTrnpgg64K07Jqp65Ok7J2AIOu2hOumrOuQnCByZWR1eCDspJEg66ee64qUIOqwkuyXkCDrhKPsnYxcclxuICAgICAgLy8gY2FzZSBcIkxPR19JTlwiOlxyXG4gICAgICAvLyAgIHJldHVybiB7IC4uLnN0YXRlLCB1c2VyOiB7IC4uLnN0YXRlLnVzZXIsIGlzTG9nZ2VkSW46IHRydWUsIHVzZXI6IGFjdGlvbi5kYXRhIH0gfTtcclxuICAgICAgLy8gY2FzZSBcIkxPR19PVVRcIjpcclxuICAgICAgLy8gICByZXR1cm4geyAuLi5zdGF0ZSwgdXNlcjogeyAuLi5zdGF0ZS51c2VyLCBpc0xvZ2dlZEluOiBmYWxzZSwgdXNlcjogbnVsbCB9IH07XHJcbiAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgcmV0dXJuIHN0YXRlO1xyXG4gICAgfVxyXG4gIH0sXHJcbiAgdXNlcixcclxuICBwb3N0LFxyXG59KTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IHJvb3RSZWR1Y2VyO1xyXG5cclxuLypcclxuY29uc3QgaW5pdGlhbFN0YXRlID0ge1xyXG4gIG5hbWU6IFwia2V2aW5cIixcclxuICBhZ2U6IDM0LFxyXG4gIHBhc3N3b3JkOiBcInBhc3N3b3JkXCIsXHJcbn07XHJcblxyXG4vLyBhY3Rpb24gY3JlYXRvclxyXG5jb25zdCBjaGFuZ2VOaWNrbmFtZSA9IHtcclxuICB0eXBlOiBcIkNIQU5HRV9OSUNLTkFNRVwiLFxyXG4gIGRhdGE6IFwiamFlaGFuXCIsXHJcbn07XHJcblxyXG5jb25zdCBjaGFuZ2VOaWNrbmFtZSA9IChkYXRhKSA9PiB7XHJcbiAgcmV0dXJuIHtcclxuICAgIHR5cGU6IFwiQ0hBTkdFX05JQ0tOQU1FXCIsXHJcbiAgICBkYXRhOiBkYXRhLFxyXG4gIH07XHJcbn07XHJcblxyXG5jaGFuZ2VOaWNrbmFtZShcImJvb2dpY2hvXCIpOyAvL+yVhOuemOyZgCDqsJnsnYxcclxuLy8ge1xyXG4vLyAgICB0eXBlOiAnQ0hBTkdFX05JQ0tOQU1FJyxcclxuLy8gICAgZGF0YTogJ25ldWUgemVhbCcsXHJcbi8vIH1cclxuLy9cclxuXHJcbi8v7LWc7KKF7KCB7Jy866GcIOyVhOuemOyZgCDqsJnsnbQg7IKs7Jqp6rCA64qlXHJcbi8vIDEuIOychCDsspjrn7wgY2hhbmdlTmlja25hbWXsnYQg7ISg7Ja47ZWY6rOgXHJcbi8vIDIuIOyVhOuemOyZgCDqsJnsnbQgZGlzcGF0Y2jrpbwg7Iuc7LycIOykjC5cclxuc3RvcmUuZGlzcGF0Y2goY2hhbmdlTmlja25hbWUoXCJob2xseVwiKSk7XHJcblxyXG5cclxuLy8gcmVkdWNlciAo7J207KCE7IOB7YOcLCDslaHshZgpID0+IOuLpOydjOyDge2DnCAo7J207KCE7IOB7YOc7JmALCDslaHshZjsnYQg7Ya17ZW07IScIOuLpOydjCDsg4Htg5zrpbwg66eM65Ok7Ja0IOuCtOuKlCDtlajsiJgpXHJcbmNvbnN0IHJvb3RSZWR1Y2VyID0gKHN0YXRlID0gaW5pdGlhbFN0YXRlLCBhY3Rpb24pID0+IHtcclxuICBzd2l0Y2ggKGFjdGlvbi50eXBlKSB7XHJcbiAgICBjYXNlIFwiQ0hBTkdFX05JQ0tOQU1FXCI6XHJcbiAgICAgIHJldHVybiB7IC4uLnN0YXRlLCBuYW1lOiBhY3Rpb24uZGF0YSB9O1xyXG4gIH1cclxufTtcclxuXHJcbiovXHJcbiIsImltcG9ydCBzaG9ydElkIGZyb20gXCJzaG9ydGlkXCI7XHJcblxyXG5leHBvcnQgY29uc3QgaW5pdGlhbFN0YXRlID0ge1xyXG4gIG1haW5Qb3N0czogW1xyXG4gICAge1xyXG4gICAgICBpZDogMSxcclxuICAgICAgVXNlcjoge1xyXG4gICAgICAgIGlkOiAxLFxyXG4gICAgICAgIG5pY2tuYW1lOiBcIktldmluXCIsXHJcbiAgICAgIH0sXHJcbiAgICAgIGNvbnRlbnQ6IFwiRmlyc3QgUG9zdCAjSGFzaFRhZywgI0V4cHJlc3NcIixcclxuICAgICAgLy8gSW1hZ2VzOiBbXHJcbiAgICAgIC8vICAge1xyXG4gICAgICAvLyAgICAgc3JjOiBcImh0dHBzOi8vcmVzLmNsb3VkaW5hcnkuY29tL2hpZ2hlcmVkdWNhdGlvbi9pbWFnZS91cGxvYWQvY19zY2FsZSx3Xzc1MC9mX2F1dG8sZmxfbG9zc3kscV9hdXRvOmVjby92MTUzMjk4ODg2NC9UaGVCZXN0Q29sbGVnZXMub3JnL2ltYWdlcy9zdHVkeS1ub3RlYm9va3MuanBnXCIsXHJcbiAgICAgIC8vICAgfSxcclxuICAgICAgLy8gICB7XHJcbiAgICAgIC8vICAgICBzcmM6IFwiaHR0cHM6Ly93d3cuZmFzdHdlYi5jb20vdXBsb2Fkcy9hcnRpY2xlX3Bob3RvL3Bob3RvLzIxNjEvY3JvcDM4MHdfaXN0b2NrXzAwMDAwMjE5Mzg0MnhzbWFsbC1ib29rcy5qcGdcIixcclxuICAgICAgLy8gICB9LFxyXG4gICAgICAvLyAgIHtcclxuICAgICAgLy8gICAgIHNyYzogXCJodHRwczovL3d3dy5pbnNpZGVoaWdoZXJlZC5jb20vc2l0ZXMvZGVmYXVsdC9zZXJ2ZXJfZmlsZXMvbWVkaWEvaVN0b2NrLTUyMDM3NDM3OC5qcGdcIixcclxuICAgICAgLy8gICB9LFxyXG4gICAgICAvLyBdLFxyXG4gICAgICBJbWFnZXM6IFtcclxuICAgICAgICB7XHJcbiAgICAgICAgICBpZDogc2hvcnRJZC5nZW5lcmF0ZSgpLFxyXG4gICAgICAgICAgc3JjOiBcImh0dHBzOi8vYm9va3RodW1iLXBoaW5mLnBzdGF0aWMubmV0L2NvdmVyLzEzNy85OTUvMTM3OTk1ODUuanBnP3VkYXRlPTIwMTgwNzI2XCIsXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICBpZDogc2hvcnRJZC5nZW5lcmF0ZSgpLFxyXG4gICAgICAgICAgc3JjOiBcImh0dHBzOi8vZ2ltZy5naWxidXQuY28ua3IvYm9vay9CTjAwMTk1OC9ybl92aWV3X0JOMDAxOTU4LmpwZ1wiLFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgaWQ6IHNob3J0SWQuZ2VuZXJhdGUoKSxcclxuICAgICAgICAgIHNyYzogXCJodHRwczovL2dpbWcuZ2lsYnV0LmNvLmtyL2Jvb2svQk4wMDE5OTgvcm5fdmlld19CTjAwMTk5OC5qcGdcIixcclxuICAgICAgICB9LFxyXG4gICAgICBdLFxyXG4gICAgICBDb21tZW50czogW1xyXG4gICAgICAgIHtcclxuICAgICAgICAgIGlkOiBzaG9ydElkLmdlbmVyYXRlKCksXHJcbiAgICAgICAgICBVc2VyOiB7XHJcbiAgICAgICAgICAgIGlkOiBzaG9ydElkLmdlbmVyYXRlKCksXHJcbiAgICAgICAgICAgIG5pY2tuYW1lOiBcIm5lcm9cIixcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgICBjb250ZW50OiBcIkdyZWF0IHBvc3QhXCIsXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICBpZDogc2hvcnRJZC5nZW5lcmF0ZSgpLFxyXG4gICAgICAgICAgVXNlcjoge1xyXG4gICAgICAgICAgICBpZDogc2hvcnRJZC5nZW5lcmF0ZSgpLFxyXG4gICAgICAgICAgICBuaWNrbmFtZTogXCJqYWVoYW5cIixcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgICBjb250ZW50OiBgaXQncyByZWFsbHkgZWR1Y2F0aW9uYWxgLFxyXG4gICAgICAgIH0sXHJcbiAgICAgIF0sXHJcbiAgICB9LFxyXG4gIF0sXHJcbiAgaW1hZ2VQYXRoczogW10sXHJcbiAgYWRkUG9zdExvYWRpbmc6IGZhbHNlLFxyXG4gIGFkZFBvc3REb25lOiBmYWxzZSxcclxuICBhZGRQb3N0RXJyb3I6IG51bGwsXHJcbiAgcmVtb3ZlUG9zdExvYWRpbmc6IGZhbHNlLFxyXG4gIHJlbW92ZVBvc3REb25lOiBmYWxzZSxcclxuICByZW1vdmVQb3N0RXJyb3I6IG51bGwsXHJcbiAgYWRkQ29tbWVudExvYWRpbmc6IGZhbHNlLFxyXG4gIGFkZENvbW1lbnREb25lOiBmYWxzZSxcclxuICBhZGRDb21tZW50RXJyb3I6IG51bGwsXHJcbn07XHJcblxyXG5leHBvcnQgY29uc3QgQUREX1BPU1RfUkVRVUVTVCA9IFwiQUREX1BPU1RfUkVRVUVTVFwiO1xyXG5leHBvcnQgY29uc3QgQUREX1BPU1RfU1VDQ0VTUyA9IFwiQUREX1BPU1RfU1VDQ0VTU1wiO1xyXG5leHBvcnQgY29uc3QgQUREX1BPU1RfRkFJTFVSRSA9IFwiQUREX1BPU1RfRkFJTFVSRVwiO1xyXG5leHBvcnQgY29uc3QgUkVNT1ZFX1BPU1RfUkVRVUVTVCA9IFwiUkVNT1ZFX1BPU1RfUkVRVUVTVFwiO1xyXG5leHBvcnQgY29uc3QgUkVNT1ZFX1BPU1RfU1VDQ0VTUyA9IFwiUkVNT1ZFX1BPU1RfU1VDQ0VTU1wiO1xyXG5leHBvcnQgY29uc3QgUkVNT1ZFX1BPU1RfRkFJTFVSRSA9IFwiUkVNT1ZFX1BPU1RfRkFJTFVSRVwiO1xyXG5cclxuZXhwb3J0IGNvbnN0IEFERF9DT01NRU5UX1JFUVVFU1QgPSBcIkFERF9DT01NRU5UX1JFUVVFU1RcIjtcclxuZXhwb3J0IGNvbnN0IEFERF9DT01NRU5UX1NVQ0NFU1MgPSBcIkFERF9DT01NRU5UX1NVQ0NFU1NcIjtcclxuZXhwb3J0IGNvbnN0IEFERF9DT01NRU5UX0ZBSUxVUkUgPSBcIkFERF9DT01NRU5UX0ZBSUxVUkVcIjtcclxuXHJcbmV4cG9ydCBjb25zdCBhZGRQb3N0ID0gKGRhdGEpID0+ICh7XHJcbiAgdHlwZTogQUREX1BPU1RfUkVRVUVTVCxcclxuICBkYXRhLFxyXG59KTtcclxuZXhwb3J0IGNvbnN0IGFkZENvbW1lbnQgPSAoZGF0YSkgPT4gKHtcclxuICB0eXBlOiBBRERfQ09NTUVOVF9SRVFVRVNULFxyXG4gIGRhdGEsXHJcbn0pO1xyXG5cclxuY29uc3QgZHVtbXlQb3N0ID0gKGRhdGEpID0+ICh7XHJcbiAgaWQ6IGRhdGEuaWQsXHJcbiAgY29udGVudDogZGF0YS5jb250ZW50LFxyXG4gIFVzZXI6IHtcclxuICAgIGlkOiAxLFxyXG4gICAgbmlja25hbWU6IFwiS2V2aW5cIixcclxuICB9LFxyXG4gIEltYWdlczogW10sXHJcbiAgQ29tbWVudHM6IFtdLFxyXG59KTtcclxuXHJcbmNvbnN0IGR1bW15Q29tbWVudCA9IChkYXRhKSA9PiAoe1xyXG4gIGlkOiBzaG9ydElkLmdlbmVyYXRlKCksXHJcbiAgY29udGVudDogZGF0YSxcclxuICBVc2VyOiB7XHJcbiAgICBpZDogMSxcclxuICAgIG5pY2tuYW1lOiBcIktldmluXCIsXHJcbiAgfSxcclxufSk7XHJcblxyXG5jb25zdCByZWR1Y2VyID0gKHN0YXRlID0gaW5pdGlhbFN0YXRlLCBhY3Rpb24pID0+IHtcclxuICBzd2l0Y2ggKGFjdGlvbi50eXBlKSB7XHJcbiAgICBjYXNlIEFERF9QT1NUX1JFUVVFU1Q6IHtcclxuICAgICAgcmV0dXJuIHsgLi4uc3RhdGUsIGFkZFBvc3RMb2FkaW5nOiB0cnVlLCBhZGRQb3N0RG9uZTogZmFsc2UsIGFkZFBvc3RFcnJvcjogbnVsbCB9O1xyXG4gICAgfVxyXG4gICAgY2FzZSBBRERfUE9TVF9TVUNDRVNTOiB7XHJcbiAgICAgIC8vIGFjdGlvbi5kYXRhLmNvbnRlbnQsIHBvc3RJZCwgdXNlcklkO1xyXG4gICAgICByZXR1cm4ge1xyXG4gICAgICAgIC4uLnN0YXRlLFxyXG4gICAgICAgIG1haW5Qb3N0czogW2R1bW15UG9zdChhY3Rpb24uZGF0YSksIC4uLnN0YXRlLm1haW5Qb3N0c10sXHJcbiAgICAgICAgYWRkUG9zdExvYWRpbmc6IGZhbHNlLFxyXG4gICAgICAgIGFkZFBvc3REb25lOiB0cnVlLFxyXG4gICAgICB9O1xyXG4gICAgfVxyXG4gICAgY2FzZSBBRERfUE9TVF9GQUlMVVJFOlxyXG4gICAgICByZXR1cm4geyAuLi5zdGF0ZSwgYWRkUG9zdExvYWRpbmc6IGZhbHNlLCBhZGRQb3N0RXJyb3I6IGFjdGlvbi5lcnJvciB9O1xyXG4gICAgY2FzZSBSRU1PVkVfUE9TVF9SRVFVRVNUOiB7XHJcbiAgICAgIHJldHVybiB7IC4uLnN0YXRlLCByZW1vdmVQb3N0TG9hZGluZzogdHJ1ZSwgcmVtb3ZlUG9zdERvbmU6IGZhbHNlLCByZW1vdmVQb3N0RXJyb3I6IG51bGwgfTtcclxuICAgIH1cclxuICAgIGNhc2UgUkVNT1ZFX1BPU1RfU1VDQ0VTUzoge1xyXG4gICAgICAvLyBhY3Rpb24uZGF0YS5jb250ZW50LCBwb3N0SWQsIHVzZXJJZDtcclxuICAgICAgcmV0dXJuIHtcclxuICAgICAgICAuLi5zdGF0ZSxcclxuICAgICAgICBtYWluUG9zdHM6IHN0YXRlLm1haW5Qb3N0cy5maWx0ZXIoKHYpID0+IHYuaWQgIT09IGFjdGlvbi5kYXRhKSxcclxuICAgICAgICByZW1vdmVQb3N0TG9hZGluZzogZmFsc2UsXHJcbiAgICAgICAgcmVtb3ZlUG9zdERvbmU6IHRydWUsXHJcbiAgICAgIH07XHJcbiAgICB9XHJcbiAgICBjYXNlIFJFTU9WRV9QT1NUX0ZBSUxVUkU6XHJcbiAgICAgIHJldHVybiB7IC4uLnN0YXRlLCByZW1vdmVQb3N0TG9hZGluZzogZmFsc2UsIHJlbW92ZVBvc3RFcnJvcjogYWN0aW9uLmVycm9yIH07XHJcblxyXG4gICAgY2FzZSBBRERfQ09NTUVOVF9SRVFVRVNUOiB7XHJcbiAgICAgIHJldHVybiB7IC4uLnN0YXRlLCBhZGRDb21tZW50TG9hZGluZzogdHJ1ZSwgYWRkQ29tbWVudERvbmU6IGZhbHNlLCBhZGRDb21tZW50RXJyb3I6IG51bGwgfTtcclxuICAgIH1cclxuXHJcbiAgICAvL+yVhOuemCDrtoDrtoQg7J207ZW0IOyViOuQmOuptCDqsozsi5zquIAs64yT6riAIHNhZ2Eg7J6R7ISxIO2VmOq4sCDri6Tsi5wg7LK07YGsLiAxMTozMOu2hCDsoJXrj4RcclxuICAgIGNhc2UgQUREX0NPTU1FTlRfU1VDQ0VTUzoge1xyXG4gICAgICBjb25zdCBwb3N0SW5kZXggPSBzdGF0ZS5tYWluUG9zdHMuZmluZEluZGV4KCh2KSA9PiB2LmlkID09PSBhY3Rpb24uZGF0YS5wb3N0SWQpO1xyXG4gICAgICBjb25zdCBwb3N0ID0geyAuLi5zdGF0ZS5tYWluUG9zdHNbcG9zdEluZGV4XSB9O1xyXG4gICAgICBwb3N0LkNvbW1lbnRzID0gW2R1bW15Q29tbWVudChhY3Rpb24uZGF0YS5jb250ZW50KSwgLi4ucG9zdC5Db21tZW50c107XHJcbiAgICAgIGNvbnN0IG1haW5Qb3N0cyA9IFsuLi5zdGF0ZS5tYWluUG9zdHNdO1xyXG4gICAgICBtYWluUG9zdHNbcG9zdEluZGV4XSA9IHBvc3Q7XHJcblxyXG4gICAgICByZXR1cm4ge1xyXG4gICAgICAgIC4uLnN0YXRlLFxyXG4gICAgICAgIG1haW5Qb3N0cyxcclxuICAgICAgICBhZGRDb21tZW50TG9hZGluZzogZmFsc2UsXHJcbiAgICAgICAgYWRkQ29tbWVudERvbmU6IHRydWUsXHJcbiAgICAgIH07XHJcbiAgICB9XHJcbiAgICBjYXNlIEFERF9DT01NRU5UX0ZBSUxVUkU6XHJcbiAgICAgIHJldHVybiB7IC4uLnN0YXRlLCBhZGRDb21tZW50TG9hZGluZzogZmFsc2UsIGFkZENvbW1lbnRFcnJvcjogYWN0aW9uLmVycm9yIH07XHJcblxyXG4gICAgZGVmYXVsdDoge1xyXG4gICAgICByZXR1cm4geyAuLi5zdGF0ZSB9O1xyXG4gICAgfVxyXG4gIH1cclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IHJlZHVjZXI7XHJcbiIsImV4cG9ydCBjb25zdCBpbml0aWFsU3RhdGUgPSB7XHJcbiAgbG9nSW5Mb2FkaW5nOiBmYWxzZSwgLy8g66Gc6re47J24IOyLnOuPhOykkVxyXG4gIGxvZ0luRG9uZTogZmFsc2UsXHJcbiAgbG9nSW5FcnJvcjogbnVsbCxcclxuICBsb2dPdXRMb2FkaW5nOiBmYWxzZSwgLy8g66Gc6re47JWE7JuDIOyLnOuPhOykkVxyXG4gIGxvZ091dERvbmU6IGZhbHNlLFxyXG4gIGxvZ091dEVycm9yOiBudWxsLFxyXG4gIHNpZ25VcExvYWRpbmc6IGZhbHNlLCAvLyDtmozsm5DqsIDsnoUg7Iuc64+E7KSRXHJcbiAgc2lnblVwRG9uZTogZmFsc2UsXHJcbiAgc2lnblVwRXJyb3I6IG51bGwsXHJcbiAgY2hhbmdlTmlja25hbWVMb2FkaW5nOiBmYWxzZSwgLy8g64uJ64Sk7J6EIOuzgOqyvSDsi5zrj4TspJFcclxuICBjaGFuZ2VOaWNrbmFtZURvbmU6IGZhbHNlLFxyXG4gIGNoYW5nZU5pY2tuYW1lRXJyb3I6IG51bGwsXHJcbiAgbWU6IG51bGwsXHJcbiAgc2lnblVwRGF0YToge30sXHJcbiAgbG9naW5EYXRhOiB7fSxcclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCBMT0dfSU5fUkVRVUVTVCA9IFwiTE9HX0lOX1JFUVVFU1RcIjtcclxuZXhwb3J0IGNvbnN0IExPR19JTl9TVUNDRVNTID0gXCJMT0dfSU5fU1VDQ0VTU1wiO1xyXG5leHBvcnQgY29uc3QgTE9HX0lOX0ZBSUxVUkUgPSBcIkxPR19JTl9GQUlMVVJFXCI7XHJcbmV4cG9ydCBjb25zdCBMT0dfT1VUX1JFUVVFU1QgPSBcIkxPR19PVVRfUkVRVUVTVFwiO1xyXG5leHBvcnQgY29uc3QgTE9HX09VVF9TVUNDRVNTID0gXCJMT0dfT1VUX1NVQ0NFU1NcIjtcclxuZXhwb3J0IGNvbnN0IExPR19PVVRfRkFJTFVSRSA9IFwiTE9HX09VVF9GQUlMVVJFXCI7XHJcbmV4cG9ydCBjb25zdCBTSUdOX1VQX1JFUVVFU1QgPSBcIlNJR05fVVBfUkVRVUVTVFwiO1xyXG5leHBvcnQgY29uc3QgU0lHTl9VUF9TVUNDRVNTID0gXCJTSUdOX1VQX1NVQ0NFU1NcIjtcclxuZXhwb3J0IGNvbnN0IFNJR05fVVBfRkFJTFVSRSA9IFwiU0lHTl9VUF9GQUlMVVJFXCI7XHJcblxyXG5leHBvcnQgY29uc3QgQ0hBTkdFX05JQ0tOQU1FX1JFUVVFU1QgPSBcIlNJR05fVVBfUkVRVUVTVFwiO1xyXG5leHBvcnQgY29uc3QgQ0hBTkdFX05JQ0tOQU1FX1NVQ0NFU1MgPSBcIlNJR05fVVBfU1VDQ0VTU1wiO1xyXG5leHBvcnQgY29uc3QgQ0hBTkdFX05JQ0tOQU1FX0ZBSUxVUkUgPSBcIlNJR05fVVBfRkFJTFVSRVwiO1xyXG5cclxuZXhwb3J0IGNvbnN0IEZPTExPV19SRVFVRVNUID0gXCJGT0xMT1dfUkVRVUVTVFwiO1xyXG5leHBvcnQgY29uc3QgRk9MTE9XX1NVQ0NFU1MgPSBcIkZPTExPV19TVUNDRVNTXCI7XHJcbmV4cG9ydCBjb25zdCBGT0xMT1dfRkFJTFVSRSA9IFwiRk9MTE9XX0ZBSUxVUkVcIjtcclxuXHJcbmV4cG9ydCBjb25zdCBVTkZPTExPV19SRVFVRVNUID0gXCJVTkZPTExPV19SRVFVRVNUXCI7XHJcbmV4cG9ydCBjb25zdCBVTkZPTExPV19TVUNDRVNTID0gXCJVTkZPTExPV19TVUNDRVNTXCI7XHJcbmV4cG9ydCBjb25zdCBVTkZPTExPV19GQUlMVVJFID0gXCJVTkZPTExPV19GQUlMVVJFXCI7XHJcblxyXG5leHBvcnQgY29uc3QgQUREX1BPU1RfVE9fTUUgPSBcIkFERF9QT1NUX1RPX01FXCI7XHJcbmV4cG9ydCBjb25zdCBSRU1PVkVfUE9TVF9PRl9NRSA9IFwiUkVNT1ZFX1BPU1RfT0ZfTUVcIjtcclxuXHJcbmNvbnN0IGR1bW15VXNlciA9IChkYXRhKSA9PiAoe1xyXG4gIC4uLmRhdGEsXHJcbiAgbmlja25hbWU6IFwiS2V2aW4gS2ltXCIsXHJcbiAgaWQ6IDEsXHJcbiAgUG9zdHM6IFt7IGlkOiAxIH1dLFxyXG4gIEZvbGxvd2luZ3M6IFt7IG5pY2tuYW1lOiBcImNob1wiIH0sIHsgbmlja25hbWU6IFwia2ltXCIgfSwgeyBuaWNrbmFtZTogXCJsZWVcIiB9XSxcclxuICBGb2xsb3dlcnM6IFt7IG5pY2tuYW1lOiBcImNob1wiIH0sIHsgbmlja25hbWU6IFwia2ltXCIgfSwgeyBuaWNrbmFtZTogXCJsZWVcIiB9XSxcclxufSk7XHJcblxyXG5leHBvcnQgY29uc3QgbG9naW5SZXF1ZXN0QWN0aW9uID0gKGRhdGEpID0+IHtcclxuICByZXR1cm4ge1xyXG4gICAgdHlwZTogTE9HX0lOX1JFUVVFU1QsXHJcbiAgICBkYXRhLFxyXG4gIH07XHJcbn07XHJcblxyXG5leHBvcnQgY29uc3QgbG9nb3V0UmVxdWVzdEFjdGlvbiA9ICgpID0+IHtcclxuICByZXR1cm4ge1xyXG4gICAgdHlwZTogTE9HX09VVF9SRVFVRVNULFxyXG4gIH07XHJcbn07XHJcblxyXG5jb25zdCByZWR1Y2VyID0gKHN0YXRlID0gaW5pdGlhbFN0YXRlLCBhY3Rpb24pID0+IHtcclxuICBzd2l0Y2ggKGFjdGlvbi50eXBlKSB7XHJcbiAgICBjYXNlIExPR19JTl9SRVFVRVNUOlxyXG4gICAgICBjb25zb2xlLmxvZyhcInJlZHVjZXIgbG9naW5cIik7XHJcbiAgICAgIHJldHVybiB7IC4uLnN0YXRlLCBsb2dJbkxvYWRpbmc6IHRydWUsIGxvZ0luRXJyb3I6IG51bGwsIGxvZ0luRG9uZTogZmFsc2UgfTtcclxuICAgIGNhc2UgTE9HX0lOX1NVQ0NFU1M6XHJcbiAgICAgIHJldHVybiB7XHJcbiAgICAgICAgLi4uc3RhdGUsXHJcbiAgICAgICAgbG9nSW5Mb2FkaW5nOiBmYWxzZSxcclxuICAgICAgICBsb2dJbkRvbmU6IHRydWUsXHJcbiAgICAgICAgbWU6IGR1bW15VXNlcihhY3Rpb24uZGF0YSksXHJcbiAgICAgIH07XHJcbiAgICBjYXNlIExPR19JTl9GQUlMVVJFOlxyXG4gICAgICByZXR1cm4geyAuLi5zdGF0ZSwgbG9nSW5Mb2FkaW5nOiBmYWxzZSwgbG9nSW5FcnJvcjogZmFsc2UsIG1lOiBhY3Rpb24uZGF0YSB9O1xyXG4gICAgY2FzZSBMT0dfT1VUX1JFUVVFU1Q6XHJcbiAgICAgIGNvbnNvbGUubG9nKFwicmVkdWNlciBsb2dvdXRcIik7XHJcbiAgICAgIHJldHVybiB7IC4uLnN0YXRlLCBsb2dPdXRMb2FkaW5nOiB0cnVlLCBsb2dPdXREb25lOiBmYWxzZSwgbG9nT3V0RXJyb3I6IG51bGwgfTtcclxuICAgIGNhc2UgTE9HX09VVF9TVUNDRVNTOlxyXG4gICAgICByZXR1cm4geyAuLi5zdGF0ZSwgbG9nT3V0TG9hZGluZzogZmFsc2UsIGxvZ091dERvbmU6IHRydWUsIG1lOiBudWxsIH07XHJcbiAgICBjYXNlIExPR19PVVRfRkFJTFVSRTpcclxuICAgICAgcmV0dXJuIHsgLi4uc3RhdGUsIGxvZ091dExvYWRpbmc6IGZhbHNlLCBsb2dPdXRFcnJvcjogYWN0aW9uLmVycm9yIH07XHJcblxyXG4gICAgY2FzZSBTSUdOX1VQX1JFUVVFU1Q6XHJcbiAgICAgIGNvbnNvbGUubG9nKFwicmVkdWNlciBzaWduVXBcIik7XHJcbiAgICAgIHJldHVybiB7IC4uLnN0YXRlLCBzaWduVXBMb2FkaW5nOiB0cnVlLCBzaWduVXBEb25lOiBmYWxzZSwgc2lnblVwRXJyb3I6IG51bGwgfTtcclxuICAgIGNhc2UgU0lHTl9VUF9TVUNDRVNTOlxyXG4gICAgICByZXR1cm4geyAuLi5zdGF0ZSwgc2lnblVwTG9hZGluZzogZmFsc2UsIHNpZ25VcERvbmU6IHRydWUsIG1lOiBudWxsIH07XHJcbiAgICBjYXNlIFNJR05fVVBfRkFJTFVSRTpcclxuICAgICAgcmV0dXJuIHsgLi4uc3RhdGUsIHNpZ25VcExvYWRpbmc6IGZhbHNlLCBzaWduVXBFcnJvcjogYWN0aW9uLmVycm9yIH07XHJcblxyXG4gICAgY2FzZSBDSEFOR0VfTklDS05BTUVfUkVRVUVTVDpcclxuICAgICAgY29uc29sZS5sb2coXCJyZWR1Y2VyIHNpZ25VcFwiKTtcclxuICAgICAgcmV0dXJuIHtcclxuICAgICAgICAuLi5zdGF0ZSxcclxuICAgICAgICBjaGFuZ2VOaWNrbmFtZUxvYWRpbmc6IHRydWUsXHJcbiAgICAgICAgY2hhbmdlTmlja25hbWVEb25lOiBmYWxzZSxcclxuICAgICAgICBjaGFuZ2VOaWNrbmFtZUVycm9yOiBudWxsLFxyXG4gICAgICB9O1xyXG4gICAgY2FzZSBDSEFOR0VfTklDS05BTUVfU1VDQ0VTUzpcclxuICAgICAgcmV0dXJuIHsgLi4uc3RhdGUsIGNoYW5nZU5pY2tuYW1lTG9hZGluZzogZmFsc2UsIGNoYW5nZU5pY2tuYW1lRG9uZTogdHJ1ZSB9O1xyXG4gICAgY2FzZSBDSEFOR0VfTklDS05BTUVfRkFJTFVSRTpcclxuICAgICAgcmV0dXJuIHsgLi4uc3RhdGUsIGNoYW5nZU5pY2tuYW1lTG9hZGluZzogZmFsc2UsIGNoYW5nZU5pY2tuYW1lRXJyb3I6IGFjdGlvbi5lcnJvciB9O1xyXG4gICAgY2FzZSBBRERfUE9TVF9UT19NRTpcclxuICAgICAgcmV0dXJuIHtcclxuICAgICAgICAuLi5zdGF0ZSxcclxuXHJcbiAgICAgICAgbWU6IHtcclxuICAgICAgICAgIC4uLnN0YXRlLm1lLFxyXG4gICAgICAgICAgUG9zdHM6IFt7IGlkOiBhY3Rpb24uZGF0YSB9LCAuLi5zdGF0ZS5tZS5Qb3N0c10sXHJcbiAgICAgICAgfSxcclxuICAgICAgfTtcclxuICAgIGNhc2UgUkVNT1ZFX1BPU1RfT0ZfTUU6XHJcbiAgICAgIHJldHVybiB7XHJcbiAgICAgICAgLi4uc3RhdGUsXHJcbiAgICAgICAgbWU6IHtcclxuICAgICAgICAgIC4uLnN0YXRlLm1lLFxyXG4gICAgICAgICAgUG9zdHM6IHN0YXRlLm1lLlBvc3RzLmZpbHRlcigodikgPT4gdi5pZCA9PT0gYWN0aW9uLmRhdGEpLFxyXG4gICAgICAgIH0sXHJcbiAgICAgIH07XHJcbiAgICBkZWZhdWx0OlxyXG4gICAgICByZXR1cm4gc3RhdGU7XHJcbiAgfVxyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgcmVkdWNlcjtcclxuIiwiaW1wb3J0IHsgYWxsLCBmb3JrIH0gZnJvbSBcInJlZHV4LXNhZ2EvZWZmZWN0c1wiO1xyXG5pbXBvcnQgcG9zdFNhZ2EgZnJvbSBcIi4vcG9zdFwiO1xyXG5pbXBvcnQgdXNlclNhZ2EgZnJvbSBcIi4vdXNlclwiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24qIHJvb3RTYWdhKCkge1xyXG4gIC8vQUxM7J2EIO2VmOuptCDrsLDsl7TslYjsnZgg66qo65OgIOqyg+uTpOydhCDtlZzrsojsl5Ag64ukIOyLpO2WiSDtlaguXHJcbiAgLy9mb3Jr64qUIO2VqOyImOulvCDsi6TtlontlZzri6TripQg65y7IC5cclxuICAvL2ZvcmvrjIDsi6AgY2FsbOydhCDsk7DripQg6rK97Jqw64+EIOyeiOydjC4g7ZWY7KeA66eMIOuRkOqwnOydmCDssKjsnbTsoJAg7KCV7ZmV7Z6IIOyVjOq4sC5cclxuICAvL+OEtCBGT1JL64qUIOu5hOuPmeq4sCDtlajsiJgg7Zi47LacIC8gY2FsbOydgCDrj5nquLAg7ZWo7IiYIO2YuOy2nFxyXG4gIC8vIHlpZWxk64qUIGF3YWl06rO8IOu5hOyKt+2VqC5cclxuICB5aWVsZCBhbGwoW2ZvcmsocG9zdFNhZ2EpLCBmb3JrKHVzZXJTYWdhKV0pO1xyXG59XHJcblxyXG4vLyBmdW5jdGlvbiBsb2dJbkFQSShkYXRhKSB7XHJcbi8vICAgcmV0dXJuIGF4aW9zLnBvc3QoXCIvYXBpL2xvZ2luXCIsIGRhdGEpO1xyXG4vLyB9XHJcblxyXG4vLyAvLyBjb25zdCBsID0gbG9nSW4oe3R5cGU6ICdMT0dfSU5fUkVRVUVTVCcsIGRhdGE6IHtpZDogJ2poa2V2aW4yMUBnbWFpbC5jb20nfX0pXHJcbi8vIC8vIGwubmV4dCgpO1xyXG4vLyAvLyBsLm5leHQoKTtcclxuXHJcbi8vIGZ1bmN0aW9uKiBsb2dJbihhY3Rpb24pIHtcclxuLy8gICAvL+yEseqztSDqsrDqs7zripQgcmVzdWx0LmRhdGHsl5AsIOyLpO2MqOqyveqzvOuKlCBlcnIucmVzcG9uc2UuZGF0YeyXkCDri7TqsqjsnojsnYxcclxuLy8gICAvL3B1dOydgCBkaXNwYXRjaOudvOqzoCDsg53qsIHtlZjquLBcclxuLy8gICB0cnkge1xyXG4vLyAgICAgLy8gY29uc3QgcmVzdWx0ID0geWllbGQgY2FsbChsb2dJbkFQSSwgYWN0aW9uLmRhdGEpO1xyXG4vLyAgICAgeWllbGQgZGVsYXkoMTAwMCk7XHJcbi8vICAgICB5aWVsZCBwdXQoe1xyXG4vLyAgICAgICB0eXBlOiBcIkxPR19JTl9TVUNDRVNTXCIsXHJcbi8vICAgICAgIGRhdGE6IHJlc3VsdC5kYXRhLFxyXG4vLyAgICAgfSk7XHJcbi8vICAgfSBjYXRjaCAoZXJyKSB7XHJcbi8vICAgICB5aWVsZCBwdXQoe1xyXG4vLyAgICAgICB0eXBlOiBcIkxPR19JTl9GQUlMVVJFXCIsXHJcbi8vICAgICAgIGRhdGE6IGVyci5yZXNwb25zZS5kYXRhLFxyXG4vLyAgICAgfSk7XHJcbi8vICAgfVxyXG4vLyB9XHJcblxyXG4vLyBmdW5jdGlvbiBsb2dPdXRBUEkoKSB7XHJcbi8vICAgcmV0dXJuIGF4aW9zLnBvc3QoXCIvYXBpL2xvZ291dFwiKTtcclxuLy8gfVxyXG5cclxuLy8gZnVuY3Rpb24qIGxvZ091dCgpIHtcclxuLy8gICB0cnkge1xyXG4vLyAgICAgLy8gY29uc3QgcmVzdWx0ID0geWllbGQgY2FsbChsb2dPdXRBUEkpO1xyXG4vLyAgICAgeWllbGQgZGVsYXkoMTAwMCk7XHJcbi8vICAgICB5aWVsZCBwdXQoe1xyXG4vLyAgICAgICB0eXBlOiBcIkxPR19PVVRfU1VDQ0VTU1wiLFxyXG4vLyAgICAgICBkYXRhOiByZXN1bHQuZGF0YSxcclxuLy8gICAgIH0pO1xyXG4vLyAgIH0gY2F0Y2ggKGVycikge1xyXG4vLyAgICAgeWllbGQgcHV0KHtcclxuLy8gICAgICAgdHlwZTogXCJMT0dfT1VUX0ZBSUxVUkVcIixcclxuLy8gICAgICAgZGF0YTogZXJyLnJlc3BvbnNlLmRhdGEsXHJcbi8vICAgICB9KTtcclxuLy8gICB9XHJcbi8vIH1cclxuXHJcbi8vIGZ1bmN0aW9uIGFkZFBvc3RBUEkoZGF0YSkge1xyXG4vLyAgIHJldHVybiBheGlvcy5wb3N0KFwiL2FwaS9wb3N0XCIsIGRhdGEpO1xyXG4vLyB9XHJcblxyXG4vLyBmdW5jdGlvbiogYWRkUG9zdChhY3Rpb24pIHtcclxuLy8gICB0cnkge1xyXG4vLyAgICAgLy8gY29uc3QgcmVzdWx0ID0geWllbGQgY2FsbChhZGRQb3N0QVBJLCBhY3Rpb24uZGF0YSk7XHJcbi8vICAgICB5aWVsZCBkZWxheSgxMDAwKTtcclxuLy8gICAgIHlpZWxkIHB1dCh7XHJcbi8vICAgICAgIHR5cGU6IFwiQUREX1BPU1RfU1VDQ0VTU1wiLFxyXG4vLyAgICAgfSk7XHJcbi8vICAgfSBjYXRjaCAoZXJyKSB7XHJcbi8vICAgICB5aWVsZCBwdXQoe1xyXG4vLyAgICAgICB0eXBlOiBcIkxPR19PVVRfRkFJTFVSRVwiLFxyXG4vLyAgICAgICBkYXRhOiBlcnIucmVzcG9uc2UuZGF0YSxcclxuLy8gICAgIH0pO1xyXG4vLyAgIH1cclxuLy8gfVxyXG5cclxuLy90YWtl64qUIOuSpOyXkCBhY3Rpb27snbQg7Iuk7ZaJIOuQoOuVjOq5jOyngCDquLDri6TrpqzqsqDri6TripQg65y7ICh0YWtlKCdMT0dfSU4nLCBsb2dpbikpID0+ICdMT0dfSU4nKGFjdGlvbinsnbQg7Iuk7ZaJIOuQoOuVjCDquYzsp4Ag6riw64uk66as6rOgLCDsi6Ttlokg65CY66m0IOuSpOyXkCBsb2dJbiBmdW5jdGlvbuydhCDsi6Ttlokg7ZWoLlxyXG4vLyBldmVudCBsaXN0ZW5lciDqsJnsnYAg7Jet7ZWg7J2EIO2VmOyngOunjCDsuZjrqoXsoIHsnbgg64uo7KCQ7J2AIDHtmozsmqnsnoQuICjtlZzrsogg7Iuk7ZaJ65CY6rOgIOuCmOuptCDtlbTri7kgZXZlbnQgbGlzdG5lcuqwgCDsgqzrnbzsp5AuIOuUsOudvOyEnCB3aGlsZeuhnCDqsJDsi7jso7zqsbDrgpggdGFrZUV2ZXJ566GcIOuwm+yVhCDspJjslbwg7ZWoLikgPT4gdGFrZUxhdGVzdOuhnCDsk7gg7IiY64+EIOyeiOuKlOuNsCDsnbTqsbQsIOyLpOyImOuhnCDrkZDrsojriITrpbTqsbDrgpgg7ZaI7J2E65WMIOuniOyngOunieq6vOunjCDsnbjsi53tlbTshJwg7LKY66as7ZW0IOykjC5cclxuLy8gZnVuY3Rpb24qIHdhdGNoTG9naW4oKSB7XHJcbi8vICAgeWllbGQgdGFrZUxhdGVzdChcIkxPR19JTl9SRVFVRVNUXCIsIGxvZ0luKTtcclxuLy8gfVxyXG5cclxuLy8gZnVuY3Rpb24qIHdhdGNoTG9nT3V0KCkge1xyXG4vLyAgIHlpZWxkIHRha2VMYXRlc3QoXCJMT0dfT1VUX1JFUVVFU1RcIiwgbG9nT3V0KTtcclxuLy8gfVxyXG4vLyBmdW5jdGlvbiogd2F0Y2hBZGRQb3N0KCkge1xyXG4vLyAgIHlpZWxkIHRha2VMYXRlc3QoXCJBRERfUE9TVF9SRVFVRVNUXCIsIGFkZFBvc3QpO1xyXG4vLyB9XHJcblxyXG4vLyBleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiogcm9vdFNhZ2EoKSB7XHJcbi8vICAgLy9BTEzsnYQg7ZWY66m0IOuwsOyXtOyViOydmCDrqqjrk6Ag6rKD65Ok7J2EIO2VnOuyiOyXkCDri6Qg7Iuk7ZaJIO2VqC5cclxuLy8gICAvL2ZvcmvripQg7ZWo7IiY66W8IOyLpO2Wie2VnOuLpOuKlCDrnLsgLlxyXG4vLyAgIC8vZm9ya+uMgOyLoCBjYWxs7J2EIOyTsOuKlCDqsr3smrDrj4Qg7J6I7J2MLiDtlZjsp4Drp4wg65GQ6rCc7J2YIOywqOydtOygkCDsoJXtmZXtnogg7JWM6riwLlxyXG4vLyAgIC8v44S0IEZPUkvripQg67mE64+Z6riwIO2VqOyImCDtmLjstpwgLyBjYWxs7J2AIOuPmeq4sCDtlajsiJgg7Zi47LacXHJcbi8vICAgLy8geWllbGTripQgYXdhaXTqs7wg67mE7Iq37ZWoLlxyXG4vLyAgIHlpZWxkIGFsbChbZm9yayh3YXRjaExvZ2luKSwgZm9yayh3YXRjaExvZ091dCksIGZvcmsod2F0Y2hBZGRQb3N0KV0pO1xyXG4vLyB9XHJcbiIsImltcG9ydCBheGlvcyBmcm9tIFwiYXhpb3NcIjtcclxuaW1wb3J0IHsgYWxsLCBmb3JrLCBkZWxheSwgdGFrZUxhdGVzdCwgcHV0IH0gZnJvbSBcInJlZHV4LXNhZ2EvZWZmZWN0c1wiO1xyXG5pbXBvcnQgc2hvcnRJZCBmcm9tIFwic2hvcnRpZFwiO1xyXG5pbXBvcnQge1xyXG4gIEFERF9DT01NRU5UX0ZBSUxVUkUsXHJcbiAgQUREX0NPTU1FTlRfUkVRVUVTVCxcclxuICBBRERfQ09NTUVOVF9TVUNDRVNTLFxyXG4gIEFERF9QT1NUX0ZBSUxVUkUsXHJcbiAgQUREX1BPU1RfUkVRVUVTVCxcclxuICBBRERfUE9TVF9TVUNDRVNTLFxyXG4gIFJFTU9WRV9QT1NUX0ZBSUxVUkUsXHJcbiAgUkVNT1ZFX1BPU1RfUkVRVUVTVCxcclxuICBSRU1PVkVfUE9TVF9TVUNDRVNTLFxyXG59IGZyb20gXCIuLi9yZWR1Y2Vycy9wb3N0XCI7XHJcbmltcG9ydCB7IEFERF9QT1NUX1RPX01FLCBSRU1PVkVfUE9TVF9PRl9NRSB9IGZyb20gXCIuLi9yZWR1Y2Vycy91c2VyXCI7XHJcblxyXG5mdW5jdGlvbiBhZGRQb3N0QVBJKGRhdGEpIHtcclxuICByZXR1cm4gYXhpb3MucG9zdChcIi9hcGkvcG9zdFwiLCBkYXRhKTtcclxufVxyXG5cclxuZnVuY3Rpb24qIGFkZFBvc3QoYWN0aW9uKSB7XHJcbiAgdHJ5IHtcclxuICAgIC8vIGNvbnN0IHJlc3VsdCA9IHlpZWxkIGNhbGwoYWRkUG9zdEFQSSwgYWN0aW9uLmRhdGEpO1xyXG4gICAgeWllbGQgZGVsYXkoMTAwMCk7XHJcbiAgICBjb25zdCBpZCA9IHNob3J0SWQuZ2VuZXJhdGUoKTtcclxuICAgIC8vIOyVhOuemOuKlCBwb3N0IHJlZHVjZXIg7KGw7J6RIOu2gOu2hFxyXG4gICAgeWllbGQgcHV0KHtcclxuICAgICAgdHlwZTogQUREX1BPU1RfU1VDQ0VTUyxcclxuICAgICAgZGF0YToge1xyXG4gICAgICAgIGlkLFxyXG4gICAgICAgIGNvbnRlbnQ6IGFjdGlvbi5kYXRhLFxyXG4gICAgICB9LFxyXG4gICAgfSk7XHJcbiAgICAvLyDslYTrnpjripQgdXNlciByZWR1Y2VyIOyhsOyekSDrtoDrtoRcclxuICAgIHlpZWxkIHB1dCh7XHJcbiAgICAgIHR5cGU6IEFERF9QT1NUX1RPX01FLFxyXG4gICAgICBkYXRhOiBpZCxcclxuICAgIH0pO1xyXG4gIH0gY2F0Y2ggKGVycikge1xyXG4gICAgeWllbGQgcHV0KHtcclxuICAgICAgdHlwZTogQUREX1BPU1RfRkFJTFVSRSxcclxuICAgICAgZGF0YTogZXJyLnJlc3BvbnNlLmRhdGEsXHJcbiAgICB9KTtcclxuICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uKiB3YXRjaEFkZFBvc3QoKSB7XHJcbiAgeWllbGQgdGFrZUxhdGVzdChBRERfUE9TVF9SRVFVRVNULCBhZGRQb3N0KTtcclxufVxyXG5cclxuZnVuY3Rpb24gcmVtb3ZlUG9zdEFQSShkYXRhKSB7XHJcbiAgcmV0dXJuIGF4aW9zLmRlbGV0ZShcIi9hcGkvcG9zdFwiLCBkYXRhKTtcclxufVxyXG5cclxuZnVuY3Rpb24qIHJlbW92ZVBvc3QoYWN0aW9uKSB7XHJcbiAgdHJ5IHtcclxuICAgIC8vIGNvbnN0IHJlc3VsdCA9IHlpZWxkIGNhbGwocmVtb3ZlUG9zdEFQSSwgYWN0aW9uLmRhdGEpO1xyXG4gICAgeWllbGQgZGVsYXkoMTAwMCk7XHJcbiAgICAvLyDslYTrnpjripQgcG9zdCByZWR1Y2VyIOyhsOyekSDrtoDrtoRcclxuICAgIHlpZWxkIHB1dCh7XHJcbiAgICAgIHR5cGU6IFJFTU9WRV9QT1NUX1NVQ0NFU1MsXHJcbiAgICAgIGRhdGE6IGFjdGlvbi5kYXRhLFxyXG4gICAgfSk7XHJcbiAgICAvLyDslYTrnpjripQgdXNlciByZWR1Y2VyIOyhsOyekSDrtoDrtoRcclxuICAgIHlpZWxkIHB1dCh7XHJcbiAgICAgIHR5cGU6IFJFTU9WRV9QT1NUX09GX01FLFxyXG4gICAgICBkYXRhOiBhY3Rpb24uZGF0YSxcclxuICAgIH0pO1xyXG4gIH0gY2F0Y2ggKGVycikge1xyXG4gICAgY29uc29sZS5lcnJvcihlcnIpO1xyXG4gICAgeWllbGQgcHV0KHtcclxuICAgICAgdHlwZTogUkVNT1ZFX1BPU1RfRkFJTFVSRSxcclxuICAgICAgZGF0YTogZXJyLnJlc3BvbnNlLmRhdGEsXHJcbiAgICB9KTtcclxuICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uKiB3YXRjaFJlbW92ZVBvc3QoKSB7XHJcbiAgeWllbGQgdGFrZUxhdGVzdChSRU1PVkVfUE9TVF9SRVFVRVNULCByZW1vdmVQb3N0KTtcclxufVxyXG5cclxuZnVuY3Rpb24gYWRkQ29tbWVudEFQSShkYXRhKSB7XHJcbiAgcmV0dXJuIGF4aW9zLnBvc3QoXCIvYXBpL3Bvc3QvJHtpZH0vY29tbWVudDsnXCIsIGRhdGEpO1xyXG59XHJcblxyXG5mdW5jdGlvbiogYWRkQ29tbWVudChhY3Rpb24pIHtcclxuICB0cnkge1xyXG4gICAgLy8gY29uc3QgcmVzdWx0ID0geWllbGQgY2FsbChhZGRQb3N0QVBJLCBhY3Rpb24uZGF0YSk7XHJcbiAgICB5aWVsZCBkZWxheSgxMDAwKTtcclxuICAgIHlpZWxkIHB1dCh7XHJcbiAgICAgIHR5cGU6IEFERF9DT01NRU5UX1NVQ0NFU1MsXHJcbiAgICAgIGRhdGE6IGFjdGlvbi5kYXRhLFxyXG4gICAgfSk7XHJcbiAgfSBjYXRjaCAoZXJyKSB7XHJcbiAgICB5aWVsZCBwdXQoe1xyXG4gICAgICB0eXBlOiBBRERfQ09NTUVOVF9GQUlMVVJFLFxyXG4gICAgICBkYXRhOiBlcnIucmVzcG9uc2UuZGF0YSxcclxuICAgIH0pO1xyXG4gIH1cclxufVxyXG5cclxuZnVuY3Rpb24qIHdhdGNoQWRkQ29tbWVudCgpIHtcclxuICB5aWVsZCB0YWtlTGF0ZXN0KEFERF9DT01NRU5UX1JFUVVFU1QsIGFkZENvbW1lbnQpO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiogcG9zdFNhZ2EoKSB7XHJcbiAgeWllbGQgYWxsKFtmb3JrKHdhdGNoQWRkUG9zdCksIGZvcmsod2F0Y2hSZW1vdmVQb3N0KSwgZm9yayh3YXRjaEFkZENvbW1lbnQpXSk7XHJcbn1cclxuIiwiaW1wb3J0IGF4aW9zIGZyb20gXCJheGlvc1wiO1xyXG5pbXBvcnQgeyBhbGwsIGZvcmssIHB1dCwgdGFrZUxhdGVzdCwgZGVsYXkgfSBmcm9tIFwicmVkdXgtc2FnYS9lZmZlY3RzXCI7XHJcbmltcG9ydCB7XHJcbiAgTE9HX0lOX0ZBSUxVUkUsXHJcbiAgTE9HX0lOX1JFUVVFU1QsXHJcbiAgTE9HX0lOX1NVQ0NFU1MsXHJcbiAgTE9HX09VVF9GQUlMVVJFLFxyXG4gIExPR19PVVRfUkVRVUVTVCxcclxuICBMT0dfT1VUX1NVQ0NFU1MsXHJcbiAgU0lHTl9VUF9SRVFVRVNULFxyXG4gIFNJR05fVVBfU1VDQ0VTUyxcclxuICBTSUdOX1VQX0ZBSUxVUkUsXHJcbn0gZnJvbSBcIi4uL3JlZHVjZXJzL3VzZXJcIjtcclxuXHJcbmZ1bmN0aW9uIGxvZ0luQVBJKGRhdGEpIHtcclxuICByZXR1cm4gYXhpb3MucG9zdChcIi9hcGkvbG9naW5cIiwgZGF0YSk7XHJcbn1cclxuXHJcbi8vIGNvbnN0IGwgPSBsb2dJbih7dHlwZTogJ0xPR19JTl9SRVFVRVNUJywgZGF0YToge2lkOiAnamhrZXZpbjIxQGdtYWlsLmNvbSd9fSlcclxuLy8gbC5uZXh0KCk7XHJcbi8vIGwubmV4dCgpO1xyXG5cclxuZnVuY3Rpb24qIGxvZ0luKGFjdGlvbikge1xyXG4gIC8v7ISx6rO1IOqysOqzvOuKlCByZXN1bHQuZGF0YeyXkCwg7Iuk7Yyo6rK96rO864qUIGVyci5yZXNwb25zZS5kYXRh7JeQIOuLtOqyqOyeiOydjFxyXG4gIC8vcHV07J2AIGRpc3BhdGNo65286rOgIOyDneqwge2VmOq4sFxyXG4gIHRyeSB7XHJcbiAgICBjb25zb2xlLmxvZyhcInNhZ2EgbG9naW5cIik7XHJcbiAgICAvLyBjb25zdCByZXN1bHQgPSB5aWVsZCBjYWxsKGxvZ0luQVBJLCBhY3Rpb24uZGF0YSk7XHJcbiAgICB5aWVsZCBkZWxheSgxMDAwKTtcclxuICAgIHlpZWxkIHB1dCh7XHJcbiAgICAgIHR5cGU6IExPR19JTl9TVUNDRVNTLFxyXG4gICAgICBkYXRhOiBhY3Rpb24uZGF0YSxcclxuICAgIH0pO1xyXG4gIH0gY2F0Y2ggKGVycikge1xyXG4gICAgeWllbGQgcHV0KHtcclxuICAgICAgdHlwZTogTE9HX0lOX0ZBSUxVUkUsXHJcbiAgICAgIGVycm9yOiBlcnIucmVzcG9uc2UuZGF0YSxcclxuICAgIH0pO1xyXG4gIH1cclxufVxyXG5cclxuZnVuY3Rpb24gbG9nT3V0QVBJKCkge1xyXG4gIHJldHVybiBheGlvcy5wb3N0KFwiL2FwaS9sb2dvdXRcIik7XHJcbn1cclxuXHJcbmZ1bmN0aW9uKiBsb2dPdXQoKSB7XHJcbiAgdHJ5IHtcclxuICAgIGNvbnNvbGUubG9nKFwic2FnYSBsb2dvdXRcIik7XHJcbiAgICAvLyBjb25zdCByZXN1bHQgPSB5aWVsZCBjYWxsKGxvZ091dEFQSSk7XHJcbiAgICB5aWVsZCBkZWxheSgxMDAwKTtcclxuICAgIHlpZWxkIHB1dCh7XHJcbiAgICAgIHR5cGU6IExPR19PVVRfU1VDQ0VTUyxcclxuICAgICAgLy8gICBkYXRhOiByZXN1bHQuZGF0YSxcclxuICAgIH0pO1xyXG4gIH0gY2F0Y2ggKGVycikge1xyXG4gICAgeWllbGQgcHV0KHtcclxuICAgICAgdHlwZTogTE9HX09VVF9GQUlMVVJFLFxyXG4gICAgICBlcnJvcjogZXJyLnJlc3BvbnNlLmRhdGEsXHJcbiAgICB9KTtcclxuICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHNpbmdVcEFQSSgpIHtcclxuICByZXR1cm4gYXhpb3MuZ2V0KFwiL2FwaS9zaWduVXBcIik7XHJcbn1cclxuXHJcbmZ1bmN0aW9uKiBzaWduVXAoKSB7XHJcbiAgdHJ5IHtcclxuICAgIGNvbnNvbGUubG9nKFwic2FnYSBzaWduVXBcIik7XHJcbiAgICAvLyBjb25zdCByZXN1bHQgPSB5aWVsZCBjYWxsKHNpZ25VcCk7XHJcbiAgICB5aWVsZCBkZWxheSgxMDAwKTtcclxuICAgIHlpZWxkIHB1dCh7XHJcbiAgICAgIHR5cGU6IFNJR05fVVBfU1VDQ0VTUyxcclxuICAgIH0pO1xyXG4gIH0gY2F0Y2ggKGVycikge1xyXG4gICAgeWllbGQgcHV0KHtcclxuICAgICAgdHlwZTogU0lHTl9VUF9GQUlMVVJFLFxyXG4gICAgICBlcnJvcjogZXJyLnJlc3BvbnNlLmRhdGEsXHJcbiAgICB9KTtcclxuICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uKiB3YXRjaExvZ0luKCkge1xyXG4gIHlpZWxkIHRha2VMYXRlc3QoTE9HX0lOX1JFUVVFU1QsIGxvZ0luKTtcclxufVxyXG5cclxuZnVuY3Rpb24qIHdhdGNoTG9nT3V0KCkge1xyXG4gIHlpZWxkIHRha2VMYXRlc3QoTE9HX09VVF9SRVFVRVNULCBsb2dPdXQpO1xyXG59XHJcbmZ1bmN0aW9uKiB3YXRjaFNpZ25VcCgpIHtcclxuICB5aWVsZCB0YWtlTGF0ZXN0KFNJR05fVVBfUkVRVUVTVCwgc2lnblVwKTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24qIHVzZXJTYWdhKCkge1xyXG4gIHlpZWxkIGFsbChbZm9yayh3YXRjaExvZ0luKSwgZm9yayh3YXRjaExvZ091dCksIGZvcmsod2F0Y2hTaWduVXApXSk7XHJcbn1cclxuIiwiLy8gaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5cclxuaW1wb3J0IHsgY3JlYXRlV3JhcHBlciB9IGZyb20gXCJuZXh0LXJlZHV4LXdyYXBwZXJcIjtcclxuaW1wb3J0IHsgY3JlYXRlU3RvcmUsIGFwcGx5TWlkZGxld2FyZSwgY29tcG9zZSB9IGZyb20gXCJyZWR1eFwiO1xyXG5pbXBvcnQgeyBjb21wb3NlV2l0aERldlRvb2xzIH0gZnJvbSBcInJlZHV4LWRldnRvb2xzLWV4dGVuc2lvblwiO1xyXG5pbXBvcnQgY3JlYXRlU2FnYU1pZGRsZXdhcmUgZnJvbSBcInJlZHV4LXNhZ2FcIjtcclxuXHJcbmltcG9ydCByZWR1Y2VyIGZyb20gXCIuLi9yZWR1Y2Vycy9pbmRleFwiO1xyXG5pbXBvcnQgcm9vdFNhZ2EgZnJvbSBcIi4uL3NhZ2FzXCI7XHJcblxyXG5jb25zdCBsb2dnZXJNaWRkbGV3YXJlID1cclxuICAoeyBkaXNwYXRjaCwgZ2V0U3RhdGUgfSkgPT5cclxuICAobmV4dCkgPT5cclxuICAoYWN0aW9uKSA9PiB7XHJcbiAgICAvLyBpZiAodHlwZW9mIGFjdGlvbiA9PT0gXCJmdW5jdGlvblwiKSB7XHJcbiAgICAvLyAgIHJldHVybiBhY3Rpb24oZGlzcGF0Y2gsIGdldFN0YXRlKTtcclxuICAgIC8vIH1cclxuICAgIGNvbnNvbGUubG9nKGFjdGlvbik7XHJcbiAgICByZXR1cm4gbmV4dChhY3Rpb24pO1xyXG4gIH07XHJcblxyXG5jb25zdCBjb25maWd1cmVTdG9yZSA9ICgpID0+IHtcclxuICBjb25zdCBzYWdhTWlkZGxld2FyZSA9IGNyZWF0ZVNhZ2FNaWRkbGV3YXJlKCk7XHJcbiAgY29uc3QgbWlkZGxld2FyZXMgPSBbc2FnYU1pZGRsZXdhcmUsIGxvZ2dlck1pZGRsZXdhcmVdO1xyXG4gIGNvbnN0IGVuaGFuY2VyID1cclxuICAgIHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSBcInByb2R1Y3Rpb25cIlxyXG4gICAgICA/IGNvbXBvc2UoYXBwbHlNaWRkbGV3YXJlKC4uLm1pZGRsZXdhcmVzKSlcclxuICAgICAgOiBjb21wb3NlV2l0aERldlRvb2xzKGFwcGx5TWlkZGxld2FyZSguLi5taWRkbGV3YXJlcykpO1xyXG4gIC8v7JyEIOyEpOuqhTog6rCc67Cc7JqpIG1pZGRsZXdhcmXrnpEg67Cw7Y+s7JqpIG1pZGRsZXdhcmXripQg64uk66W06riwIOuVjOusuOyXkCDsnITsmYAg6rCZ7J20IOygleydmCDtlaguXHJcblxyXG4gIGNvbnN0IHN0b3JlID0gY3JlYXRlU3RvcmUocmVkdWNlciwgZW5oYW5jZXIpO1xyXG4gIHN0b3JlLnNhZ2FUYXNrID0gc2FnYU1pZGRsZXdhcmUucnVuKHJvb3RTYWdhKTtcclxuICAvLyBzdG9yZS5kaXNwYXRjaCh7XHJcbiAgLy8gICB0eXBlOiBcIkNIQU5HRV9OSUNLTkFNRVwiLFxyXG4gIC8vICAgZGF0YTogXCJKYWVoYW5cIixcclxuICAvLyB9KTtcclxuICByZXR1cm4gc3RvcmU7XHJcbn07XHJcblxyXG5jb25zdCB3cmFwcGVyID0gY3JlYXRlV3JhcHBlcihjb25maWd1cmVTdG9yZSwgeyBkZWJ1ZzogcHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09IFwiZGV2ZWxvcG1lbnRcIiB9KTtcclxuLy/snITsmYAg6rCZ7J20IO2VmOuptCByZWR1eCDsgqzsmqnsi5wg66y47KCc7KCQ65Ox7J20IOuNlCDsnpDshLjtnogg64KY7Ji0LiDrlLDrnbzshJwg7JyE7JmAIOqwmeydtCDshKTsoJUg7ZWY6riwXHJcblxyXG5leHBvcnQgZGVmYXVsdCB3cmFwcGVyO1xyXG4iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJheGlvc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0LXJlZHV4LXNhZ2FcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC1yZWR1eC13cmFwcGVyXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvaGVhZFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJwcm9wLXR5cGVzXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0L2pzeC1kZXYtcnVudGltZVwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWR1eFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWR1eC1kZXZ0b29scy1leHRlbnNpb25cIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVkdXgtc2FnYVwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWR1eC1zYWdhL2VmZmVjdHNcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwic2hvcnRpZFwiKTsiXSwic291cmNlUm9vdCI6IiJ9