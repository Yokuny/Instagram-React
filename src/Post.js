import React from "react";
import PostCardHeader from "./Feed-Componentes/PostCardHeader";
import PostContent from "./Feed-Componentes/PostContent";
import PostCardFooter from "./Feed-Componentes/PostCardFooter";
const FeedPostContent = (props) => (
  <main>
    {props.data.map((elementData, index) => (
      <section key={`postNumber${index}`} className="feed">
        <div className="postCard">
          <PostCardHeader nickName={elementData.personNickName} id={index + 1} />
          <PostContent type={elementData.img} src={elementData.contentLink} />
          <PostCardFooter
            likeBy={elementData.likeBy}
            andLikedBy={elementData.andLikedBy}
            comments={elementData.comments}
            yourName={elementData.personNickName}
            yourTitle={elementData.postTitle}
          />
        </div>
      </section>
    ))}
  </main>
);
export default FeedPostContent;