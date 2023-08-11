import React from 'react';

import {createDrawerNavigator} from '@react-navigation/drawer';

import MainStackNavigator from './StackNavigator';
import HomeScreen from '../screens/HomeScreen';
import DetailsScreen from '../screens/DetailsScreen';
const Drawer = createDrawerNavigator();

const DrawerNavigator = () => {
  return (
    <Drawer.Navigator screenOptions={{headerShown: false}}>
      <Drawer.Screen name="Drawer" component={MainStackNavigator} />
      <Drawer.Screen name="Details" component={DetailsScreen} />
    </Drawer.Navigator>
  );
};

export default DrawerNavigator;
