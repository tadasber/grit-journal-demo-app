import React from 'react'
import ReactDOM from 'react-dom/client'
import LandingPage from './components/LandingPage.tsx'
import RegisterPage from './components/RegisterPage.tsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

const rootRoute = createBrowserRouter([
  {
      path: "/",
      element: <LandingPage/>,
  },
  {
      path: "/register",
      element: <RegisterPage/>,
  }
  ]);


ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={rootRoute} />
  </React.StrictMode>,
)
