import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import Home from "../pages/home/Home";
import Products from "../pages/products/Products";
import Dashboard from "../pages/dashboard/Dashboard";
import ProductDetails from "../pages/products/ProductDetails";

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
                element: <Dashboard></Dashboard>
            }
        ]
    },
])

export default router;