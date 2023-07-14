import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home/Home";
import Root from "../components/Root/Root";
import ClippingPath from "../pages/Services/ClippingPath/ClippingPath";
import AboutUs from "../pages/AboutUs/AboutUs";
import Price from "../components/Price/Price";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Root></Root>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/clipping-path',
                element: <ClippingPath></ClippingPath>
            },
            {
                path: '/about-us',
                element:<AboutUs></AboutUs>
            },
            {
                path: '/price',
                element:<Price></Price>
            }
        ]
    }
])

export default router;