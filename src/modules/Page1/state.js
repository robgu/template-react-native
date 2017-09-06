const SET_STATE = 'page1/SET_STATE';
const CALC = 'page1/CALC';

export const setState = (state) => {
  return { type: SET_STATE, payload: state };
};

export const calc = () => {
  return (dispatch, getState) => {
    const { page1: { a, b } } = getState();
    const result = parseFloat(a) + parseFloat(b);
    dispatch({ type: CALC, payload: { result }})
  }
};

const _getInitState = () => {
  return {
    a: '',
    b: '',
    result: null,
  };
};

export default (state = _getInitState(), action) => {
  switch(action.type) {
    case SET_STATE:
    case CALC: {
      return { ...state, ...action.payload };
    }
    default:
      return state;
  }
};