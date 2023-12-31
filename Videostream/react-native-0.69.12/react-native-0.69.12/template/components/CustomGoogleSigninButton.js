import React from "react";
import { View, Text, TouchableOpacity, StyleSheet, Dimensions } from "react-native";
import Icon from "react-native-vector-icons/AntDesign";

const { height, width } = Dimensions.get("window");

const CustomGoogleSigninButton = ({ onPress }) => {
  return (
    <TouchableOpacity style={styles.googleButton} onPress={onPress}>
      <View style={styles.iconContainer}>
        <Icon name="google" size={0.03 * height} color="#fff" />
      </View>
      <Text style={styles.buttonText}> Google</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  googleButton: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#F4453F",
    borderRadius: 5,
    marginTop: 0.01 * height,
    marginLeft: 0.03 * width,
    // Adjusted marginTop using percentage of height
  },
   iconContainer: {
    marginRight: 0.01 * width, // Adjusted marginLeft using percentage of width
    width: 0.06 * height,
    height: 0.07 * height,
    backgroundColor: "#B8342F",
    justifyContent: "center",
    alignItems: "center",
    right: 119,
    borderTopLeftRadius:4, 
    borderBottomLeftRadius:4, 
    
  },
  buttonText: {
    color: "#fff",
    fontSize: 0.03 * height, // Adjusted fontSize using percentage of height
    fontWeight: "400",
    right:29
  },
});

export default CustomGoogleSigninButton;