import React from "react";
import ThemeSwitch from "../components/theme-switch/ThemeSwitch";
import { Link } from "react-router";

function Themeswitchpage() {
  return (
    <div>
      <div>this is theme</div>
      <Link to={"/"}>back to home</Link>
      <div>
        <ThemeSwitch />
      </div>
    </div>
  );
}

export default Themeswitchpage;
