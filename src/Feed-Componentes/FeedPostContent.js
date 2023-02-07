import React from "react";
import PostCardHeader from "./PostCardHeader";
import PostContent from "./PostContent";
import PostCardFooter from "./PostCardFooter";
const FeedPostContent = () => (
  <section className="feed">
    <div className="postCard">
      <PostCardHeader />
      <PostContent />
      <PostCardFooter />
    </div>
  </section>
);
export default FeedPostContent;
