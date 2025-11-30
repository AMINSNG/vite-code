import { createBrowserRouter, RouterProvider } from "react-router";
import App from "./app/App";
import ThemeSwitch from "./components/theme-switch/ThemeSwitch";
import Themeswitchpage from "./pages/themeswitchpage";
import DynamicThemeswitch from "./pages/dynamicthemeswitch";

const roots = createBrowserRouter([
  { path: "/", element: <App /> },
  { path: "theme-switch", element: <Themeswitchpage /> },
  { path: "theme-switch/:userid", element: <DynamicThemeswitch /> },
]);
export default roots;
