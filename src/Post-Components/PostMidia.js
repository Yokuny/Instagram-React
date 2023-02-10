import React from "react";

const PostMidia = ({ handleClick, type, src, heart }) => (
  <div className="postContent">
    {type ? (
      <>
        <img data-test="post-image" onClick={handleClick} src={src} alt={src} />
        <img className={heart ? "displayLike" : "removeHearth"} src={"./assets/like-icon.svg"} alt={src} />
      </>
    ) : (
      <>
        <video
          data-test="post-image"
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
