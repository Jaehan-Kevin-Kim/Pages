import React, { useCallback, useState } from "react";
import { Button, Input, Form } from "antd";
// import Form from "antd/lib/form/Form";
import Link from "next/link";

const LoginForm = () => {
  const [id, setId] = useState("");
  const [password, setPassword] = useState("");

  const onChangeId = useCallback((e) => {
    setId(e.target.value);
  }, []);
  const onChangePassword = useCallback((e) => {
    setId(e.target.value);
  }, []);

  return (
    <Form>
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
      <div>
        <Button type='primary' htmlType='submit' loading={false}>
          Log In
        </Button>
        <Link href='/signup'>
          <a>
            <Button>SignUp</Button>
          </a>
        </Link>
      </div>
    </Form>
  );
};

export default LoginForm;
