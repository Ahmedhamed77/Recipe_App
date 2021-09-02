import {RouteProp} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';

export enum RootParameterScreensList {
  home = 'Home',
  favorite = 'Favorites',
  cart = 'Cart',
  ingredientDetails = 'IngredientDetails',
  tabs = 'Tabs',
  passwordScreen = 'PasswordScreen',
  LiquidScreen = 'LiquidScreen',
}

export type RootStackParamList = {
  [RootParameterScreensList.home]: undefined;
  [RootParameterScreensList.favorite]: undefined;
  [RootParameterScreensList.cart]: undefined;
  [RootParameterScreensList.ingredientDetails]: {uuid: string};
  [RootParameterScreensList.passwordScreen]: undefined;
  [RootParameterScreensList.LiquidScreen]: undefined;
  [RootParameterScreensList.tabs]: undefined;
};

export type RootNavigationProp<P extends RootParameterScreensList> =
  StackNavigationProp<RootStackParamList, P>;

export type RootRouteProp<P extends RootParameterScreensList> = RouteProp<
  RootStackParamList,
  P
>;
