import React, { useState, useEffect } from 'react';
import CommentBox from './CommentBox';

const Feeds = () => {
  const [feeds, setFeeds] = useState([]);

  useEffect(() => {
    fetch('data/feedData.json')
      .then((result) => result.json())
      .then((feeds) => setFeeds(feeds));
  }, []);

  return (
    <div className="feedsBox">
      {feeds.map((feeds) => (
        <div className="feeds">
          <article>
            <img src={feeds.img} alt="feed photo" />
            <div className="likeBox">
              <img className="like" src="/images/jeongeun/heart.png" />
              <img className="speech" src="/images/jeongeun/speech.png" />
            </div>
            <CommentBox />
          </article>
        </div>
      ))}
    </div>
  );
};

export default Feeds;
