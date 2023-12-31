import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  Image,
  FlatList,
  ScrollView,
  ActivityIndicator,
} from "react-native";
import { useFocusEffect } from "@react-navigation/native"; 
import HomeHeader from "../components/Homeheader";

const { width, height } = Dimensions.get("window");

const Home = () => {
  const [isLoading, setIsLoading] = useState(true);

  const fetchData = () => {
    // Simulate data loading delay
    setTimeout(() => {
      setIsLoading(false);
    }, 2000); // Adjust the duration as needed
  };

 useEffect(() => {
    fetchData();
  }, []); // Fetch data on component mount

  // useFocusEffect is called every time the screen is focused
  useFocusEffect(
    React.useCallback(() => {
      // Reset isLoading to true every time the screen is focused
      setIsLoading(true);
      // Fetch data when the screen is focused
      fetchData();
    }, [])
  );


  // Dummy data for FlatList
  const sectionData = [
    { id: "1", source: require("../assets/images/One.png") },
    { id: "2", source: require("../assets/images/avenger.png") },
    { id: "3", source: require("../assets/images/Three.png") },
  ];

  const imagesData = [
    { id: "1", source: require("../assets/images/Five.png") },
    { id: "2", source: require("../assets/images/Four.png") },
    { id: "3", source: require("../assets/images/risshikesh.png") },
    { id: "4", source: require("../assets/images/Four.png") },
    { id: "5", source: require("../assets/images/Five.png") },
    { id: "6", source: require("../assets/images/Four.png") },
    { id: "7", source: require("../assets/images/Five.png") },
    { id: "8", source: require("../assets/images/Four.png") },
    { id: "9", source: require("../assets/images/Five.png") },
    { id: "10", source: require("../assets/images/Four.png") },
    { id: "11", source: require("../assets/images/Five.png") },
    { id: "12", source: require("../assets/images/Four.png") },
  ];

  const moviesData = [
    { id: "1", source: require("../assets/images/marvel.png") },
    { id: "2", source: require("../assets/images/young.png") },
    { id: "3", source: require("../assets/images/college.png") },
    { id: "4", source: require("../assets/images/ghost.png") },
    // Add more movie images
  ];

  const latestMovies = [
    { id: "1", source: require("../assets/images/brama.png") },
    { id: "2", source: require("../assets/images/Four.png") },
    { id: "3", source: require("../assets/images/Four.png") },
    { id: "4", source: require("../assets/images/Five.png") },
    { id: "5", source: require("../assets/images/Five.png") },
    { id: "6", source: require("../assets/images/Five.png") },
    { id: "7", source: require("../assets/images/Five.png") },
    { id: "8", source: require("../assets/images/Five.png") },
    { id: "9", source: require("../assets/images/Five.png") },
    { id: "10", source: require("../assets/images/Five.png") },
    { id: "11", source: require("../assets/images/Five.png") },
    // Add more movie images
  ];

  const latestshows = [
    { id: "1", source: require("../assets/images/women.png") },
    { id: "2", source: require("../assets/images/One.png") },
    { id: "3", source: require("../assets/images/Four.png") },
    { id: "4", source: require("../assets/images/Five.png") },
    { id: "5", source: require("../assets/images/Five.png") },
    { id: "6", source: require("../assets/images/Five.png") },
    { id: "7", source: require("../assets/images/Five.png") },
    { id: "8", source: require("../assets/images/Five.png") },
    { id: "9", source: require("../assets/images/Five.png") },
    { id: "10", source: require("../assets/images/Five.png") },
    { id: "11", source: require("../assets/images/Five.png") },
    // Add more movie images
  ];

  const BestinSports = [
    { id: "1", source: require("../assets/images/ten.png") },
    { id: "2", source: require("../assets/images/car.png") },
    { id: "3", source: require("../assets/images/arrow.png") },
    { id: "4", source: require("../assets/images/badminton.png") },
    { id: "5", source: require("../assets/images/football.png") },
    { id: "6", source: require("../assets/images/jockey.png") },
    // Add more movie images
  ];

  const LiveTv = [
    { id: "1", source: require("../assets/images/ajtak.png") },
    { id: "2", source: require("../assets/images/Mtv.png") },
    { id: "3", source: require("../assets/images/Four.png") },
    { id: "4", source: require("../assets/images/Five.png") },
    { id: "5", source: require("../assets/images/Five.png") },
    { id: "6", source: require("../assets/images/Five.png") },
    { id: "7", source: require("../assets/images/Five.png") },
    { id: "8", source: require("../assets/images/Five.png") },
    { id: "9", source: require("../assets/images/Five.png") },
    { id: "10", source: require("../assets/images/Five.png") },
    { id: "11", source: require("../assets/images/Five.png") },
    { id: "12", source: require("../assets/images/Five.png") },
    { id: "13", source: require("../assets/images/Five.png") },
    { id: "13", source: require("../assets/images/Five.png") },
    // Add more movie images
  ];

  const PopularMovies = [
    { id: "1", source: require("../assets/images/Five.png") },
    { id: "2", source: require("../assets/images/Four.png") },
    { id: "3", source: require("../assets/images/Four.png") },
    { id: "4", source: require("../assets/images/Five.png") },
    { id: "5", source: require("../assets/images/Five.png") },
    { id: "6", source: require("../assets/images/Five.png") },
    { id: "7", source: require("../assets/images/Five.png") },
    { id: "8", source: require("../assets/images/Five.png") },
    // Add more movie images
  ];

  const PopularShows = [
    { id: "1", source: require("../assets/images/Five.png") },
    { id: "2", source: require("../assets/images/Four.png") },
    { id: "3", source: require("../assets/images/Four.png") },
    { id: "4", source: require("../assets/images/Five.png") },
    { id: "5", source: require("../assets/images/Five.png") },
    { id: "6", source: require("../assets/images/Five.png") },
    // Add more movie images
  ];

  const renderSectionItem = ({ item }) => (
    <Image source={item.source} style={styles.sectionImage} />
  );

  const renderItem = ({ item }) => (
    <View style={styles.flatListContainer}>
      <Image source={item.source} style={styles.image} />
    </View>
  );
  
  const renderUpcomingMovies = ({ item }) => (
  <View style={styles.upcomingShowsFlatListContainer}>
    <Image source={item.source} style={styles.upcomingShowsImage} />
  </View>
    );

  const renderUpcomingShowsItem = ({ item }) => (
  <View style={styles.upcomingMoviesFlatListContainer}>
    <Image source={item.source} style={styles.upcomingMoviesImage} />
  </View>
    );


  return (
    <View style={styles.container}>
      <HomeHeader />

      {isLoading ? (
        // Display loading indicator while data is being loaded
        <View style={styles.loaderContainer}>
          <ActivityIndicator size="large" color="#e70d8d" />
        </View>
      ) : (
        <ScrollView>
          {/* Horizontal ScrollView for Section Data */}
          <View style={styles.DataWrapper}>
            <FlatList
              data={sectionData}
              keyExtractor={(item) => item.id}
              renderItem={renderSectionItem}
              horizontal
              showsHorizontalScrollIndicator={false}
            />
          </View>

          {/* Title for Upcoming Movies */}
          <View style={styles.titleContainer}>
            <Text style={styles.titleText}>Upcoming Movies</Text>
          </View>
          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={styles.thirdsectionDataWrapper}
          >
            {/* FlatList for Images Data */}
            <FlatList
              data={imagesData}
              keyExtractor={(item) => item.id}
              renderItem={renderUpcomingMovies}
              horizontal
              showsHorizontalScrollIndicator={false}
              contentContainerStyle={styles.flatListWrapper}
            />
          </ScrollView>
          {/* Title for Upcoming Shows */}
          <View style={[styles.titleContainer, { marginTop: 0 }]}>
            <Text style={styles.titleText}>Upcoming Shows</Text>
          </View>
          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={styles.sectionDataWrapper}
          >
            {/* FlatList for Movies Data */}
            <FlatList
              data={moviesData}
              keyExtractor={(item) => item.id}
              renderItem={renderUpcomingShowsItem}
              horizontal
              showsHorizontalScrollIndicator={false}
              contentContainerStyle={styles.flatListWrapper}
            />
          </ScrollView>
          {/* Title for Latest Movies */}

          <View style={[styles.titleContainer, { marginTop: 0 }]}>
            <Text style={styles.titleText}>Latest Movies</Text>
          </View>
          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={styles.sectionDataWrapper}
          >
            {/* FlatList for Movies Data */}
            <FlatList
              data={latestMovies}
              keyExtractor={(item) => item.id}
              renderItem={renderUpcomingMovies}
              horizontal
              showsHorizontalScrollIndicator={false}
              contentContainerStyle={styles.flatListWrapper}
            />
          </ScrollView>
          <View style={[styles.titleContainer, { marginTop: 0 }]}>
            <Text style={styles.titleText}>Latest Shows</Text>
          </View>
          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={styles.sectionDataWrapper}
          >
            {/* FlatList for Movies Data */}
            <FlatList
              data={latestshows}
              keyExtractor={(item) => item.id}
              renderItem={renderUpcomingShowsItem}
              horizontal
              showsHorizontalScrollIndicator={false}
              contentContainerStyle={styles.flatListWrapper}
            />
          </ScrollView>
          <View style={[styles.titleContainer, { marginTop: 0 }]}>
            <Text style={styles.titleText}>Best in Sports</Text>
          </View>
          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={styles.sectionDataWrapper}
          >
            {/* FlatList for Movies Data */}
            <FlatList
              data={BestinSports}
              keyExtractor={(item) => item.id}
              renderItem={renderUpcomingShowsItem}
              horizontal
              showsHorizontalScrollIndicator={false}
              contentContainerStyle={styles.flatListWrapper}
            />
          </ScrollView>
          <View style={[styles.titleContainer, { marginTop: 0 }]}>
            <Text style={styles.titleText}>Live TV</Text>
          </View>
          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={styles.sectionDataWrapper}
          >
            {/* FlatList for Movies Data */}
            <FlatList
              data={LiveTv}
              keyExtractor={(item) => item.id}
              renderItem={renderUpcomingShowsItem}
              horizontal
              showsHorizontalScrollIndicator={false}
              contentContainerStyle={styles.flatListWrapper}
            />
          </ScrollView>
          <View style={[styles.titleContainer, { marginTop: 0 }]}>
            <Text style={styles.titleText}>Popular Movies</Text>
          </View>
          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={styles.sectionDataWrapper}
          >
            {/* FlatList for Movies Data */}
            <FlatList
              data={PopularMovies}
              keyExtractor={(item) => item.id}
              renderItem={renderUpcomingMovies}
              horizontal
              showsHorizontalScrollIndicator={false}
              contentContainerStyle={styles.flatListWrapper}
            />
          </ScrollView>
          <View style={[styles.titleContainer, { marginTop: 0 }]}>
            <Text style={styles.titleText}>Popular Shows</Text>
          </View>
          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={styles.sectionDataWrapper}
          >
            {/* FlatList for Movies Data */}
            <FlatList
              data={PopularShows}
              keyExtractor={(item) => item.id}
              renderItem={renderUpcomingShowsItem}
              horizontal
              showsHorizontalScrollIndicator={false}
              contentContainerStyle={styles.flatListWrapper}
            />
          </ScrollView>
        </ScrollView>
      )} 
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "black",
  },
  DataWrapper: {
    marginBottom: 11,
    marginLeft: 10,
    backgroundColor: "red",
    width: width,
    height: 0.25 * height,
  },
   upcomingShowsFlatListContainer: {
    marginRight: 10,
  },
  upcomingShowsImage: {
    width: 0.4 * width, // Adjust the width as needed
    height: 0.3 * height,
    resizeMode: "cover",
    borderRadius: 7,
  },
   upcomingMoviesFlatListContainer: {
    marginRight: 10,
  },
  upcomingMoviesImage: {
    width: 0.6 * width, // Adjust the width as needed
    height: 0.2 * height,
    resizeMode: "cover",
    borderRadius: 7,
  },
   thirdsectionDataWrapper: {
    marginTop: 1,
     marginLeft: 10,
  },
   loaderContainer: {
    flex: 1,
    justifyContent: "center",
     alignItems: "center",
     width: 0.99 * width,
    height: 0.25 * height,
  },
  sectionDataWrapper: {
    marginTop: 1,
    marginLeft: 10,
  },
  sectionImage: {
    width: 0.99 * width,
    height: 0.25 * height,
    resizeMode: "cover",
    borderRadius: 10,
    marginRight: 10,
  },
  flatListWrapper: {
    marginBottom: 10,
  },
  flatListContainer: {
    marginRight: 10,
  },
  image: {
    width: 0.3 * width,
    height: 0.2 * height,
    resizeMode: "cover",
    borderRadius: 10,
  },
  titleContainer: {
    marginTop: 24,
    marginLeft: 10,
  },
  titleText: {
    fontSize: 18,
    bottom: 8,
    color: "white",
    fontWeight: "bold",
  },
});

export default Home;
