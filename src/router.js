import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { HomePage } from "./Pages/HomePage";
import { Login } from "./Pages/Login";
import { Register } from "./Pages/Register";
import { City } from "./Pages/citys";
import Header from "./Componets/Header";
import  { Footer } from "./Componets/Footer";




const routes = createBrowserRouter([
  {
    path: '/',
    element: <HomePage />
  },
  {
    path: '/Login',
    element: <Login />
  },
  {
    path: '/Register',
    element: <Register />
  },
  {
    path: '/citys',
    element: <City />
  },
  {
    path: '/fo',
    element: <Footer />
  },


]);



export default function Router() {
  return (
    <RouterProvider router={routes} />
  );
}