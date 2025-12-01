import { createBrowserRouter } from "react-router-dom"
import Login from "../pages/Login"
import Register from "../pages/Register"
import Layout from "../pages/Layout"
import NavBar from "../components/NavBar"
import ItemsList from "../pages/items-list"
import CreateItem from "../components/create-item"
import Logout from "../pages/Logout"
import ItemDetail from "../pages/item-detail"
import MyBids from "../pages/my-bids"

export const router = createBrowserRouter( 
    [
        {
            path: "/login",
            element: <Login />
        },
        {
            path: "/logout",
            element: <Logout />
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
                {
                    path: "/item-detail/:id",
                    element: <ItemDetail />
                },
                {
                    path: "/my-bids",
                    element: <MyBids />
                },
            ]
        }
    ]
)