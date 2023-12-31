import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  Image,
  FlatList,
} from "react-native";

import HomeHeader from "../components/Homeheader";

const { width, height } = Dimensions.get("window");

const Home = () => {
  // Dummy data for FlatList
  const sectionData = [
    { id: "1", source: require("../assets/images/One.png") },
    { id: "2", source: require("../assets/images/avenger.png") },
    { id: "3", source: require("../assets/images/Three.png") },
  ];

  const imagesData = [
    { id: "1", source: require("../assets/images/Five.png") },
    { id: "2", source: require("../assets/images/Four.png") },
  ];

  const moviesData = [
    { id: "1", source: require("../assets/images/Five.png") },
    { id: "2", source: require("../assets/images/Four.png") },
    // Add more movie images
  ];

  const renderItem = ({ item }) => (
    <View style={styles.flatListContainer}>
      <Image source={item.source} style={styles.image} />
    </View>
  );

  return (
    <View style={styles.container}>
      <HomeHeader />

      {/* FlatList for Section Data */}
      <FlatList
        data={sectionData}
        keyExtractor={(item) => item.id}
        renderItem={renderItem}
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.flatListWrapper}
      />

      {/* Title for Upcoming Movies */}
      <View style={styles.titleContainer}>
        <Text style={styles.titleText}>Upcoming Movies</Text>
      </View>

      {/* FlatList for Images Data */}
      <FlatList
        data={imagesData}
        keyExtractor={(item) => item.id}
        renderItem={renderItem}
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.flatListWrapper}
      />

      {/* Title for Upcoming Shows */}
      <View style={[styles.titleContainer, { marginTop: 0 }]}>
        <Text style={styles.titleText}>Upcoming Shows</Text>
      </View>

      {/* FlatList for Movies Data */}
      <FlatList
        data={moviesData}
        keyExtractor={(item) => item.id}
        renderItem={renderItem}
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.flatListWrapper}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "black",
  },
  flatListWrapper: {
    marginBottom: 10, // Equal gap between rows
  },
  flatListContainer: {
    marginRight: 10, // Gap between images
  },
  image: {
    width: 0.3 * width,
    height: 0.2 * height,
    resizeMode: "cover",
    borderRadius: 10,
  },
  titleContainer: {
    marginTop: 5, // Adjusted marginTop
    marginLeft: 10,
  },
  titleText: {
    fontSize: 18,
    bottom:15,
    color: "white",
    fontWeight: "bold",
  },
});

export default Home;