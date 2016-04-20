import React, {PropTypes} from 'react';
import pure from 'recompose/pure';

const Subscription = ({type, name, cost}) => (
  <div className="subscription">
    <div className="type">{type}</div>
    <div className="name long">{name}</div>
    <div className="cost">{cost} GBP</div>
  </div>
);

Subscription.propTypes = {
  type: PropTypes.string,
  name: PropTypes.string,
  cost: PropTypes.number
};

export default pure(Subscription);
