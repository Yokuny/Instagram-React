import React from "react";

const PostDescription = (props) => (
  <div className="postDescription">
    <h4>{props.user}</h4>
    <p>{props.title}</p>
  </div>
);
export default PostDescription;
