import React, { useCallback, useMemo, useState } from "react";
import { Button, Input, Form } from "antd";
// import Form from "antd/lib/form/Form";
import Link from "next/link";
import styled from "styled-components";

const ButtonWrapper = styled.div`
  margin-top: 10px;
`;

const FormWrapper = styled(Form)`
  padding: 10px;
`;

const LoginForm = ({ setIsLoggedIn }) => {
  const [id, setId] = useState("");
  const [password, setPassword] = useState("");

  const onChangeId = useCallback((e) => {
    setId(e.target.value);
  }, []);
  const onChangePassword = useCallback((e) => {
    setPassword(e.target.value);
  }, []);
  //   const styledMargin = useMemo(() => ({ marginTop: "10px" }), []);
  const onSubmitForm = useCallback(() => {
    console.log(id, password);
    setIsLoggedIn(true);
  }, [id, password]);

  return (
    <FormWrapper onFinish={onSubmitForm}>
      <div>
        <label htmlFor='user-id'>ID</label>
        <br />
        <Input name='user-id' value={id} onChange={onChangeId} required />
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
        <Button type='primary' htmlType='submit' loading={false}>
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

export default LoginForm;
