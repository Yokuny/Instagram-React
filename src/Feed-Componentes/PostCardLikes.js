import React from "react";
const PostCardLikes = (props) => (
  <div className="postCardLikes">
    <img id="likeImgUser1" />
    <p>
      Curtido por<h4>{props.by}</h4>
      <b>e</b>
      <h4> {props.and}</h4>
    </p>
  </div>
);
export default PostCardLikes;
