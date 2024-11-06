import { createBrowserRouter, Navigate } from "react-router-dom";
import ErrorHandaling from "../Error/ErrorHandaling";
import LayOut from "../LayOut/LayOut";
import Home from "../Home/Home";
import Statistics from "../Statistics/Statistics";
import DashBord from "../Dashbord/DashBord";
import ViewDItals from "../ViewDitals/ViewDItals";
import Cart from "../card/Cart";
import Wislist from "../Wislist/Wislist";
import About from "../About/About";


const router = createBrowserRouter([
    {
        path: "/",
        element: <LayOut></LayOut>,
        errorElement: <ErrorHandaling></ErrorHandaling>,
        children: [
            {
                path: '/',
                element: <Home></Home>,
                loader: () => fetch('../product.json'),
            },
            {
                path: '/statiks',
                element: <Statistics></Statistics>,
                loader: () => fetch('../product.json'),
            },
            {
                path: '/dashbord',
                element: <DashBord></DashBord>,
                loader: () => fetch('../product.json'),
                children: [
                    {
                        path: '',
                        element: <Navigate to={'cart'}></Navigate>,
                    },
                    {
                        path: 'cart',
                        element: <Cart></Cart>
                    },
                    {
                        path: 'wislist',
                        element: <Wislist></Wislist>
                    }
                ]
            },
            {
                path: '/viewDital/:product_id',
                element: <ViewDItals></ViewDItals>,
                loader: () => fetch('../product.json'),
            },
            {
                path: '/aobut',
                element: <About></About>
            }

        ]

    },
]);

export default router