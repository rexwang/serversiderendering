export default (state, action) => {
  switch (action.type) {
    case 'INCREMENT':
      return state + action.data;
    case 'DECREMENT':
      return state - action.data;
    default:
      return state;
  }
};