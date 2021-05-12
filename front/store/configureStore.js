// import React from "react";

import { createWrapper } from "next-redux-wrapper";
import { createStore, applyMiddleware, compose } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";

import reducer from "../reducers/index";

const configureStore = () => {
  const middlewares = [];
  const enhancer =
    process.env.NODE_ENV === "production"
      ? compose(applyMiddleware(...middlewares))
      : composeWithDevTools(applyMiddleware(...middlewares));

  const store = createStore(reducer, enhancer);
  // store.dispatch({
  //   type: "CHANGE_NICKNAME",
  //   data: "Jaehan",
  // });
  return store;
};

const wrapper = createWrapper(configureStore, { debug: process.env.NODE_ENV === "development" });
//위와 같이 하면 redux 사용시 문제점등이 더 자세히 나옴. 따라서 위와 같이 설정 하기

export default wrapper;
