import "./App.css";
import Header from "./components/Header";
import "bootstrap/dist/css/bootstrap.min.css";
import Sidebar from "./components/Sidebar";
import Footer from "./components/Footer";
import { useState } from "react";
import CreatePost from "./components/CreatePost";
import PostList from "./components/PostList";
import PostListProvider from "./store/post-list-store";
import { Outlet } from "react-router-dom";

function App() {
  // const [tab, setTab] = useState("Home");

  return (
    <PostListProvider>
      <div className="app-container">
        <div className="sidebar-container">
          <Sidebar
          //  setTab={setTab} tab={tab}
           ></Sidebar>
        </div>
        <div className="header-footer-container">
          <Header></Header>
          {/* {tab === "Home" ? <PostList /> : <CreatePost></CreatePost>} */}
          <Outlet />

          <Footer></Footer>
        </div>
      </div>
    </PostListProvider>
  );
}

export default App;
