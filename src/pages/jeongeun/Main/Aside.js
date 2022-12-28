import React from 'react';

const Aside = () => {
  return (
    <div className="aside">
      <aside>
        <span>
          {DATA.map((DATA) => {
            return <span key={DATA.id}>{DATA.content} </span>;
          })}
        </span>
      </aside>
    </div>
  );
};

const DATA = [
  { id: 1, content: '소개' },
  { id: 2, content: '도움말' },
  { id: 3, content: '홍보센터' },
  { id: 4, content: 'API' },
  { id: 5, content: '채용정보' },
];

export default Aside;
