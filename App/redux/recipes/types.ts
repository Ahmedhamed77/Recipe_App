import {receiveRecipes, recipesLoading} from './action';
import {Recipe} from '../../api/types';

export interface RecipesReducer {
  recipes: Recipe[];
  isLoading: boolean;
}
export type RecipesAction =
  | ReturnType<typeof receiveRecipes>
  | ReturnType<typeof recipesLoading>;
