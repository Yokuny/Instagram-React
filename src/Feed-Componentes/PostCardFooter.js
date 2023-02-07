import React from "react";
import PostCardButtons from "./PostCardButtons";
import PostCardLikes from "./PostCardLikes";
import PostDescription from "./PostDescription";
import CommentField from "./CommentField";
import CommentInput from "./CommentInput";
const PostCardFooter = () => (
  <div className="postCardFooter">
    <PostCardButtons />
    <PostCardLikes />
    <section className="comments">
      <PostDescription />
      <CommentField />
      <CommentInput />
    </section>
  </div>
);
export default PostCardFooter;
