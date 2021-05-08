import React, { useCallback } from "react";
import { Button, Card } from "antd";
import Avatar from "antd/lib/avatar/avatar";

const UserProfile = ({ setIsLoggedIn }) => {
  const onLogOut = useCallback(() => {
    setIsLoggedIn(false);
  }, []);
  return (
    <Card
      actions={[
        <div key='twit'>
          gogo <br /> 0
        </div>,

        //  <div>
        <div key='following'>
          Following <br /> 0
        </div>,
        //  <div>
        <div key='followers'>
          Followers <br /> 0
        </div>,
      ]}>
      <Card.Meta avatar={<Avatar>JK</Avatar>} title='Kevin Kim' />
      <Button onClick={onLogOut}>Log Out</Button>
    </Card>
  );
};

export default UserProfile;
