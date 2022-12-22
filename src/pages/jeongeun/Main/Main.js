import React from 'react';
import Style from './Main.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faCompass, faHeart, faUser } from '@fortawesome/free-solid-svg-icons';

export default function MainJ() {
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
              <ul className="allcomment"></ul>
            </div>
            <div className="inputcomment">
              <input
                className="comment"
                type="text"
                placeholder="댓글을 입력하세요"
              />
              <button className="btn" type="button">
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
}
