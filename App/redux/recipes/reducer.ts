import {Reducer} from 'redux';
import {RecipesAction, RecipesReducer} from './types';
import {Recipe} from '../../api/types';

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

    default:
      return state;
  }
};
