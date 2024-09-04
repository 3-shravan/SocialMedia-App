import React, { useContext } from "react";
import styles from "./PostList.module.css";
import { PostList as PostListData } from "../store/post-list-store";
import Post from "./Post";

const PostList = () => {
  const { postList } = useContext(PostListData);

  return (
    <div className={styles.gridContainer}>
      {postList.map((post) => (
        <Post key={post.id} post={post} />
      ))}
    </div>
  );
};

export default PostList;
