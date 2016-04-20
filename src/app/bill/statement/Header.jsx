import React from 'react';
import pure from 'recompose/pure';

const Header = () => (
  <div className="header">
    <div>
      <div className="label">Generated</div>
      <div className="label">Due</div>
      <div className="label">from</div>
      <div className="label">to</div>
    </div>
  </div>
);

export default pure(Header);
