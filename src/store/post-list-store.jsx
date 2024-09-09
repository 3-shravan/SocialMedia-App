import React, { createContext, useReducer, useState, useEffect } from "react";
// import img from "../assets/img3.png";
// import shravanImg from "../assets/img4.jpg";

// import myImg from "../assets/img5.jpg";

export const PostList = createContext({
  postList: [],
  addPost: () => {},
  deletePost: () => {},
  isFetching: false,
  tab:"",
  setTab:()=>{},
});

const PostListReducer = (currPostList, action) => {
  let newPostList;

  if (action.type === "DELETE_POST") {
    newPostList = currPostList.filter(
      (mypost) => mypost.id !== action.payload.postId
    );
  } else if (action.type === "ADD_INITIAL_POSTS") {
    newPostList = action.payload.posts;
  } else if (action.type === "ADD_POST") {
    newPostList = [action.payload, ...currPostList];
  }

  return newPostList;
};

const PostListProvider = ({ children }) => {
  const [postList, dispatchPostList] = useReducer(PostListReducer, []);
  const [tab, setTab] = useState("Home");

  const [isFetching, setIsFetching] = useState(false);

  const initialPosts = (posts) => {
    dispatchPostList({
      type: "ADD_INITIAL_POSTS",
      payload: { posts },
    });
  };
 
  // title, desc, reactions, tags, imageUrl
  const addPost = (postdata) => {
    dispatchPostList({
      type: "ADD_POST",
      payload: postdata,

      // payload: {
      //   id: Date.now().toString(),
      //   title: title,
      //   image: imageUrl,
      //   body: desc,
      //   reactions: {
      //     likes: reactions.likes || 0,
      //   },
      //   tags: tags,
      // },


    });
  };

  const deletePost = (postId) => {
    dispatchPostList({
      type: "DELETE_POST",
      payload: { postId },
    });
  };

  useEffect(() => {
    const controller = new AbortController();
    const signal = controller.signal;

    setIsFetching(true);
    fetch("https://dummyjson.com/posts/search?q=love", { signal })
      .then((res) => res.json())
      .then((obj) => {
        initialPosts(obj.posts);
        setIsFetching(false);
      });

    // return () => {
    //   controller.abort();
    // };
  }, []);

  return (
    <PostList.Provider value={{ postList, isFetching, addPost, deletePost,tab,setTab }}>
      {children}
    </PostList.Provider>
  );
};

export default PostListProvider;

