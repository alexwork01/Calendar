import {
  compose,
  applyMiddleware,
  createStore as createReduxStore
} from 'redux';
import createSagaMiddleware from 'redux-saga';

import rootSaga from '../roots/rootSaga';
import rootReducer from '../roots/rootReducer';

const sagaMiddleware = createSagaMiddleware();

const createStore = (initialState = {}) => {
  const middleware = [sagaMiddleware];
  const enhancers = [];
  let composeEnhancers = compose;
  if (typeof window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ === 'function') {
    composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__;
  }

  const store = createReduxStore(
    rootReducer, // root reducers
    initialState,
    composeEnhancers(applyMiddleware(...middleware), ...enhancers)
  );

  if (module.hot) {
    // Enable Webpack hot module replacement for reducers
    module.hot.accept('../roots/rootReducer', async () => {
      const nextRootReducer = await import('../roots/rootReducer'); // eslint-disable-line
      store.replaceReducer(nextRootReducer.default);
    });
    return store;
  }
  return store;
};

const reduxStore = createStore(window.__INITIAL_STATE__);

sagaMiddleware.run(rootSaga);

export default reduxStore;
