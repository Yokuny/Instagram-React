import React from "react";
const PostCardHeader = (props) => (
  <div className="postCardHeader">
    <div className="postOwnerName">
      <img id={`userPostImg${props.id}`} />
      <h4>{props.nickName}</h4>
    </div>
    <ion-icon name="ellipsis-horizontal"></ion-icon>
  </div>
);
export default PostCardHeader;
