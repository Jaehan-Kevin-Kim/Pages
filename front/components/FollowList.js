import React from "react";
import { Button, Card, List } from "antd";
import { StopOutlined } from "@ant-design/icons";
import PropTypes from "prop-types";
import { UNFOLLOW_REQUEST, REMOVE_FOLLOWER_REQUEST } from "../reducers/user";
import { useDispatch } from "react-redux";

const FollowList = ({ header, data }) => {
  const dispatch = useDispatch();

  //고차 함수 사용
  const onCancel = (id) => () => {
    if (header === "Following List") {
      dispatch({
        type: UNFOLLOW_REQUEST,
        data: id,
      });
    } else if (header === "Follower List") {
      dispatch({
        type: REMOVE_FOLLOWER_REQUEST,
        data: id,
      });
    }
  };
  return (
    <List
      style={{ marginBottom: 20 }}
      grid={{ gutter: 4, xs: 2, md: 3 }}
      size="small"
      header={<div>{header}</div>}
      loadMore={
        <div style={{ textAlign: "center", margin: "10px 0" }}>
          <Button>More...</Button>
        </div>
      }
      bordered
      dataSource={data}
      renderItem={(item) => (
        <List.Item style={{ marginTop: 20 }}>
          {/* // 아래 onClick 고차함수 사용 예시 (반복문에 유용함) */}
          <Card actions={[<StopOutlined key="stop" onClick={onCancel(item.id)} />]}>
            <Card.Meta description={item.nickname} />
          </Card>
        </List.Item>
      )}
    />
  );
};

export default FollowList;
