import { createBrowserRouter } from "react-router-dom";
import Login from "./views/Login";
import Signup from "./views/Signup";
import Users from "./views/Users";
import Notfound from "./views/not-found";
import DefaultLayout from "./components/DefaultLayout";
import GuestLayout from "./components/GuestLayout";

const router =  createBrowserRouter([
    {
        path:'/',
        element: <DefaultLayout/>,
        children: [
            {
                path: '/users',
                element:< Users />
            }
        ]
    },
    {
        path:'/',
        element: <GuestLayout/>,
        children:[
            {
                path: '/login',
                element:< Login />
            },
            {
                path: '/signup',
                element:< Signup />
            },
        ]
        
    },
    
    
])


export default router