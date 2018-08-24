/* eslint-disable import/no-extraneous-dependencies */
import { applyMiddleware, createStore } from 'redux';
import thunk from 'redux-thunk';
import reduxImmutableStateInvariant from 'redux-immutable-state-invariant';
import { composeWithDevTools } from 'redux-devtools-extension/developmentOnly';

import rootReducer from '../reducers/rootReducer';

// Configures redux store for non-prod environments.
export default function configureStore(initialState) {
  return createStore(
    rootReducer,
    initialState,
    composeWithDevTools(
      applyMiddleware(
        thunk,
        reduxImmutableStateInvariant(),
      ),
    ),
  );
}
