import './Bill.scss';
import {Observable} from 'rxjs/Observable';
import {pluck} from 'rxjs/operator/pluck';
import 'rxjs/add/operator/catch';
import {startWith} from 'rxjs/operator/startWith';
import {publishReplay} from 'rxjs/operator/publishReplay';
import React, {PropTypes} from 'react';
import * as api from '../utils/api/bill';
import provide from '../utils/component/provide';
import connect from '../utils/component/connect';
import compose from 'recompose/compose';
import Nav from './bill/Nav';

export const createObservables = () => {
  const fetch = () =>
    api.fetch()
       .then(data => ({success: true, data}));

  const request$ = Observable
    .defer(fetch)
    .catch(Observable.of({error: true}))
    ::startWith({progress: true})
    ::publishReplay(1)
    .refCount();

  const loaded$ = request$
    ::pluck('success');

  const bill$ = request$
      ::pluck('data');

  return {loaded$, bill$};
};

export const Bill = ({children, loaded}) => (
  <div className="bill">
    <Nav />
    {loaded ? children : null}
  </div>
);

Bill.propTypes = {
  children: PropTypes.element.isRequired,
  loaded: PropTypes.bool
};

export default compose(
  provide(createObservables),
  connect(({loaded$}) => ({loaded: loaded$}))
)(Bill);