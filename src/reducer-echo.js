// redux reducer
const reducerEcho = (state = '' , action) => {
  if(action.type === 'DO_ECHO') {
    return action.val;
  }
  return state;
};

export default reducerEcho;
