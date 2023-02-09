import React from "react";
const PostContent = ({ src, type }) => {
  return (
    <div className="postContent">
      {type ? (
        <img data-test="post-image" src={src} alt={src} />
      ) : (
        <video data-test="post-image" loop muted autoPlay src={src}></video>
      )}
    </div>
  );
};
export default PostContent;
