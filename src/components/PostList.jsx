import React, { useContext, useEffect, useState } from "react";
import styles from "./PostList.module.css";
import { PostList as PostListData } from "../store/post-list-store";
import Post from "./Post";
import Welcome from "./Welcome";
import Loading from "./Loading";

const PostList = () => {
  const { postList, isFetching } = useContext(PostListData);
 

  return (
    <div className={styles.gridContainer}>
      {isFetching && <Loading />}
      {!isFetching && postList.length === 0 && <Welcome />}
      {!isFetching &&
        postList.map((post) => <Post key={post.id} post={post} />)}
    </div>
  );
};

export default PostList;
