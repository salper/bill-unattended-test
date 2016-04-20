import React from 'react';
import {map} from 'rxjs/operator/map';
import {pluck} from 'rxjs/operator/pluck';
import compose from 'recompose/compose';
import pure from 'recompose/pure';
import provide from '../../utils/component/provide';
import Header from './store/Header';
import Body from './store/Body';
import Footer from './store/Footer';

export const createObservables = ({bill$}) => {
  const store$ = bill$
    ::pluck('skyStore');

  const entries$ = store$
    ::map(({rentals, buyAndKeep}) => [
      ...rentals.map(entry => ({type: 'rental', ...entry})),
      ...buyAndKeep.map(entry => ({type: 'purchase', ...entry}))]);

  const total$ = store$
    ::pluck('total');

  return {entries$, total$};
};


export const Store = () => (
  <main className="store">
    <Header />
    <Body />
    <Footer />
  </main>
);

export default compose(
  provide(createObservables),
  pure
)(Store);
