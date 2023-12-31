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
import { Share } from "react-native"; // Import the Share module

import SettingHeader from "../components/Settingsheader";

const { width, height } = Dimensions.get("window");

const Settings = () => {
  const onShare = async () => {
    try {
      const result = await Share.share({
        message: "Check out this awesome app!",
        // You can also include other properties like title, url, etc.
      });

      if (result.action === Share.sharedAction) {
        if (result.activityType) {
          // shared with activity type of result.activityType
        } else {
          // shared
        }
      } else if (result.action === Share.dismissedAction) {
        // dismissed
      }
    } catch (error) {
      console.error("Error sharing:", error.message);
    }
  };

  return (
    <View style={styles.container}>
      <SettingHeader />
      <ScrollView contentContainerStyle={styles.contentContainer}>
        <View style={styles.mainContent}>
          <SettingItem title="Enable Push Notification" isFirstItem />
          <AboutItem title="About" />
          <PrivacyPolicyItem title="Privacy Policy" />
          <RateItem title="Rate App" onPress={onShare} />
          <ShareItem title="Share App" onPress={onShare} />
          <MoreItem title="More App" />
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

const PrivacyPolicyItem = ({ title, isFirstItem}) => {
  return (
    <TouchableOpacity>
      <View
        style={[styles.settingItem, isFirstItem && styles.firstSettingItem]}
      >
        <Text style={styles.settingText}>{title}</Text>
      </View>
    </TouchableOpacity>
  );
};


const AboutItem = ({ title, isFirstItem}) => {
  return (
    <TouchableOpacity>
      <View
        style={[styles.settingItem, isFirstItem && styles.firstSettingItem]}
      >
        <Text style={styles.settingText}>{title}</Text>
      </View>
    </TouchableOpacity>
  );
};



const ShareItem = ({ title, isFirstItem, onPress }) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <View
        style={[styles.settingItem, isFirstItem && styles.firstSettingItem]}
      >
        <Text style={styles.settingText}>{title}</Text>
      </View>
    </TouchableOpacity>
  );
};




const RateItem = ({ title, isFirstItem, onPress }) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <View
        style={[styles.settingItem, isFirstItem && styles.firstSettingItem]}
      >
        <Text style={styles.settingText}>{title}</Text>
      </View>
    </TouchableOpacity>
  );
};

const MoreItem = ({ title, isFirstItem }) => {
  return (
    <TouchableOpacity>
      <View
        style={[styles.settingItem, isFirstItem && styles.firstSettingItem]}
      >
        <Text style={styles.settingText}>{title}</Text>
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
