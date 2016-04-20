import React, {PropTypes} from 'react';
import {mount} from 'enzyme';
import provide from '../../../src/utils/component/provide';
import compose from 'recompose/compose';
import getContext from 'recompose/getContext';

describe('provide', () => {
  let wrapper, element;

  beforeEach(() => {
    const Child = compose(
      provide(({x}) => ({y: `${x}y`})),
      getContext({observables: PropTypes.object})
    )(props => <div id="component" {...props} />);

    const Parent = provide(() => ({x: 'x'}))(props => <Child {...props} />);

    wrapper = mount(<Parent z="z" />, {context: {observables: {}}});
    element = wrapper.find('#component');
  });

  afterEach(() => {
    wrapper.unmount();
  });

  it('should provide merged observables', () => {
    expect(element).to.have.length(1);
    expect(element.props()).to.eql({
      observables: {x: 'x', y: 'xy'},
      id: 'component', z: 'z'});
  });
});
