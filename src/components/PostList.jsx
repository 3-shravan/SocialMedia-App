import React, { useContext, useEffect, useState } from "react";
import styles from "./PostList.module.css";
import { PostList as PostListData } from "../store/post-list-store";
import Post from "./Post";
import Welcome from "./Welcome";
import Loading from "./Loading";

const PostList = () => {
  const { postList, initialPosts } = useContext(PostListData);
  const [isFetching,setIsFetching]=useState(false);

  useEffect(() => {
    setIsFetching(true)
    fetch("https://dummyjson.com/posts/search?q=love")
      .then((res) => res.json())
      .then((obj) => {
        initialPosts([]);
        setIsFetching(false)
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
        setIsFetching(false)
      });
  },[]);

  return (
    <div className={styles.gridContainer}>
      {isFetching && <Loading/>}
      { !isFetching && postList.length === 0 && <Welcome />}
      {!isFetching && postList.map((post) => (
        <Post key={post.id} post={post} />
      ))}
    </div>
  );
};

export default PostList;
