import {createBrowserRouter} from "react-router-dom";
import Layout from "../components/layout/Layout.tsx";
import Main from "../pages/main";

export const router = createBrowserRouter([
    {
        element: <Layout/>,
        children: [
            {
                path: '/',
                element: <Main/>,
            },
            {
                path: '/best',
            },
            {
                path: '/latest',
            }
        ],
    }
])