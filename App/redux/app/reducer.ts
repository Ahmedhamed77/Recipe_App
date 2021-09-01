import {Favorites} from './../favorites/reducer';
import {combineReducers} from 'redux';
import {Recipes} from '../recipes/reducer';

export const appReducers = combineReducers({
  Recipes,
  Favorites,
});
