import React from 'react';
import { View, Text, StyleSheet, Image, Dimensions, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { LinearGradient } from 'react-native-linear-gradient';
import { useNavigation } from '@react-navigation/native'; // Import the useNavigation hook

const windowWidth = Dimensions.get('window').width;

const HomeHeader = () => {
  const navigation = useNavigation(); // Use the useNavigation hook to get the navigation prop

  const openDrawer = () => {
    navigation.openDrawer();
  };

  return (
    <LinearGradient
      colors={['#F26D1F', '#e70d8d']}
      style={styles.additionalHeader}
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 0 }}
    >
      <TouchableOpacity onPress={openDrawer}>
        <Image source={require('../assets/images/bar.png')} style={styles.iconImage} />
      </TouchableOpacity>
      <Text style={styles.additionalHeaderText}>Home</Text>
      <Icon name="search" size={windowWidth * 0.11} color="white" />
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  additionalHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 16,
    height: windowWidth * 0.2,
    padding: windowWidth * 0.04,
  },
  iconImage: {
    width: windowWidth * 0.1,
    height: windowWidth * 0.1,
  },
  additionalHeaderText: {
    fontSize: windowWidth * 0.06,
    color: 'white',
    flex: 1,
    textAlign: 'center',
    marginRight: windowWidth * 0.33,
  },
});

export default HomeHeader;