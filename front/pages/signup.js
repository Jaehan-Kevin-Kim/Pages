import React, { useCallback, useState } from "react";
import Head from "next/head";
import { Checkbox, Form, Input, Button } from "antd";
import AppLayout from "../components/AppLayout";
import useInput from "../hooks/useinput";
import styled from "styled-components";

const Signup = () => {
  const [id, onChangeId] = useInput("");
  const [nickname, onChangeNickname] = useInput("");
  const [password, onChangePassword] = useInput("");

  const [passwordCheck, setPasswordCheck] = useState("");
  const [passwordError, setPasswordError] = useState(false);
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
    console.log(id, nickname, password);
  }, [password, passwordCheck, term]);

  return (
    <AppLayout>
      <Head>
        <title>SignUp Page | NodeBird</title>
      </Head>
      <Form onFinish={onSubmit}>
        <div>
          <label htmlFor='user-id'>ID</label> <br />
          <Input name='user-id' value={id} required onChange={onChangeId} />
        </div>
        <div>
          <label htmlFor='user-nickname'>Nick Name</label> <br />
          <Input name='user-nickname' value={nickname} required onChange={onChangeNickname} />
        </div>
        <div>
          <label htmlFor='user-password'>Password</label> <br />
          <Input
            name='user-password'
            type='password'
            value={password}
            required
            onChange={onChangePassword}
          />
        </div>
        <div>
          <label htmlFor='user-password-check'>Password Check</label> <br />
          <Input
            name='user-password-check'
            type='password'
            value={passwordCheck}
            required
            onChange={onChangePasswordCheck}
          />
          {passwordError && <ErrorMessage>Password is not matched!</ErrorMessage>}
        </div>
        <div>
          <Checkbox name='user-term' checked={term} onChange={onChangeTerm}>
            Do you agree to the terms and conditions for use?
          </Checkbox>
          {termError && <ErrorMessage>You have to agree to the terms and conditions.</ErrorMessage>}
        </div>
        <div style={{ marginTop: "10px" }}>
          <Button type='primary' htmlType='submit'>
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

export default Signup;
