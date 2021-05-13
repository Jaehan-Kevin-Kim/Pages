import React from "react";
import PropTypes from "prop-types";
import Link from "next/link";
import { Input, Menu, Row, Col } from "antd";
import "antd/dist/antd.css";
import UserProfile from "./UserProfile";
import LoginForm from "./LoginForm";
import styled from "styled-components";
import { useSelector } from "react-redux";

const SearchInput = styled(Input.Search)`
  vertical-align: middle;
`;

const AppLayout = ({ children }) => {
  // const [isLoggedIn, setIsLoggedIn] = useState(false);

  // const { isLoggedIn } = useSelector((state) => state.user); //Redux 사용하면 위와 같이 useState로 값 설정 필요 없음
  //바로 위와 같이 써도 되고, 이렇게 써도 됨.
  const isLoggedIn = useSelector((state) => state.user.isLoggedIn); //Redux 사용하면 위와 같이 useState로 값 설정 필요 없음

  return (
    <div>
      <Menu mode='horizontal'>
        <Menu.Item>
          <Link href='/'>
            <a>Node Bird</a>
          </Link>
        </Menu.Item>
        <Menu.Item>
          <Link href='/profile'>
            <a>Profile</a>
          </Link>
        </Menu.Item>
        <Menu.Item>
          <SearchInput enterButton />
        </Menu.Item>
        <Menu.Item>
          <Link href='/signup'>
            <a>Sign Up</a>
          </Link>
        </Menu.Item>
      </Menu>
      <Row gutter={8}>
        <Col xs={24} md={6}>
          {isLoggedIn ? <UserProfile /> : <LoginForm />}
        </Col>
        <Col xs={24} md={12}>
          {children}
        </Col>
        <Col xs={24} md={6}>
          {/* 아래 a tag 안에 들어가는 내용은 새창에서 뭔가를 띄울때 보안적인 부분까지 포함 된 tag 내용들임. */}
          <a href='https://kevin-kim.netlify.app/' target='_blank' rel='noreferrer noopener'>
            Made by Kevin
          </a>
        </Col>
      </Row>
    </div>
  );
};

AppLayout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default AppLayout;
