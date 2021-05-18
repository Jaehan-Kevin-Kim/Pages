export const initialState = {
  mainPosts: [
    {
      id: 1,
      User: {
        id: 1,
        nickname: "Kevin",
      },
      content: "First Post #HashTag, #Express",
      // Images: [
      //   {
      //     src: "https://res.cloudinary.com/highereducation/image/upload/c_scale,w_750/f_auto,fl_lossy,q_auto:eco/v1532988864/TheBestColleges.org/images/study-notebooks.jpg",
      //   },
      //   {
      //     src: "https://www.fastweb.com/uploads/article_photo/photo/2161/crop380w_istock_000002193842xsmall-books.jpg",
      //   },
      //   {
      //     src: "https://www.insidehighered.com/sites/default/server_files/media/iStock-520374378.jpg",
      //   },
      // ],
      Images: [
        {
          src: "https://bookthumb-phinf.pstatic.net/cover/137/995/13799585.jpg?udate=20180726",
        },
        {
          src: "https://gimg.gilbut.co.kr/book/BN001958/rn_view_BN001958.jpg",
        },
        {
          src: "https://gimg.gilbut.co.kr/book/BN001998/rn_view_BN001998.jpg",
        },
      ],
      Comments: [
        {
          User: {
            nickname: "nero",
          },
          content: "Great post!",
        },
        {
          User: {
            nickname: "jaehan",
          },
          content: `it's really educational`,
        },
      ],
    },
  ],
  imagePaths: [],
  postAdded: false,
};

const ADD_POST = "ADD_POST";

export const addPost = {
  type: ADD_POST,
};

const dummyPost = {
  id: 2,
  User: {
    id: 1,
    nickname: "kevin",
  },
  content: "Dummy Data",
  Images: [],
  Comments: [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_POST: {
      return {
        ...state,
        mainPosts: [dummyPost, ...state.mainPosts],
        postAdded: true,
      };
    }

    default: {
      return { ...state };
    }
  }
};

export default reducer;
