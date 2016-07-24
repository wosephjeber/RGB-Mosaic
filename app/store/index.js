import {createStore} from 'redux';
import reducer from 'app/reducers/app';

let store = null;

function create() {
  store = createStore(reducer);
  return store;
}

function destroy() {
  store = null;
}

function get() {
  return store;
}

export { create, destroy, get }
