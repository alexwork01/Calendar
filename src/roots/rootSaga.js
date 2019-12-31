import { all, spawn, call } from 'redux-saga/effects';

import watchAppSaga from '../sagas/appSaga';

export default function* rootSaga() {
  const sagas = [watchAppSaga];

  yield all(
    sagas.map(saga =>
      spawn(function*() {
        while (true) {
          try {
            yield call(saga);
            break;
          } catch (e) {
            console.error(e);
          }
        }
      })
    )
  );
}
