import React from "react";
import { View, Text, StyleSheet, ScrollView, Dimensions } from "react-native";
import { LinearGradient } from 'react-native-linear-gradient';

import Watchlist from "../components/MyWatchlistheader";

const { width, height } = Dimensions.get("window");

const Watchllist = () => {
  return (
    <View style={styles.container}>
      <Watchlist/>
      <ScrollView contentContainerStyle=
        {styles.contentContainer}>
        {/* Content of your Account page */}
        {/* Main content */}
        <View style={styles.mainContent}>
          {/* Some text */}
          <Text style={styles.someText}>You
            have to login first to see my Watchlist</Text>

          {/* Login button with gradient background */}
          <LinearGradient
            colors={['#F47126', '#e70d8d']}
            style={styles.loginButton}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 0 }}
          >
            <Text style={styles.loginButtonText}>
              LOGIN</Text>
          </LinearGradient>
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "black",
  },
  contentContainer: {
    flex: 1,
    justifyContent: "center",
    padding: 0.05 * width,
  },
  mainContent: {
    alignItems: "center",
  },
 someText: {
      fontSize: 0.02 * height,
  color: "white",
  marginBottom: 0.02 * height,
  textAlign: "center",
  width: '100%', // or use a fixed width based on your preference
   },
  loginButton: {
    borderRadius: 5,
    width: 0.3 * width,
    height: 0.06 * height,
    justifyContent: "center",
    alignItems: "center",
  },
  loginButtonText: {
    color: "white",
    fontSize: 0.02 * height,
    fontWeight:"400",
    textAlign: "center",
  },
});

export default Watchllist;