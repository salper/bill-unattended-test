import {Observable} from 'rxjs';
import zipObject from 'lodash/zipObject';
import {Component, PropTypes} from 'react';
import createHelper from 'recompose/createHelper';
import createElement from 'recompose/createElement';

const connect = selector => BaseComponent => {
  class Connect extends Component {
    static contextTypes = {
      observables: PropTypes.object.isRequired
    };

    componentWillMount() {
      const observableProps = selector(this.context.observables);
      const [props, observables] = Object
        .entries(observableProps)
        .reduce(([props, observables], [prop, observable]) =>
          [[...props, prop], [...observables, observable]], [[], []]);

      this._subscription = Observable
        .combineLatest(...observables, (...args) =>
          this.setState(zipObject(props, args)))
        .subscribe();
    }

    componentWillUnmount() {
      this._subscription.unsubscribe();
    }

    render() {
      return createElement(BaseComponent, {...this.props, ...this.state});
    }
  }

  return Connect;
};

export default createHelper(connect, 'connect');
