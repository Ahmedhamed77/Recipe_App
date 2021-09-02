import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {Pages} from '../../navigation/Pages';
import {
  RootNavigationProp,
  RootParameterScreensList,
} from '../../navigation/Route/interface';
import {fetchRecipes} from '../../redux/recipes/action';
import {Store} from '../../redux/store/types';
import {HomeScreenView} from './View';

interface HomeScreenProps {
  navigation: RootNavigationProp<RootParameterScreensList.home>;
}
export const HomeScreen: React.FC<HomeScreenProps> = ({navigation}) => {
  const dispatch = useDispatch();
  const {recipes, isLoading} = useSelector((state: Store) => state.Recipes);

  const onPressComponent = (uuid: string) => {
    navigation.navigate(Pages.Root.ingredientDetails, {uuid});
  };

  useEffect(() => {
    dispatch(fetchRecipes());
  }, [dispatch]);

  return (
    <HomeScreenView
      data={recipes}
      isLoading={isLoading}
      onPressComponent={onPressComponent}
    />
  );
};
