import { createBrowserRouter } from "react-router-dom"
import Login from "../pages/Login"
import Register from "../pages/Register"
import Layout from "../pages/Layout"
import NavBar from "../components/NavBar"
import ItemsList from "../pages/items-list"
import CreateItem from "../pages/create-item"

export const router = createBrowserRouter( 
    [
        {
            path: "/login",
            element: <Login />
        },
        {
            path: "/register",
            element: <Register />
        },
        {
            path: "/",
            element: <Layout />,
            children: [
                {
                    index: true,
                    element: <ItemsList />
                },
                {
                    path: "/create-item",
                    element: <CreateItem />
                },
            ]
        }
    ]
)