import {RecipeDetails} from './../../Api/types';
import {detailsRecipe, receiveRecipes, recipesLoading} from './action';
import {Recipe} from '../../api/types';

export interface RecipesReducer {
  recipes: Recipe[];
  isLoading: boolean;
  recipe: RecipeDetails;
}
export type RecipesAction =
  | ReturnType<typeof receiveRecipes>
  | ReturnType<typeof recipesLoading>
  | ReturnType<typeof detailsRecipe>;
