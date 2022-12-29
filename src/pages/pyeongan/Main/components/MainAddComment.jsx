import { React, useState, useEffect } from 'react';
import '../Main.scss';

export default function MainAddComment({ id, item }) {
  const [bln, setBln] = useState(true);
  const [heartColor, setHeartColor] = useState('black');
  const onHeart = e => {
    setBln(!bln);
    return bln ? setHeartColor('red') : setHeartColor('black');
  };

  const divKiller = e => {
    const divkill = document.getElementById(id.toString());
    divkill.remove();
  };

  return (
    <div className="addcomment" id={id.toString()}>
      <p className="pw">
        {`userName : ${item}`}
        <button onClick={divKiller} className="xBox">
          <i class="fa-solid fa-x"></i>
        </button>
        <button onClick={onHeart} className="heart">
          <i style={{ color: heartColor }} class="fa-solid fa-heart"></i>
        </button>
      </p>
    </div>
  );
}
