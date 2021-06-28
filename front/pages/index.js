import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import AppLayout from "../components/AppLayout";
import PostCard from "../components/PostCard";
import PostForm from "../components/PostForm";
import { LOAD_POSTS_REQUEST } from "../reducers/post";
import { LOAD_MY_INFO_REQUEST } from "../reducers/user";

/*
const Home = () => {
  const dispatch = useDispatch();
  const { me } = useSelector((state) => state.user);
  const { mainPosts } = useSelector((state) => state.post);
  useEffect(() => {
    dispatch({
      type: LOAD_POSTS_REQUEST,
    });
  }, []);

  useEffect(() => {
    function onScroll() {
      console.log(
        window.scrollY,
        document.documentElement.clientHeight,
        document.documentElement.scrollHeight
      );
    }
    window.addEventListener("scroll", onScroll);
    //useEffect에서 window.addEventListener할때 주의 할점: 항상 return으로 removeEventListener를 해줘야 함. 그러지 않으면 Memory에 계속 쌓여서 메모리 누수가 발생 함.
    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  console.log("mainPosts", mainPosts);
  return (
    <AppLayout>
      {me && <PostForm />}
      {mainPosts.map((post) => (
        // console.log(post)
        <PostCard key={post.id} post={post} />
      ))}
    </AppLayout>
  );
};
*/
const Home = () => {
  const dispatch = useDispatch();
  const { me } = useSelector((state) => state.user);
  const { mainPosts, hasMorePosts, loadPostsLoading, retweetError } = useSelector(
    (state) => state.post
  );

  useEffect(() => {
    // console.log("rerender");
    if (retweetError) {
      alert(retweetError);
    }
  }, [retweetError]);

  useEffect(() => {
    dispatch({
      type: LOAD_MY_INFO_REQUEST,
    });
    dispatch({
      type: LOAD_POSTS_REQUEST,
    });
  }, []);

  useEffect(() => {
    function onScroll() {
      // console.log(
      //   //scrollY: 현재 내가 얼마나 내렸는지 (스크롤내리고 올릴때마다 변함)
      //   //clientHeight: 현재 화면에서 보이는 길이 (창 크기가 바뀌면 달라짐)
      //   //scrollHeight: 총 scroll 길이
      //   typeof window.scrollY,
      //   typeof document.documentElement.clientHeight,
      //   typeof (document.documentElement.scrollHeight - 300)
      // );

      // console.log(
      //   window.scrollY + document.documentElement.clientHeight >
      //     document.documentElement.scrollHeight - 300
      // );
      if (
        window.scrollY + document.documentElement.clientHeight >
        document.documentElement.scrollHeight - 300
      ) {
        if (hasMorePosts && !loadPostsLoading) {
          dispatch({
            type: LOAD_POSTS_REQUEST,
          });
        }
      }
    }
    window.addEventListener("scroll", onScroll);
    // useEffect에서 window.addEventListener할때 주의 할점: 항상 return으로 removeEventListener를 해줘야 함. 그러지 않으면 Memory에 계속 쌓여서 메모리 누수가 발생 함.
    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  }, [hasMorePosts, loadPostsLoading]);

  return (
    <AppLayout>
      {me && <PostForm />}
      {mainPosts.map((post) => (
        <PostCard key={post.id} post={post} />
      ))}
    </AppLayout>
  );
};

export default Home;
