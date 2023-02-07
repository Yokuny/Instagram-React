import React from "react";

const HeaderBar = () => (
  <header class="headerBar">
    <div class="headerBarSize">
      <div class="homeIcons">
        <ion-icon name="logo-instagram"></ion-icon>
        <div>
          <hr />
        </div>
        <img src="./assets/logo.png" alt="" srcset="" />
      </div>
      <div class="instagramInput">
        <input type="text" name="" id="" placeholder="Pesquisar" />
      </div>
      <div class="rightIcons">
        <ion-icon name="paper-plane-outline"></ion-icon>
        <ion-icon name="compass-outline"></ion-icon>
        <ion-icon name="heart-outline"></ion-icon>
        <ion-icon name="person-outline"></ion-icon>
      </div>
    </div>
  </header>
);
export default HeaderBar;
