/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {SafeAreaView, StyleSheet} from 'react-native';

import GalioApp from './components/GalioApp';

//import theme from './src/theme';
function App(): JSX.Element {
  return <GalioApp />;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'yellow',
  },
});
export default App;
