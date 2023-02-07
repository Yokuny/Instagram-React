import React from "react";
import ProfileCard from "./side bar componentes/ProfileCard";
import Sugestoes from "./side bar componentes/Sugestoes";
import UsuariosSugeridos from "./side bar componentes/UsuariosSugeridos";
import InstagramTermos from "./side bar componentes/InstagramTermos";
import Copywriter from "./side bar componentes/Copywriter";
const SideBar = () => (
  <div className="sideBar">
    <ProfileCard />
    <Sugestoes />
    {/*  */}
    <UsuariosSugeridos />
    {/*  */}
    <InstagramTermos />
    <Copywriter />
  </div>
);
export default SideBar;
