import {Subject} from 'rxjs';
import React from 'react';
import {mount} from 'enzyme';
import connect from '../../../src/utils/component/connect';
import sinon from 'sinon';

describe('connect', () => {
  let element, observable$, spy, wrapper;

  beforeEach(() => {
    const Component = connect(({foo$}) => ({foo: foo$}))(
      props => <div id="component" {...props} />
    );
    observable$ = new Subject();
    spy = sinon.spy();
    wrapper = mount(<Component />, {context:
      {observables: {foo$: observable$.do(spy)}}
    });
    element = wrapper.find('#component');
  });

  afterEach(() => {
    wrapper.unmount();
  });

  it('should subscribe to observables', () => {
    expect(element).to.have.length(1);
    expect(element.props()).to.eql({id: 'component'});

    observable$.next('bar');
    expect(element.props()).to.eql({id: 'component', foo: 'bar'});
    expect(spy).to.have.been.calledOnce();

    wrapper.unmount();
    observable$.next('baz');
    expect(spy).to.have.been.calledOnce();
  });
});
