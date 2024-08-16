import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main.js";
import Home from "../Pages/home/Home.js";
import Menu from "../Pages/shop/Menu.js";
import Signup from "../Components/Signup.js";
import Login from "../Components/Login.js";
import UserProfile from "../Pages/dashboard/UserProfile.jsx";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/menu",
        element: <Menu />,
      },
      {
        path: "/signup",
        element: <Signup />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/update-profile",
        element: <UserProfile />,
      },
    ],
  },
]);

export default router;
