import React, {PropTypes} from 'react';
import pure from 'recompose/pure';

const Entry = ({type, title, cost}) => (
  <div className="entry">
    <div className="type">{type}</div>
    <div className="title long">{title}</div>
    <div className="cost">{cost} GBP</div>
  </div>
);

Entry.propTypes = {
  type: PropTypes.string,
  title: PropTypes.string,
  cost: PropTypes.number
};

export default pure(Entry);
