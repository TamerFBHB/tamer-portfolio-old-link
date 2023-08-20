import ReactDOM from "react-dom/client";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import React from "react";
import "bootstrap-icons/font/bootstrap-icons.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import MainPage from "./pages/mainPage/MainPage";

const router =createBrowserRouter([
  {
    path: "/",
    element: <MainPage />,
    errorElement : <h1> Sorry .........................</h1>
  },

    
])

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
