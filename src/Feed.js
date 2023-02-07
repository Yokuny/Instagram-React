import React from "react";
import FeedPostContent from "./Feed-Componentes/FeedPostContent";
const Feed = () => (
  <main>
    <FeedPostContent />

    <section className="feed">
      <div className="postCard">
        <div className="postCardHeader">
          <div className="postOwnerName">
            <img id="userPostImg2" />
            <h4>yury.ostapchuk</h4>
          </div>
          <ion-icon name="ellipsis-horizontal"></ion-icon>
        </div>

        <div className="postContent">
          <video
            loop
            muted
            autoPlay
            src="https://cdn-animation.artstation.com/p/video_sources/000/085/015/ship-360-02.mp4"
          ></video>
        </div>

        <div className="postCardFooter">
          <div className="postCardButtons">
            <div>
              <div id="f4xx" onclick="coracao(this.id)">
                <ion-icon name="heart-outline"></ion-icon>
              </div>
              <div>
                <ion-icon name="chatbubble-outline"></ion-icon>
              </div>
              <div>
                <ion-icon name="paper-plane-outline"></ion-icon>
              </div>
            </div>
            <div className="bookMark" id="g3gh" onclick="salvar(this.id)">
              <ion-icon name="bookmark-outline"></ion-icon>
            </div>
          </div>
          <div className="postCardLikes">
            <img id="likeImgUser2" />
            <p>Curtido por</p>
            <h4>yokuny</h4>
            <p>e</p>
            <h4> outras 702 pessoas</h4>
          </div>

          <section className="comments">
            <div className="postDescription">
              <h4>yury.ostapchuk</h4>
              <p>Humanity is mind-controlled and only slightly more conscious than your average zombie.</p>
            </div>

            <div id="comentField-id-rrbbh">
              <div className="newComment">
                <div className="theComment">
                  <div>
                    <h4>yokuny</h4>
                    <p>What's your method for sharing the project with the client?</p>
                  </div>
                  <ion-icon name="heart-outline"></ion-icon>
                </div>
              </div>
              <div className="newComment">
                <div className="theComment">
                  <div>
                    <h4>bedotarantino</h4>
                    <p>Need that</p>
                  </div>
                  <ion-icon name="heart-outline"></ion-icon>
                </div>
              </div>
            </div>

            <div className="commentInput">
              <ion-icon name="happy-outline"></ion-icon>
              <input id="rrbbh" type="text" placeholder="Adicione um comentário..." />
              <h4 onclick="comentar('rrbbh')">Sends</h4>
            </div>
          </section>
        </div>
      </div>
    </section>

    <section className="feed">
      <div className="postCard">
        <div className="postCardHeader">
          <div className="postOwnerName">
            <img id="userPostImg3" />
            <h4>tanki x</h4>
          </div>
          <ion-icon name="ellipsis-horizontal"></ion-icon>
        </div>

        <div className="postContent">
          <img src="https://cdnb.artstation.com/p/assets/images/images/028/075/249/large/yury-ostapchuk-train-scene-07-scale-shot-warm.jpg?1593427044" />
        </div>

        <div className="postCardFooter">
          <div className="postCardButtons">
            <div>
              <div id="j46j" onclick="coracao(this.id)">
                <ion-icon name="heart-outline"></ion-icon>
              </div>
              <div>
                <ion-icon name="chatbubble-outline"></ion-icon>
              </div>
              <div>
                <ion-icon name="paper-plane-outline"></ion-icon>
              </div>
            </div>
            <div className="bookMark" id="hj6kk" onclick="salvar(this.id)">
              <ion-icon name="bookmark-outline"></ion-icon>
            </div>
          </div>
          <div className="postCardLikes">
            <img id="likeImgUser3" />
            <p>Curtido por </p>
            <h4>fake.avatar</h4>
            <p>e</p>
            <h4> outras 1M pessoas</h4>
          </div>

          <section className="comments">
            <div className="postDescription">
              <h4>tanki x</h4>
              <p>
                To live in the world without becoming aware of the meaning of the world is like wandering
                about in a great library without touching the books.
              </p>
            </div>

            <div id="comentField-id-xxo4jo5">
              <div className="newComment">
                <div className="theComment">
                  <div>
                    <h4>ghost.pz</h4>
                    <p>Such a fun project.</p>
                  </div>
                  <ion-icon name="heart-outline"></ion-icon>
                </div>
              </div>
              <div className="newComment">
                <div className="theComment">
                  <div>
                    <h4>yokuny</h4>
                    <p>🔥🔥🔥</p>
                  </div>
                  <ion-icon name="heart-outline"></ion-icon>
                </div>
              </div>
              <div className="newComment">
                <div className="theComment">
                  <div>
                    <h4>brianlocs</h4>
                    <p>WOW🔥👏</p>
                  </div>
                  <ion-icon name="heart-outline"></ion-icon>
                </div>
              </div>
            </div>

            <div className="commentInput">
              <ion-icon name="happy-outline"></ion-icon>
              <input id="xxo4jo5" type="text" placeholder="Adicione um comentário..." />
              <h4 onclick="comentar('xxo4jo5')">Sends</h4>
            </div>
          </section>
        </div>
      </div>
    </section>
  </main>
);
export default Feed;
