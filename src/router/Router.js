import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main.js";
import Home from "../Pages/home/Home.js";
import Menu from "../Pages/shop/Menu.js";
import Signup from "../Components/Signup.js";
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
    ],
  },
]);

export default router;
