import { createBrowserRouter, RouterProvider } from "react-router";
import App from "./app/App";
import ThemeSwitch from "./components/theme-switch/ThemeSwitch";
import Themeswitchpage from "./pages/themeswitchpage";
import DynamicThemeswitch from "./pages/dynamicthemeswitch";
import CharacterSearch from "./features/character-search/CharacterSearch";
import FontSizeAdjuster from "./components/font-size/FontSizeAdjuster";
import Dynamiccharectersearch from "./pages/dynamicchrectersearch";

const roots = createBrowserRouter([
  { path: "/", element: <App /> },
  { path: "theme-switch", element: <Themeswitchpage /> },
  { path: "theme-switch/:userid", element: <DynamicThemeswitch /> },
  { path: "charecter-search", element: <CharacterSearch /> },
  { path: "charecter-search/:userid", element: <Dynamiccharectersearch /> },
  { path: "font-size", element: <FontSizeAdjuster /> },
]);
export default roots;
