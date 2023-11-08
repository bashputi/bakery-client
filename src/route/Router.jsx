import { createBrowserRouter } from "react-router-dom";
import MainLayOut from "../layOut/Pages/MainLayOut"
import NotFound from "../layOut/Pages/NotFound";
import Home from "../layOut/Pages/Home";
import Register from "../layOut/Pages/login/Register";
import Login from "../layOut/Pages/login/Login";
import Blog from "../layOut/Pages/Blog";
import AllFoods from "../layOut/Pages/allItem/AllFoods";
import Details from "../layOut/Pages/foodDetails/Details";
import Order from "../layOut/Pages/foodDetails/Order";
import PrivateRoute from "../route/PrivateRoute";
import MyOrder from "../layOut/Pages/MyPage/MyOrder";
import MyAdded from "../layOut/Pages/MyPage/MyAdded";
import AddFood from "../layOut/Pages/MyPage/AddFood";
import Update from "../layOut/Pages/MyPage/Update";

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
        },
        {
          path: '/allfoods',
          element: <AllFoods></AllFoods>,
           loader: () => fetch('https://bakery-server-2uyebxf6v-rimeislam672-gmailcom.vercel.app/bakery')
        },
        {
          path:'/allfoods/details/:id',
          element: <Details></Details>,
          loader: ({params}) => fetch(`https://bakery-server-2uyebxf6v-rimeislam672-gmailcom.vercel.app/bakery/${params.id}`)
        },
        {
          path: 'order/:id',
          element: <PrivateRoute><Order></Order></PrivateRoute>,
           loader: ({params}) => fetch(`https://bakery-server-2uyebxf6v-rimeislam672-gmailcom.vercel.app/bakery/${params.id}`),
        },
        {
          path: '/myorder',
          element: <MyOrder></MyOrder>,
          loader: () => fetch('https://bakery-server-2uyebxf6v-rimeislam672-gmailcom.vercel.app/order')
        },
        {
          path: '/addeditems',
          element: <MyAdded></MyAdded>,
          loader: () => fetch('https://bakery-server-2uyebxf6v-rimeislam672-gmailcom.vercel.app/item')
        },
        {
          path: '/addfood',
          element: <AddFood></AddFood>
        },
        {
          path: '/addeditems/update/:id',
          element: <Update></Update>,
          loader: ({params}) => fetch(`https://bakery-server-2uyebxf6v-rimeislam672-gmailcom.vercel.app/item/${params.id}`)
        }
      ]
    },
  ]);

export default myRouter;