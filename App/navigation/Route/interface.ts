import {RouteProp} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';

export enum RootParamterScreensList {
  home = 'Home',
  favorite = 'Favorite',
  cart = 'Cart',
  ingredientDetails = 'IngredientDetails',
}

export type RootStackParamList = {
  [RootParamterScreensList.home]: undefined;
  [RootParamterScreensList.favorite]: undefined;
  [RootParamterScreensList.cart]: undefined;
  [RootParamterScreensList.ingredientDetails]: undefined;
};

export type RootNavigationProp<P extends RootParamterScreensList> =
  StackNavigationProp<RootStackParamList, P>;

export type RootRouteProp<P extends RootParamterScreensList> = RouteProp<
  RootStackParamList,
  P
>;
