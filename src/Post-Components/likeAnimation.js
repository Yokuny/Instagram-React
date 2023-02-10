import React, { useState } from "react";
const Heart = ({ show }) => {
  const [fadeOut, setFadeOut] = useState(false);
  setTimeout(() => {
    setFadeOut(true);
  }, 300);
  return (
    <div className={`heart-container ${show ? "" : "hidden"} ${fadeOut ? "heart-fade-out" : ""}`}>
      <div className="heart" />
    </div>
  );
};
export default Heart;
