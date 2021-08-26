import {Recipe} from '../../api/types';

export const receiveRecipes = (recipes: Recipe) =>
  <const>{
    type: 'RECEIVE_RECIPES',
    recipes,
  };
