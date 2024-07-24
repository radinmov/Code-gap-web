import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { HomePage } from "./Pages/HomePage";
import { Login } from "./Pages/Login";
import { Register } from "./Pages/Register";




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


]);



export default function Router() {
  return (
    <RouterProvider router={routes} />
  );
}