import { createBrowserRouter } from "react-router-dom";
import App from "./App.jsx";
import Error from "./Conponents/ErrorPage/Error.jsx";
import Home from "./Conponents/Home/Home/Home.jsx";
import AddProduct from "./Conponents/pages/Product/AddProduct.jsx";
import MyCart from "./Conponents/pages/My Cart/My Cart.jsx";
import Contact from "./Conponents/pages/Contact/Contact.jsx";
import About from "./Conponents/pages/About/About.jsx";
import LogIn from "./Conponents/Home/Login/LogIn.jsx";
import Registar from "./Conponents/Home/Registar/Registar.jsx";
import Footer from "./Conponents/Home/Footer/Footer.jsx";
import Update from "./Conponents/pages/My Cart/Update.jsx";
import Details from "./Conponents/pages/Details/Details.jsx";
import UpdateDetails from "./Conponents/pages/Details/UpdateDetails.jsx";
import PrivateRoute from "./Conponents/pages/privateRoute/PrivateRoute.jsx";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <App />,

    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/addProduct",
        element: (
          <PrivateRoute>
            <AddProduct />
          </PrivateRoute>
        ),
      },
      {
        path: "/myCart",
        element: (
          <PrivateRoute>
            <MyCart />
          </PrivateRoute>
        ),
        loader: () => fetch(`http://localhost:5000/brand`),
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/update/:id",
        element: <Update />,
        loader: ({ params }) =>
          fetch(`http://localhost:5000/brand/${params.id}`),
      },
      {
        path: "/details/:brandName",
        element: <Details />,
      },
      {
        path: "/updateDetail/:id",
        element: <UpdateDetails />,
        loader: () => fetch(`http://localhost:5000/brand`),
      },
      {
        path: "/login",
        element: <LogIn />,
      },
      {
        path: "/registar",
        element: <Registar />,
      },
      {
        path: "/footer",
        element: <Footer />,
      },
    ],
  },
]);

export default routes;
