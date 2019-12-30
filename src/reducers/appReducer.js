import config from '../config';
import {
  SET_IS_LOADING,
  SET_NOTIFICATION,
  GET_PERSONS_SUCCESS
} from '../actions/actionTypes';

export default (state = config, action) => {
  const { payload } = action;

  switch (action.type) {
    case SET_IS_LOADING:
      return setIsLoading(state, payload);

    case GET_PERSONS_SUCCESS:
      return setPersons(state, payload);

    case SET_NOTIFICATION:
      return setNotification(state, payload);

    default:
      return state;
  }
};

function setIsLoading(state, payload) {
  return {
    ...state,
    isLoading: payload
  };
}

function setPersons(state, payload) {
  return {
    ...state,
    persons: payload,
    isLoading: false
  };
}

function setNotification(state, payload) {
  return {
    ...state,
    notification: payload
  };
}
