import React, {PropTypes} from 'react';
import pure from 'recompose/pure';
import compose from 'recompose/compose';
import connect from '../../../utils/component/connect';
import Call from './Call';

const Body = ({calls}) => (
  <div className="body">
    {calls.map((call, key) => <Call key={key} {...call} />)}
  </div>
);

Body.propTypes = {
  calls: PropTypes.arrayOf(PropTypes.object).isRequired
};

export default compose(
  connect(({calls$}) => ({calls: calls$})),
  pure
)(Body);
