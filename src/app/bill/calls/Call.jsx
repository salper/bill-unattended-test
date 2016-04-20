import React, {PropTypes} from 'react';
import pure from 'recompose/pure';

const Call = ({called, duration, cost}) => (
  <div className="call">
    <div className="number long">{called}</div>
    <div className="duration">{duration}</div>
    <div className="cost">{cost} GBP</div>
  </div>
);

Call.propTypes = {
  called: PropTypes.string,
  duration: PropTypes.string,
  cost: PropTypes.number
};

export default pure(Call);
