import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import BottomTabNavigator from "../navigation/BottomtabNavigation";
import AppNavigator from "../navigation/Appnavigator";
import { Image, View, Text, Dimensions, TouchableOpacity} from "react-native";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import AntDesign from "react-native-vector-icons/AntDesign";
import SimpleLineIcons from "react-native-vector-icons/SimpleLineIcons";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";
import Feather from "react-native-vector-icons/Feather";

const Drawer = createDrawerNavigator();

const CustomDrawerContent = ({ navigation, state }) => {
  const navigateToScreen = (screenName) => {
    navigation.navigate(screenName);
  };

  const windowWidth = Dimensions.get("window").width;
  const windowHeight = Dimensions.get("window").height;
  const iconSize = windowWidth > 400 ? 24 : 20;

  const drawerItems = [
    { name: "Home", icon: "home" },
    { name: "TV Shows", icon: "tv" }, // Updated to "tv" for Feather
    { name: "Movies", icon: "movie-roll" },
    { name: "Sports", icon: "baseball" },
    { name: "LiveTV", icon: "live-tv" },
    { name: "Settings", icon: "settings" },
    { name: "Login", icon: "login" },
  ];

  return (
    <View style={{ flex: 1, backgroundColor: "#191919", paddingTop: 1, paddingBottom: 50 }}>
      {/* Custom Drawer Header with Image */}
      <View style={{ padding: 3, backgroundColor: "black", alignItems: "center" }}>
        <Image
          source={require("../assets/images/drawerimg.png")}
          style={{ width: 0.7 * windowWidth, height: 0.4 * windowWidth }}
        />
      </View>

      {/* Drawer Items */}
      {drawerItems.map((item, index) => (
           <TouchableOpacity
          key={index}
          activeOpacity={0.7}
          onPress={() => navigateToScreen(item.name)}
        >
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              paddingVertical: 11,
              paddingHorizontal: 0.05 * windowWidth,
              marginBottom: 5,
              backgroundColor: state.index === index ? '#313131' : 'transparent',
              borderRadius: 5,
              marginHorizontal: 10,
              marginRight: 1,
              paddingLeft: 17,
              marginLeft: 17,
              bottom: -11,
              borderTopLeftRadius: 50, // Half of the height
            borderBottomLeftRadius: 50, // Half of the height
            }}
          >
            {item.name === "TV Shows" ? (
              <Feather name="tv" size={iconSize} color={state.index === index ? '#e70d8d' : '#fff'} />
            ) : item.name === "LiveTV" ? (
              <MaterialIcons name="live-tv" size={iconSize} color={state.index === index ? '#e70d8d' : '#fff'} />
            ) : item.name === "Login" ? (
              <AntDesign name="login" size={iconSize} color={state.index === index ? '#e70d8d' : '#fff'} />
            ) : item.name === "Home" ? (
              <SimpleLineIcons name="home" size={iconSize} color={state.index === index ? '#e70d8d' : '#fff'} />
            ) : item.name === "Sports" ? (
              <FontAwesome5 name="baseball-ball" size={iconSize} color={state.index === index ? '#e70d8d' : '#fff'} />
            ) : (
              <MaterialCommunityIcons name={item.icon} size={iconSize} color={state.index === index ? '#e70d8d' : '#fff'} />
            )}
            <Text style={{ marginLeft: 0.02 * windowWidth, color: state.index === index ? '#e70d8d' : '#fff', fontWeight: "bold" }}>
              {item.name}
            </Text>
          </View>
       </TouchableOpacity>
      ))}
    </View>
  );
};

const DrawerNavigator = () => (
  <Drawer.Navigator
    initialRouteName="Appnavigaotor"
    drawerContent={(props) => <CustomDrawerContent {...props} />}
    drawerStyle={{
      backgroundColor: "#313131",
    }}
    drawerContentOptions={{
      activeTintColor: "white", // Text color when active
      inactiveTintColor: "black", // Text color when inactive
    }}
  >
    <Drawer.Screen name="Home" component={BottomTabNavigator} />
    <Drawer.Screen name="Settings" component={BottomTabNavigator} />
    <Drawer.Screen name="Appnavigaotor" component={AppNavigator} />
    {/* Add other screens if needed */}
  </Drawer.Navigator>
);

export default DrawerNavigator;