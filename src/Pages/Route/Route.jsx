import React from 'react';
import { createBrowserRouter } from 'react-router';
import Root from '../../Root/Root';
import Home from '../Home/Home';
import Installation from '../Installation/Installation';
import Apps from '../Apps/Apps';

const Route = createBrowserRouter([
    {
        path: "/",
        element: <Root />,
        children: [
            {
                index: true,
                path: "/",
                element: <Home/>
            },
            {
                path: "/apps",
                element: <Apps/>
            },
            {
                path: "/installation",
                element: <Installation/>
            }
        ]
    }

])

export default Route;