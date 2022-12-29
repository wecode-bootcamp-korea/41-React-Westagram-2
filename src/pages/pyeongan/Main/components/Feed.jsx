import { useState, useEffect, React } from 'react';
import MainLayout from './MainLayout';

export default function Feed() {
  const [feed, setFeed] = useState([]);

  useEffect(() => {
    fetch('data/data.json')
      .then(res => res.json())
      .then(data => setFeed(data));
  }, []);

  return (
    <div className="feed">
      {feed.map(item => (
        <MainLayout item={item} />
      ))}
    </div>
  );
}
