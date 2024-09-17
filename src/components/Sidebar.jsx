import React, { useContext } from "react";
import styles from "./Sidebar.module.css";
import profileImg from "../assets/image1.jpg";
import { Link } from "react-router-dom";
import { PostList } from "../store/post-list-store";

export const Sidebar = () => {
  const { tab, setTab } = useContext(PostList);

  return (
    <div className={styles.sidebar}>
      <a href="/" className={styles.brand}>
        <span className={styles.head}>Social Media</span>
      </a>

      <div className={styles.profile}>
        <a href="#" className={styles.profileLink}>
          <img
            src={profileImg}
            alt="Profile"
            width="32"
            height="32"
            className={styles.profileImg}
          />
          <strong>Shravan</strong>
        </a>
      </div>

      <div className={styles.tabsContainer}>
        <ul className={styles.ulList}>
          <li className={styles.lists}>
            <Link
              to="/home"
              className={`${styles.tab} ${
                tab === "Home" && styles.sidebarBtn
              }`}
              onClick={() => setTab("Home")}
            >
              Home
            </Link>
          </li>
          <li className={styles.lists}>
            <Link
              to="/home/create-post"
              className={`${styles.tab} ${
                tab === "Create Post" && styles.sidebarBtn
              }`}
              onClick={() => setTab("Create Post")}
            >
              Create Post
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
