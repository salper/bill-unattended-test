import ActionRegistry from '../../../src/utils/component/ActionRegistry';

describe('ActionRegistry', () => {
  let registry;

  beforeEach(() =>
    registry = new ActionRegistry());

  it('Should instanciate actions', () =>
    expect(registry.get('some action'))
      .to.have.property('next')
      .that.is.a('function'));

  it('Should reuse instanciated action', () => {
    const name = 'some action';
    const action = registry.get(name);
    expect(registry.get(name)).to.equals(action);
  });
});
