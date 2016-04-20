import './Nav.scss';
import React from 'react';
import {Link} from 'react-router';

export default () => (
  <nav>
    <ul>
      <li>
        <Link to="/bill/" activeClassName="active" onlyActiveOnIndex>
          <i className="material-icons">assignment</i>
          <span className="label">Statement</span>
        </Link>
      </li>
      <li>
        <Link to="/bill/subscriptions" activeClassName="active">
          <i className="material-icons">input</i>
          <span className="label">Packages</span>
        </Link>
      </li>
      <li>
        <Link to="/bill/calls" activeClassName="active">
          <i className="material-icons">smartphone</i>
          <span className="label">Calls</span>
        </Link>
      </li>
      <li>
        <Link to="/bill/store" activeClassName="active">
          <i className="material-icons">store</i>
          <span className="label">Store</span>
        </Link>
      </li>
    </ul>
  </nav>
);
