import {
  addMealToFavorites,
  favoritesLoading,
  removeMealFromFavorites,
} from './action';
import {RecipeDetails} from '../../Api/types';

export interface FavoriteReducer {
  favorites: RecipeDetails[];
  isLoading: boolean;
}

export type FavoriteAction =
  | ReturnType<typeof addMealToFavorites>
  | ReturnType<typeof removeMealFromFavorites>
  | ReturnType<typeof favoritesLoading>;
