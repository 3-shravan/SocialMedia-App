import React, { useContext } from "react";
import styles from "./Sidebar.module.css";
import profileImg from "../assets/image1.jpg";
import { Link } from "react-router-dom";
import {PostList} from "../store/post-list-store";

//{ setTab, tab }
export const Sidebar = () => {

  const {tab,setTab}=useContext(PostList)

  return (
    <div className={`d-flex flex-column flex-shrink-1 p-2 ${styles.mysidebar}`}>
      <a
        href="/"
        className="d-flex align-items-center mb-3 mt-5 mb-md-0 me-md-auto text-white text-decoration-none"
      >
        <svg className="bi pe-none me-0" width="60" height="32">
          <use xlinkHref="#bootstrap" />
        </svg>
        <span className={`fs-4 ${styles.head}`}>Social Media</span>
      </a>

      <div className="dropdown">
        <a
          href="#"
          className="d-flex align-items-center justify-content-center text-white text-decoration-none  mt-4 dropdown-toggle"
          data-bs-toggle="dropdown"
          aria-expanded="false"
        >
          <img
            src={profileImg}
            alt=""
            width="32"
            height="32"
            className="rounded-circle me-2"
          />
          <strong>Shravan</strong>
        </a>
      </div>

      <div className={styles.tabsContainer}>
        <ul className={styles.ulList}>
          <li className={styles.lists}>
            <Link
              to="/"
              className={`${styles.tab} ${
                tab === "Home" && styles.sidebarBtn
              } `}
              aria-current="page"
              onClick={() => setTab("Home")}
            >
              Home
            </Link>
          </li>
          <li className={styles.lists}>
            <Link
              to="/create-post"
              className={`${styles.tab} ${
                tab === "Create Post" && styles.sidebarBtn
              } `}
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
