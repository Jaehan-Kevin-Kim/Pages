import React from "react";
import PropTypes from "prop-types";
import Link from "next/link";
import { Input, Menu, Row, Col } from "antd";
import "antd/dist/antd.css";

const AppLayout = (props) => {
  console.log(props);
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
          <Input.Search enterButton style={{ verticalAlign: "middle" }} />
        </Menu.Item>
        <Menu.Item>
          <Link href='/signup'>
            <a>Sign Up</a>
          </Link>
        </Menu.Item>
      </Menu>
      <Row gutter={8}>
        <Col xs={24} md={6}>
          Left Menu{" "}
        </Col>
        <Col xs={24} md={12}>
          {props.children}
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
