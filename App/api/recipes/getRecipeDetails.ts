import {axios} from '../axios';
import {RecipeDetails} from '../types';

export const getRecipe = (uuid: string) => {
  const res = axios.get<RecipeDetails>(`recipes/${uuid}`);
  return res;
};
