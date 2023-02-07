import React from "react";
const FriendStories = (props) => (
  <div>
    <div>
      <img src="./src/stories_background.jpg" />
      <img id={`storyImg${props.id}`} />
      <p>{props.name}</p>
    </div>
  </div>
);
export default FriendStories;