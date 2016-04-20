import React from 'react';
import pure from 'recompose/pure';

const Header = () => (
  <div className="header">
    <div className="label long">Number</div>
    <div className="label">Duration</div>
    <div className="label">Cost</div>
  </div>
);

export default pure(Header);
