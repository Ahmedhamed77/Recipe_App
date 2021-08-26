import {receiveRecipes} from './action';
import {Recipe} from '../../api/types';

export interface RecipesReducer {
  recipes: Recipe[];
  isLoading: boolean;
}
export type RecipesAction = ReturnType<typeof receiveRecipes>;
