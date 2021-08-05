import React, { useCallback, useEffect, useState } from "react";
import Head from "next/head";
import { Checkbox, Form, Input, Button } from "antd";
import AppLayout from "../components/AppLayout";
import useInput from "../hooks/useInput";
import styled from "styled-components";
import Router from "next/router";
import { useDispatch, useSelector } from "react-redux";
import { LOAD_MY_INFO_REQUEST, SIGN_UP_REQUEST } from "../reducers/user";
import axios from "axios";
import wrapper from "../store/configureStore";
import { END } from "redux-saga";

const Signup = () => {
  const dispatch = useDispatch();
  const { signUpLoading, signUpDone, signUpError, me } = useSelector((state) => state.user);
  const [email, onChangeEmail] = useInput("");
  const [nickname, onChangeNickname] = useInput("");
  const [password, onChangePassword] = useInput("");

  const [passwordCheck, setPasswordCheck] = useState("");
  const [passwordError, setPasswordError] = useState(false);

  useEffect(() => {
    if (me && me.id) {
      Router.replace("/"); // push하면 뒤로가기 했을때 다시 그 page가 살아있지만, replace하면 새로 변경된 페이지 전의 페이지가 사라지므로, 뒤로가기 해도 이전 페이지로 돌아가지 않음.
    }
  }, [me && me.id]);

  useEffect(() => {
    if (signUpDone) {
      Router.replace("/");
    }
  }, [signUpDone]);

  useEffect(() => {
    if (signUpError) {
      alert(signUpError);
    }
  }, [signUpError]);

  const onChangePasswordCheck = useCallback(
    (e) => {
      setPasswordCheck(e.target.value);
      setPasswordError(e.target.value !== password);
    },
    [password]
  );

  const [term, setTerm] = useState("");
  const [termError, setTermError] = useState(false);
  const onChangeTerm = useCallback((e) => {
    console.log(e.target.checked);
    setTerm(e.target.checked);
    setTermError(false);
  }, []);

  const ErrorMessage = styled.div`
    color: red;
  `;

  const onSubmit = useCallback(() => {
    if (password !== passwordCheck) {
      return setPasswordError(true);
    }
    if (!term) {
      console.log(term);
      return setTermError(true);
    }
    console.log(email, nickname, password);
    dispatch({
      type: SIGN_UP_REQUEST,
      data: { email, password, nickname },
    });
  }, [password, passwordCheck, term]);

  return (
    <AppLayout>
      <Head>
        <title>SignUp Page | NodeBird</title>
      </Head>
      <Form onFinish={onSubmit}>
        <div>
          <label htmlFor="user-email">Email</label> <br />
          <Input name="user-email" type="email" value={email} required onChange={onChangeEmail} />
        </div>
        <div>
          <label htmlFor="user-nickname">Nick Name</label> <br />
          <Input name="user-nickname" value={nickname} required onChange={onChangeNickname} />
        </div>
        <div>
          <label htmlFor="user-password">Password</label> <br />
          <Input
            name="user-password"
            type="password"
            value={password}
            required
            onChange={onChangePassword}
          />
        </div>
        <div>
          <label htmlFor="user-password-check">Password Check</label> <br />
          <Input
            name="user-password-check"
            type="password"
            value={passwordCheck}
            required
            onChange={onChangePasswordCheck}
          />
          {passwordError && <ErrorMessage>Password is not matched!</ErrorMessage>}
        </div>
        <div>
          <Checkbox name="user-term" checked={term} onChange={onChangeTerm}>
            Do you agree to the terms and conditions for use?
          </Checkbox>
          {termError && <ErrorMessage>You have to agree to the terms and conditions.</ErrorMessage>}
        </div>
        <div style={{ marginTop: "10px" }}>
          <Button type="primary" htmlType="submit" loading={signUpLoading}>
            Sign Up
          </Button>
        </div>
      </Form>
      {/* <AppLayout>
        <div>Signup Page</div>
      </AppLayout> */}
    </AppLayout>
  );
};

export const getServerSideProps = wrapper.getServerSideProps(async (context) => {
  console.log("getServersideProps start");
  console.log(context.req.headers);
  const cookie = context.req ? context.req.headers.cookie : "";
  axios.defaults.headers.Cookie = "";
  if (context.req && cookie) {
    axios.defaults.headers.Cookie = cookie;
  }

  console.log("context", context);
  context.store.dispatch({
    type: LOAD_MY_INFO_REQUEST,
  });
  context.store.dispatch(END);
  await context.store.sagaTask.toPromise();
});

export default Signup;
