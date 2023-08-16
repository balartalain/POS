import React from 'react';
import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItemList,
  DrawerItem,
} from '@react-navigation/drawer';
import MainStackNavigator from './StackNavigator';
import {theme, Block} from 'galio-framework';
import DetailsScreen from '../screens/DetailsScreen';
function CustomDrawerContent(props) {
  return (
    <DrawerContentScrollView {...props} contentContainerStyle={{paddingTop: 0}}>
      <Block
        style={{backgroundColor: theme.COLORS.PRIMARY, height: 100, margin: 0}}
      />
      <DrawerItemList {...props} />
      <DrawerItem label="Help" onPress={() => alert('Link to help')} />
    </DrawerContentScrollView>
  );
}
const Drawer = createDrawerNavigator();

const DrawerNavigator = ({navigation}) => {
  return (
    <Drawer.Navigator
      drawerContent={props => <CustomDrawerContent {...props} />}
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
