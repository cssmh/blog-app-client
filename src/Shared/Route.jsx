import { createBrowserRouter } from "react-router-dom";
import MainLayout from "./MainLayout";
import Home from "../Component/Home";
import Error from "../Component/Error";

const Route = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    errorElement: <Error />,
    children: [{ path: "/", element: <Home /> }],
  },
]);

export default Route;
