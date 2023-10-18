import React from 'react'
import {
  createBrowserRouter,
} from "react-router-dom";
import Main from '../Layout/Main';
import Category from '../Pages/Home/Category/Category';
import CategoryLayout from '../Layout/CategoryLayout';
import News from '../Pages/News/News';
import Login from '../Pages/Login/Login';
import Register from '../Pages/Register/Register';
import LoginLayout from '../Layout/LoginLayout';
import PrivateRoute from './PrivateRoute';




const router = createBrowserRouter([
  {
    ptha: "/",
    element: <LoginLayout></LoginLayout>,
    children: [
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
    ]
  },
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Category></Category>,
        loader: () => fetch("https://the-new-dragon-server-1cgrash0p-fayshal-ranas-projects.vercel.app/news")
      },
      {
        path: "/Category/:id",
        element: <Category></Category>,
        loader: ({ params }) => fetch(`https://the-new-dragon-server-1cgrash0p-fayshal-ranas-projects.vercel.app/categry/${params.id}`)
      },
    ]
  },
  {
    path: '/news',
    element: <CategoryLayout></CategoryLayout>,
    children: [
      {
        path: "/news/:id",
        element: <PrivateRoute> <News></News></PrivateRoute>,
        loader: ({ params }) => fetch(`https://the-new-dragon-server-1cgrash0p-fayshal-ranas-projects.vercel.app/news/${params.id}`)
      }
    ]
  },

]);


export default router
