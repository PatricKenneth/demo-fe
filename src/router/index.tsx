import { createBrowserRouter } from "react-router-dom";
import SignIn from "@pages/SignIn";
import ErrorPage from "@pages/Error";
import Home from "@pages/Home";

export const router = createBrowserRouter([
  {
    path: "/sign-in",
    element: <SignIn />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/",
    element: <Home />,
  },
]);
