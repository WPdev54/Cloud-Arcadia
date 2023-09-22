import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import App from './App.jsx';
import Login from './Components/Login.jsx';
import Register from './Components/Register.jsx';
import './index.css';
import AnimatedCursor from "react-animated-cursor";
import Feature from './Pages/Feature.jsx';
import Price from './Pages/Price.jsx';
import Abouts from './Pages/Abouts.jsx';

<AnimatedCursor />

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/features",
    element: <Feature />
  },
  {
    path:'/register',
    element: <Register />
  },
  {
    path:'/pricing',
    element:<Price />
  },
  {
    path:'/about',
    element:<Abouts />
  },
  {
    path:'/login',
    element: <Login />
  }

]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
        <RouterProvider router={router} />
  </React.StrictMode>,
)
