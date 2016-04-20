import {Subject} from 'rxjs';

export default class ActionRegistry {
  constructor(registry = {}) {
    this._registry = registry;
  }

  get(name) {
    return this._registry[name] || (this._registry[name] = new Subject());
  }
}
