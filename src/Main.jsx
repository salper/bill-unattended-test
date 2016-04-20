import 'whatwg-fetch';
import '../node_modules/normalize.css/normalize.css';
import React from 'react';
import {render} from 'react-dom';
import injectTapEventPlugin from 'react-tap-event-plugin';
import createRouterContext from './utils/component/createRouterContext';
import ActionRegistry from './utils/component/ActionRegistry';
import {Router, Route, IndexRoute, IndexRedirect, hashHistory} from 'react-router';

import App from './App';
import Bill from './app/Bill';
import Statement from './app/bill/Statement';
import Subscriptions from './app/bill/Subscriptions';
import Calls from './app/bill/Calls';
import Store from './app/bill/Store';
import NotFound from './app/NotFound';


injectTapEventPlugin();
const RouterContext = createRouterContext({
  actions$: new ActionRegistry(),
  document: window.document,
  window
});
const renderer = props => <RouterContext {...props} />;

render((
  <Router history={hashHistory} render={renderer}>
    <Route path="/" component={App}>
      <IndexRedirect to="/bill" />
      <Route path="bill" component={Bill}>
        <IndexRoute component={Statement} />
        <Route path="subscriptions" component={Subscriptions} />
        <Route path="calls" component={Calls} />
        <Route path="store" component={Store} />
      </Route>
      <Route path="*" component={NotFound} />
    </Route>
  </Router>
), document.querySelector('#main'));
