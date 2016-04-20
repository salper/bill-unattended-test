import {PropTypes, Component} from 'react';
import createHelper from 'recompose/createHelper';
import createElement from 'recompose/createElement';

const provide = createObservables => BaseComponent => {
  class Provide extends Component {
    static contextTypes = {
      observables: PropTypes.object.isRequired
    };

    static childContextTypes = {
      observables: PropTypes.object.isRequired
    };

    getChildContext() {
      return {observables: this._observables};
    }

    componentWillMount() {
      this._observables = {
        ...this.context.observables,
        ...createObservables(this.context.observables || {}, this.props)};
    }

    render() {
      return createElement(BaseComponent, this.props);
    }
  }

  return Provide;
};

export default createHelper(provide, 'provide');
