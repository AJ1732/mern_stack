import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import ErrorPage from "./anatomy/Layout/Main/Pages/Error/ErrorPage";
import HomePage from "./anatomy/Layout/Main/Pages/Home/HomePage";

export const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: '/',
        element: <HomePage />
      },
    ]
  }, 
]);