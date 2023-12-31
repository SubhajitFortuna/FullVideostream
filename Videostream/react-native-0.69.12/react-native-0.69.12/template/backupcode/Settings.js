import React, { useState, useRef } from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Dimensions,
  TouchableOpacity,
  Animated,
} from "react-native";
import { Switch } from "react-native-gesture-handler"; // Import Switch from gesture-handler

import SettingHeader from "../components/Settingsheader";

const { width, height } = Dimensions.get("window");

const Settings = () => {
  return (
    <View style={styles.container}>
      <SettingHeader />
      <ScrollView contentContainerStyle={styles.contentContainer}>
        <View style={styles.mainContent}>
          <SettingItem title="Enable Push Notification" isFirstItem />
          <SettingItem title="About" />
          <SettingItem title="Privacy Policy" />
          <SettingItem title="Rate App" />
          <SettingItem title="Share App" />
          <SettingItem title="More App" />
        </View>
      </ScrollView>
    </View>
  );
};

const ToggleSwitch = ({ isEnabled, onToggle }) => {
  return (
    <TouchableOpacity onPress={onToggle}>
      <View style={[styles.switch, isEnabled && styles.switchOn]}>
        <Text style={[styles.slider, isEnabled && styles.sliderOn]}></Text>
      </View>
    </TouchableOpacity>
  );
};

const SettingItem = ({ title, isFirstItem }) => {
  // State to track the enabled/disabled state of the switch
  const [isEnabled, setIsEnabled] = useState(true); // Set the initial state to true

  // Function to handle the press event of the switch
  const handleSwitchPress = () => {
    // Toggle the switch state
    setIsEnabled((previousState) => !previousState);
  };

  return (
    <TouchableOpacity onPress={handleSwitchPress}>
      <View
        style={[styles.settingItem, isFirstItem && styles.firstSettingItem]}
      >
        <Text style={styles.settingText}>{title}</Text>
        {/* Render the switch only for the first item */}
        {isFirstItem && (
          <ToggleSwitch isEnabled={isEnabled} onToggle={handleSwitchPress} />
        )}
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "black",
  },
  contentContainer: {
    justifyContent: "center",
    padding: 0.05 * width,
  },
  mainContent: {
    alignItems: "stretch",
    paddingBottom: -0.0066 * height,
    bottom: 0.021 * height,
  },
  switch: {
    position: "relative",
    width: 33,
    height: 18,
    backgroundColor: "#eee",
    borderRadius: 17,
    left: -27,
    justifyContent: "center",
    padding: 2,
  },
  switchOn: {
    backgroundColor: "#2E1325",
  },
  slider: {
    position: "absolute",
    height: 23,
    width: 23,
    left: -6,
    bottom: -2,
    backgroundColor: "white",
    borderRadius: 15,
    transition: ".4s",
  },
  sliderOn: {
    backgroundColor: "#FF0073",
    transform: [{ translateX: 26 }],
  },
  settingItem: {
    borderBottomWidth: 0.2,
    borderBottomColor: "#708090",
    paddingVertical: 0.02 * height,
    marginHorizontal: -0.05 * width,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  firstSettingItem: {
    borderTopWidth: 0.3,
    borderTopColor: "#708090",
  },
  settingText: {
    fontSize: 0.03 * height,
    color: "white",
    left: 0.05 * width,
  },
  switchContainer: {
    position: "absolute",
    right: 0,
  },
});

export default Settings;
