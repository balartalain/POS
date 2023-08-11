import React from 'react';
import {TouchableOpacity, StyleSheet, Platform, View} from 'react-native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import FontAwesome6 from 'react-native-vector-icons/FontAwesome6';
import {Block, Text, Button, theme} from 'galio-framework';
import HomeScreen from '../screens/HomeScreen';
import DetailsScreen from '../screens/DetailsScreen';

const Stack = createNativeStackNavigator();

const MainStackNavigator = ({navigation}) => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: {
          //backgroundColor: '#f4511e',
          backgroundColor: theme.COLORS.PRIMARY,
        },
        headerTintColor: '#fff',
      }}>
      <Stack.Screen
        name="Home"
        component={HomeScreen}
        options={{
          headerLeft: () => (
            <TouchableOpacity
              onPress={() => navigation.toggleDrawer()}
              style={styles.headerLeft}>
              <FontAwesome6 name="bars" size={23} color="#fff" />
            </TouchableOpacity>
          ),
        }}
      />
      <Stack.Screen name="Details" component={DetailsScreen} />
    </Stack.Navigator>
  );
};

export default MainStackNavigator;
const styles = StyleSheet.create({
  headerLeft: {
    marginRight: 15,
  },
  container: {
    flex: 1,
  },
});
