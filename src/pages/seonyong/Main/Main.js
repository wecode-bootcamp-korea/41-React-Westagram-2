import React, { useEffect, useState } from 'react';
import Nav from '../../../components/Nav/Nav';
import Article from '../Main/Components/Article';
import Aside from '../Main/Components/Aside';
import './Main.scss';

export default function MainS() {
  const [userFeed, setUserFeed] = useState([]);

  useEffect(() => {
    fetch('data/FeedData.json')
      .then(result => result.json())
      .then(data => setUserFeed(data));
  }, []);

  return (
    <>
      <Nav />
      <main>
        <div className="feeds">
          {userFeed.map((value, key) => {
            return <Article userFeed={value} key={key} />;
          })}
        </div>
        <Aside />
      </main>
    </>
  );
}
