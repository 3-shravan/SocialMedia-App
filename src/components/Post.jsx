import React, { useContext } from "react";
import styles from "./Post.module.css";
import { RiChatDeleteFill } from "react-icons/ri";
import { FcLike } from "react-icons/fc";

import { PostList as PostListData } from "../store/post-list-store";

const Post = ({ post }) => {
  const { deletePost } = useContext(PostListData);

  return (
    <div className={styles.post}>
      <div className={styles.badge} onClick={() => deletePost(post.id)}>
        <RiChatDeleteFill />
      </div>
      <h2 className={styles.title}>{post.title}</h2>
      <img src={post.image} alt="" className={styles.image} />
      <div className={styles.likesContainer}>
        <p className={styles.likes}>
          <FcLike className={styles.likeButton} /> {""}
          Reacted by {post.reactions.likes} people
        </p>
      </div>

      <div className={styles.description}>{post.body}</div>
      <div className={styles.tags}>
        {post.tags.map((tag) => (
          <div key={tag} className={`badge text-bg-info`}>
            {tag}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Post;
