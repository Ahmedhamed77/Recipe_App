import React from 'react';
import {createStackNavigator, TransitionPresets} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
import {FavoriteScreen} from '../../screens/FavoriteScreen';
import {RootParamterScreensList} from './interface';
import {DetailsIngredientsScreen} from '../../screens/DetailsingredientScreen';
import {PasswordScreen} from '../../screens/PasswordScreen';
import {HomeScreenTab} from '../Tabs';

const Main = createStackNavigator();

export const Route = () => {
  return (
    <NavigationContainer>
      <Main.Navigator
        initialRouteName={RootParamterScreensList.home}
        screenOptions={{
          headerTitleAlign: 'center',
        }}>
        <Main.Screen
          name={RootParamterScreensList.home}
          component={HomeScreenTab}
          options={{
            headerShown: false,
            ...TransitionPresets.SlideFromRightIOS,
          }}
        />
        <Main.Screen
          name={RootParamterScreensList.favorite}
          component={FavoriteScreen}
          options={{
            ...TransitionPresets.SlideFromRightIOS,
          }}
        />
        <Main.Screen
          name={RootParamterScreensList.ingredientDetails}
          component={DetailsIngredientsScreen}
          options={{
            ...TransitionPresets.SlideFromRightIOS,
          }}
        />
        <Main.Screen
          name={RootParamterScreensList.passwordScreen}
          component={PasswordScreen}
          options={{
            ...TransitionPresets.SlideFromRightIOS,
          }}
        />
      </Main.Navigator>
    </NavigationContainer>
  );
};
