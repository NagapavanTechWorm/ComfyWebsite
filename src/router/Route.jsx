import { createBrowserRouter } from "react-router-dom";
import {
  HomeLayout,
  Landing,
  Error,
  Products,
  SingleProduct,
  Cart,
  About,
  Register,
  Login,
  Checkout,
  Orders,
} from '../pages';
import { ErrorElement } from "../components";
import { loader as landingLoader } from "../pages/Landing";


const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayout/>,
    errorElement: <Error/>,
    children: [
      {
        index: true,
        element: <Landing/>,
        errorElement:<ErrorElement/>,
        loader:landingLoader
      },
      {
        path: "/products",
        element: <Products/>
      },
      {
        path: "/products/:id",  // Fix the typo here
        element: <SingleProduct/>
      },
      {
        path: "/cart",
        element: <Cart/>
      },
      {
        path: "/about",  // Fix the case here
        element: <About/>
      },
      {
        path: "/checkout",
        element: <Checkout/>
      },
      {
        path: "/orders",
        element: <Orders/>
      }
    ]
  },
  {
    path: "/login",
    element: <Login/>,
    errorElement: <Error/>
  },
  {
    path: "/register",
    element: <Register/>,
    errorElement: <Error/>
  }
]);

export default router;
