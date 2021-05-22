import React, { useCallback } from "react";
import { Button, Card } from "antd";
import Avatar from "antd/lib/avatar/avatar";
import { useDispatch, useSelector } from "react-redux";
import { logoutRequestAction } from "../reducers/user";

const UserProfile = () => {
  const dispatch = useDispatch();
  const { me, logOutLoading } = useSelector((state) => state.user);

  const onLogOut = useCallback(() => {
    dispatch(logoutRequestAction());
  }, []);
  return (
    <Card
      actions={[
        <div key='twit'>
          gogo <br /> {me.Posts.length}
        </div>,

        //  <div>
        <div key='following'>
          Following <br /> {me.Followings.length}
        </div>,
        //  <div>
        <div key='followers'>
          Followers <br /> {me.Followers.length}
        </div>,
      ]}>
      <Card.Meta avatar={<Avatar>{me.nickname[0]}</Avatar>} title={me.nickname} />
      <Button onClick={onLogOut} loading={logOutLoading}>
        Log Out
      </Button>
    </Card>
  );
};

export default UserProfile;
