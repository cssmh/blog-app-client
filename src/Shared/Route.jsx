import { createBrowserRouter } from "react-router-dom";
import MainLayout from "./MainLayout";
import Home from "../Component/Home";
import Error from "../Component/Error";
import Login from "../Component/Login";
import Register from "../Component/Register";
import PrivateRoute from "./PrivateRoute";
import WriteBlog from "../Pages/WriteBlog";
import BlogDetails from "../Pages/BlogDetails";
import MyProfile from "../Component/MyProfile";

const Route = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    errorElement: <Error />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/login", element: <Login /> },
      { path: "/register", element: <Register /> },
      {
        path: "/write-blog",
        element: (
          <PrivateRoute>
            <WriteBlog />
          </PrivateRoute>
        ),
      },
      {
        path: "/blog/:id",
        element: <BlogDetails />,
      },
      {
        path: "/my-profile",
        element: (
          <PrivateRoute>
            <MyProfile />
          </PrivateRoute>
        ),
      },
    ],
  },
]);

export default Route;
