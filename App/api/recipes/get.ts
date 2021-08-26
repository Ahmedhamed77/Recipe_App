import {axios} from '../axios';
import {Recipe} from '../types';

export const getRecipes = () => {
  const res = axios.get<Recipe[]>('recipes');
  return res;
};
