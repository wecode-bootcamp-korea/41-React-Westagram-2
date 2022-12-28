import React, { useState } from 'react';
import Comment from './Comment';

export default function Article(props) {
  const [commentValue, setCommentValue] = useState('');
  const [commentArray, setCommentArray] = useState([]);

  const commentInput = event => {
    setCommentValue(event.target.value);
    console.log(event.target.value);
  };

  const feedComments = [...commentArray];
  const onEnter = event => {
    if (event.key === 'Enter' && commentValue.length > 0) {
      feedComments.push(commentValue);
      console.log(feedComments);
      setCommentArray(feedComments);
      console.log(setCommentArray);
      setCommentValue('');
    }
  };

  const clickBtn = event => {
    if (commentValue.length > 0) {
      feedComments.push(commentValue);
      console.log(feedComments);
      setCommentArray(feedComments);
      console.log(setCommentArray);
      setCommentValue('');
    }
  };

  return (
    <article>
      <div className="article_title_box">
        <div className="a_t_b1">
          <img
            className="profile_img"
            src="images/seonyong/profile_pic.png"
            alt="profile_img"
          />
          <div className="profile_text">
            <div className="profile_name1">AaBbCc</div>
            <div className="profile_name2">위코드 - 에이비씨</div>
          </div>
        </div>
        <div className="a_t_b2">
          <img className="three_dot" src="images/seonyong/dot.png" alt="" />
        </div>
      </div>
      <div className="feed_box">
        <img className="feed_img" src="images/seonyong/feed.png" alt="" />
      </div>
      <div className="react_icon_box">
        <div className="r_i_b1">
          <img
            className="red_heart_icon"
            src="images/seonyong/red_heart.png"
            alt="red_heart_icon"
          />
          <img
            className="comment_icon"
            src="images/seonyong/comment.png"
            alt="comment_icon"
          />
          <img
            className="share_icon"
            src="images/seonyong/share.png"
            alt="share_icon"
          />
        </div>
        <div className="r_i_b2">
          <img
            className="label_icon"
            src="images/seonyong/label.png"
            alt="label_icon"
          />
        </div>
      </div>
      <div className="react_like_box">
        <img
          className="r_l_pic"
          src="images/seonyong/profile_com.png"
          alt="like_profile"
        />
        <div className="r_l_text1">DdEeFf</div>
        <div className="r_l_text2">님</div>
        &nbsp;
        <div className="r_l_text3">외 44명</div>
        <div className="r_l_text4">이 좋아합니다</div>
      </div>
      <div className="feed_text_box">
        <ul className="f_t_b1">
          {commentArray.map((valueI, index) => (
            <Comment comment={valueI} key={index} />
          ))}
        </ul>
        <p className="feed_text_time">44분전</p>
      </div>
      <div className="commentContainer">
        <input
          className="commentWrap"
          type="text"
          placeholder="댓글 달기..."
          value={commentValue}
          onChange={commentInput}
          onKeyUp={onEnter}
        />
        <button className="commentBtn" onClick={clickBtn}>
          게시
        </button>
      </div>
    </article>
  );
}
