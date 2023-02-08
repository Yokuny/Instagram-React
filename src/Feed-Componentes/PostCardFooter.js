import React from "react";
import PostCardButtons from "./PostCardButtons";
import PostCardLikes from "./PostCardLikes";
import PostDescription from "./PostDescription";
import CommentField from "./CommentField";
import CommentInput from "./CommentInput";
const PostCardFooter = (props) => (
  <div className="postCardFooter">
    <PostCardButtons />
    <PostCardLikes by={props.likeBy} and={props.andLikedBy} />
    <section className="comments">
      <PostDescription user={props.yourName} title={props.yourTitle} />
      {props.comments.map((comment, index) => (
        <CommentField key={`comment${index}`} name={comment.nickName} comment={comment.text} />
      ))}
      <CommentInput />
    </section>
  </div>
);
export default PostCardFooter;
