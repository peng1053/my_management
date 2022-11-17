import React from 'react';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { routes } from './routes';

const RouterView = () => {

  return (
    <RouterProvider router={createBrowserRouter(routes)} />
  );
};

export default RouterView;
