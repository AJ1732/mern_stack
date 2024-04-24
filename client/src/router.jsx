import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import ErrorPage from "./anatomy/Pages/Error/ErrorPage";

export const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <ErrorPage />,
  }, 
]);