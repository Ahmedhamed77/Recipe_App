import {Reducer} from 'redux';
import {FavoriteReducer, FavoriteAction} from './types';

const initialState: FavoriteReducer = {
  favorites: [],
  isLoading: false,
};

export const Favorites: Reducer<FavoriteReducer, FavoriteAction> = (
  state = initialState,
  action,
) => {
  switch (action.type) {
    case 'ADD_TO_FAVORITES':
      return {
        ...state,
        favorites: [...state.favorites, action.meal],
      };
    case 'FAVORITES_LOADING':
      return {
        ...state,
        isLoading: action.status,
      };
    case 'REMOVE_FROM_FAVORITES':
      return {
        ...state,
        favorites: state.favorites.filter(
          item => item.uuid !== action.meal.uuid,
        ),
      };
    default:
      return state;
  }
};
