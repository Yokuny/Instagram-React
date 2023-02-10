import React, { useState } from "react";
import SocialBtnAndLike from "./SocialBtnAndLike";
import PostDescription from "./PostDescription";
import CommentField from "./CommentField";
import CommentInput from "./CommentInput";
const PostCardFooter = ({ type, src, yourName, yourTitle, comments, likedAmount, likeBy }) => {
  const [like, postLike] = useState(false);
  const [likeCount, newCountValue] = useState(0);
  const [click, setClick] = useState(1);
  const [heart, setHeart] = useState(false);

  function newLike() {
    postLike(!like);
    if (like) {
      newCountValue(0);
    } else {
      newCountValue(1);
    }
  }
  const handleClick = () => {
    setClick(click + 1);
    if (click >= 2) {
      postLike(true);
      newCountValue(1);
      setHeart(true);
      setTimeout(setHeart, 300, false);
      //erro aqui e na class. ta faltando pensar em forma de deixar a img estatica e o coração vindo em cima
      //feed css e likeAnimation css
    }
    setTimeout(setClick, 400, 1);
  };
  return (
    <>
      <div className="postContent">
        {type ? (
          <img
            onClick={handleClick}
            className={heart ? "heart" : "noHeart"}
            data-test="post-image"
            src={src}
            alt={src}
          />
        ) : (
          <video
            onClick={handleClick}
            className={heart ? "heart" : "noHeart"}
            data-test="post-image"
            loop
            muted
            autoPlay
            src={src}
          ></video>
        )}
      </div>
      <div className="postCardFooter">
        <SocialBtnAndLike
          newLike={newLike}
          likeCount={parseInt(likedAmount) + likeCount}
          like={like}
          by={likeBy}
        />
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
