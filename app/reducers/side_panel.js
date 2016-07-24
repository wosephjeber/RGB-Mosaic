import {assign} from 'lodash';

const defaultState = {
  activePanel: 'info',
  open: true
}

export default (state = defaultState, action = {}) => {
  switch (action.type) {
    case 'CHANGE_PANEL':
      return assign({}, state, {
        activePanel: action.panel,
        open: true
      });
    case 'CLOSE_PANEL':
      return assign({}, state, {open: false});
    default:
      return state;
  }
}
