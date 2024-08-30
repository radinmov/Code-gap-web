import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { HomePage } from "./Pages/HomePage";
import { City } from "./Pages/citys";




const routes = createBrowserRouter([
  {
    path: '/',
    element: <HomePage />
  },
  {
    path: '/citys',
    element: <City />
  },
]);



export default function Router() {
  return (
    <RouterProvider router={routes} />
  );
}