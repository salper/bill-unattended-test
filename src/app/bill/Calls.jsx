import React from 'react';
import {pluck} from 'rxjs/operator/pluck';
import compose from 'recompose/compose';
import pure from 'recompose/pure';
import provide from '../../utils/component/provide';
import Header from './calls/Header';
import Body from './calls/Body';
import Footer from './calls/Footer';

export const createObservables = ({bill$}) => {
  const callCharges$ = bill$
    ::pluck('callCharges');

  const calls$ = callCharges$
    ::pluck('calls');

  const total$ = callCharges$
    ::pluck('total');

  return {calls$, total$};
};

export const Calls = () => (
  <main className="calls">
    <Header />
    <Body />
    <Footer />
  </main>
);

export default compose(
  provide(createObservables),
  pure
)(Calls);
