import { END } from "@redux-saga/core";
import Head from "next/head";
import axios from "axios";
import { useRouter } from "next/router";
import { useSelector } from "react-redux";
import AppLayout from "../../components/AppLayout";
import PostCard from "../../components/PostCard";
import { LOAD_POST_REQUEST } from "../../reducers/post";
import { LOAD_MY_INFO_REQUEST } from "../../reducers/user";
import wrapper from "../../store/configureStore";

const Post = () => {
  const router = useRouter();
  const { id } = router.query;
  const { singlePost } = useSelector((state) => state.post);

  console.log("singlePost", singlePost);

  // if (router.isFallback) {
  //   return <div>Loading...</div>;
  // }

  return (
    <AppLayout>
      <Head>
        <title>{singlePost.User.nickname}'s post.</title>
        <meta name="description" content={singlePost.content} />
        <meta property="og:title" content={`${singlePost.User.nickname}'s Post`} />
        <meta property="og:description" content={singlePost.content} />
        <meta
          property="og:image"
          content={
            singlePost.Images[0] ? singlePost.Images[0].src : "https://nodebird.com/favicon.ico"
          }
        />
        <meta property="og:url" content={`https://nodebird.com/post/${id}`} />
        {/* <link rel="shortcut icon" href="http://localhost:3060/favicon.ico" /> */}
      </Head>
      <PostCard post={singlePost} />
    </AppLayout>
  );
};
// export async function getStaticPaths() {
//   // const result = await axios.get("/post/list");
//   return {
//     paths: [{ params: { id: "1" } }, { params: { id: "2" } }, { params: { id: "3" } }],
//     fallback: true,
//   };
// }

export const getServerSideProps = wrapper.getServerSideProps(async (context) => {
  const cookie = context.req ? context.req.headers.cookie : "";
  console.log(context);
  axios.defaults.headers.Cookie = "";
  if (context.req && cookie) {
    axios.defaults.headers.Cookie = cookie;
  }
  context.store.dispatch({
    type: LOAD_MY_INFO_REQUEST,
  });
  context.store.dispatch({
    type: LOAD_POST_REQUEST,
    data: context.params.id, //or context.query.id ??? ??????
  });

  context.store.dispatch(END);
  await context.store.sagaTask.toPromise();
});

export default Post;
