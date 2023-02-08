import React from "react";

const CommentField = (props) => (
  <div id="comentField-id-j56jg">
    <div className="newComment">
      <div className="theComment">
        <div>
          <h4>{props.name}</h4>
          <p>{props.comment}</p>
        </div>
        <ion-icon name="heart-outline"></ion-icon>
      </div>
    </div>
  </div>
);
export default CommentField;
