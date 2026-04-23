import React from 'react';
import { createBrowserRouter } from 'react-router';
import Root from '../../Root/Root';
import Home from '../Home/Home';
import Installation from '../Installation/Installation';
import Apps from '../Apps/Apps';
import AppDetails from '../../Components/AppDetails/AppDetails';



const Route = createBrowserRouter([
    {
        path: "/",
        element: <Root />,
        children: [
            {
                index: true,
                path: "/",
                loader:()=>fetch("/public/apps.json"),
                element: <Home/>
            },
            {
                path: "/apps",
                element: <Apps/>
            },
            {
                path: "/installation",
                element: <Installation/>
            },
            {
                path:"appdetails/:id",
                loader:()=>fetch("/public/apps.json"),
                Component: AppDetails
            }
        ]
    }

])

export default Route;