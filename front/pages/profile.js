import Router from "next/router";
import Head from "next/head";
import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import AppLayout from "../components/AppLayout";
import FollowerList from "../components/FollowerList";
import FollowList from "../components/FollowList";
import NicknameEditForm from "../components/NicknameEditForm";

const profile = () => {
  // const followerList = [{ nickname: "kevin" }, { nickname: "sample" }, { nickname: "admin user" }];
  // const followingList = [{ nickname: "kevin" }, { nickname: "sample" }, { nickname: "admin" }];
  const { me } = useSelector((state) => state.user);
  useEffect(() => {
    if (!(me && me.id)) {
      Router.push("/");
    }
  }, [me && me.id]);

  if (!me) {
    return null;
  }
  return (
    <>
      <Head>
        <title>My Profile | NodeBird</title>
      </Head>
      <AppLayout>
        <NicknameEditForm />
        <FollowList header='Following List' data={me.Followings} />
        <FollowList header='Follower List' data={me.Followers} />
      </AppLayout>
    </>
  );
};

export default profile;
