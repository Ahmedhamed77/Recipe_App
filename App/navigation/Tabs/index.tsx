import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {RootParameterScreensList, RootStackParamList} from '../Route/interface';
import {HomeScreen} from '../../screens/HomeScreen';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {FavoriteScreen} from '../../screens/FavoriteScreen';
import {LiquidScreen} from '../../screens/LiquidScreen';

const Tab = createBottomTabNavigator<RootStackParamList>();

export const HomeScreenTab = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarActiveTintColor: '#9381ff',
      }}>
      <Tab.Screen
        name={RootParameterScreensList.home}
        component={HomeScreen}
        options={{
          headerTitleAlign: 'center',
          tabBarIcon: ({color, size}) => (
            <MaterialIcons name="home" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name={RootParameterScreensList.favorite}
        component={FavoriteScreen}
        options={{
          headerTitleAlign: 'center',
          tabBarIcon: ({color, size}) => (
            <MaterialIcons name="favorite" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name={RootParameterScreensList.LiquidScreen}
        component={LiquidScreen}
        options={{
          headerTitleAlign: 'center',
          tabBarIcon: ({color, size}) => (
            <MaterialIcons name="change-history" color={color} size={size} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};
