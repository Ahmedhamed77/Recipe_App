import {RecipeDetails} from '../../Api/types';
import {AppThunk} from '../store/types';

export const favoritesLoading = (status: boolean) =>
  <const>{
    type: 'FAVORITES_LOADING',
    status,
  };

export const addMealToFavorites = (meal: RecipeDetails) =>
  <const>{
    type: 'ADD_TO_FAVORITES',
    meal,
  };

export const removeMealFromFavorites = (meal: RecipeDetails) =>
  <const>{
    type: 'REMOVE_FROM_FAVORITES',
    meal,
  };

export const addFavorite =
  (meal: any): AppThunk =>
  async dispatch => {
    dispatch(favoritesLoading(true));
    dispatch(addMealToFavorites(meal));
    dispatch(favoritesLoading(false));
  };

export const removeFavorite =
  (meal: any): AppThunk =>
  async dispatch => {
    dispatch(favoritesLoading(true));
    dispatch(removeMealFromFavorites(meal));
    dispatch(favoritesLoading(false));
  };
