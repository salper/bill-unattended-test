import React from 'react';
import {pluck} from 'rxjs/operator/pluck';
import compose from 'recompose/compose';
import pure from 'recompose/pure';
import provide from '../../utils/component/provide';
import Header from './subscriptions/Header';
import Body from './subscriptions/Body';
import Footer from './subscriptions/Footer';

export const createObservables = ({bill$}) => {
  const package$ = bill$
    ::pluck('package');

  const subscriptions$ = package$
    ::pluck('subscriptions');

  const total$ = package$
    ::pluck('total');

  return {subscriptions$, total$};
};


export const Subscriptions = () => (
  <main className="susbcriptions">
    <Header />
    <Body />
    <Footer />
  </main>
);

export default compose(
  provide(createObservables),
  pure
)(Subscriptions);
