import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
import {HomeScreen} from '../../screens/HomeScreen';
import {FavoriteScreen} from '../../screens/FavoriteScreen';
import {CartScreen} from '../../screens/CartScreen';

const Main = createStackNavigator();

export const Route = () => {
  return (
    <NavigationContainer>
      <Main.Navigator
        screenOptions={{
          headerTitleAlign: 'center',
        }}>
        <Main.Screen name="Home" component={HomeScreen} />
        <Main.Screen name="Favorite" component={FavoriteScreen} />
        <Main.Screen name="Cart" component={CartScreen} />
      </Main.Navigator>
    </NavigationContainer>
  );
};
