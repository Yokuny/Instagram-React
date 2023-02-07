import React from "react";

const PostCardButtons = () => (
  <div className="postCardButtons">
    <div>
      <div id="h35f" onclick="coracao(this.id)">
        <ion-icon name="heart-outline"></ion-icon>
      </div>
      <div>
        <ion-icon name="chatbubble-outline"></ion-icon>
      </div>
      <div>
        <ion-icon name="paper-plane-outline"></ion-icon>
      </div>
    </div>
    <div className="bookMark" id="nyyn53" onclick="salvar(this.id)">
      <ion-icon name="bookmark-outline"></ion-icon>
    </div>
  </div>
);
export default PostCardButtons;
