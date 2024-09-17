import React from "react";
import Sidebar from "../components/Sidebar";
import Footer from "../components/Footer";
import { Outlet } from "react-router-dom";
import PostListProvider from "../store/post-list-store";
import styles from "./Home.module.css"; 

function Home() {
  return (
    <PostListProvider>
      <div className={styles.homeContainer}>
        <div className={styles.sidebarContainer}>
          <Sidebar />
        </div>
        <div className={styles.contentContainer}>
          <Outlet />
          <Footer />
        </div>
      </div>
    </PostListProvider>
  );
}

export default Home;
