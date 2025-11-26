import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./styles/global.css";
import App from "./app/App.jsx";
import { createBrowserRouter, RouterProvider } from "react-router";
import roots from "./route.jsx"


createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={roots}></RouterProvider>
  </StrictMode>
);
