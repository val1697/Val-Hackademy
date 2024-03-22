import React from 'react'
import ReactDOM from 'react-dom/client'
import{
  createBrowserRouter,
  RouterProvider, 
} from 'react-router-dom'
import './index.css'
import Root from './routes/root.jsx'
import ErrorPage from './components/Error-Page.jsx'
import {LoginSignUp, Buscar, Lugares} from './components';
import { ThemeProvider } from "@material-tailwind/react";
 

const router = createBrowserRouter([
  {
    path: "/",
    element: <div> <Root /> </div>,
    errorElement: <ErrorPage />,
    children: [
      { path: "login", element: <LoginSignUp /> },
      { path: "buscar", element: <Buscar /> },
      { path: "error", element: <ErrorPage /> },
      {path: "lugares", element: <Lugares />},
    ],
  },	

]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ThemeProvider>
    <RouterProvider router={router} />
    </ThemeProvider> 
  </React.StrictMode>
   
   );
