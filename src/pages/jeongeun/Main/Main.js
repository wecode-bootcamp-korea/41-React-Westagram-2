import React, { useState } from 'react';
import Style from './Main.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faCompass, faHeart, faUser } from '@fortawesome/free-solid-svg-icons';
import Comments from './Comments';

const MainJ = () => {
  const [comment, setComment] = useState('');
  const saveComment = e => {
    setComment(e.target.value);
  };

  const [commentArray, setCommentArray] = useState([]);
  const commentElement = commentArray.map((comment, index) => (
    <li className="newComment" key={index}>
      <Comments id={comment.id} text={comment} />
    </li>
  ));

  const handleClick = e => {
    e.preventDefault();
    setCommentArray(commentList => [...commentList, comment]);
    setComment('');
  };

  const keyDown = e => {
    if (e.key === 'Enter') {
      setCommentArray(commentList => [...commentList, comment]);
      setComment('');
    }
  };
  const remove = e => {
    remove(handleClick(e));
  };

  return (
    <div className="content">
      <nav>
        <div className="instaicon">
          <div className="logo">
            <FontAwesomeIcon icon="fa-brands fa-instagram" />
          </div>
          <a href="#">Westagram</a>
        </div>
        <input className="search" type="text" placeholder="검색" />
        <div className="icon">
          <div className="icon1">
            <FontAwesomeIcon icon="fa-compass" />
          </div>
          <div className="icon2">
            <FontAwesomeIcon icon="fa-heart" />
          </div>
          <div className="icon3">
            <FontAwesomeIcon icon="fa-user" />
          </div>
        </div>
      </nav>

      <main>
        <div className="feeds">
          <article>
            <img src="/images/jeongeun/westa.jpg" alt="feed photo" />
            <div className="likeBox">
              <img className="like" src="/images/jeongeun/heart.png" />
              <img className="speech" src="/images/jeongeun/speech.png" />
            </div>
            <div className="commentbox">
              <ul className="allcomment">{commentElement} </ul>
            </div>
            <div className="inputcomment">
              <input
                onChange={saveComment}
                onKeyDown={keyDown}
                value={comment}
                className="comment"
                type="text"
                placeholder="댓글을 입력하세요"
              />
              <button onClick={handleClick} className="btn" type="button">
                게시
              </button>
            </div>
          </article>
        </div>
        <div className="main-right">
          <div className="userProfile">
            <img src="/images/jeongeun/cat.jpg" />
            <span> username</span>
            <button className="followButton" type="button">
              팔로우
            </button>
          </div>
          <div className="userProfile2"></div>
        </div>
      </main>
    </div>
  );
};
export default MainJ;
