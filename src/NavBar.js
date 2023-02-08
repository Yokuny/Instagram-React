import React from "react";
import HomeIcons from "./HeaderBar-Componentes/HomeIcons";
import InstagramSearchBar from "./HeaderBar-Componentes/InstagramSearchBar";
import RightIcons from "./HeaderBar-Componentes/RightIcons";

const NavBar = () => (
  <header className="headerBar">
    <div className="headerBarSize">
      <HomeIcons />
      <InstagramSearchBar />
      <RightIcons />
    </div>
  </header>
);
export default NavBar;
