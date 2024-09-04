import React, { createContext, useReducer } from "react";
import img from "../assets/img3.png";
import shravanImg from "../assets/img4.jpg";

import myImg from "../assets/img5.jpg";

const DEFAULT_POSTS = [
  {
    id: "1",
    title: "View",
    image:img,
    desc: "I like being me",
    reactions: 37,
    tags: ["Vacation", "Peace", "Happy"],
  },
  {
    id: "2",
    title: "Scene",
    image:shravanImg,
    desc: "If tomorrow brings new hope I hope it brings you",
    reactions: 49,
    tags: ["Music", "Coding"],
  },
  {
    id: "3",
    title: "Scene",
    image:myImg,
    desc: "If tomorrow brings new hope I hope it brings you",
    reactions: 49,
    tags: ["Music", "Coding"],
  },
];


export const PostList = createContext({
  postList: [],
  addPost: () => {},
  deletePost: () => {},
});

const PostListReducer = (currPostList, action) => {
  
  let newPostList ;

  if (action.type === "DELETE_POST") {
    newPostList = currPostList.filter(
      (mypost) => mypost.id !== action.payload.postId
    )
    
  }else if (action.type === "ADD_POST"){
    newPostList=[action.payload,...currPostList];
  }

  return newPostList;
};

const PostListProvider = ({ children }) => {
  const [postList, dispatchPostList] = useReducer(
    PostListReducer,
    DEFAULT_POSTS
  );

  const addPost = (title,desc,reactions,tags,imageUrl) => {
    dispatchPostList({
      type:"ADD_POST",  
      payload:  {
        id: Date.now().toString(),
        title: title,
        image:imageUrl,
        desc: desc,
        reactions: reactions,
        tags: tags,
      }
    })
  };

  const deletePost = (postId) => {
    dispatchPostList({
      type: "DELETE_POST",
      payload: { postId },
    });
  };

  return (
    <PostList.Provider value={{ postList, addPost, deletePost }}>
      {children}
    </PostList.Provider>
  );
};

export default PostListProvider;
