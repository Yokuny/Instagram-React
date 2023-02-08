import React from "react";
const PostContent = (props) => (
  <div className="postContent">
    {props.img ? <img src={props.src} /> : <video loop muted autoPlay src={props.src}></video>}
  </div>
);
export default PostContent;
