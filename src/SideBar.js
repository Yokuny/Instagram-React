import React from "react";
import Usuario from "./Usuario";
import SuggestionsHead from "./SideBar-Componentes/SuggestionsHead";
import Sugestoes from "./Sugestoes";
import InstagramTermos from "./SideBar-Componentes/InstagramTermos";
import Copywriter from "./SideBar-Componentes/Copywriter";
const SideBar = () => (
  <div className="sideBar">
    <Usuario />
    <SuggestionsHead />
    <Sugestoes />
    <InstagramTermos />
    <Copywriter />
  </div>
);
export default SideBar;
