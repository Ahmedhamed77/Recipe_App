import React, {useEffect, useState} from 'react';
import {Text, Image, View, ScrollView, Dimensions} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {
  RootNavigationProp,
  RootParamterScreensList,
  RootRouteProp,
} from '../../navigation/Route/interface';
import {fetchDetailsRecipe} from '../../redux/recipes/action';
import {Store} from '../../redux/store/types';
import {DetailsIngredientsScreenView} from './View';

interface DetailsIngredientsScreenProps {
  navigation: RootNavigationProp<RootParamterScreensList.ingredientDetails>;
  route: RootRouteProp<RootParamterScreensList.ingredientDetails>;
}

export const DetailsIngredientsScreen: React.FC<DetailsIngredientsScreenProps> =
  ({navigation, route}) => {
    const {uuid} = route.params;
    const dispatch = useDispatch();
    const {recipe, isLoading} = useSelector((state: Store) => state.Recipes);
    const reviews = [...Array(5)];

    useEffect(() => {
      dispatch(fetchDetailsRecipe(uuid));
    }, [dispatch, uuid]);

    return (
      <DetailsIngredientsScreenView
        {...recipe}
        reviews={reviews}
        isLoading={isLoading}
      />
    );
  };
