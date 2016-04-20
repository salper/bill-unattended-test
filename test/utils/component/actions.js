import React from 'react';
import {shallow} from 'enzyme';
import actions from '../../../src/utils/component/actions';
import ActionRegistry from '../../../src/utils/component/ActionRegistry';

describe('actions', () => {
  let registry, wrapper, element;

  beforeEach(() => {
    registry = new ActionRegistry();

    const Component = actions({
      handleChange: 'some action'
    })(props => <div id="component" {...props} />);

    wrapper = shallow(<Component />, {
      context: {observables: {actions$: registry}}
    });

    element = wrapper.find('#component');
  });

  afterEach(() => wrapper.unmount());

  it('should inject handlers pointing to registry actions', done => {
    expect(element).to.have.length(1);
    const sub = registry.get('some action')
      .take(1)
      .subscribe(
        value => expect(value).to.equals('foo'),
        done,
        () => {
          sub.unsubscribe();
          done();
        }
      );
    element.props().handleChange('foo');
  });
});
