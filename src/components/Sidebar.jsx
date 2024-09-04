import React from "react";
import styles from "./Sidebar.module.css";
import profileImg from "../assets/image1.jpg"

export const Sidebar = ({ setTab, tab }) => {
  return (
    <div className={`d-flex flex-column flex-shrink-1 p-2 ${styles.mysidebar}`}>
      <a
        href="/"
        class="d-flex align-items-center mb-3 mt-5 mb-md-0 me-md-auto text-white text-decoration-none"
      >
        <svg class="bi pe-none me-0" width="60" height="32">
          <use xlinkHref="#bootstrap" />
        </svg>
        <span class={`fs-4 ${styles.head}`}>Social Media</span>
      </a>
     

      <div class="dropdown">
        <a
          href="#"
          class="d-flex align-items-center justify-content-center text-white text-decoration-none  mt-4 dropdown-toggle"
          data-bs-toggle="dropdown"
          aria-expanded="false"
        >
          <img
            src={profileImg}
            alt=""
            width="32"
            height="32"
            class="rounded-circle me-2"
          />
          <strong>Shravan</strong>
        </a>
      </div>

      <div className={styles.tabsContainer}>
        <ul className={styles.ulList}>
          <li className={styles.lists}>
            <a
              href="#"
              className={`${styles.tab} ${
                tab === "Home" && styles.sidebarBtn
              } `}
              aria-current="page"
              onClick={() => setTab("Home")}
            >
              Home
            </a>
          </li>
          <li className={styles.lists}>
            <a
              href="#"
              className={`${styles.tab} ${
                tab === "Create Post" && styles.sidebarBtn
              } `}
              onClick={() => setTab("Create Post")}
            >
              Create Post
            </a>
          </li>
        </ul>
      </div>
     
    </div>
  );
};

export default Sidebar;
