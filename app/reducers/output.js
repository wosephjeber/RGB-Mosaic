export default (state = null, action = {}) => {
  switch (action.type) {
    case 'OUTPUT_RENDERED':
      return action.output;
    default:
      return state;
  }
}
