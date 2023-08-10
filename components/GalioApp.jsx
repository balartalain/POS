import React from 'react';
import {View, StyleSheet} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {Block, Text, GalioProvider, theme} from 'galio-framework';

import HomeScreen from './HomeScreen';
import DetailsScreen from './DetailsScreen';
/*
 Para pasar parametros a las Screens ver Context API o Event Emitter
 https://medium.com/@tranquan/reactnative-how-to-pass-callback-param-with-react-navigation-504aa381dc63
*/
function GalioApp() {
  const Stack = createNativeStackNavigator();
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="HomeScreen">
          <Stack.Screen
            name="Home"
            component={HomeScreen}
            options={{
              title: 'Home title',
              headerStyle: {
                //backgroundColor: '#f4511e',
                backgroundColor: theme.COLORS.PRIMARY,
              },
              headerTintColor: '#fff',
            }}
          />
          <Stack.Screen name="Details" component={DetailsScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  );
}
const styles = StyleSheet.create({
  safeAreaView: {
    backgroundColor: 'green',
  },
});
export default GalioApp;
