import React, { useEffect } from 'react';
import { View, Image, StyleSheet } from 'react-native';
import { hide } from 'react-native-bootsplash';
import { useNavigation } from '@react-navigation/native';

const SplashScreenComponent = () => {
  const navigation = useNavigation();

  useEffect(() => {
    const timer = setTimeout(() => {
      // Use the navigate method to navigate to the 'BottomTabNavigator' screen
      // Ensure 'BottomTabNavigator' is a screen in your navigation stack
      navigation.navigate('BottomTabNavigator');
    }, 5000);

    return () => clearTimeout(timer);
  }, [navigation]);

  useEffect(() => {
    hide();
  }, []);

  return (
    <View style={styles.container}>
      <Image source={require('../assets/images/splash.png')} style={styles.image} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },
});

export default SplashScreenComponent;