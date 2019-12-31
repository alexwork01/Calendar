import { put, call, select, takeLatest } from 'redux-saga/effects';

import { GET_PERSONS_REQUEST } from '../actions/actionTypes';
import {
  actionSetIsLoading,
  actionSetNotification,
  actionGetRequestSuccess
} from '../actions/actions';
import { selectorGetApiUrl } from '../selectors';
import { getPersons } from './restApi';

export default function* watchAppSaga() {
  yield takeLatest(GET_PERSONS_REQUEST, handlePersonsRequest);
}

function* handlePersonsRequest() {
  const url = yield select(selectorGetApiUrl);

  yield put(actionSetIsLoading(true));

  const { response, error } = yield call(getPersons, url);

  if (response) {
    yield put(actionGetRequestSuccess(response));
  } else {
    yield put(
      actionSetNotification({
        type: 'error',
        message: 'Error fetching data. Please try reloading this page'
      })
    );

    console.error(error);
  }

  yield put(actionSetIsLoading(false));
}
