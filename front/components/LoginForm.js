import React, { useCallback, useMemo, useState } from "react";
import { Button, Input, Form } from "antd";
import Proptypes from "prop-types";
// import Form from "antd/lib/form/Form";
import Link from "next/link";
import styled from "styled-components";
import useInput from "../hooks/useinput";
import { useDispatch, useSelector } from "react-redux";
import { loginRequestAction } from "../reducers/user";

const ButtonWrapper = styled.div`
  margin-top: 10px;
`;

const FormWrapper = styled(Form)`
  padding: 10px;
`;

const LoginForm = () => {
  const dispatch = useDispatch(); //useDispatch는 store.dispatch와 같음.

  const [email, onChangeEmail] = useInput("");
  const [password, onChangePassword] = useInput("");
  const { loginLoading } = useSelector((state) => state.user);

  const onSubmitForm = useCallback(() => {
    console.log(email, password);
    // setIsLoggedIn(true);
    dispatch(loginRequestAction({ email, password }));
  }, [email, password]);

  return (
    <FormWrapper onFinish={onSubmitForm}>
      <div>
        <label htmlFor='user-email'>Email</label>
        <br />
        <Input name='user-email' type='email' value={email} onChange={onChangeEmail} required />
      </div>
      <div>
        <label htmlFor='user-password'>Password</label>
        <br />
        <Input
          name='user-password'
          type='password'
          value={password}
          onChange={onChangePassword}
          required
        />
      </div>
      {/* 아래와 같이 작성하면 동작은 하지만 이렇게 하면 안됨: 이유는 아래와 같이 바로 style로 값을 줄 때 새로운 object가 생성이 됨. 이로인해 매번 로딩될때마다 불필요한 re-rendering 이 발생 함. 이를 해결하기 위해 styled-component 사용
      styled component 사용법: 새로운 Component를 만들어 주고 해당 함수의 위에서 해당 component를 정의해 줌. 방식은 const 컴퍼넌트이름 = styled.원하는tag(eg.div)`내용`이런식으로 작성 함. 
      <div style={{ marginTop: "10px" }}> */}
      <ButtonWrapper>
        {/* <div style={styledMargin}> */}
        <Button type='primary' htmlType='submit' loading={loginLoading}>
          Log In
        </Button>
        <Link href='/signup'>
          <a>
            <Button>SignUp</Button>
          </a>
        </Link>
        {/* </div> */}
      </ButtonWrapper>
    </FormWrapper>
  );
};

// LoginForm.propTypes = {
//   setIsLoggedIn: Proptypes.func.isRequired,
// };

export default LoginForm;
