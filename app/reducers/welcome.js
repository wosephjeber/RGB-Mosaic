export default (state = true, action = {}) => {
  switch (action.type) {
    case 'HIDE_WELCOME':
      return false;
    default:
      return state;
  }
}
