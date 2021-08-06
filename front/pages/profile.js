import Router from "next/router";
import Head from "next/head";
import React, { useEffect, useState, useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import AppLayout from "../components/AppLayout";
import FollowerList from "../components/FollowerList";
import FollowList from "../components/FollowList";
import useSWR from "swr";
import NicknameEditForm from "../components/NicknameEditForm";
import {
  LOAD_FOLLOWERS_REQUEST,
  LOAD_FOLLOWINGS_REQUEST,
  LOAD_MY_INFO_REQUEST,
} from "../reducers/user";
import wrapper from "../store/configureStore";
import axios from "axios";
import { END } from "redux-saga";
import { backUrl } from "../config/config";

const fetcher = (url) => axios.get(url, { withCredentials: true }).then((result) => result.data);

const profile = () => {
  // const followerList = [{ nickname: "kevin" }, { nickname: "sample" }, { nickname: "admin user"}];
  // const followingList = [{ nickname: "kevin" }, { nickname: "sample" }, { nickname: "admin" }];
  const dispatch = useDispatch();
  const { me } = useSelector((state) => state.user);
  const [followersLimit, setFollowersLimit] = useState(3);
  const [followingsLimit, setFollowingsLimit] = useState(3);

  const { data: followersData, error: followerError } = useSWR(
    `${backUrl}/user/followers?limit=${followersLimit}`,
    fetcher
  );
  const { data: followingsData, error: followingError } = useSWR(
    `${backUrl}/user/followings?limit=${followingsLimit}`,
    fetcher
  );

  // useEffect(() => {
  //   dispatch({
  //     type: LOAD_FOLLOWERS_REQUEST,
  //   });
  //   dispatch({
  //     type: LOAD_FOLLOWINGS_REQUEST,
  //   });
  // }, []);

  useEffect(() => {
    if (!(me && me.id)) {
      Router.push("/");
    }
  }, [me && me.id]);

  const loadMoreFollowings = useCallback(() => {
    setFollowingsLimit((prev) => prev + 3);
  }, []);
  const loadMoreFollowers = useCallback(() => {
    setFollowersLimit((prev) => prev + 3);
  }, []);

  if (!me) {
    return "Loading my info...";
  }
  if (followerError || followingError) {
    console.error(followerError || followingError);
    return "Error occurs during following or follower action";
  }

  return (
    <>
      <Head>
        <title>My Profile | Poster</title>
      </Head>
      <AppLayout>
        <NicknameEditForm />
        {/* <FollowList header="Following List" data={me.Followings} /> */}
        {/* <FollowList header="Follower List" data={me.Followers} /> */}
        <FollowList
          header="Following List"
          data={followingsData}
          onClickMore={loadMoreFollowings}
          loading={!followingsData && !followingError}
        />
        <FollowList
          header="Follower List"
          data={followersData}
          onClickMore={loadMoreFollowers}
          loading={!followersData && !followerError}
        />
      </AppLayout>
    </>
  );
};

export const getServerSideProps = wrapper.getServerSideProps(async (context) => {
  console.log("getServersideProps start");
  console.log(context.req.headers);
  const cookie = context.req ? context.req.headers.cookie : "";
  axios.defaults.headers.Cookie = "";
  if (context.req && cookie) {
    axios.defaults.headers.Cookie = cookie;
  }

  console.log("context", context);
  context.store.dispatch({
    type: LOAD_MY_INFO_REQUEST,
  });
  context.store.dispatch(END);
  await context.store.sagaTask.toPromise();
});

export default profile;
