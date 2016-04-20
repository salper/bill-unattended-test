import React, {PropTypes} from 'react';
import pure from 'recompose/pure';
import compose from 'recompose/compose';
import connect from '../../../utils/component/connect';
import Entry from './Entry';

const Body = ({entries}) => (
  <div className="body">
    {entries.map((entry, key) =>
      <Entry key={key} {...entry} />)}
  </div>
);

Body.propTypes = {
  entries: PropTypes.arrayOf(PropTypes.object).isRequired
};

export default compose(
  connect(({entries$}) =>
    ({entries: entries$})),
  pure
)(Body);
