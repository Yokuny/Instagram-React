import React from "react";
import { createRoot } from "react-dom/client";
import HeaderBar from "./HeaderBar";
import SideBar from "./SideBar";
import Stories from "./Stories";
import Feed from "./Feed";
import MobileFooter from "./MobileFooter";
const root = createRoot(document.getElementById("root"));

const ElementBody = () => (
  <div>
    <HeaderBar />
    <main className="mainContentGrid">
      {/* side bar */}
      <SideBar />
      <main className="mainContent">
        {/* story */}
        <Stories />
        {/* feed */}
        <Feed />
        <MobileFooter />
      </main>
    </main>
  </div>
);

root.render(<ElementBody />);
