// import shortId from "shortid";
import produce from "immer";
// import faker from "faker";

export const initialState = {
  /*
  // mainPosts: [
  //   // {
  //   //   id: 1,
  //   //   User: {
  //   //     id: 1,
  //   //     nickname: "Kevin",
  //   //   },
  //   //   content: "First Post #HashTag, #Express",
  //   //   // Images: [
  //   //   //   {
  //   //   //     src: "https://res.cloudinary.com/highereducation/image/upload/c_scale,w_750/f_auto,fl_lossy,q_auto:eco/v1532988864/TheBestColleges.org/images/study-notebooks.jpg",
  //   //   //   },
  //   //   //   {
  //   //   //     src: "https://www.fastweb.com/uploads/article_photo/photo/2161/crop380w_istock_000002193842xsmall-books.jpg",
  //   //   //   },
  //   //   //   {
  //   //   //     src: "https://www.insidehighered.com/sites/default/server_files/media/iStock-520374378.jpg",
  //   //   //   },
  //   //   // ],
  //   //   Images: [
  //   //     {
  //   //       id: shortId.generate(),
  //   //       src: "https://bookthumb-phinf.pstatic.net/cover/137/995/13799585.jpg?udate=20180726",
  //   //     },
  //   //     {
  //   //       id: shortId.generate(),
  //   //       src: "https://gimg.gilbut.co.kr/book/BN001958/rn_view_BN001958.jpg",
  //   //     },
  //   //     {
  //   //       id: shortId.generate(),
  //   //       src: "https://gimg.gilbut.co.kr/book/BN001998/rn_view_BN001998.jpg",
  //   //     },
  //   //   ],
  //   //   Comments: [
  //   //     {
  //   //       id: shortId.generate(),
  //   //       User: {
  //   //         id: shortId.generate(),
  //   //         nickname: "nero",
  //   //       },
  //   //       content: "Great post!",
  //   //     },
  //   //     {
  //   //       id: shortId.generate(),
  //   //       User: {
  //   //         id: shortId.generate(),
  //   //         nickname: "jaehan",
  //   //       },
  //   //       content: `it's really educational`,
  //   //     },
  //   //   ],
  //   // },
  // ],
  */
  mainPosts: [],
  imagePaths: [],
  hasMorePosts: true,
  likePostLoading: false,
  likePostDone: false,
  likePostError: null,
  unlikePostLoading: false,
  unlikePostDone: false,
  unlikePostError: null,
  loadPostsLoading: false,
  loadPostsDone: false,
  loadPostsError: null,
  addPostLoading: false,
  addPostDone: false,
  addPostError: null,
  removePostLoading: false,
  removePostDone: false,
  removePostError: null,
  addCommentLoading: false,
  addCommentDone: false,
  addCommentError: null,

  uploadImagesLoading: false,
  uploadImagesDone: false,
  uploadImagesError: null,

  retweetLoading: false,
  retweetDone: false,
  retweetError: null,
};

/*
export const generateDummyPost = (number) =>
  Array(number)
    .fill()
    .map(() => ({
      id: shortId.generate(),
      User: {
        id: shortId.generate(),
        nickname: faker.name.findName(),
      },
      content: faker.lorem.paragraph(),
      Images: [
        {
          src: faker.image.image(),
        },
      ],
      Comments: [
        {
          User: {
            id: shortId.generate(),
            nickname: faker.name.findName(),
          },
          content: faker.lorem.sentence(),
        },
      ],
    }));
    */
// initialState.mainPosts = initialState.mainPosts.concat(generateDummyPost(10));

export const RETWEET_REQUEST = "RETWEET_REQUEST";
export const RETWEET_SUCCESS = "RETWEET_SUCCESS";
export const RETWEET_FAILURE = "RETWEET_FAILURE";

export const UPLOAD_IMAGES_REQUEST = "UPLOAD_IMAGES_REQUEST";
export const UPLOAD_IMAGES_SUCCESS = "UPLOAD_IMAGES_SUCCESS";
export const UPLOAD_IMAGES_FAILURE = "UPLOAD_IMAGES_FAILURE";

export const REMOVE_IMAGE = "REMOVE_IMAGE"; //Remove Image경우 하나만 만들면 됨(동기이기 때문에). 만약 서버에서도 빼주고 싶다면 보통 다른 것들과 같이 request,success,failure 다 해줘야 함. image의 경우 서버에서 가지고 있는게 더 이득이기때문에 프론트에서만 지워주는 경우가 많암. (지금은 프론트에서만 지우기때문에 request,success,failure등이 필요 없음)

export const LIKE_POST_REQUEST = "LIKE_POST_REQUEST";
export const LIKE_POST_SUCCESS = "LIKE_POST_SUCCESS";
export const LIKE_POST_FAILURE = "LIKE_POST_FAILURE";

export const UNLIKE_POST_REQUEST = "UNLIKE_POST_REQUEST";
export const UNLIKE_POST_SUCCESS = "UNLIKE_POST_SUCCESS";
export const UNLIKE_POST_FAILURE = "UNLIKE_POST_FAILURE";

export const LOAD_POSTS_REQUEST = "LOAD_POSTS_REQUEST";
export const LOAD_POSTS_SUCCESS = "LOAD_POSTS_SUCCESS";
export const LOAD_POSTS_FAILURE = "LOAD_POSTS_FAILURE";

export const ADD_POST_REQUEST = "ADD_POST_REQUEST";
export const ADD_POST_SUCCESS = "ADD_POST_SUCCESS";
export const ADD_POST_FAILURE = "ADD_POST_FAILURE";

export const REMOVE_POST_REQUEST = "REMOVE_POST_REQUEST";
export const REMOVE_POST_SUCCESS = "REMOVE_POST_SUCCESS";
export const REMOVE_POST_FAILURE = "REMOVE_POST_FAILURE";

export const ADD_COMMENT_REQUEST = "ADD_COMMENT_REQUEST";
export const ADD_COMMENT_SUCCESS = "ADD_COMMENT_SUCCESS";
export const ADD_COMMENT_FAILURE = "ADD_COMMENT_FAILURE";

export const addPost = (data) => ({
  type: ADD_POST_REQUEST,
  data,
});
export const addComment = (data) => ({
  type: ADD_COMMENT_REQUEST,
  data,
});

/*
const dummyPost = (data) => ({
  id: data.id,
  content: data.content,
  User: {
    id: 1,
    nickname: "Kevin",
  },
  Images: [],
  Comments: [],
});

const dummyComment = (data) => ({
  id: shortId.generate(),
  content: data,
  User: {
    id: 1,
    nickname: "Kevin",
  },
});
*/

//reducer: 이전 상태를 액션을 통해 다음 상태로 만들어내는 함수 (불변성은 지키면서)
const reducer = (state = initialState, action) => {
  // immer: 이전 상태를 액션을 통해 다음 상태로 만들어내는 함수 (불변성 안지켜도 immer가 알아서 지켜줌.)
  // 여기부터는 draft가 state처럼 사용되고 이건 막 바꿔도 됨. (immer가 알아서 처리해 주므로)
  return produce(state, (draft) => {
    switch (action.type) {
      case RETWEET_REQUEST: {
        draft.retweetLoading = true;
        draft.retweetDone = false;
        draft.retweetError = null;
        break;
      }
      case RETWEET_SUCCESS: {
        draft.retweetLoading = false;
        draft.retweetDone = true;
        draft.mainPosts.unshift(action.data);
        break;
      }
      case RETWEET_FAILURE: {
        draft.retweetLoading = false;
        draft.retweetError = action.error;
        break;
      }

      // 아래가 request, success, failure가 아닌 remove_image 하나인 이유는 동기 함수이기 때문. (back-end에서 요청을 기다려서 받는게 아닌 그냥 front-end측에서만 지우고, backend에서는 사진을 남겨 둠.)
      case REMOVE_IMAGE: {
        draft.imagePaths = draft.imagePaths.filter((v, i) => i !== action.data);
        break;
      }

      case UPLOAD_IMAGES_REQUEST: {
        draft.uploadImagesLoading = true;
        draft.uploadImagesDone = false;
        draft.uploadImagesError = null;
        break;
      }
      case UPLOAD_IMAGES_SUCCESS: {
        draft.uploadImagesLoading = false;
        draft.uploadImagesDone = true;
        draft.imagePaths = action.data;
        break;
      }
      case UPLOAD_IMAGES_FAILURE: {
        draft.uploadImagesLoading = false;
        draft.uploadImagesError = action.error;
        break;
      }

      case LIKE_POST_REQUEST: {
        draft.likePostLoading = true;
        draft.likePostDone = false;
        draft.likePostError = null;
        break;
      }
      case LIKE_POST_SUCCESS: {
        const post = draft.mainPosts.find((v) => v.id === action.data.PostId);
        post.Likers.push({ id: action.data.UserId });
        draft.likePostLoading = false;
        draft.likePostDone = true;
        break;
      }
      case LIKE_POST_FAILURE: {
        draft.likePostLoading = false;
        draft.likePostError = action.error;
        break;
      }

      case UNLIKE_POST_REQUEST: {
        draft.unlikePostLoading = true;
        draft.unlikePostDone = false;
        draft.unlikePostError = null;
        break;
      }
      case UNLIKE_POST_SUCCESS: {
        const post = draft.mainPosts.find((v) => v.id === action.data.PostId);
        post.Likers = post.Likers.filter((v) => v.id !== action.data.UserId);
        draft.unlikePostLoading = false;
        draft.unlikePostDone = true;
        break;
      }
      case UNLIKE_POST_FAILURE:
        draft.unlikePostLoading = false;
        draft.unlikePostError = action.error;
        break;

      case LOAD_POSTS_REQUEST: {
        draft.loadPostsLoading = true;
        draft.loadPostsDone = false;
        draft.loadPostsError = null;
        break;
      }
      case LOAD_POSTS_SUCCESS: {
        draft.loadPostsLoading = false;
        draft.loadPostsDone = true;
        draft.mainPosts = draft.mainPosts.concat(action.data);
        draft.hasMorePosts = action.data.length === 10;
        break;
      }
      case LOAD_POSTS_FAILURE:
        draft.loadPostsLoading = false;
        draft.loadPostsError = action.error;
        break;

      case ADD_POST_REQUEST: {
        draft.addPostLoading = true;
        draft.addPostDone = false;
        draft.addPostError = null;
        break;
        // return { ...state, addPostLoading: true, addPostDone: false, addPostError: null };
      }
      case ADD_POST_SUCCESS: {
        draft.addPostLoading = false;
        draft.addPostDone = true;
        // draft.mainPosts = [dummyPost(action.data), ...state.mainPosts]; // 이렇게 하거나 혹은 아래와 같이 unshift사용 하면 배열값을 따로 정의안하고 (...이 사라 짐) 바로 사용가능 함
        // draft.mainPosts.unshift(dummyPost(action.data));
        draft.mainPosts.unshift(action.data);
        draft.imagePaths = [];
        break;
        // action.data.content, postId, userId;
        // return {
        //   ...state,
        //   mainPosts: [dummyPost(action.data), ...state.mainPosts],
        //   addPostLoading: false,
        //   addPostDone: true,
        // };
      }
      case ADD_POST_FAILURE:
        draft.addPostLoading = false;
        draft.addPostError = action.error;
        break;
      // return { ...state, addPostLoading: false, addPostError: action.error };
      case REMOVE_POST_REQUEST: {
        draft.removePostLoading = true;
        draft.removePostDone = false;
        draft.removePostError = null;
        break;
        // return { ...state, removePostLoading: true, removePostDone: false, removePostError: null };
      }
      case REMOVE_POST_SUCCESS: {
        // action.data.content, postId, userId;
        draft.removePostLoading = false;
        draft.removePostDone = true;
        draft.mainPosts = draft.mainPosts.filter((v) => v.id !== action.data.PostId);
        break;
        /*
        // return {
        //   ...state,
        //   mainPosts: state.mainPosts.filter((v) => v.id !== action.data),
        //   removePostLoading: false,
        //   removePostDone: true,
        // };
        */
      }
      case REMOVE_POST_FAILURE:
        draft.removePostLoading = false;
        draft.removePostError = true;
        break;
      // return { ...state, removePostLoading: false, removePostError: action.error };

      case ADD_COMMENT_REQUEST: {
        draft.addCommentLoading = true;
        draft.addCommentDone = false;
        draft.addCommentError = null;
        break;
        // return { ...state, addCommentLoading: true, addCommentDone: false, addCommentError: null };
      }

      //아래 부분 이해 안되면 게시글,댓글 saga 작성 하기 다시 체크. 11:30분 정도
      case ADD_COMMENT_SUCCESS: {
        const post = draft.mainPosts.find((v) => v.id === action.data.PostId);
        post.Comments.unshift(action.data);
        draft.addCommentLoading = false;
        draft.addCommentDone = true;
        break;
        //위는 immer를 통해서 불변성 신경안쓰고 코딩함. 아래는 기존 방식으로 불변성 신경쓰고 코딩한 내용
        // const postIndex = state.mainPosts.findIndex((v) => v.id === action.data.postId);
        // const post = { ...state.mainPosts[postIndex] };
        // post.Comments = [dummyComment(action.data.content), ...post.Comments];
        // const mainPosts = [...state.mainPosts];
        // mainPosts[postIndex] = post;
        // return {
        //   ...state,
        //   mainPosts,
        //   addCommentLoading: false,
        //   addCommentDone: true,
        // };
      }
      case ADD_COMMENT_FAILURE:
        draft.addCoomentLoading = false;
        draft.addCommentError = action.error;
        break;
      // return { ...state, addCommentLoading: false, addCommentError: action.error };

      default: {
        break;
        // return { ...state };
      }
    }
  });
};

export default reducer;
