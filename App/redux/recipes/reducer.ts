import {Reducer} from 'redux';
import {RecipesAction, RecipesReducer} from './types';

export const initialState: RecipesReducer = {
  recipes: [],
  isLoading: false,
};

export const Recipes: Reducer<RecipesReducer, RecipesAction> = (
  state = initialState,
  action,
) => {
  switch (action.type) {
    case 'RECEIVE_RECIPES':
      return {
        ...state,
        recipes: action.recipes,
      };
    case 'RECIPES_LOADING':
      return {
        ...state,
        isLoading: action.status,
      };

    default:
      return state;
  }
};
