import React from 'react';
import { createBrowserRouter } from 'react-router-dom';

import Login from '../pages/auth/login';
import Dashboard from '../pages/dashboard';

const Router = createBrowserRouter([
    {
        path: "/",
        element: <Dashboard />,
    },
    {
        path: "/login",
        element: <Login />,
    },
]);

export default Router;