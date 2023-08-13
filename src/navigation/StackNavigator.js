import React from 'react';
import {TouchableOpacity, StyleSheet, Platform, View} from 'react-native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {Block, Text, Button, theme} from 'galio-framework';
import HomeScreen from '../screens/HomeScreen';
import DetailsScreen from '../screens/DetailsScreen';
import PosScreen from '../screens/PosScreen';
const Stack = createNativeStackNavigator();
const HeaderLeft = ({route}) => {
  return <TouchableOpacity />;
};
const MainStackNavigator = ({navigation}) => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: {
          //backgroundColor: '#f4511e',
          backgroundColor: theme.COLORS.PRIMARY,
        },
        headerTintColor: '#fff',
        animation: 'slide_from_right',
      }}>
      <Stack.Screen
        name="Home"
        component={HomeScreen}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="POS"
        component={PosScreen}
        options={({route}) => ({
          headerBackVisible: false,
          headerLeft: HeaderLeft,
        })}
      />
      <Stack.Screen name="Details" component={DetailsScreen} />
    </Stack.Navigator>
  );
};

export default MainStackNavigator;
