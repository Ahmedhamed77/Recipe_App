import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {RootParamterScreensList, RootStackParamList} from '../Route/interface';
import {HomeScreen} from '../../screens/HomeScreen';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {FavoriteScreen} from '../../screens/FavoriteScreen';

const Tab = createBottomTabNavigator<RootStackParamList>();

export const HomeScreenTab = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarActiveTintColor: '#9381ff',
      }}>
      <Tab.Screen
        name={RootParamterScreensList.home}
        component={HomeScreen}
        options={{
          tabBarIcon: ({color, size}) => (
            <MaterialIcons name="home" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name={RootParamterScreensList.favorite}
        component={FavoriteScreen}
        options={{
          tabBarIcon: ({color, size}) => (
            <MaterialIcons name="favorite" color={color} size={size} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};
