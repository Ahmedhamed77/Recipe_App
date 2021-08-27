import {Recipe} from '../../api/types';
import {AppThunk} from '../store/types';
import {errorHandler} from './../../api/axios/errorHandler';
import {getRecipes} from '../../api/recipes/get';

export const receiveRecipes = (recipes: Recipe[]) =>
  <const>{
    type: 'RECEIVE_RECIPES',
    recipes,
  };

export const recipesLoading = (status: boolean) =>
  <const>{
    type: 'RECIPES_LOADING',
    status,
  };

export const fetchRecipes = (): AppThunk => async dispatch => {
  dispatch(recipesLoading(true));
  try {
    const res = await getRecipes();
    dispatch(receiveRecipes(res.data.recipes)); // data.recipes from Api
  } catch (error: any) {
    errorHandler(error);
  }
};
