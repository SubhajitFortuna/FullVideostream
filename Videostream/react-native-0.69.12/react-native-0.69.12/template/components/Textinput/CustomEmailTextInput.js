import React from "react";
import { View, TextInput, StyleSheet, Dimensions } from "react-native";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";

const { height, width } = Dimensions.get("window");

const CustomEmailTextInput = ({ placeholder, icon, secureTextEntry }) => {
  return (
    <View style={styles.inputContainer}>
      <TextInput
        style={styles.textbox}
        placeholder={placeholder}
        placeholderTextColor="#fff"
        secureTextEntry={secureTextEntry}
      />
      <View style={styles.iconContainer}>
        <Icon name={icon} size={30} color="#808080" style={styles.icon} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 0.02 * height,
    position: "relative", // To allow absolute positioning of the icon
  },
  iconContainer: {
    position: "absolute",
    left: 10, // Adjust the left value to move the icon inside the TextInput
    top: "50%", // Center the icon vertically
    transform: [{ translateY: -10 }], // Adjust translateY to center the icon vertically
  },
  icon: {
    marginRight: 10,
    top: -7,
  },
  textbox: {
     flex: 1,
    height: 0.08 * height,
    borderColor: "gray",
    paddingLeft: 50,
    paddingTop:-10,// Adjusted paddingLeft to accommodate the icon
    fontSize: 0.025 * height,
    backgroundColor: "#313746",
    borderRadius: 6,
    color: "#fff",
  },
});

export default CustomEmailTextInput;
