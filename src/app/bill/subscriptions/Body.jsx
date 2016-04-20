import React, {PropTypes} from 'react';
import pure from 'recompose/pure';
import compose from 'recompose/compose';
import connect from '../../../utils/component/connect';
import Subscription from './Subscription';

const Body = ({subscriptions}) => (
  <div className="body">
    {subscriptions.map((subscription, key) =>
      <Subscription key={key} {...subscription} />)}
  </div>
);

Body.propTypes = {
  subscriptions: PropTypes.arrayOf(PropTypes.object).isRequired
};

export default compose(
  connect(({subscriptions$}) =>
    ({subscriptions: subscriptions$})),
  pure
)(Body);
