import {PropTypes} from 'react';
import {RouterContext} from 'react-router';
import compose from 'recompose/compose';
import pure from 'recompose/pure';
import withContext from 'recompose/withContext';
import ActionRegistry from './ActionRegistry';

export default ({actions$, document, window}) => compose(
  withContext(
    {
      document: PropTypes.object,
      observables: PropTypes.shape({
        actions$: PropTypes.instanceOf(ActionRegistry)
      }),
      window: PropTypes.object
    },
    () => ({observables: {actions$, document, window}})
  ),
  pure
)(RouterContext);
