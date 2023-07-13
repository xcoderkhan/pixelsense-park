import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home/Home";
import Root from "../components/Root/Root";
import ClippingPath from "../pages/Services/ClippingPath/ClippingPath";

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
            }
        ]
    }
])

export default router;