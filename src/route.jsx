import { createBrowserRouter, RouterProvider } from "react-router";
import App from "./app/App";
import ThemeSwitch from "./components/theme-switch/ThemeSwitch";
import Themeswitchpage from "./pages/themeswitch";

const roots = createBrowserRouter([
  { path: "/", element: <App /> },
  { path: "theme_switch", element: <Themeswitchpage /> },
  {}
]);
export default roots;
