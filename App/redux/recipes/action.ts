import {RecipeDetails} from './../../Api/types';
import {Recipe} from '../../api/types';
import {AppThunk} from '../store/types';
import {getRecipes} from '../../api/recipes/get';
import {errorHandler} from '../../api/axios/errorHandler';
import {getRecipe} from '../../api/recipes/getRecipeDetails';

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

export const detailsRecipe = (recipe: RecipeDetails) =>
  <const>{
    type: 'DETAILS_RECIPE',
    recipe,
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

export const fetchDetailsRecipe =
  (payload: string): AppThunk =>
  async dispatch => {
    dispatch(recipesLoading(true));
    try {
      const res = await getRecipe(payload);
      dispatch(detailsRecipe(res.data.recipe)); // data.recipe from Api
    } catch (error) {
      errorHandler(error);
    }
  };
