import { createBrowserRouter } from "react-router-dom";
import ErrorHandaling from "../Error/ErrorHandaling";
import LayOut from "../LayOut/LayOut";
import Home from "../Home/Home";
import Statistics from "../Statistics/Statistics";
import DashBord from "../Dashbord/DashBord";
import ViewDItals from "../ViewDitals/ViewDItals";

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
                element: <Statistics></Statistics>
            },
            {
                path: '/dashbord',
                element: <DashBord></DashBord>
            },
            {
                path: '/viewDital/:product_id',
                element: <ViewDItals></ViewDItals>,
                loader: () => fetch('../product.json'),
            }

        ]

    },
]);

export default router