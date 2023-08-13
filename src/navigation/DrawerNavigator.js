import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import MainStackNavigator from './StackNavigator';
import {theme} from 'galio-framework';
import DetailsScreen from '../screens/DetailsScreen';
import Pos from '../screens/PosScreen';
const Drawer = createDrawerNavigator();

const DrawerNavigator = ({navigation}) => {
  return (
    <Drawer.Navigator
      screenOptions={{
        headerStyle: {
          //backgroundColor: '#f4511e',
          backgroundColor: theme.COLORS.PRIMARY,
        },
        headerTintColor: '#fff',
        drawerType: 'front',
      }}>
      <Drawer.Screen
        name="Venta"
        component={MainStackNavigator}
        options={{headerShown: false}}
      />
      <Drawer.Screen name="Details" component={DetailsScreen} />
    </Drawer.Navigator>
  );
};

export default DrawerNavigator;
