import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import Home from "../pages/home/Home";
import Products from "../pages/products/Products";
import ProductDetails from "../pages/products/ProductDetails";
import DashboardLayout from "../layouts/DashboardLayout";
import DashboardDefault from "../pages/dashboard/DashboardDefault";
import Profile from "../pages/dashboard/Profile";
import EditProfile from "../pages/dashboard/EditProfile";

const router = createBrowserRouter([
    {
        path: '/',
        element: <MainLayout></MainLayout>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/products',
                loader: () => fetch('https://dummyjson.com/products'),
                element: <Products></Products>
            },
            {
                path: '/products/:id',
                loader: ({params}) => fetch(`https://dummyjson.com/products/${params.id}`),
                element: <ProductDetails></ProductDetails>
            },
            {
                path: '/dashboard',
                element: <DashboardLayout></DashboardLayout>,
                children: [
                    {
                        path: '/dashboard',
                        element: <DashboardDefault></DashboardDefault>
                    },
                    {
                        path: '/dashboard/profile',
                        element: <Profile></Profile>
                    },
                    {
                        path: '/dashboard/edit-profile',
                        element: <EditProfile></EditProfile>
                    }
                ]
            }
        ]
    },
])

export default router;