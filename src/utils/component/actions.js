import {PropTypes, Component} from 'react';
import createHelper from 'recompose/createHelper';
import createElement from 'recompose/createElement';

const actions = actionHandlers => BaseComponent => {
  class Actions extends Component {
    static contextTypes = {
      observables: PropTypes.object.isRequired
    };

    componentWillMount() {
      const {observables: {actions$}} = this.context;
      this._actions = Object.keys(actionHandlers)
        .reduce((actions, action) => ({
          ...actions,
          [action]: value => actions$
            .get(actionHandlers[action])
            .next(value)}), {});
    }

    render() {
      return createElement(BaseComponent, {...this.props, ...this._actions});
    }
  }

  return Actions;
};

export default createHelper(actions, 'actions');
