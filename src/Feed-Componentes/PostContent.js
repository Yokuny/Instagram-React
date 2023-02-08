import React from "react";
const PostContent = ({ src, type }) => {
  return (
    <div className="postContent">
      {type ? <img src={src} alt={src} /> : <video loop muted autoPlay src={src}></video>}
    </div>
  );
};
export default PostContent;
