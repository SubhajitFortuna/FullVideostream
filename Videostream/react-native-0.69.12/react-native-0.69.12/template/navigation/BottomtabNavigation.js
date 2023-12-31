import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Image, Text, StyleSheet, TouchableOpacity } from "react-native";
import Home from "../screens/Home";
import Watchlist from "../screens/Wathlist";
import Settings from "../screens/Settings";
import Account from "../screens/Account";
import DrawerNavigator from '../navigation/DrawerNavigation';
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";

const Tab = createBottomTabNavigator();

const MiddleTabButton = ({ onPress }) => (
  <TouchableOpacity onPress={onPress} style={styles.middleTabButton}>
    <Image source={require("../assets/images/PlayStream.png")} style={styles.middleTabIcon} />
  </TouchableOpacity>
);

const BottomTabNavigator = () => (
  <Tab.Navigator
    screenOptions={({ route }) => ({
      tabBarIcon: ({ focused, color, size }) => {
        let iconName;

        if (route.name === 'Home') {
          iconName = focused ? 'home' : 'home-outline';
        } else if (route.name === 'Watchlist') {
          iconName = focused ? 'view-dashboard' : 'view-dashboard-outline';
        } else if (route.name === 'Account') {
          iconName = focused ? 'account-circle' : 'account-circle-outline';
        } else if (route.name === 'Settings') {
          iconName = focused ? 'settings' : 'settings-outline';
        }

        return <MaterialCommunityIcons name={iconName} size={size} color={color} />;
      },
    })}
    tabBarOptions={{
      activeTintColor: '#e70d8d',
      inactiveTintColor: '#ccc',
      style: {
        backgroundColor: '#3a3a42',
        height: 60,
      },
      tabStyle: { height: 55 },
      centered: true,
    }}
  >
    <Tab.Screen name="Home" component={Home} />
    <Tab.Screen name="Watchlist" component={Watchlist} />
    <Tab.Screen
      name="MiddleTab"
      component={() => null}
      options={{ tabBarButton: MiddleTabButton }}
    />
    <Tab.Screen name="Account" component={Account} />
    <Tab.Screen name="Settings" component={Settings} />
  </Tab.Navigator>
);

const styles = StyleSheet.create({
  middleTabButton: {
    justifyContent: "center",
    alignItems: "center",
  },
  middleTabIcon: {
    width: 50,
    height: 50,
  },
});

export default BottomTabNavigator;