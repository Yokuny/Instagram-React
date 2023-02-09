import React from "react";
import PostCardHeader from "./Post-Components/PostCardHeader";
import PostContent from "./Post-Components/PostContent";
import PostCardFooter from "./Post-Components/PostCardFooter";
const Post = (props) => (
  <main>
    {props.data.map((elementData, index) => (
      <section data-test="post" key={`postNumber${index}`} className="feed">
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
export default Post;
