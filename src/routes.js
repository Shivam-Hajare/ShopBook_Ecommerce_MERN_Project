import { createBrowserRouter } from "react-router-dom";
import ErrorComponent from "./components/ErrorComponent/ErrorComponent";
import ReactDOM from 'react-dom/client';
import App from "./App";
import Body from "./components/Body/Body";
import Product_Details from "./components/Product_Details/Product_Details.jsx";
import Cart from "./components/Cart/Cart.jsx";
import SignIn from "./components/SignIn/SignIn";
import SignUp from "./components/SignUp/SignUp";
import Shipping from "./components/Shipping/Shipping.jsx";
import PlaceOrder from "./components/PlaceOrder/PlaceOrder";
import OrderDetails from "./components/OrderDetails/OrderDetails";
import OrderHistory from "./components/OrderHistory/OrderHistory";
const appRouter = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        errorElement: <ErrorComponent />,
        children: [
            {
                path: "/",
                element: <Body/>
               
            },
            {
                path: "/signIn",
                element: <SignIn />
            },
            {
                path: "/signUp",
                element: <SignUp />
            },
            {
                path: "/cart",
                element: <Cart />
            },
            {
                path: "/product_details/:id",
                element: <Product_Details />
            },
            {
                path: "/shipping",
                element: <Shipping />
            },
            {
                path: "/placeOrder",
                element: <PlaceOrder />
            },
            {
                path: "/orderdetails",
                element: <OrderDetails />
            },
            {
                path: "/orderhistory",
                element: <OrderHistory />
            }
        ]
    },
])
export default appRouter;