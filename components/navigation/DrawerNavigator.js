import React from 'react';

import {createDrawerNavigator} from '@react-navigation/drawer';

import MainStackNavigator from './StackNavigator';
import HomeScreen from '../screens/HomeScreen';
import DetailsScreen from '../screens/DetailsScreen';
const Drawer = createDrawerNavigator();

const DrawerNavigator = () => {
  return (
    <Drawer.Navigator>
      <Drawer.Screen
        name="Drawer"
        component={MainStackNavigator}
        options={{headerShown: false}}
      />
      <Drawer.Screen name="Details" component={DetailsScreen} />
    </Drawer.Navigator>
  );
};

export default DrawerNavigator;
