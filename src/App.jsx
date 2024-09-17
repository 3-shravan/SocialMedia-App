import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { RouterProvider, createBrowserRouter, Outlet } from "react-router-dom";
import CreatePost from "./components/CreatePost.jsx";
import PostList from "./components/PostList.jsx";
import Register from "./Auth/Register.jsx";
import Login from "./Auth/Login.jsx";
import LandingPage from "./pages/LandingPage.jsx";
import Home from "./pages/Home.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <LandingPage />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/register",
    element: <Register />,
  },
  {
    path: "/home",
    element: <Home />,
    children: [
      { path: "/home", element: <PostList /> },
      { path: "/home/create-post", element: <CreatePost /> },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;


// {
//   path: "/home",
//   element: (
//     <ProtectedRoute>
//       <Home />
//     </ProtectedRoute>
//   ), // Home and its children are now protected
//   children: [
//     { path: "/home", element: <PostList /> },
//     { path: "/home/create-post", element: <CreatePost /> },
//   ],
// },
