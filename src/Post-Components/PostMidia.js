import React from "react";

const PostMidia = ({ handleClick, type, src, heart }) => (
  <div className="postContent" data-test="post-image">
    {type ? (
      <>
        <img onClick={handleClick} src={src} alt={src} />
        <img className={heart ? "displayLike" : "removeHearth"} src={"./assets/like-icon.svg"} alt={src} />
      </>
    ) : (
      <>
        <video
          onClick={handleClick}
          className={heart ? "heart" : "noHeart"}
          loop
          muted
          autoPlay
          src={src}
        ></video>
        <img className={heart ? "displayLike" : "removeHearth"} src={"./assets/like-icon.svg"} alt={src} />
      </>
    )}
  </div>
);
export default PostMidia;
