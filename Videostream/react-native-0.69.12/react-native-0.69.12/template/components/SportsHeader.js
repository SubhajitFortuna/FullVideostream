import React from "react";
import { View, Text, StyleSheet, Image, Dimensions } from "react-native";
import Icon from "react-native-vector-icons/MaterialIcons";
import { LinearGradient } from 'react-native-linear-gradient';

const windowWidth = Dimensions.get('window').width;

const Sportsheader = () => {
  return (
    <LinearGradient
      colors={['#F26D1F', '#e70d8d']}
      style={styles.additionalHeader}
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 0 }}
    >
      <Image
        source={require('../assets/images/bar.png')}
        style={styles.iconImage}
      />
      <Text style={styles.additionalHeaderText}>Sports</Text>
      <Icon name="search" size={windowWidth * 0.11} color="white" />
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  additionalHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 16,
    height: windowWidth * 0.2, // Adjusted height based on the screen width
    padding: windowWidth * 0.04, // Adjusted padding based on the screen width
  },
  iconImage: {
    width: windowWidth * 0.1, // Adjusted width based on the screen width
    height: windowWidth * 0.1, // Adjusted height based on the screen width
  },
  additionalHeaderText: {
    fontSize: windowWidth * 0.06, // Adjusted font size based on the screen width
    color: "white",
    flex: 1,
    textAlign: "center",
    marginRight: windowWidth * 0.33, // Adjusted margin based on the screen width
  },
});

export default Sportsheader;