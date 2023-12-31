import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import SplashScreenComponent from '../screens/Spalsh';
import DrawerNavigator from '../navigation/DrawerNavigation';
import BottomTabNavigator from '../navigation/BottomtabNavigation';
import Login from '../screens/Login';
import Register from '../screens/Register';
import Home from '../screens/Home';

const Stack = createStackNavigator();

const AppNavigator = () => {
  return (
    <Stack.Navigator initialRouteName="Splash">
      <Stack.Screen
        name="Splash"
        component={SplashScreenComponent}
        options={{ headerShown: false }} // Hide the header for this screen
      />
      <Stack.Screen
        name="DrawerNavigator"
        component={DrawerNavigator} />
         
      <Stack.Screen
        name="BottomTabNavigator"
        component={BottomTabNavigator}
        options={{ headerShown: false }}
      />
       <Stack.Screen
        name="Login"
        component={Login}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Home"
        component={Home}
        options={{ headerShown: false }}
      />
        <Stack.Screen
        name="Register"
        component={Register}
        options={{ headerShown: false }}
      />
      {/* Add more screens as needed */}
    </Stack.Navigator>
  );
};

export default AppNavigator;