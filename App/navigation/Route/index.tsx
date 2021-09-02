import React from 'react';
import {createStackNavigator, TransitionPresets} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
import {FavoriteScreen} from '../../screens/FavoriteScreen';
import {RootParameterScreensList} from './interface';
import {DetailsIngredientsScreen} from '../../screens/DetailsIngredientsScreen';
import {PasswordScreen} from '../../screens/PasswordScreen';
import {HomeScreenTab} from '../Tabs';

const Main = createStackNavigator();

export const Route = () => {
  return (
    <NavigationContainer>
      <Main.Navigator
        initialRouteName={RootParameterScreensList.home}
        screenOptions={{
          headerTitleAlign: 'center',
        }}>
        <Main.Screen
          name={RootParameterScreensList.tabs}
          component={HomeScreenTab}
          options={{
            headerShown: false,
            ...TransitionPresets.SlideFromRightIOS,
          }}
        />
        <Main.Screen
          name={RootParameterScreensList.favorite}
          component={FavoriteScreen}
          options={{
            ...TransitionPresets.SlideFromRightIOS,
          }}
        />
        <Main.Screen
          name={RootParameterScreensList.ingredientDetails}
          component={DetailsIngredientsScreen}
          options={{
            ...TransitionPresets.SlideFromRightIOS,
          }}
        />
        <Main.Screen
          name={RootParameterScreensList.passwordScreen}
          component={PasswordScreen}
          options={{
            ...TransitionPresets.SlideFromRightIOS,
          }}
        />
      </Main.Navigator>
    </NavigationContainer>
  );
};
