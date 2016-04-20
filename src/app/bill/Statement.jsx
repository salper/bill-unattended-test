import './Statement.scss';
import React from 'react';
import {pluck} from 'rxjs/operator/pluck';
import compose from 'recompose/compose';
import pure from 'recompose/pure';
import provide from '../../utils/component/provide';
import Header from './statement/Header';
import Body from './statement/Body';
import Footer from './statement/Footer';

export const createObservables = ({bill$}) => {
  const statement$ = bill$
    ::pluck('statement');

  const total$ = bill$
    ::pluck('total');

  return {statement$, total$};
};


export const Store = () => (
  <main className="statement">
    <div className="content">
      <Header />
      <Body />
    </div>
    <Footer />
  </main>
);

export default compose(
  provide(createObservables),
  pure
)(Store);
