import React, { useContext, useRef, useState } from "react";
import styles from "./CreatePost.module.css";
import { PostList as PostListData } from "../store/post-list-store";
import { useNavigate } from "react-router-dom";

const CreatePost = () => {
  const { addPost } = useContext(PostListData);
  const {setTab}=useContext(PostListData);
  const navigate=useNavigate();

  const [image, setImage] = useState(null);
  const titleElement = useRef();
  const descElement = useRef();
  const likesElement = useRef();
  const tagsElement = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();

    const title = titleElement.current.value;
    const desc = descElement.current.value;
    const reactions = {
      likes: parseInt(likesElement.current.value) || 0,
    };
    const tags = tagsElement.current.value.split(" ");

    const imageUrl = image ? URL.createObjectURL(image) : null;

    titleElement.current.value = "";
    descElement.current.value = "";
    likesElement.current.value = "";
    tagsElement.current.value = "";
    setImage(null);


    fetch("https://dummyjson.com/posts/add", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        userId: Math.ceil(Math.random() * 10),
        title: title,
        image: imageUrl,
        body: desc,
        reactions: {
          likes: reactions.likes || 0,
        },
        tags: tags,
      }),
    })
      .then((res) => res.json())
      .then((postdata) => {
        addPost(postdata);
        navigate("/home");
        setTab("Home");
      });
      

    // addPost(title, desc, reactions, tags, imageUrl);
  };

  return (
    <div className={styles.myContainer}>
      <div className={styles.createPost}>
        <h2 className={styles.createPostTitle}>Create a New Post</h2>
        <form onSubmit={handleSubmit}>
          <div className={styles.formGroup}>
            <label htmlFor="title">Title</label>
            <input type="text" id="title" ref={titleElement} required />
          </div>

          <div className={styles.formGroup}>
            <label htmlFor="desc">Description</label>
            <textarea id="desc" ref={descElement} required />
          </div>

          <div className={styles.formGroup}>
            <label htmlFor="likes">Likes</label>
            <input
              type="number"
              id="likes"
              ref={likesElement}
              placeholder="Add number of likes"
            />
          </div>

          <div className={styles.formGroup}>
            <label htmlFor="tags">Tags</label>
            <input
              type="text"
              id="tags"
              ref={tagsElement}
              placeholder="Add tags (e.g., News, Sports)"
            />
          </div>

          <div className={styles.formGroup}>
            <label htmlFor="image">Upload Image</label>
            <input
              type="file"
              id="image"
              accept="image/*"
              onChange={(e) => setImage(e.target.files[0])}
            />
          </div>

          <button type="submit" className={styles.submitButton}>
            POST
          </button>
        </form>
      </div>
    </div>
  );
};

export default CreatePost;
