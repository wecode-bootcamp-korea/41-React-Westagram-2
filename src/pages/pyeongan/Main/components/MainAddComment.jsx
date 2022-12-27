import { React, useState, useEffect } from 'react';

export default function MainAddComment({ item }) {
  const [bln, setBln] = useState(true);
  const [heartColor, setHeartColor] = useState('black');
  const onHeart = e => {
    setBln(!bln);
    console.log(bln);
    return bln ? setHeartColor('red') : setHeartColor('black');
  };

  const divKiller = e => {
    const divkill = document.getElementById(item.toString());
    divkill.remove();
  };
  return (
    <div className="addcomment" id={item.toString()} key={item.toString()}>
      <p>
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
