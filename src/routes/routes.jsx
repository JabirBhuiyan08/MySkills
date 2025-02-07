import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/main";
import Portal from "../portal/portal";
import Admin from "../admin/admin";
import ShowInfo from "../portal/ShowInfo";


export const router = createBrowserRouter([
    {
        path: "/",
        element: <Main></Main>,
        children: [
            // {
            //     path: "/",
            //     element: <Home></Home>,
            // },
            {
                path: "/",
                element: <Portal></Portal>,
            },
            {
                path: "/admin-portal",
                element: <Admin></Admin>,
            },
            {
                path: "/info",
                element: <ShowInfo></ShowInfo>,
            },
        ],
    },
]);