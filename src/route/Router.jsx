import { createBrowserRouter } from "react-router-dom";
import MainLayOut from "../layOut/Pages/MainLayOut"
import NotFound from "../layOut/Pages/NotFound";
import Home from "../layOut/Pages/Home";
import Register from "../layOut/Pages/login/Register";
import Login from "../layOut/Pages/login/Login";
import Blog from "../layOut/Pages/Blog";

const myRouter = createBrowserRouter([
    {
      path: "/",
      element: <MainLayOut></MainLayOut>,
      errorElement: <NotFound></NotFound>,
      children: [
        {
            path: '/',
            element: <Home></Home>
        },
        {
            path: '/register',
            element: <Register></Register>
        },
        {
            path: '/login',
            element: <Login></Login>
        },
        {
          path: '/blog',
          element: <Blog></Blog>
        }
      ]
    },
  ]);

export default myRouter;