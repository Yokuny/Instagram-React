import FeedPostContent from "./Feed-Componentes/FeedPostContent";
let post = [];

const addComment = (post, nickName, text) => {
  post.comments.push({ nickName, text });
};
const postContent = (personNickName, contentLink, postTitle, likeBy, andLikedBy, img = true) => {
  return { personNickName, img, contentLink, postTitle, likeBy, andLikedBy, comments: [] };
};
post.push(
  postContent(
    "runner",
    "https://mir-s3-cdn-cf.behance.net/project_modules/fs/bf2b5751890757.58fde1c257711.jpg",
    "Every person remembers some moment in their life where they witnessed some injustice, big or small, and looked away because the consequences of intervening seemed too intimidating. But there’s a limit to the amount of incivility and inequality and inhumanity that each individual can tolerate.",
    "_raskolnikov",
    " outras 16 pessoas"
  )
);
addComment(post[0], "bypast", "Looks amazing man! Congrats");

post.push(
  postContent(
    "yury.ostapchuk",
    "https://cdn-animation.artstation.com/p/video_sources/000/085/015/ship-360-02.mp4",
    "Humanity is mind-controlled and only slightly more conscious than your average zombie.",
    "yokuny",
    " outras 702 pessoas",
    false
  )
);
addComment(post[1], "yokuny", "What's your method for sharing the project with the client?");
addComment(post[1], "bedotarantino", "Need that");

post.push(
  postContent(
    "tanki x",
    "https://cdnb.artstation.com/p/assets/images/images/028/075/249/large/yury-ostapchuk-train-scene-07-scale-shot-warm.jpg?1593427044",
    "To live in the world without becoming aware of the meaning of the world is like wandering about in a great library without touching the books.",
    "fake.avatar",
    " outras 1M pessoas"
  )
);
addComment(post[2], "ghost.pz", "Such a fun project.");
addComment(post[2], "yokuny", "🔥🔥🔥");
addComment(post[2], "brianlocs", "WOW🔥👏");

const Feed = () => <FeedPostContent data={post} />;
export default Feed;
