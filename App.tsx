import React from 'react';
import {NavigationContainer} from '@react-navigation/native';

import DrawerNavigator from './components/navigation/DrawerNavigator';

//import theme from './src/theme';
function App(): JSX.Element {
  return (
    <NavigationContainer>
      <DrawerNavigator />
    </NavigationContainer>
  );
}

export default App;
