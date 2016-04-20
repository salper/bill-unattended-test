import React from 'react';
import pure from 'recompose/pure';

const Header = () => (
  <div className="header">
    <div className="label">Type</div>
    <div className="label long">Name</div>
    <div className="label">Cost</div>
  </div>
);

export default pure(Header);
