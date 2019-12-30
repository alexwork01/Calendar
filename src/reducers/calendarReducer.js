import { SET_ACTIVE_MONTH } from '../actions/actionTypes';

const initialState = {
  activeMonthIndex: 0
};

export default (state = initialState, action) => {
  const { payload } = action;

  switch (action.type) {
    case SET_ACTIVE_MONTH:
      return setActiveMonth(state, payload);

    default:
      return state;
  }
};

function setActiveMonth(state, payload) {
  return {
    ...state,
    activeMonthIndex: payload
  };
}
