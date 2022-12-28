import React from 'react';
import { useState } from 'react';

import Comment from './Comment';

function Article() {
  const [originalComments, setOriginalComments] = useState([]); // comment:변하지않는값.set- 앞 변수를 바꿔주는 함수  useState 사용하면
  const [comment, setComment] = useState('');
  const [isadit, setAdit] = useState(false);

  const HandleInput = event => {
    setComment(event.target.value);
  };
  const HandleEnter = event => {
    if (event.key === 'Enter') {
      HandleComment();
      setComment('');
    }
  };

  const HandleComment = () => {
    setOriginalComments([...originalComments, comment]); // [...]그대로 값을 받아와서 추가하는, 새로운 댓글을 추가해라
    setComment(''); // input 값 작동한다음 빈칸으로 만들어 줘야함 / 너 썼으면 빈칸으로 만들어라
  };

  const HandleEdit = () => {};

  return (
    <article>
      <div className="empty_box"></div>
      <div className="feed">
        <div className="feed_id">
          <div className="id_round">
            <div className="id_box">
              <div className="id_box_img">
                <img
                  className="id_img"
                  src="images/chaeyeon/peple01.png"
                  alt="내 프로필"
                />
              </div>
              <div className="id_container">
                <div className="id_name">cccdus</div>
                <div className="place">캔디짱</div>
              </div>
            </div>
            <div className="more_details">
              <img src="images/chaeyeon/option.PNG" alt="더보기" />
            </div>
          </div>
        </div>
        <div class="feed_picture">
          <img src="images/chaeyeon/candy2.jpeg" alt="피드 사진" />
        </div>
        {/* <!--feedbottom--> */}
        <div className="feed_bottom">
          <div className="emoticon_box">
            <div className="emoticon_box2">
              <div className="heart_box">
                <img
                  className="heart"
                  src="images/chaeyeon/like_good.png"
                  alt="하트"
                />
              </div>
              <div className="comment_box">
                <img
                  className="coment"
                  src="images/chaeyeon/comment.PNG"
                  alt="코멘트"
                />
              </div>
              <div className="direct_box">
                <img
                  className="direct"
                  src="images/chaeyeon/공유.png"
                  alt="공유"
                />
              </div>
            </div>
            <div className="bookmark_box">
              <img
                className="bookmark"
                src="images/chaeyeon/save.PNG"
                alt="저장"
              />
            </div>
          </div>
        </div>
        {/* <!--/feedbottom--> */}
        <div className="feed_like_box">
          <div className="feed_like_picture">
            <img
              className="feed_like_peolpe"
              src="images/chaeyeon/peple01.png"
              alt="캔디"
            />
          </div>
          <div className="feed_like">coco님 외 100명이 좋아합니다.</div>
        </div>
        <div className="feed_article">
          <div className="feed_article_box">
            <div className="comments_container">
              <div className="comments">캔디가 제일 이쁨❤️</div>

              <button onClick={HandleEdit}>✎</button>

              <div className="comments1">더 보기</div>
            </div>
            <div className="comments1">
              댓글 <span id="count"></span> 모두 보기
            </div>
            <div className="comments1_box">
              {/* // 똑같은 형식으로 올려지는 originalComments-배열반복 / 새로운 comment가 변수로 올라감 */}
              {originalComments.map(comment => (
                <Comment comment={comment} />
                // originalComments올라가는 모양
              ))}
            </div>

            <div className="new_comments"></div>
            <div className="comments2">2일 전</div>
          </div>
        </div>
        <div className="inputContainer">
          <div className="type_comment">
            <input
              className="inputBox"
              type="text"
              placeholder="댓글 달기..."
              value={comment}
              onChange={HandleInput}
              onKeyUp={HandleEnter}
            />
          </div>
          <span>
            {/* 게시누르면 올라가는 장소와 방법, 인픗값 발생 */}
            <button onClick={HandleComment} className="buttonBox" type="summit">
              게시
            </button>
          </span>
        </div>
      </div>
    </article>
  );
}

export default Article;
