import chai from 'chai';
import dirtyChai from 'dirty-chai';
import sinonChai from 'sinon-chai';
import {jsdom} from 'jsdom';

chai.use(dirtyChai);
chai.use(sinonChai);
global.expect = chai.expect;

global.document = jsdom('<!doctype html><html><body></body></html>');
global.window = document.defaultView;
Object
  .keys(window)
  .filter(key => key !== 'console' && !(key in global))
  .forEach(key => global[key] = window[key]);
