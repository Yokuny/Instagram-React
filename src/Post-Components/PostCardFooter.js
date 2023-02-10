import React, { useState } from "react";
import SocialBtnAndLike from "./SocialBtnAndLike";
import PostDescription from "./PostDescription";
import CommentField from "./CommentField";
import CommentInput from "./CommentInput";
const PostCardFooter = ({ type, src, yourName, yourTitle, comments, likedAmount, likeBy }) => {
  const [like, postLike] = useState(false);
  const [likeCount, newCountValue] = useState(parseInt(likedAmount));
  const [click, setClick] = useState(1);
  function newLike() {
    postLike(!like);
    if (like) {
      newCountValue(likeCount - 1);
    } else {
      newCountValue(likeCount + 1);
    }
  }
  const handleClick = () => {
    setClick(click + 1);
    if (click >= 2) {
      postLike(true);
    }
    setTimeout(setClick, 400, 1);
  };
  return (
    <>
      <div className="postContent">
        {type ? (
          <img onClick={handleClick} data-test="post-image" src={src} alt={src} />
        ) : (
          <video onClick={handleClick} data-test="post-image" loop muted autoPlay src={src}></video>
        )}
      </div>
      <div className="postCardFooter">
        <SocialBtnAndLike newLike={newLike} likeCount={likeCount} like={like} by={likeBy} />
        <section className="comments">
          <PostDescription user={yourName} title={yourTitle} />
          {comments.map((comment, index) => (
            <CommentField key={`comment${index}`} name={comment.nickName} comment={comment.text} />
          ))}
          <CommentInput />
        </section>
      </div>
    </>
  );
};
export default PostCardFooter;
