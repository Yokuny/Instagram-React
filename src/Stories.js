import React from "react";
import FriendStories from "./Stories-Componentes/FriendStories";

let FriendsNameList = [];
FriendsNameList.push("jade_picon");
FriendsNameList.push("thai.d.mel");
FriendsNameList.push("ingrid_gui");
FriendsNameList.push("gio.an");
FriendsNameList.push("alexandre_he");
FriendsNameList.push("mari.peso");
FriendsNameList.push("ju luziê");
FriendsNameList.push("lu_ferreira");

const Stories = () => (
  <nav className="stories">
    <div className="floatingStorieButton">
      <ion-icon name="chevron-forward-circle"></ion-icon>
    </div>
    <div id="storiesSize">
      {FriendsNameList.map((element, index) => (
        <FriendStories key={`FriendStorie${index}`} name={element} id={index + 1} />
      ))}
    </div>
  </nav>
);
export default Stories;
