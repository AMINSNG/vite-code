import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./styles/global.css";
import App from "./app/App.jsx";
import { createBrowserRouter, RouterProvider } from "react-router";

const roots = createBrowserRouter([{path:'home',element:<App/>}]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={roots}>


    </RouterProvider>
  </StrictMode>
);
