import React from "react";
import { View, Text, StyleSheet, ScrollView, Dimensions, TouchableOpacity } from "react-native";
import { LinearGradient } from 'react-native-linear-gradient';
import { useNavigation } from '@react-navigation/native';

import Header from "../components/AccountHeader";

const { width, height } = Dimensions.get("window");

const Account = () => {
  const navigation = useNavigation();

  const handleLoginPress = () => {
    // Navigate to the Login screen
    navigation.navigate('Login');
  };

  return (
    <View style={styles.container}>
      <Header />
      <ScrollView contentContainerStyle={styles.contentContainer}>
        <View style={styles.mainContent}>
          <Text style={styles.someText}>
            You have to login first to see my account
          </Text>

          <TouchableOpacity onPress={handleLoginPress}>
            <LinearGradient
              colors={['#F47126', '#e70d8d']}
              style={styles.loginButton}
              start={{ x: 0, y: 0 }}
              end={{ x: 1, y: 0 }}
            >
              <Text style={styles.loginButtonText}>
                LOGIN
              </Text>
            </LinearGradient>
          </TouchableOpacity>
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
    width: '100%',
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
    fontWeight: "400",
    textAlign: "center",
  },
});

export default Account;