import { createBrowserRouter } from "react-router-dom";
import ErrorComponent from "./components/ErrorComponent/ErrorComponent";
import ReactDOM from 'react-dom/client';
import App from "./App";
import Body from "./components/Body/Body";
import About from "./components/About/About.jsx"
import Contact from "./components/Contact/Contact.jsx"
import Product_Details from "./components/Product_Details/Product_Details.jsx";
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
                path: "/about",
                element: <About />
            },
            {
                path: "/contact",
                element: <Contact />
            },
            {
                path: "/product_details/:id",
                element: <Product_Details />
            }
        ]
    },
])
export default appRouter;