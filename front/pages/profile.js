import Head from "next/head";
import React from "react";
import AppLayout from "../components/AppLayout";
import FollowerList from "../components/FollowerList";
import FollowList from "../components/FollowList";
import NicknameEditForm from "../components/NicknameEditForm";

const profile = () => {
  const followerList = [{ nickname: "kevin" }, { nickname: "sample" }, { nickname: "admin user" }];
  const followingList = [{ nickname: "kevin" }, { nickname: "sample" }, { nickname: "admin" }];
  return (
    <>
      <Head>
        <title>My Profile | NodeBird</title>
      </Head>
      <AppLayout>
        <NicknameEditForm />
        <FollowList header='Following List' data={followingList} />
        <FollowList header='Follower List' data={followerList} />
      </AppLayout>
    </>
  );
};

export default profile;
