import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {RecipeDetails} from '../../Api/types';
import {
  RootNavigationProp,
  RootParameterScreensList,
  RootRouteProp,
} from '../../navigation/Route/interface';
import {fetchDetailsRecipe} from '../../redux/recipes/action';
import {Store} from '../../redux/store/types';
import {DetailsIngredientsScreenView} from './View';

interface DetailsIngredientsScreenProps {
  navigation: RootNavigationProp<RootParameterScreensList.ingredientDetails>;
  route: RootRouteProp<RootParameterScreensList.ingredientDetails>;
}

export const DetailsIngredientsScreen: React.FC<DetailsIngredientsScreenProps> =
  ({route}) => {
    const {uuid} = route.params;
    const dispatch = useDispatch();
    const {recipe} = useSelector((state: Store) => state.Recipes);
    const {favorites, isLoading} = useSelector(
      (state: Store) => state.Favorites,
    );
    const reviews = [...Array(5)];

    useEffect(() => {
      dispatch(fetchDetailsRecipe(uuid));
    }, [dispatch, uuid]);

    //check if favorite exists or no in Redux.
    const isFavorite = (meal: RecipeDetails) => {
      if (favorites.filter(item => item.uuid === meal.uuid).length > 0) {
        return true;
      }
      return false;
    };

    console.log('what is loading', isLoading);
    return (
      <DetailsIngredientsScreenView
        recipe={recipe}
        reviews={reviews}
        isLoading={isLoading}
        isFavorite={isFavorite}
      />
    );
  };
