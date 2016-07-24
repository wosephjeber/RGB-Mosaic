import {assign} from 'lodash';

const defaultState = {
  fontSize: 7,
  imageWidth: 100,
  image: null
}

export default (state = defaultState, action = {}) => {
  switch (action.type) {
    case 'CHANGE_FONT_SIZE':
      return assign({}, state, { fontSize: action.fontSize });
    case 'CHANGE_IMAGE_WIDTH':
      return assign({}, state, { imageWidth: action.imageWidth });
    case 'CHANGE_IMAGE':
      return assign({}, state, { image: action.image });
    default:
      return state;
  }
}
