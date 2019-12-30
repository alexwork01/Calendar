import {
  SET_IS_LOADING,
  SET_ACTIVE_MONTH,
  SET_NOTIFICATION,
  GET_PERSONS_REQUEST,
  GET_PERSONS_SUCCESS,
  GET_PERSONS_FAILURE
} from './actionTypes';

export const actionGetRequest = () => ({
  type: GET_PERSONS_REQUEST
});

export const actionGetRequestSuccess = payload => ({
  type: GET_PERSONS_SUCCESS,
  payload
});

export const actionGetRequestFailure = payload => ({
  type: GET_PERSONS_FAILURE,
  payload
});

export const actionSetIsLoading = payload => ({
  type: SET_IS_LOADING,
  payload
});

export const actionSetActiveMonthIndex = payload => ({
  type: SET_ACTIVE_MONTH,
  payload
});

export const actionSetNotification = payload => ({
  type: SET_NOTIFICATION,
  payload
});
