import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import {LoginPage} from "../views/pages/auth/LoginPage";
import {RegisterPage} from "../views/pages/auth/RegisterPage";

export const AppRoute = (props) => {
    const route = createBrowserRouter([
            {
                path: '/login',
                element: <LoginPage/>
            },
            {
                path: '/register',
                element: <RegisterPage/>
            }
        ]
    )
    return (
        <RouterProvider router={route}/>
    )
}