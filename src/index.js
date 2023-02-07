import React from "react";
import { createRoot } from "react-dom/client";
import HeaderBar from "./HeaderBar";
import SideBar from "./SideBar";
import Stories from "./Stories";
import Feed from "./Feed";
import MobileFooter from "./MobileFooter";
const root = createRoot(document.getElementById("root"));

const ElementBody = () => (
  <>
    <HeaderBar />
    <main className="mainContentGrid">
      <SideBar />
      <main className="mainContent">
        <Stories />
        <Feed />
        <MobileFooter />
      </main>
    </main>
  </>
);

root.render(<ElementBody />);
