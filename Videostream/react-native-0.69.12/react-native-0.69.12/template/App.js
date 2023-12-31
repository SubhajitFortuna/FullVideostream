import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import AppNavigator from './navigation/Appnavigator';
import DrawerNavigator from './navigation/DrawerNavigation';

const App = () => (
  <NavigationContainer>
    <DrawerNavigator />
  </NavigationContainer>
);

export default App;