import React from "react";
import ProfileCard from "./SideBar-Componentes/ProfileCard";
import Sugestoes from "./SideBar-Componentes/Sugestoes";
import UsuariosSugeridos from "./SideBar-Componentes/UsuariosSugeridos";
import InstagramTermos from "./SideBar-Componentes/InstagramTermos";
import Copywriter from "./SideBar-Componentes/Copywriter";
const SideBar = () => (
  <div className="sideBar">
    <ProfileCard />
    <Sugestoes />
    <UsuariosSugeridos />
    <InstagramTermos />
    <Copywriter />
  </div>
);
export default SideBar;
