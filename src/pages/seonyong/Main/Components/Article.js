import React from "react";

function Article() {
  return (
    <>
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
            <img className="three_dot" src="images/seonyong/dot.png" />
          </div>
        </div>
        <div className="feed_box">
          <img className="feed_img" src="images/seonyong/feed.png" />
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
            <li>
              <strong>GgHhIi</strong>
              Five Trees
            </li>
            <li>
              <strong>JjKkLl</strong>
              Let it Snow~!
            </li>
            <li className="feed_text_time">44분전</li>
          </ul>
          <div className="f_t_b2">
            <img
              className="f_t_b_img"
              src="images/seonyong/heart.png"
              alt="comment_like_icon"
            />
          </div>
        </div>
        <div className="comment_box">
          <input className="comment" type="text" placeholder="댓글 달기..." />
          <button>게시</button>
        </div>
      </article>
    </>
  );
}

export default Article;
