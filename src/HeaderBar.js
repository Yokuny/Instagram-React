import React from "react";

const HeaderBar = () => (
  <header className="headerBar">
    <div className="headerBarSize">
      <div className="homeIcons">
        <ion-icon name="logo-instagram"></ion-icon>
        <div>
          <hr />
        </div>
        <img src="./assets/logo.png" alt="Instagram logo" />
      </div>
      <div className="instagramInput">
        <input type="text" placeholder="Pesquisar" />
      </div>
      <div className="rightIcons">
        <ion-icon name="paper-plane-outline"></ion-icon>
        <ion-icon name="compass-outline"></ion-icon>
        <ion-icon name="heart-outline"></ion-icon>
        <ion-icon name="person-outline"></ion-icon>
      </div>
    </div>
  </header>
);
export default HeaderBar;
