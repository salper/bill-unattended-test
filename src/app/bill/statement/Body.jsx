import React, {PropTypes} from 'react';
import pure from 'recompose/pure';
import compose from 'recompose/compose';
import connect from '../../../utils/component/connect';

const Body = ({statement: {generated, due, period: {from, to}}}) => (
  <div className="body">
    <div className="generated">{generated}</div>
    <div className="due">{due}</div>
    <div className="from">{from}</div>
    <div className="to">{to}</div>
  </div>
);

Body.propTypes = {
  statement: PropTypes.object.isRequired
};

export default compose(
  connect(({statement$}) => ({statement: statement$})),
  pure
)(Body);
