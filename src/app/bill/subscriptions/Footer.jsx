import React, {PropTypes} from 'react';
import pure from 'recompose/pure';
import compose from 'recompose/compose';
import connect from '../../../utils/component/connect';

const Footer = ({total}) => (
  <div className="footer">
    {total} GBP
  </div>
);

Footer.propTypes = {
  total: PropTypes.number
};

export default compose(
  connect(({total$}) => ({total: total$})),
  pure
)(Footer);
