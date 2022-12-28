import React from 'react';
import Nav from '../../../components/Nav/Nav';
import Article from '../Main/Components/Article';
import Aside from '../Main/Components/Aside';
import './Main.scss';

export default function MainS() {
  return (
    <>
      <Nav />
      <main>
        <div className="feeds">
          <Article />
        </div>
        <Aside />
      </main>
    </>
  );
}
