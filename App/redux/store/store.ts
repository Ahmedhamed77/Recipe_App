import {createStore, applyMiddleware, Action} from 'redux';
import {composeWithDevTools} from 'redux-devtools-extension';
import thunkMiddleware from 'redux-thunk';

import {appReducers} from '../app/reducer';
import {Store} from './types';

export const rootReducer = () => {
  return (state: Store | undefined, action: Action) => {
    if (action.type === 'RESET_STATE') {
      state = undefined;
    }
    return appReducers(state, action);
  };
};

export const resetState = () =>
  <const>{
    type: 'RESET_STATE',
  };

export const store = createStore(
  rootReducer(),
  composeWithDevTools(applyMiddleware(thunkMiddleware)),
);
