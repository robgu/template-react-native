import { applyMiddleware, compose, createStore } from 'redux';
import { createLogger } from 'redux-logger';
import thunk from 'redux-thunk';

import reducer from './reducer';

const store = createStore(
  reducer,
  compose(
    applyMiddleware(thunk),
    applyMiddleware(createLogger({
      predicate: () => {
        return window.isDebuggingRemotely;
      },
    }))
  )
);

export default store;

if (module.hot) {
  module.hot.accept('./reducer', () => {
    const nextReducer = require('./reducer');
    store.replaceReducer(nextReducer);
  });
}
