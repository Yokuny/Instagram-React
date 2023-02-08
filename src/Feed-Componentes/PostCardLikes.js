import React from "react";
const PostCardLikes = (props) => (
  <div className="postCardLikes">
    <img id="likeImgUser1" />
    <span>
      Curtido por<h4>{props.by}</h4>
      <p>e</p>
      <h4>{props.and}</h4>
    </span>
  </div>
);
export default PostCardLikes;
